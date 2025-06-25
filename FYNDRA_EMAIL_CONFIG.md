# 📧 Configuration EmailJS pour Fyndra

## 🎯 Configuration Spécifique

**Email public :** `contact@fyndra.com`  
**Email de réception :** `henryck.paris@gmail.com` (ou votre Gmail)

## 🚀 Étapes Rapides (10 minutes max)

### 1. Compte EmailJS
1. Allez sur https://dashboard.emailjs.com/
2. Créez un compte avec votre **Gmail**
3. Confirmez votre email

### 2. Service Email
1. **Email Services** → **Add New Service**
2. Sélectionnez **Gmail** (beaucoup plus simple !)
3. Configuration Gmail :
   - Cliquez sur **Gmail**
   - **Connectez-vous** avec votre compte Gmail
   - **Autorisez** EmailJS à envoyer des emails
   - ✅ **C'est tout !** Le service est configuré automatiquement
4. Copiez le **Service ID** (ex: `service_abc123`)

### 3. Template Email
1. **Email Templates** → **Create New Template**
2. **Configuration :**

**Sujet :**
```
[FYNDRA] Nouvelle demande Early Access
```

**Corps de l'email :**
```
Bonjour Henryck,

Une nouvelle demande d'early access a été reçue sur Fyndra :

=== INFORMATIONS CANDIDAT ===
👤 Nom : {{from_name}}
📧 Email : {{from_email}}
🎯 Objectif : {{objective}}
📅 Date : {{timestamp}}

=== MESSAGE ===
{{message}}

=== ACTIONS ===
- Répondre directement à {{from_email}}
- Ajouter à la liste early access
- Envoyer les accès beta

---
Email automatique du site Fyndra.com
```

**Configuration avancée :**
- **To Email :** Votre Gmail (ex: `henryck.paris@gmail.com`)
- **From Name :** `Fyndra Contact`
- **From Email :** `{{from_email}}` (email de l'utilisateur)
- **Reply To :** `{{from_email}}`

3. Sauvegardez et copiez le **Template ID** (ex: `template_xyz789`)

### 4. Clé Publique
1. **Account** → Copiez votre **Public Key** (ex: `abcdef123456`)

### 5. 🔒 Sécurité (Important)
1. **Account** → **Security** → **Allowed Domains**
2. Ajoutez vos domaines autorisés :
   - `localhost:5173` (développement)
   - `fyndra.com` (production)
   - `*.pages.dev` (si Cloudflare)
3. ✅ **Sauvegardez** - Bloque l'usage depuis d'autres sites

### 5. Configuration Projet
Modifiez `.env.local` :

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdef123456
```

### 6. Test Immédiat
```bash
# Redémarrer le serveur
pnpm dev

# Ouvrir http://localhost:5175
# Tester le formulaire Early Access
# Vérifier la réception sur henryck.paris@pm.me
```

## 🎯 Résultat Attendu

### Ce que voit l'utilisateur :
- Formulaire avec "contact@fyndra.com"
- Message de confirmation professionnel
- Adresse de contact publique : contact@fyndra.com

### Ce que vous recevez :
- Email sur votre **Gmail**
- Objet : `[FYNDRA] Nouvelle demande Early Access`
- Toutes les infos du candidat
- Possibilité de répondre directement

## 🔧 Test Console

Dans la console du navigateur :
```javascript
// Vérifier la config
testEmailJS()

// Voir les sauvegardes locales
showLocalSubmissions()
```

## ⚡ Mode Rapide Gmail (3 minutes !)

1. **Compte EmailJS** : 1 minute
2. **Service Gmail** : 30 secondes (connexion automatique)
3. **Template** : 1 minute (copiez-collez le template ci-dessus)
4. **Variables .env.local** : 30 secondes
5. **Test** : 30 secondes

**Total : 3 minutes pour recevoir vos premiers emails ! 🚀**

## 📋 Checklist

- [ ] Compte EmailJS créé
- [ ] Service Gmail connecté (auto-configuration)
- [ ] Template configuré avec le bon format
- [ ] Variables d'environnement remplies
- [ ] Serveur redémarré
- [ ] Test formulaire effectué
- [ ] Email reçu sur votre Gmail

## 🎯 Configuration Gmail (Ultra Simple !)

### Étapes Gmail :
1. **Allez sur EmailJS** → **Add New Service**
2. **Cliquez sur Gmail**
3. **Connectez-vous** avec votre compte Gmail
4. **Autorisez** EmailJS (popup de permissions)
5. ✅ **Service configuré automatiquement !**

### Avantages Gmail :
- ✅ **Configuration en 30 secondes**
- ✅ **Pas de SMTP à configurer**
- ✅ **Pas d'App Password**
- ✅ **Connexion OAuth sécurisée**
- ✅ **Fonctionne immédiatement**

---

**Avec Gmail, tous les formulaires enverront automatiquement vers votre Gmail ! 📧**
