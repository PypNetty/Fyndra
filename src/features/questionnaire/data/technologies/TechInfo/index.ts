import { sécuritéQuestions, sécuritéCourses, sécuritéVMs } from "./Sécurité";

export const techInfoTechnologies = {
  name: "Tech Info",
  description: "Technologies de l'information et cybersécurité",
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
