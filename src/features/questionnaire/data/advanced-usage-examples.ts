// Exemple pratique : Interface pour parcours d'apprentissage par technologie

import {
  technologyBasedData,
  technologyCategories,
  allQuestions,
} from "./technologies";

// Exemple 1: Créer un sélecteur de technologie
export function createTechnologySelector() {
  return technologyCategories.map((category) => ({
    category: category.name,
    icon: category.icon,
    technologies: category.technologies.map((techName) => {
      const tech = (technologyBasedData as any)[
        category.id.charAt(0).toUpperCase() + category.id.slice(1)
      ][techName];
      return {
        name: techName,
        description: tech.description,
        content: {
          questions: tech.questionnaire.length,
          courses: Array.isArray(tech.cours) ? tech.cours.length : 0,
          vms: Array.isArray(tech.vm) ? tech.vm.length : 0,
        },
      };
    }),
  }));
}

// Exemple 2: Générateur de quiz personnalisé
export function createCustomQuiz(
  technologies: string[],
  difficulty?: "easy" | "medium" | "hard",
  maxQuestions?: number
) {
  const selectedQuestions = allQuestions.filter((question) => {
    // Filtrer par technologie (basé sur l'ID de la question)
    const matchesTech = technologies.some((tech) =>
      question.id.toLowerCase().includes(tech.toLowerCase())
    );

    // Filtrer par difficulté si spécifiée
    const matchesDifficulty = !difficulty || question.difficulty === difficulty;

    return matchesTech && matchesDifficulty;
  });

  // Limiter le nombre de questions si spécifié
  const finalQuestions = maxQuestions
    ? selectedQuestions.slice(0, maxQuestions)
    : selectedQuestions;

  return {
    questions: finalQuestions,
    metadata: {
      totalQuestions: finalQuestions.length,
      technologies,
      difficulty,
      estimatedTime: `${Math.ceil(finalQuestions.length * 2)} minutes`,
      totalPoints: finalQuestions.reduce((sum, q) => sum + q.points, 0),
    },
  };
}

// Exemple 3: Parcours d'apprentissage recommandé
export function createLearningPath(technology: string) {
  // Trouver la technologie dans la structure
  let foundTech: any = null;
  let categoryName = "";

  Object.entries(technologyBasedData).forEach(([catName, technologies]) => {
    Object.entries(technologies).forEach(([techName, tech]) => {
      if (techName.toLowerCase() === technology.toLowerCase()) {
        foundTech = tech;
        categoryName = catName;
      }
    });
  });

  if (!foundTech) {
    throw new Error(`Technologie "${technology}" non trouvée`);
  }

  const learningPath = {
    technology,
    category: categoryName,
    description: foundTech.description,
    steps: [
      {
        step: 1,
        type: "course",
        title: "Apprentissage Théorique",
        content: foundTech.cours,
        estimatedTime:
          foundTech.cours?.reduce(
            (sum: number, course: any) => sum + parseInt(course.duration),
            0
          ) + "h",
      },
      {
        step: 2,
        type: "practice",
        title: "Environnement de Pratique",
        content: foundTech.vm,
        description: "Pratiquez dans un environnement préconfiguré",
      },
      {
        step: 3,
        type: "assessment",
        title: "Évaluation des Compétences",
        content: foundTech.questionnaire,
        description: `${foundTech.questionnaire.length} questions pour valider vos acquis`,
      },
    ],
    totalEstimatedTime: `${
      foundTech.cours?.reduce(
        (sum: number, course: any) => sum + parseInt(course.duration),
        0
      ) || 0
    }h + pratique`,
    certification: `Certificat ${technology} Fyndra`,
  };

  return learningPath;
}

// Exemple 4: Comparaison de technologies
export function compareTechnologies(tech1: string, tech2: string) {
  const createTechSummary = (techName: string) => {
    let foundTech: any = null;
    let categoryName = "";

    Object.entries(technologyBasedData).forEach(([catName, technologies]) => {
      Object.entries(technologies).forEach(([name, tech]) => {
        if (name.toLowerCase() === techName.toLowerCase()) {
          foundTech = tech;
          categoryName = catName;
        }
      });
    });

    if (!foundTech) return null;

    return {
      name: techName,
      category: categoryName,
      description: foundTech.description,
      questions: foundTech.questionnaire.length,
      courses: Array.isArray(foundTech.cours) ? foundTech.cours.length : 0,
      vms: Array.isArray(foundTech.vm) ? foundTech.vm.length : 0,
      difficulties: foundTech.questionnaire.reduce((acc: any, q: any) => {
        acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
        return acc;
      }, {}),
    };
  };

  return {
    technology1: createTechSummary(tech1),
    technology2: createTechSummary(tech2),
    comparison: {
      sameCategory:
        createTechSummary(tech1)?.category ===
        createTechSummary(tech2)?.category,
      moreQuestions:
        createTechSummary(tech1)?.questions >
        createTechSummary(tech2)?.questions
          ? tech1
          : tech2,
      moreCourses:
        createTechSummary(tech1)?.courses > createTechSummary(tech2)?.courses
          ? tech1
          : tech2,
    },
  };
}

// Exemple d'utilisation
console.log("🎯 Exemples d'utilisation de la nouvelle architecture :");

// 1. Sélecteur de technologie
const selector = createTechnologySelector();
console.log("\n📋 Technologies disponibles:", selector);

// 2. Quiz personnalisé React + Docker facile
const customQuiz = createCustomQuiz(["react", "docker"], "easy", 5);
console.log("\n🎮 Quiz personnalisé:", customQuiz.metadata);

// 3. Parcours d'apprentissage React
const reactPath = createLearningPath("React");
console.log("\n🎓 Parcours React:", reactPath);

// 4. Comparaison React vs Node.js
const comparison = compareTechnologies("React", "Node.js");
console.log("\n⚖️ Comparaison:", comparison.comparison);

export {
  createTechnologySelector,
  createCustomQuiz,
  createLearningPath,
  compareTechnologies,
};
