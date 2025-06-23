export const awsQuestions = [
  {
    question: "Qu'est-ce qu'EC2 dans AWS ?",
    options: [
      "Un service de calcul élastique (serveurs virtuels)",
      "Un service de stockage de fichiers",
      "Un service de base de données",
      "Un service de réseau de diffusion de contenu",
    ],
    correctAnswer: 0,
    category: "EC2",
    difficulty: "Débutant",
  },
  {
    question: "Quel est le service de stockage principal d'AWS ?",
    options: ["EFS", "EBS", "S3", "Glacier"],
    correctAnswer: 2,
    category: "Storage",
    difficulty: "Débutant",
  },
  {
    question: "Qu'est-ce qu'un VPC dans AWS ?",
    options: [
      "Un centre de données physique",
      "Un réseau privé virtuel dans le cloud AWS",
      "Un service de calcul",
      "Un service de notification",
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "Intermédiaire",
  },
  {
    question: "Quel service AWS est utilisé pour l'équilibrage de charge ?",
    options: [
      "CloudWatch",
      "Route 53",
      "Elastic Load Balancer (ELB)",
      "CloudFront",
    ],
    correctAnswer: 2,
    category: "Load Balancing",
    difficulty: "Intermédiaire",
  },
  {
    question: "Qu'est-ce que IAM dans AWS ?",
    options: [
      "Un service de monitoring",
      "Un service de gestion des identités et des accès",
      "Un service de base de données",
      "Un service de stockage",
    ],
    correctAnswer: 1,
    category: "Security",
    difficulty: "Intermédiaire",
  },
  {
    question:
      "Quel service AWS fournit une base de données relationnelle managée ?",
    options: ["DynamoDB", "ElastiCache", "RDS", "Redshift"],
    correctAnswer: 2,
    category: "Database",
    difficulty: "Intermédiaire",
  },
  {
    question: "Qu'est-ce que Lambda dans AWS ?",
    options: [
      "Un service de stockage",
      "Un service de calcul sans serveur (serverless)",
      "Un service de réseau",
      "Un service de base de données",
    ],
    correctAnswer: 1,
    category: "Serverless",
    difficulty: "Avancé",
  },
  {
    question: "Comment surveiller les performances des ressources AWS ?",
    options: ["Avec EC2", "Avec S3", "Avec CloudWatch", "Avec Route 53"],
    correctAnswer: 2,
    category: "Monitoring",
    difficulty: "Intermédiaire",
  },
];
