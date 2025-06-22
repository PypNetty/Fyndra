// Configuration de machines virtuelles pour Docker

export const dockerVMs = [
  {
    id: "docker-playground",
    name: "Docker Playground",
    description: "Environnement d'apprentissage Docker avec tous les outils",
    osType: "Ubuntu 22.04 LTS",
    specifications: {
      cpu: "4 vCPUs",
      memory: "8 GB RAM",
      storage: "40 GB SSD",
    },
    preInstalledTools: [
      "Docker Engine 24.x",
      "Docker Compose v2",
      "Docker Desktop (GUI)",
      "VS Code + Docker extension",
      "Portainer (UI management)",
      "Git",
      "curl, wget, jq",
    ],
    accessInfo: {
      sshPort: 22,
      webPort: 3000,
      portainerPort: 9000,
      vncPort: 5901,
    },
    dockerAccess: {
      registries: ["Docker Hub", "Local registry"],
      permissions: "Full Docker daemon access",
      networkModes: ["bridge", "host", "custom networks"],
    },
    setupInstructions: [
      "Se connecter via SSH ou interface graphique (VNC)",
      "Docker est déjà configuré et prêt à l'emploi",
      "Accéder à Portainer: http://vm-ip:9000",
      "Commencer avec docker run hello-world",
    ],
  },
  {
    id: "docker-swarm-cluster",
    name: "Docker Swarm Cluster",
    description: "Cluster Docker Swarm pour l'orchestration avancée",
    osType: "Ubuntu 22.04 LTS",
    specifications: {
      cpu: "6 vCPUs (3 nodes x 2 vCPUs)",
      memory: "12 GB RAM (3 nodes x 4 GB)",
      storage: "60 GB SSD (3 nodes x 20 GB)",
    },
    preInstalledTools: [
      "Docker Engine avec Swarm mode",
      "Docker Compose",
      "Monitoring stack (Prometheus, Grafana)",
      "Log aggregation (ELK stack)",
      "Load balancer (Traefik)",
    ],
    accessInfo: {
      sshPort: 22,
      managerNode: "node1:2377",
      grafanaPort: 3001,
      traefikPort: 8080,
    },
    setupInstructions: [
      "Cluster pré-configuré avec 1 manager + 2 workers",
      "Se connecter au manager node",
      "Déployer des services avec docker service create",
      "Monitor via Grafana: http://manager-ip:3001",
    ],
  },
];

export default dockerVMs;
