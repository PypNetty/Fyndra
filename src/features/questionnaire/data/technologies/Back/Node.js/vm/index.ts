// Configuration de machines virtuelles pour Node.js

export const nodejsVMs = [
  {
    id: "nodejs-server-env",
    name: "Serveur Node.js Production-Ready",
    description:
      "VM configurée pour le développement et déploiement d'applications Node.js",
    osType: "Ubuntu 22.04 LTS",
    specifications: {
      cpu: "4 vCPUs",
      memory: "8 GB RAM",
      storage: "40 GB SSD",
    },
    preInstalledTools: [
      "Node.js 20.x (LTS)",
      "pnpm & yarn",
      "PM2 (Process Manager)",
      "MongoDB 7.x",
      "Redis 7.x",
      "Nginx",
      "VS Code Server",
      "Docker & Docker Compose",
    ],
    accessInfo: {
      sshPort: 22,
      webPort: 3000,
      mongoPort: 27017,
      redisPort: 6379,
      nginxPort: 80,
    },
    setupInstructions: [
      "Se connecter via SSH",
      "Configurer les variables d'environnement",
      "Démarrer MongoDB et Redis",
      "Cloner votre projet Node.js",
      "Installer les dépendances avec pnpm install",
      "Lancer l'application avec PM2",
    ],
  },
  // Plus de configurations VM...
];

export default nodejsVMs;
