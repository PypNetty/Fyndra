// Configuration de machines virtuelles pour Terraform

export const terraformVMs = [
  {
    id: "terraform-workshop",
    name: "Terraform Workshop Environment",
    description:
      "VM optimisée pour l'apprentissage et la pratique de Terraform",
    osType: "Ubuntu 22.04 LTS",
    specifications: {
      cpu: "4 vCPUs",
      memory: "8 GB RAM",
      storage: "50 GB SSD",
    },
    preInstalledTools: [
      "Terraform 1.6.x",
      "AWS CLI v2",
      "Azure CLI",
      "Google Cloud SDK",
      "Terragrunt",
      "Terraform-docs",
      "TFLint",
      "Checkov (security scanning)",
      "VS Code + Terraform extension",
      "Git",
    ],
    accessInfo: {
      sshPort: 22,
      webPort: 8080,
      vscodePort: 8443,
    },
    cloudAccess: {
      aws: "Sandbox account avec permissions limitées",
      azure: "Subscription de développement",
      gcp: "Projet de test avec budget limite",
    },
    setupInstructions: [
      "Se connecter via SSH",
      "Les credentials cloud sont pré-configurés",
      "Cloner les labs Terraform depuis Git",
      "Commencer avec terraform init && terraform plan",
    ],
  },
  {
    id: "terraform-enterprise",
    name: "Terraform Enterprise Simulation",
    description: "Environnement simulant un setup enterprise avec CI/CD",
    osType: "Ubuntu 22.04 LTS",
    specifications: {
      cpu: "8 vCPUs",
      memory: "16 GB RAM",
      storage: "100 GB SSD",
    },
    preInstalledTools: [
      "Terraform Enterprise (simulation)",
      "GitLab CE avec CI/CD",
      "HashiCorp Vault",
      "Consul",
      "Atlantis (Terraform automation)",
      "Monitoring stack",
      "Multi-cloud CLIs",
    ],
    accessInfo: {
      sshPort: 22,
      gitlabPort: 80,
      vaultPort: 8200,
      atlantisPort: 4141,
    },
    setupInstructions: [
      "Interface GitLab: http://vm-ip",
      "Vault UI: http://vm-ip:8200",
      "Atlantis: http://vm-ip:4141",
      "Workflow GitOps avec pull requests",
    ],
  },
];

export default terraformVMs;
