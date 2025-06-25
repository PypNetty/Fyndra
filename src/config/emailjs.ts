// Configuration EmailJS pour Fyndra
// Remplacez ces valeurs par vos vraies clés depuis https://dashboard.emailjs.com/

export const EMAILJS_CONFIG = {
  // Service ID : Allez sur https://dashboard.emailjs.com/admin -> Email Services
  // Créez un service (Gmail, Outlook, etc.) et copiez le Service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // Template ID : Allez sur https://dashboard.emailjs.com/admin -> Email Templates  
  // Créez un template et copiez le Template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  
  // Public Key : Allez sur https://dashboard.emailjs.com/admin/account
  // Copiez votre Public Key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Email de destination
  TO_EMAIL: 'contact@fyndra.com'
};

// Validation de la configuration
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
  );
};

// Template suggéré pour EmailJS :
/*
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
