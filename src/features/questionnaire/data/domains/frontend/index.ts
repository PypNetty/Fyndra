import { reactQuestions } from "./react";
import { QuestionnaireConfig } from "../../types";

export const frontendQuestionnaire: QuestionnaireConfig = {
  title: "Évaluation React & Frontend",
  description: "Testez vos connaissances en développement frontend avec React",
  passingScore: 70,
  questions: [...reactQuestions],
};
