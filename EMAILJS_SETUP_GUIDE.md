# Guide de Configuration EmailJS pour Fyndra

## Étapes de Configuration

### 1. Création du Compte EmailJS

1. Allez sur [h- Fallback vers `mailto:contact@fyndra.com`

Consultez `localStorage.getItem('fyndra_submissions')` pour voir les sauvegardes.s://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Créez un compte gratuit (100 emails/mois inclus)
3. Confirmez votre email

### 2. Configuration du Service Email

1. Dans le dashboard EmailJS, allez sur **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur email (Gmail recommandé) :
   - **Gmail** : Connectez votre compte Gmail `henryck.paris@pm.me` (qui recevra les emails de `contact@fyndra.com`)
   - **Outlook** : Si vous utilisez Outlook
   - **Custom SMTP** : Pour d'autres fournisseurs
4. Notez le **Service ID** généré (ex: `service_abc123`)

### 3. Création du Template Email

1. Allez sur **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez le template :

#### Sujet de l'email :
```
Nouvelle demande Early Access - Fyndra
```

#### Corps de l'email :
```
Bonjour,

Une nouvelle demande d'early access a été reçue :

👤 Nom : {{from_name}}
📧 Email : {{from_email}}
🎯 Objectif : {{objective}}
📅 Date : {{timestamp}}

Message :
{{message}}

---
Email automatique généré par le site Fyndra
```

#### Configuration avancée :
- **To Email** : `contact@fyndra.com`
- **From Name** : `{{from_name}}`
- **Reply To** : `{{from_email}}`

4. Sauvegardez et notez le **Template ID** (ex: `template_xyz789`)

### 4. Récupération de la Public Key

1. Allez sur **Account** dans le menu
2. Copiez votre **Public Key** (ex: `abcdefghij`)

### 5. Configuration dans le Projet

Mettez à jour le fichier `.env.local` :

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghij
```

### 6. Test de l'Intégration

1. Redémarrez le serveur de développement :
```bash
pnpm dev
```

2. Testez le formulaire Early Access sur la landing page
3. Vérifiez que l'email arrive sur `contact@fyndra.me`
4. Vérifiez les logs dans la console du navigateur

## Vérification

### Dans la Console du Navigateur :
- ✅ `Email envoyé avec succès: { status: 200, text: 'OK' }`
- ❌ `Erreur lors de l'envoi via EmailJS: Error message`

### Dans EmailJS Dashboard :
- Allez sur **Usage** pour voir les emails envoyés
- Vérifiez les statistiques d'envoi

## Dépannage

### Erreur "User ID is required"
- Vérifiez que `VITE_EMAILJS_PUBLIC_KEY` est correctement configurée

### Erreur "Template not found"
- Vérifiez que `VITE_EMAILJS_TEMPLATE_ID` correspond à un template existant

### Erreur "Service not found"
- Vérifiez que `VITE_EMAILJS_SERVICE_ID` correspond à un service configuré

### Emails non reçus
- Vérifiez les spams/courriers indésirables de `henryck.paris@pm.me`
- Vérifiez la configuration du service email dans EmailJS
- Vérifiez que `contact@fyndra.com` est correct dans le template

## Limite Gratuite

- **100 emails/mois** gratuits
- Au-delà : 7$/mois pour 1000 emails
- Monitoring disponible dans le dashboard

## Sécurité

- Les clés sont exposées côté client (normal pour EmailJS)
- EmailJS protège contre le spam automatiquement
- Configurez le domain lock dans EmailJS pour plus de sécurité

## Sauvegarde Locale

En cas d'échec EmailJS, les données sont :
1. Sauvegardées dans `localStorage` du navigateur
2. Fallback vers `mailto:contact@fyndra.me`

Consultez `localStorage.getItem('fyndra_submissions')` pour voir les sauvegardes.
