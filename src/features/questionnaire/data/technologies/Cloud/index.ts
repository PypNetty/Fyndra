import { awsQuestions, awsCourses, awsVMs } from "./AWS";
import { azureQuestions, azureCourses, azureVMs } from "./Azure";

export const cloudTechnologies = {
  name: "Cloud",
  description: "Plateformes et services cloud",
  technologies: {
    AWS: {
      name: "Amazon Web Services",
      description: "Plateforme de cloud computing d'Amazon",
      difficulty: "Avancé",
      questionnaire: awsQuestions,
      cours: awsCourses,
      vm: awsVMs,
    },
    Azure: {
      name: "Microsoft Azure",
      description: "Plateforme de cloud computing de Microsoft",
      difficulty: "Avancé",
      questionnaire: azureQuestions,
      cours: azureCourses,
      vm: azureVMs,
    },
  },
};
