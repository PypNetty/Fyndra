// Configuration de machines virtuelles pour AWS

export const awsVMs = [
  {
    id: "aws-cli-lab",
    name: "AWS CLI Laboratory",
    description: "VM avec AWS CLI et outils de développement cloud",
    osType: "Amazon Linux 2",
    specifications: {
      cpu: "2 vCPUs",
      memory: "4 GB RAM",
      storage: "30 GB SSD",
    },
    preInstalledTools: [
      "AWS CLI v2",
      "AWS CDK",
      "Terraform",
      "Docker",
      "Python 3.9",
      "Node.js 18",
      "VS Code Server",
      "Git",
    ],
    accessInfo: {
      sshPort: 22,
      webPort: 8080,
      vscodePort: 8443,
    },
    awsAccess: {
      region: "eu-west-1",
      freeServices: [
        "EC2 t2.micro (750h/mois)",
        "S3 (5GB stockage)",
        "RDS t2.micro (750h/mois)",
        "Lambda (1M requêtes/mois)",
      ],
    },
    setupInstructions: [
      "Se connecter via SSH avec les credentials fournis",
      "Configurer AWS CLI avec aws configure",
      "Vérifier l'accès avec aws sts get-caller-identity",
      "Lancer les labs pratiques",
    ],
  },
  {
    id: "aws-sandbox",
    name: "AWS Sandbox Environment",
    description:
      "Environnement sécurisé pour expérimenter avec les services AWS",
    osType: "Ubuntu 22.04 LTS",
    specifications: {
      cpu: "4 vCPUs",
      memory: "8 GB RAM",
      storage: "50 GB SSD",
    },
    preInstalledTools: [
      "AWS CLI v2",
      "AWS SAM CLI",
      "AWS CDK",
      "Terraform",
      "Ansible",
      "Docker & Docker Compose",
      "Kubernetes tools (kubectl, helm)",
      "Monitoring tools (CloudWatch agent)",
    ],
    accessInfo: {
      sshPort: 22,
      webPort: 3000,
      grafanaPort: 3001,
      jupyterPort: 8888,
    },
    setupInstructions: [
      "Authentification automatique avec rôle IAM",
      "Environnement isolé avec budget limite",
      "Accès aux labs interactifs via Jupyter",
      "Monitoring en temps réel des coûts",
    ],
  },
];

export default awsVMs;
