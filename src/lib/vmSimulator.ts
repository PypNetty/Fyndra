// Service de simulation VM qui suit les résultats du questionnaire

import { VMConfiguration, QuestionnaireResults, VMGenerator } from './vmGenerator';

export interface VMSession {
  id: string;
  config: VMConfiguration;
  status: 'starting' | 'running' | 'completed' | 'failed';
  progress: {
    currentTask: number;
    completedTasks: string[];
    score: number;
    timeElapsed: number;
  };
  files: Record<string, string>; // Simulation du système de fichiers
  terminal: {
    history: string[];
    currentDirectory: string;
  };
}

export interface VMCommand {
  command: string;
  args: string[];
  timestamp: number;
}

export interface VMCommandResult {
  success: boolean;
  output: string;
  newFiles?: Record<string, string>;
  score?: number;
  hint?: string;
}

export class VMSimulator {
  private sessions: Map<string, VMSession> = new Map();

  // Créer une nouvelle session VM basée sur les réponses du questionnaire
  createSession(results: QuestionnaireResults): VMSession {
    const config = VMGenerator.generateVM(results);
    const sessionId = `session_${Date.now()}`;

    const session: VMSession = {
      id: sessionId,
      config,
      status: 'starting',
      progress: {
        currentTask: 0,
        completedTasks: [],
        score: 0,
        timeElapsed: 0
      },
      files: this.initializeFileSystem(config),
      terminal: {
        history: [
          `🚀 VM démarrée: ${config.title}`,
          `📁 Répertoire de travail: /workspace`,
          `⚡ Outils disponibles: ${config.environment.preInstalledTools.join(', ')}`,
          '',
          '💡 Tapez "help" pour voir les commandes disponibles',
          ''
        ],
        currentDirectory: '/workspace'
      }
    };

    this.sessions.set(sessionId, session);

    // Simuler le démarrage
    setTimeout(() => {
      session.status = 'running';
      this.executeStartupCommands(session);
    }, 2000);

    return session;
  }

  // Exécuter une commande dans la VM simulée
  executeCommand(sessionId: string, command: string): VMCommandResult {
    const session = this.sessions.get(sessionId);
    if (!session) {
      return { success: false, output: 'Session non trouvée' };
    }

    session.terminal.history.push(`$ ${command}`);

    // Parser la commande
    const [cmd, ...args] = command.split(' ');

    // Simuler différentes commandes
    const result = this.simulateCommand(session, cmd, args);
    
    session.terminal.history.push(result.output);
    
    // Mettre à jour les fichiers si nécessaire
    if (result.newFiles) {
      Object.assign(session.files, result.newFiles);
    }

    // Mettre à jour le score
    if (result.score) {
      session.progress.score += result.score;
    }

    // Vérifier si une tâche est complétée
    this.checkTaskCompletion(session, cmd, args);

    return result;
  }

  private simulateCommand(session: VMSession, cmd: string, args: string[]): VMCommandResult {
    const { config } = session;

    switch (cmd) {
      case 'help':
        return {
          success: true,
          output: this.getHelpText(config)
        };

      case 'ls':
        return {
          success: true,
          output: this.listFiles(session, args[0] || session.terminal.currentDirectory)
        };

      case 'cat':
        if (!args[0]) {
          return { success: false, output: 'cat: fichier requis' };
        }
        return {
          success: true,
          output: session.files[args[0]] || `cat: ${args[0]}: Aucun fichier ou dossier de ce type`
        };

      case 'mkdir':
        if (!args[0]) {
          return { success: false, output: 'mkdir: nom de dossier requis' };
        }
        return {
          success: true,
          output: '',
          newFiles: { [args[0] + '/']: '' }
        };

      case 'touch':
        if (!args[0]) {
          return { success: false, output: 'touch: nom de fichier requis' };
        }
        return {
          success: true,
          output: '',
          newFiles: { [args[0]]: '' }
        };

      case 'pnpm':
        return this.simulatePnpm(session, args);

      case 'npm':
        return this.simulateNpm(session, args);

      case 'git':
        return this.simulateGit(session, args);

      case 'code':
        return {
          success: true,
          output: `✅ Code éditeur ouvert pour ${args[0] || 'le projet'}`
        };

      case 'curl':
        return this.simulateCurl(session, args);

      case 'ps':
        return {
          success: true,
          output: this.getProcessList(session)
        };

      case 'pwd':
        return {
          success: true,
          output: session.terminal.currentDirectory
        };

      case 'cd':
        const newDir = args[0] || '/workspace';
        session.terminal.currentDirectory = newDir;
        return {
          success: true,
          output: ''
        };

      default:
        // Simuler des commandes spécifiques au domaine
        return this.simulateDomainSpecificCommand(session, cmd, args);
    }
  }

  private simulatePnpm(session: VMSession, args: string[]): VMCommandResult {
    const subCommand = args[0];

    switch (subCommand) {
      case 'install':
        return {
          success: true,
          output: `🔄 Installation des dépendances...\n✅ Dépendances installées avec succès!`,
          score: 5
        };

      case 'dev':
        return {
          success: true,
          output: `🚀 Serveur de développement démarré sur http://localhost:3000\n⚡ Prêt en 1.2s`,
          score: 10
        };

      case 'build':
        return {
          success: true,
          output: `🏗️ Construction du projet...\n✅ Build terminé avec succès!\n📦 Fichiers générés dans /dist`,
          score: 15
        };

      case 'test':
        return {
          success: true,
          output: `🧪 Exécution des tests...\n✅ 8/8 tests passés`,
          score: 10
        };

      default:
        return {
          success: false,
          output: `pnpm: commande inconnue '${subCommand}'`
        };
    }
  }

  private simulateNpm(session: VMSession, args: string[]): VMCommandResult {
    // Rediriger vers pnpm avec un message informatif
    return {
      success: true,
      output: `💡 Ce projet utilise pnpm. Essayez: pnpm ${args.join(' ')}`
    };
  }

  private simulateGit(session: VMSession, args: string[]): VMCommandResult {
    const subCommand = args[0];

    switch (subCommand) {
      case 'status':
        return {
          success: true,
          output: `Sur la branche main\nVotre branche est à jour avec 'origin/main'.\n\naucune modification ajoutée à la validation`
        };

      case 'add':
        return {
          success: true,
          output: '',
          score: 5
        };

      case 'commit':
        return {
          success: true,
          output: `[main ${Math.random().toString(36).substr(2, 7)}] ${args.slice(2).join(' ') || 'commit'}`,
          score: 10
        };

      case 'init':
        return {
          success: true,
          output: `Dépôt Git vide initialisé dans /workspace/.git/`
        };

      default:
        return {
          success: true,
          output: `git ${subCommand}: commande simulée`
        };
    }
  }

  private simulateCurl(session: VMSession, args: string[]): VMCommandResult {
    const url = args[0];
    
    if (url?.includes('localhost:3000')) {
      return {
        success: true,
        output: `{"status": "ok", "message": "API fonctionne!"}`,
        score: 15
      };
    }

    return {
      success: true,
      output: `curl: simulation pour ${url}`
    };
  }

  private simulateDomainSpecificCommand(session: VMSession, cmd: string, args: string[]): VMCommandResult {
    const { config } = session;

    // Commandes spécifiques au domaine
    if (config.title.includes('Frontend')) {
      switch (cmd) {
        case 'prettier':
          return {
            success: true,
            output: `✅ Code formaté avec Prettier`,
            score: 5
          };
        case 'eslint':
          return {
            success: true,
            output: `✅ Aucune erreur ESLint trouvée`,
            score: 5
          };
      }
    }

    if (config.title.includes('Backend')) {
      switch (cmd) {
        case 'nodemon':
          return {
            success: true,
            output: `🔄 Serveur redémarré automatiquement`,
            score: 5
          };
      }
    }

    return {
      success: false,
      output: `${cmd}: commande non trouvée`
    };
  }

  private checkTaskCompletion(session: VMSession, cmd: string, args: string[]) {
    const { config, progress } = session;
    const currentTask = config.scenario.tasks[progress.currentTask];

    if (!currentTask) return;

    // Logique simple de détection de completion de tâche
    const completionTriggers = {
      'pnpm install': ['setup'],
      'pnpm dev': ['server', 'start'],
      'git commit': ['commit', 'save'],
      'pnpm build': ['build', 'deploy']
    };

    const command = `${cmd} ${args[0] || ''}`.trim();
    const triggers = completionTriggers[command] || [];

    if (triggers.some(trigger => currentTask.id.includes(trigger))) {
      progress.completedTasks.push(currentTask.id);
      progress.currentTask++;
      progress.score += 25; // Bonus pour compléter une tâche

      session.terminal.history.push('');
      session.terminal.history.push(`🎉 Tâche "${currentTask.description}" complétée!`);
      session.terminal.history.push(`📈 +25 points`);

      if (progress.currentTask >= config.scenario.tasks.length) {
        session.status = 'completed';
        session.terminal.history.push('');
        session.terminal.history.push('🏆 Félicitations! Toutes les tâches sont complétées!');
        session.terminal.history.push(`🏅 Score final: ${progress.score}/100`);
      }
    }
  }

  private initializeFileSystem(config: VMConfiguration): Record<string, string> {
    const files: Record<string, string> = {};

    const processFiles = (fileList: any[], basePath = '') => {
      fileList.forEach(file => {
        const fullPath = basePath ? `${basePath}/${file.name}` : file.name;
        
        if (file.type === 'file' && file.content) {
          files[fullPath] = file.content;
        } else if (file.type === 'folder') {
          files[fullPath + '/'] = ''; // Marquer comme dossier
          if (file.children) {
            processFiles(file.children, fullPath);
          }
        }
      });
    };

    processFiles(config.environment.projectStructure);
    return files;
  }

  private executeStartupCommands(session: VMSession) {
    const { config } = session;
    
    config.environment.startupCommands.forEach(cmd => {
      setTimeout(() => {
        const result = this.executeCommand(session.id, cmd);
      }, 1000);
    });
  }

  private listFiles(session: VMSession, path: string): string {
    const files = Object.keys(session.files)
      .filter(file => file.startsWith(path === '/workspace' ? '' : path))
      .map(file => file.replace(path === '/workspace' ? '' : path + '/', ''))
      .filter(file => file && !file.includes('/'))
      .sort();

    return files.length > 0 ? files.join('\n') : 'Dossier vide';
  }

  private getHelpText(config: VMConfiguration): string {
    return `
🚀 VM Fyndra - ${config.title}

📋 Objectif: ${config.scenario.objective}

🛠️ Commandes disponibles:
  ls                    - Lister les fichiers
  cat <fichier>         - Afficher le contenu d'un fichier
  mkdir <dossier>       - Créer un dossier
  touch <fichier>       - Créer un fichier
  cd <dossier>          - Changer de répertoire
  pwd                   - Afficher répertoire actuel
  
  pnpm install          - Installer les dépendances
  pnpm dev              - Démarrer serveur de développement
  pnpm build            - Construire le projet
  pnpm test             - Exécuter les tests
  
  git status            - Statut Git
  git add <fichier>     - Ajouter fichier à Git
  git commit -m "msg"   - Commit
  
  code [fichier]        - Ouvrir éditeur
  curl <url>            - Tester API
  ps                    - Processus actifs
  
  help                  - Afficher cette aide

🎯 Tâches à accomplir:
${config.scenario.tasks.map((task, i) => `  ${i + 1}. ${task.description}`).join('\n')}

💡 Conseils:
${config.scenario.hints.map(hint => `  ${hint}`).join('\n')}
`;
  }

  private getProcessList(session: VMSession): string {
    return `
  PID TTY          TIME CMD
 1234 pts/0    00:00:01 bash
 5678 pts/0    00:00:00 node
 9012 pts/0    00:00:00 pnpm
`;
  }

  // Méthodes publiques pour l'interface
  getSession(sessionId: string): VMSession | undefined {
    return this.sessions.get(sessionId);
  }

  getAllSessions(): VMSession[] {
    return Array.from(this.sessions.values());
  }

  deleteSession(sessionId: string): boolean {
    return this.sessions.delete(sessionId);
  }

  getSessionProgress(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    const totalTasks = session.config.scenario.tasks.length;
    const completedTasks = session.progress.completedTasks.length;
    const progressPercent = Math.round((completedTasks / totalTasks) * 100);

    return {
      ...session.progress,
      totalTasks,
      progressPercent,
      currentTaskDescription: session.config.scenario.tasks[session.progress.currentTask]?.description
    };
  }
}
