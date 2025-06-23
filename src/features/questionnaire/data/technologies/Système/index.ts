import { linuxQuestions, linuxCourses, linuxVMs } from "./Linux";

export const systèmeTechnologies = {
  name: "Système",
  description: "Administration système et environnements Linux/Unix",
  technologies: {
    Linux: {
      name: "Linux",
      description: "Système d'exploitation Linux et administration système",
      difficulty: "Intermédiaire",
      questionnaire: linuxQuestions,
      cours: linuxCourses,
      vm: linuxVMs,
    },
  },
};
