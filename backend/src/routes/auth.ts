import { FastifyInstance } from "fastify";
import pino from "pino";
import { z } from "zod";
import { PrismaClient } from "../generated/prisma";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export async function authRoute(app: FastifyInstance) {
  app.post("/login", async (request, reply) => {
    try {
      const data = loginSchema.parse(request.body);
      console.log("Tentative de connexion:", data);
      // Recherche l'utilisateur dans la base
      const user = await prisma.user.findUnique({
        where: { email: data.email },
      });
      console.log("Utilisateur trouvé:", user);
      if (!user || user.password !== data.password) {
        console.log("Mot de passe incorrect ou utilisateur non trouvé");
        return reply.code(400).send({ error: "Identifiants invalides" });
      }
      // Générer un token JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }
      );
      return { name: user.name, email: user.email, token };
    } catch (error) {
      console.log("Erreur lors de la connexion:", error);
      return reply.code(400).send({ error: "Identifiants invalides" });
    }
  });
}
