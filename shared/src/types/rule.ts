export type RuleMatchType =
  | "contains" // Contient certains mots
  | "notContains" // Ne contient pas certains mots
  | "regex" // Correspond à une expression régulière
  | "salary" // Analyse spécifique au salaire
  | "workHours"; // Analyse des horaires de travail

export type Severity = "info" | "warning" | "error";

export type RuleTarget = "description" | "profile" | "title" | "company";

export interface Rule {
  id: string; // Identifiant unique
  category: string; // Catégorie (salaire, horaires, etc.)
  title: string; // Titre court de la règle
  description: string; // Description détaillée
  matchType: RuleMatchType;
  matchTarget?: RuleTarget; // 👈 champ ciblé (description par défaut si absent)
  matchValue: string[] | string | RegExp;
  severity: Severity;
  examples?: {
    match: string[]; // Exemples qui déclenchent la règle
    noMatch: string[]; // Exemples qui ne déclenchent pas la règle
  };
  solution?: string; // Conseil pour l'utilisateur
}
