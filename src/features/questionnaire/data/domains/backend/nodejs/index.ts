import { Question } from "../../../types";

export const nodejsQuestions: Question[] = [
  {
    id: "backend-1",
    question: "Qu'est-ce que Node.js ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Un runtime JavaScript côté serveur",
        isCorrect: true,
        explanation:
          "✅ Exactement ! Node.js est un runtime JavaScript construit sur le moteur V8 de Chrome qui permet d'exécuter JavaScript en dehors du navigateur, côté serveur.",
        documentationUrl: "https://nodejs.org/en/about/",
      },
      {
        id: "b",
        text: "Un framework frontend",
        isCorrect: false,
        explanation:
          "❌ Node.js est côté serveur, pas frontend. Pour le frontend JavaScript, vous pensez peut-être à React, Vue, ou Angular.",
        documentationUrl: "https://nodejs.org/en/about/",
      },
      {
        id: "c",
        text: "Une base de données",
        isCorrect: false,
        explanation:
          "❌ Node.js n'est pas une base de données. Il peut se connecter à des bases de données comme MongoDB, PostgreSQL, ou MySQL.",
        documentationUrl: "https://nodejs.org/en/about/",
      },
      {
        id: "d",
        text: "Un langage de programmation",
        isCorrect: false,
        explanation:
          "❌ Node.js utilise JavaScript mais n'est pas un langage. C'est un environnement d'exécution (runtime) pour JavaScript.",
        documentationUrl: "https://nodejs.org/en/about/",
      },
    ],
  },
  {
    id: "backend-2",
    question: "Quels sont les avantages d'Express.js ?",
    type: "multiple",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Framework minimaliste et flexible",
        isCorrect: true,
        explanation:
          "Express est léger et laisse beaucoup de liberté au développeur.",
      },
      {
        id: "b",
        text: "Middleware system puissant",
        isCorrect: true,
        explanation:
          "Les middlewares permettent de moduler le traitement des requêtes.",
      },
      {
        id: "c",
        text: "Intégration native avec MongoDB",
        isCorrect: false,
        explanation:
          "Express ne privilégie aucune base de données particulière.",
      },
      {
        id: "d",
        text: "Routage simple et efficace",
        isCorrect: true,
        explanation: "Express offre un système de routage intuitif.",
      },
    ],
  },
  {
    id: "backend-3",
    question: "Qu'est-ce qu'un middleware en Express ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Une fonction qui s'exécute entre la requête et la réponse",
        isCorrect: true,
        explanation:
          "✅ Parfait ! Les middlewares interceptent et traitent les requêtes HTTP. Ils ont accès à req, res et next() pour passer au middleware suivant.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-middleware.html",
      },
      {
        id: "b",
        text: "Une base de données",
        isCorrect: false,
        explanation:
          "❌ Un middleware n'est pas une base de données. C'est du code qui s'exécute pendant le cycle requête-réponse.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-middleware.html",
      },
      {
        id: "c",
        text: "Un serveur web",
        isCorrect: false,
        explanation:
          "❌ Un middleware n'est pas un serveur. Express lui-même est le serveur web, les middlewares sont des fonctions qui s'y greffent.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-middleware.html",
      },
      {
        id: "d",
        text: "Un fichier de configuration",
        isCorrect: false,
        explanation:
          "❌ Un middleware est du code exécutable (fonction), pas de la configuration statique.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-middleware.html",
      },
    ],
  },
  {
    id: "backend-4",
    question: "Comment gérer les erreurs en Node.js ?",
    type: "multiple",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Try/catch pour les fonctions synchrones",
        isCorrect: true,
        explanation: "Try/catch capture les erreurs dans le code synchrone.",
      },
      {
        id: "b",
        text: "Callbacks avec le pattern (err, data)",
        isCorrect: true,
        explanation: "Convention Node.js : premier paramètre est l'erreur.",
      },
      {
        id: "c",
        text: "Promises avec .catch()",
        isCorrect: true,
        explanation: "Les promises permettent de chaîner la gestion d'erreurs.",
      },
      {
        id: "d",
        text: "Ignorer toutes les erreurs",
        isCorrect: false,
        explanation: "Il ne faut jamais ignorer les erreurs !",
      },
    ],
  },
  {
    id: "backend-5",
    question: "Qu'est-ce que NPM ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Node Package Manager - gestionnaire de packages pour Node.js",
        isCorrect: true,
        explanation: "NPM permet d'installer et gérer les dépendances Node.js.",
      },
      {
        id: "b",
        text: "Network Protocol Manager",
        isCorrect: false,
        explanation: "NPM ne gère pas les protocoles réseau.",
      },
      {
        id: "c",
        text: "New Programming Method",
        isCorrect: false,
        explanation: "NPM n'est pas une méthode de programmation.",
      },
      {
        id: "d",
        text: "Node Performance Monitor",
        isCorrect: false,
        explanation: "NPM ne fait pas de monitoring de performance.",
      },
    ],
  },
  {
    id: "backend-6",
    question: "Qu'est-ce que l'Event Loop en Node.js ?",
    type: "single",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Un mécanisme qui gère l'exécution asynchrone et non-bloquante",
        isCorrect: true,
        explanation:
          "✅ Exactement ! L'Event Loop permet à Node.js d'être non-bloquant malgré JavaScript mono-thread. Il gère les callbacks, les timers, et les I/O de manière efficace.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
      },
      {
        id: "b",
        text: "Une boucle infinie qui plante le serveur",
        isCorrect: false,
        explanation:
          "❌ L'Event Loop est optimisée et ne plante pas le serveur. Elle permet au contraire une haute performance en gérant des milliers de connexions simultanées.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
      },
      {
        id: "c",
        text: "Un système de cache",
        isCorrect: false,
        explanation:
          "❌ L'Event Loop ne fait pas de cache. Pour le cache, utilisez Redis, Memcached ou des solutions en mémoire.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
      },
      {
        id: "d",
        text: "Un protocole de communication",
        isCorrect: false,
        explanation:
          "❌ L'Event Loop n'est pas un protocole. C'est un mécanisme interne de Node.js pour gérer l'asynchrone.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
      },
    ],
  },
  {
    id: "backend-7",
    question: "Quelles sont les bonnes pratiques de sécurité en Node.js ?",
    type: "multiple",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Valider et assainir toutes les entrées utilisateur",
        isCorrect: true,
        explanation: "Toujours valider les données pour éviter les injections.",
      },
      {
        id: "b",
        text: "Utiliser HTTPS pour toutes les communications",
        isCorrect: true,
        explanation: "HTTPS chiffre les communications et protège les données.",
      },
      {
        id: "c",
        text: "Garder les dépendances à jour",
        isCorrect: true,
        explanation:
          "Les mises à jour corrigent souvent des failles de sécurité.",
      },
      {
        id: "d",
        text: "Stocker les mots de passe en clair",
        isCorrect: false,
        explanation: "Les mots de passe doivent TOUJOURS être hachés !",
      },
    ],
  },
];
