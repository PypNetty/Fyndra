import { nodejsQuestions } from "./nodejs";
import { QuestionnaireConfig } from "../../types";

export const backendQuestionnaire: QuestionnaireConfig = {
  title: "Évaluation Backend & API",
  description: "Testez vos connaissances en développement backend avec Node.js",
  passingScore: 70,
  questions: [...nodejsQuestions],
};
