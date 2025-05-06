import type { Alert, JobOffer, Rule } from "@jobscan/shared"; // Importe depuis la racine du package
import { extractSnippet } from "@jobscan/shared";
import { TECHNICAL_SKILLS } from "@jobscan/shared/src/constants/skills";

/**
 * Analyse le texte d'une offre d'emploi selon un ensemble de règles
 */
export function analyzeJobOffer(jobOffer: JobOffer, rules: Rule[]): Alert[] {
  const text = jobOffer.description.toLowerCase();
  const alerts: Alert[] = [];

  for (const rule of rules) {
    let isMatch = false;
    let matchedTerm = "";

    switch (rule.matchType) {
      case "contains":
        if (Array.isArray(rule.matchValue)) {
          for (const term of rule.matchValue) {
            if (text.includes(term.toLowerCase())) {
              isMatch = true;
              matchedTerm = term;
              break;
            }
          }
        } else if (typeof rule.matchValue === "string") {
          isMatch = text.includes(rule.matchValue.toLowerCase());
          matchedTerm = rule.matchValue;
        }
        break;

      case "notContains":
        if (Array.isArray(rule.matchValue)) {
          isMatch = !rule.matchValue.some((term) =>
            text.includes(term.toLowerCase())
          );
        } else if (typeof rule.matchValue === "string") {
          isMatch = !text.includes(rule.matchValue.toLowerCase());
        }
        break;

      case "regex":
        const regex =
          rule.matchValue instanceof RegExp
            ? rule.matchValue
            : new RegExp(String(rule.matchValue), "i");
        isMatch = regex.test(text);
        break;
    }

    if (isMatch) {
      const snippet =
        rule.matchType === "contains" && matchedTerm
          ? extractSnippet(jobOffer.description, matchedTerm)
          : undefined; // Pas de snippet pertinent pour notContains

      alerts.push({
        id: rule.id,
        title: rule.title,
        description: rule.description,
        severity: rule.severity,
        category: rule.category,
        solution: rule.solution,
        textSnippet: snippet, // Utilise la variable snippet
      });
    }
  }
  return alerts;
}

/**
 * Extrait les compétences techniques d'un texte
 * @param text Le texte à analyser
 * @returns Liste des compétences techniques trouvées
 */
export function extractSkillsFromText(text: string): string[] {
  const foundSkills = new Set<string>();
  const lowerText = text.toLowerCase();

  for (const skill of TECHNICAL_SKILLS) {
    // Recherche le skill en tenant compte des espaces et de la casse
    const lowerSkill = skill.toLowerCase();

    // Recherche exacte ou avec des espaces autour
    if (
      lowerText.includes(` ${lowerSkill} `) ||
      lowerText.includes(` ${lowerSkill},`) ||
      lowerText.includes(` ${lowerSkill}.`) ||
      lowerText.includes(` ${lowerSkill}:`) ||
      lowerText.includes(` ${lowerSkill}/`) ||
      lowerText.includes(`(${lowerSkill})`) ||
      lowerText.includes(`/${lowerSkill}/`) ||
      lowerText.startsWith(`${lowerSkill} `) ||
      lowerText.includes(`\n${lowerSkill} `)
    ) {
      foundSkills.add(skill);
    }
  }

  return Array.from(foundSkills);
}

/**
 * Compare les compétences utilisateur avec celles requises par l'offre
 * @param requiredSkills Compétences requises par l'offre
 * @param userSkills Compétences de l'utilisateur
 * @returns Résultat de la comparaison
 */
export interface SkillsMatchResult {
  matchPercentage: number;
  matchingSkills: string[];
  missingSkills: string[];
}

export function compareSkills(
  requiredSkills: string[],
  userSkills: string[]
): SkillsMatchResult {
  // Normaliser les compétences (minuscules)
  const normalizedRequiredSkills = requiredSkills.map((s) => s.toLowerCase());
  const normalizedUserSkills = userSkills.map((s) => s.toLowerCase());

  // Identifier les compétences correspondantes
  const matchingSkills = requiredSkills.filter((skill) =>
    normalizedUserSkills.includes(skill.toLowerCase())
  );

  // Identifier les compétences manquantes
  const missingSkills = requiredSkills.filter(
    (skill) => !normalizedUserSkills.includes(skill.toLowerCase())
  );

  // Calculer le pourcentage de correspondance
  const matchPercentage =
    requiredSkills.length === 0
      ? 100
      : Math.round((matchingSkills.length / requiredSkills.length) * 100);

  return {
    matchPercentage,
    matchingSkills,
    missingSkills,
  };
}
