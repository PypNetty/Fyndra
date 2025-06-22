export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
  documentationUrl?: string;
}

export interface Question {
  id: string;
  question: string;
  options: QuestionOption[];
  type: "single" | "multiple";
  difficulty: "easy" | "medium" | "hard";
  points: number;
}

export interface QuestionnaireConfig {
  title: string;
  description: string;
  passingScore: number;
  questions: Question[];
}

export interface QuestionnaireData {
  [key: string]: QuestionnaireConfig;
}

// Nouveaux types pour l'architecture basée sur les technologies
export interface TechnologyCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface Technology {
  name: string;
  description: string;
  questionnaire: Question[];
  cours: any[]; // À typer plus précisément plus tard
  vm: any[]; // À typer plus précisément plus tard
}

export interface TechnologyData {
  [key: string]: Technology;
}
