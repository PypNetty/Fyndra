import { dockerQuestions, dockerCourses, dockerVMs } from "./Docker";
import {
  terraformQuestions,
  terraformCourses,
  terraformVMs,
} from "./Terraform";

export const infrastructureTechnologies = {
  Docker: {
    name: "Docker",
    description: "Plateforme de conteneurisation d'applications",
    questionnaire: dockerQuestions,
    cours: dockerCourses,
    vm: dockerVMs,
  },
  Terraform: {
    name: "Terraform",
    description: "Outil d'Infrastructure as Code",
    questionnaire: terraformQuestions,
    cours: terraformCourses,
    vm: terraformVMs,
  },
};
