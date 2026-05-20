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

## Fonctionnalités

- 🗺️ **Graphe interactif** avec axe temporel logarithmique (de −100 000 à aujourd'hui)
- 🔍 **Filtres** par type de nœud, type de transition et plage temporelle
- 🔎 **Recherche** par label, auteur, tag ou description
- ⚡ **Simulation de forces** D3.js pour réorganiser le graphe
- 🖱️ **Drag & drop** des nœuds
- 📋 **Panneau de détail** avec description, auteurs, références clés et voisinage
- 🌓 **Mode sombre / clair**

## Architecture

```
epistemIA/
├── index.html          ← Application complète (HTML + CSS + JS)
├── epistemia_data.js   ← Données du graphe (GRAPH_DATA)
├── README.md           ← Ce fichier
└── ROADMAP.md          ← Feuille de route
```

L'application est **100% statique** et s'exécute directement via GitHub Pages sans aucun backend.

## Format des données

Le fichier `epistemia_data.js` expose un objet global `GRAPH_DATA` :

```js
const GRAPH_DATA = {
  meta: { title: "...", version: "...", description: "..." },
  nodeTypes: {
    "Nom du type": { label: "...", color: "#hex", icon: "emoji" },
    // ...
  },
  edgeTypes: {
    "Nom du type": { label: "...", color: "#hex", dash: "none|5,3|2,2" },
    // ...
  },
  nodes: [
    {
      id: "identifiant-unique",
      label: "Nom affiché",
      type: "Nom du type",           // doit correspondre à une clé de nodeTypes
      period: [anneeDebut, anneeFin],
      periodLabel: "Texte libre",
      description: "...",
      authors: ["Nom Prénom"],
      tags: ["concept", "domaine"],
      keyWorks: [
        { title: "Titre", year: 1950, url: "https://..." }
      ],
      problemsSolved: ["Problème résolu 1"],
      problemsRaised: ["Question ouverte 1"]
    }
  ],
  edges: [
    {
      id: "e001",
      from: "id-source",
      to: "id-cible",
      type: "Nom du type",           // doit correspondre à une clé de edgeTypes
      label: "Description de la relation"
    }
  ]
};
```

## Contribuer

Pour enrichir la base de connaissances, il suffit d'éditer `epistemia_data.js` en ajoutant des entrées dans `nodes[]` et `edges[]` en respectant le schéma ci-dessus. Consultez le fichier [ROADMAP.md](ROADMAP.md) pour les prochaines évolutions architecturales prévues.

## Technologies

- [D3.js v7](https://d3js.org/) — rendu SVG, simulation de forces, zoom
- [Fontshare](https://www.fontshare.com/) — typographies (Satoshi, Cabinet Grotesk)
- GitHub Pages — hébergement statique serverless

## Licence

MIT — voir [LICENSE](LICENSE)
