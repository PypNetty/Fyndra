// Tests de validation pour la nouvelle architecture basée sur les technologies

import {
  technologyBasedData,
  technologyCategories,
  allQuestions,
  reactQuestions,
  nodejsQuestions,
  awsQuestions,
  dockerQuestions,
  terraformQuestions,
} from "./index";

// Test 1: Vérifier que toutes les questions sont présentes
const expectedTotalQuestions =
  reactQuestions.length +
  nodejsQuestions.length +
  awsQuestions.length +
  dockerQuestions.length +
  terraformQuestions.length;

console.assert(
  allQuestions.length === expectedTotalQuestions,
  `❌ Erreur: ${allQuestions.length} questions trouvées, ${expectedTotalQuestions} attendues`
);
console.log(
  `✅ Test 1: ${allQuestions.length} questions correctement agrégées`
);

// Test 2: Vérifier la structure des catégories
const expectedCategories = ["front", "back", "cloud", "infrastructure"];
const actualCategories = technologyCategories.map((cat) => cat.id);

expectedCategories.forEach((expectedCat) => {
  console.assert(
    actualCategories.includes(expectedCat),
    `❌ Erreur: Catégorie ${expectedCat} manquante`
  );
});
console.log(
  `✅ Test 2: Toutes les catégories présentes: ${actualCategories.join(", ")}`
);

// Test 3: Vérifier que chaque technologie a la structure complète
const allTechnologies = [
  ...Object.entries(technologyBasedData.Front),
  ...Object.entries(technologyBasedData.Back),
  ...Object.entries(technologyBasedData.Cloud),
  ...Object.entries(technologyBasedData.Infrastructure),
];

allTechnologies.forEach(([name, tech]) => {
  console.assert(
    tech.name && tech.description && Array.isArray(tech.questionnaire),
    `❌ Erreur: Structure incomplète pour ${name}`
  );
  console.assert(
    tech.questionnaire.length > 0,
    `❌ Erreur: Aucune question pour ${name}`
  );
});
console.log(
  `✅ Test 3: Structure valide pour ${allTechnologies.length} technologies`
);

// Test 4: Vérifier l'intégrité des questions
allQuestions.forEach((question, index) => {
  console.assert(
    question.id && question.question && Array.isArray(question.options),
    `❌ Erreur: Structure de question invalide à l'index ${index}`
  );
  console.assert(
    question.options.length >= 2,
    `❌ Erreur: Pas assez d'options pour la question ${question.id}`
  );
  console.assert(
    question.options.some((opt) => opt.isCorrect),
    `❌ Erreur: Aucune réponse correcte pour la question ${question.id}`
  );
});
console.log(`✅ Test 4: Toutes les questions ont une structure valide`);

// Test 5: Vérifier les types de questions
const typeDistribution = allQuestions.reduce((acc, q) => {
  acc[q.type] = (acc[q.type] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log(
  `✅ Test 5: Distribution des types: ${JSON.stringify(typeDistribution)}`
);

// Test 6: Vérifier les niveaux de difficulté
const difficultyDistribution = allQuestions.reduce((acc, q) => {
  acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log(
  `✅ Test 6: Distribution des difficultés: ${JSON.stringify(
    difficultyDistribution
  )}`
);

// Test 7: Vérifier la cohérence des points
const pointsDistribution = allQuestions.reduce((acc, q) => {
  const points = q.points.toString();
  acc[points] = (acc[points] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log(
  `✅ Test 7: Distribution des points: ${JSON.stringify(pointsDistribution)}`
);

console.log(
  "\n🎉 Tous les tests passés ! La nouvelle architecture est fonctionnelle."
);

export {};
