import { QuestionnaireData } from "../types";
// Import de l'ancienne structure (domains) pour la compatibilité
import { frontendQuestionnaire } from "./domains/frontend";
import { backendQuestionnaire } from "./domains/backend";
import {
  dockerQuestionnaire,
  terraformQuestionnaire,
} from "./domains/infrastructure";
import { awsQuestionnaire } from "./domains/cloud";

// Import de la nouvelle structure (technologies)
export {
  technologyBasedData,
  technologyCategories,
  allQuestions,
  reactQuestions,
  nodejsQuestions,
  awsQuestions,
  dockerQuestions,
  terraformQuestions,
} from "./technologies";

// Maintien de la compatibilité avec l'ancienne structure
export const questionnaireData: QuestionnaireData = {
  "dev-frontend": frontendQuestionnaire,
  "dev-backend": backendQuestionnaire,
  "dev-infrastructure-docker": dockerQuestionnaire,
  "dev-infrastructure-terraform": terraformQuestionnaire,
  "dev-cloud-aws": awsQuestionnaire,
};
