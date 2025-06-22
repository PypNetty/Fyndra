import { dockerQuestions, dockerCourses, dockerVMs } from "./Docker";
import {
  terraformQuestions,
  terraformCourses,
  terraformVMs,
} from "./Terraform";

export const infrastructureTechnologies = {
  name: "Infrastructure",
  description: "Outils de conteneurisation et Infrastructure as Code",
  technologies: {
    Docker: {
      name: "Docker",
      description: "Plateforme de conteneurisation d'applications",
      difficulty: "Intermédiaire",
      questionnaire: dockerQuestions,
      cours: dockerCourses,
      vm: dockerVMs,
    },
    Terraform: {
      name: "Terraform",
      description: "Outil d'Infrastructure as Code",
      difficulty: "Avancé",
      questionnaire: terraformQuestions,
      cours: terraformCourses,
      vm: terraformVMs,
    },
  },
};
