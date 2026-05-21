// ============================================================
// resources/02_fondations-connexionnistes.js
// Thématique : Fondations connexionnistes (1943-1955)
// ============================================================

export const TOPIC = {
  meta: {
    title: "Fondations connexionnistes",
    theme: "connectionist",
    order: 2,
    description: "Neurone formel, apprentissage hebbien, théorie de l'information."
  },

  nodes: [
    {
      id: "mcculloch-pitts",
      label: "Neurone formel (McCulloch-Pitts)",
      type: "Architecture connexionniste",
      period: [1943, 1943],
      year: 1943,
      authors: ["Warren McCulloch", "Walter Pitts"],
      description: "A Logical Calculus of the Ideas Immanent in Nervous Activity (1943) : premier modèle mathématique du neurone biologique comme fonction seuil. Tout réseau de neurones formels peut calculer toute fonction logique.",
      problemsSolved: ["Substrat unifié pour le calcul et la représentation neuronale", "Lien formel logique/réseau neuronal"],
      problemsRaised: ["Aucun mécanisme d'apprentissage des poids", "Aucune théorie de la mémoire long terme"],
      tags: ["neurone formel", "seuil", "logique neuronale", "connexionnisme"],
      keyPapers: [{ title: "A Logical Calculus of the Ideas Immanent in Nervous Activity", authors: "McCulloch, W.S. & Pitts, W.", year: 1943, url: "https://doi.org/10.1007/BF02478259" }]
    },
    {
      id: "hebb-rule",
      label: "Règle de Hebb",
      type: "Architecture connexionniste",
      period: [1949, 1949],
      year: 1949,
      authors: ["Donald Hebb"],
      description: "The Organization of Behavior (1949) : 'Des neurones qui s'activent ensemble se connectent ensemble.' Δwᵢⱼ = η·xᵢ·xⱼ. Première théorie cohérente de la formation des traces mnésiques. Fondement des réseaux de Hopfield (1982).",
      problemsSolved: ["Premier mécanisme d'apprentissage non supervisé", "Base théorique de la plasticité synaptique"],
      problemsRaised: ["Instabilité : les poids ne font que croître", "Pas de mécanisme d'oubli sélectif"],
      tags: ["plasticité synaptique", "apprentissage hebbien", "mémoire associative"],
      keyPapers: [{ title: "The Organization of Behavior", authors: "Hebb, D.O.", year: 1949, url: "https://archive.org/details/organizationofbe0000hebb" }]
    },
    {
      id: "shannon-information",
      label: "Théorie de l'information (Shannon)",
      type: "Fondation logique",
      period: [1948, 1948],
      year: 1948,
      authors: ["Claude Shannon"],
      description: "A Mathematical Theory of Communication (1948) : H = -Σ pᵢ log₂(pᵢ). Mesure quantitative de l'information, indépendante de la signification. Les LLMs optimisent une entropie croisée sur des tokens, exactement cette abstraction.",
      problemsSolved: ["Quantification formelle de l'information", "Fondement de la compression et du codage"],
      problemsRaised: ["La signification est hors de portée de la théorie", "La vérité factuelle ≠ probabilité"],
      tags: ["entropie", "information", "compression", "codage", "probabilité"],
      keyPapers: [{ title: "A Mathematical Theory of Communication", authors: "Shannon, C.E.", year: 1948, url: "https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf" }]
    },
    {
      id: "rosenblatt-perceptron",
      label: "Perceptron (Rosenblatt)",
      type: "Architecture connexionniste",
      period: [1957, 1962],
      year: 1958,
      authors: ["Frank Rosenblatt"],
      description: "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain (1958) : premier algorithme d'apprentissage supervisé avec preuve de convergence. Le théorème de convergence du perceptron garantit l'apprentissage si les données sont linéairement séparables.",
      problemsSolved: ["Premier algorithme supervisé avec garantie de convergence", "Apprentissage automatique des poids"],
      problemsRaised: ["Incapacité à résoudre XOR (Minsky & Papert, 1969)", "Limite aux problèmes linéairement séparables"],
      tags: ["perceptron", "classification", "apprentissage supervisé", "convergence"],
      keyPapers: [{ title: "The Perceptron: A Probabilistic Model", authors: "Rosenblatt, F.", year: 1958, url: "https://doi.org/10.1037/h0042519" }]
    },
    {
      id: "minsky-papert",
      label: "Perceptrons (Minsky & Papert)",
      type: "Architecture connexionniste",
      period: [1969, 1969],
      year: 1969,
      authors: ["Marvin Minsky", "Seymour Papert"],
      description: "Perceptrons (1969) : démonstration formelle des limites du perceptron monocouche (impossibilité de XOR, parité, connectivité). Déclenche le premier hiver de l'IA connexionniste jusqu'en 1986.",
      problemsSolved: ["Analyse théorique rigoureuse des limites des réseaux monocouches"],
      problemsRaised: ["Frein majeur au développement du connexionnisme pendant 15 ans"],
      tags: ["limites du perceptron", "XOR", "hiver IA", "analyse théorique"],
      keyPapers: [{ title: "Perceptrons", authors: "Minsky, M., Papert, S.", year: 1969, url: "https://mitpress.mit.edu/9780262534772/perceptrons/" }]
    }
  ],

  edges: [
    { id: "e-turing-mcculloch",  from: "turing-computability", to: "mcculloch-pitts",      type: "Inspiration", label: "calcul neuronal" },
    { id: "e-mcculloch-hebb",    from: "mcculloch-pitts",      to: "hebb-rule",            type: "Evolution",   label: "plasticité synaptique" },
    { id: "e-hebb-rosenblatt",   from: "hebb-rule",            to: "rosenblatt-perceptron", type: "Evolution",   label: "apprentissage supervisé" },
    { id: "e-rosenblatt-minsky", from: "rosenblatt-perceptron", to: "minsky-papert",        type: "Critique",   label: "limites formelles" },
    { id: "e-shannon-info",      from: "boole-algebra",        to: "shannon-information",  type: "Evolution",   label: "théorie de l'information" }
  ]
};
