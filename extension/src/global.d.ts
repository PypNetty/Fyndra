// Définitions pour l'API Chrome
declare namespace chrome {
  namespace runtime {
    const onInstalled: { addListener: (callback: any) => void };
    const onMessage: { addListener: (callback: any) => void };
    function sendMessage(message: any, callback?: any): void;
  }
  namespace tabs {
    function query(options: any, callback: any): void;
    function sendMessage(tabId: number, message: any, callback?: any): void;
  }
  namespace storage {
    const local: {
      get(keys: string | string[], callback: any): void;
      set(items: Object, callback?: any): void;
    };
  }
}

// Définitions pour les modules partagés
declare module "@jobscan/shared" {
  export interface Alert {
    id: string;
    title: string;
    description: string;
    severity: string;
    category: string;
    solution?: string;
    textSnippet?: string;
  }
}
