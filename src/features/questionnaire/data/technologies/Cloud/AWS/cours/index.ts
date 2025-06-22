// Cours AWS - Du débutant à l'architecte cloud

export const awsCourses = [
  {
    id: "aws-fundamentals",
    title: "AWS Fundamentals",
    description: "Maîtrisez les services de base d'Amazon Web Services",
    duration: "4h",
    difficulty: "Intermédiaire",
    objectives: [
      "Comprendre l'infrastructure globale AWS",
      "Maîtriser EC2, S3, et VPC",
      "Gérer l'identité et les accès avec IAM",
      "Déployer des applications avec CloudFormation",
    ],
    modules: [
      {
        title: "Introduction à AWS",
        content:
          "Amazon Web Services (AWS) est la plateforme cloud la plus complète...",
        videoUrl: "https://example.com/aws-intro",
        exercises: [
          {
            title: "Création de votre première instance EC2",
            description: "Lancez et configurez une instance EC2",
            estimatedTime: "30min",
          },
        ],
      },
      {
        title: "Stockage avec S3",
        content: "Amazon S3 fournit un stockage d'objets hautement scalable...",
        videoUrl: "https://example.com/s3-basics",
        exercises: [
          {
            title: "Créer et configurer un bucket S3",
            description: "Stockage et sécurisation de fichiers",
            estimatedTime: "20min",
          },
        ],
      },
    ],
  },
  {
    id: "aws-advanced",
    title: "Architecture AWS Avancée",
    description: "Concevez des architectures cloud robustes et scalables",
    duration: "6h",
    difficulty: "Avancé",
    objectives: [
      "Architectures haute disponibilité",
      "Auto-scaling et load balancing",
      "Microservices avec containers",
      "Monitoring et observabilité",
    ],
    modules: [],
  },
];

export default awsCourses;
