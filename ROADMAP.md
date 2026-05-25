# Roadmap EpistemIA

Feuille de route du projet, organisée en phases progressives et itératives.
Chaque phase est indépendante et peut être déployée sans bloquer la suivante.
Les itérations sont volontairement courtes : **un commit = une tâche**.

---

## Phase 0 — Refactoring du fichier monolithique `index.html` ✅ Complète

> **Prioritaire.** Le fichier `index.html` concentrait HTML, CSS et JavaScript dans un seul fichier.
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

## Phase 2 — Architecture multi-fichiers de données ✅ Complète

> Passer d'un fichier monolithique `epistemia_data.js` à une architecture extensible par dossiers de ressources.
> Objectif : ajouter une nouvelle thématique = créer un fichier + ajouter une ligne dans le manifeste.

### Itération 2.A — Créer le schéma partagé

- [x] Extraire `nodeTypes` et `edgeTypes` de `epistemia_data.js`
- [x] Créer `resources/schema.js` exportant `export const SCHEMA = { nodeTypes, edgeTypes }`
- [x] Vérifier que le fichier est valide JS (import manuel dans la console navigateur)

### Itération 2.B — Fichiers thématiques

- [x] Premier fichier thématique : créer `resources/foundations/cognitive.js` avec les nœuds/arcs des origines cognitives
- [x] Respecter le schéma : `export const TOPIC = { meta: { title, theme }, nodes: [...], edges: [...] }`
- [x] Tester l'import dans la console : `import('./resources/foundations/cognitive.js').then(m => console.log(m.TOPIC))`

### Itération 2.C — Manifeste et chargement dynamique

- [x] Créer `resources/index.js` : manifeste centralisé avec `buildFullGraph()`
- [x] Modifier `index.html` : bootstrap ES module qui importe `buildFullGraph()`, expose `window.GRAPH_DATA`, puis charge `app.js` dynamiquement
- [x] Supprimer la dépendance à `epistemia_data.js` dans `index.html` (fichier monolithique de données décommissionné)
- [x] Vérifier que l'application fonctionne sur GitHub Pages après le commit

### Itération 2.D — Découpage complet

- [x] `resources/01_fondations-cognitives.js` — Origines cognitives & philosophiques
- [x] `resources/02_fondations-connexionnistes.js` — Connexionnisme & réseaux de neurones
- [x] `resources/03_ia-symbolique.js` — IA symbolique & GOFAI
- [x] `resources/04_systemes-experts.js` — Systèmes experts & logique formelle
- [x] `resources/05_architectures-cognitives.js` — Architectures cognitives (SOAR, ACT-R…)
- [x] `resources/06_vectoriel.js` — Représentations vectorielles (word2vec, embeddings)
- [x] `resources/07_probabiliste.js` — Apprentissage probabiliste & bayésien
- [x] `resources/08_ontologies.js` — Ontologies & graphes de connaissances
- [x] `resources/09_memoire-augmentee.js` — Mémoire augmentée (NTM, DNC, KV-Memory)
- [x] `resources/10_transformers.js` — Modèles contextuels & Transformers (BERT, GPT, RAG)
- [x] `resources/11_neuro-symbolique.js` — Neuro-symbolique, World Models & Agents LLM
- [x] Tous les topics enregistrés dans le manifeste `resources/index.js`

---

## Phase 3 — Qualité et navigation des données 🔧 À venir

> Améliorer la fiabilité, la cohérence et la navigabilité du graphe.

### Itération 3.A — Validation des données

- [ ] Créer `tools/validate.js` : script Node.js vérifiant la cohérence du graphe
  - Tous les `from`/`to` des arcs référencent des nœuds existants
  - Tous les types (`type`) sont des clés valides de `schema.js`
  - Pas de doublon d'identifiant
- [ ] Ajouter un script npm `"validate": "node tools/validate.js"` dans `package.json`

### Itération 3.B — Panneau de recherche avancée

- [ ] Filtre par auteur (autocomplete depuis les métadonnées)
- [ ] Filtre par tag (cloud de tags cliquables)
- [ ] Persistance des filtres dans l'URL (hash params)

### Itération 3.C — Navigation clavier

- [ ] Flèches gauche/droite pour naviguer entre nœuds voisins
- [ ] Escape pour désélectionner
- [ ] `/` pour focus sur la recherche

---

## Phase 4 — Visualisation enrichie 🔧 À venir

> Améliorer la lisibilité et la richesse du rendu graphique.

### Itération 4.A — Vue chronologique compacte

- [ ] Mode "timeline" : nœuds disposés strictement sur l'axe temporel, sans simulation de forces
- [ ] Transition animée entre mode timeline et mode graphe

### Itération 4.B — Clusters visuels

- [ ] Dessiner des zones colorées transparentes regroupant les nœuds par thématique
- [ ] Les zones se mettent à jour dynamiquement lors du filtrage

### Itération 4.C — Minimap

- [ ] Miniature SVG en coin bas-droit montrant la position de la vue courante
- [ ] Clic sur la minimap pour naviguer

---

## Phase 5 — Expérience utilisateur avancée 🔧 À venir

> Rendre l'application plus pédagogique et partageable.

### Itération 5.A — Mode « parcours guidé »

- [ ] Définir des séquences narratives de nœuds (ex : "Histoire du connexionnisme")
- [ ] Boutons Précédent / Suivant pour naviguer dans un parcours
- [ ] Parcours stockés dans `resources/tours/`

### Itération 5.B — Partage de sélection

- [ ] URL shareable avec le nœud sélectionné (`#node=attention-transformer`)
- [ ] Copier le lien vers un nœud depuis le panneau de détail

### Itération 5.C — Export

- [ ] Exporter le graphe filtré en SVG
- [ ] Exporter les données filtrées en JSON

---

## Phase 6 — Contribution communautaire 🔧 À venir

> Faciliter les contributions extérieures.

- [ ] `CONTRIBUTING.md` : guide complet (format des données, workflow Git, conventions)
- [ ] Templates GitHub Issues / PR pour proposer un nœud ou corriger une donnée
- [ ] CI GitHub Actions : lancer `tools/validate.js` sur chaque Pull Request
- [ ] Badge de statut du graphe (nombre de nœuds / arcs) dans le README
