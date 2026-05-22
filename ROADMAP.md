# Roadmap EpistemIA

Feuille de route du projet, organisée en phases progressives et itératives.
Chaque phase est indépendante et peut être déployée sans bloquer la suivante.
Les itérations sont volontairement courtes : **un commit = une tâche**.

---

## Phase 0 — Refactoring du fichier monolithique `index.html` 🔧 En cours

> **Prioritaire.** Le fichier `index.html` concentre actuellement HTML, CSS et JavaScript dans un seul fichier.
> Cette phase déporte le design graphique et la couche d'interaction dans des fichiers séparés,
> pour faciliter la maintenance, la lisibilité et les contributions.

### Itération 0.A — Extraction du CSS → `style.css`

- [x] Créer `style.css` contenant l'intégralité du bloc `<style>` de `index.html`
- [x] Remplacer le bloc `<style>` par `<link rel="stylesheet" href="./style.css">`
- [x] Vérifier que l'application s'affiche identiquement après l'extraction

### Itération 0.B — Extraction du JS applicatif → `app.js`

- [x] Créer `app.js` contenant l'intégralité du bloc `<script>` de `index.html`
- [x] Remplacer le bloc `<script>` inline par `<script src="./app.js"></script>` (après les dépendances)
- [x] Vérifier que l'application fonctionne identiquement après l'extraction

---

## Phase 1 — Identité et documentation ✅ Complète

> Poser les bases documentaires et le naming du projet.

- [x] Renommer l'application : titre `EpistemIA` dans `index.html`
- [x] Nouveau logo SVG dans le header (nœud central + satellites)
- [x] `README.md` complet : présentation, fonctionnalités, format des données, instructions de contribution
- [x] `ROADMAP.md` créé avec les phases de développement
- [x] Balise `<meta description>` et Open Graph dans `index.html`
- [x] Fichier `LICENSE` (MIT)

---

## Phase 2 — Architecture multi-fichiers de données 🔧 En cours

> Passer d'un fichier monolithique à une architecture extensible par dossiers de ressources.
> Objectif : ajouter une nouvelle thématique = créer un fichier + ajouter une ligne dans le manifeste.

### Itération 2.A — Créer le schéma partagé

- [x] Extraire `nodeTypes` et `edgeTypes` de `epistemia_data.js`
- [x] Créer `resources/schema.js` exportant `export const SCHEMA = { nodeTypes, edgeTypes }`
- [x] Vérifier que le fichier est valide JS (import manuel dans la console navigateur)

### Itération 2.B — Premier fichier thématique

- [x] Créer `resources/foundations/cognitive.js` avec les nœuds/arcs des origines cognitives
- [x] Respecter le schéma : `export const TOPIC = { meta: { title, theme }, nodes: [...], edges: [...] }`
- [x] Tester l'import dans la console : `import('./resources/foundations/cognitive.js').then(m => console.log(m.TOPIC))`

### Itération 2.C — Manifeste et chargement dynamique

- [ ] Créer `resources/index.js` : tableau de fonctions d'import dynamique
  ```js
  // resources/index.js
  export const TOPICS = [
    () => import('./foundations/cognitive.js'),
    // une ligne par fichier thématique
  ];
  ```
- [ ] Modifier `index.html` : ajouter `type="module"` sur la balise `<script>` principale
- [ ] Composer `GRAPH_DATA` en mémoire à partir du manifeste + schéma
- [ ] Vérifier que l'application fonctionne sur GitHub Pages après le commit

### Itération 2.D — Découpage complet

- [ ] Migrer tous les nœuds/arcs restants de `epistemia_data.js` en fichiers thématiques :
  - [ ] `resources/foundations/mathematics.js`
  - [ ] `resources/foundations/logic.js`
  - [ ] `resources/symbolic-ai/expert-systems.js`
  - [ ] `resources/symbolic-ai/knowledge-representation.js`
  - [ ] `resources/symbolic-ai/nonmonotonic.js`
  - [ ] `resources/connectionist/neural-networks.js`
  - [ ] `resources/connectionist/deep-learning.js`
  - [ ] `resources/statistical/machine-learning.js`
  - [ ] `resources/statistical/probabilistic.js`
  - [ ] `resources/semantic-web/ontologies.js`
  - [ ] `resources/cognitive-architectures/cognitive.js`
  - [ ] `resources/modern-ai/llm-generative.js`
- [ ] Mettre à jour `resources/index.js` avec tous les fichiers
- [ ] Supprimer (ou archiver) `epistemia_data.js` devenu obsolète
- [ ] Mettre à jour le `README.md` : section "Ajouter une thématique"

---

## Phase 3 — Responsive et multi-support

> Rendre l'application utilisable sur mobile, tablette et grand écran.

### Itération 3.A — Sidebar mobile

- [ ] Ajouter un bouton hamburger visible sur ≤ 768 px
- [ ] La sidebar devient un drawer latéral avec overlay fermé par défaut sur mobile
- [ ] Tester à 375 px (iPhone SE)

### Itération 3.B — Panneau de détail mobile

- [ ] Transformer le panneau de détail en bottom sheet sur ≤ 768 px
- [ ] Ajouter un handle de fermeture (swipe down ou bouton)

### Itération 3.C — Graphe tactile

- [ ] Activer le pinch-to-zoom natif D3 sur écran tactile
- [ ] Vérifier les touch targets (≥ 44×44 px) sur tous les boutons
- [ ] Tester à 768 px (iPad) et 1280 px (desktop)

---

## Phase 4 — Enrichissement de la base de connaissances

> Compléter et approfondir le contenu épistémologique.

### Itération 4.A — Audit des données existantes

- [ ] Passer en revue tous les nœuds : cohérence des `type`, des `period`, des `description`
- [ ] Identifier les nœuds sans `authors` ni `keyWorks` et les compléter
- [ ] Identifier les nœuds isolés (sans arcs entrants ni sortants)

### Itération 4.B — Fondements mathématiques

- [ ] Calcul des probabilités : Bayes, Laplace, Boole
- [ ] Algèbre linéaire : vecteurs, matrices, valeurs propres (Cayley, Jordan)
- [ ] Théorie de l'information : Shannon, entropie, compression (Huffman, Kolmogorov)
- [ ] Optimisation : descente de gradient, méthodes variationnelles (Lagrange, Cauchy)

### Itération 4.C — IA symbolique

- [ ] Logique floue (Zadeh, 1965)
- [ ] Planification automatique (STRIPS, PDDL)
- [ ] Systèmes à base de règles (Rete, Prolog)
- [ ] Raisonnement par cas (CBR)

### Itération 4.D — Connexionnisme et apprentissage profond

- [ ] Perceptron (Rosenblatt, 1958) et ses limites (Minsky & Papert, 1969)
- [ ] Backpropagation (Rumelhart, Hinton, Williams, 1986)
- [ ] Architectures modernes : CNN, RNN, LSTM, Transformers
- [ ] Liens vers arXiv / articles libres dans `keyWorks`

### Itération 4.E — Applications majeures

- [ ] Vision par ordinateur (ImageNet, AlexNet, YOLO)
- [ ] Traitement du langage naturel (Word2Vec, BERT, GPT)
- [ ] Jeux et planification (AlphaGo, AlphaZero)
- [ ] Robotique et systèmes embarqués

---

## Phase 5 — Expérience utilisateur avancée

> Améliorer la navigation et la découvrabilité dans le graphe.

### Itération 5.A — Permaliens

- [ ] URL avec hash `#nodeId` pour partager un nœud spécifique
- [ ] Au chargement, lire le hash et sélectionner/centrer le nœud correspondant

### Itération 5.B — Vue timeline

- [ ] Vue alternative en liste chronologique défilante
- [ ] Filtrage synchronisé avec les filtres existants

### Itération 5.C — Chemin entre nœuds

- [ ] Implémenter BFS/Dijkstra sur le graphe en mémoire
- [ ] Surligner le chemin le plus court entre deux nœuds sélectionnés

### Itération 5.D — Export et partage

- [ ] Télécharger le graphe filtré en SVG
- [ ] Télécharger les données filtrées en JSON

### Itération 5.E — Mode présentation

- [ ] Séquence guidée de nœuds clés (story mode)
- [ ] Navigation précédent / suivant avec description contextuelle

---

## Phase 6 — Automatisation et qualité

> Faciliter les contributions et garantir la qualité des données.

### Itération 6.A — Validation des données

- [ ] Script `tools/validate.js` (Node.js) :
  - unicité des IDs (`node.id`, `edge.id`)
  - cohérence des références `edge.from` / `edge.to`
  - conformité des `type` aux `nodeTypes` / `edgeTypes` du schéma
  - détection des nœuds isolés
- [ ] Exécution locale : `node tools/validate.js`

### Itération 6.B — GitHub Actions

- [ ] Workflow `.github/workflows/validate.yml` : lancer `validate.js` à chaque push ou PR
- [ ] Statut de validation visible dans les PRs

### Itération 6.C — Guide de contribution

- [ ] `CONTRIBUTING.md` : procédure pour ajouter un nœud, une thématique, corriger une donnée
- [ ] Exemple complet d'un fichier thématique valide
- [ ] Checklist de vérification avant commit

---

## Ordre de priorité recommandé

```
Phase 0.A → 0.B           (refactoring monolithique — prioritaire)
Phase 2.A → 2.B → 2.C → 2.D   (architecture multi-fichiers)
Phase 3.A → 3.B           (mobile, haute valeur d'usage)
Phase 4.A → 4.B           (contenu, enrichissement progressif)
Phase 6.A → 6.B           (qualité, avant contributions extérieures)
Phase 5 en parallèle       (UX, fonctionnalités à la demande)
```

---

## Notes d'architecture

### Contrainte fondamentale

L'application doit rester **entièrement serverless** et exécutable via GitHub Pages sans backend.
Toute évolution architecturale doit respecter cette contrainte.

### Choix techniques retenus

| Problème | Solution retenue | Pourquoi |
|---|---|---|
| Fichier `index.html` monolithique | Séparation `style.css` + `app.js` | Maintenabilité, lisibilité, contributions |
| Fichier de données monolithique | Modules ES + manifeste `resources/index.js` | Serverless, pas de build, ajout = 1 ligne |
| Lister un dossier côté client | Impossible sur GitHub Pages | Manifeste explicite obligatoire |
| Données narratives (prose) | Fichiers `.md` chargés via `fetch` | Même origine, compatible serverless |
| Données structurées (nœuds/arcs) | Fichiers `.js` avec `export const TOPIC` | Typage implicite, pas de parsing |
| Validation | Script Node.js local + GitHub Action | Qualité sans bloquer le workflow |
