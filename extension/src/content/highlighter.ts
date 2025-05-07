import type { Alert } from '@fyndra/shared';

// Si le package partagé change de nom, remplacer aussi ici.

export function highlightIssues(document: Document, alerts: Alert[]): void {
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 300px;
    max-height: 80vh;
    overflow-y: auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    padding: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;

  const title = document.createElement('h2');
  title.textContent = 'Fyndra - Analyse';
  title.style.cssText = `
    margin: 0 0 16px 0;
    font-size: 18px;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.style.cssText = `
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #666;
  `;
  closeButton.onclick = () => {
    document.body.removeChild(container);
  };

  title.appendChild(closeButton);
  container.appendChild(title);

  if (alerts.length === 0) {
    const noIssue = document.createElement('p');
    noIssue.textContent = 'Aucun problème détecté dans cette offre.';
    noIssue.style.color = '#4CAF50';
    container.appendChild(noIssue);
  } else {
    alerts.forEach((alert) => {
      const alertDiv = document.createElement('div');
      alertDiv.style.marginBottom = '12px';
      alertDiv.innerHTML = `<strong>${alert.title}</strong><br>${alert.description}`;
      container.appendChild(alertDiv);
    });
  }

  document.body.appendChild(container);
}
