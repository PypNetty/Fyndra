import { FastifyInstance } from "fastify";
import pino from "pino";
import { z } from "zod";
import { PrismaClient } from "../generated/prisma";
import jwt from "jsonwebtoken";
import { TECHNICAL_SKILLS } from "@jobscan/shared/src/constants/skills";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

const offerSchema = z.object({
  title: z.string(),
  location: z.string(),
  company: z.string().optional(),
  score: z.number().optional(),
  alerts: z.string().optional(),
  status: z.string().optional(),
  email: z.string().email(), // pour lier à l'utilisateur
  url: z.string(),
  source: z.string(),
  contractType: z.string().optional(),
  salary: z.string().optional(),
  description: z.string().optional(), // Ajout de la description
});

function verifyToken(request: any, reply: any) {
  const auth = request.headers["authorization"];
  if (!auth || !auth.startsWith("Bearer ")) {
    reply.code(401).send({ error: "Token manquant" });
    return null;
  }
  try {
    const token = auth.split(" ")[1];
    return jwt.verify(token, JWT_SECRET);
  } catch {
    reply.code(401).send({ error: "Token invalide" });
    return null;
  }
}

export async function offersRoute(app: FastifyInstance) {
  // Ajouter une offre partagée
  app.post("/offers", async (request, reply) => {
    const payload = verifyToken(request, reply);
    if (!payload) return;

    try {
      const data = offerSchema.parse(request.body);
      const user = await prisma.user.findUnique({
        where: { email: data.email },
      });
      if (!user) return reply.code(401).send({ error: "Utilisateur inconnu" });

      // Extraction automatique des compétences requises depuis le titre, la description, etc.
      const offerText = `${data.title} ${data.contractType || ""} ${
        data.company || ""
      } ${data.source || ""} ${data.description || ""}`.toLowerCase();
      const skills = TECHNICAL_SKILLS.filter((skill) =>
        offerText.includes(skill.toLowerCase())
      );
      const skillsText = skills.join(",");

      // Extraction dynamique des compétences demandées dans l'offre (affinée pour ne prendre que les compétences techniques)
      let skillsDynamic: string[] = [];
      if (data.description) {
        // Découpage pour trouver la section compétences
        const desc = data.description.replace(/\r/g, "\n");
        const sectionRegex =
          /(comp[eé]tences?\s*(techniques?|requises?)?|skills?|vos compétences|skills required|requirements?|profil recherché)/i;
        const lines = desc.split(/\n|\.|;/);
        let inSkillsSection = false;
        for (let line of lines) {
          line = line.trim();
          if (sectionRegex.test(line)) {
            inSkillsSection = true;
            continue;
          }
          if (inSkillsSection) {
            // Arrête la collecte si on tombe sur une ligne vide ou une nouvelle section
            if (
              !line ||
              /^(exp[ée]rience|dipl[oô]me|formation|projet|parcours|baccalaur[ée]at|contact|centre d'?int[ée]r[êe]t|loisir|hobby|int[ée]r[êe]ts?)/i.test(
                line
              )
            )
              break;
            // Découpe la ligne en compétences potentielles
            const items = line
              .split(/,|·|•|\||\//)
              .map((s) => s.trim())
              .filter(Boolean);
            for (const item of items) {
              // Filtre : doit contenir au moins une compétence technique connue
              const isTech = TECHNICAL_SKILLS.some((skill) =>
                item.toLowerCase().includes(skill.toLowerCase())
              );
              if (!isTech) continue;
              if (item.length < 2) continue;
              if (item.split(" ").length > 8) continue;
              if (/\S+@\S+|http|www\.|[0-9]{4,}/i.test(item)) continue;
              skillsDynamic.push(item);
            }
          }
        }
      }
      const skillsDynamicText = skillsDynamic.join(",");

      console.log("[JobScan] Description reçue:", data.description);
      console.log("[JobScan] Compétences extraites:", skills);
      console.log("[JobScan] skillsText:", skillsText);
      console.log("[JobScan] skillsDynamicText:", skillsDynamicText);

      const offer = await prisma.jobOffer.create({
        data: {
          title: data.title,
          location: data.location,
          company: data.company,
          score: data.score,
          alerts: data.alerts,
          status: data.status || "shared",
          url: data.url,
          source: data.source,
          contractType: data.contractType,
          salary: data.salary,
          userId: user.id,
          skills: {
            connectOrCreate: skills.map((skillName) => ({
              where: { name: skillName },
              create: { name: skillName },
            })),
          },
          skillsText,
          // Ajoute la liste dynamique extraite
          skillsDynamicText,
        },
      });
      return offer;
    } catch (error) {
      console.error("Erreur POST /offers:", error);
      return reply
        .code(400)
        .send({ error: "Erreur lors de l'ajout de l'offre", details: error });
    }
  });

  // Récupérer les offres de l'utilisateur
  app.get("/offers", async (request, reply) => {
    const payload = verifyToken(request, reply);
    if (!payload) return;

    const email = (request.query as any).email;
    if (!email) return reply.code(400).send({ error: "Email requis" });
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return reply.code(401).send({ error: "Utilisateur inconnu" });
    const offers = await prisma.jobOffer.findMany({
      where: { userId: user.id },
    });
    return offers;
  });

  // Modifier le statut d'une offre (rejetée, partagée, etc.)
  app.patch("/offers/:id", async (request, reply) => {
    const payload = verifyToken(request, reply);
    if (!payload) return;

    const id = Number((request.params as any).id);
    const { status } = request.body as { status: string };
    if (!id || !status)
      return reply.code(400).send({ error: "ID et statut requis" });
    try {
      const offer = await prisma.jobOffer.update({
        where: { id },
        data: { status },
      });
      return offer;
    } catch (e) {
      return reply.code(404).send({ error: "Offre non trouvée" });
    }
  });

  // Supprimer une offre
  app.delete("/offers/:id", async (request, reply) => {
    const payload = verifyToken(request, reply);
    if (!payload) return;

    const id = Number((request.params as any).id);
    if (!id) return reply.code(400).send({ error: "ID requis" });
    try {
      await prisma.jobOffer.delete({ where: { id } });
      return { success: true };
    } catch (e) {
      return reply.code(404).send({ error: "Offre non trouvée" });
    }
  });
}
