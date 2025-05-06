import { Severity } from './rule';

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  category: string;
  solution?: string;
  textSnippet?: string;  // Extrait du texte qui a déclenché l'alerte
}
