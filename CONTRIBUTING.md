# Guide de Contribution — EpistemIA

Bienvenue ! Ce guide vous aidera à contribuer au projet EpistemIA en proposant des nœuds, des arcs, ou des améliorations.

---

## Table des matières

1. [Code de conduite](#code-de-conduite)
2. [Avant de commencer](#avant-de-commencer)
3. [Proposer un nœud](#proposer-un-nœud)
4. [Proposer une thématique](#proposer-une-thématique)
5. [Workflow Git](#workflow-git)
6. [Conventions](#conventions)
7. [Tests & validation](#tests--validation)
8. [FAQ](#faq)

---

## Code de Conduite

Ce projet adhère à un code de conduite basé sur le respect, l'inclusivité et la bonne foi. Nous accueillons les contributions de toutes les perspectives, origines et expertises liées à l'histoire et aux techniques de l'IA.

**Comportements attendus** :
- Respecter la diversité des points de vue historiques et techniques
- Fournir des sources vérifiables pour les affirmations
- Accepter les critiques constructives
- Favoriser un environnement d'apprentissage collectif

**Comportements inacceptables** :
- Harcèlement, discrimination, langage offensant
- Vandalisme ou destruction délibérée de données
- Violation de droits d'auteur ou intellectuels

---

## Avant de Commencer

### Prerequis

- **Git** : https://git-scm.com/
- **Node.js** (optionnel, pour validation) : https://nodejs.org/
- **Un éditeur de texte** : VS Code, Sublime, etc.
- **Accès GitHub** : fork du dépôt + compte GitHub

### Mise en place locale

```bash
# 1. Cloner votre fork
git clone https://github.com/VOTRE_USERNAME/epistemIA.git
cd epistemIA

# 2. Lancer un serveur local (optionnel, pour tester)
npx serve .
# L'application est accessible à http://localhost:3000

# 3. Installer les dépendances de dev (optionnel)
npm install
```

### Avant chaque contribution

```bash
# Mettre à jour votre fork avec la branche main du dépôt officiel
git fetch upstream
git merge upstream/main
```

---

## Proposer un Nœud

Un **nœud** représente un concept, une percée, une publication, ou un mouvement dans l'histoire de l'IA.

### Étape 1 : Choisir la thématique

Les thématiques existantes sont :
- `01_fondations-cognitives.js` — Origines cognitives & philosophiques (pré-1936)
- `02_fondations-connexionnistes.js` — Connexionnisme & réseaux de neurones (1943+)
- `03_ia-symbolique.js` — IA symbolique & GOFAI (1956+)
- `04_systemes-experts.js` — Systèmes experts & logique formelle (1970+)
- `05_architectures-cognitives.js` — Architectures cognitives unifiées (1990+)
- `06_vectoriel.js` — Représentations vectorielles & embeddings (2000+)
- `07_probabiliste.js` — Apprentissage probabiliste & bayésien (1980+)
- `08_ontologies.js` — Ontologies & graphes de connaissances (2000+)
- `09_memoire-augmentee.js` — Mémoire augmentée (2014+)
- `10_transformers.js` — Modèles contextuels & Transformers (2017+)
- `11_neuro-symbolique.js` — Neuro-symbolique & World Models (2018+)

**Si aucune thématique ne convient** → voir [Proposer une thématique](#proposer-une-thématique).

### Étape 2 : Rédiger le nœud

Ouvrez le fichier de thématique approprié (ex: `resources/10_transformers.js`) et insérez un nouvel objet nœud dans le tableau `nodes` :

```javascript
{
  id: "mon-concept-unique",           // kebab-case, unique dans tout le graphe
  label: "Nom Affiché du Concept",    // Titre public (24 caractères max recommandé)
  type: "Modèle contextuel",          // Clé valide de schema.js > nodeTypes
  period: [2017, 2023],               // Années de développement [début, fin]
  year: 2020,                         // Année principale pour tri/timeline
  periodLabel: "2017-2023",           // Label optionnel (si period non évident)
  authors: ["Alice Dupont", "Bob Durand"],  // Créateurs/découvreurs
  description: "Description détaillée...",  // 2-5 phrases, ~150 mots
  tags: ["tag1", "tag2", "tag3"],     // Mots-clés thématiques (3-5 min)
  problemsSolved: [
    "Problème résolu 1",
    "Problème résolu 2"
  ],                                  // Défis surmontés par ce concept
  problemsRaised: [
    "Question ouverte 1",
    "Limitation identifiée"
  ],                                  // Défis nouveaux ou non résolus
  keyWorks: [                         // Publications clés (2-5 min)
    {
      title: "Titre du papier",
      authors: "Noms des auteurs",
      year: 2020,
      url: "https://arxiv.org/abs/2001.00000"
    }
  ]
}
```

### Étape 3 : Ajouter des arcs

Pour relier votre nœud à d'autres, ajoutez des arcs dans le tableau `edges` :

```javascript
{
  id: "e-source-target",              // Pattern : "e-{from-id}-{to-id}"
  from: "nœud-source",               // ID du nœud source
  to: "mon-concept-unique",          // ID du nœud cible
  type: "Evolution",                 // Type valide : Evolution, Rupture, Integration, etc.
  label: "Description de la relation" // Brève explication (10-20 mots)
}
```

**Types d'arcs disponibles** :
- `Evolution` — Amélioration ou généralisation directe
- `Rupture` — Changement paradigmatique, abandon d'hypothèses antérieures
- `Integration` — Fusion ou synthèse de deux approches
- `Inspiration` — Influence intellectuelle indirecte
- `Convergence` — Deux lignées indépendantes se rejoignent
- `Critique` — Remise en question ou réfutation
- `Application` — Mise en œuvre pratique d'un formalisme

### Checklist avant commit

- [ ] ID unique en kebab-case, pas d'espaces
- [ ] Tous les champs requis présents : id, label, type, year, description, authors, tags
- [ ] Type de nœud valide (dans `schema.js`)
- [ ] Period cohérente : period[0] ≤ period[1]
- [ ] Au moins 2 authors
- [ ] Au moins 3 tags
- [ ] Au moins une keyWork avec URL valide
- [ ] Description sans fautes : relire ou utiliser un outil
- [ ] Tous les arcs pointent vers des nœuds existants
- [ ] Types d'arcs valides
- [ ] La `resources/index.js` n'a pas besoin de modification (le manifeste auto-inclut les thématiques)
- [ ] Validation : `npm run validate` (voir [Tests & validation](#tests--validation))

---

## Proposer une Thématique

Une **thématique** regroupe 5-15 nœuds et leurs arcs sur un sujet cohérent de l'histoire de l'IA.

### Étape 1 : Vérifier la pertinence

Votre thématique répond-elle à :
- ✅ Une période historique claire (ex: 1970-1985)
- ✅ Un ensemble de 5-15 nœuds connexes
- ✅ Des sources académiques publiées
- ✅ Une couverture non redondante avec les thématiques existantes

### Étape 2 : Créer le fichier thématique

Créez `resources/NN_mon-theme.js` où `NN` est le numéro suivant (ex: `12_`).

**Format** :

```javascript
// ============================================================
// resources/NN_mon-theme.js
// Thématique : Titre descriptif
// Époque X : Période (YYYY-YYYY)
// ============================================================

export const TOPIC = {
  meta: {
    title: "Titre Descriptif",
    epoch: 12,                    // Numéro d'époque
    period: [2024, 2026],         // Plage temporelle
    description: "Description courte..."
  },

  nodes: [
    // Insérer vos nœuds ici
  ],

  edges: [
    // Insérer vos arcs ici
  ]
};
```

### Étape 3 : Enregistrer dans le manifeste

Ajoutez une ligne dans `resources/index.js` :

```javascript
import { TOPIC as monTheme } from './NN_mon-theme.js';

export const TOPICS = [
  // ... thématiques existantes
  monTheme,  // ← Votre nouvelle thématique
];
```

### Checklist avant commit

- [ ] Fichier nommé `resources/NN_mon-theme.js` (NN = numéro suivant)
- [ ] Meta contient : title, epoch, period, description
- [ ] 5-15 nœuds minimum
- [ ] Arcs inter-nœuds
- [ ] Importé dans `resources/index.js`
- [ ] Tous les champs requis (voir [Proposer un nœud](#proposer-un-nœud))
- [ ] Validation : `npm run validate`
- [ ] Tested locally : `npx serve .` puis vérifier visuellement

---

## Workflow Git

### Créer une branche

```bash
# Mettre à jour main
git fetch upstream
git checkout main
git merge upstream/main

# Créer une branche pour votre contribution
git checkout -b feature/mon-concept
# ou : git checkout -b fix/correction-typo
```

**Convention de nommage** :
- `feature/descriptif-du-noeud` — Nouveau nœud ou thématique
- `fix/description-du-probleme` — Correction d'erreurs
- `docs/sujet` — Améliorations documentaires

### Commit

```bash
# Ajouter vos changements
git add resources/10_transformers.js

# Committer avec un message descriptif
git commit -m "feat: Ajouter nœud 'attention-transformer'"
# ou : git commit -m "fix: Corriger période aristotle-categories"
```

**Convention de messages** (Conventional Commits) :
- `feat:` — Nouveau nœud, arc, ou thématique
- `fix:` — Correction d'erreurs dans les données
- `docs:` — Améliorations documentaires
- `refactor:` — Restructuration sans changement fonctionnel
- `test:` — Améliorations des tests
- `chore:` — Maintenance (ex: .gitignore, package.json)

### Ouvrir une Pull Request

```bash
# Pousser votre branche
git push origin feature/mon-concept

# Aller sur GitHub et ouvrir une PR
# https://github.com/tristanV/epistemIA/pulls
```

**Template PR** :

```markdown
## 📝 Description

Ajouter le nœud "Attention Is All You Need" à la thématique Transformers.

## 🎯 Type de contribution

- [x] Nouveau nœud
- [ ] Nouvelle thématique
- [ ] Correction de données
- [ ] Documentation
- [ ] Autre (préciser)

## 📚 Sources

- Vaswani et al. (2017) : https://arxiv.org/abs/1706.03762

## ✅ Checklist

- [x] ID unique et kebab-case
- [x] Tous les champs obligatoires présents
- [x] `npm run validate` réussit
- [x] Liens et dates vérifiés
- [x] Pas de conflits avec main

## 📸 Aperçu (optionnel)

Description visuelle ou diagramme de la relation avec d'autres nœuds.
```

---

## Conventions

### Conventions de Nommage

| Élément | Convention | Exemple |
|---------|-----------|---------|
| ID de nœud | kebab-case, unique | `attention-transformer` |
| ID d'arc | `e-{from}-{to}` | `e-attention-bahdanau-transformer` |
| Fichier thématique | `NN_nom-theme.js` | `12_mon-theme.js` |
| Branches Git | `type/descriptif` | `feature/gpt-family` |

### Conventions de Style

**Descriptions** :
- Débuter par un verbe ou un concept (ex: "Architecture Transformer qui…")
- Longueur cible : 2-5 phrases, ~150 mots
- Inclure des formules si pertinent (ex: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V)
- Références académiques sans lien : placées dans keyWorks

**Tags** :
- Minuscules avec tirets
- Thématiques : "connexionnisme", "transformers", "neuro-symbolique"
- Techniques : "rnn", "attention", "embeddings"
- Domaines : "nlp", "vision", "rl"

**Authors & References** :
- Prénom Nom (ex: "Yoshua Bengio", pas "Bengio, Y.")
- URLs : DOI ou arXiv de préférence
- Années : format YYYY (ex: 1954, pas "1950s")

### Qualité des Données

**Exigences minimales** :
- ✅ Source vérifiable pour chaque assertion historique
- ✅ Dates et périodes cohérentes
- ✅ Liens vers publications académiques
- ✅ Pas de biais ou POV unique

**Bonnes pratiques** :
- Citer plusieurs perspectives si débat historique
- Inclure les critiques ou limitations connues (problemsRaised)
- Documenter les prédécesseurs (via arcs)
- Mentionner les applications pratiques (Application arcs)

---

## Tests & Validation

### Valider localement

```bash
# Installer les dépendances (une fois)
npm install

# Lancer la validation
npm run validate

# Output attendu :
# ✅ 74 nœuds validés
# ✅ 95 arcs validés
# ✅ Pas de doublons
# ✅ Tous les types valides
```

### Tester visuellement

```bash
# Lancer un serveur local
npx serve .

# Ouvrir http://localhost:3000
# Vérifier que le nœud apparaît
# Tester les filtres et la recherche
```

### Validation par GitHub Actions

À chaque PR, GitHub Actions lance automatiquement `npm run validate`. Si la validation échoue, la PR ne peut pas être merged.

**Pour déboguer localement** :

```bash
# Simuler la CI localement
npm run validate -- --verbose
```

---

## FAQ

### Q1. Combien de nœuds dois-je ajouter ?

**A** : Une thématique complète = 5-15 nœuds. Une PR peut en contenir 1-3 sans surcharger la revue.

### Q2. Dois-je citer des sources pour chaque nœud ?

**A** : Oui, chaque nœud doit avoir au minimum un auteur et une keyWork. Les assertions historiques doivent être traçables.

### Q3. Comment ajouter une image ou un diagramme ?

**A** : Actuellement, EpistemIA est un graphe textuel. Les images peuvent être ajoutées dans la description (via liens) ou en Phase 4 (visualisation enrichie).

### Q4. Puis-je proposer une thématique sur l'IA générative après 2023 ?

**A** : Oui, mais il faudrait créer `12_ia-generative.js` avec une période [2023, 2026]. Consulter les mainteneurs avant.

### Q5. Que faire si ma PR est rejetée ?

**A** : Les commentaires de revue expliquent le motif. Vous pouvez :
- Modifier et repousser sur la même branche (PR auto-mise à jour)
- Ouvrir un GitHub Issue pour discuter
- Contacter les mainteneurs

### Q6. Comment signaler une erreur dans un nœud existant ?

**A** : Ouvrir une PR avec le commit `fix: Corriger [description]`, ou ouvrir une GitHub Issue.

### Q7. Puis-je utiliser une autre langue que le français ?

**A** : Actuellement, le projet est en français. Les contributions en anglais peuvent être acceptées pour les descriptions techniques complexes (avec traduction demandée).

### Q8. Comment devenir mainteneur ?

**A** : Après 3-5 contributions de qualité, contacter les mainteneurs via Issue ou email.

---

## Support & Questions

- **GitHub Issues** : https://github.com/tristanV/epistemIA/issues
- **Discussions** : https://github.com/tristanV/epistemIA/discussions
- **Email** : tristan.vanrullen@laplateforme.io

---

## Remerciements

Merci de contribuer à EpistemIA ! Votre travail enrichit la compréhension collective de l'histoire de l'IA.

**Happy contributing! 🚀**

---

*Dernière mise à jour : 25 mai 2026*  
*Mainteneur : Tristan Vanrullen*
