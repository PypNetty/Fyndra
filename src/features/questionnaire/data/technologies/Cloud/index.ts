import { awsQuestions, awsCourses, awsVMs } from "./AWS";

export const cloudTechnologies = {
  name: "Cloud",
  description: "Plateformes et services cloud computing",
  technologies: {
    AWS: {
      name: "Amazon Web Services",
      description: "Plateforme de services cloud d'Amazon",
      difficulty: "Avancé",
      questionnaire: awsQuestions,
      cours: awsCourses,
      vm: awsVMs,
    },
    // Azure: ... (à ajouter plus tard)
  },
};
