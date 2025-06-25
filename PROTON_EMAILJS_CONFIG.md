# 🔐 Configuration Proton Mail + EmailJS - Guide Détaillé

## 🎯 Pourquoi Proton Mail ?

Excellente idée ! Proton Mail offre :
- ✅ Sécurité renforcée (chiffrement end-to-end)
- ✅ Confidentialité des données
- ✅ Compatible avec EmailJS via SMTP
- ✅ Professionnel pour contact@fyndra.com

## 🚀 Configuration Étape par Étape

### 1. Prérequis Proton Mail

#### Option A : Compte Gratuit
- Limite : 150 messages/jour
- Suffisant pour début d'activité
- SMTP disponible

#### Option B : Compte Payant (Recommandé)
- Limite plus élevée
- Support prioritaire
- Fonctionnalités avancées

### 2. Activation SMTP dans Proton

1. **Connectez-vous à Proton Mail**
2. **Settings** → **All Settings**
3. **Security** → **Authentication**
4. **Activer SMTP/IMAP** si pas déjà fait

### 3. Générer un App Password (Sécurisé)

1. **Settings** → **Security** → **App passwords**
2. **Create app password**
3. **Name :** `EmailJS Fyndra`
4. **Copiez le mot de passe généré** (ex: `abc123def456`)
5. ⚠️ **Important :** Sauvegardez-le, il ne s'affichera qu'une fois !

### 4. Configuration EmailJS

#### Service SMTP
```
Service Type: Custom SMTP
SMTP Server: mail.protonmail.ch
Port: 587
Security: STARTTLS
Username: henryck.paris@pm.me
Password: [App Password généré]
```

#### Template Variables
```javascript
// Ces variables seront automatiquement remplies
{{from_name}}     // Nom du candidat
{{from_email}}    // Email du candidat  
{{objective}}     // Objectif sélectionné
{{timestamp}}     // Date/heure de soumission
{{message}}       // Message généré automatiquement
```

## 🧪 Test de Configuration

### Test Manuel SMTP
Vous pouvez tester votre configuration SMTP avec :

```bash
# Test avec telnet (optionnel)
telnet mail.protonmail.ch 587
```

### Test EmailJS
Une fois configuré dans EmailJS :

```javascript
// Dans la console du navigateur
testEmailJS()
```

## 🔒 Sécurité & Bonnes Pratiques

### Protection des Credentials
- ✅ Utilisez un App Password (pas le mot de passe principal)
- ✅ Variables d'environnement (.env.local)
- ✅ App Password dédié à EmailJS uniquement
- ✅ Possibilité de révoquer si nécessaire

### Monitoring
- 📊 Dashboard EmailJS pour voir les envois
- 📧 Proton Mail pour recevoir les emails
- 💾 localStorage pour backup local

## 🚨 Dépannage Proton Mail

### Erreur "Authentication Failed"
1. Vérifiez l'App Password
2. Confirmez que SMTP est activé
3. Testez avec le mot de passe principal (temporairement)

### Emails non reçus
1. Vérifiez le dossier Spam dans Proton
2. Confirmez l'adresse `henryck.paris@pm.me`
3. Testez avec un autre email

### Limite de taux
- Proton gratuit : 150 emails/jour
- Si dépassé, attendre 24h ou upgrader

## 📋 Checklist Proton

- [ ] Compte Proton Mail fonctionnel
- [ ] SMTP activé dans les paramètres
- [ ] App Password généré et sauvegardé
- [ ] Service EmailJS configuré avec SMTP Proton
- [ ] Template EmailJS créé
- [ ] Variables .env.local remplies
- [ ] Test réussi avec réception email

## 🎯 Configuration Finale

Une fois tout configuré :

```env
# .env.local
VITE_EMAILJS_SERVICE_ID=service_proton123
VITE_EMAILJS_TEMPLATE_ID=template_fyndra456  
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

**Résultat :** Les formulaires Fyndra enverront automatiquement vers `henryck.paris@pm.me` via Proton Mail sécurisé ! 🔐📧
