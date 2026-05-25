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
- l'**IA contemporaine** et ses développements récents (LLMs, agents, IA multimodale, neuro-symbolique)

---

## Fonctionnalités

- 🗺️ **Graphe interactif** avec axe temporel logarithmique (de −100 000 à aujourd'hui)
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
├── index.html                        ← Squelette HTML + bootstrap ES module
├── style.css                         ← Design graphique (Phase 0.A)
├── app.js                            ← Couche d'interaction D3.js (Phase 0.B)
├── epistemia_data.js                 ← Données legacy (conservé pour référence)
├── resources/                        ← Données découpées par thématique (Phase 2 ✅)
│   ├── schema.js                       ← nodeTypes + edgeTypes partagés
│   ├── index.js                        ← Manifeste + buildFullGraph()
│   ├── 01_fondations-cognitives.js
│   ├── 02_fondations-connexionnistes.js
│   ├── 03_ia-symbolique.js
│   ├── 04_systemes-experts.js
│   ├── 05_architectures-cognitives.js
│   ├── 06_vectoriel.js
│   ├── 07_probabiliste.js
│   ├── 08_ontologies.js
│   ├── 09_memoire-augmentee.js
│   ├── 10_transformers.js
│   ├── 11_neuro-symbolique.js
│   └── foundations/
│       └── cognitive.js              ← Prototype initial (remplacé par 01_)
├── tools/                            ← Scripts de validation (Phase 3 — à venir)
├── README.md
├── ROADMAP.md
└── LICENSE
```

### Principe de chargement

Depuis la Phase 2.C, `index.html` n'embarque plus aucune donnée inline.
Un **bootstrap ES module** importe `buildFullGraph()` depuis `resources/index.js`,
expose le graphe composé en `window.GRAPH_DATA`, puis charge `app.js` dynamiquement :

```html
<script type="module">
  import { buildFullGraph } from './resources/index.js';
  window.GRAPH_DATA = buildFullGraph();
  const s = document.createElement('script');
  s.src = './app.js';
  document.body.appendChild(s);
</script>
```

L'application est **100% statique** et s'exécute directement via GitHub Pages sans aucun backend.

---

## Ajouter une thématique

Pour enrichir le graphe avec un nouveau fichier thématique :

1. Créer `resources/NN_ma-thematique.js` en respectant le format :

```js
export const TOPIC = {
  meta: {
    title: "Ma thématique",
    epoch: 12,
    period: [2024, 2026],
    description: "..."
  },
  nodes: [ /* voir schéma ci-dessous */ ],
  edges: [ /* voir schéma ci-dessous */ ]
};
```

2. Ajouter l'import dans `resources/index.js` :

```js
import { TOPIC as maThematique } from './NN_ma-thematique.js';
// puis ajouter maThematique dans le tableau TOPICS
```

### Schéma d'un nœud

```js
{
  id: "identifiant-unique",             // kebab-case, sans espace
  label: "Nom affiché",
  type: "Nom du type",                  // clé valide de schema.js > nodeTypes
  period: [anneeDebut, anneeFin],       // années (négatif = av. J.-C.)
  periodLabel: "Texte libre",
  year: 1950,                           // année principale (pour le tri)
  description: "...",
  authors: ["Prénom Nom"],
  tags: ["concept", "domaine"],
  keyWorks: [
    { title: "Titre", authors: "Auteurs", year: 1950, url: "https://..." }
  ],
  problemsSolved: ["Problème résolu 1"],
  problemsRaised: ["Question ouverte 1"]
}
```

### Schéma d'un arc

```js
{ from: "id-source", to: "id-cible", type: "Evolution", label: "Description" }
// type doit être une clé valide de schema.js > edgeTypes
```

---

## Développement local

```bash
# Cloner le dépôt
git clone https://github.com/TristanV/EpistemIA.git
cd EpistemIA

# Lancer un serveur HTTP local (requis pour les modules ES)
npx serve .
# ou : python -m http.server 8080
# ou : extension VS Code Live Server
```

> ⚠️ Les modules ES (`import`/`export`) requièrent un serveur HTTP local — l'ouverture directe
> de `index.html` via `file://` échouera. GitHub Pages (HTTPS) est directement compatible.

---

## Contribuer

1. Forker le dépôt
2. Créer un fichier `resources/NN_ma-thematique.js` (voir format ci-dessus)
3. L'ajouter dans `resources/index.js`
4. Ouvrir une Pull Request

Un guide de contribution détaillé (`CONTRIBUTING.md`) sera ajouté en Phase 6.
Consulter [ROADMAP.md](ROADMAP.md) pour les prochaines évolutions.

---

## Technologies

| Outil | Usage |
|---|---|
| [D3.js v7](https://d3js.org/) | Rendu SVG, simulation de forces, zoom/pan |
| [Fontshare](https://www.fontshare.com/) | Typographies (Satoshi, Cabinet Grotesk) |
| ES Modules natifs | Chargement multi-fichiers sans bundler |
| GitHub Pages | Hébergement statique serverless |

---

## Licence

MIT — voir [LICENSE](LICENSE)
