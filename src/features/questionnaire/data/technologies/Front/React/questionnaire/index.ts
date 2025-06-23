export const reactQuestions = [
  {
    question: "Qu'est-ce que JSX en React ?",
    options: [
      "Une extension de syntaxe JavaScript qui permet d'écrire du HTML",
      "Un framework CSS pour React",
      "Une base de données pour React",
      "Un gestionnaire d'état pour React",
    ],
    correctAnswer: 0,
    category: "React Basics",
    difficulty: "Débutant",
  },
  {
    question:
      "Quelle est la différence entre un composant fonctionnel et un composant de classe ?",
    options: [
      "Les composants fonctionnels ne peuvent pas avoir d'état",
      "Les composants de classe sont plus performants",
      "Les composants fonctionnels utilisent des hooks pour gérer l'état",
      "Il n'y a aucune différence",
    ],
    correctAnswer: 2,
    category: "Components",
    difficulty: "Intermédiaire",
  },
  {
    question: "Que fait le hook useEffect ?",
    options: [
      "Il gère l'état local du composant",
      "Il effectue des effets de bord (side effects)",
      "Il optimise les performances",
      "Il valide les props",
    ],
    correctAnswer: 1,
    category: "Hooks",
    difficulty: "Intermédiaire",
  },
  {
    question: "Comment optimiser les performances d'une liste en React ?",
    options: [
      "Utiliser des index comme keys",
      "Utiliser React.memo et des keys uniques",
      "Ne jamais utiliser de keys",
      "Utiliser uniquement des composants de classe",
    ],
    correctAnswer: 1,
    category: "Performance",
    difficulty: "Avancé",
  },
  {
    question: "Qu'est-ce que le lifting state up en React ?",
    options: [
      "Optimiser les performances avec useMemo",
      "Déplacer l'état vers un composant parent commun",
      "Utiliser Redux pour gérer l'état global",
      "Créer des composants plus petits",
    ],
    correctAnswer: 1,
    category: "State Management",
    difficulty: "Intermédiaire",
  },
  {
    question: "Dans quel cas utiliser useCallback ?",
    options: [
      "Pour toutes les fonctions dans un composant",
      "Pour éviter les re-rendus inutiles d'enfants qui reçoivent la fonction",
      "Pour gérer l'état local",
      "Pour faire des appels API",
    ],
    correctAnswer: 1,
    category: "Hooks",
    difficulty: "Avancé",
  },
  {
    question: "Quelle est la bonne façon de gérer les formulaires en React ?",
    options: [
      "Utiliser uniquement des composants non contrôlés",
      "Utiliser des composants contrôlés avec useState",
      "Ne jamais utiliser d'événements onChange",
      "Utiliser uniquement jQuery",
    ],
    correctAnswer: 1,
    category: "Forms",
    difficulty: "Intermédiaire",
  },
  {
    question: "Qu'est-ce que le Virtual DOM ?",
    options: [
      "Une copie exacte du DOM réel",
      "Une représentation JavaScript légère du DOM réel",
      "Un framework CSS",
      "Une base de données",
    ],
    correctAnswer: 1,
    category: "Virtual DOM",
    difficulty: "Intermédiaire",
  },
];
