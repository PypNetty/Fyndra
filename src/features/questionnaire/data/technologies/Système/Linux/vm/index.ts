export const linuxVMs = [
  {
    id: "ubuntu-basics",
    name: "Ubuntu Server - Configuration de base",
    description:
      "VM Ubuntu Server pour apprendre les commandes de base et l'administration système",
    os: "Ubuntu 22.04 LTS",
    specs: {
      cpu: "2 cores",
      ram: "2GB",
      storage: "20GB",
    },
    preInstalled: [
      "Ubuntu Server 22.04",
      "SSH Server",
      "Nano, Vim",
      "Curl, Wget",
      "Git",
    ],
    exercises: [
      "Navigation dans le système de fichiers",
      "Gestion des utilisateurs et permissions",
      "Installation de packages avec apt",
      "Configuration de services systemd",
    ],
  },
  {
    id: "centos-production",
    name: "CentOS - Environnement de production",
    description: "VM CentOS pour simuler un environnement de production réel",
    os: "CentOS 8",
    specs: {
      cpu: "4 cores",
      ram: "4GB",
      storage: "40GB",
    },
    preInstalled: [
      "CentOS 8",
      "Apache/Nginx",
      "MySQL/PostgreSQL",
      "Docker",
      "Monitoring tools",
    ],
    exercises: [
      "Déploiement d'applications web",
      "Configuration de load balancer",
      "Mise en place de monitoring",
      "Sauvegarde et restauration",
    ],
  },
];
