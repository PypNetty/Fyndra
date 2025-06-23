import { reactQuestions, reactCourses, reactVMs } from "./React";
import { vueQuestions, vueCourses, vueVMs } from "./Vue";

export const frontTechnologies = {
  name: "Frontend",
  description:
    "Technologies et frameworks pour le développement frontend moderne",
  technologies: {
    React: {
      name: "React",
      description:
        "Bibliothèque JavaScript pour créer des interfaces utilisateur",
      difficulty: "Intermédiaire",
      questionnaire: reactQuestions,
      cours: reactCourses,
      vm: reactVMs,
    },
    Vue: {
      name: "Vue.js",
      description:
        "Framework JavaScript progressif pour les interfaces utilisateur",
      difficulty: "Intermédiaire",
      questionnaire: vueQuestions,
      cours: vueCourses,
      vm: vueVMs,
    },
  },
};
