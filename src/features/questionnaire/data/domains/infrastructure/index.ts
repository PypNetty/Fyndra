import { dockerQuestions } from "./docker";
import { terraformQuestions } from "./terraform";
import { QuestionnaireConfig } from "../../types";

export const dockerQuestionnaire: QuestionnaireConfig = {
  title: "Évaluation Docker & Conteneurisation",
  description: "Testez vos connaissances en conteneurisation avec Docker",
  passingScore: 70,
  questions: [...dockerQuestions],
};

export const terraformQuestionnaire: QuestionnaireConfig = {
  title: "Évaluation Terraform & Infrastructure as Code",
  description:
    "Testez vos connaissances en Infrastructure as Code avec Terraform",
  passingScore: 70,
  questions: [...terraformQuestions],
};
