import { detectJobOffer, extractJobContent } from "./detector";
import { highlightIssues } from "./highlighter";
import { getPlatformFromUrl } from "./platforms";
import type { Alert } from "@jobscan/shared"; // Assure-toi d'importer Alert

let toastVisible = false;
let toastElement: HTMLElement | null = null;

async function analyzeCurrentPage() {
  console.log("Content script: analyzeCurrentPage démarrée");

  if (!detectJobOffer(document)) {
    console.log("Content script: Page non détectée comme offre d'emploi");
    throw new Error("Not a job offer page");
  }

  try {
    console.log("Content script: Extraction du contenu...");
    const content = await extractJobContent(document);
    if (!content) {
      console.log("Content script: Contenu non trouvé");
      throw new Error("Could not extract job content");
    }

    console.log("Content script: Appel API /analyze...");
    const platform = getPlatformFromUrl(window.location.href);
    const response = await fetch("http://localhost:3000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: window.location.href,
        platform,
        description: content,
      }),
    });

    if (!response.ok) {
      console.error("Content script: Erreur API", response.statusText);
      throw new Error(`API Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Content script: Résultat API reçu", result);

    // Utilise le type Alert importé
    const alerts: Alert[] = getAlerts(result);

    // Affiche le badge immédiatement après avoir calculé le score
    showJobScanBadge(alerts.length, result.jobOffer);

    // Stocke l'objet complet retourné par l'API, qui contient jobOffer et alerts
    await chrome.storage.local.set({ currentAnalysis: result.jobOffer });

    console.log("Content script: Analyse terminée et stockée");
  } catch (error) {
    console.error("JobScan: Erreur dans analyzeCurrentPage", error);
    throw error; // Re-throw pour que le .catch dans le listener de message fonctionne
  }
}

// Lancer l'analyse au chargement de la page (automatiquement)
window.addEventListener("load", () => {
  // Délai pour s'assurer que le DOM est complètement chargé et que les éléments dynamiques sont présents
  setTimeout(() => {
    console.log(
      "Content script: Lancement de l'analyse automatique au chargement"
    );
    analyzeCurrentPage().catch((err) =>
      console.error("Erreur analyse auto:", err)
    );
  }, 2000); // Attendre 2 secondes pour s'assurer que la page est bien chargée
});

chrome.runtime.onMessage.addListener(
  (
    message: { action: string },
    sender: chrome.runtime.MessageSender, // Utilise le type correct
    sendResponse: (response: { success: boolean; error?: string }) => void // Utilise le type correct
  ) => {
    console.log("Content script: Message reçu", message);
    if (message.action === "analyze") {
      console.log(
        "Content script: Action 'analyze' détectée. Appel de analyzeCurrentPage..."
      );
      analyzeCurrentPage()
        .then(() => {
          console.log(
            "Content script: analyzeCurrentPage SUCCÈS. Appel de sendResponse({ success: true })"
          );
          sendResponse({ success: true });
        })
        .catch((error) => {
          console.error(
            "Content script: analyzeCurrentPage ERREUR. Appel de sendResponse({ success: false })",
            error
          );
          // Envoie un message d'erreur plus utile
          sendResponse({
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
          });
        });
      // Important: Retourne true pour indiquer une réponse asynchrone
      console.log(
        "Content script: Fin du bloc if (action === 'analyze'). Retourne true."
      );
      return true;
    }
    // Si l'action n'est pas 'analyze', on ne fait rien et on ne retourne rien (ou false implicitement)
    // pour indiquer qu'on n'enverra pas de réponse asynchrone.
    console.log(
      "Content script: Action non reconnue ou non gérée. Ne fait rien."
    );
    // return false; // Optionnel, comportement par défaut si on ne retourne pas true
  }
);

// Utilise le type Alert importé
function getAlerts(result: any): Alert[] {
  // L'API renvoie { success: true, jobOffer: { ..., alerts: [...] } }
  return result?.jobOffer?.alerts || [];
}

// Modifie pour accepter jobOffer directement
function showJobScanBadge(alertCount: number, jobOffer: any) {
  const existingBadge = document.querySelector(".jobscan-badge");
  if (existingBadge) existingBadge.remove();

  const badge = document.createElement("div");
  badge.className = "jobscan-badge";

  const color =
    alertCount === 0 ? "#4caf50" : alertCount <= 2 ? "#ff9800" : "#f44336";

  badge.style.cssText = `
    position: fixed;
    top: 10px;
    right: 20px;
    background: ${color};
    color: white;
    font-weight: bold;
    padding: 6px 12px;
    border-radius: 20px;
    font-family: sans-serif;
    font-size: 13px;
    z-index: 9998;
    box-shadow: 0 0 6px rgba(0,0,0,0.15);
    cursor: pointer;
    transition: background-color 0.3s ease; /* Ajout transition douce */
  `;

  badge.textContent = `Score : ${alertCount}`;

  badge.addEventListener("mouseenter", () => {
    showJobScanToast(jobOffer); // Passe jobOffer
  });

  // Supprime l'écouteur mouseleave pour rendre le toast persistant
  /*
  badge.addEventListener("mouseleave", () => {
    if (toastElement) {
      toastElement.remove();
      toastElement = null;
      toastVisible = false;
    }
  });
  */

  document.body.appendChild(badge);
}

// Modifie pour accepter jobOffer directement
function showJobScanToast(jobOffer: any) {
  // Si le toast est déjà visible, ne rien faire (évite clignotement)
  if (toastVisible) return;

  // Supprime l'ancien toast s'il existe (sécurité)
  if (toastElement) toastElement.remove();

  const alerts = jobOffer?.alerts || []; // Utilise jobOffer.alerts
  const alertCount = alerts.length;
  const now = new Date().toLocaleString();

  const toast = document.createElement("div");
  toast.className = "jobscan-toast";
  toast.style.cssText = `
    position: fixed;
    top: 50px; /* Ajuste pour ne pas chevaucher le badge */
    right: 20px;
    background: white;
    border: 1px solid ${alertCount > 0 ? "#f44336" : "#4caf50"};
    color: ${alertCount > 0 ? "#b71c1c" : "#2e7d32"};
    padding: 1em;
    z-index: 9999;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    max-width: 360px;
    font-family: sans-serif;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `;

  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.style.cssText = `
    position: absolute;
    top: 6px;
    right: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #555; /* Couleur plus visible */
  `;
  closeBtn.onclick = () => {
    toast.remove();
    toastElement = null;
    toastVisible = false;
  };

  const content = document.createElement("div");
  // Utilise jobOffer.alerts pour la liste
  content.innerHTML = `
    <strong>JobScan - Analyse</strong><br>
    <small style="color: #555;">📅 ${now}</small><br>
    ${
      alertCount === 0
        ? "✅ Aucun problème détecté dans cette offre."
        : `
        ❗ <b>${alertCount} problème${alertCount > 1 ? "s" : ""} détecté${
            alertCount > 1 ? "s" : ""
          }</b><br>
        <ul style="margin: 0.5em 0 0 1.2em; padding: 0; list-style-type: none;">
          ${alerts
            .map(
              (a: Alert) =>
                `<li style="margin-bottom: 0.3em;">${
                  a.severity === "warning" ? "⚠️" : "ℹ️"
                } ${a.title}</li>`
            )
            .join("")}
        </ul>
      `
    }
    <button id="jobscan-share-dashboard" style="margin-top: 12px; padding: 6px 10px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
      📥 Partager sur mon dashboard
    </button>
    <div id="jobscan-share-feedback" style="margin-top: 8px; font-size: 13px;"></div>
  `;

  toast.appendChild(closeBtn);
  toast.appendChild(content);
  document.body.appendChild(toast);

  toastVisible = true;
  toastElement = toast;

  // Ajout du handler pour le bouton de partage dashboard
  const shareBtn = toast.querySelector("#jobscan-share-dashboard");
  const feedback = toast.querySelector<HTMLDivElement>(
    "#jobscan-share-feedback"
  ); // Use type assertion for better type safety
  if (shareBtn && feedback) {
    // Add null check for feedback
    shareBtn.addEventListener("click", async () => {
      // 1. Extraction prioritaire via JSON-LD (schema.org)
      let title = jobOffer.title;
      let location = jobOffer.location;
      let company = jobOffer.company;
      let contractType = jobOffer.contractType;
      let salary = jobOffer.salary;
      let description = jobOffer.description;
      let url = window.location.href;
      let source = getPlatformFromUrl ? getPlatformFromUrl(url) : "inconnu";
      try {
        const scripts = Array.from(
          document.querySelectorAll('script[type="application/ld+json"]')
        );
        for (const script of scripts) {
          try {
            const json = JSON.parse(script.textContent || "{}");
            if (json["@type"] === "JobPosting") {
              if (!title && json.title) title = json.title;
              if (
                !company &&
                json.hiringOrganization &&
                json.hiringOrganization.name
              )
                company = json.hiringOrganization.name;
              if (
                !location &&
                json.jobLocation &&
                json.jobLocation[0] &&
                json.jobLocation[0].address &&
                json.jobLocation[0].address.addressLocality
              )
                location = json.jobLocation[0].address.addressLocality;
              if (!contractType && json.employmentType)
                contractType = json.employmentType;
              if (!salary && json.baseSalary && json.baseSalary.value) {
                if (
                  json.baseSalary.value.minValue &&
                  json.baseSalary.value.maxValue
                ) {
                  salary = `${json.baseSalary.value.minValue} - ${
                    json.baseSalary.value.maxValue
                  } ${json.baseSalary.currency || ""}`.trim();
                } else if (json.baseSalary.value.value) {
                  salary = `${json.baseSalary.value.value} ${
                    json.baseSalary.currency || ""
                  }`.trim();
                }
              }
              if (!description && json.description) {
                description = json.description;
              }
              break;
            }
          } catch {}
        }
      } catch {}
      // 2. Fallback CSS selectors si JSON-LD absent ou incomplet
      if (!title) {
        const selectors = [
          "h1",
          ".job-title",
          '[data-testid="job-title"]',
          ".top-card-layout__title",
          ".jobsearch-JobInfoHeader-title",
          ".sc-1en4ex3-0",
          "h2.sc-lizKOf.klLhxt",
        ];
        for (const sel of selectors) {
          const el = document.querySelector(sel);
          if (el && el.textContent && el.textContent.trim().length > 3) {
            title = el.textContent.trim();
            break;
          }
        }
        console.log("[JobScan] Titre extrait:", title);
      }
      if (!location) {
        const selectors = [
          ".job-location",
          '[data-testid="job-location"]',
          ".location",
          ".topcard__flavor--bullet",
          ".jobsearch-JobInfoHeader-subtitle > div",
          ".sc-16iz3i7-0",
          "span.sc-kWhykh",
        ];
        for (const sel of selectors) {
          const el = document.querySelector(sel);
          if (el && el.textContent && el.textContent.trim().length > 2) {
            location = el.textContent.trim();
            break;
          }
        }
        console.log("[JobScan] Lieu extrait:", location);
      }
      if (!company) {
        // Fallback pour l'entreprise
        const selectors = [
          ".company",
          '[data-testid="company-name"]',
          ".topcard__org-name-link",
          ".sc-lizKOf.kaLKIS", // Welcome to the Jungle
          ".sc-lizKOf.cVKhTm", // Welcome to the Jungle
        ];
        for (const sel of selectors) {
          const el = document.querySelector(sel);
          if (el && el.textContent && el.textContent.trim().length > 2) {
            company = el.textContent.trim();
            break;
          }
        }
        console.log("[JobScan] Entreprise extraite:", company);
      }
      if (!description) {
        const descSelectors = [
          ".description",
          ".job-description",
          '[data-testid="job-description"]',
          ".listing-description",
          ".sc-1en4ex3-0",
          ".sc-16iz3i7-0",
          ".description__text",
          'section[aria-label*="description"]',
          'section[aria-label*="Description"]',
          'section[aria-label*="mission"]',
          'section[aria-label*="Mission"]',
        ];
        for (const sel of descSelectors) {
          const el = document.querySelector(sel);
          if (el && el.textContent && el.textContent.trim().length > 20) {
            description = el.textContent.trim();
            break;
          }
        }
      }
      // Fallback : si description toujours vide, prend tout le texte de la page
      if (!description || description.length < 20) {
        description = document.body.innerText || "";
      }
      console.log("[JobScan EXT] Description envoyée au backend:", description);
      chrome.storage &&
        chrome.storage.local.get(
          ["userEmail", "token"],
          async (data: { userEmail: any; token: any }) => {
            const email = data.userEmail;
            const token = data.token;
            if (!token) {
              feedback.textContent =
                "Vous devez être connecté à JobScan pour partager.";
              feedback.style.color = "#b91c1c";
              return;
            }
            if (!email) {
              feedback.textContent =
                "Email manquant. Connectez-vous sur JobScan.";
              feedback.style.color = "#b91c1c";
              return;
            }
            feedback.textContent = "Partage en cours...";
            feedback.style.color = "#2563eb";
            try {
              const res = await fetch("http://localhost:3000/offers", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  title: title || "Offre sans titre",
                  location: location || "Lieu inconnu",
                  company: company || "Entreprise inconnue",
                  score:
                    jobOffer.score ||
                    (jobOffer.alerts ? 5 - jobOffer.alerts.length : null),
                  alerts: jobOffer.alerts
                    ? JSON.stringify(jobOffer.alerts)
                    : "[]",
                  email,
                  status: "shared",
                  url,
                  source,
                  contractType: contractType || null,
                  salary: salary || "",
                  description: description || "",
                }),
              });
              if (!res.ok) throw new Error("Erreur lors du partage");
              feedback.textContent = "✅ Offre partagée sur votre dashboard !";
              feedback.style.color = "#16a34a";
            } catch (e) {
              feedback.textContent = "❌ Impossible de partager l'offre.";
              feedback.style.color = "#b91c1c";
            }
          }
        );
    });
  }
}
