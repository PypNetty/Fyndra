import { FastifyInstance } from "fastify"; // <-- Supprime IncomingMessage, ServerResponse d'ici
import { IncomingMessage, ServerResponse } from "http"; // <-- Ajoute cet import
import pino from "pino";
import { z } from "zod";

import { analyzeJobOffer } from "../core/analyzer";
import { rules } from "../rules/base_rules";

// Schéma de validation avec Zod
const analyzeSchema = z.object({
  url: z.string().url(),
  platform: z.string(),
  title: z.string().optional(),
  company: z.string().optional(),

  description: z.string(),
});

// Route Fastify typée avec PinoLogger
export async function analyzeRoute(app: FastifyInstance) {
  app.post(
    "/analyze",
    {
      schema: {
        body: {
          type: "object",
          required: ["url", "platform", "description"],
          properties: {
            url: { type: "string" },
            platform: { type: "string" },
            title: { type: "string" },
            company: { type: "string" },
            description: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      try {
        request.log.info("Analyse demandée");

        // Validation avec Zod
        const data = analyzeSchema.parse(request.body);

        const jobOffer = {
          url: data.url,
          platform: data.platform,
          title: data.title,
          company: data.company,
          description: data.description,
          extractedAt: new Date(),
          analyzedAt: new Date(),
        };

        const alerts = analyzeJobOffer(jobOffer, rules);

        return {
          success: true,
          jobOffer: {
            ...jobOffer,
            alerts,
          },
        };
      } catch (error) {
        request.log.error(error, "Erreur pendant l'analyse");

        return reply.code(400).send({
          success: false,
          error:
            error instanceof z.ZodError
              ? error.errors
              : "Une erreur est survenue lors de l'analyse",
        });
      }
    }
  );
}
