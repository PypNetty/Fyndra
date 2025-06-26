// Générateur de VM basé sur les réponses du questionnaire

export interface QuestionnaireResults {
  domain: string; // frontend, backend, devops, etc.
  technologies: string[]; // react, nodejs, docker, etc.
  level: 'beginner' | 'intermediate' | 'advanced';
  preferences: {
    learningStyle: 'practical' | 'theoretical' | 'mixed';
    complexity: 'simple' | 'realistic' | 'expert';
  };
}

export interface VMConfiguration {
  id: string;
  title: string;
  description: string;
  environment: {
    os: string;
    preInstalledTools: string[];
    projectStructure: ProjectFile[];
    startupCommands: string[];
  };
  scenario: {
    objective: string;
    tasks: Task[];
    hints: string[];
    expectedOutcome: string;
  };
  evaluation: {
    criteria: EvaluationCriteria[];
    autoChecks: AutoCheck[];
  };
}

interface ProjectFile {
  name: string;
  type: 'file' | 'folder';
  content?: string;
  children?: ProjectFile[];
}

interface Task {
  id: string;
  description: string;
  type: 'code' | 'config' | 'debug' | 'deploy';
  difficulty: number;
  estimatedTime: number;
}

interface EvaluationCriteria {
  name: string;
  weight: number;
  description: string;
}

interface AutoCheck {
  type: 'file_exists' | 'command_output' | 'port_listening' | 'content_match';
  target: string;
  expected: string;
  points: number;
}

export class VMGenerator {
  static generateVM(results: QuestionnaireResults): VMConfiguration {
    const baseConfig = this.getBaseConfig(results.domain);
    const techStack = this.selectTechStack(results.technologies, results.level);
    const scenario = this.generateScenario(results);
    
    return {
      id: `vm_${results.domain}_${Date.now()}`,
      title: `Projet ${this.getDomainLabel(results.domain)} - ${results.level}`,
      description: this.generateDescription(results),
      environment: {
        os: this.selectOS(results.technologies[0]),
        preInstalledTools: techStack,
        projectStructure: this.generateProjectStructure(results),
        startupCommands: this.generateStartupCommands(results)
      },
      scenario,
      evaluation: this.generateEvaluation(results)
    };
  }

  private static getBaseConfig(domain: string) {
    const configs = {
      frontend: {
        tools: ['nodejs', 'pnpm', 'git', 'code'],
        ports: [3000, 5173, 8080]
      },
      backend: {
        tools: ['nodejs', 'python', 'git', 'curl', 'postman'],
        ports: [3000, 8000, 5000]
      },
      devops: {
        tools: ['docker', 'kubernetes', 'terraform', 'git'],
        ports: [80, 443, 8080]
      },
      security: {
        tools: ['nmap', 'wireshark', 'metasploit', 'burpsuite'],
        ports: [80, 443, 22]
      }
    };
    return configs[domain] || configs.frontend;
  }

  private static selectTechStack(technologies: string[], level: string): string[] {
    const techMap = {
      // Frontend
      'React': ['nodejs', 'pnpm', 'vite', 'react-dev-tools', 'eslint'],
      'Vue': ['nodejs', 'pnpm', 'vite', 'vue-devtools', '@vue/cli'],
      'Angular': ['nodejs', 'pnpm', 'angular-cli', '@angular/core'],
      
      // Backend  
      'Node.js': ['nodejs', 'pnpm', 'nodemon', 'express', 'postman'],
      'Python': ['python3', 'pip', 'flask', 'django', 'pytest'],
      
      // Cloud
      'AWS': ['aws-cli', 'terraform', 'docker', 'kubectl'],
      'Azure': ['azure-cli', 'terraform', 'docker', 'kubectl'],
      
      // Infrastructure
      'Docker': ['docker', 'docker-compose', 'kubernetes'],
      'Terraform': ['terraform', 'aws-cli', 'azure-cli'],
      
      // Système
      'Linux': ['bash', 'vim', 'systemctl', 'crontab'],
      
      // Réseaux
      'TCP-IP': ['netstat', 'ping', 'curl', 'wget'],
      
      // Sécurité
      'Sécurité': ['nmap', 'netcat', 'openssl', 'fail2ban']
    };

    let tools = ['git', 'curl', 'nano'];
    
    technologies.forEach(tech => {
      if (techMap[tech]) {
        tools.push(...techMap[tech]);
      }
    });

    // Ajouter des outils selon le niveau
    if (level === 'advanced') {
      tools.push('docker', 'nginx', 'redis', 'monitoring-tools');
    } else if (level === 'intermediate') {
      tools.push('docker');
    }

    return [...new Set(tools)]; // Supprimer les doublons
  }

  private static generateScenario(results: QuestionnaireResults) {
    const tech = results.technologies[0]; // Technologie principale
    
    const scenarios = {
      // Frontend
      'React': {
        beginner: {
          objective: "Créer une application React interactive",
          tasks: [
            { id: "setup", description: "Initialiser un projet React avec Vite", type: "code" as const, difficulty: 1, estimatedTime: 10 },
            { id: "component", description: "Créer un composant de liste de tâches", type: "code" as const, difficulty: 2, estimatedTime: 20 },
            { id: "style", description: "Styliser avec CSS modules", type: "code" as const, difficulty: 1, estimatedTime: 15 }
          ]
        },
        intermediate: {
          objective: "Développer une SPA React avec gestion d'état",
          tasks: [
            { id: "router", description: "Configurer React Router", type: "code" as const, difficulty: 2, estimatedTime: 15 },
            { id: "state", description: "Implémenter Context API", type: "code" as const, difficulty: 3, estimatedTime: 25 },
            { id: "api", description: "Intégrer des appels API", type: "code" as const, difficulty: 3, estimatedTime: 20 }
          ]
        },
        advanced: {
          objective: "Application React optimisée avec SSR",
          tasks: [
            { id: "ssr", description: "Configurer Next.js", type: "code" as const, difficulty: 4, estimatedTime: 30 },
            { id: "perf", description: "Optimiser les performances", type: "code" as const, difficulty: 4, estimatedTime: 25 },
            { id: "deploy", description: "Déployer sur Vercel", type: "deploy" as const, difficulty: 3, estimatedTime: 20 }
          ]
        }
      },
      
      'Vue': {
        beginner: {
          objective: "Créer une application Vue.js simple",
          tasks: [
            { id: "setup", description: "Initialiser un projet Vue avec Vite", type: "code" as const, difficulty: 1, estimatedTime: 10 },
            { id: "component", description: "Créer des composants Vue", type: "code" as const, difficulty: 2, estimatedTime: 20 },
            { id: "directive", description: "Utiliser les directives Vue", type: "code" as const, difficulty: 2, estimatedTime: 15 }
          ]
        }
      },
      
      // Backend
      'Node.js': {
        beginner: {
          objective: "Créer une API REST avec Express",
          tasks: [
            { id: "server", description: "Configurer un serveur Express", type: "code" as const, difficulty: 2, estimatedTime: 15 },
            { id: "routes", description: "Créer des routes CRUD", type: "code" as const, difficulty: 2, estimatedTime: 20 },
            { id: "middleware", description: "Ajouter des middlewares", type: "code" as const, difficulty: 3, estimatedTime: 15 }
          ]
        },
        intermediate: {
          objective: "API Node.js avec base de données",
          tasks: [
            { id: "db", description: "Connecter à MongoDB", type: "config" as const, difficulty: 3, estimatedTime: 20 },
            { id: "auth", description: "Implémenter l'authentification JWT", type: "code" as const, difficulty: 4, estimatedTime: 30 },
            { id: "validation", description: "Ajouter la validation des données", type: "code" as const, difficulty: 3, estimatedTime: 15 }
          ]
        }
      },
      
      'Python': {
        beginner: {
          objective: "Créer une API Flask simple",
          tasks: [
            { id: "flask", description: "Configurer Flask", type: "code" as const, difficulty: 2, estimatedTime: 15 },
            { id: "routes", description: "Créer des routes REST", type: "code" as const, difficulty: 2, estimatedTime: 20 },
            { id: "json", description: "Gérer les réponses JSON", type: "code" as const, difficulty: 2, estimatedTime: 10 }
          ]
        }
      },
      
      // Cloud
      'AWS': {
        beginner: {
          objective: "Déployer une application sur AWS",
          tasks: [
            { id: "s3", description: "Configurer un bucket S3", type: "config" as const, difficulty: 2, estimatedTime: 15 },
            { id: "ec2", description: "Lancer une instance EC2", type: "config" as const, difficulty: 3, estimatedTime: 25 },
            { id: "deploy", description: "Déployer l'application", type: "deploy" as const, difficulty: 3, estimatedTime: 20 }
          ]
        }
      },
      
      'Azure': {
        beginner: {
          objective: "Déployer sur Azure App Service",
          tasks: [
            { id: "resource", description: "Créer un groupe de ressources", type: "config" as const, difficulty: 2, estimatedTime: 10 },
            { id: "app", description: "Configurer App Service", type: "config" as const, difficulty: 3, estimatedTime: 20 },
            { id: "deploy", description: "Déployer l'application", type: "deploy" as const, difficulty: 3, estimatedTime: 15 }
          ]
        }
      },
      
      // Infrastructure
      'Docker': {
        beginner: {
          objective: "Conteneuriser une application",
          tasks: [
            { id: "dockerfile", description: "Créer un Dockerfile", type: "config" as const, difficulty: 2, estimatedTime: 15 },
            { id: "build", description: "Construire l'image Docker", type: "code" as const, difficulty: 2, estimatedTime: 10 },
            { id: "run", description: "Lancer le conteneur", type: "code" as const, difficulty: 2, estimatedTime: 10 }
          ]
        }
      },
      
      'Terraform': {
        beginner: {
          objective: "Infrastructure as Code avec Terraform",
          tasks: [
            { id: "config", description: "Écrire la configuration Terraform", type: "config" as const, difficulty: 3, estimatedTime: 20 },
            { id: "plan", description: "Planifier l'infrastructure", type: "code" as const, difficulty: 2, estimatedTime: 10 },
            { id: "apply", description: "Appliquer les changements", type: "deploy" as const, difficulty: 3, estimatedTime: 15 }
          ]
        }
      },
      
      // Système
      'Linux': {
        beginner: {
          objective: "Administration système Linux",
          tasks: [
            { id: "files", description: "Gérer les fichiers et permissions", type: "config" as const, difficulty: 2, estimatedTime: 15 },
            { id: "services", description: "Configurer les services systemd", type: "config" as const, difficulty: 3, estimatedTime: 20 },
            { id: "monitoring", description: "Surveiller le système", type: "code" as const, difficulty: 2, estimatedTime: 15 }
          ]
        }
      },
      
      // Sécurité
      'Sécurité': {
        beginner: {
          objective: "Audit de sécurité basique",
          tasks: [
            { id: "scan", description: "Scanner les ports avec nmap", type: "code" as const, difficulty: 2, estimatedTime: 15 },
            { id: "vuln", description: "Identifier les vulnérabilités", type: "debug" as const, difficulty: 3, estimatedTime: 20 },
            { id: "report", description: "Rédiger un rapport de sécurité", type: "code" as const, difficulty: 2, estimatedTime: 15 }
          ]
        }
      }
    };

    const techScenarios = scenarios[tech] || scenarios['React'];
    const levelScenario = techScenarios[results.level] || techScenarios['beginner'];

    return {
      ...levelScenario,
      hints: this.generateHints(results),
      expectedOutcome: this.generateExpectedOutcome(results)
    };
  }

  private static generateProjectStructure(results: QuestionnaireResults): ProjectFile[] {
    const tech = results.technologies[0];
    
    const structures = {
      'React': [
        { name: "package.json", type: "file" as const, content: this.generatePackageJson('react') },
        { name: "vite.config.js", type: "file" as const, content: "import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\nexport default defineConfig({\n  plugins: [react()],\n})" },
        { name: "src", type: "folder" as const, children: [
          { name: "App.jsx", type: "file" as const, content: "import React from 'react'\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <h1>Mon App React</h1>\n      {/* Votre code ici */}\n    </div>\n  )\n}\n\nexport default App" },
          { name: "main.jsx", type: "file" as const, content: "import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './App.jsx'\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n)" },
          { name: "components", type: "folder" as const },
          { name: "styles", type: "folder" as const }
        ]},
        { name: "public", type: "folder" as const },
        { name: "index.html", type: "file" as const, content: "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Mon App React</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/src/main.jsx\"></script>\n  </body>\n</html>" },
        { name: "README.md", type: "file" as const, content: "# Mon Projet React\n\n## Démarrage\n\n```bash\npnpm install\npnpm dev\n```" }
      ],
      
      'Vue': [
        { name: "package.json", type: "file" as const, content: this.generatePackageJson('vue') },
        { name: "vite.config.js", type: "file" as const, content: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\nexport default defineConfig({\n  plugins: [vue()],\n})" },
        { name: "src", type: "folder" as const, children: [
          { name: "App.vue", type: "file" as const, content: "<template>\n  <div id=\"app\">\n    <h1>Mon App Vue</h1>\n    <!-- Votre code ici -->\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'App'\n}\n</script>" },
          { name: "main.js", type: "file" as const, content: "import { createApp } from 'vue'\nimport App from './App.vue'\n\ncreateApp(App).mount('#app')" },
          { name: "components", type: "folder" as const }
        ]},
        { name: "public", type: "folder" as const },
        { name: "README.md", type: "file" as const, content: "# Mon Projet Vue\n\n```bash\npnpm install\npnpm dev\n```" }
      ],
      
      'Node.js': [
        { name: "package.json", type: "file" as const, content: this.generatePackageJson('nodejs') },
        { name: "src", type: "folder" as const, children: [
          { name: "app.js", type: "file" as const, content: "const express = require('express');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.use(express.json());\n\napp.get('/', (req, res) => {\n  res.json({ message: 'API fonctionne!' });\n});\n\napp.listen(PORT, () => {\n  console.log(`Serveur démarré sur le port ${PORT}`);\n});" },
          { name: "routes", type: "folder" as const },
          { name: "middleware", type: "folder" as const },
          { name: "models", type: "folder" as const }
        ]},
        { name: ".env.example", type: "file" as const, content: "PORT=3000\nDB_URL=mongodb://localhost:27017/myapp" },
        { name: "README.md", type: "file" as const, content: "# API Node.js\n\n```bash\npnpm install\npnpm dev\n```" }
      ],
      
      'Python': [
        { name: "requirements.txt", type: "file" as const, content: "Flask==2.3.3\nFlask-CORS==4.0.0\nFlask-SQLAlchemy==3.0.5" },
        { name: "app.py", type: "file" as const, content: "from flask import Flask, jsonify\nfrom flask_cors import CORS\n\napp = Flask(__name__)\nCORS(app)\n\n@app.route('/')\ndef hello():\n    return jsonify({'message': 'API Python fonctionne!'})\n\nif __name__ == '__main__':\n    app.run(debug=True, port=5000)" },
        { name: "models", type: "folder" as const },
        { name: "routes", type: "folder" as const },
        { name: "README.md", type: "file" as const, content: "# API Python Flask\n\n```bash\npip install -r requirements.txt\npython app.py\n```" }
      ],
      
      'Docker': [
        { name: "Dockerfile", type: "file" as const, content: "FROM node:18-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm install\n\nCOPY . .\n\nEXPOSE 3000\n\nCMD [\"npm\", \"start\"]" },
        { name: "docker-compose.yml", type: "file" as const, content: "version: '3.8'\nservices:\n  app:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      - NODE_ENV=production" },
        { name: "app", type: "folder" as const, children: [
          { name: "package.json", type: "file" as const, content: this.generatePackageJson('nodejs') },
          { name: "server.js", type: "file" as const, content: "// Votre application à conteneuriser" }
        ]},
        { name: "README.md", type: "file" as const, content: "# Projet Docker\n\n```bash\ndocker build -t myapp .\ndocker run -p 3000:3000 myapp\n```" }
      ],
      
      'AWS': [
        { name: "infrastructure", type: "folder" as const, children: [
          { name: "main.tf", type: "file" as const, content: "# Configuration Terraform pour AWS" },
          { name: "variables.tf", type: "file" as const, content: "# Variables Terraform" }
        ]},
        { name: "scripts", type: "folder" as const, children: [
          { name: "deploy.sh", type: "file" as const, content: "#!/bin/bash\n# Script de déploiement AWS" }
        ]},
        { name: "README.md", type: "file" as const, content: "# Projet AWS\n\n```bash\naws configure\nterraform init\nterraform plan\n```" }
      ],
      
      'Linux': [
        { name: "scripts", type: "folder" as const, children: [
          { name: "setup.sh", type: "file" as const, content: "#!/bin/bash\n# Script de configuration système" },
          { name: "monitoring.sh", type: "file" as const, content: "#!/bin/bash\n# Script de monitoring" }
        ]},
        { name: "config", type: "folder" as const, children: [
          { name: "nginx.conf", type: "file" as const, content: "# Configuration Nginx" },
          { name: "systemd.service", type: "file" as const, content: "# Service systemd" }
        ]},
        { name: "README.md", type: "file" as const, content: "# Administration Linux\n\n```bash\nsudo chmod +x scripts/*.sh\n./scripts/setup.sh\n```" }
      ]
    };

    return structures[tech] || structures['React'];
  }

  private static generatePackageJson(type: string): string {
    const configs = {
      'react': {
        name: "mon-app-react",
        private: true,
        version: "0.0.0",
        type: "module",
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview"
        },
        dependencies: {
          react: "^18.2.0",
          "react-dom": "^18.2.0"
        },
        devDependencies: {
          "@types/react": "^18.2.15",
          "@types/react-dom": "^18.2.7",
          "@vitejs/plugin-react": "^4.0.3",
          eslint: "^8.45.0",
          vite: "^4.4.5"
        }
      },
      
      'vue': {
        name: "mon-app-vue",
        private: true,
        version: "0.0.0",
        type: "module",
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview"
        },
        dependencies: {
          vue: "^3.3.4"
        },
        devDependencies: {
          "@vitejs/plugin-vue": "^4.2.3",
          vite: "^4.4.5"
        }
      },
      
      'nodejs': {
        name: "mon-api-node",
        version: "1.0.0",
        description: "API Node.js avec Express",
        main: "src/app.js",
        scripts: {
          start: "node src/app.js",
          dev: "nodemon src/app.js",
          test: "jest"
        },
        dependencies: {
          express: "^4.18.2",
          cors: "^2.8.5",
          dotenv: "^16.3.1"
        },
        devDependencies: {
          nodemon: "^3.0.1",
          jest: "^29.6.2"
        }
      },
      
      'python': {
        name: "mon-api-python",
        version: "1.0.0",
        description: "API Python avec Flask",
        scripts: {
          start: "python app.py",
          dev: "flask run --debug",
          test: "pytest"
        }
      }
    };

    return JSON.stringify(configs[type] || configs['react'], null, 2);
  }

  private static generateHints(results: QuestionnaireResults): string[] {
    const hintMap = {
      beginner: [
        "💡 N'hésitez pas à consulter la documentation officielle",
        "🔍 Utilisez les outils de développement du navigateur",
        "⚡ Testez votre code fréquemment avec pnpm dev"
      ],
      intermediate: [
        "🏗️ Pensez à la structure de votre code",
        "🧪 Écrivez quelques tests pour valider votre logique",
        "📦 Organisez vos composants de manière modulaire"
      ],
      advanced: [
        "⚡ Optimisez les performances de votre application",
        "🔒 Implémentez les bonnes pratiques de sécurité",
        "📈 Surveillez les métriques de votre application"
      ]
    };

    return hintMap[results.level] || hintMap.beginner;
  }

  private static generateExpectedOutcome(results: QuestionnaireResults): string {
    const tech = results.technologies[0];
    
    const outcomes = {
      'React': "Une application React fonctionnelle avec interface utilisateur interactive",
      'Vue': "Une application Vue.js moderne avec composants réactifs",
      'Node.js': "Une API REST fonctionnelle avec routes CRUD et validation",
      'Python': "Une API Python Flask avec endpoints fonctionnels",
      'AWS': "Infrastructure déployée sur AWS avec ressources configurées",
      'Azure': "Application déployée sur Azure App Service",
      'Docker': "Application conteneurisée prête pour la production",
      'Terraform': "Infrastructure as Code déployée avec Terraform",
      'Linux': "Système Linux configuré avec services et monitoring",
      'TCP-IP': "Analyse réseau complète avec tests de connectivité",
      'Sécurité': "Audit de sécurité avec rapport détaillé des vulnérabilités"
    };

    return outcomes[tech] || outcomes['React'];
  }

  private static generateEvaluation(results: QuestionnaireResults) {
    return {
      criteria: [
        { name: "Fonctionnalité", weight: 0.4, description: "Le code fonctionne comme attendu" },
        { name: "Qualité du code", weight: 0.3, description: "Code lisible et bien structuré" },
        { name: "Bonnes pratiques", weight: 0.2, description: "Respect des conventions" },
        { name: "Innovation", weight: 0.1, description: "Solutions créatives" }
      ],
      autoChecks: this.generateAutoChecks(results)
    };
  }

  private static generateAutoChecks(results: QuestionnaireResults): AutoCheck[] {
    const tech = results.technologies[0];
    
    const checks = {
      'React': [
        { type: "file_exists" as const, target: "src/App.jsx", expected: "true", points: 10 },
        { type: "command_output" as const, target: "pnpm build", expected: "success", points: 20 },
        { type: "port_listening" as const, target: "3000", expected: "true", points: 15 }
      ],
      'Vue': [
        { type: "file_exists" as const, target: "src/App.vue", expected: "true", points: 10 },
        { type: "command_output" as const, target: "pnpm build", expected: "success", points: 20 },
        { type: "port_listening" as const, target: "3000", expected: "true", points: 15 }
      ],
      'Node.js': [
        { type: "file_exists" as const, target: "src/app.js", expected: "true", points: 10 },
        { type: "port_listening" as const, target: "3000", expected: "true", points: 20 },
        { type: "command_output" as const, target: "curl localhost:3000", expected: "200", points: 15 }
      ],
      'Python': [
        { type: "file_exists" as const, target: "app.py", expected: "true", points: 10 },
        { type: "port_listening" as const, target: "5000", expected: "true", points: 20 },
        { type: "command_output" as const, target: "curl localhost:5000", expected: "200", points: 15 }
      ],
      'Docker': [
        { type: "file_exists" as const, target: "Dockerfile", expected: "true", points: 15 },
        { type: "command_output" as const, target: "docker build", expected: "success", points: 25 },
        { type: "command_output" as const, target: "docker run", expected: "running", points: 20 }
      ],
      'AWS': [
        { type: "command_output" as const, target: "aws sts get-caller-identity", expected: "account", points: 10 },
        { type: "command_output" as const, target: "terraform plan", expected: "success", points: 20 },
        { type: "command_output" as const, target: "terraform apply", expected: "success", points: 25 }
      ],
      'Linux': [
        { type: "command_output" as const, target: "systemctl status", expected: "active", points: 15 },
        { type: "file_exists" as const, target: "/etc/systemd/system/myapp.service", expected: "true", points: 20 },
        { type: "command_output" as const, target: "ps aux", expected: "running", points: 10 }
      ]
    };

    return checks[tech] || checks['React'];
  }

  private static selectOS(domain: string): string {
    const tech = domain; // domain contient maintenant la technologie
    
    const osMap = {
      'React': "Ubuntu 22.04 with Node.js 18 and pnpm",
      'Vue': "Ubuntu 22.04 with Node.js 18 and pnpm", 
      'Node.js': "Ubuntu 22.04 with Node.js 18 and MongoDB",
      'Python': "Ubuntu 22.04 with Python 3.11 and pip",
      'AWS': "Amazon Linux 2 with AWS CLI and Terraform",
      'Azure': "Ubuntu 22.04 with Azure CLI and Terraform",
      'Docker': "Ubuntu 22.04 with Docker and Docker Compose",
      'Terraform': "Ubuntu 22.04 with Terraform and cloud CLIs",
      'Linux': "Ubuntu 22.04 Server with admin tools",
      'TCP-IP': "Ubuntu 22.04 with networking tools",
      'Sécurité': "Kali Linux with security tools"
    };

    return osMap[tech] || osMap['React'];
  }

  private static generateStartupCommands(results: QuestionnaireResults): string[] {
    const tech = results.technologies[0];
    
    const commands = {
      'React': [
        "cd /workspace",
        "pnpm install",
        "echo '🚀 Projet React initialisé. Tapez: pnpm dev'"
      ],
      'Vue': [
        "cd /workspace", 
        "pnpm install",
        "echo '🚀 Projet Vue.js initialisé. Tapez: pnpm dev'"
      ],
      'Node.js': [
        "cd /workspace",
        "pnpm install",
        "cp .env.example .env",
        "echo '🚀 API Node.js prête. Tapez: pnpm dev'"
      ],
      'Python': [
        "cd /workspace",
        "pip install -r requirements.txt",
        "echo '🚀 API Python prête. Tapez: python app.py'"
      ],
      'Docker': [
        "cd /workspace",
        "echo '🐳 Environnement Docker prêt. Tapez: docker build -t myapp .'"
      ],
      'AWS': [
        "cd /workspace",
        "aws configure list",
        "echo '☁️ Environnement AWS configuré. Tapez: terraform init'"
      ],
      'Linux': [
        "cd /workspace",
        "chmod +x scripts/*.sh",
        "echo '🐧 Environnement Linux prêt. Tapez: ./scripts/setup.sh'"
      ]
    };

    return commands[tech] || commands['React'];
  }

  private static generateDescription(results: QuestionnaireResults): string {
    return `VM personnalisée pour ${this.getDomainLabel(results.domain)} niveau ${results.level}. 
    Environnement pré-configuré avec ${results.technologies.join(', ')}.`;
  }

  private static getDomainLabel(domain: string): string {
    const labels = {
      frontend: "Développement Frontend",
      backend: "Développement Backend", 
      devops: "DevOps & Infrastructure",
      security: "Sécurité & Cybersécurité"
    };

    return labels[domain] || domain;
  }
}
