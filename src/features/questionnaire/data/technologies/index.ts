import { frontTechnologies } from "./Front";
import { backTechnologies } from "./Back";
import { cloudTechnologies } from "./Cloud";
import { infrastructureTechnologies } from "./Infrastructure";
import { TechnologyCategory } from "../../types";

// Export des questions par technologie pour la compatibilité
export { reactQuestions } from "./Front/React";
export { nodejsQuestions } from "./Back/Node.js";
export { awsQuestions } from "./Cloud/AWS";
export { dockerQuestions } from "./Infrastructure/Docker";
export { terraformQuestions } from "./Infrastructure/Terraform";

// Structure organisée par technologies
export const technologyBasedData = {
  Front: frontTechnologies,
  Back: backTechnologies,
  Cloud: cloudTechnologies,
  Infrastructure: infrastructureTechnologies,
};

// Regroupement de toutes les questions pour compatibilité avec l'ancien système
export const allQuestions = [
  ...frontTechnologies.React.questionnaire,
  ...backTechnologies["Node.js"].questionnaire,
  ...cloudTechnologies.AWS.questionnaire,
  ...infrastructureTechnologies.Docker.questionnaire,
  ...infrastructureTechnologies.Terraform.questionnaire,
];

// Configuration des catégories de technologies
export const technologyCategories: TechnologyCategory[] = [
  {
    id: "front",
    name: "Frontend",
    description: "Technologies et frameworks pour le développement frontend",
    icon: "🎨",
    technologies: Object.keys(frontTechnologies),
  },
  {
    id: "back",
    name: "Backend",
    description: "Technologies et frameworks pour le développement backend",
    icon: "⚙️",
    technologies: Object.keys(backTechnologies),
  },
  {
    id: "cloud",
    name: "Cloud",
    description: "Plateformes et services cloud",
    icon: "☁️",
    technologies: Object.keys(cloudTechnologies),
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    description: "Outils de conteneurisation et Infrastructure as Code",
    icon: "🏗️",
    technologies: Object.keys(infrastructureTechnologies),
  },
];
