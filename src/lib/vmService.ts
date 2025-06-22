// Service pour gérer les connexions VM
export interface VMConfig {
  id: string;
  name: string;
  status: "creating" | "ready" | "running" | "stopped" | "error";
  ip?: string;
  port?: number;
  credentials?: {
    username: string;
    password?: string;
    sshKey?: string;
  };
  mission: {
    id: string;
    title: string;
    type: "frontend" | "backend" | "infra" | "cloud";
  };
  createdAt: Date;
  expiresAt: Date;
}

export interface VMService {
  createVM(missionId: string): Promise<VMConfig>;
  getVM(vmId: string): Promise<VMConfig>;
  connectToVM(vmId: string): Promise<string>; // Returns WebSocket URL or iframe URL
  destroyVM(vmId: string): Promise<void>;
  listVMs(): Promise<VMConfig[]>;
}

// Mock implementation pour la démo
class MockVMService implements VMService {
  private vms: Map<string, VMConfig> = new Map();

  async createVM(missionId: string): Promise<VMConfig> {
    const vmId = `vm-${Date.now()}`;
    const vm: VMConfig = {
      id: vmId,
      name: `VM-${missionId}`,
      status: "creating",
      mission: {
        id: missionId,
        title: this.getMissionTitle(missionId),
        type: this.getMissionType(missionId),
      },
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 heures
    };

    this.vms.set(vmId, vm);

    // Simulate VM creation process
    setTimeout(() => {
      vm.status = "ready";
      vm.ip = "10.0.0." + Math.floor(Math.random() * 254 + 1);
      vm.port = 22;
      vm.credentials = {
        username: "user",
        password: "fyndra2025",
      };
    }, 3000);

    return vm;
  }

  async getVM(vmId: string): Promise<VMConfig> {
    const vm = this.vms.get(vmId);
    if (!vm) {
      throw new Error(`VM ${vmId} not found`);
    }
    return vm;
  }

  async connectToVM(vmId: string): Promise<string> {
    const vm = await this.getVM(vmId);
    if (vm.status !== "ready" && vm.status !== "running") {
      throw new Error(`VM ${vmId} is not ready for connections`);
    }

    // En production, ceci retournerait une URL WebSocket ou iframe
    // pour se connecter à la VM via noVNC ou similar
    return `ws://localhost:6080/websockify?token=${vmId}`;
  }

  async destroyVM(vmId: string): Promise<void> {
    this.vms.delete(vmId);
  }

  async listVMs(): Promise<VMConfig[]> {
    return Array.from(this.vms.values());
  }

  private getMissionTitle(missionId: string): string {
    const titles: Record<string, string> = {
      "dev-frontend": "Développement Frontend",
      "dev-backend": "API Backend",
      "infra-docker": "Infrastructure Docker",
      "cloud-aws": "Déploiement Cloud",
    };
    return titles[missionId] || "Mission Inconnue";
  }

  private getMissionType(missionId: string): VMConfig["mission"]["type"] {
    if (missionId.startsWith("dev-frontend")) return "frontend";
    if (missionId.startsWith("dev-backend")) return "backend";
    if (missionId.startsWith("infra")) return "infra";
    if (missionId.startsWith("cloud")) return "cloud";
    return "frontend";
  }
}

// Production implementation (à implémenter plus tard)
class ProductionVMService implements VMService {
  private apiUrl: string;

  constructor(apiUrl: string = "/api/vm") {
    this.apiUrl = apiUrl;
  }

  async createVM(missionId: string): Promise<VMConfig> {
    const response = await fetch(`${this.apiUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getAuthToken()}`,
      },
      body: JSON.stringify({ missionId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create VM: ${response.statusText}`);
    }

    return response.json();
  }

  async getVM(vmId: string): Promise<VMConfig> {
    const response = await fetch(`${this.apiUrl}/${vmId}`, {
      headers: {
        Authorization: `Bearer ${this.getAuthToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get VM: ${response.statusText}`);
    }

    return response.json();
  }

  async connectToVM(vmId: string): Promise<string> {
    const response = await fetch(`${this.apiUrl}/${vmId}/connect`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.getAuthToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to connect to VM: ${response.statusText}`);
    }

    const { url } = await response.json();
    return url;
  }

  async destroyVM(vmId: string): Promise<void> {
    const response = await fetch(`${this.apiUrl}/${vmId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.getAuthToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to destroy VM: ${response.statusText}`);
    }
  }

  async listVMs(): Promise<VMConfig[]> {
    const response = await fetch(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${this.getAuthToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to list VMs: ${response.statusText}`);
    }

    return response.json();
  }

  private getAuthToken(): string {
    // Récupérer le token d'authentification depuis le store ou localStorage
    return localStorage.getItem("authToken") || "";
  }
}

// Export du service selon l'environnement
export const vmService: VMService =
  process.env.NODE_ENV === "production"
    ? new ProductionVMService()
    : new MockVMService();

// Hooks React pour utiliser le service VM
export const useVM = () => {
  return {
    createVM: vmService.createVM.bind(vmService),
    getVM: vmService.getVM.bind(vmService),
    connectToVM: vmService.connectToVM.bind(vmService),
    destroyVM: vmService.destroyVM.bind(vmService),
    listVMs: vmService.listVMs.bind(vmService),
  };
};
