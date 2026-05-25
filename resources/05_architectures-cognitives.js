// ============================================================
// resources/05_architectures-cognitives.js
// Thématique : Architectures cognitives unifiées (1983-2000)
// ============================================================

export const TOPIC = {
  meta: {
    title: "Architectures cognitives unifiées",
    theme: "cognitive-architectures",
    order: 5,
    description: "SOAR, ACT-R, CLARION, Hopfield, backpropagation — l'IA et la cognition se rejoignent."
  },

  nodes: [
    {
      id: "soar",
      label: "SOAR",
      type: "Architecture cognitive",
      period: [1983, 2000],
      year: 1987,
      authors: ["Allen Newell", "John Laird", "Paul Rosenbloom"],
      description: "SOAR (States, Operators And Reasoning, 1983-1987) : architecture cognitive unifiée. Mémoire de travail (WM), mémoire long terme procédurale (règles) et déclarative (chunks). Opérateur universel de sélection. Apprentissage par chunking : compilation de sous-problèmes résolus en règles.",
      problemsSolved: ["Architecture unifiée cohérente pour la cognition humaine", "Apprentissage implicite par chunking"],
      problemsRaised: ["Difficulté à modéliser la mémoire implicite (procédurale vs déclarative)", "Impasse (impasse) sur problèmes sans opérateur applicable"],
      tags: ["architecture cognitive", "chunking", "mémoire de travail", "SOAR"],
      keyPapers: [{ title: "Unified Theories of Cognition", authors: "Newell, A.", year: 1990, url: "https://en.wikipedia.org/wiki/Soar_(cognitive_architecture)" }]
    },
    {
      id: "actr",
      label: "ACT-R",
      type: "Architecture cognitive",
      period: [1983, 2005],
      year: 1993,
      authors: ["John R. Anderson"],
      description: "ACT-R (Adaptive Control of Thought - Rational, 1993) : mémoire déclarative (chunks avec activation) + mémoire procédurale (règles de production). Activation A = B + Σ Wᵢ · Sᵢⱼ + ε. Modèle de référence pour les temps de réponse en psychologie cognitive.",
      problemsSolved: ["Modèle quantitatif des temps de réaction cognitifs", "Intégration déclaratif/procédural avec activation probabiliste"],
      problemsRaised: ["Paramètres nombreux difficiles à calibrer", "Difficulté à étendre aux tâches de très long terme"],
      tags: ["ACT-R", "activation", "mémoire procédurale", "psychologie cognitive"],
      keyPapers: [{ title: "The Atomic Components of Thought", authors: "Anderson, J.R.", year: 1998, url: "https://doi.org/10.1207/s15327051hci1304_2" }]
    },
    {
      id: "hopfield-network",
      label: "Réseaux de Hopfield",
      type: "Architecture connexionniste",
      period: [1982, 1982],
      year: 1982,
      authors: ["John Hopfield"],
      description: "Neural Networks and Physical Systems with Emergent Collective Computational Abilities (1982) : réseau récurrent symétrique (Wᵢⱼ = Wᵣᵢ) minimisant une énergie E = -½ΣWᵢⱼ sᵢ sᵣ. Mémoire associative : capacité ≈ 0.14N patterns. Formalise le concept de mémoire comme attracteur.",
      problemsSolved: ["Modèle mathématique de la mémoire associative", "Mémoire robuste au bruit (completion de pattern)"],
      problemsRaised: ["Capacité limitée (~14% des neurones)", "Faux attracteurs (spurious memories)"],
      tags: ["réseau récurrent", "attracteur", "mémoire associative", "Hopfield", "énergie"],
      keyPapers: [{ title: "Neural Networks and Physical Systems with Emergent Collective Computational Abilities", authors: "Hopfield, J.J.", year: 1982, url: "https://doi.org/10.1073/pnas.79.8.2554" }]
    },
    {
      id: "backpropagation",
      label: "Backpropagation",
      type: "Architecture connexionniste",
      period: [1986, 1986],
      year: 1986,
      authors: ["David Rumelhart", "Geoffrey Hinton", "Ronald Williams"],
      description: "Learning Representations by Back-propagating Errors (1986) : algorithme de descente de gradient par rétropropagation de l'erreur dans les réseaux multicouches. Sort du premier hiver connexionniste. Fonde l'apprentissage profond moderne.",
      problemsSolved: ["Apprentissage dans les réseaux multicouches (contourne XOR)", "Représentations internes apprise automatiquement"],
      problemsRaised: ["Gradient qui s'annule (vanishing gradient) dans les réseaux profonds", "Surajustement sans régularisation"],
      tags: ["backpropagation", "gradient", "MLP", "apprentissage profond", "représentations"],
      keyPapers: [{ title: "Learning Representations by Back-propagating Errors", authors: "Rumelhart, Hinton, Williams", year: 1986, url: "https://doi.org/10.1038/323533a0" }]
    },
    {
      id: "clarion",
      label: "CLARION",
      type: "Architecture cognitive",
      period: [1997, 2006],
      year: 1997,
      authors: ["Ron Sun"],
      description: "CLARION (Connectionist Learning with Adaptive Rule Induction On-line, 1997) : architecture à deux niveaux, sous-symbolique (réseau neuronal) + symbolique (règles). Modèle du continuum implicite/explicite en cognition. L'extraction de règles depuis le niveau neuronal simule la prise de conscience.",
      problemsSolved: ["Modélisation du continuum implicite/explicite", "Apprentissage hybride connexionniste + symbolique"],
      problemsRaised: ["Complexité architecturale élevée", "Difficulté d'interprétation des interactions inter-niveaux"],
      tags: ["CLARION", "hybride", "implicite/explicite", "règles", "réseau neuronal"],
      keyPapers: [{ title: "The CLARION Cognitive Architecture", authors: "Sun, R.", year: 2006, url: "https://doi.org/10.1145/1160633.1160647" }]
    }
  ],

  edges: [
    { id: "e-gps-soar",           from: "gps",               to: "soar",            type: "Evolution",   label: "architecture cognitive unifiée" },
    { id: "e-ops5-soar",          from: "ops5-rete",         to: "soar",            type: "Integration", label: "mémoire de production" },
    { id: "e-soar-actr",          from: "soar",              to: "actr",            type: "Convergence", label: "mémoire déclarative+procédurale" },
    { id: "e-hebb-hopfield",      from: "hebb-rule",         to: "hopfield-network", type: "Evolution",   label: "mémoire associative formelle" },
    { id: "e-minsky-back",        from: "minsky-papert",     to: "backpropagation", type: "Rupture",     label: "dépassement du perceptron" },
    { id: "e-back-clarion",       from: "backpropagation",   to: "clarion",         type: "Integration", label: "hybridation symbolique" },
    { id: "e-soar-clarion",       from: "soar",              to: "clarion",         type: "Integration", label: "architecture hybride" }
  ]
};
