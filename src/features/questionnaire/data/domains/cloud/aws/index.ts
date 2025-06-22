import { Question } from "../../../types";

export const awsQuestions: Question[] = [
  {
    id: "aws-1",
    question: "Qu'est-ce qu'EC2 dans AWS ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Un service de calcul élastique (serveurs virtuels)",
        isCorrect: true,
        explanation:
          "EC2 fournit des instances de calcul redimensionnables dans le cloud.",
      },
      {
        id: "b",
        text: "Un service de stockage",
        isCorrect: false,
        explanation: "Pour le stockage, AWS propose S3, EBS, etc.",
      },
      {
        id: "c",
        text: "Un service de base de données",
        isCorrect: false,
        explanation:
          "Pour les bases de données, AWS propose RDS, DynamoDB, etc.",
      },
      {
        id: "d",
        text: "Un service de réseau",
        isCorrect: false,
        explanation: "Pour le réseau, AWS propose VPC, CloudFront, etc.",
      },
    ],
  },
  {
    id: "aws-2",
    question: "Qu'est-ce que S3 dans AWS ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Un service de stockage d'objets scalable",
        isCorrect: true,
        explanation:
          "S3 stocke des fichiers de façon hautement disponible et durable.",
      },
      {
        id: "b",
        text: "Un service de calcul",
        isCorrect: false,
        explanation: "S3 ne fait pas de calcul, seulement du stockage.",
      },
      {
        id: "c",
        text: "Un service de base de données",
        isCorrect: false,
        explanation: "S3 stocke des fichiers, pas des données structurées.",
      },
      {
        id: "d",
        text: "Un service de monitoring",
        isCorrect: false,
        explanation: "Pour le monitoring, AWS propose CloudWatch.",
      },
    ],
  },
  {
    id: "aws-3",
    question: "Quels sont les principaux modèles de service cloud ?",
    type: "multiple",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "IaaS (Infrastructure as a Service)",
        isCorrect: true,
        explanation:
          "IaaS fournit l'infrastructure virtualisée (serveurs, réseau, stockage).",
      },
      {
        id: "b",
        text: "PaaS (Platform as a Service)",
        isCorrect: true,
        explanation:
          "PaaS fournit une plateforme de développement et déploiement.",
      },
      {
        id: "c",
        text: "SaaS (Software as a Service)",
        isCorrect: true,
        explanation: "SaaS fournit des applications complètes via le web.",
      },
      {
        id: "d",
        text: "DaaS (Data as a Service)",
        isCorrect: false,
        explanation:
          "DaaS existe mais n'est pas un des trois modèles principaux.",
      },
    ],
  },
  {
    id: "aws-4",
    question: "Qu'est-ce qu'un VPC dans AWS ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Un réseau virtuel privé isolé dans le cloud AWS",
        isCorrect: true,
        explanation:
          "VPC permet de créer un réseau logiquement isolé dans AWS.",
      },
      {
        id: "b",
        text: "Un serveur virtuel",
        isCorrect: false,
        explanation: "Les serveurs virtuels sont les instances EC2.",
      },
      {
        id: "c",
        text: "Un service de stockage",
        isCorrect: false,
        explanation: "VPC concerne le réseau, pas le stockage.",
      },
      {
        id: "d",
        text: "Un service de sauvegarde",
        isCorrect: false,
        explanation: "VPC n'est pas lié aux sauvegardes.",
      },
    ],
  },
  {
    id: "aws-5",
    question: "Qu'est-ce que l'auto-scaling dans AWS ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Ajustement automatique du nombre d'instances selon la demande",
        isCorrect: true,
        explanation:
          "L'auto-scaling adapte automatiquement les ressources à la charge.",
      },
      {
        id: "b",
        text: "Sauvegarde automatique des données",
        isCorrect: false,
        explanation:
          "L'auto-scaling concerne les instances, pas les sauvegardes.",
      },
      {
        id: "c",
        text: "Mise à jour automatique des applications",
        isCorrect: false,
        explanation: "L'auto-scaling gère la capacité, pas les mises à jour.",
      },
      {
        id: "d",
        text: "Chiffrement automatique",
        isCorrect: false,
        explanation: "L'auto-scaling n'est pas lié au chiffrement.",
      },
    ],
  },
  {
    id: "aws-6",
    question: "Qu'est-ce que Lambda dans AWS ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Un service de calcul serverless pour exécuter du code",
        isCorrect: true,
        explanation:
          "✅ Exact ! AWS Lambda exécute votre code sans que vous ayez à gérer des serveurs. Vous payez seulement pour le temps de calcul consommé - pas de serveurs inactifs !",
        documentationUrl:
          "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
      },
      {
        id: "b",
        text: "Un service de base de données",
        isCorrect: false,
        explanation:
          "❌ Lambda n'est pas une base de données. Pour les bases de données, AWS propose RDS, DynamoDB, Aurora, etc.",
        documentationUrl:
          "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
      },
      {
        id: "c",
        text: "Un service de stockage",
        isCorrect: false,
        explanation:
          "❌ Lambda ne stocke pas de données de manière persistante. Pour le stockage, utilisez S3, EBS, EFS selon vos besoins.",
        documentationUrl:
          "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
      },
      {
        id: "d",
        text: "Un service de réseau",
        isCorrect: false,
        explanation:
          "❌ Lambda concerne le calcul serverless, pas la gestion réseau. Pour le réseau, AWS propose VPC, CloudFront, Route 53, etc.",
        documentationUrl:
          "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
      },
    ],
  },
  {
    id: "aws-7",
    question: "Quels sont les avantages du cloud computing ?",
    type: "multiple",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Élasticité et scalabilité",
        isCorrect: true,
        explanation:
          "Le cloud permet d'ajuster les ressources selon les besoins.",
      },
      {
        id: "b",
        text: "Modèle de paiement à l'usage",
        isCorrect: true,
        explanation: "On ne paie que ce qu'on utilise.",
      },
      {
        id: "c",
        text: "Haute disponibilité",
        isCorrect: true,
        explanation: "Les services cloud offrent une disponibilité élevée.",
      },
      {
        id: "d",
        text: "Contrôle total du matériel",
        isCorrect: false,
        explanation:
          "Dans le cloud, on n'a pas le contrôle du matériel physique.",
      },
    ],
  },
  {
    id: "aws-8",
    question: "Qu'est-ce que CloudFormation ?",
    type: "single",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Un service d'Infrastructure as Code pour AWS",
        isCorrect: true,
        explanation:
          "✅ Parfait ! CloudFormation permet de décrire votre infrastructure AWS en JSON/YAML. Il provisionne les ressources de manière reproductible et gère les dépendances automatiquement.",
        documentationUrl:
          "https://docs.aws.amazon.com/cloudformation/latest/userguide/Welcome.html",
      },
      {
        id: "b",
        text: "Un service de surveillance",
        isCorrect: false,
        explanation:
          "❌ Pour la surveillance, AWS propose CloudWatch (métriques), X-Ray (tracing), ou CloudTrail (audit).",
        documentationUrl:
          "https://docs.aws.amazon.com/cloudformation/latest/userguide/Welcome.html",
      },
      {
        id: "c",
        text: "Un service de sauvegarde",
        isCorrect: false,
        explanation:
          "❌ CloudFormation ne fait pas de sauvegardes. Pour cela, utilisez AWS Backup, S3, ou les snapshots EBS.",
        documentationUrl:
          "https://docs.aws.amazon.com/cloudformation/latest/userguide/Welcome.html",
      },
      {
        id: "d",
        text: "Un service de déploiement d'applications",
        isCorrect: false,
        explanation:
          "❌ Pour le déploiement d'applications, AWS propose CodeDeploy, CodePipeline, ou Elastic Beanstalk.",
        documentationUrl:
          "https://docs.aws.amazon.com/cloudformation/latest/userguide/Welcome.html",
      },
    ],
  },
  {
    id: "aws-9",
    question: "Qu'est-ce qu'IAM dans AWS ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Identity and Access Management - gestion des identités et accès",
        isCorrect: true,
        explanation:
          "✅ Exactement ! IAM contrôle qui peut accéder à quoi dans AWS. Il gère les utilisateurs, groupes, rôles et politiques de sécurité.",
        documentationUrl:
          "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
      },
      {
        id: "b",
        text: "Instant Access Memory",
        isCorrect: false,
        explanation:
          "❌ IAM ne concerne pas la mémoire. C'est un service de sécurité et d'authentification.",
        documentationUrl:
          "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
      },
      {
        id: "c",
        text: "Infrastructure Automation Management",
        isCorrect: false,
        explanation:
          "❌ IAM ne gère pas l'automatisation d'infrastructure. Pour cela, utilisez CloudFormation, CDK, ou Terraform.",
        documentationUrl:
          "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
      },
      {
        id: "d",
        text: "Internet Application Monitoring",
        isCorrect: false,
        explanation:
          "❌ IAM ne fait pas de monitoring d'applications. Pour le monitoring, AWS propose CloudWatch.",
        documentationUrl:
          "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
      },
    ],
  },
  {
    id: "aws-10",
    question: "Quels sont les types de stockage EBS ?",
    type: "multiple",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "gp3 (General Purpose SSD)",
        isCorrect: true,
        explanation:
          "gp3 offre un bon équilibre prix/performance pour la plupart des workloads.",
      },
      {
        id: "b",
        text: "io2 (Provisioned IOPS SSD)",
        isCorrect: true,
        explanation:
          "io2 pour les applications nécessitant des IOPS élevées et constantes.",
      },
      {
        id: "c",
        text: "st1 (Throughput Optimized HDD)",
        isCorrect: true,
        explanation: "st1 optimisé pour le débit, idéal pour le big data.",
      },
      {
        id: "d",
        text: "s3 (Object Storage)",
        isCorrect: false,
        explanation:
          "S3 n'est pas un type de stockage EBS, c'est un service séparé.",
      },
    ],
  },
];
