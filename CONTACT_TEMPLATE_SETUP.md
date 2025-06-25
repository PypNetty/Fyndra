# Guide de Configuration du Template Contact EmailJS

## Étapes pour ajouter le formulaire de contact

Vous avez déjà configuré le template Early Access. Maintenant, ajoutez le template Contact :

### 1. Création du Template Contact

1. **Connectez-vous à [EmailJS Dashboard](https://dashboard.emailjs.com/)**
2. **Allez sur "Email Templates"**
3. **Cliquez sur "Create New Template"**

### 2. Configuration du Template

#### Nom du template :
```
Contact Fyndra
```

#### Sujet de l'email :
```
{{subject}}
```

#### Corps de l'email :
```
Bonjour,

Nouveau message de contact reçu :

👤 Nom : {{from_name}}
📧 Email : {{from_email}}
📋 Sujet : {{subject}}
📅 Date : Maintenant

Message :
{{message}}

---
Message envoyé depuis le formulaire de contact de Fyndra.
Vous pouvez répondre directement à cet email.
```

#### Configuration avancée :
- **To Email** : `contact@fyndra.io` (ou votre vraie adresse)
- **From Name** : `{{from_name}}`
- **From Email** : Votre adresse Gmail configurée
- **Reply To** : `{{from_email}}`

### 3. Copier l'ID du Template

1. **Sauvegardez** le template
2. **Copiez l'ID** généré (ex: `template_contact_abc123`)

### 4. Mise à Jour de la Configuration

Ajoutez la nouvelle variable dans `.env.local` :

```env
# Existing variables...
VITE_EMAILJS_SERVICE_ID=service_jo3i1eo
VITE_EMAILJS_TEMPLATE_ID=template_8lz1z5x
VITE_EMAILJS_PUBLIC_KEY=EUK3saDDLkFR0D891

# Nouvelle variable pour le template Contact
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_contact_abc123
```

### 5. Test du Formulaire

1. **Redémarrez le serveur** :
```bash
pnpm dev
```

2. **Testez le formulaire** :
   - Allez sur la landing page
   - Cliquez sur "Nous contacter" (en bas de page)
   - Remplissez le formulaire
   - Vérifiez que l'email arrive

### 6. Vérification

✅ **Succès** : Message "Message envoyé !" et email reçu  
❌ **Échec** : Redirection vers `mailto:` (template non configuré)

### Variables Attendues dans le Template

Le formulaire envoie ces données :
- `{{from_name}}` : Nom de l'utilisateur
- `{{from_email}}` : Email de l'utilisateur
- `{{subject}}` : Sujet du message
- `{{message}}` : Contenu du message

### Dépannage

Si le formulaire ne fonctionne pas :

1. **Vérifiez l'ID du template** dans `.env.local`
2. **Testez le template** dans EmailJS Dashboard > Test
3. **Vérifiez la console** du navigateur pour les erreurs
4. **Vérifiez les logs** dans EmailJS Dashboard > Logs

## Différence avec Early Access

- **Early Access** : Template simple avec nom, email, objectif
- **Contact** : Template plus flexible avec sujet personnalisable
- **Backup local** : Les deux formulaires sauvegardent en localStorage
- **Fallback** : Redirection mailto en cas d'erreur

---

**Prochaine étape** : Une fois configuré, le formulaire "Nous contacter" enverra les emails directement !
