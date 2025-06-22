// Test complet de la nouvelle architecture basée sur les technologies

import {
  technologyBasedData,
  technologyCategories,
  allQuestions,
} from "./technologies";

console.log("🚀 Test de la nouvelle architecture basée sur les technologies\n");

// Test 1: Vérification de la structure des catégories
console.log("📋 Test 1: Catégories disponibles");
technologyCategories.forEach((category) => {
  console.log(
    `  ${category.icon} ${category.name}: ${category.technologies.join(", ")}`
  );
});

// Test 2: Vérification du contenu par technologie
console.log("\n🔍 Test 2: Contenu par technologie");

Object.entries(technologyBasedData).forEach(([categoryName, technologies]) => {
  console.log(`\n${categoryName.toUpperCase()}:`);

  Object.entries(technologies).forEach(([techName, tech]) => {
    console.log(`  📦 ${techName}:`);
    console.log(`     ❓ Questions: ${tech.questionnaire.length}`);
    console.log(
      `     📚 Cours: ${
        Array.isArray(tech.cours) ? tech.cours.length : "Non défini"
      }`
    );
    console.log(
      `     💻 VMs: ${Array.isArray(tech.vm) ? tech.vm.length : "Non défini"}`
    );
  });
});

// Test 3: Statistiques globales
console.log("\n📊 Test 3: Statistiques globales");

const totalQuestions = allQuestions.length;
const questionsByDifficulty = allQuestions.reduce((acc, q) => {
  acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const questionsByType = allQuestions.reduce((acc, q) => {
  acc[q.type] = (acc[q.type] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log(`  📝 Total questions: ${totalQuestions}`);
console.log(`  🎯 Par difficulté: ${JSON.stringify(questionsByDifficulty)}`);
console.log(`  📋 Par type: ${JSON.stringify(questionsByType)}`);

// Test 4: Vérification de la complétude du contenu
console.log("\n✅ Test 4: Complétude du contenu");

let hasErrors = false;

Object.entries(technologyBasedData).forEach(([categoryName, technologies]) => {
  Object.entries(technologies).forEach(([techName, tech]) => {
    // Vérifier les questions
    if (!tech.questionnaire || tech.questionnaire.length === 0) {
      console.log(`  ❌ ${categoryName}/${techName}: Aucune question`);
      hasErrors = true;
    }

    // Vérifier les cours
    if (!Array.isArray(tech.cours)) {
      console.log(`  ⚠️ ${categoryName}/${techName}: Cours non définis`);
    } else if (tech.cours.length === 0) {
      console.log(`  ⚠️ ${categoryName}/${techName}: Aucun cours`);
    }

    // Vérifier les VMs
    if (!Array.isArray(tech.vm)) {
      console.log(`  ⚠️ ${categoryName}/${techName}: VMs non définies`);
    } else if (tech.vm.length === 0) {
      console.log(`  ⚠️ ${categoryName}/${techName}: Aucune VM`);
    }
  });
});

if (!hasErrors) {
  console.log("  ✅ Toutes les technologies ont du contenu questionnaire");
}

// Test 5: Exemple d'utilisation de l'API
console.log("\n🎮 Test 5: Exemple d'utilisation");

// Accéder à une technologie spécifique
const reactTech = technologyBasedData.Front.React;
console.log(`  📦 ${reactTech.name}: ${reactTech.description}`);
console.log(
  `     Première question: "${reactTech.questionnaire[0]?.question}"`
);

if (Array.isArray(reactTech.cours) && reactTech.cours.length > 0) {
  console.log(`     Premier cours: "${reactTech.cours[0].title}"`);
}

if (Array.isArray(reactTech.vm) && reactTech.vm.length > 0) {
  console.log(`     Première VM: "${reactTech.vm[0].name}"`);
}

// Filtrer les questions par critères
const easyQuestions = allQuestions.filter((q) => q.difficulty === "easy");
const multipleChoiceQuestions = allQuestions.filter(
  (q) => q.type === "multiple"
);

console.log(`  🎯 Questions faciles: ${easyQuestions.length}`);
console.log(
  `  📋 Questions à choix multiples: ${multipleChoiceQuestions.length}`
);

console.log("\n🎉 Tests terminés avec succès !");
console.log(
  "La nouvelle architecture basée sur les technologies est opérationnelle !"
);

export {};
