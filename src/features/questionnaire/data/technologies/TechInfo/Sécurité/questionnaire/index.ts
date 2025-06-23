import { Question } from "../../../../types";

export const sécuritéQuestions: Question[] = [
  {
    id: "security-1",
    question: "Qu'est-ce qu'une attaque par injection SQL ?",
    type: "single",
    difficulty: "intermediate",
    points: 15,
    options: [
      {
        id: "a",
        text: "Une méthode pour optimiser les requêtes SQL",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas une méthode d'optimisation.",
      },
      {
        id: "b",
        text: "Une technique malveillante qui insère du code SQL dans une application",
        isCorrect: true,
        explanation:
          "✅ Exact ! C'est une méthode utilisée par les attaquants pour manipuler les bases de données.",
      },
      {
        id: "c",
        text: "Un type de sauvegarde de base de données",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas une méthode de sauvegarde.",
      },
      {
        id: "d",
        text: "Une méthode de chiffrement",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas une méthode de chiffrement.",
      },
    ],
  },
  {
    id: "security-2",
    question:
      "Quelle est la différence entre authentification et autorisation ?",
    type: "single",
    difficulty: "intermediate",
    points: 15,
    options: [
      {
        id: "a",
        text: "Il n'y en a pas, c'est identique",
        isCorrect: false,
        explanation: "❌ Non, ce sont deux concepts différents.",
      },
      {
        id: "b",
        text: "L'authentification vérifie l'identité, l'autorisation vérifie les permissions",
        isCorrect: true,
        explanation:
          "✅ Exact ! L'authentification confirme qui vous êtes, l'autorisation détermine ce que vous pouvez faire.",
      },
      {
        id: "c",
        text: "L'autorisation vérifie l'identité, l'authentification vérifie les permissions",
        isCorrect: false,
        explanation:
          "❌ Non, c'est l'inverse. L'authentification vient avant l'autorisation.",
      },
      {
        id: "d",
        text: "L'authentification est plus sécurisée",
        isCorrect: false,
        explanation:
          "❌ Ce n'est pas une question de sécurité, mais de fonction. Les deux sont nécessaires.",
      },
    ],
  },
  {
    id: "security-3",
    question: "Qu'est-ce que le chiffrement symétrique ?",
    type: "single",
    difficulty: "intermediate",
    points: 15,
    options: [
      {
        id: "a",
        text: "Un chiffrement où la même clé est utilisée pour chiffrer et déchiffrer",
        isCorrect: true,
        explanation:
          "✅ Exact ! C'est un type de chiffrement où la clé doit rester secrète.",
      },
      {
        id: "b",
        text: "Un chiffrement qui utilise deux clés différentes",
        isCorrect: false,
        explanation:
          "❌ Non, cela décrit le chiffrement asymétrique, pas le symétrique.",
      },
      {
        id: "c",
        text: "Un chiffrement qui ne peut pas être déchiffré",
        isCorrect: false,
        explanation:
          "❌ Non, le chiffrement symétrique est réversible si vous avez la clé.",
      },
      {
        id: "d",
        text: "Un chiffrement réversible uniquement",
        isCorrect: false,
        explanation:
          "❌ Ce n'est pas seulement réversible, c'est un chiffrement avec une seule clé.",
      },
    ],
  },
  {
    id: "security-4",
    question: "Qu'est-ce qu'un certificat SSL/TLS ?",
    type: "single",
    difficulty: "intermediate",
    points: 15,
    options: [
      {
        id: "a",
        text: "Un fichier qui permet l'authentification d'un site web",
        isCorrect: true,
        explanation:
          "✅ Exact ! Il permet de sécuriser les échanges entre le navigateur et le serveur.",
      },
      {
        id: "b",
        text: "Un protocole de chiffrement",
        isCorrect: false,
        explanation:
          "❌ Non, c'est un fichier utilisé par les protocoles SSL/TLS.",
      },
      {
        id: "c",
        text: "Un type de virus",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas un virus.",
      },
      {
        id: "d",
        text: "Un logiciel antivirus",
        isCorrect: false,
        explanation:
          "❌ Non, ce n'est pas un logiciel antivirus. C'est un certificat de sécurité.",
      },
    ],
  },
  {
    id: "security-5",
    question: "Qu'est-ce qu'une attaque de phishing ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Une tentative de voler des informations en se faisant passer pour une entité de confiance",
        isCorrect: true,
        explanation:
          "✅ Exact ! C'est une technique d'ingénierie sociale très courante.",
      },
      {
        id: "b",
        text: "Un type de virus informatique",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas un virus.",
      },
      {
        id: "c",
        text: "Une méthode de sauvegarde",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas une méthode de sauvegarde.",
      },
      {
        id: "d",
        text: "Un protocole de sécurité",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas un protocole de sécurité.",
      },
    ],
  },
  {
    id: "security-6",
    question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Utiliser deux mots de passe différents",
        isCorrect: false,
        explanation:
          "❌ Non, ce n'est pas simplement deux mots de passe. La 2FA utilise des facteurs d'authentification différents.",
      },
      {
        id: "b",
        text: "Utiliser deux méthodes d'authentification différentes",
        isCorrect: true,
        explanation:
          "✅ Exact ! La 2FA combine quelque chose que vous savez (mot de passe) avec quelque chose que vous avez (téléphone, token) ou quelque chose que vous êtes (biométrie).",
      },
      {
        id: "c",
        text: "Se connecter deux fois",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas cela la 2FA.",
      },
      {
        id: "d",
        text: "Avoir deux comptes utilisateur",
        isCorrect: false,
        explanation: "❌ Non, cela n'a rien à voir avec la 2FA.",
      },
    ],
  },
  {
    id: "security-7",
    question: "Qu'est-ce qu'un firewall ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Un logiciel de sauvegarde",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas un logiciel de sauvegarde.",
      },
      {
        id: "b",
        text: "Un système qui contrôle le trafic réseau entrant et sortant",
        isCorrect: true,
        explanation:
          "✅ Exact ! Un pare-feu filtre le trafic réseau pour bloquer les communications non autorisées.",
      },
      {
        id: "c",
        text: "Un type de virus",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas un virus.",
      },
      {
        id: "d",
        text: "Un protocole de communication",
        isCorrect: false,
        explanation: "❌ Non, ce n'est pas un protocole de communication.",
      },
    ],
  },
  {
    id: "security-8",
    question: "Qu'est-ce que le principle of least privilege ?",
    type: "single",
    difficulty: "advanced",
    points: 20,
    options: [
      {
        id: "a",
        text: "Donner tous les droits à tous les utilisateurs",
        isCorrect: false,
        explanation:
          "❌ Non, c'est exactement l'opposé du principe du moindre privilège.",
      },
      {
        id: "b",
        text: "Accorder uniquement les privilèges minimum nécessaires pour accomplir une tâche",
        isCorrect: true,
        explanation:
          "✅ Exact ! Ce principe limite les dégâts potentiels en cas de compromission d'un compte.",
      },
      {
        id: "c",
        text: "Créer un seul compte administrateur",
        isCorrect: false,
        explanation:
          "❌ Non, cela ne respecte pas le principe du moindre privilège.",
      },
      {
        id: "d",
        text: "Éviter d'utiliser des mots de passe",
        isCorrect: false,
        explanation:
          "❌ Non, les mots de passe sont essentiels pour l'authentification.",
      },
    ],
  },
];
