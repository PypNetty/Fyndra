import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";

const VMPage = () => {
  const [searchParams] = useSearchParams();
  const missionId = searchParams.get("mission");
  const [isLoading, setIsLoading] = useState(true);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "Welcome to Fyndra Development Environment",
    "Ubuntu 22.04.3 LTS",
    "",
    "Last login: Mon Jun 9 14:30:22 2025",
    "user@fyndra-vm:~$ ",
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const missions = {
    "dev-frontend": {
      title: "Développement Frontend",
      files: [
        { name: "package.json", type: "file" },
        { name: "src/", type: "folder" },
        { name: "src/App.tsx", type: "file" },
        { name: "src/components/", type: "folder" },
        { name: "public/", type: "folder" },
        { name: "README.md", type: "file" },
      ],
      startCommand: "npm run dev",
    },
    "dev-backend": {
      title: "API Backend",
      files: [
        { name: "package.json", type: "file" },
        { name: "src/", type: "folder" },
        { name: "src/server.js", type: "file" },
        { name: "src/routes/", type: "folder" },
        { name: "src/models/", type: "folder" },
        { name: ".env", type: "file" },
      ],
      startCommand: "npm start",
    },
    "infra-docker": {
      title: "Infrastructure Docker",
      files: [
        { name: "Dockerfile", type: "file" },
        { name: "docker-compose.yml", type: "file" },
        { name: "nginx.conf", type: "file" },
        { name: "app/", type: "folder" },
        { name: "scripts/", type: "folder" },
      ],
      startCommand: "docker-compose up",
    },
    "cloud-aws": {
      title: "Déploiement Cloud",
      files: [
        { name: "main.tf", type: "file" },
        { name: "variables.tf", type: "file" },
        { name: "outputs.tf", type: "file" },
        { name: "modules/", type: "folder" },
        { name: ".github/workflows/", type: "folder" },
      ],
      startCommand: "terraform plan",
    },
  };

  const currentMission =
    missions[missionId as keyof typeof missions] || missions["dev-frontend"];

  useEffect(() => {
    // Simulate VM loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const handleTerminalCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentCommand.trim()) {
      const newLines = [...terminalLines];
      newLines[newLines.length - 1] += currentCommand;

      // Simulate command responses
      if (currentCommand.includes("ls")) {
        newLines.push(
          "",
          ...currentMission.files.map((f) => f.name),
          "",
          "user@fyndra-vm:~$ "
        );
      } else if (currentCommand.includes("pwd")) {
        newLines.push("/home/user/project", "", "user@fyndra-vm:~$ ");
      } else if (
        currentCommand.includes(currentMission.startCommand.split(" ")[0])
      ) {
        newLines.push(
          "",
          "🚀 Starting development server...",
          "✅ Server ready on http://localhost:3000",
          "",
          "user@fyndra-vm:~$ "
        );
      } else if (currentCommand.includes("help")) {
        newLines.push(
          "",
          "Available commands:",
          "- ls: list files",
          "- pwd: current directory",
          `- ${currentMission.startCommand}: start the project`,
          "",
          "user@fyndra-vm:~$ "
        );
      } else {
        newLines.push(
          "",
          `Command '${currentCommand}' not found. Type 'help' for available commands.`,
          "",
          "user@fyndra-vm:~$ "
        );
      }

      setTerminalLines(newLines);
      setCurrentCommand("");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#010116] text-white font-sans flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/10 border-t-blue-500 rounded-full animate-spin mb-6 mx-auto"></div>
          <h2 className="text-xl font-bold mb-2">Connexion à votre VM...</h2>
          <p className="text-white/70">
            Initialisation de l'environnement de développement
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#010116] text-white font-mono">
      {/* VM Header */}
      <div className="bg-[#1a1a2e] border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-white/80 text-sm">
              {currentMission.title} - VM Environment
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Connected
            </div>
            <Link
              to="/demo"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              ← Retour à la démo
            </Link>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* File Explorer */}
        <div className="w-64 bg-[#0d1117] border-r border-white/10 p-4">
          <h3 className="text-white/80 text-sm font-semibold mb-4 uppercase tracking-wider">
            Explorer
          </h3>
          <div className="space-y-1">
            {currentMission.files.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-2 py-1 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded cursor-pointer"
              >
                {file.type === "folder" ? (
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-white/60"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Code Editor Simulation */}
          <div className="flex-1 bg-[#0d1117] p-4">
            <div className="bg-[#161b22] rounded-lg border border-white/10 h-full p-4">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-white/80 text-sm">
                  {missionId === "dev-frontend"
                    ? "App.tsx"
                    : missionId === "dev-backend"
                    ? "server.js"
                    : missionId === "infra-docker"
                    ? "Dockerfile"
                    : "main.tf"}
                </span>
              </div>

              <div className="text-white/80 text-sm leading-relaxed">
                {missionId === "dev-frontend" && (
                  <pre className="text-blue-300">{`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Fyndra Frontend Mission</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;`}</pre>
                )}

                {missionId === "dev-backend" && (
                  <pre className="text-green-300">{`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Fyndra Backend Mission',
    version: '1.0.0'
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</pre>
                )}

                {missionId === "infra-docker" && (
                  <pre className="text-purple-300">{`FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]`}</pre>
                )}

                {missionId === "cloud-aws" && (
                  <pre className="text-orange-300">{`terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t3.micro"

  tags = {
    Name = "fyndra-web-server"
    Environment = "demo"
  }
}`}</pre>
                )}
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="h-64 bg-[#0d1117] border-t border-white/10 p-4">
            <div className="bg-black rounded-lg h-full p-4 font-mono text-sm">
              <div ref={terminalRef} className="h-full overflow-y-auto mb-2">
                {terminalLines.map((line, idx) => (
                  <div key={idx} className="text-green-400">
                    {line}
                  </div>
                ))}
              </div>
              <div className="flex items-center text-green-400">
                <span className="mr-2">user@fyndra-vm:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleTerminalCommand}
                  className="flex-1 bg-transparent outline-none text-green-400"
                  placeholder="Tapez 'help' pour voir les commandes disponibles"
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-80 bg-[#0d1117] border-l border-white/10 p-4">
          <h3 className="text-white/80 text-sm font-semibold mb-4 uppercase tracking-wider">
            Mission Guide
          </h3>

          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold mb-2">Objectif</h4>
              <p className="text-white/70 text-sm">
                {missionId === "dev-frontend" &&
                  "Créer une application React moderne avec TypeScript"}
                {missionId === "dev-backend" &&
                  "Développer une API REST avec Node.js et Express"}
                {missionId === "infra-docker" &&
                  "Containeriser une application complète"}
                {missionId === "cloud-aws" && "Déployer sur AWS avec Terraform"}
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-2">
                Commande de démarrage
              </h4>
              <code className="text-white/80 text-sm bg-black/50 px-2 py-1 rounded">
                {currentMission.startCommand}
              </code>
            </div>

            <div className="bg-violet-500/10 border border-violet-500/20 rounded-lg p-4">
              <h4 className="text-violet-400 font-semibold mb-2">Tâches</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Explorer les fichiers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Lancer l'application
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  Modifier le code
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  Tester les fonctionnalités
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VMPage;
