// ============================================================
// resources/03_ia-symbolique.js
// Thématique : IA symbolique — premières architectures (1956-1977)
// ============================================================

export const TOPIC = {
  meta: {
    title: "IA symbolique — premières architectures",
    theme: "symbolic-ai",
    order: 3,
    description: "Logic Theorist, GPS, réseaux sémantiques, frames, scripts."
  },

  nodes: [
    {
      id: "logic-theorist",
      label: "Logic Theorist",
      type: "Architecture symbolique",
      period: [1956, 1956],
      year: 1956,
      authors: ["Allen Newell", "Herbert Simon", "J.C. Shaw"],
      description: "Premier programme d'IA (1956) : prouve 38 des 52 théorèmes du Principia Mathematica par manipulation heuristique. Introduit la notion de base de connaissances distincte du moteur de raisonnement.",
      problemsSolved: ["Démontre la computabilité du raisonnement formel", "Sépare connaissance (données) et inférence (procédure)"],
      problemsRaised: ["Explosion combinatoire des espaces de recherche"],
      tags: ["raisonnement automatique", "base de connaissances", "heuristique"],
      keyPapers: [{ title: "The Logic Theory Machine", authors: "Newell, Shaw, Simon", year: 1956, url: "https://doi.org/10.1109/PGEC.1956.5408896" }]
    },
    {
      id: "gps",
      label: "General Problem Solver (GPS)",
      type: "Architecture symbolique",
      period: [1957, 1959],
      year: 1957,
      authors: ["Allen Newell", "Herbert Simon", "J.C. Shaw"],
      description: "GPS (1957-1959) : sépare la représentation du problème et la stratégie générale de résolution (analyse moyens-fins). Introduit la mémoire de travail séparée de la mémoire long terme.",
      problemsSolved: ["Premier modèle de mémoire de travail séparée", "Architecture à deux niveaux état courant/connaissance permanente"],
      problemsRaised: ["Explosion combinatoire", "Absence d'apprentissage"],
      tags: ["moyens-fins", "mémoire de travail", "résolution de problèmes"],
      keyPapers: [{ title: "General Problem Solver", authors: "Newell, Simon", year: 1972, url: "https://en.wikipedia.org/wiki/General_Problem_Solver" }]
    },
    {
      id: "advice-taker",
      label: "Advice Taker (McCarthy)",
      type: "Architecture symbolique",
      period: [1959, 1959],
      year: 1959,
      authors: ["John McCarthy"],
      description: "Advice Taker (1959) : base de connaissances en logique du premier ordre séparable et modifiable dynamiquement. Vision programmatique de la représentation déclarative.",
      problemsSolved: ["Base de connaissances séparable et mutable", "Inférence sur des assertions ajoutées dynamiquement"],
      problemsRaised: ["Frame problem implicite", "Problèmes de consistance lors d'ajout d'assertions contradictoires"],
      tags: ["base de connaissances", "FOL", "déclaratif"],
      keyPapers: [{ title: "Programs with Common Sense", authors: "McCarthy, J.", year: 1959, url: "http://jmc.stanford.edu/articles/mcc59/mcc59.pdf" }]
    },
    {
      id: "resolution-robinson",
      label: "Résolution (Robinson)",
      type: "Architecture symbolique",
      period: [1965, 1965],
      year: 1965,
      authors: ["J.A. Robinson"],
      description: "Principe de résolution (1965) : règle d'inférence unique et réfutationnellement complète pour la logique du premier ordre. Base de Prolog (1972).",
      problemsSolved: ["Inférence automatique sur bases de connaissances du premier ordre", "Mécanisme d'unification universel"],
      problemsRaised: ["Recherche d'une réfutation PSPACE-difficile"],
      tags: ["résolution", "unification", "Prolog", "inférence automatique"],
      keyPapers: [{ title: "A Machine-Oriented Logic Based on the Resolution Principle", authors: "Robinson, J.A.", year: 1965, url: "https://doi.org/10.1145/321250.321253" }]
    },
    {
      id: "semantic-networks",
      label: "Réseaux sémantiques (Quillian)",
      type: "Architecture symbolique",
      period: [1966, 1968],
      year: 1968,
      authors: ["M. Ross Quillian"],
      description: "TLC (1966-1968) : graphe orienté étiqueté, nœuds (concepts), arcs (IS-A, HAS-PART…). Inférence par spreading activation. Collins & Quillian (1969) valident cognitivement la structure.",
      problemsSolved: ["Représentation naturelle des connaissances conceptuelles", "Inférence par héritage hiérarchique"],
      problemsRaised: ["Absence de sémantique formelle des arcs", "Ambiguïté des liens IS-A (Woods, 1975)"],
      tags: ["graphe orienté", "IS-A", "spreading activation", "héritage"],
      keyPapers: [{ title: "Semantic Memory", authors: "Quillian, M.R.", year: 1968, url: "https://doi.org/10.1145/1461551.1461553" }]
    },
    {
      id: "situation-calculus",
      label: "Calcul des situations",
      type: "Architecture symbolique",
      period: [1969, 1969],
      year: 1969,
      authors: ["John McCarthy", "Patrick Hayes"],
      description: "McCarthy & Hayes (1969) : formalisme logique pour des mondes dynamiques. Situations, Fluents, Actions, Résultat. Engendre le Frame Problem : O(n·k) axiomes de cadre pour n actions et k fluents.",
      problemsSolved: ["Formalisation du raisonnement temporel sur bases de connaissances dynamiques"],
      problemsRaised: ["Frame Problem", "Explosion combinatoire des axiomes de cadre"],
      tags: ["calcul des situations", "fluents", "frame problem", "dynamique"],
      keyPapers: [{ title: "Some Philosophical Problems from the Standpoint of Artificial Intelligence", authors: "McCarthy, Hayes", year: 1969, url: "https://www.aaai.org/Papers/Workshops/1998/WS-98-24/WS98-24-004.pdf" }]
    },
    {
      id: "shrdlu",
      label: "SHRDLU (Winograd)",
      type: "Architecture symbolique",
      period: [1968, 1970],
      year: 1970,
      authors: ["Terry Winograd"],
      description: "SHRDLU (1968-1970, MIT) : compréhension du langage naturel dans un monde de blocs simulé. Mémoire hybride : assertions logiques + procédures actives. Illustre le brittleness problem.",
      problemsSolved: ["Intégration langage naturel + raisonnement spatial + mémoire d'état"],
      problemsRaised: ["Brittleness problem", "Le succès dans un microworld ne scale pas"],
      tags: ["langage naturel", "monde de blocs", "hybride logique/procédural"],
      keyPapers: [{ title: "Understanding Natural Language", authors: "Winograd, T.", year: 1972, url: "https://en.wikipedia.org/wiki/SHRDLU" }]
    },
    {
      id: "frames-minsky",
      label: "Frames de Minsky",
      type: "Architecture symbolique",
      period: [1974, 1974],
      year: 1974,
      authors: ["Marvin Minsky"],
      description: "A Framework for Representing Knowledge (MIT AI Memo 306, 1974) : structures représentant des situations stéréotypées avec slots, valeurs par défaut, procédures if-added/if-needed et héritage. Base conceptuelle des logiques de description et de la POO.",
      problemsSolved: ["Représentation compacte des connaissances typiques", "Default reasoning intégré"],
      problemsRaised: ["Sémantique de l'héritage avec exceptions mal définie", "Conflits d'héritage multiple"],
      tags: ["frames", "slots", "valeurs par défaut", "héritage", "default reasoning"],
      keyPapers: [{ title: "A Framework for Representing Knowledge", authors: "Minsky, M.", year: 1974, url: "https://web.media.mit.edu/~minsky/papers/Frames/frames.html" }]
    },
    {
      id: "scripts-schank",
      label: "Scripts (Schank & Abelson)",
      type: "Architecture symbolique",
      period: [1975, 1977],
      year: 1977,
      authors: ["Roger Schank", "Robert Abelson"],
      description: "Scripts, Plans, Goals and Understanding (1977) : structures représentant des séquences stéréotypées d'événements. Permet l'inférence des événements implicites. Base de la mémoire épisodique computationnelle.",
      problemsSolved: ["Représentation des connaissances procédurales et contextuelles", "Première théorie de la mémoire épisodique structurée"],
      problemsRaised: ["Acquisition manuelle et coûteuse", "Difficulté à gérer les déviations du script standard"],
      tags: ["scripts", "mémoire épisodique", "scénario", "inférence narrative"],
      keyPapers: [{ title: "Scripts, Plans, Goals and Understanding", authors: "Schank, Abelson", year: 1977, url: "https://www.routledge.com/Scripts-Plans-Goals-and-Understanding-An-Inquiry-into-Human-Knowledge/Schank-Abelson/p/book/9780898591385" }]
    }
  ],

  edges: [
    { id: "e-turing-logic",       from: "turing-computability", to: "logic-theorist",    type: "Evolution",   label: "premier programme IA" },
    { id: "e-frege-advice",        from: "frege-begriffsschrift", to: "advice-taker",     type: "Evolution",   label: "base de connaissances FOL" },
    { id: "e-logic-gps",          from: "logic-theorist",       to: "gps",              type: "Evolution",   label: "résolution de problèmes" },
    { id: "e-frege-resolution",    from: "frege-begriffsschrift", to: "resolution-robinson", type: "Evolution", label: "inférence automatique" },
    { id: "e-advice-semantic",     from: "advice-taker",         to: "semantic-networks", type: "Inspiration", label: "graphes de concepts" },
    { id: "e-gps-situation",       from: "gps",                  to: "situation-calculus", type: "Evolution",  label: "monde dynamique" },
    { id: "e-semantic-shrdlu",     from: "semantic-networks",    to: "shrdlu",            type: "Application", label: "NLU" },
    { id: "e-semantic-frames",     from: "semantic-networks",    to: "frames-minsky",     type: "Evolution",   label: "structures typées" },
    { id: "e-frames-scripts",      from: "frames-minsky",        to: "scripts-schank",    type: "Evolution",   label: "mémoire épisodique" }
  ]
};
