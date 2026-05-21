# EpistemIA

> **Graphe épistémologique interactif** retraçant l'histoire, les techniques, les fondements mathématiques et l'évolution de l'Intelligence Artificielle.

🌐 **Application en ligne** : [https://tristanv.github.io/EpistemIA/](https://tristanv.github.io/EpistemIA/)

---

## Présentation

EpistemIA est une **base de connaissances visuelle et navigable** sur l'IA et son histoire. Le projet se présente comme un graphe orienté où chaque nœud représente un concept, un courant, une percée technique ou un fondement mathématique, et chaque arc représente une relation épistémologique entre ces éléments (évolution, rupture, filiation, émergence, etc.).

L'ambition est de cartographier :

- les **origines lointaines** de la pensée computationnelle (de la logique d'Aristote aux mathématiques du XVIIIe siècle)
- les **fondements mathématiques** de l'IA (calcul des probabilités, algèbre linéaire, optimisation, théorie de l'information)
- les **grandes familles techniques** (IA symbolique, connexionnisme, apprentissage statistique, apprentissage profond, IA générative)
- les **ruptures et convergences** qui ont façonné le domaine
- l'**IA contemporaine** et ses développements récents (LLMs, agents, IA multimodale)

---

## Fonctionnalités actuelles

- 🗺️ **Graphe interactif** avec axe temporel logarithmique (de −100 000 à aujourd'hui)
- 🔍 **Filtres** par type de nœud, type de transition et plage temporelle
- 🔎 **Recherche** par label, auteur, tag ou description
- ⚡ **Simulation de forces** D3.js pour réorganiser le graphe
- 🖱️ **Drag & drop** des nœuds
- 📋 **Panneau de détail** avec description, auteurs, références clés et voisinage
- 🌓 **Mode sombre / clair**

---

## Architecture

```
epistemIA/
├── index.html            ← Application complète (HTML + CSS + JS)
├── epistemia_data.js     ← Données du graphe (monolithique — temporaire)
├── resources/            ← à créer — données découpées par thématique (Phase 2)
│   ├── schema.js           ← nodeTypes + edgeTypes partagés
│   ├── index.js            ← manifeste des imports
│   ├── foundations/
│   ├── symbolic-ai/
│   ├── connectionist/
│   ├── statistical/
│   └── modern-ai/
├── tools/                ← à créer — scripts de validation (Phase 6)
├── README.md
├── ROADMAP.md
└── LICENSE
```

L'application est **100% statique** et s'exécute directement via GitHub Pages sans aucun backend.

---

## Format des données

### Objet global actuel

Le fichier `epistemia_data.js` expose un objet global `GRAPH_DATA` :

```js
const GRAPH_DATA = {
  meta: { title: "...", version: "...", description: "..." },
  nodeTypes: { ... },  // définitions des types de nœuds
  edgeTypes:  { ... },  // définitions des types d'arcs
  nodes: [ ... ],
  edges: [ ... ]
};
```

### Schéma d'un nœud

```js
{
  id: "identifiant-unique",             // snake-case, sans espace
  label: "Nom affiché",
  type: "Nom du type",                  // clé valide de nodeTypes
  period: [anneeDebut, anneeFin],       // années (négatif = av. J.-C.)
  periodLabel: "Texte libre",
  description: "...",
  authors: ["Prénom Nom"],
  tags: ["concept", "domaine"],
  keyWorks: [
    { title: "Titre", year: 1950, url: "https://..." }
  ],
  problemsSolved: ["Problème résolu"],
  problemsRaised: ["Question ouverte"]
}
```

### Schéma d'un arc

```js
{
  id: "e001",
  from: "id-source",
  to:   "id-cible",
  type: "Nom du type",                  // clé valide de edgeTypes
  label: "Description de la relation"
}
```

### Format thématique — Phase 2 (cible)

Lorsque l'architecture multi-fichiers sera mise en place (voir [ROADMAP.md](ROADMAP.md)), chaque fichier thématique respectera ce schéma :

```js
// resources/foundations/cognitive.js
export const TOPIC = {
  meta: {
    title: "Origines cognitives",
    theme: "foundations",               // dossier parent
    description: "..."
  },
  nodes: [ /* schéma nœud ci-dessus */ ],
  edges: [ /* schéma arc ci-dessus */ ]
};
```

Le schéma des types (`nodeTypes`, `edgeTypes`) sera isolé dans `resources/schema.js` :

```js
// resources/schema.js
export const SCHEMA = {
  nodeTypes: {
    "Fondation cognitive": { label: "Fondation cognitive", color: "#8B6914", icon: "🏛️" },
    // ...
  },
  edgeTypes: {
    "Evolution": { label: "Évolution", color: "#2d7a2d", dash: "none" },
    // ...
  }
};
```

---

## Développement local

> Aucune installation requise. L'application s'ouvre directement dans un navigateur.

```bash
# Cloner le dépôt
git clone https://github.com/TristanV/EpistemIA.git
cd EpistemIA

# Ouvrir dans le navigateur
open index.html
# ou : npx serve .  (recommandé pour la Phase 2 avec modules ES)
```

> ⚠️ **Phase 2 et au-delà** : les modules ES (`import`/`export`) requièrent un serveur HTTP local
> (même basique : `npx serve .`, `python -m http.server`, ou l'extension VS Code Live Server).
> GitHub Pages sert les fichiers en HTTPS et est donc directement compatible.

---

## Contribuer

Pour enrichir la base de connaissances :

1. **Avant la Phase 2** : éditer `epistemia_data.js` directement (ajouter dans `nodes[]` et `edges[]`)
2. **Après la Phase 2** : créer un fichier dans le bon dossier de `resources/` et ajouter une ligne dans `resources/index.js`

Dans tous les cas, respecter les schémas décrits ci-dessus. Un guide de contribution détaillé (`CONTRIBUTING.md`) sera ajouté en Phase 6.

Consulter [ROADMAP.md](ROADMAP.md) pour les prochaines évolutions.

---

## Technologies

| Outil | Usage |
|---|---|
| [D3.js v7](https://d3js.org/) | Rendu SVG, simulation de forces, zoom/pan |
| [Fontshare](https://www.fontshare.com/) | Typographies (Satoshi, Cabinet Grotesk) |
| GitHub Pages | Hébergement statique serverless |

---

## Licence

MIT — voir [LICENSE](LICENSE)
