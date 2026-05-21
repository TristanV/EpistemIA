// ============================================================
// resources/foundations/cognitive.js
// ÉPOQUE 1 & 2 : Fondations cognitives, logiques et connexionnistes
// (~100 000 av. J.-C. — 1955)
// Schéma : export const TOPIC = { meta, nodes, edges }
// ============================================================

export const TOPIC = {

  meta: {
    title: "Fondations cognitives et connexionnistes",
    theme: "foundations",
    epoch: "~100 000 av. J.-C. — 1955",
    description: "Des premières externalisations symboliques de la pensée humaine aux formalismes logiques et aux premiers modèles neuronaux."
  },

  nodes: [

    {
      id: "cave-art",
      label: "Représentation rupestre",
      type: "Fondation cognitive",
      period: [-100000, -3200],
      year: -40000,
      authors: ["Homo sapiens", "Artistes paléolithiques"],
      description: "Premières externalisations symboliques de la pensée : peintures pariétales (Chauvet ~36\u202f000 av.\u202fJ.-C., Lascaux ~17\u202f000 av.\u202fJ.-C.). Représentation de l'information par ressemblance iconique avec l'objet. Miyagawa, Lesure & Nóbrega (2018) proposent l'hypothèse CMIT : les peintures opèrent un transfert cross-modal de signaux acoustiques rituels vers des représentations visuelles.",
      problemsSolved: ["Externalisation de la mémoire collective", "Partage d'un modèle commun du monde animé", "Codification des rituels et croyances"],
      problemsRaised: ["Opacité du décodage sans méta-langage", "Non-portabilité des supports (parois)", "Sémiose non normalisée — chaque grotte est un dialecte visuel"],
      tags: ["sémiose", "icône", "mémoire collective", "externalisation", "symbolisme"],
      keyPapers: [
        { title: "Cross-Modality Information Transfer (CMIT)", authors: "Miyagawa, Lesure, Nóbrega", year: 2018, url: "https://doi.org/10.3389/fpsyg.2018.00025" }
      ]
    },

    {
      id: "mesopotamian-tokens",
      label: "Tokens mésopotamiens",
      type: "Fondation cognitive",
      period: [-8000, -3200],
      year: -3200,
      authors: ["Sumériens", "Denise Schmandt-Besserat"],
      description: "Jetons d'argile de formes variées utilisés entre 8\u202f000 et 3\u202f200 av.\u202fJ.-C. pour comptabiliser les biens. La transition token \u2192 pictogramme \u2192 idéogramme \u2192 phonogramme inaugure la chaîne de montée en abstraction. Première représentation discrète et arbitraire d'objets du monde réel.",
      problemsSolved: ["Comptabilité administrative \u00e0 grande échelle", "Première notation abstraite et portable", "Séparation signe/référent"],
      problemsRaised: ["Nécessité d'un système d'interprétation partagé", "Perte de la ressemblance iconique"],
      tags: ["notation abstraite", "arbitraire du signe", "administration", "token", "Mésopotamie"],
      keyPapers: [
        { title: "The Evolution of Writing", authors: "Schmandt-Besserat, D.", year: 1978, url: "https://sites.utexas.edu/dsb/tokens/the-evolution-of-writing/" }
      ]
    },

    {
      id: "aristotle-categories",
      label: "Catégories d'Aristote",
      type: "Fondation logique",
      period: [-350, -350],
      year: -350,
      authors: ["Aristote"],
      description: "Les Catégories (~350 av.\u202fJ.-C.) établissent la première ontologie formelle occidentale : 10 catégories irréductibles. Distinction entre 'dit-de' (prédicats universels) et 'présent-dans' (propriétés accidentelles) — préfigure la distinction classe/instance des ontologies informatiques. La logique syllogistique constitue le premier moteur d'inférence formalisé.",
      problemsSolved: ["Classification systématique du monde", "Fondement du raisonnement déductif formel", "Grammaire universelle de la prédication"],
      problemsRaised: ["Expressivité limitée (pas de quantificateurs multiples)", "Monde fermé implicite", "Impossibilité de représenter l'incertitude"],
      tags: ["ontologie", "catégories", "syllogisme", "déduction", "classification"],
      keyPapers: [
        { title: "Aristotle's Categories", authors: "Aristote", year: -350, url: "https://plato.stanford.edu/entries/aristotle-categories/" }
      ]
    },

    {
      id: "llull-ars-magna",
      label: "Ars Magna de Llull",
      type: "Fondation cognitive",
      period: [1274, 1316],
      year: 1308,
      authors: ["Ramon Llull"],
      description: "L'Ars generalis ultima (1308) : disques concentriques rotatifs portant des symboles de concepts primitifs. La rotation génère toutes les combinaisons de propositions — premier système combinatoire de représentation des connaissances. Anticipe les primitives sémantiques de Leibniz et la notion de notation universelle.",
      problemsSolved: ["Mécanisation partielle du raisonnement déductif", "Combinatoire exhaustive sur un vocabulaire clos"],
      problemsRaised: ["Système fermé : vocabulaire figé d'origine théologique", "Pas de procédure d'apprentissage"],
      tags: ["combinatoire", "primitives sémantiques", "inférence mécanique", "notation universelle"],
      keyPapers: [
        { title: "Ramon Llull", authors: "Bonner, A.", year: 1985, url: "https://plato.stanford.edu/entries/llull/" }
      ]
    },

    {
      id: "leibniz-characteristica",
      label: "Characteristica Universalis (Leibniz)",
      type: "Fondation logique",
      period: [1679, 1686],
      year: 1686,
      authors: ["Gottfried Wilhelm Leibniz"],
      description: "Deux composantes : (1) Characteristica Universalis — langue formelle universelle ; (2) Calculus Ratiocinator — mécanisme de calcul automatique sur ces symboles. Anticipe de deux siècles l'algèbre booléenne et de trois siècles les ontologies OWL. Le problème des primitives universelles réapparaîtra comme symbol grounding problem (Harnad, 1990).",
      problemsSolved: ["Vision d'un langage formel universel", "Raisonnement comme calcul sur symboles"],
      problemsRaised: ["Impossibilité de définir les primitives sémantiques universelles", "Circularité potentielle des définitions"],
      tags: ["primitives sémantiques", "langage universel", "calcul logique", "symbole"],
      keyPapers: [
        { title: "Leibniz on the Universal Characteristic", authors: "Swoyer, C.", year: 1995, url: "https://plato.stanford.edu/entries/leibniz-logic-influence/" }
      ]
    },

    {
      id: "boole-algebra",
      label: "Algèbre de Boole",
      type: "Fondation logique",
      period: [1847, 1854],
      year: 1854,
      authors: ["George Boole"],
      description: "The Mathematical Analysis of Logic (1847) et An Investigation of the Laws of Thought (1854) : première algébrisation de la logique. Les propositions logiques deviennent des variables avec AND, OR, NOT. Shannon (1937) montrera que les circuits électroniques implémentent cette algèbre, posant le fondement de l'informatique numérique.",
      problemsSolved: ["Réduction du syllogisme \u00e0 une résolution d'équation algébrique", "Fondement de l'informatique numérique (via Shannon 1937)"],
      problemsRaised: ["Inexpressivité : pas de quantificateurs \u2200 \u2203"],
      tags: ["algèbre", "logique propositionnelle", "calcul", "formalisation", "Shannon"],
      keyPapers: [
        { title: "An Investigation of the Laws of Thought", authors: "Boole, G.", year: 1854, url: "https://archive.org/details/investigationofl00boolrich" }
      ]
    },

    {
      id: "frege-begriffsschrift",
      label: "Logique du 1er ordre (Frege)",
      type: "Fondation logique",
      period: [1879, 1892],
      year: 1879,
      authors: ["Gottlob Frege"],
      description: "Begriffsschrift (1879) inaugure la logique du premier ordre moderne : quantificateurs \u2200 et \u2203, distinction fonction/argument, premier système axiomatique complet. Programme logiciste poursuivi dans les Principia Mathematica (Russell & Whitehead, 1910-1913). Base de toute l'IA symbolique.",
      problemsSolved: ["Expressivité des généralisations complexes", "Fondement formel de l'arithmétique"],
      problemsRaised: ["Paradoxe de Russell (1901)", "Incomplétude de Gödel (1931)"],
      tags: ["logique du premier ordre", "quantificateurs", "formalisme", "sens/référence"],
      keyPapers: [
        { title: "Begriffsschrift", authors: "Frege, G.", year: 1879, url: "https://plato.stanford.edu/entries/frege/" }
      ]
    },

    {
      id: "turing-computability",
      label: "Calculabilité de Turing",
      type: "Fondation logique",
      period: [1936, 1936],
      year: 1936,
      authors: ["Alan Turing"],
      description: "On Computable Numbers (1936) définit la Machine de Turing comme modèle universel de tout processus de calcul effectif. La thèse de Church-Turing établit l'équivalence entre calculabilité, \u03bb-définissabilité et récursivité générale. Définit les frontières de ce qui peut être représenté et calculé.",
      problemsSolved: ["Définition formelle du calcul effectif", "Frontières de la calculabilité", "Modèle universel d'ordinateur"],
      problemsRaised: ["Problèmes indécidables inaccessibles \u00e0 toute IA"],
      tags: ["calculabilité", "machine de Turing", "indécidabilité", "Church-Turing"],
      keyPapers: [
        { title: "On Computable Numbers", authors: "Turing, A.", year: 1936, url: "https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf" }
      ]
    },

    {
      id: "mcculloch-pitts",
      label: "Neurone formel (McCulloch-Pitts)",
      type: "Architecture connexionniste",
      period: [1943, 1943],
      year: 1943,
      authors: ["Warren McCulloch", "Walter Pitts"],
      description: "A Logical Calculus of the Ideas Immanent in Nervous Activity (1943) : premier modèle mathématique du neurone biologique comme fonction seuil. Tout réseau de neurones formels peut calculer toute fonction logique — première unification formelle de la logique symbolique et des réseaux neuronaux.",
      problemsSolved: ["Substrat unifié pour le calcul et la représentation neuronale", "Lien formel logique/réseau neuronal"],
      problemsRaised: ["Aucun mécanisme d'apprentissage des poids", "Aucune théorie de la mémoire long terme"],
      tags: ["neurone formel", "seuil", "logique neuronale", "connexionnisme"],
      keyPapers: [
        { title: "A Logical Calculus of the Ideas Immanent in Nervous Activity", authors: "McCulloch, W.S. & Pitts, W.", year: 1943, url: "https://doi.org/10.1007/BF02478259" }
      ]
    },

    {
      id: "hebb-rule",
      label: "R\u00e8gle de Hebb",
      type: "Architecture connexionniste",
      period: [1949, 1949],
      year: 1949,
      authors: ["Donald Hebb"],
      description: "The Organization of Behavior (1949) : \u00abDes neurones qui s'activent ensemble se connectent ensemble.\u00bb \u0394w\u1d35\u2c7c = \u03b7\u00b7x\u1d35\u00b7x\u2c7c. Premi\u00e8re th\u00e9orie coh\u00e9rente de la formation des traces mn\u00e9siques dans un r\u00e9seau. Fondement de l'apprentissage hebbien non supervis\u00e9.",
      problemsSolved: ["Premier m\u00e9canisme d'apprentissage non supervis\u00e9", "Lien formel entre co-activation et renforcement mn\u00e9sique"],
      problemsRaised: ["Instabilit\u00e9 : les poids ne font que cro\u00eetre", "Pas de m\u00e9canisme d'oubli s\u00e9lectif"],
      tags: ["plasticit\u00e9 synaptique", "apprentissage hebbien", "m\u00e9moire associative"],
      keyPapers: [
        { title: "The Organization of Behavior", authors: "Hebb, D.O.", year: 1949, url: "https://archive.org/details/organizationofbe0000hebb" }
      ]
    },

    {
      id: "shannon-information",
      label: "Th\u00e9orie de l'information (Shannon)",
      type: "Fondation logique",
      period: [1948, 1948],
      year: 1948,
      authors: ["Claude Shannon"],
      description: "A Mathematical Theory of Communication (1948) : H = -\u03a3 p\u1d35 log\u2082(p\u1d35). Mesure quantitative de l'information, ind\u00e9pendante de la signification. Les LLMs optimisent une entropie crois\u00e9e sur des tokens, exactement cette abstraction.",
      problemsSolved: ["Quantification formelle de l'information", "Fondement de la compression et du codage"],
      problemsRaised: ["La signification est hors de port\u00e9e de la th\u00e9orie", "La v\u00e9rit\u00e9 factuelle \u2260 probabilit\u00e9"],
      tags: ["entropie", "information", "compression", "codage", "probabilit\u00e9"],
      keyPapers: [
        { title: "A Mathematical Theory of Communication", authors: "Shannon, C.E.", year: 1948, url: "https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf" }
      ]
    }

  ],

  edges: [
    { id: "e-cave-mesop",    from: "cave-art",             to: "mesopotamian-tokens",    type: "Evolution",   label: "Abstraction du signe" },
    { id: "e-mesop-aristot", from: "mesopotamian-tokens",  to: "aristotle-categories",   type: "Inspiration", label: "Cat\u00e9gorisation du monde" },
    { id: "e-aristot-llull", from: "aristotle-categories", to: "llull-ars-magna",         type: "Evolution",   label: "Combinatoire des cat\u00e9gories" },
    { id: "e-llull-leibniz", from: "llull-ars-magna",      to: "leibniz-characteristica", type: "Evolution",   label: "Calcul universel" },
    { id: "e-leibniz-boole", from: "leibniz-characteristica", to: "boole-algebra",        type: "Evolution",   label: "Alg\u00e9brisation" },
    { id: "e-boole-frege",   from: "boole-algebra",        to: "frege-begriffsschrift",   type: "Evolution",   label: "Logique du 1er ordre" },
    { id: "e-frege-turing",  from: "frege-begriffsschrift",to: "turing-computability",    type: "Evolution",   label: "Calculabilit\u00e9 formelle" },
    { id: "e-turing-mcp",    from: "turing-computability", to: "mcculloch-pitts",         type: "Inspiration", label: "Mod\u00e8le computationnel" },
    { id: "e-mcp-hebb",      from: "mcculloch-pitts",      to: "hebb-rule",               type: "Evolution",   label: "Apprentissage synaptique" },
    { id: "e-boole-shannon", from: "boole-algebra",        to: "shannon-information",     type: "Inspiration", label: "Alg\u00e8bre des circuits" }
  ]

};
