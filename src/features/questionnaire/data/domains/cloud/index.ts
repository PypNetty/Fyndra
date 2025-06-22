import { QuestionnaireConfig } from "../../../types";
import { awsQuestions } from "./aws";

export const awsQuestionnaire: QuestionnaireConfig = {
  title: "Évaluation AWS & Cloud",
  description: "Testez vos connaissances en cloud computing avec AWS",
  passingScore: 70,
  questions: awsQuestions,
};
