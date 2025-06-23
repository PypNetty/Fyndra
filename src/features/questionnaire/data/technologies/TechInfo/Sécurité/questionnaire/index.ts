import { Question } from "../../../../types";

export const sécuritéQuestions: Question[] = [
  {
    id: "security-1",
    question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Une méthode qui nécessite deux types différents de preuves d'identité",
        isCorrect: true,
        explanation:
          "✅ Exact ! La 2FA combine quelque chose que vous savez (mot de passe) avec quelque chose que vous avez (téléphone, token) ou quelque chose que vous êtes (biométrie).",
      },
      {
        id: "b",
        text: "Un système qui demande deux mots de passe différents",
        isCorrect: false,
        explanation:
          "❌ Non, ce n'est pas simplement deux mots de passe. La 2FA utilise des facteurs d'authentification différents.",
      },
      {
        id: "c",
        text: "Une connexion qui expire après 2 minutes",
        isCorrect: false,
        explanation:
          "❌ Non, cela concerne la durée de session, pas l'authentification multi-facteurs.",
      },
      {
        id: "d",
        text: "Un pare-feu avec deux couches de protection",
        isCorrect: false,
        explanation:
          "❌ Non, cela concerne l'authentification des utilisateurs, pas la protection réseau.",
      },
    ],
  },
  {
    id: "security-2",
    question:
      "Quelle est la différence entre le chiffrement symétrique et asymétrique ?",
    type: "single",
    difficulty: "intermediate",
    points: 15,
    options: [
      {
        id: "a",
        text: "Le symétrique utilise la même clé pour chiffrer et déchiffrer, l'asymétrique utilise une paire de clés",
        isCorrect: true,
        explanation:
          "✅ Parfait ! Le chiffrement symétrique (AES) utilise une clé unique, tandis que l'asymétrique (RSA) utilise une clé publique et une clé privée.",
      },
      {
        id: "b",
        text: "Il n'y a pas de différence, ce sont des synonymes",
        isCorrect: false,
        explanation:
          "❌ Non, ce sont deux approches fondamentalement différentes du chiffrement.",
      },
      {
        id: "c",
        text: "Le symétrique est plus sécurisé que l'asymétrique",
        isCorrect: false,
        explanation:
          "❌ Ce n'est pas une question de sécurité mais de méthode. Chacun a ses avantages selon l'usage.",
      },
      {
        id: "d",
        text: "L'asymétrique est plus rapide que le symétrique",
        isCorrect: false,
        explanation:
          "❌ C'est l'inverse ! Le chiffrement symétrique est généralement plus rapide.",
      },
    ],
  },
  {
    id: "security-3",
    question: "Qu'est-ce qu'une attaque par déni de service (DDoS) ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Une tentative de rendre un service indisponible en le surchargeant de requêtes",
        isCorrect: true,
        explanation:
          "✅ Exact ! Une attaque DDoS utilise de nombreuses sources pour submerger un serveur de trafic.",
      },
      {
        id: "b",
        text: "Une méthode pour voler des mots de passe",
        isCorrect: false,
        explanation:
          "❌ Non, cela serait plutôt du phishing ou une attaque par force brute.",
      },
      {
        id: "c",
        text: "Un virus qui supprime des fichiers",
        isCorrect: false,
        explanation:
          "❌ Non, un DDoS vise la disponibilité du service, pas la destruction de données.",
      },
      {
        id: "d",
        text: "Une technique pour contourner un pare-feu",
        isCorrect: false,
        explanation: "❌ Non, c'est différent du contournement de pare-feu.",
      },
    ],
  },
  {
    id: "security-4",
    question: "Quel est l'objectif principal d'un pare-feu (firewall) ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Contrôler le trafic réseau entrant et sortant selon des règles de sécurité",
        isCorrect: true,
        explanation:
          "✅ Parfait ! Un pare-feu filtre le trafic réseau pour bloquer les communications non autorisées.",
      },
      {
        id: "b",
        text: "Nettoyer les virus sur l'ordinateur",
        isCorrect: false,
        explanation: "❌ Non, c'est le rôle d'un antivirus, pas d'un pare-feu.",
      },
      {
        id: "c",
        text: "Accélérer la connexion internet",
        isCorrect: false,
        explanation:
          "❌ Non, un pare-feu n'améliore pas les performances réseau.",
      },
      {
        id: "d",
        text: "Sauvegarder automatiquement les fichiers",
        isCorrect: false,
        explanation:
          "❌ Non, cela concerne la protection réseau, pas la sauvegarde.",
      },
    ],
  },
  {
    id: "security-5",
    question: "Qu'est-ce que le principe du 'moindre privilège' en sécurité ?",
    type: "single",
    difficulty: "intermediate",
    points: 15,
    options: [
      {
        id: "a",
        text: "Accorder uniquement les permissions minimales nécessaires pour accomplir une tâche",
        isCorrect: true,
        explanation:
          "✅ Exact ! Ce principe limite les dégâts potentiels en cas de compromission d'un compte.",
      },
      {
        id: "b",
        text: "Utiliser le mot de passe le plus simple possible",
        isCorrect: false,
        explanation:
          "❌ Non, cela va à l'encontre des bonnes pratiques de sécurité.",
      },
      {
        id: "c",
        text: "Donner tous les droits administrateur par défaut",
        isCorrect: false,
        explanation:
          "❌ Non, c'est exactement l'opposé du principe du moindre privilège.",
      },
      {
        id: "d",
        text: "Limiter le nombre d'utilisateurs sur le système",
        isCorrect: false,
        explanation:
          "❌ Non, cela concerne les permissions individuelles, pas le nombre d'utilisateurs.",
      },
    ],
  },
];
