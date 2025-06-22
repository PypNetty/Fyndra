import { Question } from "../../../types";

export const reactQuestions: Question[] = [
  {
    id: "react-1",
    question: "Qu'est-ce que JSX en React ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Une extension de syntaxe JavaScript qui permet d'écrire du HTML",
        isCorrect: true,
        explanation:
          "✅ Exact ! JSX est une extension de syntaxe qui permet d'écrire du code ressemblant à HTML dans JavaScript. Il est transpilé en appels React.createElement().",
        documentationUrl: "https://fr.react.dev/learn/writing-markup-with-jsx",
      },
      {
        id: "b",
        text: "Un framework CSS pour React",
        isCorrect: false,
        explanation:
          "❌ JSX n'est pas un framework CSS. Il s'agit d'une syntaxe pour créer des éléments React. Pour le styling, vous utiliseriez des bibliothèques comme Styled Components ou CSS Modules.",
        documentationUrl: "https://fr.react.dev/learn/writing-markup-with-jsx",
      },
      {
        id: "c",
        text: "Une base de données pour React",
        isCorrect: false,
        explanation:
          "❌ JSX n'a rien à voir avec les bases de données. Pour gérer les données dans React, vous utiliseriez des hooks comme useState, des bibliothèques comme Redux, ou des solutions de base de données comme Firebase.",
        documentationUrl: "https://fr.react.dev/learn/writing-markup-with-jsx",
      },
      {
        id: "d",
        text: "Un gestionnaire d'état pour React",
        isCorrect: false,
        explanation:
          "❌ JSX n'est pas un gestionnaire d'état. Pour gérer l'état, React propose useState, useReducer, et des bibliothèques externes comme Redux ou Zustand.",
        documentationUrl: "https://fr.react.dev/learn/managing-state",
      },
    ],
  },
  {
    id: "react-2",
    question: "Quels sont les avantages du DOM virtuel ?",
    type: "multiple",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Améliore les performances en minimisant les manipulations DOM",
        isCorrect: true,
        explanation:
          "✅ Exact ! Le DOM virtuel optimise les mises à jour en calculant les différences (diffing) et n'applique que les changements nécessaires au DOM réel.",
        documentationUrl:
          "https://fr.react.dev/learn/preserving-and-resetting-state",
      },
      {
        id: "b",
        text: "Permet la réconciliation efficace des composants",
        isCorrect: true,
        explanation:
          "✅ Correct ! React utilise un algorithme de réconciliation sophistiqué pour optimiser les re-rendus et maintenir l'état des composants.",
        documentationUrl:
          "https://fr.react.dev/learn/understanding-your-ui-as-a-tree",
      },
      {
        id: "c",
        text: "Rend les applications plus sécurisées",
        isCorrect: false,
        explanation:
          "❌ Le DOM virtuel n'améliore pas directement la sécurité. Pour la sécurité React, focus sur la validation des props, l'échappement XSS, et l'authentification.",
        documentationUrl:
          "https://fr.react.dev/learn/preserving-and-resetting-state",
      },
      {
        id: "d",
        text: "Facilite le debugging et les tests",
        isCorrect: true,
        explanation:
          "✅ Oui ! Le DOM virtuel permet de tester les composants sans DOM réel grâce à des bibliothèques comme React Testing Library.",
        documentationUrl:
          "https://testing-library.com/docs/react-testing-library/intro/",
      },
    ],
  },
  {
    id: "react-3",
    question: "Comment gérer l'état local dans un composant fonctionnel ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Avec le hook useState",
        isCorrect: true,
        explanation:
          "✅ Parfait ! useState est le hook principal pour gérer l'état local. Il retourne une valeur et une fonction de mise à jour : const [state, setState] = useState(initialValue).",
        documentationUrl: "https://fr.react.dev/reference/react/useState",
      },
      {
        id: "b",
        text: "Avec les props",
        isCorrect: false,
        explanation:
          "❌ Les props sont pour passer des données entre composants, pas pour gérer l'état local. L'état local reste interne au composant.",
        documentationUrl:
          "https://fr.react.dev/learn/passing-props-to-a-component",
      },
      {
        id: "c",
        text: "Avec this.state",
        isCorrect: false,
        explanation:
          "❌ this.state est utilisé dans les composants de classe, pas dans les composants fonctionnels. Utilisez useState dans les fonctions.",
        documentationUrl:
          "https://fr.react.dev/learn/state-a-components-memory",
      },
      {
        id: "d",
        text: "Avec localStorage",
        isCorrect: false,
        explanation:
          "❌ localStorage est pour la persistance de données, pas pour l'état local des composants. Utilisez useState pour l'état temporaire et localStorage seulement quand vous devez persister des données.",
        documentationUrl: "https://fr.react.dev/reference/react/useState",
      },
    ],
  },
  {
    id: "react-4",
    question: "Qu'est-ce qu'un effet de bord en React ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Une opération qui modifie quelque chose en dehors du composant",
        isCorrect: true,
        explanation:
          "✅ Exact ! Un effet de bord est toute opération qui affecte l'extérieur du composant : appels API, manipulation DOM, timers, subscriptions, etc. C'est pourquoi on utilise useEffect.",
        documentationUrl: "https://fr.react.dev/learn/keeping-components-pure",
      },
      {
        id: "b",
        text: "Une erreur de React",
        isCorrect: false,
        explanation:
          "❌ Les effets de bord ne sont pas des erreurs, ils sont nécessaires ! React les gère avec useEffect pour maintenir la prévisibilité des composants.",
        documentationUrl: "https://fr.react.dev/learn/keeping-components-pure",
      },
      {
        id: "c",
        text: "Un bug dans le code",
        isCorrect: false,
        explanation:
          "❌ Les effets de bord sont normaux et nécessaires. React les encadre avec useEffect pour les contrôler et éviter les problèmes.",
        documentationUrl: "https://fr.react.dev/learn/keeping-components-pure",
      },
      {
        id: "d",
        text: "Une méthode de optimisation React",
        isCorrect: false,
        explanation:
          "❌ Les effets de bord ne sont pas une technique d'optimisation. Pour l'optimisation, React propose memo, useMemo, useCallback, etc.",
        documentationUrl: "https://fr.react.dev/reference/react/memo",
      },
    ],
  },
  {
    id: "react-5",
    question: "Quand utiliser useEffect ?",
    type: "multiple",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Pour faire des appels API",
        isCorrect: true,
        explanation:
          "✅ Exact ! useEffect est parfait pour les appels asynchrones comme fetch() ou axios. Utilisez-le avec un tableau de dépendances approprié.",
        documentationUrl: "https://fr.react.dev/reference/react/useEffect",
      },
      {
        id: "b",
        text: "Pour nettoyer des ressources (timers, subscriptions)",
        isCorrect: true,
        explanation:
          "✅ Correct ! La fonction de nettoyage (cleanup) de useEffect est essentielle pour éviter les fuites mémoire. Retournez une fonction qui nettoie vos ressources.",
        documentationUrl:
          "https://fr.react.dev/reference/react/useEffect#cleaning-up-a-side-effect",
      },
      {
        id: "c",
        text: "Pour définir l'état initial",
        isCorrect: false,
        explanation:
          "❌ L'état initial se définit directement avec useState(initialValue) ou une fonction d'initialisation, pas dans useEffect.",
        documentationUrl: "https://fr.react.dev/reference/react/useState",
      },
      {
        id: "d",
        text: "Pour manipuler le DOM directement",
        isCorrect: true,
        explanation:
          "✅ Oui ! useEffect peut être utilisé pour les manipulations DOM impératives quand les méthodes React déclaratives ne suffisent pas.",
        documentationUrl:
          "https://fr.react.dev/learn/manipulating-the-dom-with-refs",
      },
    ],
  },
];
