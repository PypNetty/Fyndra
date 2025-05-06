import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { analyzeRoute } from "./routes/analyze";
import { configureLogger } from "./config/logger";
import { authRoute } from "./routes/auth";
import { offersRoute } from "./routes/offers";
import { profileRoute } from "./routes/profile";

async function start() {
  const app: FastifyInstance = Fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: true,
  });

  // Enregistrement des routes (décommente celles que tu veux activer)
  await analyzeRoute(app);
  await authRoute(app);
  await offersRoute(app);
  await profileRoute(app);

  app.get("/health", async () => {
    return { status: "ok" };
  });

  app.get("/", async () => {
    return { message: "Bienvenue sur l'API JobScan" };
  });

  try {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    await app.listen({ port, host: "0.0.0.0" });
    console.log(`🚀 Serveur démarré sur le port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
