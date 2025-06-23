export const dockerQuestions = [
  {
    question: "Qu'est-ce que Docker ?",
    options: [
      "Un système d'exploitation",
      "Une plateforme de conteneurisation",
      "Un langage de programmation",
      "Une base de données",
    ],
    correctAnswer: 1,
    category: "Docker Basics",
    difficulty: "Débutant",
  },
  {
    question:
      "Quelle est la différence entre une image et un conteneur Docker ?",
    options: [
      "Il n'y en a pas, c'est identique",
      "Une image est un modèle, un conteneur est une instance en cours d'exécution",
      "Un conteneur est plus léger qu'une image",
      "Une image s'exécute, un conteneur est statique",
    ],
    correctAnswer: 1,
    category: "Images & Containers",
    difficulty: "Intermédiaire",
  },
  {
    question: "Quel fichier utilise-t-on pour définir une image Docker ?",
    options: ["docker.config", "Dockerfile", "image.yml", "container.json"],
    correctAnswer: 1,
    category: "Dockerfile",
    difficulty: "Débutant",
  },
  {
    question: "Quelle commande permet de construire une image Docker ?",
    options: ["docker create", "docker make", "docker build", "docker compile"],
    correctAnswer: 2,
    category: "Commands",
    difficulty: "Débutant",
  },
  {
    question: "Comment exposer un port dans un conteneur Docker ?",
    options: [
      "Avec l'instruction EXPOSE dans le Dockerfile",
      "Avec l'option -p lors du docker run",
      "Les deux réponses ci-dessus",
      "Les ports sont automatiquement exposés",
    ],
    correctAnswer: 2,
    category: "Networking",
    difficulty: "Intermédiaire",
  },
  {
    question: "Qu'est-ce qu'un volume Docker ?",
    options: [
      "Une méthode pour augmenter l'espace disque",
      "Un mécanisme pour persister les données en dehors du conteneur",
      "Un type de réseau Docker",
      "Une commande Docker",
    ],
    correctAnswer: 1,
    category: "Volumes",
    difficulty: "Intermédiaire",
  },
  {
    question: "Qu'est-ce que Docker Compose ?",
    options: [
      "Un éditeur de Dockerfile",
      "Un outil pour orchestrer plusieurs conteneurs",
      "Un service cloud de Docker",
      "Une commande pour optimiser les images",
    ],
    correctAnswer: 1,
    category: "Docker Compose",
    difficulty: "Avancé",
  },
  {
    question: "Comment optimiser la taille d'une image Docker ?",
    options: [
      "Utiliser des images de base plus petites et un build multi-stage",
      "Inclure tous les outils possibles",
      "Utiliser uniquement Ubuntu comme base",
      "La taille n'a pas d'importance",
    ],
    correctAnswer: 0,
    category: "Optimization",
    difficulty: "Avancé",
  },
];
