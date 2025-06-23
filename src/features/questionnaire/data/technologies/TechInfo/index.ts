import { sécuritéQuestions, sécuritéCourses, sécuritéVMs } from "./Sécurité";

export const cybersécuritéTechnologies = {
  name: "Cybersécurité",
  description:
    "Sécurité informatique, cryptographie et protection des systèmes",
  technologies: {
    Sécurité: {
      name: "Sécurité Informatique",
      description: "Cybersécurité, cryptographie et protection des systèmes",
      difficulty: "Intermédiaire",
      questionnaire: sécuritéQuestions,
      cours: sécuritéCourses,
      vm: sécuritéVMs,
    },
  },
};
