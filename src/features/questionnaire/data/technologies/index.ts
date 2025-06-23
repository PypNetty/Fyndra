import { frontTechnologies } from "./Front";
import { backTechnologies } from "./Back";
import { cloudTechnologies } from "./Cloud";
import { infrastructureTechnologies } from "./Infrastructure";
import { techInfoTechnologies } from "./TechInfo";
import { systèmeTechnologies } from "./Système";
import { réseauxTechnologies } from "./Réseaux";
import { TechnologyCategory } from "../../types";

// Export des questions par technologie pour la compatibilité
export { reactQuestions } from "./Front/React";
export { vueQuestions } from "./Front/Vue";
export { nodejsQuestions } from "./Back/Node.js";
export { pythonQuestions } from "./Back/Python";
export { awsQuestions } from "./Cloud/AWS";
export { azureQuestions } from "./Cloud/Azure";
export { dockerQuestions } from "./Infrastructure/Docker";
export { terraformQuestions } from "./Infrastructure/Terraform";
export { sécuritéQuestions } from "./TechInfo/Sécurité";
export { linuxQuestions } from "./Système/Linux";
export { tcpipQuestions } from "./Réseaux/TCP-IP";

// Structure organisée par technologies
export const technologyBasedData = {
  Front: frontTechnologies,
  Back: backTechnologies,
  Cloud: cloudTechnologies,
  Infrastructure: infrastructureTechnologies,
  "Tech Info": techInfoTechnologies,
  Système: systèmeTechnologies,
  Réseaux: réseauxTechnologies,
};

// Regroupement de toutes les questions pour compatibilité avec l'ancien système
export const allQuestions = [
  ...frontTechnologies.technologies.React.questionnaire,
  ...frontTechnologies.technologies.Vue.questionnaire,
  ...backTechnologies.technologies["Node.js"].questionnaire,
  ...backTechnologies.technologies.Python.questionnaire,
  ...cloudTechnologies.technologies.AWS.questionnaire,
  ...cloudTechnologies.technologies.Azure.questionnaire,
  ...infrastructureTechnologies.technologies.Docker.questionnaire,
  ...infrastructureTechnologies.technologies.Terraform.questionnaire,
  ...techInfoTechnologies.technologies["Sécurité"].questionnaire,
  ...systèmeTechnologies.technologies["Linux"].questionnaire,
  ...réseauxTechnologies.technologies["TCP/IP"].questionnaire,
];

// Configuration des catégories de technologies
export const technologyCategories: TechnologyCategory[] = [
  {
    id: "front",
    name: "Frontend",
    description: "Technologies et frameworks pour le développement frontend",
    icon: "🎨",
    technologies: Object.keys(frontTechnologies.technologies),
  },
  {
    id: "back",
    name: "Backend",
    description: "Technologies et frameworks pour le développement backend",
    icon: "⚙️",
    technologies: Object.keys(backTechnologies.technologies),
  },
  {
    id: "cloud",
    name: "Cloud",
    description: "Plateformes et services cloud",
    icon: "☁️",
    technologies: Object.keys(cloudTechnologies.technologies),
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    description: "Outils de conteneurisation et Infrastructure as Code",
    icon: "🏗️",
    technologies: Object.keys(infrastructureTechnologies.technologies),
  },
  {
    id: "techinfo",
    name: "Tech Info",
    description: "Technologies de l'information et cybersécurité",
    icon: "🔒",
    technologies: Object.keys(techInfoTechnologies.technologies),
  },
  {
    id: "système",
    name: "Système",
    description: "Administration système et environnements Linux/Unix",
    icon: "🖥️",
    technologies: Object.keys(systèmeTechnologies.technologies),
  },
  {
    id: "réseaux",
    name: "Réseaux",
    description: "Protocoles réseau, administration et sécurité",
    icon: "🌐",
    technologies: Object.keys(réseauxTechnologies.technologies),
  },
];
