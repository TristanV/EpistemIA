// ============================================================
// resources/01_fondations-cognitives.js
// Thématique : Fondations cognitives et philosophiques
// Époques 1 (pré-histoire → 1936)
// ============================================================

export const TOPIC = {
  meta: {
    title: "Fondations cognitives et philosophiques",
    theme: "foundations",
    order: 1,
    description: "Des premières externalisations symboliques jusqu'aux fondements logiques de la calculabilité."
  },

  nodes: [
    {
      id: "cave-art",
      label: "Représentation rupestre",
      type: "Fondation cognitive",
      period: [-100000, -3200],
      year: -40000,
      authors: ["Homo sapiens", "Artistes paléolithiques"],
      description: "Premières externalisations symboliques de la pensée : peintures pariétales (Chauvet ~36 000 av. J.-C., Lascaux ~17 000 av. J.-C.). Représentation de l'information par ressemblance iconique avec l'objet. Miyagawa, Lesure & Nóbrega (2018) proposent l'hypothèse CMIT : les peintures opèrent un transfert cross-modal de signaux acoustiques rituels vers des représentations visuelles.",
      problemsSolved: ["Externalisation de la mémoire collective", "Partage d'un modèle commun du monde animé", "Codification des rituels et croyances"],
      problemsRaised: ["Opacité du décodage sans méta-langage", "Non-portabilité des supports (parois)", "Sémiose non normalisée"],
      tags: ["sémiose", "icône", "mémoire collective", "externalisation", "symbolisme"],
      keyPapers: [{ title: "Cross-Modality Information Transfer (CMIT)", authors: "Miyagawa, Lesure, Nóbrega", year: 2018, url: "https://doi.org/10.3389/fpsyg.2018.00025" }]
    },
    {
      id: "mesopotamian-tokens",
      label: "Tokens mésopotamiens",
      type: "Fondation cognitive",
      period: [-8000, -3200],
      year: -3200,
      authors: ["Sumériens", "Denise Schmandt-Besserat"],
      description: "Jetons d'argile utilisés entre 8 000 et 3 200 av. J.-C. pour comptabiliser les biens. La transition token → pictogramme → idéogramme inaugure la chaîne de montée en abstraction. Première représentation discrète et arbitraire d'objets du monde réel.",
      problemsSolved: ["Comptabilité administrative à grande échelle", "Première notation abstraite et portable", "Séparation signe/référent"],
      problemsRaised: ["Nécessité d'un système d'interprétation partagé", "Perte de la ressemblance iconique"],
      tags: ["notation abstraite", "arbitraire du signe", "administration", "token", "Mésopotamie"],
      keyPapers: [{ title: "The Evolution of Writing", authors: "Schmandt-Besserat, D.", year: 1978, url: "https://sites.utexas.edu/dsb/tokens/the-evolution-of-writing/" }]
    },
    {
      id: "aristotle-categories",
      label: "Catégories d'Aristote",
      type: "Fondation logique",
      period: [-350, -350],
      year: -350,
      authors: ["Aristote"],
      description: "Les Catégories (~350 av. J.-C.) établissent la première ontologie formelle occidentale : 10 catégories irréductibles (substance, quantité, qualité, relation…). La logique syllogistique constitue le premier moteur d'inférence formalisé.",
      problemsSolved: ["Classification systématique du monde", "Fondement du raisonnement déductif formel", "Grammaire universelle de la prédication"],
      problemsRaised: ["Expressivité limitée (pas de quantificateurs multiples)", "Monde fermé implicite", "Impossibilité de représenter l'incertitude"],
      tags: ["ontologie", "catégories", "syllogisme", "déduction", "classification"],
      keyPapers: [{ title: "Aristotle's Categories", authors: "Aristote", year: -350, url: "https://plato.stanford.edu/entries/aristotle-categories/" }]
    },
    {
      id: "llull-ars-magna",
      label: "Ars Magna de Llull",
      type: "Fondation cognitive",
      period: [1274, 1316],
      year: 1308,
      authors: ["Ramon Llull"],
      description: "L'Ars generalis ultima (1308) : disques concentriques rotatifs portant des symboles de concepts primitifs. Premier système combinatoire de représentation des connaissances. Anticipe les primitives sémantiques de Leibniz et la notion de notation universelle.",
      problemsSolved: ["Mécanisation partielle du raisonnement déductif", "Combinatoire exhaustive sur un vocabulaire clos"],
      problemsRaised: ["Système fermé : vocabulaire figé d'origine théologique", "Pas de procédure d'apprentissage"],
      tags: ["combinatoire", "primitives sémantiques", "inférence mécanique", "notation universelle"],
      keyPapers: [{ title: "Ramon Llull", authors: "Bonner, A.", year: 1985, url: "https://plato.stanford.edu/entries/llull/" }]
    },
    {
      id: "leibniz-characteristica",
      label: "Characteristica Universalis",
      type: "Fondation logique",
      period: [1679, 1686],
      year: 1686,
      authors: ["Gottfried Wilhelm Leibniz"],
      description: "Langue formelle universelle + Calculus Ratiocinator : mécanisme de calcul automatique sur symboles pour déduire des conséquences logiques. Anticipe de deux siècles l'algèbre booléenne et de trois siècles les ontologies OWL.",
      problemsSolved: ["Vision d'un langage formel universel", "Raisonnement comme calcul sur symboles"],
      problemsRaised: ["Impossibilité de définir les primitives sémantiques universelles", "Symbol grounding problem (Harnad, 1990)"],
      tags: ["primitives sémantiques", "langage universel", "calcul logique", "symbole"],
      keyPapers: [{ title: "Leibniz on the Universal Characteristic", authors: "Swoyer, C.", year: 1995, url: "https://plato.stanford.edu/entries/leibniz-logic-influence/" }]
    },
    {
      id: "boole-algebra",
      label: "Algèbre de Boole",
      type: "Fondation logique",
      period: [1847, 1854],
      year: 1854,
      authors: ["George Boole"],
      description: "The Mathematical Analysis of Logic (1847) et An Investigation of the Laws of Thought (1854) : première algébrisation de la logique. Shannon (1937) montrera que les circuits électroniques implémentent cette algèbre.",
      problemsSolved: ["Réduction du syllogisme à une résolution algébrique", "Fondement de l'informatique numérique (via Shannon 1937)"],
      problemsRaised: ["Inexpressivité : pas de quantificateurs ∀ ∃"],
      tags: ["algèbre", "logique propositionnelle", "calcul", "formalisation", "Shannon"],
      keyPapers: [{ title: "An Investigation of the Laws of Thought", authors: "Boole, G.", year: 1854, url: "https://archive.org/details/investigationofl00boolrich" }]
    },
    {
      id: "frege-begriffsschrift",
      label: "Logique du 1er ordre (Frege)",
      type: "Fondation logique",
      period: [1879, 1892],
      year: 1879,
      authors: ["Gottlob Frege"],
      description: "Begriffsschrift (1879) : quantificateurs ∀ et ∃, distinction fonction/argument, premier système axiomatique complet. Base de toute l'IA symbolique.",
      problemsSolved: ["Expressivité des généralisations complexes", "Formalisation rigoureuse de la déduction"],
      problemsRaised: ["Paradoxe de Russell (1901)", "Incomplétude de Gödel (1931)"],
      tags: ["logique du premier ordre", "quantificateurs", "formalisme", "Principia Mathematica"],
      keyPapers: [{ title: "Begriffsschrift", authors: "Frege, G.", year: 1879, url: "https://plato.stanford.edu/entries/frege/" }]
    },
    {
      id: "turing-computability",
      label: "Calculabilité de Turing",
      type: "Fondation logique",
      period: [1936, 1936],
      year: 1936,
      authors: ["Alan Turing"],
      description: "On Computable Numbers (1936) : Machine de Turing comme modèle universel de tout processus de calcul effectif. La thèse de Church-Turing établit les frontières de ce qui peut être calculé.",
      problemsSolved: ["Définition formelle du calcul effectif", "Frontières de la calculabilité"],
      problemsRaised: ["Problèmes indécidables (halting problem)", "Complexité computationnelle P/NP"],
      tags: ["calculabilité", "machine de Turing", "indécidabilité", "Church-Turing"],
      keyPapers: [{ title: "On Computable Numbers", authors: "Turing, A.", year: 1936, url: "https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf" }]
    }
  ],

  edges: [
    { id: "e-cave-tokens",    from: "cave-art",              to: "mesopotamian-tokens",    type: "Evolution",   label: "abstraction du signe" },
    { id: "e-tokens-aristote", from: "mesopotamian-tokens",   to: "aristotle-categories",   type: "Inspiration", label: "classification formelle" },
    { id: "e-aristote-llull",  from: "aristotle-categories",  to: "llull-ars-magna",         type: "Inspiration", label: "logique combinatoire" },
    { id: "e-llull-leibniz",   from: "llull-ars-magna",       to: "leibniz-characteristica", type: "Evolution",   label: "primitives universelles" },
    { id: "e-leibniz-boole",   from: "leibniz-characteristica", to: "boole-algebra",          type: "Evolution",   label: "algébrisation de la logique" },
    { id: "e-boole-frege",     from: "boole-algebra",         to: "frege-begriffsschrift",   type: "Evolution",   label: "logique du 1er ordre" },
    { id: "e-frege-turing",    from: "frege-begriffsschrift", to: "turing-computability",     type: "Evolution",   label: "frontières du calcul" }
  ]
};
