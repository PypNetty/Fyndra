import { Question } from "../../../../types";

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
        text: "Amélioration des performances",
        isCorrect: true,
        explanation:
          "✅ Correct ! Le DOM virtuel permet d'optimiser les mises à jour en calculant les différences (diffing) et en appliquant uniquement les changements nécessaires au DOM réel.",
        documentationUrl:
          "https://fr.react.dev/learn/preserving-and-resetting-state",
      },
      {
        id: "b",
        text: "Facilite le débogage",
        isCorrect: true,
        explanation:
          "✅ Exact ! Le DOM virtuel facilite le débogage en fournissant une représentation prévisible de l'interface utilisateur et en permettant des outils de développement avancés.",
        documentationUrl: "https://fr.react.dev/learn/react-developer-tools",
      },
      {
        id: "c",
        text: "Réduit la consommation de mémoire",
        isCorrect: false,
        explanation:
          "❌ En réalité, le DOM virtuel utilise plus de mémoire car il maintient une copie virtuelle du DOM en plus du DOM réel. L'avantage réside dans les performances, pas dans la consommation mémoire.",
        documentationUrl:
          "https://fr.react.dev/learn/preserving-and-resetting-state",
      },
      {
        id: "d",
        text: "Permet la programmation déclarative",
        isCorrect: true,
        explanation:
          "✅ Correct ! Le DOM virtuel permet à React d'adopter une approche déclarative où vous décrivez à quoi doit ressembler l'interface utilisateur pour un état donné.",
        documentationUrl: "https://fr.react.dev/learn/thinking-in-react",
      },
    ],
  },
  {
    id: "react-3",
    question: "Que fait le hook useState ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Gère l'état local d'un composant",
        isCorrect: true,
        explanation:
          "✅ Parfait ! useState permet d'ajouter un état local à un composant fonctionnel. Il retourne la valeur actuelle et une fonction pour la mettre à jour.",
        documentationUrl: "https://fr.react.dev/reference/react/useState",
      },
      {
        id: "b",
        text: "Connecte le composant au store Redux",
        isCorrect: false,
        explanation:
          "❌ useState gère l'état local, pas la connexion à Redux. Pour Redux, vous utiliseriez useSelector et useDispatch avec React-Redux.",
        documentationUrl: "https://react-redux.js.org/api/hooks",
      },
      {
        id: "c",
        text: "Effectue des appels API",
        isCorrect: false,
        explanation:
          "❌ useState ne fait pas d'appels API. Pour les effets de bord comme les appels API, vous utiliseriez useEffect combiné avec useState.",
        documentationUrl: "https://fr.react.dev/reference/react/useEffect",
      },
      {
        id: "d",
        text: "Optimise les performances",
        isCorrect: false,
        explanation:
          "❌ useState en lui-même n'optimise pas les performances. Pour l'optimisation, vous utiliseriez useMemo, useCallback, ou React.memo.",
        documentationUrl: "https://fr.react.dev/reference/react/useMemo",
      },
    ],
  },
  {
    id: "react-4",
    question: "Quand utiliser useEffect ?",
    type: "multiple",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Pour faire des appels API",
        isCorrect: true,
        explanation:
          "✅ Correct ! useEffect est idéal pour les effets de bord comme les appels API, particulièrement dans le tableau de dépendances vide [] pour exécuter une seule fois au montage.",
        documentationUrl: "https://fr.react.dev/reference/react/useEffect",
      },
      {
        id: "b",
        text: "Pour nettoyer des abonnements",
        isCorrect: true,
        explanation:
          "✅ Exact ! useEffect peut retourner une fonction de nettoyage qui sera appelée avant le démontage du composant ou avant la prochaine exécution de l'effet.",
        documentationUrl:
          "https://fr.react.dev/reference/react/useEffect#cleanup-function",
      },
      {
        id: "c",
        text: "Pour calculer des valeurs dérivées",
        isCorrect: false,
        explanation:
          "❌ Pour calculer des valeurs dérivées basées sur l'état ou les props, il vaut mieux utiliser useMemo pour éviter des recalculs inutiles.",
        documentationUrl: "https://fr.react.dev/reference/react/useMemo",
      },
      {
        id: "d",
        text: "Pour écouter les changements du DOM",
        isCorrect: true,
        explanation:
          "✅ Correct ! useEffect peut être utilisé pour ajouter des event listeners au DOM, comme window.addEventListener, avec nettoyage approprié.",
        documentationUrl:
          "https://fr.react.dev/reference/react/useEffect#listening-to-a-global-browser-event",
      },
    ],
  },
  {
    id: "react-5",
    question: "Quelle est la différence entre props et state ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Les props sont immuables, le state est mutable",
        isCorrect: true,
        explanation:
          "✅ Exact ! Les props sont des données passées par le composant parent et ne doivent jamais être modifiées. Le state est local au composant et peut être mis à jour.",
        documentationUrl:
          "https://fr.react.dev/learn/thinking-in-react#step-3-find-the-minimal-but-complete-representation-of-ui-state",
      },
      {
        id: "b",
        text: "Les props sont locales, le state vient du parent",
        isCorrect: false,
        explanation:
          "❌ C'est l'inverse ! Les props viennent du composant parent, tandis que le state est local au composant qui le déclare.",
        documentationUrl:
          "https://fr.react.dev/learn/passing-props-to-a-component",
      },
      {
        id: "c",
        text: "Il n'y a pas de différence",
        isCorrect: false,
        explanation:
          "❌ Il y a une différence fondamentale : les props sont des données en lecture seule passées par le parent, le state est géré localement par le composant.",
        documentationUrl:
          "https://fr.react.dev/learn/state-a-components-memory",
      },
      {
        id: "d",
        text: "Les props sont pour le CSS, le state pour les données",
        isCorrect: false,
        explanation:
          "❌ Les props peuvent contenir tous types de données (styles, callbacks, données métier). Le state aussi peut contenir n'importe quel type de données local au composant.",
        documentationUrl:
          "https://fr.react.dev/learn/passing-props-to-a-component",
      },
    ],
  },
];
