# Guide d'intégration VM pour Fyndra

## Vue d'ensemble

Ce guide explique comment intégrer de vraies machines virtuelles dans Fyndra. Actuellement, l'interface VM est simulée pour la démonstration.

## Architecture recommandée

### 1. Backend VM Management Service

Créez un service backend qui gère les VMs :

```typescript
// Backend API endpoints nécessaires
POST /api/vm/create          // Créer une nouvelle VM
GET  /api/vm/:id            // Obtenir les détails d'une VM
POST /api/vm/:id/connect    // Obtenir l'URL de connexion
DELETE /api/vm/:id          // Détruire une VM
GET  /api/vm                // Lister les VMs de l'utilisateur
```

### 2. Fournisseurs de VM recommandés

#### Option A: AWS EC2 + AWS Systems Manager
- **Avantages** : Scalable, sécurisé, intégration native
- **Inconvénients** : Coût potentiellement élevé
- **Technologies** : AWS SDK, Session Manager, CloudFormation

#### Option B: DigitalOcean Droplets
- **Avantages** : Simple, API claire, coût prévisible
- **Inconvénients** : Moins de services intégrés
- **Technologies** : DigitalOcean API, Terraform

#### Option C: Docker + Kubernetes
- **Avantages** : Léger, démarrage rapide, isolation
- **Inconvénients** : Moins "VM-like", limitations réseau
- **Technologies** : Kubernetes, Docker, Traefik

#### Option D: Proxmox VE
- **Avantages** : Contrôle total, VMs réelles, économique
- **Inconvénients** : Gestion infrastructure, complexité
- **Technologies** : Proxmox API, QEMU/KVM

### 3. Accès terminal via navigateur

#### Option A: noVNC + VNC Server
```bash
# Installation sur la VM
apt-get install tightvncserver novnc websockify

# Configuration
vncserver :1 -geometry 1024x768 -depth 24
websockify --web=/usr/share/novnc/ 6080 localhost:5901
```

#### Option B: Wetty (Web Terminal)
```bash
# Installation
pnpm install -g wetty

# Lancement
wetty --port 3000 --host 0.0.0.0
```

#### Option C: ttyd (Terminal via WebSocket)
```bash
# Installation
apt-get install ttyd

# Lancement
ttyd -p 7681 -i 0.0.0.0 bash
```

### 4. Intégration Frontend

#### Modifier le VMService
Remplacer `MockVMService` par `ProductionVMService` dans `/src/lib/vmService.ts`

#### Terminal WebSocket
Utiliser la librairie `xterm.js` pour un vrai terminal :

```bash
pnpm install xterm @xterm/addon-websocket @xterm/addon-fit
```

```typescript
import { Terminal } from 'xterm';
import { WebglAddon } from '@xterm/addon-webgl';
import { FitAddon } from '@xterm/addon-fit';

const terminal = new Terminal();
const fitAddon = new FitAddon();
terminal.loadAddon(fitAddon);
terminal.loadAddon(new WebglAddon());

// Connexion WebSocket
const ws = new WebSocket('ws://vm-terminal-url');
terminal.onData(data => ws.send(data));
ws.onmessage = event => terminal.write(event.data);
```

#### IDE intégré (optionnel)
Intégrer VS Code Web ou Theia :

```typescript
// Utiliser Monaco Editor ou embedder VS Code Web
import * as monaco from 'monaco-editor';

const editor = monaco.editor.create(document.getElementById('container'), {
  value: 'console.log("Hello from Fyndra VM!");',
  language: 'typescript',
  theme: 'vs-dark'
});
```

## Exemple d'implémentation Backend (Node.js)

### 1. Controller VM

```typescript
// controllers/vmController.ts
import { Request, Response } from 'express';
import { VMProvider } from '../services/vmProvider';

export class VMController {
  constructor(private vmProvider: VMProvider) {}

  async createVM(req: Request, res: Response) {
    try {
      const { missionId } = req.body;
      const userId = req.user.id;
      
      const vm = await this.vmProvider.createVM({
        missionId,
        userId,
        template: this.getTemplateForMission(missionId)
      });
      
      res.json(vm);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getVMAccess(req: Request, res: Response) {
    try {
      const { vmId } = req.params;
      const access = await this.vmProvider.getVMAccess(vmId);
      res.json(access);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
```

### 2. Provider DigitalOcean

```typescript
// services/digitalOceanProvider.ts
import { DigitalOcean } from 'digitalocean';

export class DigitalOceanVMProvider implements VMProvider {
  private client: DigitalOcean;

  constructor(token: string) {
    this.client = new DigitalOcean({ token });
  }

  async createVM(config: VMConfig): Promise<VM> {
    const droplet = await this.client.droplets.create({
      name: `fyndra-${config.missionId}-${Date.now()}`,
      region: 'fra1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-22-04-x64',
      ssh_keys: [config.sshKeyId],
      user_data: this.getUserData(config.missionId),
      tags: ['fyndra', 'temporary']
    });

    return {
      id: droplet.id.toString(),
      ip: droplet.networks.v4.find(n => n.type === 'public')?.ip_address,
      status: 'creating',
      expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000)
    };
  }

  private getUserData(missionId: string): string {
    return `#!/bin/bash
# Installation automatique des outils pour ${missionId}
apt-get update
apt-get install -y nodejs pnpm docker.io git

# Installation terminal web
pnpm install -g ttyd
systemctl enable docker

# Démarrage terminal web
ttyd -p 7681 -i 0.0.0.0 bash &

# Configuration projet selon mission
${this.getMissionSetup(missionId)}
`;
  }
}
```

## Sécurité

### 1. Isolation réseau
- Utiliser des VPCs dédiés
- Limiter les ports ouverts (22, 80, 443, 7681)
- Firewall rules strictes

### 2. Authentification
- Clés SSH uniques par VM
- Tokens d'accès temporaires
- Sessions expirables

### 3. Monitoring
- Logs d'activité
- Utilisation des ressources
- Détection d'anomalies

## Coûts estimés

### DigitalOcean
- VM 1vCPU/1GB : ~$5/mois (pro-rata)
- Pour 1h de session : ~$0.007

### AWS EC2
- t3.micro : ~$8.5/mois (pro-rata)
- Pour 1h de session : ~$0.012

### Recommandation
Commencer avec DigitalOcean pour la simplicité, puis migrer vers AWS pour la scalabilité.

## Roadmap d'implémentation

1. **Phase 1** : Backend API avec DigitalOcean
2. **Phase 2** : Terminal WebSocket avec ttyd
3. **Phase 3** : Interface VS Code Web
4. **Phase 4** : Optimisations et scaling
5. **Phase 5** : Migration AWS (optionnel)

## Support et troubleshooting

### Problèmes courants
- **VM lente à démarrer** : Utiliser des images pré-configurées
- **Connexion terminale échoue** : Vérifier les ports et firewall
- **Coûts élevés** : Implémenter auto-shutdown après inactivité

### Monitoring recommandé
- Temps de création VM
- Taux de succès des connexions
- Utilisation moyenne des ressources
- Coût par session
