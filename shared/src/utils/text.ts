/**
 * Nettoie un texte en supprimant les caractères spéciaux et en normalisant les espaces
 */
export function cleanText(text: string): string {
  if (!text) return '';
  return text
    .replace(/\s+/g, ' ')
    .replace(/[\r\n]+/g, ' ')
    .trim();
}

/**
 * Extrait un snippet de texte autour d'un terme trouvé
 */
export function extractSnippet(text: string, term: string, length: number = 100): string {
  if (!text || !term) return '';
  
  const lowerText = text.toLowerCase();
  const lowerTerm = term.toLowerCase();
  
  const index = lowerText.indexOf(lowerTerm);
  if (index === -1) return '';
  
  const start = Math.max(0, index - length / 2);
  const end = Math.min(text.length, index + term.length + length / 2);
  
  let snippet = text.substring(start, end);
  
  // Ajouter des ellipses si nécessaire
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return snippet;
}
