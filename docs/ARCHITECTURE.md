# Architecture Technique — EpistemIA

## Vue d'ensemble

EpistemIA est une **application web statique 100% côté client** utilisant D3.js v7 pour la visualisation de graphes. Aucun serveur n'est requis : l'application s'exécute directement via GitHub Pages ou un serveur HTTP local.

```
┌─────────────────────────────────────────┐
│   GitHub Pages (HTTPS static hosting)   │
└──────────────────┬──────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
    ┌───▼────┐          ┌────▼────┐
    │ Index  │          │  Assets │
    │ .html  │          │ (.css)  │
    └───┬────┘          └─────────┘
        │
        ├─→ ES Module Bootstrap
        │   └─→ buildFullGraph() from resources/index.js
        │       ├─→ Loads all topics (01_...js to 11_...js)
        │       ├─→ Merges into single graph
        │       └─→ Exposes window.GRAPH_DATA
        │
        └─→ app.js (D3.js visualization)
            ├─→ Force simulation
            ├─→ Zoom/pan controls
            ├─→ Filtering & search
            └─→ Detail panel
```

---

## Structure des Fichiers

### Racine

| Fichier | Rôle |
|---------|------|
| `index.html` | Squelette HTML + bootstrap ES module |
| `style.css` | Design graphique, variables CSS |
| `app.js` | Logique d3.js, interaction utilisateur |
| `.gitignore` | Exclusions git |
| `package.json` | Métadonnées, scripts npm |
| `README.md` | Documentation publique |
| `ROADMAP.md` | Feuille de route |
| `CONTRIBUTING.md` | Guide de contribution |
| `LICENSE` | MIT |

### `/resources`

Contient le **cœur du projet** : données structurées et manifeste.

| Fichier | Rôle |
|---------|------|
| `schema.js` | Types de nœuds & arcs (autorité unique) |
| `index.js` | Manifeste : liste des thématiques + buildFullGraph() |
| `01_fondations-cognitives.js` | Thématique 1 : Origines (pré-1936) |
| `02_fondations-connexionnistes.js` | Thématique 2 : Connexionnisme (1943+) |
| `03_ia-symbolique.js` | Thématique 3 : IA Symbolique (1956+) |
| `04_systemes-experts.js` | Thématique 4 : Systèmes Experts (1970+) |
| `05_architectures-cognitives.js` | Thématique 5 : Architectures Cognitives (1990+) |
| `06_vectoriel.js` | Thématique 6 : Vectoriel & Embeddings (2000+) |
| `07_probabiliste.js` | Thématique 7 : Probabiliste (1980+) |
| `08_ontologies.js` | Thématique 8 : Ontologies (2000+) |
| `09_memoire-augmentee.js` | Thématique 9 : Mémoire Augmentée (2014+) |
| `10_transformers.js` | Thématique 10 : Transformers (2017+) |
| `11_neuro-symbolique.js` | Thématique 11 : Neuro-Symbolique (2018+) |

### `/tools`

Scripts de validation et maintenance.

| Fichier | Rôle |
|---------|------|
| `validate.js` | Validateur de cohérence du graphe (Phase 3) |

### `/docs` (futur)

Documentation technique pour mainteneurs.

---

## Flux de Chargement

### 1. **Initialisation**

L'utilisateur accède à `https://tristanv.github.io/epistemIA/` (ou `http://localhost:3000` localement).

```html
<script type="module">
  import { buildFullGraph } from './resources/index.js';
  window.GRAPH_DATA = buildFullGraph();

  const appScript = document.createElement('script');
  appScript.src = './app.js';
  document.body.appendChild(appScript);
</script>
```

**Étapes** :
1. Module ES import `buildFullGraph` depuis `resources/index.js`
2. `buildFullGraph()` exécute et retourne le graphe composé
3. Graphe stocké dans `window.GRAPH_DATA` (variable globale)
4. Script `app.js` chargé dynamiquement (une fois les données prêtes)

### 2. **Composition du Graphe**

```javascript
// resources/index.js
export function buildFullGraph() {
  return {
    meta: { title, version, topics },
    nodeTypes: SCHEMA.nodeTypes,     // Types de nœuds
    edgeTypes: SCHEMA.edgeTypes,     // Types d'arcs
    nodes: TOPICS.flatMap(t => t.nodes),  // Tous les nœuds
    edges: TOPICS.flatMap(t => t.edges)   // Tous les arcs
  };
}
```

**Performance** :
- Pas de requête réseau : tout est JavaScript
- Composition O(n) : fusion des tableaux
- Pas de parsing JSON : modules ES pré-compilés

### 3. **Rendu D3.js**

Une fois `app.js` chargé :

```javascript
// app.js (extrait)
const graphData = window.GRAPH_DATA;
const svg = d3.select('#graph-svg');

// Simulation de forces
const simulation = d3.forceSimulation(graphData.nodes)
  .force('link', d3.forceLink(graphData.edges).id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-300))
  .force('center', d3.forceCenter(width / 2, height / 2));

// Rendu SVG
simulation.on('tick', () => {
  link.attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
  
  node.attr('cx', d => d.x)
      .attr('cy', d => d.y);
});
```

---

## Structures de Données

### Nœud (Node)

```javascript
{
  id: "identifiant-unique",           // PK, kebab-case
  label: "Nom Affiché",               // Titre (24 chars max)
  type: "Fondation logique",          // Clé valide de SCHEMA.nodeTypes
  
  // Temporalité
  period: [1936, 1936],               // Début et fin
  year: 1936,                         // Année principale
  periodLabel: "1936",                // Label optionnel
  
  // Métadonnées
  authors: ["Alan Turing"],           // Créateurs
  description: "...",                 // 2-5 phrases, ~150 mots
  tags: ["calculabilité", "machine"], // Mots-clés
  
  // Littérature
  keyWorks: [
    {
      title: "On Computable Numbers",
      authors: "Turing, A.",
      year: 1936,
      url: "https://..."
    }
  ],
  
  // Impact
  problemsSolved: ["Définition du calcul effectif"],
  problemsRaised: ["Indécidabilité du halting problem"]
}
```

### Arc (Edge)

```javascript
{
  id: "e-turing-godel",         // Pattern : e-{from-id}-{to-id}
  from: "turing-computability",
  to: "godel-incompleteness",
  type: "Inspiration",          // Clé valide de SCHEMA.edgeTypes
  label: "fondements logiques"  // Description courte
}
```

### Schéma

```javascript
// resources/schema.js
const SCHEMA = {
  nodeTypes: {
    "Fondation cognitive": { color: "#8B6914", icon: "🏛️", label: "..." },
    // ... 11 autres types
  },
  edgeTypes: {
    "Evolution": { color: "#2d7a2d", dash: "", label: "..." },
    // ... 6 autres types
  }
};
```

**Autorité unique** : Le fichier `schema.js` est la source de vérité pour les types. Les fichiers thématiques doivent respecter les clés déclarées.

---

## Modèle de Filtrage

### Filtres Disponibles

1. **Recherche texte** (`#search-input`)
   - Champ : full-text sur label + tags + description
   - Logique : AND (tous les mots doivent matcher)

2. **Période temporelle** (`#year-min`, `#year-max`)
   - Champs : `node.year` ou `node.period`
   - Logique : nœud inclus si `node.year` ∈ [min, max]

3. **Type de nœud** (checkboxes dans `#node-type-filters`)
   - Champ : `node.type`
   - Logique : OR (au moins un type coché)

4. **Type d'arc** (checkboxes dans `#edge-type-filters`)
   - Champ : `edge.type`
   - Logique : OR (au moins un type coché)

### Logique de Filtrage

```javascript
// Pseudocode dans app.js
function applyFilters() {
  const filteredNodes = graphData.nodes.filter(node =>
    matchesSearch(node) &&
    isInTimeRange(node) &&
    isNodeTypeSelected(node)
  );

  const filteredEdges = graphData.edges.filter(edge =>
    filteredNodes.some(n => n.id === edge.from) &&
    filteredNodes.some(n => n.id === edge.to) &&
    isEdgeTypeSelected(edge)
  );

  simulation.nodes(filteredNodes);
  simulation.force('link').links(filteredEdges);
  simulation.restart();
}
```

---

## Thématiques et Découpage

### Pourquoi 11 thématiques ?

Chaque thématique regroupe une **lignée cohérente** d'idées ou de techniques :

| # | Thématique | Période | Focus |
|---|-----------|---------|-------|
| 1 | Fondations cognitives | pré-1936 | Philosophie & logique |
| 2 | Connexionnisme | 1943+ | Neurones artificiels |
| 3 | IA Symbolique | 1956+ | GOFAI, règles |
| 4 | Systèmes Experts | 1970+ | Logique + heuristiques |
| 5 | Architectures cognitives | 1990+ | Modèles unifiés |
| 6 | Vectoriel | 2000+ | Embeddings, word2vec |
| 7 | Probabiliste | 1980+ | Réseaux bayésiens |
| 8 | Ontologies | 2000+ | Graphes de connaissances |
| 9 | Mémoire augmentée | 2014+ | NTM, Memory Networks |
| 10 | Transformers | 2017+ | LLMs, GPT |
| 11 | Neuro-symbolique | 2018+ | Hybridation, World Models |

**Avantage** : Parallélisation des contributions. Chaque thématique peut croître indépendamment.

### Ajouter une Thématique

```javascript
// 1. Créer resources/12_mon-theme.js
export const TOPIC = {
  meta: { title, epoch, period, description },
  nodes: [...],
  edges: [...]
};

// 2. Ajouter l'import dans resources/index.js
import { TOPIC as monTheme } from './12_mon-theme.js';

// 3. Ajouter au tableau TOPICS
export const TOPICS = [..., monTheme];
```

Pas d'autre modification requise : `buildFullGraph()` auto-inclut.

---

## Styles & Thèmes

### Variables CSS Principales

```css
:root {
  --color-primary: #00d9ff;       /* Accent (cyan) */
  --color-bg: #0a0e27;            /* Background */
  --color-text: #f0f0f0;          /* Texte principal */
  --color-text-muted: #999;       /* Texte secondaire */
  
  /* Thème node/edge (depuis schema.js) */
  /* Couleurs dynamiques injectées par D3 */
}

[data-theme="light"] {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  /* ... */
}
```

### Responsive Design

`style.css` utilise flexbox et média queries pour mobile :

```css
@media (max-width: 768px) {
  #sidebar { width: 100%; }
  #graph-area { height: 60vh; }
}
```

---

## Performance & Optimisations

### Optimisations Actuelles

1. **Zero bundler** : Modules ES natifs, aucune étape de build
2. **Fichiers thématiques séparés** : Lazy-loading possible (future)
3. **D3.js v7** : Dernière version stable, optimisée
4. **Force simulation throttling** : Limité à 300 itérations
5. **Zoom/pan optimisé** : D3.js redraw sélectif

### Goulots d'Étranglement (Identifiés)

| Problème | Cause | Solution (future) |
|----------|-------|-------------------|
| Complexité O(n²) en simulation | Force many-body | Quadtree spatial partitioning |
| Redessins complets | D3.js select-all | Virtualization |
| Mémoire (74 nœuds, 100 arcs) | Pas de problème actuel | Monitor si > 1000 nœuds |

### Profiling

Pour profiler en Dev :

```javascript
// Dans la console du navigateur
console.time('simulation');
simulation.tick();
console.timeEnd('simulation');

// Performance API
performance.mark('filter-start');
applyFilters();
performance.mark('filter-end');
performance.measure('filter', 'filter-start', 'filter-end');
```

---

## Dépendances Externes

### Produits (CDN)

| Lib | Version | Rôle | CDN |
|-----|---------|------|-----|
| **D3.js** | v7 | Visualisation de graphes | d3js.org |
| **Fontshare** | — | Typographies | fontshare.com |

**Aucune autre dépendance** : zéro framework, zéro bundler.

### Déploiement

```
Développement local : npx serve .
GitHub Pages : Push to main → Auto-deployment via Actions
```

---

## Maintenance & Évolutions Futures

### Phase 3 (Validation)

- [ ] `tools/validate.js` : vérif auto des données
- [ ] GitHub Actions : CI sur chaque PR

### Phase 4 (Visualisation)

- [ ] Mode timeline : nœuds alignés temporellement
- [ ] Clusters visuels : zones thématiques colorées
- [ ] Minimap : navigation dans le graphe

### Phase 5 (UX)

- [ ] Parcours guidés (tours)
- [ ] URLs shareable
- [ ] Export SVG/JSON

### Phase 6 (Communauté)

- [ ] Templates GitHub Issues/PR
- [ ] Guides éditoriaux

### Techniques Futures

- Virtualization (si > 500 nœuds)
- Lazy-loading des thématiques
- Service Worker pour offline
- Tests e2e (Playwright)

---

## Debugging

### Mode Verbose

```bash
# Lancer la validation avec détails
npm run validate -- --verbose

# Ou directement
node tools/validate.js
```

### Console Navigateur

```javascript
// Inspecter le graphe
window.GRAPH_DATA

// Vérifier les nœuds filtrés
d3.selectAll('circle.node').nodes()

// Vérifier la simulation
console.log(simulation.alpha(), simulation.alphaTarget())
```

### Erreurs Communes

| Erreur | Cause | Solution |
|--------|-------|----------|
| "GRAPH_DATA is undefined" | app.js charge avant modules ES | Patienter, f5 |
| Arcs manquants | Type d'arc invalide | Vérifier `schema.js` |
| Nœud n'apparaît pas | `type` invalide | Vérifier `nodeTypes` |

---

## Conventions de Code

### JavaScript

- **Pas de transpilation** : ES6+, mais compatible navigateurs modernes (> 2018)
- **Pas de linter installé** : respect manuel des conventions
- **Commentaires JSDoc** : recommandé pour `app.js`

### JSON (Données)

- Format strict : `id` unique, `type` valide
- Indentation : 2 espaces (lisibilité)
- URLs : HTTPS, DOI ou arXiv de préférence

### Nommage

- Nœuds : kebab-case (`turing-computability`)
- Arcs : `e-{from}-{to}` (`e-turing-godel`)
- Fichiers : `NN_mon-theme.js` (NN = ordre)

---

## Contact & Support

- **Issues** : https://github.com/tristanV/epistemIA/issues
- **Discussions** : https://github.com/tristanV/epistemIA/discussions
- **Email** : tristan.vanrullen@laplateforme.io

---

**Dernière mise à jour** : 25 mai 2026  
**Mainteneur** : Tristan Vanrullen
