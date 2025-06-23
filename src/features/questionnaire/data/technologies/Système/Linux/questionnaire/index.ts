export const linuxQuestions = [
  {
    id: 1,
    question: "Quelle commande permet de lister les fichiers d'un répertoire ?",
    options: ["ls", "dir", "list", "show"],
    correctAnswer: 0,
    explanation:
      "La commande 'ls' (list) est utilisée pour afficher le contenu d'un répertoire sous Linux.",
    difficulty: "Débutant",
    category: "Commandes de base",
  },
  {
    id: 2,
    question:
      "Comment changer les permissions d'un fichier pour le rendre exécutable par le propriétaire ?",
    options: [
      "chmod +x fichier",
      "chown +x fichier",
      "chgrp +x fichier",
      "chperm +x fichier",
    ],
    correctAnswer: 0,
    explanation:
      "La commande 'chmod +x' ajoute les permissions d'exécution au fichier.",
    difficulty: "Débutant",
    category: "Permissions",
  },
  {
    id: 3,
    question:
      "Quelle commande permet de voir les processus en cours d'exécution ?",
    options: ["ps", "top", "htop", "Toutes les réponses"],
    correctAnswer: 3,
    explanation:
      "ps, top et htop permettent tous de voir les processus, avec des niveaux de détail différents.",
    difficulty: "Débutant",
    category: "Processus",
  },
  {
    id: 4,
    question: "Comment créer un utilisateur avec un répertoire home ?",
    options: [
      "useradd -m username",
      "adduser username",
      "createuser username",
      "user add username",
    ],
    correctAnswer: 0,
    explanation:
      "useradd -m crée un utilisateur avec son répertoire home automatiquement.",
    difficulty: "Intermédiaire",
    category: "Administration",
  },
  {
    id: 5,
    question: "Quelle commande permet de monter un système de fichiers ?",
    options: ["mount", "attach", "connect", "link"],
    correctAnswer: 0,
    explanation:
      "La commande 'mount' permet d'attacher un système de fichiers à l'arborescence.",
    difficulty: "Intermédiaire",
    category: "Système de fichiers",
  },
  {
    id: 6,
    question:
      "Comment rediriger la sortie d'une commande vers un fichier en écrasant le contenu ?",
    options: ["> fichier", ">> fichier", "| fichier", "< fichier"],
    correctAnswer: 0,
    explanation:
      "Le symbole '>' redirige la sortie vers un fichier en écrasant son contenu existant.",
    difficulty: "Intermédiaire",
    category: "Redirection",
  },
  {
    id: 7,
    question:
      "Quelle commande permet de configurer un service pour qu'il démarre automatiquement ?",
    options: [
      "systemctl enable service",
      "service enable service",
      "chkconfig on service",
      "autostart service",
    ],
    correctAnswer: 0,
    explanation:
      "systemctl enable configure un service pour qu'il démarre automatiquement au boot.",
    difficulty: "Avancé",
    category: "Services",
  },
  {
    id: 8,
    question: "Comment créer une archive tar compressée avec gzip ?",
    options: [
      "tar -czf archive.tar.gz files",
      "tar -xzf archive.tar.gz",
      "gzip -c files > archive.tar.gz",
      "compress files archive.tar.gz",
    ],
    correctAnswer: 0,
    explanation:
      "tar -czf crée (-c) une archive compressée avec gzip (-z) dans un fichier (-f).",
    difficulty: "Avancé",
    category: "Archives",
  },
];
