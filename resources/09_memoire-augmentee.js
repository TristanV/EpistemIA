// ============================================================
// 09_memoire-augmentee.js — Mémoire Augmentée & Externe
// Époque 8 : Mémoire externe différentiable (2014-2020)
// NTM, DNC, Memory Networks, Key-Value Memory, EWC
// ============================================================

export const TOPIC = {

  meta: {
    title: "Mémoire augmentée & externe",
    epoch: 8,
    period: [2014, 2020],
    description: "Architectures de mémoire externe différentiable : NTM, DNC, Memory Networks."
  },

  // ─── NŒUDS ────────────────────────────────────────────────
  nodes: [

    {
      id: "memory-networks",
      label: "Memory Networks (Weston)",
      type: "Mémoire augmentée",
      period: [2014, 2015],
      year: 2014,
      periodLabel: "2014-2015",
      authors: ["Jason Weston", "Antoine Bordes", "Sumit Chopra", "Alexander M. Rush", "Bart van Merriënboer", "Armand Joulin", "Tomas Mikolov"],
      description: "Memory Networks (Weston et al., 2014) : architecture séparant explicitement la mémoire (M, tableau de vecteurs) du raisonnement. Le module de lecture sélectionne des emplacements mémoire par produit scalaire (soft addressing). End-To-End Memory Networks (Sukhbaatar et al., 2015) rend l'ensemble différentiable. Capable de lire/écrire sur plusieurs 'sauts' (hops) de mémoire pour répondre à des questions en plusieurs étapes. Premiers tests sur les tâches bAbI.",
      problemsSolved: [
        "Séparation explicite mémoire/calcul dans un réseau neuronal",
        "Adressage par contenu différentiable (soft attention)",
        "Raisonnement multi-étapes sur une mémoire externe"
      ],
      problemsRaised: [
        "Mémoire de taille fixe — nécessité d'une capacité pré-allouée",
        "Pas de mécanisme d'écriture dynamique dans la version originale",
        "Généralisation limitée au-delà des tâches de QA synthétiques"
      ],
      tags: ["mémoire externe", "adressage par contenu", "attention", "QA", "bAbI", "hops"],
      keyWorks: [
        { title: "Memory Networks", authors: "Weston, J. et al.", year: 2014, url: "https://arxiv.org/abs/1410.3916" },
        { title: "End-To-End Memory Networks", authors: "Sukhbaatar, S. et al.", year: 2015, url: "https://arxiv.org/abs/1503.08895" }
      ]
    },

    {
      id: "ntm",
      label: "Neural Turing Machine (NTM)",
      type: "Mémoire augmentée",
      period: [2014, 2014],
      year: 2014,
      periodLabel: "2014",
      authors: ["Alex Graves", "Greg Wayne", "Ivo Danihelka"],
      description: "Neural Turing Machine (Graves, Wayne & Danihelka, 2014) : premier réseau neuronal capable de lire et d'écrire sur une mémoire externe M (N×W) de façon entièrement différentiable. Contrôleur LSTM + têtes de lecture/écriture combinant adressage par contenu (cosine similarity) et adressage par localisation (décalage/focus). Démontre l'apprentissage de copie, tri, et autocomplétion de séquences. Préfigure le programme neuronal.",
      problemsSolved: [
        "Lecture ET écriture différentiables sur mémoire externe",
        "Combinaison adressage par contenu + par localisation",
        "Apprentissage de tâches algorithmiques (tri, copie) inaccessibles aux LSTM seuls"
      ],
      problemsRaised: [
        "Instabilité d'entraînement sur longues séquences",
        "Taille de mémoire fixe à l'entraînement",
        "Interférence entre opérations d'écriture successives"
      ],
      tags: ["NTM", "mémoire externe", "LSTM", "adressage contenu/localisation", "programme neuronal"],
      keyWorks: [
        { title: "Neural Turing Machines", authors: "Graves, A., Wayne, G., Danihelka, I.", year: 2014, url: "https://arxiv.org/abs/1410.5401" }
      ]
    },

    {
      id: "dnc",
      label: "Differentiable Neural Computer (DNC)",
      type: "Mémoire augmentée",
      period: [2016, 2016],
      year: 2016,
      periodLabel: "2016",
      authors: ["Alex Graves", "Greg Wayne", "Malcolm Reynolds", "Tim Harley", "Ivo Danihelka"],
      description: "Differentiable Neural Computer (Graves et al., Nature 2016) : évolution du NTM avec trois mécanismes : (1) allocation de mémoire par usage tracking (u_t), (2) liens temporels (temporal linkage matrix L_t) conservant l'ordre d'écriture, (3) têtes multiples simultanées. Résout des puzzles de graphes (shortest path) et questions de type bAbI en utilisant la structure de la mémoire. Démontre la navigation dans une base de données simulée.",
      problemsSolved: [
        "Allocation dynamique de mémoire par usage",
        "Liens temporels conservant l'ordre de séquence",
        "Résolution de problèmes de graphes via mémoire externe"
      ],
      problemsRaised: [
        "Complexité computationnelle O(N²) pour la matrice de liens",
        "Entraînement instable sur de très longues séquences",
        "Difficulté de passage à l'échelle comparé aux Transformers"
      ],
      tags: ["DNC", "mémoire différentiable", "allocation", "liens temporels", "graphes"],
      keyWorks: [
        { title: "Hybrid computing using a neural network with dynamic external memory", authors: "Graves, A. et al.", year: 2016, url: "https://doi.org/10.1038/nature20101" }
      ]
    },

    {
      id: "ewc",
      label: "Elastic Weight Consolidation (EWC)",
      type: "Mémoire augmentée",
      period: [2017, 2017],
      year: 2017,
      periodLabel: "2017",
      authors: ["James Kirkpatrick", "Razvan Pascanu", "Neil Rabinowitz", "Joel Veness", "Guillaume Desjardins", "Andrei A. Rusu", "Kieran Milan", "John Quan", "Tiago Ramalho", "Agnieszka Grabska-Barwinska", "Demis Hassabis", "Claudia Clopath", "Dharshan Kumaran", "Raia Hadsell"],
      description: "Overcoming catastrophic forgetting in neural networks (Kirkpatrick et al., PNAS 2017) : première solution neuronale scalable à l'oubli catastrophique. Calcule la matrice d'information de Fisher F pour évaluer l'importance de chaque poids θᵢ dans la tâche A. Lors de l'apprentissage de la tâche B : L = L_B + λ/2 · Σᵢ Fᵢ(θᵢ - θᵢ_A*)². Analogie biologique : consolidation synaptique. Permet l'apprentissage séquentiel de 10 jeux Atari sans oubli.",
      problemsSolved: [
        "Apprentissage séquentiel de tâches multiples sans oubli catastrophique",
        "Protection sélective des paramètres importants pour les tâches antérieures",
        "Analogue à la consolidation synaptique biologique"
      ],
      problemsRaised: [
        "Calcul exact de la matrice de Fisher coûteux en mémoire",
        "Efficacité décroît avec un grand nombre de tâches séquentielles",
        "Nécessite de connaître les frontières entre tâches"
      ],
      tags: ["continual learning", "catastrophic forgetting", "Fisher information", "consolidation synaptique"],
      keyWorks: [
        { title: "Overcoming catastrophic forgetting in neural networks", authors: "Kirkpatrick, J. et al.", year: 2017, url: "https://doi.org/10.1073/pnas.1611835114" }
      ]
    },

    {
      id: "kv-memory",
      label: "Key-Value Memory Networks",
      type: "Mémoire augmentée",
      period: [2016, 2016],
      year: 2016,
      periodLabel: "2016",
      authors: ["Alexander Miller", "Adam Fisch", "Jesse Dodge", "Amir-Hossein Karimi", "Antoine Bordes", "Jason Weston"],
      description: "Key-Value Memory Networks for Directly Reading Documents (Miller et al., EMNLP 2016) : extension des Memory Networks séparant clés d'adressage et valeurs retournées. key_hashing filtre les entrées candidates, puis key_addressing pondère par cosine similarity, value_reading retourne la somme pondérée des valeurs. Permet une QA directe sur Wikidata sans entraînement KG-spécifique. Préfigure les mécanismes cross-attention des Transformers.",
      problemsSolved: [
        "Séparation clé/valeur permettant l'indexation et la lecture découplées",
        "QA directe sur de larges bases de faits non structurées",
        "Précurseur conceptuel du cross-attention des Transformers"
      ],
      problemsRaised: [
        "Passage à l'échelle difficile pour de très grandes mémoires (million d'entrées)",
        "Absence de mécanisme d'écriture ou de mise à jour dynamique"
      ],
      tags: ["key-value", "mémoire externe", "QA", "Wikidata", "attention", "cross-attention"],
      keyWorks: [
        { title: "Key-Value Memory Networks for Directly Reading Documents", authors: "Miller, A. et al.", year: 2016, url: "https://arxiv.org/abs/1606.03126" }
      ]
    }

  ],

  // ─── ARCS ─────────────────────────────────────────────────
  edges: [
    { from: "hopfield-network", to: "memory-networks", type: "Inspiration",
      label: "Adressage associatif → adressage par contenu différentiable" },
    { from: "memory-networks", to: "ntm", type: "Evolution",
      label: "Mémoire externe → lecture + écriture différentiables (NTM)" },
    { from: "ntm", to: "dnc", type: "Evolution",
      label: "NTM → DNC : allocation dynamique + liens temporels" },
    { from: "memory-networks", to: "kv-memory", type: "Evolution",
      label: "Memory Networks → séparation clé/valeur" },
    { from: "kv-memory", to: "attention-transformer", type: "Inspiration",
      label: "Adressage clé/valeur → cross-attention Transformer" },
    { from: "dnc", to: "attention-transformer", type: "Critique",
      label: "Mémoire externe explicite supplantée par attention implicite" },
    { from: "backprop", to: "ewc", type: "Inspiration",
      label: "Gradient + importance des poids → consolidation élastique" }
  ]

};
