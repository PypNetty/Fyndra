# Guide de Migration du Composant QuestionnairePage

## Situation Actuelle

Le composant `QuestionnairePage.tsx` utilise encore l'ancienne structure basée sur les domaines :

```typescript
import { questionnaireData } from "./data";
const currentQuestionnaire = questionnaireData[missionId];
```

## Migration vers la Nouvelle Architecture

### Option 1: Migration Complète (Recommandée)

```typescript
// Remplacer l'import actuel
import { 
  technologyBasedData,
  technologyCategories,
  allQuestions 
} from "./data";

// Nouveau système de sélection de questionnaire
const getTechnologyQuestionnaire = (technologyPath: string) => {
  // Format: "Front/React", "Back/Node.js", "Cloud/AWS", etc.
  const [category, technology] = technologyPath.split('/');
  return technologyBasedData[category]?.[technology]?.questionnaire || [];
};

// Dans le composant
const missionId = searchParams.get("mission") || "Front/React";
const questions = getTechnologyQuestionnaire(missionId);
```

### Option 2: Adapter l'URL existante

```typescript
// Mapper les anciens IDs vers la nouvelle structure
const missionMapping = {
  "dev-frontend": () => technologyBasedData.Front.React.questionnaire,
  "dev-backend": () => technologyBasedData.Back["Node.js"].questionnaire,
  "dev-cloud-aws": () => technologyBasedData.Cloud.AWS.questionnaire,
  "dev-infrastructure-docker": () => technologyBasedData.Infrastructure.Docker.questionnaire,
  "dev-infrastructure-terraform": () => technologyBasedData.Infrastructure.Terraform.questionnaire,
};

// Dans le composant
const questions = missionMapping[missionId]?.() || [];
```

### Option 3: Nouveau Sélecteur de Technologie

```typescript
// Interface de sélection par technologie
const TechnologySelector = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {technologyCategories.map(category => (
        <div key={category.id} className="space-y-2">
          <h3 className="font-bold">{category.icon} {category.name}</h3>
          {category.technologies.map(tech => (
            <Button
              key={tech}
              onClick={() => navigate(`/questionnaire?mission=${category.id}/${tech}`)}
              variant="outline"
              className="w-full"
            >
              {tech}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
```

## Avantages de la Migration

### 🎯 Granularité Améliorée
- Quiz par technologie spécifique
- Progression trackée par technologie
- Certifications par technologie

### 🚀 Flexibilité d'Extension
- Ajout facile de nouvelles technologies
- Parcours d'apprentissage personnalisés
- Analytics par technologie

### 🎨 UX Améliorée
- Sélection intuitive par catégorie
- Progression visuelle claire
- Recommandations intelligentes

## Migration Step-by-Step

### 1. Ajouter le Nouveau Sélecteur
```typescript
// Dans le composant principal
if (!searchParams.get("mission")) {
  return <TechnologySelector />;
}
```

### 2. Adapter la Logique des Questions
```typescript
// Remplacer la logique actuelle
const questions = useMemo(() => {
  const missionPath = searchParams.get("mission");
  if (missionPath?.includes('/')) {
    return getTechnologyQuestionnaire(missionPath);
  }
  // Fallback vers l'ancien système
  return questionnaireData[missionPath]?.questions || [];
}, [searchParams]);
```

### 3. Mettre à Jour les Métadonnées
```typescript
// Récupérer les infos de la technologie
const getTechnologyInfo = (technologyPath: string) => {
  const [category, technology] = technologyPath.split('/');
  const categoryData = technologyCategories.find(cat => 
    cat.id === category.toLowerCase()
  );
  const techData = technologyBasedData[category]?.[technology];
  
  return {
    name: technology,
    category: categoryData?.name,
    icon: categoryData?.icon,
    description: techData?.description,
    totalQuestions: techData?.questionnaire.length,
    coursesAvailable: techData?.cours?.length || 0,
    vmsAvailable: techData?.vm?.length || 0
  };
};
```

### 4. Nouveau Header avec Info Technologie
```typescript
const TechnologyHeader = ({ technologyPath }: { technologyPath: string }) => {
  const info = getTechnologyInfo(technologyPath);
  
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{info.icon}</span>
        <div>
          <h1 className="text-2xl font-bold">{info.name}</h1>
          <p className="text-blue-100">{info.description}</p>
          <div className="flex gap-4 text-sm mt-2">
            <span>📝 {info.totalQuestions} questions</span>
            <span>📚 {info.coursesAvailable} cours</span>
            <span>💻 {info.vmsAvailable} VMs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
```

## Compatibilité

Le système reste **100% compatible** avec l'ancienne approche grâce aux exports de compatibilité dans `data/index.ts`.

## Prochaines Étapes

1. ✅ Architecture complète créée
2. 🔄 **Migration du composant** (cette étape)
3. 🔄 Tests utilisateur
4. 🔄 Déploiement progressif
5. 🔄 Feedback et optimisations

La nouvelle architecture est prête ! Il ne reste plus qu'à adapter l'interface utilisateur pour exploiter pleinement ses capacités.
