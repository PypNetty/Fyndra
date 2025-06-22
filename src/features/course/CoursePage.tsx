import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

interface CourseCard {
  id: string;
  title: string;
  content: string;
  type: "concept" | "example" | "tip" | "warning";
  duration: number; // en secondes
}

interface CourseData {
  [key: string]: {
    title: string;
    description: string;
    estimatedTime: string;
    cards: CourseCard[];
  };
}

const CoursePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const missionId = searchParams.get("mission") || "dev-frontend";

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [completedCards, setCompletedCards] = useState<Set<string>>(new Set());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [cardStartTime, setCardStartTime] = useState<Date>(new Date());

  const courseData: CourseData = {
    "dev-frontend": {
      title: "Développement Frontend avec React",
      description:
        "Apprenez les bases de React et TypeScript pour créer des applications modernes",
      estimatedTime: "10 min",
      cards: [
        {
          id: "intro-react",
          title: "Introduction à React",
          content: `React est une bibliothèque JavaScript pour créer des interfaces utilisateur interactives.

**Concepts clés :**
• **Composants** : Blocs de construction réutilisables
• **JSX** : Syntaxe permettant d'écrire du HTML dans JavaScript  
• **Props** : Données passées entre composants
• **State** : Données qui peuvent changer dans un composant

React utilise un **DOM virtuel** pour optimiser les performances en ne mettant à jour que les parties de la page qui ont réellement changé.`,
          type: "concept",
          duration: 120,
        },
        {
          id: "jsx-example",
          title: "Exemple de composant JSX",
          content: `Voici un exemple simple d'un composant React :

\`\`\`jsx
function Welcome({ name }) {
  return (
    <div className="welcome">
      <h1>Bonjour {name} !</h1>
      <p>Bienvenue dans votre première app React</p>
    </div>
  );
}
\`\`\`

**Points importants :**
• Les composants commencent par une majuscule
• JSX ressemble à du HTML mais c'est du JavaScript
• Les accolades \`{}\` permettent d'insérer du JavaScript
• \`className\` au lieu de \`class\` (mot réservé JS)`,
          type: "example",
          duration: 90,
        },
        {
          id: "typescript-benefits",
          title: "Pourquoi TypeScript ?",
          content: `TypeScript ajoute la vérification de types à JavaScript, ce qui nous aide à :

**Avantages principaux :**
• 🛡️ **Sécurité** : Détecte les erreurs avant l'exécution
• 🔍 **Autocomplétion** : Meilleure expérience de développement
• 📚 **Documentation** : Les types servent de documentation
• 🔧 **Refactoring** : Plus sûr de modifier le code

**Exemple avec types :**
\`\`\`typescript
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

function greetUser(user: User): string {
  return \`Salut \${user.name}, tu as \${user.age} ans\`;
}
\`\`\``,
          type: "concept",
          duration: 100,
        },
        {
          id: "hooks-intro",
          title: "Les Hooks React",
          content: `Les Hooks permettent d'utiliser l'état et d'autres fonctionnalités React dans les composants fonctionnels.

**Hooks essentiels :**

**useState** - Gérer l'état local :
\`\`\`typescript
const [count, setCount] = useState(0);
\`\`\`

**useEffect** - Effets de bord :
\`\`\`typescript
useEffect(() => {
  document.title = \`Compteur: \${count}\`;
}, [count]);
\`\`\`

Les Hooks rendent le code plus lisible et réutilisable que les classes.`,
          type: "concept",
          duration: 110,
        },
        {
          id: "best-practices",
          title: "Bonnes pratiques",
          content: `**Structure de projet recommandée :**
\`\`\`
src/
  components/    # Composants réutilisables
  pages/        # Pages de l'application
  hooks/        # Hooks personnalisés
  utils/        # Fonctions utilitaires
  types/        # Types TypeScript
\`\`\`

**Conseils de développement :**
• 📁 Un composant par fichier
• 🎯 Composants petits et focalisés
• 🔄 Réutilisez vos composants
• 🧪 Testez vos composants
• 📱 Pensez responsive dès le début`,
          type: "tip",
          duration: 95,
        },
      ],
    },
    "dev-backend": {
      title: "Développement d'API avec Node.js",
      description: "Créez des APIs robustes avec Node.js, Express et MongoDB",
      estimatedTime: "12 min",
      cards: [
        {
          id: "nodejs-intro",
          title: "Node.js et le Backend",
          content: `Node.js permet d'exécuter JavaScript côté serveur.

**Avantages de Node.js :**
• 🚀 **Performance** : Moteur V8 de Chrome
• 🔄 **Asynchrone** : Gestion efficace des I/O
• 📦 **NPM** : Énorme écosystème de packages
• 🌐 **JavaScript partout** : Frontend et backend

Node.js est parfait pour :
• APIs REST
• Applications temps réel (WebSocket)
• Microservices
• Outils de build`,
          type: "concept",
          duration: 120,
        },
        {
          id: "express-framework",
          title: "Express.js Framework",
          content: `Express est le framework web le plus populaire pour Node.js :

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Route GET
app.get('/api/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob'] });
});

// Route POST
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.json({ message: \`Utilisateur \${name} créé\` });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
\`\`\``,
          type: "example",
          duration: 130,
        },
        {
          id: "rest-api-design",
          title: "Design d'API REST",
          content: `**Principes REST :**

**Verbes HTTP :**
• \`GET\` - Récupérer des données
• \`POST\` - Créer une ressource
• \`PUT\` - Mettre à jour complètement
• \`PATCH\` - Mettre à jour partiellement
• \`DELETE\` - Supprimer

**Structure d'URLs :**
\`\`\`
GET    /api/users         # Liste tous les users
GET    /api/users/123     # Récupère user ID 123
POST   /api/users         # Crée un nouveau user
PUT    /api/users/123     # Met à jour user 123
DELETE /api/users/123     # Supprime user 123
\`\`\``,
          type: "concept",
          duration: 110,
        },
        {
          id: "mongodb-integration",
          title: "Intégration MongoDB",
          content: `MongoDB est une base de données NoSQL parfaite avec Node.js :

\`\`\`javascript
const mongoose = require('mongoose');

// Schéma utilisateur
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Créer un utilisateur
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
\`\`\``,
          type: "example",
          duration: 140,
        },
        {
          id: "error-handling",
          title: "Gestion d'erreurs",
          content: `⚠️ **Important :** Toujours gérer les erreurs !

**Middleware d'erreur Express :**
\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!' 
  });
});
\`\`\`

**Try/Catch avec async/await :**
\`\`\`javascript
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\``,
          type: "warning",
          duration: 120,
        },
      ],
    },
    "infra-docker": {
      title: "Containerisation avec Docker",
      description:
        "Maîtrisez Docker pour déployer vos applications de manière portable",
      estimatedTime: "8 min",
      cards: [
        {
          id: "docker-intro",
          title: "Qu'est-ce que Docker ?",
          content: `Docker permet d'empaqueter une application avec toutes ses dépendances dans un **container** portable.

**Avantages :**
• 📦 **Portabilité** : "Ça marche sur ma machine" ≠ plus un problème
• 🔒 **Isolation** : Chaque container est indépendant
• ⚡ **Légèreté** : Plus rapide que les VMs
• 🔄 **Cohérence** : Même environnement partout

**Concepts clés :**
• **Image** : Template pour créer des containers
• **Container** : Instance d'une image en cours d'exécution
• **Dockerfile** : Recette pour construire une image`,
          type: "concept",
          duration: 130,
        },
        {
          id: "dockerfile-example",
          title: "Créer un Dockerfile",
          content: `Exemple de Dockerfile pour une app Node.js :

\`\`\`dockerfile
# Image de base
FROM node:18-alpine

# Répertoire de travail
WORKDIR /app

# Copier package.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 3000

# Utilisateur non-root
USER node

# Commande de démarrage
CMD ["npm", "start"]
\`\`\`

Cette recette crée une image optimisée et sécurisée.`,
          type: "example",
          duration: 120,
        },
        {
          id: "docker-commands",
          title: "Commandes Docker essentielles",
          content: `**Construction et exécution :**
\`\`\`bash
# Construire une image
docker build -t mon-app .

# Lancer un container
docker run -p 3000:3000 mon-app

# Lancer en arrière-plan
docker run -d -p 3000:3000 mon-app
\`\`\`

**Gestion des containers :**
\`\`\`bash
docker ps                    # Containers actifs
docker ps -a                 # Tous les containers
docker stop <container-id>   # Arrêter
docker rm <container-id>     # Supprimer
docker logs <container-id>   # Voir les logs
\`\`\``,
          type: "concept",
          duration: 100,
        },
        {
          id: "docker-compose",
          title: "Docker Compose",
          content: `Docker Compose orchestre plusieurs containers :

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - database

  database:
    image: mongodb:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
\`\`\`

\`\`\`bash
docker-compose up -d    # Démarrer tous les services
docker-compose down     # Arrêter et supprimer
\`\`\``,
          type: "example",
          duration: 110,
        },
      ],
    },
    "cloud-aws": {
      title: "Déploiement Cloud avec AWS",
      description:
        "Apprenez à déployer et gérer vos applications sur AWS avec Terraform",
      estimatedTime: "15 min",
      cards: [
        {
          id: "aws-intro",
          title: "Introduction à AWS",
          content: `Amazon Web Services est la plateforme cloud leader mondial.

**Services principaux :**
• **EC2** : Serveurs virtuels
• **S3** : Stockage d'objets
• **RDS** : Bases de données managées
• **Lambda** : Computing serverless
• **VPC** : Réseau privé virtuel

**Avantages du cloud :**
• 🚀 **Scalabilité** : Adapter les ressources à la demande
• 💰 **Coût** : Payer seulement ce qu'on utilise
• 🌍 **Disponibilité** : Centres de données mondiaux
• 🔒 **Sécurité** : Infrastructure sécurisée par défaut`,
          type: "concept",
          duration: 140,
        },
        {
          id: "terraform-intro",
          title: "Infrastructure as Code avec Terraform",
          content: `Terraform permet de définir l'infrastructure dans du code :

\`\`\`hcl
# Fournisseur AWS
provider "aws" {
  region = "eu-west-1"
}

# Instance EC2
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t3.micro"
  
  tags = {
    Name = "serveur-web"
    Environment = "production"
  }
}

# Output l'IP publique
output "public_ip" {
  value = aws_instance.web.public_ip
}
\`\`\`

**Avantages :**
• 📝 Infrastructure versionnée
• 🔄 Reproductible
• 👥 Collaboration d'équipe`,
          type: "example",
          duration: 130,
        },
        {
          id: "aws-security",
          title: "Sécurité AWS",
          content: `🔒 **La sécurité est CRITIQUE en production !**

**Principes de base :**
• **IAM** : Gestion des accès et permissions
• **Security Groups** : Firewalls pour EC2
• **VPC** : Réseau privé isolé
• **Encryption** : Chiffrement des données

**Exemple Security Group :**
\`\`\`hcl
resource "aws_security_group" "web" {
  name = "web-sg"
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
\`\`\``,
          type: "warning",
          duration: 120,
        },
        {
          id: "deployment-pipeline",
          title: "Pipeline de déploiement",
          content: `**CI/CD avec GitHub Actions :**

\`\`\`yaml
name: Deploy to AWS
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: eu-west-1
      
      - name: Deploy with Terraform
        run: |
          terraform init
          terraform plan
          terraform apply -auto-approve
\`\`\`

🎯 **Automatisation = Moins d'erreurs + Déploiements plus rapides**`,
          type: "tip",
          duration: 140,
        },
      ],
    },
  };

  const currentCourse = courseData[missionId];
  const currentCard = currentCourse.cards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / currentCourse.cards.length) * 100;

  useEffect(() => {
    setCardStartTime(new Date());
  }, [currentCardIndex]);

  const handleNextCard = () => {
    // Marquer la carte comme complétée
    setCompletedCards((prev) => new Set([...prev, currentCard.id]));

    if (currentCardIndex < currentCourse.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      // Cours terminé, aller au questionnaire
      navigate(`/questionnaire?mission=${missionId}`);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const getCardIcon = (type: CourseCard["type"]) => {
    switch (type) {
      case "concept":
        return "📚";
      case "example":
        return "💡";
      case "tip":
        return "💡";
      case "warning":
        return "⚠️";
      default:
        return "📄";
    }
  };

  const getCardBorderColor = (type: CourseCard["type"]) => {
    switch (type) {
      case "concept":
        return "border-blue-500/30";
      case "example":
        return "border-green-500/30";
      case "tip":
        return "border-yellow-500/30";
      case "warning":
        return "border-red-500/30";
      default:
        return "border-white/10";
    }
  };

  return (
    <div className="min-h-screen bg-[#010116] text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#010116]">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 filter blur-[100px]"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/20 filter blur-[100px]"></div>
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-cyan-400/20 filter blur-[100px]"></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              to="/demo"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Retour à la démo
            </Link>

            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Fyndra
              </span>
              <span className="text-white/60">• Cours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 px-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-white/60">
              Carte {currentCardIndex + 1} sur {currentCourse.cards.length}
            </div>
            <div className="text-sm text-white/60">
              ~{Math.ceil(currentCard.duration / 60)} min de lecture
            </div>
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-center mt-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {currentCourse.title}
            </h1>
            <p className="text-white/70">{currentCourse.description}</p>
          </div>
        </div>
      </div>

      {/* Course Card */}
      <div className="relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-white/5 backdrop-blur-sm border ${getCardBorderColor(
              currentCard.type
            )} rounded-3xl p-8 mb-8`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">{getCardIcon(currentCard.type)}</div>
              <div>
                <h2 className="text-xl font-bold">{currentCard.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 capitalize">
                    {currentCard.type}
                  </span>
                  <span className="text-xs text-white/50">
                    ~{Math.ceil(currentCard.duration / 60)} min
                  </span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div
                className="text-white/80 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: currentCard.content
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-white font-semibold">$1</strong>'
                    )
                    .replace(/\*(.*?)\*/g, '<em class="text-blue-300">$1</em>')
                    .replace(
                      /`([^`]+)`/g,
                      '<code class="bg-black/50 px-1 py-0.5 rounded text-green-300 text-sm">$1</code>'
                    )
                    .replace(
                      /```(\w+)?\n([\s\S]*?)```/g,
                      '<pre class="bg-black/70 p-4 rounded-lg mt-4 mb-4 overflow-x-auto"><code class="text-green-300 text-sm">$2</code></pre>'
                    )
                    .replace(/• /g, '<span class="text-blue-400">•</span> '),
                }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePreviousCard}
              disabled={currentCardIndex === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white/90 border border-white/20 hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Précédent
            </button>

            <div className="flex items-center gap-2">
              {currentCourse.cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentCardIndex
                      ? "bg-gradient-to-r from-blue-500 to-violet-500"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextCard}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 to-violet-500 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              {currentCardIndex === currentCourse.cards.length - 1 ? (
                <>
                  Passer au quiz
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              ) : (
                <>
                  Suivant
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="relative z-10 mt-20 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center">
            <p className="text-white/60 text-sm">
              📚 <strong>Cours interactif</strong> - Prenez votre temps pour
              bien comprendre chaque concept. Un quiz vous attend à la fin !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
