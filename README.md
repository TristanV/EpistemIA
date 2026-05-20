# EpistemIA

**Auteur : Tristan Vanrullen**

> *Explorer l'intelligence artificielle par ses origines, ses fondements et son évolution — de la caverne préhistorique aux grands modèles de langage.*

EpistemIA est une application web statique, exécutable directement via **GitHub Pages** (sans backend ni serveur), qui propose une **carte interactive du savoir en IA** : un graphe orienté, typé et chronologique couvrant les fondements mathématiques, les paradigmes cognitifs, les grandes architectures, les ruptures épistémologiques et les innovations techniques qui ont façonné l'intelligence artificielle depuis ses origines les plus lointaines jusqu'à aujourd'hui.

🌐 **Application en ligne** : [https://tristanv.github.io/EpistemIA/](https://tristanv.github.io/EpistemIA/)

---

## Intention du projet

EpistemIA vise à constituer une **base de connaissances vivante, extensible et navigable** sur l'IA et son histoire. Elle s'adresse aux chercheurs, enseignants, étudiants et curieux qui souhaitent comprendre non seulement *ce que fait* l'IA, mais *d'où elle vient*, *comment ses idées se sont connectées*, et *quelles tensions intellectuelles* ont guidé son développement.

Le graphe épistémologique couvre notamment :

- **Fondations cognitives et proto-symboliques** — des premières externalisations symboliques aux systèmes de comptage anciens
- **Logique formelle et architectures symboliques** — Aristote, Boole, Frege, Turing, les systèmes experts
- **Architectures connexionnistes et mémoire associative** — McCulloch-Pitts, Hebb, Hopfield, rétropropagation
- **Représentations vectorielles et distributionnelles** — word2vec, embeddings, espaces sémantiques
- **Logique non monotone et maintenance de la vérité** — JTMS, ATMS, raisonnement par défaut
- **Approches probabilistes et bayésiennes** — réseaux bayésiens, inférence, incertitude
- **Ontologies et Web sémantique** — RDF, OWL, frames, description logics
- **Mémoires augmentées pour réseaux neuronaux** — NTM, DNC, mémoire épisodique
- **Modèles contextuels et grands modèles de langage** — Transformers, BERT, GPT, attention
- **Neuro-symbolique et World Models** — intégration des paradigmes, modèles du monde

---

## Architecture technique

L'application repose sur une architecture **100 % client-side**, compatible GitHub Pages :

| Fichier | Rôle |
|---|---|
| `index.html` | Interface utilisateur, visualisation D3.js, filtres, panneau de détail |
| `epistemia_data.js` | Base de données JS (nœuds, arcs, types) — version monolithique actuelle |

La roadmap prévoit une **migration progressive vers une architecture multi-fichiers** basée sur des modules ES (`type="module"`) et un dossier `resources/` auto-composé, permettant d'enrichir la base de connaissances en ajoutant simplement de nouveaux fichiers thématiques.

---

## Structure des données

Chaque **nœud** du graphe contient :

```js
{
  id: "identifiant-unique",
  label: "Nom affiché",
  type: "TypeDeNoeud",          // clé dans nodeTypes
  period: [annéeDébut, annéeFin],
  periodLabel: "Description humaine",
  year: annéeReprésentative,
  authors: ["Auteur 1", "Auteur 2"],
  description: "Texte explicatif",
  tags: ["concept1", "concept2"],
  problemsSolved: ["..."],
  problemsRaised: ["..."],
  keyWorks: [{ title: "...", year: ..., url: "..." }]
}
```

Chaque **arc** contient :

```js
{
  id: "e-identifiant",
  from: "id-source",
  to: "id-cible",
  type: "TypeDeRelation",       // clé dans edgeTypes
  label: "Description de la relation"
}
```

Les **types de nœuds** (`nodeTypes`) et **types d'arcs** (`edgeTypes`) définissent couleurs, icônes et styles de traits, et constituent le **schéma du graphe**.

---

## Sources compilées dans la v3.0

Le graphe actuel (v3.0 — 50 nœuds, ~80 arcs) structure les contenus issus de :

- *Représentation des connaissances : de la caverne à la société de l'IA* (Tristan Vanrullen, 2025)
- *Ingénierie des systèmes de mémoire pour l'IA avant les LLMs* (Tristan Vanrullen, 2025)
- *50 nuances de RAG* (Tristan Vanrullen, 2026)
- *L'Atlas des Vecteurs Sémantiques* (Tristan Vanrullen, 2023)

La couverture temporelle s'étend de **−40 000 av. J.-C.** (premières peintures rupestres) au **présent** (modèles de langage, world models).

---

## Utilisation

Ouvrir `index.html` dans un navigateur moderne, ou accéder directement à [https://tristanv.github.io/EpistemIA/](https://tristanv.github.io/EpistemIA/). **Aucun backend n'est requis.**

---

## Contribuer

Voir [ROADMAP.md](./ROADMAP.md) pour l'état d'avancement et les prochaines étapes.

---

## Licence

MIT
