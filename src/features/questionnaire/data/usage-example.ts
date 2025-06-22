// Exemple d'utilisation de la nouvelle structure basée sur les technologies

import {
  technologyBasedData,
  technologyCategories,
  allQuestions,
  reactQuestions,
  nodejsQuestions,
} from "../data";

// Exemple 1: Accéder aux questions par technologie
console.log("Questions React:", reactQuestions);
console.log("Questions Node.js:", nodejsQuestions);

// Exemple 2: Parcourir toutes les catégories de technologies
technologyCategories.forEach((category) => {
  console.log(`Catégorie: ${category.name} ${category.icon}`);
  console.log(`Description: ${category.description}`);
  console.log(`Technologies: ${category.technologies.join(", ")}`);
});

// Exemple 3: Accéder à une technologie spécifique
const reactTech = technologyBasedData.Front.React;
console.log(`${reactTech.name}: ${reactTech.description}`);
console.log(`Nombre de questions: ${reactTech.questionnaire.length}`);

// Exemple 4: Obtenir toutes les questions d'une catégorie
const frontendQuestions = Object.values(technologyBasedData.Front).flatMap(
  (tech) => tech.questionnaire
);

// Exemple 5: Filtrer par difficulté
const easyQuestions = allQuestions.filter((q) => q.difficulty === "easy");
const hardQuestions = allQuestions.filter((q) => q.difficulty === "hard");

console.log(`Questions faciles: ${easyQuestions.length}`);
console.log(`Questions difficiles: ${hardQuestions.length}`);

export {};
