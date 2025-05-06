import { FastifyInstance } from "fastify";
import fastifyMultipart from "@fastify/multipart";
import { extractTextFromPdf } from "../services/pdfTextExtractor";
import { TECHNICAL_SKILLS } from "@jobscan/shared/src/constants/skills";

export async function profileRoute(app: FastifyInstance) {
  app.register(fastifyMultipart);

  app.post("/profile/upload-cv", async (request, reply) => {
    const data = await request.file();
    if (!data) return reply.code(400).send({ error: "Aucun fichier reçu" });
    const buffer = await data.toBuffer();
    const text = await extractTextFromPdf(buffer);
    // Corrige les textes OCR fragmentés (ex: L i n u x -> Linux)
    const defragText = text.replace(
      /([A-Za-zÀ-ÿ])(?:\s+([A-Za-zÀ-ÿ])){2,}/g,
      (frag) => frag.replace(/\s+/g, "")
    );
    // Ajoute un espace avant chaque majuscule qui suit une minuscule ou un chiffre
    let spacedText = defragText.replace(/([a-z0-9])([A-ZÀ-ÿ])/g, "$1 $2");
    // Ajoute un espace après chaque slash ou séparateur
    spacedText = spacedText.replace(
      /([a-zA-ZÀ-ÿ])([/|,])([a-zA-ZÀ-ÿ])/g,
      "$1 $2$3"
    );
    // Log du texte extrait pour debug
    console.log("[JobScan] Texte extrait du CV:", spacedText);
    // Nettoyage du texte : retire la ponctuation, parenthèses, etc. et ajoute des espaces autour
    const normalizedText = spacedText
      .toLowerCase()
      .replace(/[()\[\]{}.,;:!\?\-_/\\]/g, " ") // remplace ponctuation par espace
      .replace(/\s+/g, " "); // remplace les espaces multiples par un seul
    // Liste noire de mots à ignorer (sections, abréviations non techniques)
    const blacklist = [
      "con",
      "comp",
      "cen",
      "langues",
      "langue",
      "exp",
      "expériences",
      "formation",
      "profil",
      "contact",
      "centre",
      "centres",
      "loisirs",
      "divers",
      "autres",
      "projet",
      "projets",
      "stage",
      "stages",
      "année",
      "années",
      "mois",
      "jours",
      "jour",
    ];
    // Recherche chaque compétence dans le texte, stricte pour les très courtes
    const skillCandidates = Array.from(
      new Set(
        TECHNICAL_SKILLS.filter((skill) => {
          const s = skill.toLowerCase();
          if (blacklist.includes(s)) return false;
          if (s.length <= 2) return false;
          // Cherche la compétence comme mot entier (\b...\b)
          const regex = new RegExp(
            `\\b${s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
            "i"
          );
          return regex.test(normalizedText);
        })
      )
    );
    // Extraction dynamique des compétences à partir des sections du CV
    const dynamicSkills: string[] = [];
    // Recherche des sections pertinentes
    const sectionRegex =
      /(comp[eé]tences?|skills?|syst[èe]mes? ?&? ?langages?|virtualisation|conteneurisation|infrastructure|cloud|certifications?)/i;
    const stopSectionRegex =
      /(exp[ée]rience|dipl[oô]me|formation|projet|parcours|baccalaur[ée]at|contact|centre d'?int[ée]r[êe]t|loisir|hobby|int[ée]r[êe]ts?)/i;
    const lines = spacedText.split(/\n|\r|\.|;/);
    let inSkillsSection = false;
    for (let line of lines) {
      line = line.trim();
      if (sectionRegex.test(line)) {
        inSkillsSection = true;
        continue;
      }
      if (inSkillsSection) {
        // Arrête la collecte si on tombe sur une ligne vide ou une nouvelle section
        if (!line || stopSectionRegex.test(line)) break;
        // Découpe la ligne en compétences potentielles
        const items = line
          .split(/,|·|•|\||\//)
          .map((s) => s.trim())
          .filter(Boolean);
        for (const item of items) {
          // Filtre : max 5 mots, max 40 caractères, pas d'adresse/email, pas de phrase
          if (item.length < 3) continue;
          if (item.split(" ").length > 5) continue;
          if (/\S+@\S+|http|www\.|[0-9]{2,}/i.test(item)) continue;
          // Exclut les items sans lettre ou sans majuscule (hors liste statique)
          if (!/[A-Za-zÀ-ÿ]/.test(item)) continue;
          if (!TECHNICAL_SKILLS.includes(item) && !/[A-Z]/.test(item)) continue;
          // Exclut les items trop courts hors liste statique
          if (!TECHNICAL_SKILLS.includes(item) && item.length < 4) continue;
          // Exclut les items avec trop de caractères spéciaux
          if (/[^\wÀ-ÿ .\-]/.test(item) && !TECHNICAL_SKILLS.includes(item))
            continue;
          dynamicSkills.push(item);
        }
      }
    }
    // Nettoie et déduplique, puis filtre pour ne garder que les compétences techniques
    const allSkills = Array.from(
      new Set([...skillCandidates, ...dynamicSkills])
    ).filter((skill) => TECHNICAL_SKILLS.includes(skill));
    return { skills: allSkills };
  });
}
