import {
  technologyBasedData,
  technologyCategories,
} from "./src/features/questionnaire/data/technologies/index.js";

console.log("=== CATÉGORIES DISPONIBLES ===");
technologyCategories.forEach((category) => {
  console.log(`${category.icon} ${category.name}: ${category.description}`);
  console.log(`  Technologies: ${category.technologies.join(", ")}`);
  console.log("");
});

console.log("=== DONNÉES PAR TECHNOLOGIE ===");
Object.entries(technologyBasedData).forEach(([categoryName, categoryData]) => {
  console.log(`\n📁 ${categoryName}: ${categoryData.name}`);
  console.log(`   ${categoryData.description}`);

  Object.entries(categoryData.technologies).forEach(([techName, techData]) => {
    console.log(
      `   └── ${techName}: ${techData.questionnaire.length} questions, ${techData.cours.length} cours, ${techData.vm.length} VMs`
    );
  });
});

console.log("\n=== RÉSUMÉ ===");
const totalCategories = Object.keys(technologyBasedData).length;
const totalTechnologies = Object.values(technologyBasedData).reduce(
  (acc, cat) => acc + Object.keys(cat.technologies).length,
  0
);
const totalQuestions = Object.values(technologyBasedData).reduce(
  (acc, cat) =>
    acc +
    Object.values(cat.technologies).reduce(
      (sum, tech) => sum + tech.questionnaire.length,
      0
    ),
  0
);

console.log(
  `Total: ${totalCategories} catégories, ${totalTechnologies} technologies, ${totalQuestions} questions`
);
