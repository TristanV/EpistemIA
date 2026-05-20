# Roadmap EpistemIA

Feuille de route du projet, organisée en phases progressives et itératives.
Chaque phase est indépendante et peut être déployée sans bloquer la suivante.

---

## Phase 1 — Identité et documentation ✅

> Poser les bases documentaires et le naming du projet.

- [x] Renommer l'application : titre `EpistemIA` dans `index.html`
- [x] Nouveau logo SVG dans le header (nœud central + satellites)
- [x] `README.md` complet : présentation, fonctionnalités, format des données, instructions de contribution
- [x] `ROADMAP.md` créé avec les phases de développement
- [ ] Ajouter un fichier `LICENSE` (MIT)
- [ ] Ajouter une `meta description` et balises Open Graph dans `index.html`

---

## Phase 2 — Architecture multi-fichiers de données

> Passer d'un fichier monolithique à une architecture extensible par dossiers de ressources.

### 2.1 — Schéma partagé
- [ ] Créer `resources/schema.js` : exporter `SCHEMA` avec `nodeTypes` et `edgeTypes`
- [ ] Documenter le schéma dans le `README.md` (section "Ajouter une thématique")

### 2.2 — Découpage thématique
- [ ] Créer le dossier `resources/`
- [ ] Découper `epistemia_data.js` en fichiers thématiques :
  - [ ] `resources/foundations/cognitive.js` (origines cognitives et logiques)
  - [ ] `resources/foundations/mathematics.js` (fondements mathématiques)
  - [ ] `resources/symbolic-ai/expert-systems.js`
  - [ ] `resources/symbolic-ai/knowledge-representation.js`
  - [ ] `resources/connectionist/neural-networks.js`
  - [ ] `resources/connectionist/deep-learning.js`
  - [ ] `resources/statistical/machine-learning.js`
  - [ ] `resources/modern-ai/llm-generative.js`
- [ ] Chaque fichier respecte le schéma uniforme : `export const TOPIC = { meta, nodes, edges }`

### 2.3 — Manifeste et composition
- [ ] Créer `resources/index.js` : manifeste listant tous les imports dynamiques
- [ ] Modifier `index.html` pour utiliser `type="module"` et charger via le manifeste
- [ ] Composer le `GRAPH_DATA` complet en mémoire depuis tous les fichiers
- [ ] Vérifier la compatibilité GitHub Pages (imports ES modules en HTTPS)

---

## Phase 3 — Responsive et multi-support

> Rendre l'application utilisable sur mobile, tablette et grand écran.

- [ ] Revoir le layout pour les petits écrans (sidebar collapsible, panneau détail en overlay)
- [ ] Adapter la sidebar : bouton hamburger sur mobile, drawer latéral
- [ ] Adapter le panneau de détail : bottom sheet sur mobile
- [ ] Vérifier les touch targets (minimum 44×44 px) pour les boutons
- [ ] Tester à 375 px (iPhone SE), 768 px (tablette), 1280 px (desktop)
- [ ] Ajouter des gestes tactiles pour le zoom (pinch-to-zoom natif D3)
- [ ] Vérifier la lisibilité des labels de nœuds sur petits écrans

---

## Phase 4 — Enrichissement de la base de connaissances

> Compléter et approfondir le contenu épistémologique.

- [ ] Auditer les nœuds existants : cohérence des types, des périodes, des descriptions
- [ ] Ajouter les **fondements mathématiques** manquants :
  - [ ] Calcul des probabilités (Bayes, Laplace, Boole)
  - [ ] Algèbre linéaire (vecteurs, matrices, valeurs propres)
  - [ ] Théorie de l'information (Shannon, entropie, compression)
  - [ ] Optimisation (gradient, méthodes variationnelles)
- [ ] Compléter la couverture **IA symbolique** (logique floue, planification, systèmes à base de règles)
- [ ] Compléter la couverture **connexionnisme** (perceptron, backprop, architectures modernes)
- [ ] Ajouter des nœuds sur les **grandes applications** (vision, NLP, jeux, robotique)
- [ ] Enrichir les `keyWorks` avec des URLs vers des ressources libres (arXiv, Wikipedia, Stanford Encyclopedia)

---

## Phase 5 — Expérience utilisateur avancée

> Améliorer la navigation et la découvrabilité dans le graphe.

- [ ] **Vue timeline** : vue alternative en liste chronologique filtrée
- [ ] **Chemin entre deux nœuds** : trouver et surligner le chemin le plus court
- [ ] **Permaliens** : URL avec hash `#nodeId` pour partager un nœud spécifique
- [ ] **Export** : télécharger le graphe filtré en SVG ou PNG
- [ ] **Mode présentation** : défilement guidé de nœuds clés (story mode)
- [ ] **Recherche avancée** : filtrer par combinaison de tags
- [ ] Améliorer le panneau de détail : liens vers les voisins de voisins

---

## Phase 6 — Automatisation et maintenance

> Faciliter les contributions et garantir la qualité des données.

- [ ] Script de validation des données (`validate.js`) : vérifier la cohérence des références `from/to`, l'unicité des IDs, la conformité au schéma
- [ ] GitHub Action : lancer la validation automatiquement à chaque push
- [ ] Template de contribution : `CONTRIBUTING.md` avec guide pour ajouter un nœud ou une thématique
- [ ] Script de statistiques : générer un rapport du graphe (densité, nœuds isolés, couverture temporelle)

---

## Notes d'architecture

### Contrainte fondamentale
L'application doit rester **entièrement serverless** et exécutable via GitHub Pages sans backend. Toute évolution architecturale doit respecter cette contrainte.

### Choix techniques
- **Modules ES (`type="module"`)** : la méthode recommandée pour la Phase 2. Compatible avec tous les navigateurs modernes et avec GitHub Pages (servi en HTTPS).
- **Pas de `fetch` pour lister un dossier** : GitHub Pages ne génère pas de listings de répertoires. Le manifeste `resources/index.js` est la solution pour l'auto-composition.
- **Fichiers `.md` comme données** : techniquement possible via `fetch` (même origine), mais peu adapté aux données structurées de graphe. Recommandé uniquement pour la prose narrative (descriptions longues, contexte historique), pas pour les nœuds et arcs.
