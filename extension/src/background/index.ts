// PAS d'import de webextension-polyfill ici

// Définir des types explicites
type MessageRequest = {
  action: string;
  [key: string]: any;
};

chrome.runtime.onInstalled.addListener(() => {
  console.log("JobScan extension installed");
});

chrome.runtime.onMessage.addListener(
  (
    message: MessageRequest,
    sender: chrome.runtime.MessageSender, // Utilise le type chrome ici
    sendResponse: (response?: any) => void
  ) => {
    if (message.action === "getTabInfo") {
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          if (tabs.length > 0 && tabs[0].id && tabs[0].url) {
            sendResponse({ tabId: tabs[0].id, url: tabs[0].url });
          } else {
            sendResponse({ error: "No active tab found" });
          }
        }
      );
      return true;
    }
    // Si aucune action reconnue, ne rien faire (retourne undefined implicitement)
  }
);
