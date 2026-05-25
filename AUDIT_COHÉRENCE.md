# Audit de Cohérence — EpistemIA v2.1

**Date** : 25 mai 2026  
**Rapport** : Évaluation de l'alignement du projet avec ses spécifications (README.md + ROADMAP.md)

---

## 📊 Résumé Exécutif

Le projet **epistemIA** est **largement bien structuré et aligné** avec sa feuille de route. Les phases 0, 1 et 2 sont complètes selon le planning. Cependant, plusieurs **lacunes documentaires et techniques** doivent être adressées pour assurer la maintenabilité, la contribution communautaire et la validation des données.

| Statut | Phase | Complétude |
|--------|-------|-----------|
| ✅ **Complète** | Phase 0 — Refactoring monolithique | 100 % |
| ✅ **Complète** | Phase 1 — Identité & documentation | 95 % |
| ✅ **Complète** | Phase 2 — Architecture multi-fichiers | 100 % |
| 🔧 **À venir** | Phase 3 — Qualité & validation | 0 % |
| 🔧 **À venir** | Phase 4 — Visualisation enrichie | 0 % |
| 🔧 **À venir** | Phase 5 — UX avancée | 0 % |
| 🔧 **À venir** | Phase 6 — Contribution communautaire | 5 % |

---

## ✅ Observations Positives

### 1. **Architecture modulaire exemplaire** (Phase 2)
- ✅ Découpage thématique clair : 11 fichiers de ressources + schéma centralisé
- ✅ Manifeste `resources/index.js` bien conçu pour l'extensibilité
- ✅ Bootstrap ES module propre, sans bundler, déploiement 100% statique
- ✅ Suppression complète du fichier monolithique `epistemia_data.js` du pipeline de chargement
- ✅ Respect strict du schéma de données dans tous les fichiers

### 2. **Documentation solide** (Phase 1)
- ✅ README.md complet et détaillé (fonctionnalités, architecture, contribution)
- ✅ ROADMAP.md progressive et bien organisée
- ✅ Format de nœud/arc clairement documenté dans README
- ✅ Logo SVG créé pour l'identité visuelle
- ✅ Métadonnées Open Graph + description présentes

### 3. **Qualité des données**
- ✅ Nœuds richement annotés : `authors`, `tags`, `keyPapers`, `problemsSolved`, `problemsRaised`
- ✅ Arcs typés et labellisés (`Evolution`, `Rupture`, `Intégration`, etc.)
- ✅ Chronologie cohérente : périodes et années bien documentées
- ✅ Cohérence entre thématiques : les arcs cross-topics sont correctement liés

### 4. **Code JavaScript robuste**
- ✅ `app.js` contient une logique D3.js bien structurée
- ✅ Simulation de forces fonctionnelle
- ✅ Panneau de détail riche avec filtres
- ✅ Mode sombre/clair implémenté
- ✅ Style.css bien organisé avec variables CSS

---

## ⚠️ Observations Critiques & Lacunes

### **Catégorie 1 : Documentation Manquante (Phase 1, incomplète)**

#### 1.1 — `CONTRIBUTING.md` absent
**Impact** : Les contributeurs externes ne savent pas comment proposer une thématique, un nœud ou une correction.

**Spécification (ROADMAP.md, Phase 6)** :
> `CONTRIBUTING.md` : guide complet (format des données, workflow Git, conventions)

**État actuel** : ❌ **ABSENT**

**Propositions** :
- Créer `CONTRIBUTING.md` avec :
  - Template pour ajouter une thématique
  - Checklist de validation (période, authors, tags, keyPapers)
  - Workflow de contribution (fork → branch → PR)
  - Conventions de naming (kebab-case pour IDs, noms en français)
  - Lignes directrices pour la description (longueur, clarté, références)

---

#### 1.2 — `package.json` absent
**Impact** : Pas d'interface standard npm pour les outils, scripts de validation, ou dépendances.

**État actuel** : ❌ **ABSENT**

**Propositions** :
```json
{
  "name": "epistemia",
  "version": "2.1.0",
  "description": "Graphe épistémologique interactif de l'histoire de l'IA",
  "main": "resources/index.js",
  "scripts": {
    "dev": "npx serve .",
    "validate": "node tools/validate.js",
    "test": "npm run validate"
  },
  "keywords": ["IA", "histoire", "graphe", "epistemologie"],
  "author": "Tristan Vanrullen",
  "license": "MIT",
  "devDependencies": {}
}
```

---

### **Catégorie 2 : Outils de Validation Manquants (Phase 3, non commencée)**

#### 2.1 — `tools/validate.js` absent
**Impact** : Aucune validation automatique des données lors des contributions. Risque d'incohérences.

**Spécification (ROADMAP.md, Phase 3.A)** :
> Créer `tools/validate.js` : script Node.js vérifiant la cohérence du graphe
> - Tous les `from`/`to` des arcs référencent des nœuds existants
> - Tous les types (`type`) sont des clés valides de `schema.js`
> - Pas de doublon d'identifiant

**État actuel** : ❌ **ABSENT**

**Propositions** :
- Implémenter un validateur Node.js vérifiant :
  - ✅ Tous les `from`/`to` existent
  - ✅ Types valides (nodeType, edgeType)
  - ✅ Pas de doublons d'ID
  - ✅ Champs obligatoires présents (id, label, type, year, description)
  - ✅ Périodes cohérentes (period[0] ≤ period[1])
  - ✅ Au moins un auteur
  - ✅ Au moins un tag
  - ✅ URLs valides dans keyPapers
- Intégrer dans npm scripts : `npm run validate`
- Ajouter comme pré-commit hook ou CI GitHub Actions

---

#### 2.2 — Pas de CI/CD (GitHub Actions)
**Impact** : Les PRs ne sont pas validées automatiquement avant merge.

**Spécification (ROADMAP.md, Phase 6)** :
> CI GitHub Actions : lancer `tools/validate.js` sur chaque Pull Request

**État actuel** : ❌ **ABSENT**

**Propositions** :
- Créer `.github/workflows/validate.yml` pour :
  - Exécuter `npm run validate` sur chaque PR
  - Reporter les erreurs en commentaire PR
  - Bloquer le merge si validation échoue

---

### **Catégorie 3 : Cohérence de la Documentation**

#### 3.1 — Référence à `foundations/cognitive.js` (prototype) obsolète
**État actuel** : Le fichier `resources/foundations/cognitive.js` existe mais n'est plus utilisé depuis Phase 2.B.

**Spécification (ROADMAP.md, Phase 2.B)** :
> Premier fichier thématique : créer `resources/foundations/cognitive.js`

**État actuel** : ✅ **Existe** mais 🔴 **Obsolète** — remplacé par `01_fondations-cognitives.js`

**Impact** : Confusion pour les contributeurs qui pourraient penser qu'il faut utiliser ce modèle.

**Propositions** :
- Supprimer `resources/foundations/cognitive.js`
- Documenter dans CONTRIBUTING.md que la structure cible est `NN_mon-theme.js`

---

#### 3.2 — Référence à `epistemia_data.js` toujours présent
**État actuel** : Le fichier `epistemia_data.js` (1179 lignes) existe toujours dans la racine.

**Spécification (ROADMAP.md, Phase 2.C)** :
> Supprimer la dépendance à `epistemia_data.js` dans `index.html` (fichier monolithique de données décommissionné)

**État actuel** : ✅ **Index.html ne l'importe plus**, mais 🟡 **Fichier toujours présent** en legacy

**Impact** : Encombrement du dépôt, confusion potentielle.

**Propositions** :
- **Option A** : Archiver dans une branche `legacy/` ou tag Git
- **Option B** : Garder comme fichier de référence mais documenter son obsolescence dans un commentaire
- **Recommandation** : Supprimer après vérification qu'aucune donnée n'a été perdue (comparer nœuds/arcs)

---

### **Catégorie 4 : Gestion des Versions & Versioning**

#### 4.1 — Version manuellement inscrite dans `index.html`
**État actuel** : `v2.1` hardcodée dans le logo de `index.html` (ligne 30).

**Impact** : Risque de désynchronisation avec la version npm (future).

**Propositions** :
- Centraliser la version dans `package.json`
- Importer dynamiquement lors du build (ou en dev, depuis un fichier `version.js`)
- Documenter la procédure de bump de version dans CONTRIBUTING.md

---

#### 4.2 — Tag de version Git absent
**État actuel** : Pas de tags Git pour les releases.

**Propositions** :
- Ajouter une section dans CONTRIBUTING.md :
  ```bash
  git tag v2.1.0
  git push origin v2.1.0
  ```

---

### **Catégorie 5 : .gitignore Actuellement Insuffisant**

#### 5.1 — Exclusions manquantes pour Claude
**État actuel** : Le `.gitignore` actuel :
```
node_modules/
.DS_Store
*.log
*.bak
finalize-repo.sh
```

**Impact** : Les fichiers générés par Claude (artifacts, CLAUDE.md, etc.) pourraient être committes par erreur.

**Propositions** :
```
# === Node ===
node_modules/
package-lock.json
npm-debug.log

# === OS ===
.DS_Store
Thumbs.db

# === IDE & Outils ===
.vscode/
.idea/
*.swp
*.swo
*~

# === Claude/LLM ===
CLAUDE.md
.claude/
claude_*.md
*.claude
.cowork/
artifacts/

# === Build & Temporary ===
*.bak
*.log
dist/
build/

# === Legacy ===
finalize-repo.sh
```

---

### **Catégorie 6 : Alignement Spécifications ↔ Implémentation**

#### 6.1 — Filtrage par plage temporelle documenté mais partiellement implémenté
**Spécification (README.md)** :
> 🔍 **Filtres** par type de nœud, type de transition et plage temporelle

**État actuel** : ✅ **Existe dans `app.js`** — inputs `#year-min` et `#year-max` avec logique de filtrage

**Observation** : Bien implémenté ✅

---

#### 6.2 — Recherche multi-critères (label, auteur, tag)
**Spécification (README.md)** :
> 🔎 **Recherche** par label, auteur, tag ou description

**État actuel** : ✅ **Implémenté** — input `#search-input` avec logique full-text

**Observation** : Bien implémenté ✅

---

#### 6.3 — Drag & drop des nœuds
**Spécification (README.md)** :
> 🖱️ **Drag & drop** des nœuds

**État actuel** : ✅ **Implémenté** — D3.js drag behavior dans `app.js`

**Observation** : Bien implémenté ✅

---

### **Catégorie 7 : Qualité & Complétude des Données**

#### 7.1 — Vérification d'exhaustivité
**Observation** : Toutes les 11 thématiques déclarées dans `resources/index.js` sont présentes et importées correctement.

**Nœuds par thématique** (estimation) :
- 01_fondations-cognitives.js : ~8 nœuds
- 02_fondations-connexionnistes.js : ~6 nœuds
- 03_ia-symbolique.js : ~10 nœuds
- 04_systemes-experts.js : ~7 nœuds
- 05_architectures-cognitives.js : ~5 nœuds
- 06_vectoriel.js : ~4 nœuds
- 07_probabiliste.js : ~4 nœuds
- 08_ontologies.js : ~4 nœuds
- 09_memoire-augmentee.js : ~8 nœuds
- 10_transformers.js : ~10 nœuds
- 11_neuro-symbolique.js : ~8 nœuds

**Total estimé** : ~74 nœuds, ~80-100 arcs

**Observation** : Couverture cohérente de l'histoire de l'IA jusqu'à 2023 ✅

---

#### 7.2 — Cohérence des types de nœuds
**Vérification** : Tous les nœuds utilisent des types déclarés dans `schema.js` ✅

**12 types disponibles** :
1. Fondation cognitive
2. Fondation logique
3. Architecture symbolique
4. Logique non-monotone
5. Architecture cognitive
6. Représentation vectorielle
7. Architecture connexionniste
8. Probabiliste/Bayésien
9. Ontologie/Web sémantique
10. Mémoire augmentée
11. Modèle contextuel
12. Neuro-symbolique/World Model

**Observation** : Bonne couverture orthogonale des domaines ✅

---

#### 7.3 — Cohérence des types d'arcs
**7 types disponibles** :
1. Evolution
2. Rupture
3. Integration
4. Inspiration
5. Convergence
6. Critique
7. Application

**Observation** : Types bien définis et régulièrement utilisés ✅

---

### **Catégorie 8 : Points Mineurs**

#### 8.1 — Conventions de nommage inconsistentes
**Observation** : Les IDs de nœuds utilisent kebab-case (ex: `cave-art`, `aristotle-categories`) ✅

**Observation** : Les IDs d'arcs suivent la pattern `e-source-target` (ex: `e-cave-tokens`) ✅

**État** : Cohérent ✅

---

#### 8.2 — Absence de commentaires dans `app.js`
**Impact** : Code D3.js volumineux (32 KB, 1000+ lignes) avec peu de commentaires explicatifs.

**Propositions** :
- Ajouter JSDoc pour les fonctions principales
- Documenter les structures D3.js (simulation, zoom, etc.)
- Créer `docs/APP_ARCHITECTURE.md`

---

#### 8.3 — Pas de tests automatisés
**État actuel** : Aucun test unitaire ou e2e.

**Propositions** (Phase future) :
- Tests de validation du graphe
- Tests e2e avec Playwright (navigation, filtrage)
- Tests visuels (snapshots D3.js)

---

## 📋 Liste des Actions Recommandées

### **Priorité 🔴 HAUTE** (Avant contribution communautaire)

| ID | Action | Fichier | Phase | Effort |
|----|--------|---------|-------|--------|
| A1 | Créer `CONTRIBUTING.md` avec template contribution | CONTRIBUTING.md | 6 | 2h |
| A2 | Implémenter `tools/validate.js` | tools/validate.js | 3 | 3h |
| A3 | Créer `package.json` | package.json | 1 | 30min |
| A4 | Améliorer `.gitignore` pour Claude | .gitignore | 1 | 15min |

### **Priorité 🟡 MOYENNE** (Avant Phase 3)

| ID | Action | Fichier | Phase | Effort |
|----|--------|---------|-------|--------|
| B1 | Supprimer `resources/foundations/cognitive.js` | — | 2 | 5min |
| B2 | Archiver ou supprimer `epistemia_data.js` | epistemia_data.js | 2 | 10min |
| B3 | Ajouter `.github/workflows/validate.yml` | .github/workflows/validate.yml | 6 | 1h |
| B4 | Documenter l'architecture dans `docs/APP_ARCHITECTURE.md` | docs/APP_ARCHITECTURE.md | 6 | 2h |
| B5 | Documenter le versionning dans `CONTRIBUTING.md` | CONTRIBUTING.md | 6 | 30min |

### **Priorité 🟢 BASSE** (Nice-to-have)

| ID | Action | Fichier | Phase | Effort |
|----|--------|---------|-------|--------|
| C1 | Ajouter JSDoc à `app.js` | app.js | 6 | 3h |
| C2 | Mettre en place des tests e2e | tests/ | 7 | 5h |
| C3 | Centraliser la version dans `version.js` | version.js | 1 | 1h |

---

## 🎯 Recommandations Globales

### 1. **Finaliser la Phase 1 avant ouvrir les contributions**
- Créer les fichiers documentaires manquants (CONTRIBUTING.md, package.json)
- Cela permettra une onboarding communautaire claire

### 2. **Commencer immédiatement la Phase 3**
- Implémenter `tools/validate.js` (3h)
- Configurer CI GitHub Actions (1h)
- Cela garantit la qualité avant les contributions

### 3. **Nettoyer le dépôt**
- Supprimer/archiver les fichiers legacy
- Améliorer `.gitignore`

### 4. **Documenter le projet pour mainteneurs**
- Ajouter `docs/ARCHITECTURE.md` pour expliquer l'architecture D3.js
- Ajouter `docs/DATA_STRUCTURE.md` pour la structure du graphe

### 5. **Envisager un modèle de contribution**
- Templates GitHub Issues pour proposer un nœud
- Templates PR pour les modifications
- Checklist de validation pour les contributeurs

---

## 📊 Scorecard d'Alignement

| Critère | Score | Notes |
|---------|-------|-------|
| **Spécifications complètes** | 8/10 | Phases 0-2 complètes, 3-6 non commencées |
| **Documentation** | 7/10 | README + ROADMAP excellents, CONTRIBUTING/package.json manquants |
| **Code qualité** | 8/10 | Bien structuré, manque commentaires JSDoc |
| **Validation données** | 6/10 | Données riches mais pas de validation automatique |
| **Prêt communauté** | 5/10 | Besoin CONTRIBUTING.md + validateur + CI avant ouverture |
| **Maintenabilité** | 7/10 | Architecture solide, documentation complète |
| **Extensibilité** | 9/10 | Système multi-fichiers excellemment pensé |

**Moyenne globale : 7.1/10** ✅ Bon, avec améliorations claires

---

## 📝 Conclusion

EpistemIA est un **projet bien conçu et bien exécuté** pour ses phases actuelles. L'architecture multi-fichiers est exemplaire, et les données sont riches et bien structurées.

**Les priorités pour l'avenir** :
1. Finaliser la documentation de contribution
2. Implémenter les outils de validation
3. Configurer CI/CD
4. Ouvrir progressivement à la communauté

Le projet est sur la bonne voie pour devenir une ressource partagée et collaborative. Les fondations sont solides ; il faut maintenant construire la maison.

---

**Rapport généré** : 25 mai 2026  
**Auditeur** : Claude (EpistemIA audit)  
**Dépôt** : https://github.com/tristanV/epistemIA
