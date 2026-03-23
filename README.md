# NIRD — Le Numérique Inclusif, Responsable et Durable

[![NIRD](https://img.shields.io/badge/NIRD-Num%C3%A9rique%20Responsable-%23ba45a5?style=for-the-badge)](https://nird.fr)
[![Licence](https://img.shields.io/badge/Licence-MIT-%2310b981?style=for-the-badge)](./LICENSE)

> **NIRD** est une initiative pédagogique et citoyenne qui accompagne les établissements scolaires vers une **transformation responsable de leurs usages numériques** — sans renoncer à la technologie, mais en l’utilisant **mieux, plus longtemps, plus justement**.

🚀 Conçu dans le cadre de la **Nuit de l’Info 2025** — Sujet : *« Le Village Numérique Résistant »*.
<img width="500" height="2500" alt="image" src="https://github.com/user-attachments/assets/d7c6529a-270c-4d37-8a0c-77c55077af54" />

---

## 🎯 Objectif

Transformer l’usage du numérique dans les établissements scolaires en s’appuyant sur trois piliers :

- **Inclusif** : Accès équitable, formation des enseignants, accompagnement des familles  
- **Responsable** : Sensibilisation à l’empreinte carbone, sobriété numérique, éthique des données  
- **Durable** : Réparation, reconditionnement, logiciels libres (100 % Open Source)

---

## 🌐 Pages du site

| Page | Description |
|------|-------------|
| **Accueil** | Présentation globale, chiffres clés, carte des établissements pilotes |
| **Apprendre** | Ressources pédagogiques, ateliers clés en main (empreinte carbone, réparation, Linux) |
| **Outils** | Outils pratiques : calculateur d’empreinte, guide d’achat responsable, simulateur |
| **Démarche** | Méthodologie NIRD : étapes, certification « Établissement Numérique Responsable » |
| **Linux** | Présentation de **Linux NIRD** : distribution éducative légère, sécurisée, libre |
| **À propos** | Qui sommes-nous ? Partenaires, valeurs, licence libre |
| **Sport & Posture 🧘** *(défi)* | Mini-jeu interactif pour sensibiliser aux bonnes postures et aux pauses actives |
| **Frustrating Input 🎮** *(défi)* | Défi ludique : taper une phrase avec un clavier « défectueux » — pour comprendre l’accessibilité |

---

## 🏗️ Sections de la page d’accueil

1. **❓ Pourquoi le numérique responsable ?**  
   > *« Parce que chaque clic a un impact »*  
   - Énergie invisible (email = 50g CO₂)  
   - Déchets électroniques (70 kg/s dans le monde)  
   - Ressources rares (+60 métaux dans un smartphone)

2. **🎓 Écoles & Établissements**  
   - 15+ ateliers pédagogiques  
   - Formation certifiante (500+ enseignants)  
   - Labellisation « Établissement Numérique Responsable »

3. **👪 Parents**  
   - Guide complet (PDF gratuit)  
   - Règles écrans, sécurité, achat responsable  
   - Contrat familial numérique

4. **📍 La carte des pilotes**  
   - 18 établissements engagés  
   - 12 régions, 3 types (école, collège, lycée)  
   - Carte interactive avec Leaflet (100 % fonctionnelle)

5. **♻️ Reconditionnement**  
   - Économie de 80 % d’impact carbone  
   - Circuit : Collecte → Réparation (Linux NIRD) → Redistribution

6. **🏛️ Collectivités**  
   - Charte d’engagement  
   - Audit gratuit & labellisation « Territoire Numérique Responsable »

---

## 🎮 Défis cachés & Easter Eggs

### 🐍 **Snake NIRD** *(popup secret)*  
Jeu rétro intégré discrètement dans la page d’accueil.
→ Déclenchement : touche N
→ Objectif pédagogique : illustrer l’idée que « chaque action compte » (10 pts = 1 email évité).
→ Techno : React, gestion clavier, collision, état dynamique — entièrement en CSS/Tailwind.
→ Fin de partie : message motivant + bouton « Rejouer » toujours visible.


### 🧘 **Sport & Posture**  
 Lutter contre la sédentarité numérique par des pauses actives personnalisées.

🔹 Niveaux de réalisation :
Profilage — QCM pour évaluer niveau, douleurs, objectifs.
Personnalisation — Instructions textuelles adaptées (ex: étirements dos/cou).
Visualisation — Schémas ou GIFs pour guider la posture.
Bonus — Sélection de produits Decathlon pertinents (ex: tapis, élastiques).

### 🖥️ **Frustrating Input**  
Objectif : Expérimenter les difficultés de saisie numérique pour sensibiliser à l’accessibilité et à la conception inclusive.

🔹 Fonctionnalités :
✨ Chiffres flottants qui fuient le curseur
🎯 Zone de capture centrale (clic délicat requis)
⏳ Les chiffres capturés disparaissent aléatoirement
📅 Saisie d’une date valide (JJ/MM/AAAA) → validation finale
🏆 Écran de réussite avec nombre de tentatives

---

## 🛠️ Technologies utilisées

- **Frontend** : React 18, Vite, Tailwind CSS  
- **Routing** : React Router v6  
- **Cartographie** : `react-leaflet` + OpenStreetMap  
- **Icônes** : Lucide React  
- **Déploiement** : Vercel (avec `vercel.json` pour le routing SPA)  
- **Licence** : MIT — 100 % code libre, réutilisable

---

## 📦 Installation locale

```bash
git clone https://github.com/votre-utilisateur/nird-site.git
cd nird-site
npm install
npm run dev
