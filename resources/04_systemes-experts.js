// ============================================================
// resources/04_systemes-experts.js
// Thématique : Systèmes experts et logiques non-monotones (1965-1995)
// ============================================================

export const TOPIC = {
  meta: {
    title: "Systèmes experts et logiques non-monotones",
    theme: "expert-systems",
    order: 4,
    description: "DENDRAL, MYCIN, OPS5/Rete, logiques non-monotones, logiques de description."
  },

  nodes: [
    {
      id: "dendral",
      label: "DENDRAL",
      type: "Architecture symbolique",
      period: [1965, 1983],
      year: 1965,
      authors: ["Edward Feigenbaum", "Bruce Buchanan", "Joshua Lederberg"],
      description: "DENDRAL (Stanford, 1965-1983) : premier système expert opérationnel. Base de connaissances séparée du code de contrôle. Introduit Meta-DENDRAL (apprentissage de règles) et le knowledge acquisition bottleneck.",
      problemsSolved: ["Expertise de niveau humain dans un domaine étroit", "Séparation base de connaissances / moteur de contrôle"],
      problemsRaised: ["Knowledge acquisition bottleneck", "Fragilité hors du domaine d'expertise"],
      tags: ["système expert", "chimie", "règles de production", "domaine étroit"],
      keyPapers: [{ title: "DENDRAL: A Case Study", authors: "Buchanan, Feigenbaum", year: 1978, url: "https://www.sciencedirect.com/science/article/pii/0004370278900237" }]
    },
    {
      id: "mycin",
      label: "MYCIN",
      type: "Architecture symbolique",
      period: [1972, 1976],
      year: 1974,
      authors: ["Edward Shortliffe", "Bruce Buchanan"],
      description: "MYCIN (Stanford, 1972-1976) : ~600 règles avec facteurs de certitude CF ∈ [-1,1], chaînage arrière. Performance comparable aux médecins experts. La coquille EMYCIN généralise l'architecture — concept de shell.",
      problemsSolved: ["Raisonnement sous incertitude", "Transparence du raisonnement / explicabilité"],
      problemsRaised: ["Facteurs de certitude non conformes aux axiomes de probabilité", "Incapacité d'apprentissage automatique"],
      tags: ["système expert médical", "facteurs de certitude", "backward chaining", "EMYCIN"],
      keyPapers: [{ title: "Computer-Based Medical Consultations: MYCIN", authors: "Shortliffe, E.H.", year: 1976, url: "https://www.sciencedirect.com/book/9780444001962" }]
    },
    {
      id: "ops5-rete",
      label: "OPS5 / Algorithme Rete",
      type: "Architecture symbolique",
      period: [1979, 1982],
      year: 1982,
      authors: ["Charles Forgy"],
      description: "OPS5 (1979) et l'algorithme Rete (Forgy, 1982) : mémoire de travail + règles Condition-Action. Rete compile le réseau de conditions, réduisant la complexité de O(R·W^P) à ~O(R+W^P/R). Base de CLIPS, JESS, Drools.",
      problemsSolved: ["Architecture efficace pour la mémoire de production", "Optimisation du pattern-matching"],
      problemsRaised: ["Explosion combinatoire lors du conflit de règles"],
      tags: ["règles de production", "mémoire de travail", "Rete", "pattern matching"],
      keyPapers: [{ title: "Rete: A Fast Algorithm", authors: "Forgy, C.L.", year: 1982, url: "https://doi.org/10.1016/0004-3702(82)90020-0" }]
    },
    {
      id: "truth-maintenance",
      label: "TMS / Truth Maintenance (Doyle)",
      type: "Logique non-monotone",
      period: [1979, 1986],
      year: 1979,
      authors: ["Jon Doyle", "Johan de Kleer"],
      description: "JTMS (Doyle, 1979) : chaque croyance est annotée de ses justifications. ATMS (de Kleer, 1986) : raisonnement sur plusieurs contextes cohérents simultanément. Gestion efficace de la révision locale des croyances.",
      problemsSolved: ["Révision locale des croyances", "Raisonnement multi-contextes (ATMS)"],
      problemsRaised: ["Complexité mémoire quadratique", "Circularité dans les justifications"],
      tags: ["révision des croyances", "TMS", "ATMS", "rétractation"],
      keyPapers: [{ title: "A Truth Maintenance System", authors: "Doyle, J.", year: 1979, url: "https://doi.org/10.1016/0004-3702(79)90008-0" }]
    },
    {
      id: "default-logic",
      label: "Default Logic (Reiter)",
      type: "Logique non-monotone",
      period: [1980, 1980],
      year: 1980,
      authors: ["Raymond Reiter"],
      description: "Default Logic (1980) : règles par défaut (α:β₁,...,βₙ)/γ. Si α connu et βᵢ consistent, conclure γ. Non-monotonie : ajouter des faits peut invalider des conclusions. Π₂P-complet.",
      problemsSolved: ["Représentation du raisonnement par défaut", "Règle d'inertie : les fluents persistent par défaut"],
      problemsRaised: ["Multiplicité des extensions possibles", "Complexité Π₂P-complet"],
      tags: ["logique par défaut", "non-monotonie", "extensions", "inertie"],
      keyPapers: [{ title: "A Logic for Default Reasoning", authors: "Reiter, R.", year: 1980, url: "https://doi.org/10.1016/0004-3702(80)90014-4" }]
    },
    {
      id: "circumscription",
      label: "Circonscription (McCarthy)",
      type: "Logique non-monotone",
      period: [1980, 1986],
      year: 1980,
      authors: ["John McCarthy"],
      description: "Circumscription (1980) : minimiser l'extension des prédicats anormaux. Résout le Frame Problem : par défaut, rien ne change. Variantes : circonscription prioritaire, variable. Formalise le Closed World Assumption (CWA).",
      problemsSolved: ["Résolution formelle du Frame Problem", "Formalisation du Closed World Assumption"],
      problemsRaised: ["Second ordre : calcul difficile", "Interaction complexe entre plusieurs circonscriptions"],
      tags: ["circonscription", "frame problem", "CWA", "second ordre"],
      keyPapers: [{ title: "Circumscription — A Form of Non-Monotonic Reasoning", authors: "McCarthy, J.", year: 1980, url: "https://doi.org/10.1016/0004-3702(80)90011-9" }]
    },
    {
      id: "description-logics",
      label: "Logiques de description (DL)",
      type: "Ontologie/Web sémantique",
      period: [1984, 1991],
      year: 1985,
      authors: ["Ronald Brachman", "Hector Levesque", "Franconi"],
      description: "KL-ONE (Brachman & Schmolze, 1985) puis KL-TWO, LOOM, CLASSIC : fragment décidable de la logique du premier ordre. Concepts (classes), rôles (relations), individus. Fondement théorique des ontologies OWL2.",
      problemsSolved: ["Fragment décidable de la logique du premier ordre", "Classification automatique des concepts"],
      problemsRaised: ["Compromis expressivité/décidabilité", "Monde ouvert (OWA) difficile à gérer pour les développeurs"],
      tags: ["logiques de description", "KL-ONE", "OWL", "décidabilité", "ontologie"],
      keyPapers: [{ title: "An Overview of the KL-ONE Knowledge Representation System", authors: "Brachman, Schmolze", year: 1985, url: "https://doi.org/10.1207/s15516709cog0902_1" }]
    },
    {
      id: "prolog",
      label: "Prolog",
      type: "Architecture symbolique",
      period: [1972, 1980],
      year: 1972,
      authors: ["Alain Colmerauer", "Philippe Roussel", "Robert Kowalski"],
      description: "Prolog (1972, Marseille) : premier langage de programmation logique. Clauses de Horn + résolution SLD + unification. Identificateur de pattern-matching, backtracking automatique. Moteur d'inférence et base de connaissances en un.",
      problemsSolved: ["Langage déclaratif pur pour la représentation des connaissances", "Inférence automatique par résolution SLD"],
      problemsRaised: ["Négation par échec non conforme à la logique classique", "Problèmes de performance sur grandes bases"],
      tags: ["Prolog", "programmation logique", "clauses de Horn", "backtracking"],
      keyPapers: [{ title: "Programming in Prolog", authors: "Clocksin, W.F., Mellish, C.S.", year: 1981, url: "https://link.springer.com/book/10.1007/978-3-642-96868-6" }]
    }
  ],

  edges: [
    { id: "e-advice-dendral",       from: "advice-taker",       to: "dendral",          type: "Evolution",   label: "premier système expert" },
    { id: "e-dendral-mycin",        from: "dendral",            to: "mycin",            type: "Evolution",   label: "raisonnement incertain" },
    { id: "e-mycin-ops5",           from: "mycin",              to: "ops5-rete",        type: "Evolution",   label: "optimisation des règles" },
    { id: "e-situation-tms",        from: "situation-calculus", to: "truth-maintenance", type: "Evolution",  label: "révision des croyances" },
    { id: "e-situation-default",    from: "situation-calculus", to: "default-logic",    type: "Evolution",   label: "inertie par défaut" },
    { id: "e-situation-circum",     from: "situation-calculus", to: "circumscription",  type: "Evolution",   label: "frame problem formel" },
    { id: "e-frames-dl",            from: "frames-minsky",      to: "description-logics", type: "Evolution", label: "formalisation DL" },
    { id: "e-resolution-prolog",    from: "resolution-robinson", to: "prolog",          type: "Application", label: "programmation logique" }
  ]
};
