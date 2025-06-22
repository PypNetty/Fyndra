import { awsQuestions, awsCourses, awsVMs } from "./AWS";

export const cloudTechnologies = {
  AWS: {
    name: "Amazon Web Services",
    description: "Plateforme de services cloud d'Amazon",
    questionnaire: awsQuestions,
    cours: awsCourses,
    vm: awsVMs,
  },
  // Azure: ... (à ajouter plus tard)
};
