import { Question } from "../../../types";

export const terraformQuestions: Question[] = [
  {
    id: "terraform-1",
    question: "Qu'est-ce que Terraform ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Un outil d'Infrastructure as Code pour provisionner des ressources cloud",
        isCorrect: true,
        explanation:
          "Terraform permet de définir l'infrastructure dans du code déclaratif.",
      },
      {
        id: "b",
        text: "Un conteneur Docker",
        isCorrect: false,
        explanation: "Terraform n'est pas un conteneur.",
      },
      {
        id: "c",
        text: "Un langage de programmation",
        isCorrect: false,
        explanation: "Terraform est un outil, pas un langage (utilise HCL).",
      },
      {
        id: "d",
        text: "Une base de données",
        isCorrect: false,
        explanation: "Terraform n'est pas une base de données.",
      },
    ],
  },
  {
    id: "terraform-2",
    question: "Qu'est-ce qu'un provider en Terraform ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Un plugin qui permet d'interagir avec une API spécifique (AWS, Azure, etc.)",
        isCorrect: true,
        explanation:
          "Les providers traduisent les ressources Terraform en appels API.",
      },
      {
        id: "b",
        text: "Un fichier de configuration",
        isCorrect: false,
        explanation: "Le provider est un plugin, pas un fichier.",
      },
      {
        id: "c",
        text: "Une ressource cloud",
        isCorrect: false,
        explanation: "Le provider gère les ressources, il n'en est pas une.",
      },
      {
        id: "d",
        text: "Un serveur distant",
        isCorrect: false,
        explanation: "Le provider s'exécute localement.",
      },
    ],
  },
  {
    id: "terraform-3",
    question: "Quelle est la séquence correcte des commandes Terraform ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "terraform init, terraform plan, terraform apply",
        isCorrect: true,
        explanation:
          "Init initialise, plan planifie, apply exécute les changements.",
      },
      {
        id: "b",
        text: "terraform apply, terraform init, terraform plan",
        isCorrect: false,
        explanation: "Il faut d'abord initialiser avec init.",
      },
      {
        id: "c",
        text: "terraform plan, terraform init, terraform apply",
        isCorrect: false,
        explanation: "L'initialisation doit se faire en premier.",
      },
      {
        id: "d",
        text: "terraform init, terraform apply, terraform plan",
        isCorrect: false,
        explanation: "Il vaut mieux planifier avant d'appliquer.",
      },
    ],
  },
  {
    id: "terraform-4",
    question: "Qu'est-ce que le state en Terraform ?",
    type: "single",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Un fichier qui trace l'état actuel de l'infrastructure gérée",
        isCorrect: true,
        explanation:
          "✅ Correct ! Le state file (terraform.tfstate) maintient la correspondance entre votre configuration Terraform et l'infrastructure réelle. Il est crucial pour la gestion des changements.",
        documentationUrl:
          "https://developer.hashicorp.com/terraform/language/state",
      },
      {
        id: "b",
        text: "Un fichier de sauvegarde automatique",
        isCorrect: false,
        explanation:
          "❌ Le state n'est pas une sauvegarde. C'est un mapping entre votre code et l'infrastructure réelle. Les sauvegardes sont importantes mais séparées du state.",
        documentationUrl:
          "https://developer.hashicorp.com/terraform/language/state",
      },
      {
        id: "c",
        text: "La configuration Terraform",
        isCorrect: false,
        explanation:
          "❌ La configuration (.tf files) et le state sont différents. La config décrit ce que vous voulez, le state décrit ce qui existe.",
        documentationUrl:
          "https://developer.hashicorp.com/terraform/language/state",
      },
      {
        id: "d",
        text: "Un log des erreurs",
        isCorrect: false,
        explanation:
          "❌ Le state ne stocke pas les erreurs. Il contient les métadonnées des ressources gérées par Terraform.",
        documentationUrl:
          "https://developer.hashicorp.com/terraform/language/state",
      },
    ],
  },
  {
    id: "terraform-5",
    question: "Quels sont les avantages de l'Infrastructure as Code ?",
    type: "multiple",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Reproductibilité des environnements",
        isCorrect: true,
        explanation: "Le code assure la cohérence entre environnements.",
      },
      {
        id: "b",
        text: "Versioning et collaboration via Git",
        isCorrect: true,
        explanation: "Le code peut être versionné et partagé facilement.",
      },
      {
        id: "c",
        text: "Automatisation du déploiement",
        isCorrect: true,
        explanation: "Supprime les tâches manuelles répétitives.",
      },
      {
        id: "d",
        text: "Coût réduit automatiquement",
        isCorrect: false,
        explanation:
          "IaC aide à optimiser mais ne réduit pas automatiquement les coûts.",
      },
    ],
  },
  {
    id: "terraform-6",
    question: "Qu'est-ce qu'un module Terraform ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Un ensemble réutilisable de ressources Terraform",
        isCorrect: true,
        explanation:
          "✅ Parfait ! Les modules permettent de réutiliser et organiser le code Terraform. Ils encapsulent des ressources liées et peuvent être partagés entre projets.",
        documentationUrl:
          "https://developer.hashicorp.com/terraform/language/modules",
      },
      {
        id: "b",
        text: "Un fichier de configuration unique",
        isCorrect: false,
        explanation:
          "❌ Un module peut contenir plusieurs fichiers .tf, variables.tf, outputs.tf, etc. C'est un ensemble cohérent de fichiers.",
        documentationUrl:
          "https://developer.hashicorp.com/terraform/language/modules",
      },
      {
        id: "c",
        text: "Une commande Terraform",
        isCorrect: false,
        explanation:
          "❌ Les modules sont des structures de code (dossiers avec des fichiers .tf), pas des commandes. Vous les utilisez avec 'module' dans votre configuration.",
        documentationUrl:
          "https://developer.hashicorp.com/terraform/language/modules",
      },
      {
        id: "d",
        text: "Un type de ressource cloud",
        isCorrect: false,
        explanation:
          "❌ Les modules regroupent et abstraient des ressources cloud, mais ne sont pas eux-mêmes des ressources.",
        documentationUrl:
          "https://developer.hashicorp.com/terraform/language/modules",
      },
    ],
  },
  {
    id: "terraform-7",
    question: "Comment gérer les secrets en Terraform ?",
    type: "multiple",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Utiliser des variables d'environnement",
        isCorrect: true,
        explanation:
          "Les variables d'environnement évitent d'exposer les secrets.",
      },
      {
        id: "b",
        text: "Utiliser des outils comme HashiCorp Vault",
        isCorrect: true,
        explanation: "Vault est conçu pour la gestion sécurisée des secrets.",
      },
      {
        id: "c",
        text: "Les écrire directement dans les fichiers .tf",
        isCorrect: false,
        explanation: "Jamais de secrets en dur dans le code !",
      },
      {
        id: "d",
        text: "Utiliser terraform.tfvars avec .gitignore",
        isCorrect: true,
        explanation:
          "tfvars peut contenir des secrets s'il est ignoré par Git.",
      },
    ],
  },
];
