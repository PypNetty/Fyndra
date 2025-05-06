// Define the Rule type locally instead of importing from a non-existent package
import type { Rule } from "@jobscan/shared";

// ... le reste du code (export const rules: Rule[] = [...]) ...

export const rules: Rule[] = [
  {
    id: "salary-missing",
    category: "compensation",
    title: "Salaire non spécifié",
    description: "L'offre ne mentionne pas de salaire précis",
    matchType: "notContains",
    matchValue: ["€", "euros", "salaire", "rémunération", "k€", "keuros"],
    severity: "warning",
    solution: "Demandez la fourchette de salaire dès le premier contact",
  },
  {
    id: "flexible-hours",
    category: "work-conditions",
    title: "Horaires flexibles suspects",
    description: "L'offre mentionne des horaires flexibles sans précision",
    matchType: "contains",
    matchValue: ["horaires flexibles", "disponibilité", "adaptabilité horaire"],
    severity: "warning",
    solution: "Demandez des précisions sur les plages horaires attendues",
  },
  {
    id: "family-culture",
    category: "culture",
    title: "Culture d'entreprise 'familiale'",
    description:
      "L'entreprise se décrit comme une 'famille', souvent signe de frontières floues",
    matchType: "contains",
    matchValue: ["comme une famille", "ambiance familiale", "esprit familial"],
    severity: "warning",
    solution: "Renseignez-vous sur l'équilibre vie pro/perso et les limites",
  },
  {
    id: "startup-nation",
    category: "culture",
    title: "Vocabulaire startup nation",
    description:
      "Utilise un vocabulaire typique de la 'startup nation' pouvant masquer des conditions difficiles",
    matchType: "contains",
    matchValue: [
      "challenge",
      "disruption",
      "révolutionner",
      "passionné",
      "rock star",
      "ninja",
      "guru",
    ],
    severity: "info",
    solution:
      "Soyez vigilant et demandez des précisions sur les conditions réelles",
  },
  {
    id: "urgent-hiring",
    category: "recruitment",
    title: "Recrutement urgent",
    description:
      "L'entreprise mentionne un besoin urgent, possible signe de turnover ou de mauvaise planification",
    matchType: "contains",
    matchValue: [
      "urgent",
      "dès que possible",
      "poste à pourvoir immédiatement",
      "besoin immédiat",
    ],
    severity: "info",
    solution:
      "Demandez pourquoi le poste s'est libéré et depuis combien de temps",
  },
];
