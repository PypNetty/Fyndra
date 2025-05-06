import { PLATFORM_PATTERNS } from "@jobscan/shared/dist/constants/platforms";

export function detectJobOffer(document: Document): boolean {
  const url = window.location.href;
  return Object.values(PLATFORM_PATTERNS).some((platform) =>
    platform.urlPattern.test(url)
  );
}

// Helper pour attendre un élément
async function waitForElement(
  selector: string,
  timeout = 5000
): Promise<Element | null> {
  const startTime = Date.now();
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      } else if (Date.now() - startTime > timeout) {
        clearInterval(interval);
        console.log(`Timeout waiting for selector: ${selector}`); // Log timeout
        resolve(null); // Timeout
      }
    }, 100);
  });
}

// Fonction modifiée pour être async et utiliser waitForElement
export async function extractJobContent(document: Document): Promise<string> {
  const url = window.location.href;
  let content = "";
  for (const platform of Object.values(PLATFORM_PATTERNS)) {
    if (platform.urlPattern.test(url)) {
      console.log(
        `Content script: Attente de l'élément '${platform.selectors.description}'`
      );
      const descriptionElement = await waitForElement(
        platform.selectors.description
      );
      if (descriptionElement) {
        console.log("Content script: Élément trouvé ! Extraction du contenu.");
        content = descriptionElement.textContent || "";
        break;
      } else {
        console.log("Content script: Élément non trouvé après attente.");
        // On ne lève pas d'erreur ici, on retourne juste une chaîne vide si non trouvé
      }
    }
  }
  return content.trim();
}
