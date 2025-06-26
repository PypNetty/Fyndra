# Guide d'Intégration VM Simulée - Fyndra

## 🚀 VM Simulée Interactive

Votre VM simulée est maintenant pleinement fonctionnelle ! Voici comment l'utiliser efficacement :

### ✨ Fonctionnalités du Terminal

#### Interface Interactive
- **Terminal réel** : Vous pouvez taper des commandes comme dans un vrai terminal
- **Auto-focus** : Cliquez n'importe où dans le terminal pour activer la saisie
- **Curseur visible** : Un curseur clignotant indique que vous pouvez taper
- **Historique** : Toutes vos commandes et leurs résultats sont sauvegardés

#### Commandes Disponibles

##### 📁 Navigation et Fichiers
```bash
ls                    # Lister les fichiers
cd <dossier>         # Changer de répertoire
pwd                  # Afficher le répertoire courant
cat <fichier>        # Afficher le contenu d'un fichier
mkdir <dossier>      # Créer un dossier
touch <fichier>      # Créer un fichier vide
```

##### 📦 Gestion de Packages (pnpm)
```bash
pnpm install         # Installer les dépendances
pnpm dev            # Démarrer le serveur de dev
pnpm build          # Construire le projet
pnpm test           # Lancer les tests
```

##### 🔧 Git
```bash
git status          # Statut du dépôt
git add <fichier>   # Ajouter un fichier
git commit -m "msg" # Créer un commit
git init            # Initialiser un dépôt
```

##### 🌐 Réseau et Tests
```bash
curl localhost:3000 # Tester une API
ps                  # Lister les processus
code <fichier>      # Ouvrir l'éditeur
```

##### ❓ Aide
```bash
help                # Afficher l'aide complète
```

### 🎯 Système de Scoring

Chaque action vous rapporte des points :
- **Commandes de base** : 5 points
- **Installation/Configuration** : 5-10 points
- **Développement** : 10-15 points
- **Tests et déploiement** : 15-20 points

### 🏆 Progression

Votre progression est trackée en temps réel :
- **Tâches complétées** : Visible dans l'en-tête
- **Score actuel** : Affiché en permanence
- **Barre de progression** : Indication visuelle de l'avancement
- **Conseils contextuels** : Hints adaptés à votre niveau

### 🛠️ Environnements Adaptatifs

#### Frontend (React/Vue)
- **Outils** : Node.js, pnpm, Vite, ESLint
- **Projets** : SPA, composants interactifs
- **Commande recommandée** : `pnpm dev` pour démarrer

#### Backend (Node.js/Python)
- **Outils** : Express, API testing, databases
- **Projets** : API REST, microservices
- **Commande recommandée** : `curl localhost:3000` pour tester

#### DevOps
- **Outils** : Docker, Kubernetes, Terraform
- **Projets** : Conteneurisation, orchestration
- **Commande recommandée** : `docker build` pour commencer

### 💡 Conseils d'Utilisation

#### Pour Débuter
1. Tapez `help` pour voir toutes les commandes
2. Utilisez `ls` pour explorer la structure du projet
3. Démarrez par `pnpm install` si c'est un projet Node.js
4. Suivez les conseils dans la section "💡 Conseils"

#### Boutons Rapides
Utilisez les boutons en bas du terminal pour les commandes courantes :
- `help` - Aide générale
- `ls` - Lister les fichiers
- `pnpm install` - Installer dépendances
- `pnpm dev` - Démarrer le serveur
- `git status` - Statut Git

#### Personnalisation par Niveau
- **Débutant** : Commandes guidées, hints détaillés
- **Intermédiaire** : Projets plus complexes, moins d'aide
- **Avancé** : Défis techniques, évaluation stricte

### 🔧 Dépannage

#### Le terminal ne répond pas ?
- Cliquez dans la zone noire du terminal
- Vérifiez que la session est "🟢 En cours"
- Rafraîchissez si nécessaire

#### Commande non reconnue ?
- Tapez `help` pour voir les commandes disponibles
- Vérifiez l'orthographe
- Certaines commandes peuvent être spécifiques au domaine

#### Pas de score ?
- Certaines commandes ne donnent pas de points
- Les points sont attribués pour les tâches productives
- Consultez la section "🎯 Tâche actuelle" pour savoir quoi faire

### 🎮 Gamification

#### Badges et Récompenses
- Completion de tâches spécifiques
- Scores élevés
- Utilisation d'outils avancés
- Bonnes pratiques de développement

#### Métriques Trackées
- Temps de completion
- Nombre de commandes utilisées
- Efficacité des solutions
- Respect des conventions

### 📈 Prochaines Étapes

#### Fonctionnalités à Venir
- **Sauvegarde de session** : Reprendre où vous vous êtes arrêté
- **Mode collaboratif** : Travailler à plusieurs sur la même VM
- **Intégration GitHub** : Import/export de projets réels
- **VM containerisées** : Environnements encore plus réalistes

#### Intégrations Prévues
- **VS Code Web** : Éditeur intégré
- **Database simulée** : MongoDB, PostgreSQL
- **Cloud deployment** : Déploiement réel sur AWS/Azure
- **AI Assistant** : Helper IA intégré

---

## 🚀 Commencer Maintenant

1. **Terminez un questionnaire** dans n'importe quelle technologie
2. **Cliquez sur "Pratiquer dans une VM"** dans les résultats
3. **Commencez par `help`** pour découvrir les commandes
4. **Suivez les conseils** affichés pour progresser
5. **Amusez-vous** en apprenant ! 🎉

*Votre VM s'adapte automatiquement à vos résultats de quiz pour vous offrir l'expérience d'apprentissage la plus pertinente possible.*
