// Configuration EmailJS pour Fyndra
// Remplacez ces valeurs par vos vraies clés depuis https://dashboard.emailjs.com/

export const EMAILJS_CONFIG = {
  // Service ID : Allez sur https://dashboard.emailjs.com/admin -> Email Services
  // Créez un service (Gmail, Outlook, etc.) et copiez le Service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",

  // Template ID Early Access : Allez sur https://dashboard.emailjs.com/admin -> Email Templates
  // Créez un template pour les demandes Early Access et copiez le Template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",

  // Template ID Contact : Créez un second template pour les messages de contact
  CONTACT_TEMPLATE_ID:
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID ||
    "YOUR_CONTACT_TEMPLATE_ID",

  // Public Key : Allez sur https://dashboard.emailjs.com/admin/account
  // Copiez votre Public Key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",

  // Email de destination
  TO_EMAIL: "contact@fyndra.io",
};

// Validation de la configuration
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== "YOUR_SERVICE_ID" &&
    EMAILJS_CONFIG.TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
    EMAILJS_CONFIG.CONTACT_TEMPLATE_ID !== "YOUR_CONTACT_TEMPLATE_ID" &&
    EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY"
  );
};

// Validation pour Early Access seulement
export const isEarlyAccessConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== "YOUR_SERVICE_ID" &&
    EMAILJS_CONFIG.TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
    EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY"
  );
};

// Configuration simplifiée pour l'usage dans les composants
export const emailjsConfig = {
  serviceId: EMAILJS_CONFIG.SERVICE_ID,
  templateId: EMAILJS_CONFIG.TEMPLATE_ID,
  contactTemplateId: EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
  publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
  toEmail: EMAILJS_CONFIG.TO_EMAIL,
};

// Templates suggérés pour EmailJS :

/* TEMPLATE 1 - Early Access (ID: VITE_EMAILJS_TEMPLATE_ID)
Sujet: Nouvelle demande Early Access - Fyndra

Bonjour,

Une nouvelle demande d'early access a été reçue :

👤 Nom : {{from_name}}
📧 Email : {{from_email}}
🎯 Objectif : {{objective}}
📅 Date : {{timestamp}}

Message automatique généré par le site Fyndra.

---
{{message}}
*/

/* TEMPLATE 2 - Contact (ID: VITE_EMAILJS_CONTACT_TEMPLATE_ID)
Sujet: {{subject}}

Bonjour,

Nouveau message de contact reçu :

👤 Nom : {{from_name}}
📧 Email : {{from_email}}
📋 Sujet : {{subject}}
📅 Date : {{timestamp}}

Message :
{{message}}

---
Message envoyé depuis le formulaire de contact de Fyndra.
*/
