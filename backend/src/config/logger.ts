import { pino } from "pino"; // Correct

export function configureLogger() {
  return pino({
    // Correct, retourne une instance de type pino.Logger
    level: process.env.LOG_LEVEL || "info",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  });
}
