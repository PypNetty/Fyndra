import { Question } from "../../../../types";

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
          "✅ Correct ! Express.js est conçu pour être minimaliste et non-opinionated, offrant une grande flexibilité dans la structuration des applications.",
        documentationUrl: "https://expressjs.com/en/starter/hello-world.html",
      },
      {
        id: "b",
        text: "Système de middleware robuste",
        isCorrect: true,
        explanation:
          "✅ Exact ! Express.js a un excellent système de middleware qui permet de traiter les requêtes de manière modulaire et réutilisable.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-middleware.html",
      },
      {
        id: "c",
        text: "ORM intégré pour les bases de données",
        isCorrect: false,
        explanation:
          "❌ Express.js n'inclut pas d'ORM. Vous devez utiliser des bibliothèques externes comme Sequelize, TypeORM, ou Prisma.",
        documentationUrl:
          "https://expressjs.com/en/guide/database-integration.html",
      },
      {
        id: "d",
        text: "Large écosystème de modules",
        isCorrect: true,
        explanation:
          "✅ Correct ! Express.js bénéficie de l'énorme écosystème npm avec des milliers de middleware et modules disponibles.",
        documentationUrl: "https://expressjs.com/en/resources/middleware.html",
      },
    ],
  },
  {
    id: "backend-3",
    question: "Comment gérer les erreurs asynchrones en Node.js ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Avec try/catch pour async/await",
        isCorrect: true,
        explanation:
          "✅ Excellent ! Pour les fonctions async/await, try/catch est la méthode recommandée pour capturer les erreurs asynchrones de manière propre.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/nodejs-docker-webapp/",
      },
      {
        id: "b",
        text: "Uniquement avec .catch() sur les Promises",
        isCorrect: false,
        explanation:
          "❌ Bien que .catch() fonctionne pour les Promises, try/catch avec async/await est plus lisible et recommandé pour la gestion d'erreurs moderne.",
        documentationUrl:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
      },
      {
        id: "c",
        text: "Les erreurs asynchrones ne peuvent pas être capturées",
        isCorrect: false,
        explanation:
          "❌ C'est faux ! Les erreurs asynchrones peuvent être gérées avec try/catch (async/await), .catch() (Promises), ou des callbacks avec gestion d'erreur.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/nodejs-docker-webapp/",
      },
      {
        id: "d",
        text: "Seulement avec des callbacks",
        isCorrect: false,
        explanation:
          "❌ Les callbacks sont une ancienne méthode. Les approches modernes avec Promises et async/await sont plus recommandées.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/nodejs-docker-webapp/",
      },
    ],
  },
  {
    id: "backend-4",
    question: "Qu'est-ce que l'Event Loop en Node.js ?",
    type: "single",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Le mécanisme qui gère l'exécution asynchrone",
        isCorrect: true,
        explanation:
          "✅ Parfait ! L'Event Loop est le cœur de Node.js qui permet l'exécution non-bloquante en gérant les opérations asynchrones via différentes phases (timers, pending callbacks, poll, check, close).",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
      },
      {
        id: "b",
        text: "Une boucle for qui itère sur les événements",
        isCorrect: false,
        explanation:
          "❌ L'Event Loop n'est pas une simple boucle for. C'est un mécanisme sophistiqué qui orchestre l'exécution de callbacks asynchrones.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
      },
      {
        id: "c",
        text: "Un gestionnaire d'événements DOM",
        isCorrect: false,
        explanation:
          "❌ L'Event Loop de Node.js n'est pas lié au DOM (qui n'existe pas côté serveur). Il gère les I/O, timers, et autres opérations asynchrones.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
      },
      {
        id: "d",
        text: "Un thread pool pour les opérations",
        isCorrect: false,
        explanation:
          "❌ L'Event Loop lui-même n'est pas un thread pool. Node.js utilise libuv qui peut utiliser un thread pool pour certaines opérations, mais l'Event Loop s'exécute sur un seul thread.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
      },
    ],
  },
  {
    id: "backend-5",
    question: "Quels sont les avantages de npm ?",
    type: "multiple",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Gestionnaire de paquets intégré",
        isCorrect: true,
        explanation:
          "✅ Correct ! npm est le gestionnaire de paquets par défaut de Node.js, permettant d'installer et gérer facilement les dépendances.",
        documentationUrl: "https://docs.npmjs.com/about-npm",
      },
      {
        id: "b",
        text: "Plus grand registre de paquets au monde",
        isCorrect: true,
        explanation:
          "✅ Exact ! Le registre npm contient plus d'un million de paquets, ce qui en fait le plus grand écosystème de bibliothèques réutilisables.",
        documentationUrl: "https://docs.npmjs.com/about-npm",
      },
      {
        id: "c",
        text: "Gestion automatique des versions",
        isCorrect: true,
        explanation:
          "✅ Correct ! npm gère automatiquement les versions des dépendances avec package.json et package-lock.json pour assurer la reproductibilité.",
        documentationUrl:
          "https://docs.npmjs.com/cli/v7/configuring-npm/package-json",
      },
      {
        id: "d",
        text: "Compilation automatique du code",
        isCorrect: false,
        explanation:
          "❌ npm ne compile pas automatiquement le code. Il installe des paquets et exécute des scripts. Pour la compilation, vous utiliseriez des outils comme Babel, TypeScript, ou Webpack.",
        documentationUrl: "https://docs.npmjs.com/cli/v7/using-npm/scripts",
      },
    ],
  },
  {
    id: "backend-6",
    question: "Comment sécuriser une API REST en Node.js ?",
    type: "multiple",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Utiliser HTTPS pour toutes les communications",
        isCorrect: true,
        explanation:
          "✅ Essentiel ! HTTPS chiffre les données en transit et protège contre les attaques man-in-the-middle. Utilisez des certificats SSL/TLS valides.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/security/#use-https",
      },
      {
        id: "b",
        text: "Implémenter l'authentification JWT",
        isCorrect: true,
        explanation:
          "✅ Correct ! JWT (JSON Web Tokens) est une méthode standard pour l'authentification stateless, idéale pour les APIs REST.",
        documentationUrl: "https://jwt.io/introduction/",
      },
      {
        id: "c",
        text: "Valider et sanitiser tous les inputs",
        isCorrect: true,
        explanation:
          "✅ Crucial ! La validation des entrées empêche les injections SQL, XSS, et autres attaques. Utilisez des bibliothèques comme Joi ou express-validator.",
        documentationUrl:
          "https://nodejs.org/en/docs/guides/security/#validate-user-input",
      },
      {
        id: "d",
        text: "Désactiver complètement CORS",
        isCorrect: false,
        explanation:
          "❌ Désactiver CORS n'est pas une bonne pratique de sécurité. Il faut plutôt configurer CORS correctement pour autoriser seulement les domaines de confiance.",
        documentationUrl:
          "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
      },
    ],
  },
  {
    id: "backend-7",
    question: "Qu'est-ce qu'un middleware en Express.js ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Une fonction qui s'exécute entre la requête et la réponse",
        isCorrect: true,
        explanation:
          "✅ Parfait ! Un middleware est une fonction qui a accès à req, res et next(), permettant de traiter les requêtes de manière modulaire.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-middleware.html",
      },
      {
        id: "b",
        text: "Un module npm pour Express",
        isCorrect: false,
        explanation:
          "❌ Bien que certains middlewares soient des modules npm, un middleware est avant tout un concept architectural - une fonction avec une signature spécifique.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-middleware.html",
      },
      {
        id: "c",
        text: "Une base de données pour Express",
        isCorrect: false,
        explanation:
          "❌ Un middleware n'est pas une base de données. C'est une fonction qui traite les requêtes HTTP dans le pipeline d'Express.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-middleware.html",
      },
      {
        id: "d",
        text: "Un template engine",
        isCorrect: false,
        explanation:
          "❌ Un middleware n'est pas un template engine. Les template engines comme EJS ou Handlebars sont des outils pour générer du HTML dynamique.",
        documentationUrl:
          "https://expressjs.com/en/guide/using-template-engines.html",
      },
    ],
  },
];
