import { EMAILJS_CONFIG, isEmailJSConfigured } from '../config/emailjs';

/**
 * Script de test pour vérifier la configuration EmailJS
 * Exécuter dans la console du navigateur : testEmailJS()
 */
export const testEmailJS = async () => {
  console.log('🧪 Test de la configuration EmailJS...');
  
  // 1. Vérifier la configuration
  console.log('📋 Configuration actuelle:');
  console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
  console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
  console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY);
  console.log('To Email:', EMAILJS_CONFIG.TO_EMAIL);
  
  // DEBUG: Variables d'environnement brutes
  console.log('\n🔍 Variables d\'environnement brutes:');
  console.log('NODE_ENV:', import.meta.env.MODE);
  console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  console.log('Toutes les variables VITE_:', Object.keys(import.meta.env).filter(k => k.startsWith('VITE_')));
  
  if (!isEmailJSConfigured()) {
    console.error('❌ EmailJS n\'est pas configuré!');
    console.log('📖 Consultez le guide: EMAILJS_SETUP_GUIDE.md');
    return false;
  }
  
  console.log('✅ Configuration EmailJS valide!');
  
  // 2. Test des variables d'environnement
  console.log('\n🔧 Variables d\'environnement:');
  console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID || 'Non définie');
  console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'Non définie');
  console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Non définie');
  
  // 3. Test de l'envoi d'email (optionnel)
  const shouldSendTest = confirm('Voulez-vous envoyer un email de test ?');
  if (shouldSendTest) {
    try {
      const emailjs = await import('@emailjs/browser');
      
      const testParams = {
        from_name: 'Test Fyndra',
        from_email: 'test@fyndra.me',
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        objective: 'Test de configuration',
        timestamp: new Date().toLocaleString('fr-FR'),
        message: '🧪 Ceci est un email de test pour vérifier la configuration EmailJS de Fyndra.'
      };
      
      console.log('📤 Envoi de l\'email de test...');
      const result = await emailjs.default.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        testParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('✅ Email de test envoyé avec succès!', result);
      return true;
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi de test:', error);
      return false;
    }
  }
  
  return true;
};

/**
 * Afficher les soumissions sauvegardées localement
 */
export const showLocalSubmissions = () => {
  const submissions = JSON.parse(localStorage.getItem('fyndra_submissions') || '[]');
  console.log('💾 Soumissions sauvegardées localement:', submissions.length);
  console.table(submissions);
  return submissions;
};

/**
 * Nettoyer les soumissions locales
 */
export const clearLocalSubmissions = () => {
  localStorage.removeItem('fyndra_submissions');
  console.log('🗑️ Soumissions locales supprimées');
};

// Exposer les fonctions globalement pour la console
if (typeof window !== 'undefined') {
  window.testEmailJS = testEmailJS;
  window.showLocalSubmissions = showLocalSubmissions;
  window.clearLocalSubmissions = clearLocalSubmissions;
}
