// Cours Docker - De l'initiation à l'orchestration

export const dockerCourses = [
  {
    id: "docker-basics",
    title: "Docker pour Débutants",
    description: "Maîtrisez la conteneurisation avec Docker",
    duration: "3h",
    difficulty: "Débutant",
    objectives: [
      "Comprendre les concepts de conteneurisation",
      "Créer et gérer des conteneurs Docker",
      "Écrire des Dockerfiles efficaces",
      "Utiliser Docker Compose pour les apps multi-conteneurs",
    ],
    modules: [
      {
        title: "Introduction à Docker",
        content: "Docker révolutionne le déploiement d'applications...",
        videoUrl: "https://example.com/docker-intro",
        exercises: [
          {
            title: "Premier conteneur Docker",
            description: "Lancez votre premier conteneur avec docker run",
            estimatedTime: "15min",
          },
        ],
      },
      {
        title: "Création d'images avec Dockerfile",
        content: "Les Dockerfiles définissent comment construire vos images...",
        videoUrl: "https://example.com/dockerfile-basics",
        exercises: [
          {
            title: "Créer une image personnalisée",
            description: "Écrivez un Dockerfile pour une app Node.js",
            estimatedTime: "45min",
          },
        ],
      },
    ],
  },
  {
    id: "docker-compose",
    title: "Docker Compose et Orchestration",
    description: "Gérez des applications complexes avec Docker Compose",
    duration: "2h",
    difficulty: "Intermédiaire",
    objectives: [
      "Orchestrer plusieurs services avec Compose",
      "Gérer les réseaux et volumes",
      "Debugging et monitoring",
      "Production best practices",
    ],
    modules: [],
  },
];

export default dockerCourses;
