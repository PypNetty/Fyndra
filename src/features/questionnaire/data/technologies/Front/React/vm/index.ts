// Configuration de machines virtuelles pour React

export const reactVMs = [
  {
    id: "react-dev-env",
    name: "Environnement de développement React",
    description: "VM préconfigurée avec Node.js, npm, et Create React App",
    osType: "Ubuntu 22.04",
    specifications: {
      cpu: "2 vCPUs",
      memory: "4 GB RAM",
      storage: "20 GB SSD",
    },
    preInstalledTools: [
      "Node.js 18.x",
      "npm / yarn",
      "VS Code",
      "Git",
      "Chrome DevTools",
    ],
    accessInfo: {
      sshPort: 22,
      webPort: 3000,
      vncPort: 5901,
    },
    setupInstructions: [
      "Se connecter via SSH ou VNC",
      "Cloner le projet de démarrage",
      "Lancer npm start",
      "Ouvrir http://localhost:3000",
    ],
  },
  // Plus de configurations VM...
];

export default reactVMs;
