# Architecture basée sur les Technologies - Documentation

## Vue d'ensemble

Cette nouvelle architecture organise le contenu pédagogique par **technologies** plutôt que par domaines, offrant une approche plus granulaire et flexible.

## Structure des dossiers

```
data/
  technologies/
    Front/
      React/
        cours/index.ts        # Cours et modules d'apprentissage
        questionnaire/index.ts # Questions d'évaluation
        vm/index.ts           # Configurations de machines virtuelles
        index.ts              # Export principal de la technologie
      Vue/ (à venir)
      index.ts                # Export de toutes les technologies Frontend
    
    Back/
      Node.js/
        cours/index.ts
        questionnaire/index.ts
        vm/index.ts
        index.ts
      Python/ (à venir)
      index.ts                # Export de toutes les technologies Backend
    
    Cloud/
      AWS/
        cours/index.ts
        questionnaire/index.ts
        vm/index.ts
        index.ts
      Azure/ (à venir)
      index.ts                # Export de toutes les technologies Cloud
    
    Infrastructure/
      Docker/
        cours/index.ts
        questionnaire/index.ts
        vm/index.ts
        index.ts
      Terraform/
        cours/index.ts
        questionnaire/index.ts
        vm/index.ts
        index.ts
      index.ts                # Export de toutes les technologies Infrastructure
    
    index.ts                  # Export principal avec structure complète
```

## Avantages de cette approche

### 1. **Granularité technologique**
- Chaque technologie a sa propre structure complète
- Facilite l'ajout de nouvelles technologies
- Permet un apprentissage ciblé par technologie

### 2. **Organisation tripartite**
Chaque technologie contient 3 types de contenus :
- **`cours/`** : Modules d'apprentissage théoriques et pratiques
- **`questionnaire/`** : Évaluations et tests de compétences
- **`vm/`** : Environnements de pratique préconfigurés

### 3. **Flexibilité d'extension**
- Ajouter une nouvelle technologie = créer un nouveau dossier
- Structure prévisible et cohérente
- Imports modulaires selon les besoins

### 4. **Compatibilité**
- L'ancienne structure (domains) reste disponible
- Transition progressive possible
- Aucune rupture de compatibilité

## Utilisation

### Import des données

```typescript
import { 
  technologyBasedData,     // Structure complète
  technologyCategories,    // Métadonnées des catégories
  allQuestions,           // Toutes les questions combinées
  reactQuestions,         // Questions spécifiques à React
  nodejsQuestions        // Questions spécifiques à Node.js
} from "./data";
```

### Accès aux données par technologie

```typescript
// Accéder à React
const reactData = technologyBasedData.Front.React;
console.log(reactData.questionnaire); // Questions React
console.log(reactData.cours);         // Cours React
console.log(reactData.vm);            // VMs React

// Accéder à Node.js
const nodejsData = technologyBasedData.Back["Node.js"];
```

### Parcours des catégories

```typescript
technologyCategories.forEach(category => {
  console.log(`${category.name} ${category.icon}`);
  console.log(`Technologies: ${category.technologies.join(", ")}`);
});
```

## Migration depuis l'ancienne structure

### Avant (structure par domaines)
```typescript
import { questionnaireData } from "./data";
const frontendQuestions = questionnaireData["dev-frontend"];
```

### Après (structure par technologies)
```typescript
import { reactQuestions, technologyBasedData } from "./data";
const reactQuestionnaire = reactQuestions;
// ou
const reactData = technologyBasedData.Front.React;
```

## Extensibilité

### Ajouter une nouvelle technologie

1. Créer le dossier technologie : `technologies/Categorie/NomTechnologie/`
2. Créer les 3 sous-dossiers : `cours/`, `questionnaire/`, `vm/`
3. Implémenter les fichiers `index.ts` dans chaque sous-dossier
4. Ajouter l'export dans l'index de catégorie
5. Mettre à jour l'index principal

### Exemple : Ajouter Vue.js

```bash
mkdir -p technologies/Front/Vue/{cours,questionnaire,vm}
# Créer les fichiers index.ts
# Ajouter à Front/index.ts
# Tester les imports
```

## Points d'attention

- **Types TypeScript** : Utiliser les interfaces `Technology` et `TechnologyData`
- **Nomenclature** : Respecter la structure tripartite (cours/questionnaire/vm)
- **Exports** : Maintenir la cohérence des exports entre les niveaux
- **Tests** : Valider les nouveaux contenus avec `get_errors`

## Prochaines étapes

1. ✅ Structure de base créée
2. ✅ Migration des questions existantes
3. 🔄 Implémentation complète des cours
4. 🔄 Configuration des VMs
5. 🔄 Interface utilisateur adaptée
6. 🔄 Tests et validation complète
