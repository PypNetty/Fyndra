export const terraformQuestions = [
  {
    question: "Qu'est-ce que Terraform ?",
    options: [
      "Un service cloud",
      "Un outil d'Infrastructure as Code (IaC)",
      "Un système d'exploitation",
      "Un langage de programmation",
    ],
    correctAnswer: 1,
    category: "Terraform Basics",
    difficulty: "Débutant",
  },
  {
    question:
      "Dans quel langage sont écrits les fichiers de configuration Terraform ?",
    options: ["JSON", "YAML", "HCL (HashiCorp Configuration Language)", "XML"],
    correctAnswer: 2,
    category: "Configuration",
    difficulty: "Débutant",
  },
  {
    question: "Quelle commande initialise un répertoire de travail Terraform ?",
    options: [
      "terraform start",
      "terraform init",
      "terraform begin",
      "terraform setup",
    ],
    correctAnswer: 1,
    category: "Commands",
    difficulty: "Débutant",
  },
  {
    question: "Qu'est-ce qu'un provider dans Terraform ?",
    options: [
      "Un fichier de configuration",
      "Un plugin qui permet d'interagir avec une API (AWS, Azure, etc.)",
      "Une variable d'environnement",
      "Un type de ressource",
    ],
    correctAnswer: 1,
    category: "Providers",
    difficulty: "Intermédiaire",
  },
  {
    question:
      "Quelle commande affiche les changements que Terraform va appliquer ?",
    options: [
      "terraform show",
      "terraform preview",
      "terraform plan",
      "terraform check",
    ],
    correctAnswer: 2,
    category: "Commands",
    difficulty: "Débutant",
  },
  {
    question: "Qu'est-ce que le state file (.tfstate) dans Terraform ?",
    options: [
      "Un fichier de configuration",
      "Un fichier qui stocke l'état actuel de l'infrastructure",
      "Un fichier de logs",
      "Un fichier de sauvegarde",
    ],
    correctAnswer: 1,
    category: "State Management",
    difficulty: "Intermédiaire",
  },
  {
    question: "Comment gérer les secrets de manière sécurisée dans Terraform ?",
    options: [
      "Les écrire directement dans les fichiers .tf",
      "Utiliser des variables d'environnement ou des outils comme Vault",
      "Les mettre dans le fichier state",
      "Les ignorer complètement",
    ],
    correctAnswer: 1,
    category: "Security",
    difficulty: "Avancé",
  },
  {
    question: "Qu'est-ce qu'un module Terraform ?",
    options: [
      "Un type de provider",
      "Un ensemble de ressources réutilisables",
      "Un fichier de state",
      "Une commande Terraform",
    ],
    correctAnswer: 1,
    category: "Modules",
    difficulty: "Avancé",
  },
];
