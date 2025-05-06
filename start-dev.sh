#!/bin/bash

# Script de démarrage rapide pour le développement
echo "🚀 Démarrage de l'environnement de développement JobScan"

# Installation des dépendances
echo "📦 Installation des dépendances..."
pnpm install

# Construction des packages partagés
echo "🔨 Construction du package shared..."
pnpm --filter @jobscan/shared build

# Démarrage des services
echo "🌐 Démarrage des services..."
pnpm dev:all
