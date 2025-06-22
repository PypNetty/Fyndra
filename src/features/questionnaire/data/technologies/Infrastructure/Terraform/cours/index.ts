// Cours Terraform - Infrastructure as Code

export const terraformCourses = [
  {
    id: "terraform-fundamentals",
    title: "Terraform Fundamentals",
    description: "Apprenez l'Infrastructure as Code avec Terraform",
    duration: "4h",
    difficulty: "Intermédiaire",
    objectives: [
      "Comprendre les principes d'Infrastructure as Code",
      "Maîtriser la syntaxe HCL (HashiCorp Configuration Language)",
      "Gérer l'état (state) et les backends",
      "Créer des modules réutilisables",
    ],
    modules: [
      {
        title: "Introduction à Terraform",
        content:
          "Terraform permet de définir l'infrastructure en code déclaratif...",
        videoUrl: "https://example.com/terraform-intro",
        exercises: [
          {
            title: "Premier déploiement Terraform",
            description: "Créez votre première ressource avec Terraform",
            estimatedTime: "30min",
          },
        ],
      },
      {
        title: "State Management",
        content: "Le state file est crucial pour Terraform...",
        videoUrl: "https://example.com/terraform-state",
        exercises: [
          {
            title: "Configuration du backend remote",
            description: "Stockez le state dans S3 avec verrouillage DynamoDB",
            estimatedTime: "45min",
          },
        ],
      },
    ],
  },
  {
    id: "terraform-advanced",
    title: "Terraform Avancé",
    description: "Architectures complexes et best practices",
    duration: "5h",
    difficulty: "Avancé",
    objectives: [
      "Modules avancés et composition",
      "Workspaces et environnements",
      "Testing et validation",
      "CI/CD avec Terraform",
    ],
    modules: [],
  },
];

export default terraformCourses;
