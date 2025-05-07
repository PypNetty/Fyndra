import { Alert } from '@fyndra/shared';
import './styles.scss';
// PAS d'import de webextension-polyfill ici

// Éléments DOM
const loader = document.getElementById('loader');
const noJobPage = document.getElementById('no-job-page');
const jobDetected = document.getElementById('job-detected');
const analysisResults = document.getElementById('analysis-results');
const alertsContainer = document.getElementById('alerts-container');
const analyzeBtn = document.getElementById('analyze-btn');
const errorMessage = document.getElementById('error-message');

// Ajout de la gestion du formulaire de connexion dans la popup
const loginSection = document.getElementById('login-section');
const loginForm = document.getElementById('login-form') as HTMLFormElement | null;
const loginEmail = document.getElementById('login-email') as HTMLInputElement | null;
const loginPassword = document.getElementById('login-password') as HTMLInputElement | null;
const loginStatus = document.getElementById('login-status');

function showLoginSection(show: boolean) {
  if (loginSection) loginSection.style.display = show ? 'block' : 'none';
}

function setLoginStatus(msg: string, color = '#b91c1c') {
  if (loginStatus) {
    loginStatus.textContent = msg;
    loginStatus.style.color = color;
  }
}

chrome.storage &&
  chrome.storage.local.get(['token', 'userEmail'], (data: { token: any; userEmail: any }) => {
    if (data.token && data.userEmail) {
      showLoginSection(false);
      setLoginStatus('Connecté !', '#16a34a');
    } else {
      showLoginSection(true);
    }
  });

loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  setLoginStatus('');
  const email = loginEmail?.value;
  const password = loginPassword?.value;
  if (!email || !password) {
    setLoginStatus('Email et mot de passe requis');
    return;
  }
  setLoginStatus('Connexion en cours...', '#2563eb');
  try {
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Identifiants invalides');
    const data = await res.json();
    chrome.storage.local.set({ token: data.token, userEmail: email }, () => {
      setLoginStatus('Connecté !', '#16a34a');
      showLoginSection(false);
    });
  } catch (err: any) {
    setLoginStatus(err.message || 'Erreur lors de la connexion');
  }
});

// État initial
let currentTabId: number | null = null;
let currentUrl: string | null = null;

// Vérifier si l'onglet actuel est une offre d'emploi
async function checkCurrentTab() {
  try {
    console.log('Popup: Envoi du message getTabInfo');
    chrome.runtime.sendMessage(
      { action: 'getTabInfo' },
      (response: { error?: string; tabId?: number; url?: string }) => {
        console.log('Popup: Réponse reçue du background', response);
        if (chrome.runtime.lastError) {
          showError(`Erreur: ${chrome.runtime.lastError.message}`);
          return;
        }
        if (response.error || !response.tabId || !response.url) {
          showError(response.error || "Impossible de récupérer l'onglet actif.");
          return;
        }

        currentTabId = response.tabId;
        currentUrl = response.url;

        const isJobPage = isJobOfferUrl(currentUrl);

        if (isJobPage) {
          showElement(jobDetected);
          hideElement(noJobPage);
        } else {
          showElement(noJobPage);
          hideElement(jobDetected);
        }

        checkForExistingAnalysis();
      }
    );
  } catch (error) {
    showError('Erreur de communication avec le background script');
  }
}

// Vérifier s'il existe déjà une analyse pour cette page
function checkForExistingAnalysis() {
  chrome.storage.local.get(
    'currentAnalysis',
    (data: { currentAnalysis?: { url: string | null; alerts?: Alert[] } }) => {
      if (chrome.runtime.lastError) {
        console.error(`Erreur storage.local.get: ${chrome.runtime.lastError.message}`);
        return;
      }
      if (data.currentAnalysis && data.currentAnalysis.url === currentUrl) {
        displayAnalysisResults(data.currentAnalysis);
      }
    }
  );
}

// Lancer l'analyse de l'offre d'emploi
function analyzeJobOffer() {
  showElement(loader);
  hideElement(jobDetected);
  hideElement(analysisResults);
  hideElement(errorMessage);

  if (!currentTabId) {
    showError("Impossible de trouver l'onglet actif.");
    return;
  }

  console.log('Popup: Envoi du message analyze à', currentTabId);
  chrome.tabs.sendMessage(
    currentTabId,
    { action: 'analyze' },
    (response: { success?: boolean }) => {
      console.log('Popup: Réponse reçue du content script', response);
      hideElement(loader);

      if (chrome.runtime.lastError) {
        showError(`Erreur: ${chrome.runtime.lastError.message}`);
        return;
      }

      if (response && response.success) {
        setTimeout(checkForExistingAnalysis, 1000);
      } else {
        showError("Erreur lors de l'analyse");
      }
    }
  );
}

// Afficher les résultats de l'analyse
function displayAnalysisResults(jobOffer: {
  alerts?: Alert[];
  title?: string;
  location?: string;
  company?: string;
  score?: number;
}) {
  if (!jobOffer || !jobOffer.alerts) {
    showError("Résultats d'analyse non disponibles");
    return;
  }

  if (alertsContainer) alertsContainer.innerHTML = '';

  jobOffer.alerts.forEach((alert: Alert) => {
    const alertElement = createAlertElement(alert);
    alertsContainer?.appendChild(alertElement);
  });

  if (jobOffer.alerts.length === 0) {
    const noIssuesElement = document.createElement('div');
    noIssuesElement.className = 'no-issues';
    noIssuesElement.textContent = 'Aucun problème détecté dans cette offre.';
    alertsContainer?.appendChild(noIssuesElement);
  }

  // Ajout du bouton Partager sur mon dashboard
  const shareBtn = document.createElement('button');
  shareBtn.textContent = 'Partager sur mon dashboard';
  shareBtn.className = 'button';
  shareBtn.style.marginTop = '16px';
  shareBtn.onclick = async () => {
    chrome.storage.local.get(
      ['userEmail', 'token'],
      async (data: { userEmail?: string; token?: string }) => {
        const email = data.userEmail;
        const token = data.token;
        if (!token) {
          alert('Vous devez être connecté à Fyndra pour partager une offre sur votre dashboard.');
          return;
        }
        if (!email) {
          alert('Email manquant. Connectez-vous sur Fyndra.');
          return;
        }
        try {
          const res = await fetch('http://localhost:3000/offers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              title: jobOffer.title || 'Offre sans titre',
              location: jobOffer.location || 'Lieu inconnu',
              company: jobOffer.company || 'Entreprise inconnue',
              score: jobOffer.score || (jobOffer.alerts ? 5 - jobOffer.alerts.length : null),
              alerts: jobOffer.alerts ? JSON.stringify(jobOffer.alerts) : '[]',
              email,
              status: 'shared',
            }),
          });
          if (!res.ok) throw new Error('Erreur lors du partage');
          alert('Offre partagée sur votre dashboard !');
        } catch (e) {
          alert("Impossible de partager l'offre : " + (e as Error).message);
        }
      }
    );
  };
  alertsContainer?.appendChild(shareBtn);

  hideElement(jobDetected);
  showElement(analysisResults);
}

// Créer un élément HTML pour une alerte
function createAlertElement(alert: Alert): HTMLElement {
  const element = document.createElement('div');
  element.className = `alert alert-${alert.severity}`;

  const title = document.createElement('h3');
  title.textContent = alert.title;

  const description = document.createElement('p');
  description.textContent = alert.description;

  element.appendChild(title);
  element.appendChild(description);

  if (alert.solution) {
    const solution = document.createElement('p');
    solution.className = 'solution';
    solution.textContent = `💡 ${alert.solution}`;
    element.appendChild(solution);
  }

  return element;
}

// Vérifier si l'URL correspond à une offre d'emploi
function isJobOfferUrl(url: string | null): boolean {
  if (!url) return false;
  return (
    url.includes('linkedin.com/jobs/') ||
    url.includes('indeed.com/viewjob') ||
    (url.includes('welcometothejungle.com') && url.includes('/jobs/'))
  );
}

// Helpers pour afficher/masquer des éléments
function showElement(element: HTMLElement | null) {
  if (element) element.classList.remove('hidden');
}

function hideElement(element: HTMLElement | null) {
  if (element) element.classList.add('hidden');
}

function showError(message: string) {
  if (errorMessage) {
    errorMessage.textContent = message;
    showElement(errorMessage);
  }
}

// Event listeners
analyzeBtn?.addEventListener('click', analyzeJobOffer);
document.addEventListener('DOMContentLoaded', checkCurrentTab);
