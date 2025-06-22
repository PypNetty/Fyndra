import { Question } from "../../../types";

export const dockerQuestions: Question[] = [
  {
    id: "docker-1",
    question: "Qu'est-ce qu'un conteneur Docker ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Un environnement isolé contenant une application et ses dépendances",
        isCorrect: true,
        explanation:
          "✅ Parfait ! Un conteneur encapsule l'application avec tout ce dont elle a besoin pour s'exécuter : code, runtime, outils système, bibliothèques et paramètres.",
        documentationUrl: "https://docs.docker.com/get-started/overview/",
      },
      {
        id: "b",
        text: "Une machine virtuelle",
        isCorrect: false,
        explanation:
          "❌ Les conteneurs sont plus légers que les VMs. Ils partagent le kernel de l'OS hôte, contrairement aux VMs qui virtualisent tout le système d'exploitation.",
        documentationUrl: "https://docs.docker.com/get-started/overview/",
      },
      {
        id: "c",
        text: "Un serveur physique",
        isCorrect: false,
        explanation:
          "❌ Les conteneurs sont virtualisés et s'exécutent sur des serveurs physiques ou virtuels, mais ne sont pas eux-mêmes physiques.",
        documentationUrl: "https://docs.docker.com/get-started/overview/",
      },
      {
        id: "d",
        text: "Un système d'exploitation",
        isCorrect: false,
        explanation:
          "❌ Les conteneurs partagent le kernel de l'OS hôte et ne contiennent que l'application et ses dépendances, pas un OS complet.",
        documentationUrl: "https://docs.docker.com/get-started/overview/",
      },
    ],
  },
  {
    id: "docker-2",
    question: "Quelle est la différence entre une image et un conteneur ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "L'image est un template en lecture seule, le conteneur est une instance en cours d'exécution",
        isCorrect: true,
        explanation:
          "L'image est statique, le conteneur est dynamique et exécutable.",
      },
      {
        id: "b",
        text: "Il n'y a pas de différence",
        isCorrect: false,
        explanation: "Ce sont deux concepts distincts en Docker.",
      },
      {
        id: "c",
        text: "L'image est plus rapide que le conteneur",
        isCorrect: false,
        explanation: "Ce n'est pas une question de performance.",
      },
      {
        id: "d",
        text: "Le conteneur contient plusieurs images",
        isCorrect: false,
        explanation: "C'est l'inverse : un conteneur est basé sur une image.",
      },
    ],
  },
  {
    id: "docker-3",
    question: "Que fait la commande 'docker build' ?",
    type: "single",
    difficulty: "easy",
    points: 10,
    options: [
      {
        id: "a",
        text: "Crée une image Docker à partir d'un Dockerfile",
        isCorrect: true,
        explanation: "docker build lit le Dockerfile et crée une image.",
      },
      {
        id: "b",
        text: "Lance un conteneur",
        isCorrect: false,
        explanation: "Pour lancer un conteneur, on utilise 'docker run'.",
      },
      {
        id: "c",
        text: "Supprime une image",
        isCorrect: false,
        explanation: "Pour supprimer, on utilise 'docker rmi'.",
      },
      {
        id: "d",
        text: "Télécharge une image depuis Docker Hub",
        isCorrect: false,
        explanation: "Pour télécharger, on utilise 'docker pull'.",
      },
    ],
  },
  {
    id: "docker-4",
    question:
      "Quelles instructions sont couramment utilisées dans un Dockerfile ?",
    type: "multiple",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "FROM pour spécifier l'image de base",
        isCorrect: true,
        explanation: "FROM est obligatoire pour définir l'image parent.",
      },
      {
        id: "b",
        text: "COPY pour copier des fichiers",
        isCorrect: true,
        explanation: "COPY transfère des fichiers depuis l'hôte vers l'image.",
      },
      {
        id: "c",
        text: "RUN pour exécuter des commandes",
        isCorrect: true,
        explanation: "RUN exécute des commandes pendant la construction.",
      },
      {
        id: "d",
        text: "DELETE pour supprimer des fichiers",
        isCorrect: false,
        explanation: "DELETE n'existe pas en Dockerfile, on utilise RUN rm.",
      },
    ],
  },
  {
    id: "docker-5",
    question: "Comment exposer un port dans Docker ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Avec l'instruction EXPOSE dans le Dockerfile et -p lors du run",
        isCorrect: true,
        explanation: "EXPOSE documente le port, -p le mappe réellement.",
      },
      {
        id: "b",
        text: "Seulement avec EXPOSE",
        isCorrect: false,
        explanation: "EXPOSE seul ne suffit pas, il faut mapper avec -p.",
      },
      {
        id: "c",
        text: "Automatiquement par Docker",
        isCorrect: false,
        explanation: "Il faut explicitement configurer l'exposition.",
      },
      {
        id: "d",
        text: "Avec la commande docker port",
        isCorrect: false,
        explanation: "docker port affiche les ports, ne les configure pas.",
      },
    ],
  },
  {
    id: "docker-6",
    question: "Qu'est-ce qu'un volume Docker ?",
    type: "single",
    difficulty: "medium",
    points: 15,
    options: [
      {
        id: "a",
        text: "Un mécanisme de persistance des données entre l'hôte et le conteneur",
        isCorrect: true,
        explanation:
          "✅ Parfait ! Les volumes permettent de persister et partager des données. Ils survivent aux arrêts/redémarrages des conteneurs et peuvent être partagés entre conteneurs.",
        documentationUrl: "https://docs.docker.com/storage/volumes/",
      },
      {
        id: "b",
        text: "Une sauvegarde automatique du conteneur",
        isCorrect: false,
        explanation:
          "❌ Les volumes ne sont pas des sauvegardes automatiques. Pour les sauvegardes, utilisez docker commit, export/import, ou des outils de backup dédiés.",
        documentationUrl: "https://docs.docker.com/storage/volumes/",
      },
      {
        id: "c",
        text: "Un réseau entre conteneurs",
        isCorrect: false,
        explanation:
          "❌ Pour les réseaux entre conteneurs, Docker a les réseaux personnalisés (bridge, overlay, etc.), pas les volumes.",
        documentationUrl: "https://docs.docker.com/network/",
      },
      {
        id: "d",
        text: "Une image Docker compressée",
        isCorrect: false,
        explanation:
          "❌ Les volumes ne concernent pas la compression d'images. Les images sont gérées séparément avec docker build, pull, push, etc.",
        documentationUrl: "https://docs.docker.com/storage/volumes/",
      },
    ],
  },
  {
    id: "docker-7",
    question: "Que fait docker-compose ?",
    type: "multiple",
    difficulty: "hard",
    points: 20,
    options: [
      {
        id: "a",
        text: "Orchestre plusieurs conteneurs",
        isCorrect: true,
        explanation:
          "✅ Correct ! docker-compose gère des applications multi-conteneurs, permettant de démarrer/arrêter plusieurs services ensemble.",
        documentationUrl: "https://docs.docker.com/compose/",
      },
      {
        id: "b",
        text: "Définit les services dans un fichier YAML",
        isCorrect: true,
        explanation:
          "✅ Exact ! Le fichier docker-compose.yml décrit toute l'architecture de votre application : services, réseaux, volumes, variables d'environnement.",
        documentationUrl: "https://docs.docker.com/compose/compose-file/",
      },
      {
        id: "c",
        text: "Gère les réseaux et volumes automatiquement",
        isCorrect: true,
        explanation:
          "✅ Parfait ! Compose crée et gère automatiquement l'infrastructure nécessaire (réseaux internes, volumes nommés) pour vos services.",
        documentationUrl: "https://docs.docker.com/compose/networking/",
      },
      {
        id: "d",
        text: "Remplace Docker complètement",
        isCorrect: false,
        explanation:
          "❌ Compose s'appuie sur Docker et ne le remplace pas. C'est un outil d'orchestration qui utilise Docker en arrière-plan.",
        documentationUrl: "https://docs.docker.com/compose/",
      },
    ],
  },
];
