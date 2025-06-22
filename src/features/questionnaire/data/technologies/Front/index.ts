import { reactQuestions, reactCourses, reactVMs } from "./React";

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
    // Vue: ... (à ajouter plus tard)
  },
};
