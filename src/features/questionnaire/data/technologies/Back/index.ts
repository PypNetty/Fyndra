import { nodejsQuestions, nodejsCourses, nodejsVMs } from "./Node.js";
import { pythonQuestions, pythonCourses, pythonVMs } from "./Python";

export const backTechnologies = {
  name: "Backend",
  description: "Technologies et frameworks pour le développement backend",
  technologies: {
    "Node.js": {
      name: "Node.js",
      description: "Runtime JavaScript côté serveur",
      difficulty: "Intermédiaire",
      questionnaire: nodejsQuestions,
      cours: nodejsCourses,
      vm: nodejsVMs,
    },
    Python: {
      name: "Python",
      description: "Langage de programmation polyvalent et puissant",
      difficulty: "Débutant",
      questionnaire: pythonQuestions,
      cours: pythonCourses,
      vm: pythonVMs,
    },
  },
};
