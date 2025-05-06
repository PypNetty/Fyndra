# JobScan

Analyse les offres d'emploi pour détecter les red flags et protéger les droits des travailleurs.

## Structure du projet

- `backend`: API et logique d'analyse
- `extension`: Extension de navigateur
- `frontend`: Interface web (dashboard)
- `shared`: Types et utilitaires partagés

## Installation

```bash
pnpm install
```

## Développement

```bash
# Démarrer le backend
pnpm --filter backend dev

# Construire l'extension
pnpm --filter extension build

# Démarrer le frontend
pnpm --filter frontend dev
```
