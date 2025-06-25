# 🚀 Déploiement Cloudflare Pages - EmailJS

## ⚡ Configuration Cloudflare Pages

### Variables d'environnement obligatoires

Dans votre dashboard Cloudflare Pages :

1. **Cloudflare Dashboard** → **Workers & Pages**
2. **Sélectionnez votre projet** Fyndra
3. **Settings** → **Environment variables**
4. **Add variable** (pour chaque variable) :

```bash
Variable name: VITE_EMAILJS_SERVICE_ID
Value: service_jo3i1eo
Environment: Production (et Preview si souhaité)
```

```bash
Variable name: VITE_EMAILJS_TEMPLATE_ID  
Value: template_8lz1z5x
Environment: Production (et Preview si souhaité)
```

```bash
Variable name: VITE_EMAILJS_CONTACT_TEMPLATE_ID
Value: template_contact_abc123
Environment: Production (et Preview si souhaité)
```

```bash
Variable name: VITE_EMAILJS_PUBLIC_KEY
Value: EUK3saDDLkFR0D891
Environment: Production (et Preview si souhaité)
```

**⚠️ Important** : Vous devez créer le template Contact sur EmailJS et remplacer `template_contact_abc123` par le vrai ID.

### 🔄 Redéploiement

Après avoir ajouté les variables :

**Option 1 : Trigger nouveau build**
- **Deployments** → **View details** du dernier déploiement
- **Retry deployment**

**Option 2 : Push nouveau commit**
```bash
git add .
git commit -m "Add EmailJS environment variables"
git push
```

## ✅ Vérification

Une fois redéployé :

1. **Ouvrez votre site** en production
2. **Ouvrez la console** (F12)
3. **Tapez :** `testEmailJS()`
4. **Vérifiez** que les variables sont bien chargées

## 🎯 Variables visibles

Les variables doivent apparaître comme :
```
VITE_EMAILJS_SERVICE_ID: service_jo3i1eo
VITE_EMAILJS_TEMPLATE_ID: template_8lz1z5x
VITE_EMAILJS_CONTACT_TEMPLATE_ID: template_contact_abc123
VITE_EMAILJS_PUBLIC_KEY: EUK3saDDLkFR0D891
```

## 🚨 Troubleshooting

### Variables undefined en production ?
1. **Vérifiez l'orthographe** : `VITE_` est obligatoire
2. **Vérifiez l'environnement** : Production sélectionné
3. **Redéployez** après avoir ajouté les variables
4. **Attendez** 2-3 minutes après le déploiement

### Build qui échoue ?
- Vérifiez les logs de build Cloudflare
- Les variables Vite sont injectées au build time

## 📧 Test final

1. **Allez sur votre site** en production
2. **Testez le formulaire Early Access**
3. **Testez le formulaire Contact** (bouton "Nous contacter")
4. **Vérifiez votre Gmail** pour recevoir les emails
5. **Succès !** 🎉

---

**Une fois configuré, vos emails fonctionneront en production ! 📧**
