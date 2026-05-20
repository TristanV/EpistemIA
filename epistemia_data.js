// ============================================================
// graph-data.js — Knowledge Representation Graph
// Version 2.0 — Données exhaustives issues des documents :
//   • "Représentation des Connaissances : De la Caverne à la Société de l'IA"
//   • "Ingénierie des systèmes de mémoire pour l'IA avant les LLMs"
// Structure extensible : ajouter des nœuds dans nodes[], des arcs dans edges[]
// ============================================================

const GRAPH_DATA = {

  // ─── MÉTADONNÉES DU GRAPHE ────────────────────────────────
  meta: {
    title: "Graphe des Représentations de Connaissances",
    version: "2.0",
    created: "2026-05-17",
    description: "Graphe chronologique des approches de représentation des connaissances, des origines cognitives préhistoriques aux world models de 2025-2026.",
    sources: [
      "Représentation des Connaissances : De la Caverne à la Société de l'IA (2026)",
      "Ingénierie des systèmes de mémoire pour l'IA avant les LLMs (2026)"
    ]
  },

  // ─── TYPES DE NŒUDS (couleur, icône, description) ─────────
  nodeTypes: {
    "Fondation cognitive":     { color: "#8B6914", icon: "🏛️", label: "Représentations pré-computationnelles, cognitives ou philosophiques" },
    "Fondation logique":       { color: "#1a6b8a", icon: "⊢",  label: "Formalisation logique et mathématique du raisonnement" },
    "Architecture symbolique": { color: "#2d7a2d", icon: "🌳", label: "IA symbolique : règles, frames, réseaux sémantiques" },
    "Logique non-monotone":    { color: "#6b1a7a", icon: "⊘",  label: "Gestion de l'incertitude, révision des croyances, raisonnement par défaut" },
    "Architecture cognitive":  { color: "#7a3d1a", icon: "🧠", label: "Modèles cognitifs unifiés (SOAR, ACT-R, CLARION)" },
    "Représentation vectorielle":{ color: "#1a5c8a", icon: "⃗", label: "Espaces vectoriels, LSA, embeddings distribués" },
    "Architecture connexionniste":{ color: "#8a1a2d", icon: "●", label: "Réseaux de neurones, mémoire associative, apprentissage profond" },
    "Probabiliste/Bayésien":   { color: "#5a5a1a", icon: "P",  label: "Raisonnement probabiliste, réseaux bayésiens, HMM" },
    "Ontologie/Web sémantique":{ color: "#1a7a5c", icon: "🔗", label: "Ontologies formelles, OWL, graphes de connaissances" },
    "Mémoire augmentée":       { color: "#4a1a8a", icon: "⊛",  label: "Mémoire externe différentiable, NTM, DNC, Memory Networks" },
    "Modèle contextuel":       { color: "#8a4a1a", icon: "◑",  label: "Attention, Transformer, pré-entraînement contextuel" },
    "Neuro-symbolique/World Model":{ color: "#1a1a8a", icon: "⊕", label: "Hybridation neuro-symbolique, world models, JEPA" }
  },

  // ─── TYPES D'ARCS ─────────────────────────────────────────
  edgeTypes: {
    "Evolution":     { color: "#2d7a2d", dash: "",     label: "Évolution",    description: "Amélioration directe ou généralisation" },
    "Rupture":       { color: "#c0392b", dash: "8,4",  label: "Rupture",      description: "Changement paradigmatique, abandon d'hypothèses antérieures" },
    "Integration":   { color: "#8e44ad", dash: "4,4",  label: "Intégration",  description: "Fusion ou synthèse de deux approches" },
    "Inspiration":   { color: "#e67e22", dash: "2,6",  label: "Inspiration",  description: "Influence intellectuelle indirecte" },
    "Convergence":   { color: "#1a6b8a", dash: "6,2",  label: "Convergence",  description: "Deux lignées indépendantes se rejoignent" },
    "Critique":      { color: "#c0392b", dash: "3,3",  label: "Critique",     description: "Remise en question ou réfutation" },
    "Application":   { color: "#27ae60", dash: "1,4",  label: "Application",  description: "Mise en œuvre pratique d'un formalisme" }
  },

  // ─── NŒUDS ────────────────────────────────────────────────
  nodes: [

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 1 : FONDATIONS COGNITIVES ET PHILOSOPHIQUES
    // ══════════════════════════════════════════════════════════

    {
      id: "cave-art",
      label: "Représentation rupestre",
      type: "Fondation cognitive",
      period: [-100000, -3200],
      year: -40000,
      authors: ["Homo sapiens", "Artistes paléolithiques"],
      description: "Premières externalisations symboliques de la pensée : peintures pariétales (Chauvet ~36 000 av. J.-C., Lascaux ~17 000 av. J.-C.). Représentation de l'information par ressemblance iconique avec l'objet. Miyagawa, Lesure & Nóbrega (2018) proposent l'hypothèse CMIT : les peintures opèrent un transfert cross-modal de signaux acoustiques rituels vers des représentations visuelles.",
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
      description: "Jetons d'argile de formes variées utilisés entre 8 000 et 3 200 av. J.-C. pour comptabiliser les biens. La transition token → pictogramme → idéogramme → phonogramme inaugure la chaîne de montée en abstraction : le signe remplace la chose qu'il désigne. Première représentation discrète et arbitraire d'objets du monde réel.",
      problemsSolved: ["Comptabilité administrative à grande échelle", "Première notation abstraite et portable", "Séparation signe/référent"],
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
      description: "Les Catégories (~350 av. J.-C.), premier traité de l'Organon, établissent la première ontologie formelle occidentale : 10 catégories irréductibles (substance, quantité, qualité, relation…). Distinction cruciale entre ce qui est 'dit-de' (prédicats universels) et ce qui est 'présent-dans' (propriétés accidentelles) — préfigure la distinction classe/instance des ontologies informatiques. La logique syllogistique constitue le premier moteur d'inférence formalisé.",
      problemsSolved: ["Classification systématique du monde", "Fondement du raisonnement déductif formel", "Grammaire universelle de la prédication"],
      problemsRaised: ["Expressivité limitée (pas de quantificateurs multiples)", "Monde fermé implicite", "Impossibilité de représenter l'incertitude"],
      tags: ["ontologie", "catégories", "syllogisme", "déduction", "classification", "substance"],
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
      description: "L'Ars generalis ultima (1308) : disques concentriques rotatifs portant des symboles de concepts primitifs (Bonté, Grandeur, Durée, Pouvoir…). La rotation génère toutes les combinaisons de propositions — premier système combinatoire de représentation des connaissances. Anticipe les primitives sémantiques de Leibniz, l'inférence mécanique et la notion de notation universelle.",
      problemsSolved: ["Mécanisation partielle du raisonnement déductif", "Combinatoire exhaustive sur un vocabulaire clos", "Notation transcendant les barrières linguistiques"],
      problemsRaised: ["Système fermé : vocabulaire figé d'origine théologique", "Pas de procédure d'apprentissage", "Aucune sémantique des combinaisons générées"],
      tags: ["combinatoire", "primitives sémantiques", "inférence mécanique", "notation universelle", "Moyen Âge"],
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
      description: "Deux composantes indissociables : (1) Characteristica Universalis — langue formelle universelle où chaque symbole correspond à un concept primitif unique et toute expression est une combinaison de primitives ; (2) Calculus Ratiocinator — mécanisme de calcul automatique sur ces symboles pour déduire des conséquences logiques. Anticipe de deux siècles l'algèbre booléenne et de trois siècles les ontologies OWL. Le problème des primitives universelles reste non résolu — réapparaîtra comme symbol grounding problem (Harnad, 1990).",
      problemsSolved: ["Vision d'un langage formel universel", "Raisonnement comme calcul sur symboles", "Ambition d'éliminer les disputes philosophiques par le calcul"],
      problemsRaised: ["Impossibilité de définir les primitives sémantiques universelles", "Problème des fondements ontologiques — restera non résolu", "Circularité potentielle des définitions (anticipant Harnad 1990)"],
      tags: ["primitives sémantiques", "langage universel", "calcul logique", "symbole", "rationalisme"],
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
      description: "The Mathematical Analysis of Logic (1847) et An Investigation of the Laws of Thought (1854) : première algébrisation de la logique. Les propositions logiques deviennent des variables dans une structure algébrique avec AND (·), OR (+), NOT (~). La loi idempotente x² = x distingue l'algèbre booléenne de l'algèbre ordinaire. Shannon (1937) montrera que les circuits électroniques implémentent cette algèbre, posant le fondement de l'informatique numérique.",
      problemsSolved: ["Réduction du syllogisme à une résolution d'équation algébrique", "Raisonnement comme calcul formel", "Fondement de l'informatique numérique (via Shannon 1937)"],
      problemsRaised: ["Inexpressivité : pas de quantificateurs ∀ ∃, pas de relations polyaires", "Reste dans l'orbite de la logique propositionnelle"],
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
      description: "Begriffsschrift (1879) inaugure la logique du premier ordre moderne. Innovations : (1) quantificateurs ∀ et ∃ ; (2) distinction fonction/argument ; (3) premier système axiomatique complet pour la logique propositionnelle (9 axiomes, 1 règle — modus ponens) ; (4) distinction sens (Sinn) / référence (Bedeutung). Programme logiciste poursuivi dans les Principia Mathematica (Russell & Whitehead, 1910-1913). Base de toute l'IA symbolique.",
      problemsSolved: ["Expressivité des généralisations complexes (quantificateurs)", "Fondement formel de l'arithmétique", "Formalisation rigoureuse de la déduction"],
      problemsRaised: ["Paradoxe de Russell (1901) dans le système naïf", "Inexpressivité de la 2e incompléude de Gödel (1931)"],
      tags: ["logique du premier ordre", "quantificateurs", "formalisme", "sens/référence", "Principia Mathematica"],
      keyPapers: [
        { title: "Begriffsschrift", authors: "Frege, G.", year: 1879, url: "https://plato.stanford.edu/entries/frege/" },
        { title: "Grundgesetze der Arithmetik", authors: "Frege, G.", year: 1893, url: "https://plato.stanford.edu/entries/frege-logic/" }
      ]
    },

    {
      id: "turing-computability",
      label: "Calculabilité de Turing",
      type: "Fondation logique",
      period: [1936, 1936],
      year: 1936,
      authors: ["Alan Turing"],
      description: "On Computable Numbers (1936) définit la Machine de Turing comme modèle universel de tout processus de calcul effectif. La thèse de Church-Turing établit l'équivalence entre calculabilité, λ-définissabilité (Church) et récursivité générale (Gödel-Kleene). Définit les frontières de ce qui peut être représenté et calculé : toute IA s'inscrit dans cet espace. Les problèmes indécidables (halting problem) restent hors de portée.",
      problemsSolved: ["Définition formelle du calcul effectif", "Frontières de la calculabilité (indécidabilité)", "Modèle universel d'ordinateur"],
      problemsRaised: ["Problèmes indécidables inaccessibles à toute IA", "Complexité computationnelle (distinction P/NP, PSPACE…)"],
      tags: ["calculabilité", "machine de Turing", "indécidabilité", "Church-Turing", "limites formelles"],
      keyPapers: [
        { title: "On Computable Numbers, With an Application to the Entscheidungsproblem", authors: "Turing, A.", year: 1936, url: "https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 2 : FONDATIONS CONNEXIONNISTES (1943-1955)
    // ══════════════════════════════════════════════════════════

    {
      id: "mcculloch-pitts",
      label: "Neurone formel (McCulloch-Pitts)",
      type: "Architecture connexionniste",
      period: [1943, 1943],
      year: 1943,
      authors: ["Warren McCulloch", "Walter Pitts"],
      description: "A Logical Calculus of the Ideas Immanent in Nervous Activity (1943) : premier modèle mathématique du neurone biologique comme fonction seuil. Tout réseau de neurones formels peut calculer toute fonction logique — première unification formelle de la logique symbolique et des réseaux neuronaux. Pose les bases computationnelles de la mémoire neuronale.",
      problemsSolved: ["Substrat unifié pour le calcul et la représentation neuronale", "Computabilité des fonctions cognitives", "Lien formel logique/réseau neuronal"],
      problemsRaised: ["Aucun mécanisme d'apprentissage des poids", "Aucune théorie de la mémoire long terme"],
      tags: ["neurone formel", "seuil", "logique neuronale", "connexionnisme", "calcul"],
      keyPapers: [
        { title: "A Logical Calculus of the Ideas Immanent in Nervous Activity", authors: "McCulloch, W.S. & Pitts, W.", year: 1943, url: "https://doi.org/10.1007/BF02478259" }
      ]
    },

    {
      id: "hebb-rule",
      label: "Règle de Hebb",
      type: "Architecture connexionniste",
      period: [1949, 1949],
      year: 1949,
      authors: ["Donald Hebb"],
      description: "The Organization of Behavior (1949) : «Des neurones qui s'activent ensemble se connectent ensemble.» Δwᵢⱼ = η·xᵢ·xⱼ. Première théorie cohérente de la formation des traces mnésiques dans un réseau. Fondement de l'apprentissage hebbien non supervisé. Directement utilisé dans les réseaux de Hopfield (1982) pour le stockage de patterns.",
      problemsSolved: ["Premier mécanisme d'apprentissage non supervisé", "Lien formel entre co-activation et renforcement mnésique", "Base théorique de la plasticité synaptique"],
      problemsRaised: ["Instabilité : les poids ne font que croître", "Pas de mécanisme de désapprentissage ou d'oubli sélectif"],
      tags: ["plasticité synaptique", "apprentissage hebbien", "mémoire associative", "co-activation"],
      keyPapers: [
        { title: "The Organization of Behavior", authors: "Hebb, D.O.", year: 1949, url: "https://archive.org/details/organizationofbe0000hebb" }
      ]
    },

    {
      id: "shannon-information",
      label: "Théorie de l'information (Shannon)",
      type: "Fondation logique",
      period: [1948, 1948],
      year: 1948,
      authors: ["Claude Shannon"],
      description: "A Mathematical Theory of Communication (1948) : H = -Σ pᵢ log₂(pᵢ). Mesure quantitative de l'information, indépendante de la signification — neutralité sémantique radicale. Fondements de la quantification de l'information, influençant les théories de la mémoire en termes de capacité de stockage et de codage optimal. Les LLMs optimisent une entropie croisée sur des tokens, exactement cette abstraction.",
      problemsSolved: ["Quantification formelle de l'information", "Fondement de la compression et du codage", "Mesure de la capacité de stockage"],
      problemsRaised: ["La signification est hors de portée de la théorie", "La vérité factuelle ≠ probabilité — problème des LLMs"],
      tags: ["entropie", "information", "compression", "codage", "probabilité"],
      keyPapers: [
        { title: "A Mathematical Theory of Communication", authors: "Shannon, C.E.", year: 1948, url: "https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 3 : IA SYMBOLIQUE — PREMIÈRES ARCHITECTURES (1956-1975)
    // ══════════════════════════════════════════════════════════

    {
      id: "logic-theorist",
      label: "Logic Theorist",
      type: "Architecture symbolique",
      period: [1956, 1956],
      year: 1956,
      authors: ["Allen Newell", "Herbert Simon", "J.C. Shaw"],
      description: "Premier programme d'IA reconnu (1956) : prouve 38 des 52 théorèmes du Principia Mathematica par manipulation heuristique de formules symboliques. Introduit la notion fondamentale de base de connaissances (les axiomes) distincte du moteur de raisonnement. La mémoire prend la forme d'un ensemble de formules logiques organisées en arbre de preuve.",
      problemsSolved: ["Démontre la computabilité du raisonnement formel", "Sépare connaissance (données) et inférence (procédure)", "Premier programme intelligent au sens plein"],
      problemsRaised: ["Explosion combinatoire des espaces de recherche", "Incapacité à passer à l'échelle sur des problèmes réels"],
      tags: ["raisonnement automatique", "logique propositionnelle", "base de connaissances", "heuristique"],
      keyPapers: [
        { title: "The Logic Theory Machine", authors: "Newell, A., Shaw, J.C., Simon, H.A.", year: 1956, url: "https://doi.org/10.1109/PGEC.1956.5408896" }
      ]
    },

    {
      id: "gps",
      label: "General Problem Solver (GPS)",
      type: "Architecture symbolique",
      period: [1957, 1959],
      year: 1957,
      authors: ["Allen Newell", "Herbert Simon", "J.C. Shaw"],
      description: "GPS (1957-1959) : premier programme à séparer explicitement la représentation de la connaissance du problème et la stratégie générale de résolution. Opère par analyse moyens-fins (means-ends analysis). Introduit la mémoire de travail (état courant, sous-buts actifs) séparée de la mémoire long terme (opérateurs). Prototype de toutes les architectures cognitives ultérieures.",
      problemsSolved: ["Premier modèle de mémoire de travail séparée de la mémoire LT", "Architecture à deux niveaux état courant/connaissance permanente", "Général sur différents types de problèmes"],
      problemsRaised: ["Toujours vulnérable à l'explosion combinatoire", "Absence d'apprentissage", "Représentation purement symbolique inadaptée aux domaines continus"],
      tags: ["moyens-fins", "mémoire de travail", "résolution de problèmes", "architecture cognitive"],
      keyPapers: [
        { title: "General Problem Solver", authors: "Newell, A., Simon, H.A.", year: 1972, url: "https://en.wikipedia.org/wiki/General_Problem_Solver" }
      ]
    },

    {
      id: "advice-taker",
      label: "Advice Taker (McCarthy)",
      type: "Architecture symbolique",
      period: [1959, 1959],
      year: 1959,
      authors: ["John McCarthy"],
      description: "Advice Taker (1959) : propose une base de connaissances en logique du premier ordre (FOL) complètement séparée du programme et susceptible d'être modifiée dynamiquement. McCarthy envisage un système capable d'inférer de nouvelles actions à partir de nouvelles assertions. Vision programmatique de la représentation déclarative — fondement théorique de la base de connaissances séparable et mutable.",
      problemsSolved: ["Base de connaissances séparable et mutable", "Vision de la représentation déclarative", "Inférence sur des assertions ajoutées dynamiquement"],
      problemsRaised: ["Défi de la complétude de la connaissance (que sait-on de ce qu'on ne sait pas encore ?)", "Problèmes de consistance lors de l'ajout d'assertions contradictoires", "Formalise le frame problem implicitement"],
      tags: ["base de connaissances", "FOL", "déclaratif", "séparation connaissance/programme"],
      keyPapers: [
        { title: "Programs with Common Sense", authors: "McCarthy, J.", year: 1959, url: "http://jmc.stanford.edu/articles/mcc59/mcc59.pdf" }
      ]
    },

    {
      id: "resolution-robinson",
      label: "Résolution (Robinson)",
      type: "Architecture symbolique",
      period: [1965, 1965],
      year: 1965,
      authors: ["J.A. Robinson"],
      description: "Principe de résolution (1965) : règle d'inférence unique et réfutationnellement complète pour la logique du premier ordre. Si C₁ et C₂ sont deux clauses et L ∈ C₁, ¬L' ∈ C₂ unifiables par MGU σ, alors le résolvant est (C₁ \\ {L} ∪ C₂ \\ {¬L'})σ. Base de Prolog (1972) et de nombreux systèmes experts. Transforme les bases de connaissances logiques en moteurs d'inférence automatique.",
      problemsSolved: ["Inférence automatique sur bases de connaissances du premier ordre", "Complétude théorique : tout théorème déductible peut être prouvé", "Mécanisme d'unification universel"],
      problemsRaised: ["Recherche d'une réfutation PSPACE-difficile en pratique", "Difficulté à contrôler la stratégie de résolution", "Problème de la pertinence : quelle règle appliquer en premier ?"],
      tags: ["résolution", "unification", "clause de Horn", "Prolog", "inférence automatique"],
      keyPapers: [
        { title: "A Machine-Oriented Logic Based on the Resolution Principle", authors: "Robinson, J.A.", year: 1965, url: "https://doi.org/10.1145/321250.321253" }
      ]
    },

    {
      id: "semantic-networks",
      label: "Réseaux sémantiques (Quillian)",
      type: "Architecture symbolique",
      period: [1966, 1968],
      year: 1968,
      authors: ["M. Ross Quillian"],
      description: "TLC (Teachable Language Comprehender, 1966-1968) : premier réseau sémantique computationnel. Graphe orienté étiqueté : nœuds (concepts), arcs (relations IS-A, HAS-PART, CAN…). Inférence par spreading activation. Collins & Quillian (1969) montrent que le temps de réponse humain corrèle avec la distance dans le réseau — validation cognitive. Woods (1975) dans 'What's in a Link?' identifie l'ambiguïté sémantique des liens IS-A.",
      problemsSolved: ["Représentation naturelle des connaissances conceptuelles", "Inférence par héritage hiérarchique", "Premier pont entre représentation computationnelle et modèle cognitif"],
      problemsRaised: ["Absence de sémantique formelle des arcs", "Difficulté à représenter la négation, la disjonction, la quantification", "Ambiguïté des liens IS-A (Woods, 1975)"],
      tags: ["graphe orienté", "IS-A", "spreading activation", "héritage", "cognition sémantique"],
      keyPapers: [
        { title: "Semantic Memory", authors: "Quillian, M.R.", year: 1968, url: "https://doi.org/10.1145/1461551.1461553" },
        { title: "What's in a Link?", authors: "Woods, W.A.", year: 1975, url: "https://doi.org/10.1145/1622945.1622968" }
      ]
    },

    {
      id: "shrdlu",
      label: "SHRDLU (Winograd)",
      type: "Architecture symbolique",
      period: [1968, 1970],
      year: 1970,
      authors: ["Terry Winograd"],
      description: "SHRDLU (1968-1970, MIT) : programme pionnier de compréhension du langage naturel dans un monde de blocs simulé. Mémoire hybride : assertions logiques (état du monde) + procédures actives (grammaire). Peut répondre à des questions sur sa propre connaissance et ses actions passées. Illustre le brittleness problem : le succès dans un microworld ne se transfère pas.",
      problemsSolved: ["Intégration langage naturel + raisonnement spatial + mémoire d'état", "Résolution anaphorique ('il' référant à un bloc précédent)", "Démontre la faisabilité d'un système hybride logique/procédural"],
      problemsRaised: ["Extrêmement spécialisé au domaine des blocs", "Illustre le brittleness problem (fragilité hors domaine)", "Le succès dans un microworld ne scale pas"],
      tags: ["langage naturel", "monde de blocs", "hybride logique/procédural", "brittleness", "NLU"],
      keyPapers: [
        { title: "Understanding Natural Language", authors: "Winograd, T.", year: 1972, url: "https://en.wikipedia.org/wiki/SHRDLU" }
      ]
    },

    {
      id: "situation-calculus",
      label: "Calcul des situations",
      type: "Architecture symbolique",
      period: [1969, 1969],
      year: 1969,
      authors: ["John McCarthy", "Patrick Hayes"],
      description: "McCarthy & Hayes (1969) formalisent un langage logique pour des mondes dynamiques. Objets : Situations s (états complets), Fluents f(s) (propositions vraies/fausses dans s), Actions a, Résultat Result(a,s). L'inférence sur les états futurs requiert des axiomes d'effet et des axiomes de cadre (frame axioms). Engendre le Frame Problem : pour n actions et k fluents, O(nk) axiomes de cadre nécessaires.",
      problemsSolved: ["Formalisation rigoureuse du raisonnement temporel sur bases de connaissances dynamiques", "Représentation explicite du changement dans le monde"],
      problemsRaised: ["Le Frame Problem résiste à une solution satisfaisante en logique monotone", "Explosion combinatoire des axiomes de cadre", "O(n·k) axiomes nécessaires pour n actions et k fluents"],
      tags: ["calcul des situations", "fluents", "frame problem", "dynamique", "raisonnement temporel"],
      keyPapers: [
        { title: "Some Philosophical Problems from the Standpoint of Artificial Intelligence", authors: "McCarthy, J., Hayes, P.", year: 1969, url: "https://www.aaai.org/Papers/Workshops/1998/WS-98-24/WS98-24-004.pdf" }
      ]
    },

    {
      id: "frames-minsky",
      label: "Frames de Minsky",
      type: "Architecture symbolique",
      period: [1974, 1974],
      year: 1974,
      authors: ["Marvin Minsky"],
      description: "A Framework for Representing Knowledge (MIT AI Memo 306, 1974) : frames = structures de données représentant des situations stéréotypées avec des slots (attributs), valeurs par défaut, procédures if-added/if-needed, et héritage hiérarchique. Le default reasoning (un oiseau vole par défaut) est intégré. Base conceptuelle des logiques de description et de la programmation orientée objet.",
      problemsSolved: ["Représentation compacte des connaissances typiques", "Mécanisme de default reasoning intégré", "Liaison naturelle mémoire long terme / mémoire de travail (instanciation)"],
      problemsRaised: ["Sémantique de l'héritage avec exceptions mal définie formellement", "Conflits d'héritage multiple non triviaux", "Difficulté à représenter des situations atypiques"],
      tags: ["frames", "slots", "valeurs par défaut", "héritage", "default reasoning", "stéréotype"],
      keyPapers: [
        { title: "A Framework for Representing Knowledge", authors: "Minsky, M.", year: 1974, url: "https://web.media.mit.edu/~minsky/papers/Frames/frames.html" }
      ]
    },

    {
      id: "scripts-schank",
      label: "Scripts (Schank & Abelson)",
      type: "Architecture symbolique",
      period: [1975, 1977],
      year: 1977,
      authors: ["Roger Schank", "Robert Abelson"],
      description: "Scripts, Plans, Goals and Understanding (1977) : un script est une structure représentant une séquence stéréotypée d'événements (ex. script restaurant : acteurs, scènes, conditions d'entrée/résultats, props). Permet l'inférence des événements implicites non mentionnés dans un texte. Schank développera ensuite les MOPs (Memory Organization Packets, 1982), structures plus générales permettant le partage de composants entre scripts.",
      problemsSolved: ["Représentation des connaissances procédurales et contextuelles", "Inférence par défaut sur les événements implicites", "Première théorie computationnelle de la mémoire épisodique structurée"],
      problemsRaised: ["Acquisition manuelle et coûteuse des scripts", "Difficulté à gérer les déviations du script standard", "Absence de mécanisme formel de mise à jour face à de nouvelles expériences"],
      tags: ["scripts", "mémoire épisodique", "MOPs", "scénario", "inférence narrative", "compréhension"],
      keyPapers: [
        { title: "Scripts, Plans, Goals and Understanding", authors: "Schank, R.C., Abelson, R.P.", year: 1977, url: "https://www.routledge.com/Scripts-Plans-Goals-and-Understanding-An-Inquiry-into-Human-Knowledge/Schank-Abelson/p/book/9780898591385" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 4 : SYSTÈMES EXPERTS ET LOGIQUES NON-MONOTONES (1965-1995)
    // ══════════════════════════════════════════════════════════

    {
      id: "dendral",
      label: "DENDRAL",
      type: "Architecture symbolique",
      period: [1965, 1983],
      year: 1965,
      authors: ["Edward Feigenbaum", "Bruce Buchanan", "Joshua Lederberg"],
      description: "DENDRAL (Stanford, 1965-1983) : premier système expert opérationnel, déterminant la structure moléculaire de composés organiques à partir de données spectrométriques. Introduit la base de connaissances séparée du code de contrôle, le cycle génération-et-test, et Meta-DENDRAL (apprentissage automatique de règles). La 'crise de la représentation' de 1967 conduit à concevoir des règles de production modulaires.",
      problemsSolved: ["Expertise de niveau humain dans un domaine étroit", "Principe 'la connaissance comme pouvoir' (knowledge is power) formalisé", "Séparation base de connaissances / moteur de contrôle"],
      problemsRaised: ["Goulot d'acquisition des connaissances (knowledge acquisition bottleneck)", "Fragilité hors du domaine d'expertise"],
      tags: ["système expert", "chimie", "génération-et-test", "règles de production", "domaine étroit"],
      keyPapers: [
        { title: "DENDRAL: A Case Study of the First Expert System for Scientific Hypothesis Formation", authors: "Buchanan, B.G., Feigenbaum, E.A.", year: 1978, url: "https://www.sciencedirect.com/science/article/pii/0004370278900237" }
      ]
    },

    {
      id: "mycin",
      label: "MYCIN",
      type: "Architecture symbolique",
      period: [1972, 1976],
      year: 1974,
      authors: ["Edward Shortliffe", "Bruce Buchanan"],
      description: "MYCIN (Stanford, 1972-1976) : diagnostic des infections bactériennes sanguines via ~600 règles de production SI/ALORS avec facteurs de certitude (CF ∈ [-1,1]). Chaînage arrière (backward chaining). Performance comparable aux médecins experts. La coquille EMYCIN (Empty MYCIN) généralise l'architecture — concept de shell de système expert. Premier système à raisonner sous incertitude de façon explicite.",
      problemsSolved: ["Raisonnement sous incertitude dans un domaine réel", "Transparence du raisonnement / explicabilité", "Architecture séparant base de connaissances et moteur d'inférence"],
      problemsRaised: ["Facteurs de certitude ad hoc, non conformes aux axiomes de probabilité", "Incapacité à apprendre ou mettre à jour automatiquement ses règles", "Knowledge acquisition bottleneck"],
      tags: ["système expert médical", "facteurs de certitude", "backward chaining", "EMYCIN", "raisonnement incertain"],
      keyPapers: [
        { title: "Computer-Based Medical Consultations: MYCIN", authors: "Shortliffe, E.H.", year: 1976, url: "https://www.sciencedirect.com/book/9780444001962/computer-based-medical-consultations" }
      ]
    },

    {
      id: "ops5-rete",
      label: "OPS5 / Algorithme Rete",
      type: "Architecture symbolique",
      period: [1979, 1982],
      year: 1982,
      authors: ["Charles Forgy"],
      description: "OPS5 (1979) et l'algorithme Rete (Forgy, 1982) : formalisation de la mémoire comme ensemble de règles Condition-Action sur une mémoire de travail. Rete compile le réseau de conditions en une structure de données partagée, réduisant la complexité de O(R·W^P) à ~O(R+W^P/R). Mémoire alpha (faits par attribut-valeur) + mémoire bêta (correspondances partielles). Base de CLIPS, JESS, Drools.",
      problemsSolved: ["Architecture efficace pour la mémoire de production", "Cycle Perception-Délibération-Action clairement défini", "Optimisation du pattern-matching via Rete"],
      problemsRaised: ["Explosion combinatoire lors du conflit de règles", "Difficulté d'acquisition et maintenance des grandes bases de règles"],
      tags: ["règles de production", "mémoire de travail", "Rete", "pattern matching", "systèmes de production"],
      keyPapers: [
        { title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem", authors: "Forgy, C.L.", year: 1982, url: "https://doi.org/10.1016/0004-3702(82)90020-0" }
      ]
    },

    {
      id: "truth-maintenance",
      label: "TMS / Truth Maintenance (Doyle)",
      type: "Logique non-monotone",
      period: [1979, 1986],
      year: 1979,
      authors: ["Jon Doyle", "Johan de Kleer"],
      description: "Truth Maintenance System (Doyle, 1979) : chaque croyance est annotée de ses justifications. Lors de la rétractation d'un fait f, le système retrograde toutes les croyances dont f est une justification indispensable. JTMS (Justification-based TMS) : chaînes de justifications, cache des inférences. ATMS (Assumption-based TMS, de Kleer, 1986) : raisonnement sur plusieurs contextes cohérents simultanément.",
      problemsSolved: ["Gestion efficace de la révision locale des croyances", "Économie computationnelle via maintenance des justifications", "Raisonnement multi-contextes (ATMS)"],
      problemsRaised: ["Complexité mémoire quadratique dans le pire cas", "Problèmes de circularité dans les justifications (croyances auto-justifiées)"],
      tags: ["révision des croyances", "justifications", "TMS", "ATMS", "rétractation"],
      keyPapers: [
        { title: "A Truth Maintenance System", authors: "Doyle, J.", year: 1979, url: "https://doi.org/10.1016/0004-3702(79)90008-0" }
      ]
    },

    {
      id: "default-logic",
      label: "Default Logic (Reiter)",
      type: "Logique non-monotone",
      period: [1980, 1980],
      year: 1980,
      authors: ["Raymond Reiter"],
      description: "Default Logic (1980) : règles par défaut δ = (α(x):β₁(x),...,βₙ(x)) / γ(x). Interprétation : si α est connu (prérequis) et si β₁,...,βₙ sont consistants avec les croyances courantes (justifications), alors conclure γ (conséquence). Non-monotonie : ajouter des faits peut invalider des conclusions antérieures. Décider si une formule est dans toute extension est Π₂P-complet.",
      problemsSolved: ["Représentation du raisonnement par défaut (les oiseaux volent, sauf exceptions)", "Règle d'inertie : les fluents persistent par défaut", "Formalisme rigoureux pour la logique non-monotone"],
      problemsRaised: ["Multiplicité des extensions possibles (non-déterminisme)", "Complexité computationnelle : Π₂P-complet pour l'appartenance à toute extension"],
      tags: ["logique par défaut", "non-monotonie", "extensions", "inertie", "raisonnement défeasible"],
      keyPapers: [
        { title: "A Logic for Default Reasoning", authors: "Reiter, R.", year: 1980, url: "https://doi.org/10.1016/0004-3702(80)90014-4" }
      ]
    },

    {
      id: "circumscription",
      label: "Circonscription (McCarthy)",
      type: "Logique non-monotone",
      period: [1980, 1980],
      year: 1980,
      authors: ["John McCarthy"],
      description: "Circonscription (1980) : technique de minimisation — à partir d'axiomes Δ, on minimise l'extension d'un prédicat P : Circ(Δ;P;Z) ≡ Δ(P,Z) ∧ ∀P'Z'[Δ(P',Z') ∧ P'⊆P → P'=P]. Appliquée à la gestion du changement : minimiser les fluents 'anormaux' pour dériver l'inertie par défaut. Solution au frame problem dans le cadre de la logique non-monotone.",
      problemsSolved: ["Résolution partielle du frame problem via minimisation", "Fondement formel du raisonnement par défaut via minimisation", "Logique classique étendue au raisonnement non-monotone"],
      problemsRaised: ["Calcul de la circonscription computationnellement lourd", "Résultats de raisonnement pas toujours intuitifs"],
      tags: ["circonscription", "minimisation", "frame problem", "non-monotonie", "McCarthy"],
      keyPapers: [
        { title: "Circumscription — A Form of Non-Monotonic Reasoning", authors: "McCarthy, J.", year: 1980, url: "https://doi.org/10.1016/0004-3702(80)90011-9" }
      ]
    },

    {
      id: "agm-revision",
      label: "Révision des croyances AGM",
      type: "Logique non-monotone",
      period: [1985, 1985],
      year: 1985,
      authors: ["Carlos Alchourrón", "Peter Gärdenfors", "David Makinson"],
      description: "On the Logic of Theory Change (1985) : axiomatisation complète de la révision rationnelle des croyances. Trois opérations : expansion (ajout de φ), contraction (retrait de φ), révision (incorporation de φ en préservant la consistance via identité de Levi : K*φ = (K-¬φ)+φ). Postulats AGM : fermeture, succès, inclusion, vacuité, préservation, récupération. Théorème de représentation : toute contraction satisfaisant les postulats est représentable par une fonction de sélection partielle.",
      problemsSolved: ["Axiomatisation complète de la révision rationnelle des croyances", "Principe d'économie minimale (ne modifier que le strict nécessaire)", "Fondement formel de la mise à jour des connaissances"],
      problemsRaised: ["Belief sets irréalistes (infinis, clos par déduction)", "Difficultés pour les révisions itérées (Darwiche-Pearl 1997 complètera)", "Complexité computationnelle de l'opération de contraction"],
      tags: ["révision des croyances", "contraction", "expansion", "postulats AGM", "épistémologie formelle"],
      keyPapers: [
        { title: "On the Logic of Theory Change: Partial Meet Contraction and Revision Functions", authors: "Alchourrón, C., Gärdenfors, P., Makinson, D.", year: 1985, url: "https://doi.org/10.2307/2274239" }
      ]
    },

    {
      id: "kl-one",
      label: "KL-ONE (Brachman & Schmolze)",
      type: "Architecture symbolique",
      period: [1977, 1985],
      year: 1985,
      authors: ["Ronald Brachman", "James Schmolze"],
      description: "KL-ONE (1977, formalisé 1985) : premier système de frames à formaliser la sémantique de l'héritage par des réseaux structurés d'héritage. Distingue concepts primitifs (conditions nécessaires) et concepts définis (conditions nécessaires et suffisantes). Rôles = relations binaires entre concepts. Classificateur déductif : inférer l'appartenance d'un concept à des super-concepts. Marque la transition des réseaux sémantiques informels vers les logiques de description.",
      problemsSolved: ["Sémantique rigoureuse de l'héritage", "Classificateur automatique réduisant la charge de l'ingénieur d'ontologie", "Distinction TBox (terminologie) / ABox (assertions) — fondamentale en DL"],
      problemsRaised: ["Décidabilité et complexité computationnelle de la classification non encore pleinement comprises (résultats années 1990)", "Difficultés à représenter des connaissances numériques ou probabilistes"],
      tags: ["KL-ONE", "logiques de description", "TBox", "ABox", "subsomption", "classificateur"],
      keyPapers: [
        { title: "An Overview of the KL-ONE Knowledge Representation System", authors: "Brachman, R.J., Schmolze, J.G.", year: 1985, url: "https://doi.org/10.1207/s15516709cog0902_1" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 5 : ARCHITECTURES COGNITIVES INTÉGRÉES (1982-2000)
    // ══════════════════════════════════════════════════════════

    {
      id: "soar",
      label: "SOAR",
      type: "Architecture cognitive",
      period: [1982, 1987],
      year: 1982,
      authors: ["John Laird", "Allen Newell", "Paul Rosenbloom"],
      description: "SOAR (CMU, 1982-1987) : architecture cognitive unifiée visant l'intelligence générale. Distingue mémoire de travail, mémoire procédurale (productions IF-THEN), mémoire sémantique, et mémoire épisodique. Mécanisme de résolution des impasses (impasse resolution) : création d'un sous-état pour délibérer. Chunking : apprentissage procédural automatique. Spreading activation dans la mémoire sémantique.",
      problemsSolved: ["Architecture unifiée des différents types de mémoire", "Apprentissage procédural automatique par chunking", "Modèle computationnel de l'intelligence générale"],
      problemsRaised: ["Le chunking peut créer des milliers de règles redondantes (utility problem)", "Difficulté à représenter des connaissances continues ou probabilistes"],
      tags: ["architecture cognitive", "chunking", "mémoire procédurale", "mémoire épisodique", "intelligence générale"],
      keyPapers: [
        { title: "SOAR: An Architecture for General Intelligence", authors: "Laird, J., Newell, A., Rosenbloom, P.", year: 1987, url: "https://doi.org/10.1016/0004-3702(87)90050-6" }
      ]
    },

    {
      id: "act-r",
      label: "ACT-R (Anderson)",
      type: "Architecture cognitive",
      period: [1983, 2004],
      year: 1993,
      authors: ["John Anderson"],
      description: "ACT-R Rational (1993, issu de ACT 1976) : modèle cognitif et computationnel de la mémoire humaine. Mémoire déclarative : chunks avec activation Aᵢ = Bᵢ + Σ wⱼ·Sⱼᵢ + ε. Probabilité de récupération P(t > τ), latence T = Fe^(-A). Mémoire procédurale : règles de production IF-THEN avec utilités estimées par apprentissage par renforcement. Reproduit les effets de fréquence, récence et interférence de la mémoire humaine.",
      problemsSolved: ["Modèle quantitatif précis de la mémoire déclarative humaine", "Unification mémoires déclarative et procédurale", "Reproduit les effets de fréquence, récence, interférence"],
      problemsRaised: ["Paramétrage délicat (≥8 paramètres libres)", "Applicabilité aux domaines non cognitivistes limitée"],
      tags: ["ACT-R", "activation", "chunks", "mémoire déclarative", "mémoire procédurale", "modèle cognitif"],
      keyPapers: [
        { title: "The Atomic Components of Thought", authors: "Anderson, J.R.", year: 1998, url: "https://doi.org/10.4324/9781315805498" }
      ]
    },

    {
      id: "cbr-cyrus",
      label: "CBR / CYRUS (Kolodner, Schank)",
      type: "Architecture cognitive",
      period: [1982, 1995],
      year: 1983,
      authors: ["Janet Kolodner", "Roger Schank"],
      description: "Case-Based Reasoning (CBR) fondé sur Dynamic Memory (Schank, 1982) et implémenté dans CYRUS (Kolodner, 1983) : première architecture de mémoire épisodique computationnelle. CYRUS stocke des épisodes concrets (voyages, réunions de Cyrus Vance) selon une hiérarchie d'E-MOPs. Cycle CBR standard (Aamodt & Plaza, 1994) : Retrieve (similarité pondérée), Reuse, Revise, Retain.",
      problemsSolved: ["Réutilisation directe de l'expérience passée", "Amélioration progressive avec l'accumulation de cas", "Gestion naturelle de l'incomplétude des connaissances"],
      problemsRaised: ["Croissance potentiellement illimitée de la mémoire de cas", "Risque de sur-spécialisation (cas particuliers >> règles générales)", "Définition de la mesure de similarité dépendante du domaine"],
      tags: ["CBR", "E-MOPs", "mémoire épisodique", "similarité", "raisonnement par analogie"],
      keyPapers: [
        { title: "Retrieval and Organizational Strategies in Conceptual Memory: A Computer Model", authors: "Kolodner, J.L.", year: 1984, url: "https://doi.org/10.4324/9780203771679" },
        { title: "Case-Based Reasoning: A Review", authors: "Aamodt, A., Plaza, E.", year: 1994, url: "https://doi.org/10.1023/B:AIRE.0000005701.86609.68" }
      ]
    },

    {
      id: "clarion",
      label: "CLARION (Sun)",
      type: "Architecture cognitive",
      period: [1997, 1997],
      year: 1997,
      authors: ["Ron Sun"],
      description: "CLARION (Connectionist Learning with Adaptive Rule Induction On-line, 1997) : architecture hybride à deux niveaux. Niveau implicite : subsymbolique, réseaux de neurones, connaissances inaccessibles directement. Niveau explicite : symbolique, règles articulables. Modélise l'extraction de règles (rule extraction) depuis le niveau implicite vers le niveau explicite — analogue à la conscientisation des habiletés implicites.",
      problemsSolved: ["Modélisation de la dualité connaissance implicite/explicite", "Apprentissage hybride neuro-symbolique", "Extraction automatique de règles depuis le sous-symbolique"],
      problemsRaised: ["Difficulté d'opérationnaliser l'extraction de règles pour des domaines complexes", "Passage à l'échelle des deux couches en parallèle"],
      tags: ["hybride", "implicite/explicite", "extraction de règles", "connexionniste+symbolique"],
      keyPapers: [
        { title: "Duality of the Mind", authors: "Sun, R.", year: 2002, url: "https://www.erlbaum.com/shop/tek9.asp?pg=products&specific=0-8058-3836-9" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 6 : PROBABILISTE ET BAYÉSIEN (1985-2000)
    // ══════════════════════════════════════════════════════════

    {
      id: "bayesian-networks",
      label: "Réseaux bayésiens (Pearl)",
      type: "Probabiliste/Bayésien",
      period: [1985, 1988],
      year: 1985,
      authors: ["Judea Pearl"],
      description: "Pearl (1985-1988) introduit les réseaux bayésiens : DAG où chaque nœud est une variable aléatoire avec table CPT P(Xᵢ|Pa(Xᵢ)). La loi jointe se factorise P(X₁,...,Xₙ) = ∏P(Xᵢ|Pa(Xᵢ)). Inférence par propagation de croyances (belief propagation) : messages sur le graphe, exact sur les arbres (linéaire), NP-dur sur les graphes généraux. Modèle de mémoire active par le contenu à sémantique probabiliste.",
      problemsSolved: ["Représentation compacte de distributions jointes haute dimension", "Raisonnement diagnostic et prédictif unifié", "Fondement théorique rigoureux de la causalité"],
      problemsRaised: ["Construction du graphe requiert une expertise experte", "Tables exponentiellement grandes pour des parents nombreux", "Inférence exacte NP-dur dans le cas général"],
      tags: ["réseaux bayésiens", "DAG", "CPT", "belief propagation", "incertitude", "causalité"],
      keyPapers: [
        { title: "Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference", authors: "Pearl, J.", year: 1988, url: "https://dl.acm.org/doi/book/10.5555/52121" }
      ]
    },

    {
      id: "hmm",
      label: "Modèles de Markov cachés (HMM)",
      type: "Probabiliste/Bayésien",
      period: [1966, 1990],
      year: 1966,
      authors: ["Leonard Baum", "Lloyd Welch"],
      description: "HMMs (1966-1970, popularisés 1980-1990) : modélisation de la mémoire séquentielle. État caché qₜ évolue selon P(qₜ|qₜ₋₁), observations oₜ émises par P(oₜ|qₜ). Algorithme de Viterbi : récupération de la séquence d'états la plus probable. Algorithme forward-backward (Baum-Welch) : apprentissage des paramètres par EM. Applications majeures : reconnaissance vocale (CMU, 1975), traduction automatique.",
      problemsSolved: ["Mémoire temporelle probabiliste", "Robustesse au bruit dans les séquences", "Apprentissage des paramètres par algorithme EM"],
      problemsRaised: ["Hypothèse de Markov d'ordre 1 trop restrictive pour les dépendances longue-portée", "Taille de l'espace d'états bornée"],
      tags: ["HMM", "chaîne de Markov", "Viterbi", "Baum-Welch", "reconnaissance vocale", "séquentiel"],
      keyPapers: [
        { title: "Statistical Inference for Probabilistic Functions of Finite State Markov Chains", authors: "Baum, L.E., Petrie, T.", year: 1966, url: "https://doi.org/10.1214/aoms/1177699147" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 7 : ONTOLOGIES FORMELLES ET WEB SÉMANTIQUE (1984-2012)
    // ══════════════════════════════════════════════════════════

    {
      id: "description-logics",
      label: "Logiques de description",
      type: "Ontologie/Web sémantique",
      period: [1984, 2004],
      year: 1991,
      authors: ["Franz Baader", "Ronald Brachman", "Ian Horrocks"],
      description: "Les DL (logiques de description) émergent comme fragments décidables de la FOL spécialement conçus pour la représentation terminologique. Base = AL (conjonction, restriction universelle/existentielle). KB = (TBox, ABox). SHIQ et SROIQ sous-tendent OWL 2. Complexité maîtrisée : AL est PSPACE-complet, OWL DL EXPTIME-complet. Services d'inférence standardisés : satisfiabilité, subsomption, classification.",
      problemsSolved: ["Sémantique rigoureuse de l'héritage (KL-ONE → DL)", "Compromis expressivité/décidabilité soigneusement calibré", "Classification automatique d'ontologies"],
      problemsRaised: ["Complexité computationnelle élevée (EXPTIME) pour OWL DL", "Difficultés à modéliser l'incertitude et le temps"],
      tags: ["logiques de description", "TBox", "ABox", "OWL", "satisfiabilité", "subsomption", "décidabilité"],
      keyPapers: [
        { title: "The Description Logic Handbook", authors: "Baader, F. et al.", year: 2003, url: "https://doi.org/10.1017/CBO9780511711787" }
      ]
    },

    {
      id: "cyc",
      label: "Projet CYC (Lenat)",
      type: "Ontologie/Web sémantique",
      period: [1984, 2025],
      year: 1984,
      authors: ["Douglas Lenat"],
      description: "CYC (1984-présent) : encyclopédie du sens commun. Utilise CycL (extension de la logique du 2nd ordre) avec des microthéories (contextes logiquement isolés). 1994 : 100 000 termes, 1M d'axiomes. 2017 : 1,5M de termes, 24,5M d'axiomes. Illustre le goulot d'acquisition à l'extrême. La connaissance est contextuelle et profondément implicite — chaque fait banal présuppose des milliers de faits tacites.",
      problemsSolved: ["Tentative d'encodage systématique du sens commun", "Découverte et formalisation des présuppositions implicites du langage naturel", "Microthéories pour la représentation contextuelle"],
      problemsRaised: ["Coût humain considérable de l'encodage", "N'atteint pas la masse critique permettant l'inférence autonome de nouvelles connaissances", "Illustre l'échec du knowledge engineering manuel"],
      tags: ["sens commun", "CycL", "microthéories", "knowledge engineering", "encyclopédie"],
      keyPapers: [
        { title: "CYC: A Large-Scale Investment in Knowledge Infrastructure", authors: "Lenat, D.B., Guha, R.V.", year: 1990, url: "https://dl.acm.org/doi/10.1145/78857.78860" }
      ]
    },

    {
      id: "rdf-owl",
      label: "RDF/OWL — Web Sémantique",
      type: "Ontologie/Web sémantique",
      period: [1999, 2009],
      year: 2001,
      authors: ["Tim Berners-Lee", "James Hendler", "Ora Lassila"],
      description: "Vision du Web Sémantique formalisée dans Scientific American (2001). Stack : URI/HTTP (identification) → RDF (triplets sujet-prédicat-objet) → RDFS (typage) → OWL (logique de description SHIQ+ avec individus nommés, inverses, transitivité). OWL 2 (2009) ajoute les profils EL (P-temps, utilisé dans SNOMED CT avec 300 000 concepts), QL, RL. SPARQL pour l'interrogation.",
      problemsSolved: ["Interopérabilité des ontologies à l'échelle du Web", "Raisonnement automatique sur des connaissances partagées", "Distinction explicite TBox/ABox à grande échelle"],
      problemsRaised: ["Difficulté d'alignement d'ontologies hétérogènes", "Passage à l'échelle des raisonneurs sur des millions de triplets", "Gestion des inconsistances lors de l'intégration de sources multiples"],
      tags: ["RDF", "OWL", "SPARQL", "Web Sémantique", "linked data", "triplets", "ontologie"],
      keyPapers: [
        { title: "The Semantic Web", authors: "Berners-Lee, T., Hendler, J., Lassila, O.", year: 2001, url: "https://www.scientificamerican.com/article/the-semantic-web/" },
        { title: "OWL Web Ontology Language Guide", authors: "W3C", year: 2004, url: "https://www.w3.org/TR/owl-guide/" }
      ]
    },

    {
      id: "knowledge-graphs",
      label: "Graphes de connaissances industriels",
      type: "Ontologie/Web sémantique",
      period: [2007, 2020],
      year: 2012,
      authors: ["Google", "Wikimedia Foundation", "DBpedia Community"],
      description: "Essor des KG à grande échelle : DBpedia (2007, 5G triplets RDF), Freebase (2007, racheté par Google 2010), Google Knowledge Graph (2012), Wikidata (2012, 100M+ entités, 10G+ propriétés), YAGO, NELL, ConceptNet. Linked Data (Berners-Lee, 2006) : URIs HTTP, triplets RDF, liens inter-KG. Alimentent les assistants vocaux, moteurs de recherche, systèmes de QA.",
      problemsSolved: ["Représentation de milliards de faits structurés", "Agrégation de données hétérogènes via identifiants globaux (URI)", "Infrastructure pour le raisonnement factuel à grande échelle"],
      problemsRaised: ["Complétude : aucun KG ne couvre même une fraction du savoir humain", "Temporalité : les faits changent, les KG vieillissent", "Incertitude des faits difficile à modéliser en RDF classique"],
      tags: ["knowledge graph", "Wikidata", "DBpedia", "Freebase", "linked data", "triplets"],
      keyPapers: [
        { title: "Towards a Definition of Knowledge Graphs", authors: "Ehrlinger, L., Wöß, W.", year: 2016, url: "https://ceur-ws.org/Vol-1695/paper4.pdf" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 8 : REPRÉSENTATIONS VECTORIELLES ET IR (1968-2000)
    // ══════════════════════════════════════════════════════════

    {
      id: "vsm-tfidf",
      label: "VSM / TF-IDF (Salton)",
      type: "Représentation vectorielle",
      period: [1968, 1975],
      year: 1968,
      authors: ["Gerard Salton"],
      description: "Modèle d'espace vectoriel (Cornell University, 1968) implémenté dans SMART. Documents et requêtes comme vecteurs dans l'espace du vocabulaire. Pondération TF-IDF (Salton, Wong & Yang, 1975) : tf(t,d)·log(N/df(t)). Similarité cosinus pour la récupération. Premier système de mémoire associative par contenu à grande échelle pour l'IR — la connaissance est distribuée dans les vecteurs de documents.",
      problemsSolved: ["Pondération des termes reflétant leur importance discriminante", "Recherche par similarité sémantique partielle", "Gestion partielle de la variabilité lexicale"],
      problemsRaised: ["Synonymie : deux termes différents pour le même concept → vecteurs distincts", "Polysémie : un terme avec plusieurs sens → superposition dans un seul vecteur", "Représentation creuse (sparse) inefficace en haute dimension"],
      tags: ["VSM", "TF-IDF", "espace vectoriel", "cosinus", "information retrieval", "SMART"],
      keyPapers: [
        { title: "A Vector Space Model for Automatic Indexing", authors: "Salton, G., Wong, A., Yang, C.S.", year: 1975, url: "https://doi.org/10.1145/361219.361220" }
      ]
    },

    {
      id: "lsa",
      label: "Analyse sémantique latente (LSA)",
      type: "Représentation vectorielle",
      period: [1988, 1990],
      year: 1990,
      authors: ["Scott Deerwester", "Susan Dumais", "George Furnas", "Thomas Landauer", "Richard Harshman"],
      description: "LSA / LSI (brevet 1988, publication 1990) : SVD tronquée de la matrice terme-document → A ≈ Uₖ·Σₖ·Vₖᵀ. Représentation dense dans un espace sémantique de dimension réduite k. Capture les co-occurrences latentes — termes qui co-occurrent avec les mêmes autres termes se retrouvent proches même sans match lexical direct. Modélise des aspects de la mémoire sémantique humaine (effets de proximité sémantique dans le rappel libre).",
      problemsSolved: ["Atténuation du problème de synonymie et polysémie (partielle)", "Compression de la matrice terme-document", "Représentation des co-occurrences de second ordre"],
      problemsRaised: ["SVD non incrémentale (recalcul complet à l'ajout de nouveaux documents)", "Perte de l'ordre des mots", "Dimensions latentes non interprétables"],
      tags: ["SVD", "LSA", "latent sémantique", "co-occurrence", "réduction de dimensionnalité"],
      keyPapers: [
        { title: "Indexing by Latent Semantic Analysis", authors: "Deerwester, S., Dumais, S.T. et al.", year: 1990, url: "https://doi.org/10.1002/(SICI)1097-4571(199009)41:6<391::AID-ASI1>3.0.CO;2-9" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 9 : CONNEXIONNISME ET MÉMOIRE NEURONALE (1982-2000)
    // ══════════════════════════════════════════════════════════

    {
      id: "hopfield-network",
      label: "Réseaux de Hopfield",
      type: "Architecture connexionniste",
      period: [1982, 1982],
      year: 1982,
      authors: ["John Hopfield"],
      description: "Hopfield (1982) : mémoire associative dans des réseaux récurrents symétriques. Stocke p patterns ξᵘ ∈ {-1,+1}ᴺ via wᵢⱼ = (1/N)·Σᵤ ξᵘᵢ·ξᵘⱼ. Énergie E = -(1/2)·Σᵢⱼ wᵢⱼ·sᵢ·sⱼ — les patterns stockés sont des minima locaux. Mémoire adressable par contenu (CAM) : une version corrompue d'un pattern converge vers l'original. Capacité maximale ≈ 0.138·N patterns.",
      problemsSolved: ["Premier modèle formel de mémoire associative dans un réseau de neurones", "Dualité énergie-mémoire", "Récupération robuste au bruit (CAM)"],
      problemsRaised: ["États parasites (spurious states)", "Capacité limitée à 0.14·N patterns", "Représentation binaire inadaptée aux données réelles"],
      tags: ["mémoire associative", "CAM", "énergie", "minima locaux", "connexionnisme"],
      keyPapers: [
        { title: "Neural Networks and Physical Systems with Emergent Collective Computational Abilities", authors: "Hopfield, J.J.", year: 1982, url: "https://doi.org/10.1073/pnas.79.8.2554" }
      ]
    },

    {
      id: "boltzmann-rbm",
      label: "Machines de Boltzmann / RBM",
      type: "Architecture connexionniste",
      period: [1983, 1986],
      year: 1985,
      authors: ["Geoffrey Hinton", "Terrence Sejnowski", "Paul Smolensky"],
      description: "Machines de Boltzmann (Hinton & Sejnowski, 1983-1985) : réseaux stochastiques symétriques avec unités visibles/cachées. Distribution de Boltzmann P(s) ∝ exp(-E(s)/T). Apprentissage : maximiser la vraisemblance, estimer les corrélations en phase réveil (données présentes) et phase sommeil (réseau en équilibre thermique). RBM (Smolensky, 1986) : suppression des connexions intra-couche → calcul exact et rapide des distributions conditionnelles.",
      problemsSolved: ["Mémoire générative : le réseau peut générer de nouveaux exemples", "Représentations latentes non supervisées", "Fondement des Deep Belief Networks (Hinton, 2006)"],
      problemsRaised: ["Apprentissage lent (sampling MCMC requis)", "Propriétés de stockage moins clairement définies que Hopfield"],
      tags: ["Boltzmann", "RBM", "génératif", "représentations latentes", "stochastique", "DBN"],
      keyPapers: [
        { title: "A Learning Algorithm for Boltzmann Machines", authors: "Ackley, D.H., Hinton, G.E., Sejnowski, T.J.", year: 1985, url: "https://doi.org/10.1207/s15516709cog0901_7" }
      ]
    },

    {
      id: "backpropagation",
      label: "Rétropropagation (Rumelhart, Hinton, Williams)",
      type: "Architecture connexionniste",
      period: [1986, 1986],
      year: 1986,
      authors: ["David Rumelhart", "Geoffrey Hinton", "Ronald Williams"],
      description: "Learning representations by back-propagating errors (Nature, 1986) : résolution du problème de l'entraînement des réseaux multi-couches. Le signal d'erreur se propage depuis la couche de sortie vers les couches profondes par la règle de la chaîne : δⱼ = f'(netⱼ)·Σₖ δₖ·wₖⱼ. Les couches cachées apprennent des représentations intermédiaires émergentes (ex. réseau family tree : nationalité, génération). Rupture paradigmatique : la connaissance est distribuée dans les poids.",
      problemsSolved: ["Entraînement efficace des réseaux multi-couches", "Apprentissage de représentations intermédiaires émergentes", "Sortie du connexionnisme de l'ère perceptron à couche unique"],
      problemsRaised: ["Gradient vanescent dans les réseaux profonds (Hochreiter, 1991)", "Oubli catastrophique dans l'apprentissage séquentiel", "Opacité des représentations apprises"],
      tags: ["backpropagation", "gradient", "réseaux profonds", "représentations distribuées", "deep learning"],
      keyPapers: [
        { title: "Learning Representations by Back-propagating Errors", authors: "Rumelhart, D.E., Hinton, G.E., Williams, R.J.", year: 1986, url: "https://doi.org/10.1038/323533a0" }
      ]
    },

    {
      id: "catastrophic-forgetting",
      label: "Oubli catastrophique (McCloskey & Cohen)",
      type: "Architecture connexionniste",
      period: [1989, 1989],
      year: 1989,
      authors: ["Michael McCloskey", "Neal Cohen"],
      description: "Catastrophic Interference (1989) : identification formelle du problème d'interférence catastrophique dans les réseaux entraînés séquentiellement. Apprendre une nouvelle tâche B efface rapidement les représentations de la tâche A précédemment apprise. Dilemme stabilité-plasticité : un réseau doit être à la fois plastique (apprendre) et stable (ne pas effacer). Solutions partielles : experience replay (Lin, 1992), EWC (Kirkpatrick et al., 2017).",
      problemsSolved: ["Identification d'un problème fondamental de la mémoire dans les architectures neuronales", "Formalisation du dilemme stabilité-plasticité"],
      problemsRaised: ["Le dilemme stabilité-plasticité reste non résolu de manière générale", "Les solutions actuelles (EWC, replay) font des compromis"],
      tags: ["oubli catastrophique", "stabilité-plasticité", "apprentissage continu", "interférence", "EWC"],
      keyPapers: [
        { title: "Catastrophic Interference in Connectionist Networks: The Sequential Learning Problem", authors: "McCloskey, M., Cohen, N.J.", year: 1989, url: "https://doi.org/10.1016/S0079-7421(08)60536-8" }
      ]
    },

    {
      id: "lstm",
      label: "LSTM (Hochreiter & Schmidhuber)",
      type: "Architecture connexionniste",
      period: [1997, 1997],
      year: 1997,
      authors: ["Sepp Hochreiter", "Jürgen Schmidhuber"],
      description: "Long Short-Term Memory (1997) : architecture gérant le gradient vanescent via une cellule de mémoire à trois portes. Forget gate fₜ = σ(Wf·[hₜ₋₁,xₜ]+bf). Input gate iₜ = σ(Wi·[hₜ₋₁,xₜ]+bi). Output gate oₜ = σ(Wo·[hₜ₋₁,xₜ]+bo). cₜ = fₜ⊙cₜ₋₁ + iₜ⊙c̃ₜ. Gradient constant quand fₜ ≈ 1. Applications : reconnaissance vocale, traduction, génération de texte.",
      problemsSolved: ["Capture des dépendances temporelles longue-portée dans les séquences", "Résolution du gradient vanescent/explosif", "Applications industrielles majeures (reconnaissance vocale, traduction)"],
      problemsRaised: ["Traitement séquentiel : pas de parallélisation sur la longueur de séquence", "Mémoire limitée à l'état de cellule (tampon fixe)", "Difficulté à copier/récupérer des informations à des positions arbitraires"],
      tags: ["LSTM", "portes", "gradient vanescent", "mémoire séquentielle", "RNN", "dépendances longue-portée"],
      keyPapers: [
        { title: "Long Short-Term Memory", authors: "Hochreiter, S., Schmidhuber, J.", year: 1997, url: "https://doi.org/10.1162/neco.1997.9.8.1735" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 10 : EMBEDDINGS DISTRIBUÉS ET KG EMBEDDINGS (2013)
    // ══════════════════════════════════════════════════════════

    {
      id: "word2vec",
      label: "Word2Vec (Mikolov et al.)",
      type: "Représentation vectorielle",
      period: [2013, 2013],
      year: 2013,
      authors: ["Tomas Mikolov", "Kai Chen", "Greg Corrado", "Jeffrey Dean"],
      description: "Word2Vec (arXiv:1301.3781, 2013) : deux architectures (CBOW, Skip-gram) pour apprendre des word embeddings depuis de vastes corpus. Skip-gram maximise Σₜ Σ₋c≤j≤c,j≠0 log P(wₜ₊ⱼ|wₜ). Propriété spectaculaire : arithmétique vectorielle de la signification (roi - homme + femme ≈ reine). Réalise l'hypothèse distributionnelle de Harris (1954). Limitation : représentation statique — polysémie non résolue.",
      problemsSolved: ["Apprentissage automatique de représentations sémantiques denses", "Arithmétique vectorielle des significations", "Réalisation opérationnelle du principe saussurien de valeur différentielle"],
      problemsRaised: ["Représentation statique : un seul vecteur par mot quelle que soit l'acception (polysémie)", "Pas de représentation des dépendances syntaxiques à longue portée"],
      tags: ["word embeddings", "Word2Vec", "Skip-gram", "CBOW", "distributionnel", "sémantique vectorielle"],
      keyPapers: [
        { title: "Efficient Estimation of Word Representations in Vector Space", authors: "Mikolov, T., Chen, K. et al.", year: 2013, url: "https://arxiv.org/abs/1301.3781" }
      ]
    },

    {
      id: "transe",
      label: "TransE — KG Embeddings (Bordes et al.)",
      type: "Représentation vectorielle",
      period: [2013, 2013],
      year: 2013,
      authors: ["Antoine Bordes", "Nicolas Usunier", "Alberto Garcia-Duran", "Jason Weston"],
      description: "TransE (2013) : embedding pour graphes de connaissances. Pour chaque triplet (h, r, t), apprend h, r, t ∈ ℝᵈ tels que h + r ≈ t. Énergie d(h+r, t). Complétion de graphe (link prediction) : trouver t* tel que d(h+r, t*) soit minimale. Forme de mémoire déductive distribuée — infère des relations non explicitement stockées. Base de nombreuses extensions (TransR, RotatE, etc.).",
      problemsSolved: ["Embedding efficace de graphes de connaissances", "Link prediction / complétion de graphe", "Inférence de relations non stockées explicitement"],
      problemsRaised: ["Représentation trop simple pour les relations réflexives/symétriques", "Incapacité à modéliser les relations N-to-N correctement"],
      tags: ["TransE", "KG embedding", "link prediction", "complétion de graphe", "traduction vectorielle"],
      keyPapers: [
        { title: "Translating Embeddings for Modeling Multi-Relational Data", authors: "Bordes, A. et al.", year: 2013, url: "https://proceedings.neurips.cc/paper/2013/hash/1cecc7a77928ca8133fa24680a88d2f9-Abstract.html" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 11 : MÉMOIRE AUGMENTÉE DIFFÉRENTIABLE (2014-2016)
    // ══════════════════════════════════════════════════════════

    {
      id: "ntm",
      label: "Neural Turing Machines (NTM)",
      type: "Mémoire augmentée",
      period: [2014, 2014],
      year: 2014,
      authors: ["Alex Graves", "Greg Wayne", "Ivo Danihelka"],
      description: "NTM (arXiv:1410.5401, 2014, DeepMind) : première architecture différentiable combinant un réseau contrôleur et une mémoire externe adressable M ∈ ℝᴺˣᴹ. Adressage composite : par contenu (cosinus) + par localisation (convolution + déplacement). Lecture : rₜ = Σᵢ wₜ(i)·Mₜ(i). Écriture via vecteur d'effacement + vecteur d'ajout. Apprentissage end-to-end. Peut apprendre à copier, trier, rappel associatif.",
      problemsSolved: ["Mémoire externe scalable indépendante de la taille du réseau", "Apprentissage de comportements algorithmiques depuis des exemples", "Première unification différentiable de la mémoire symbolique et connexionniste"],
      problemsRaised: ["Instabilité d'entraînement due à la sensibilité des adressages", "Difficulté à gérer les structures de données complexes (graphes, arbres)", "Mémoire effacée entre les séquences : pas de persistance long terme"],
      tags: ["NTM", "mémoire externe", "adressage différentiable", "Turing complet", "DeepMind"],
      keyPapers: [
        { title: "Neural Turing Machines", authors: "Graves, A., Wayne, G., Danihelka, I.", year: 2014, url: "https://arxiv.org/abs/1410.5401" }
      ]
    },

    {
      id: "memory-networks",
      label: "Memory Networks (Weston et al.)",
      type: "Mémoire augmentée",
      period: [2015, 2015],
      year: 2015,
      authors: ["Jason Weston", "Sumit Chopra", "Antoine Bordes"],
      description: "Memory Networks (2015) : mémoire externe m₁,...,mₙ avec k sauts d'attention. Pour chaque saut : scorer les emplacements mémoire sᵢ = Φₓ(x)ᵀ·Φₘ(mᵢ), pondérer pᵢ = softmax(sᵢ), calculer la réponse oₖ = Σpᵢ·Φc(mᵢ). End-to-End Memory Networks (Sukhbaatar et al., 2015 arXiv:1503.08895) rendent l'ensemble entraînable par rétropropagation.",
      problemsSolved: ["Accès sélectif à de grandes mémoires", "Raisonnement multi-étape sur des corpus de faits", "Séparation mémoire de stockage / processus d'inférence"],
      problemsRaised: ["Mémoire doit être réinitialisée entre les tâches", "Difficulté à encoder des connaissances relationnelles complexes"],
      tags: ["memory networks", "attention multi-hop", "mémoire externe", "QA", "raisonnement"],
      keyPapers: [
        { title: "Memory Networks", authors: "Weston, J., Chopra, S., Bordes, A.", year: 2015, url: "https://arxiv.org/abs/1410.3916" },
        { title: "End-To-End Memory Networks", authors: "Sukhbaatar, S. et al.", year: 2015, url: "https://arxiv.org/abs/1503.08895" }
      ]
    },

    {
      id: "dnc",
      label: "Differentiable Neural Computer (DNC)",
      type: "Mémoire augmentée",
      period: [2016, 2016],
      year: 2016,
      authors: ["Alex Graves", "Greg Wayne", "Malcolm Reynolds", "Tim Harley"],
      description: "DNC (Nature, 2016, DeepMind) : extension du NTM avec gestion de mémoire libre (mécanisme d'utilisation et de libération des emplacements) et liens temporels (graphe de liens enregistrant l'ordre d'écriture). Peut traverser la mémoire dans l'ordre temporel d'écriture ou inversement. Résout des tâches de raisonnement sur graphes, navigation, QA sur textes structurés.",
      problemsSolved: ["Gestion dynamique de la mémoire (allocation/libération)", "Liens temporels permettant la traversée ordonnée de la mémoire", "Raisonnement sur graphes et navigation"],
      problemsRaised: ["Entraînement toujours délicat et instable", "Scalabilité pour de très grandes mémoires"],
      tags: ["DNC", "mémoire libre", "liens temporels", "DeepMind", "raisonnement sur graphes"],
      keyPapers: [
        { title: "Hybrid Computing Using a Neural Network with Dynamic External Memory", authors: "Graves, A. et al.", year: 2016, url: "https://doi.org/10.1038/nature20101" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 12 : ATTENTION ET TRANSFORMER (2014-2018)
    // ══════════════════════════════════════════════════════════

    {
      id: "attention-bahdanau",
      label: "Mécanisme d'attention (Bahdanau)",
      type: "Modèle contextuel",
      period: [2014, 2014],
      year: 2014,
      authors: ["Dzmitry Bahdanau", "Kyunghyun Cho", "Yoshua Bengio"],
      description: "Neural Machine Translation by Jointly Learning to Align and Translate (ICLR 2015) : le décodeur calcule un vecteur de contexte cₜ = Σᵢ αₜᵢ·hᵢ où αₜᵢ = softmax(eₜᵢ) et eₜᵢ = a(sₜ₋₁, hᵢ). Résout le goulot d'étranglement du vecteur fixe dans les encodeurs-décodeurs. L'attention est interprétable comme une mémoire soft adressée par contenu : le décodeur consulte les états encodeurs pertinents à chaque étape.",
      problemsSolved: ["Accès sélectif à l'encodage de l'entrée entière à chaque pas de décodage", "Alignement automatiquement appris entre séquences source et cible", "Résolution du problème de mémoire fixe pour les séquences longues"],
      problemsRaised: ["Complexité quadratique O(n²) par rapport à la longueur de séquence", "Toujours limité aux séquences d'entrée (pas de mémoire externe persistante)"],
      tags: ["attention", "alignment", "soft attention", "seq2seq", "NMT", "mémoire sélective"],
      keyPapers: [
        { title: "Neural Machine Translation by Jointly Learning to Align and Translate", authors: "Bahdanau, D., Cho, K., Bengio, Y.", year: 2014, url: "https://arxiv.org/abs/1409.0473" }
      ]
    },

    {
      id: "transformer",
      label: "Transformer — Attention Is All You Need",
      type: "Modèle contextuel",
      period: [2017, 2017],
      year: 2017,
      authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan Gomez", "Łukasz Kaiser", "Illia Polosukhin"],
      description: "Attention Is All You Need (arXiv:1706.03762, 2017, Google Brain) : architecture basée exclusivement sur l'auto-attention multi-têtes. Attention(Q,K,V) = softmax(QKᵀ/√d)V. Multi-Head : ConcatᵢHead_i·Wᵒ. Chaque token peut directement voir tous les autres tokens de la séquence. Parallélisation totale remplaçant la séquentialité des RNN/LSTM. L'auto-attention est une mémoire associative différentiable opérant simultanément sur l'ensemble de la séquence.",
      problemsSolved: ["Parallélisation totale remplaçant la séquentialité des RNN/LSTM", "Dépendances longue-portée en un seul pas (O(1) vs O(n) pour LSTM)", "Architecture scalable aux très larges corpus"],
      problemsRaised: ["Contexte fixe et limité (fenêtre de contexte)", "Pas de mémoire persistante au-delà de la fenêtre", "Complexité quadratique O(n²) en mémoire et temps"],
      tags: ["Transformer", "auto-attention", "multi-head attention", "Q/K/V", "parallélisation", "NLP"],
      keyPapers: [
        { title: "Attention Is All You Need", authors: "Vaswani, A. et al.", year: 2017, url: "https://arxiv.org/abs/1706.03762" }
      ]
    },

    {
      id: "bert",
      label: "BERT (Devlin et al.)",
      type: "Modèle contextuel",
      period: [2018, 2018],
      year: 2018,
      authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
      description: "BERT (arXiv:1810.04805, Google, 2018) : encodeur bidirectionnel Transformer pré-entraîné par Masked Language Modeling (MLM) et Next Sentence Prediction. 110M-340M paramètres. Les représentations contextuelles résolvent la polysémie (limitation de Word2Vec). BERT marque la transition vers les LLMs où la mémoire des faits du monde est stockée implicitement dans les poids — mémoire paramétrique distribuée.",
      problemsSolved: ["Représentations contextuelles (résolution de la polysémie)", "Pré-entraînement transférable sur toute tâche NLP", "Encodage bidirectionnel du contexte"],
      problemsRaised: ["Connaissance figée au moment de l'entraînement (knowledge cutoff)", "Mémoire paramétrique non transparente et non vérifiable", "Impossibilité de mise à jour locale sans ré-entraînement"],
      tags: ["BERT", "MLM", "pré-entraînement", "contextuel", "bidirectionnel", "mémoire paramétrique"],
      keyPapers: [
        { title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", authors: "Devlin, J. et al.", year: 2018, url: "https://arxiv.org/abs/1810.04805" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 13 : LLMs ET REPRÉSENTATIONS ÉMERGENTES (2018-2025)
    // ══════════════════════════════════════════════════════════

    {
      id: "gpt-series",
      label: "GPT / GPT-3 (OpenAI)",
      type: "Modèle contextuel",
      period: [2018, 2020],
      year: 2020,
      authors: ["Alec Radford", "Tom Brown", "Benjamin Mann", "Ilya Sutskever"],
      description: "GPT (2018) → GPT-2 (2019) → GPT-3 (2020, 175B paramètres) : décodeur autorégressif pré-entraîné par Next Token Prediction (maximiser Σₜ log P(wₜ|w<ₜ)). GPT-3 montre des capacités émergentes inattendues : few-shot learning, raisonnement par analogie, traduction — non explicitement entraînées. La connaissance est implicite, distribuée dans 175B paramètres : vaste mais non structurée, probabiliste mais non grounded, générative mais non vérifiable.",
      problemsSolved: ["Apprentissage à grande échelle de la connaissance paramétrique", "Few-shot learning sans fine-tuning", "Capacités émergentes liées à la taille du modèle"],
      problemsRaised: ["Hallucinations : génération d'informations incorrectes présentées avec confiance (3-30%)", "Knowledge cutoff : connaissance figée", "Absence de mécanisme de vérification interne"],
      tags: ["GPT", "LLM", "autorégressif", "few-shot", "émergence", "mémoire paramétrique"],
      keyPapers: [
        { title: "Language Models are Few-Shot Learners (GPT-3)", authors: "Brown, T. et al.", year: 2020, url: "https://arxiv.org/abs/2005.14165" }
      ]
    },

    {
      id: "rag",
      label: "Retrieval-Augmented Generation (RAG)",
      type: "Modèle contextuel",
      period: [2020, 2020],
      year: 2020,
      authors: ["Patrick Lewis", "Ethan Perez", "Aleksandra Piktus", "Fabio Petroni"],
      description: "RAG (Lewis et al., Meta, 2020) : hybridation d'un LLM avec un système de récupération documentaire. Architecture : P(y|x) = Σz P(y|x,z)·P(z|x) où z est un document récupéré dans une base vectorielle selon sa similarité avec x. Réconcilie partiellement représentation paramétrique (LLM) et représentation documentaire (base de connaissances). Pallie les hallucinations et la connaissance figée.",
      problemsSolved: ["Connaissance mise à jour sans ré-entraînement (base documentaire actualisable)", "Réduction des hallucinations par ancrage dans des sources", "Hybridation mémoire paramétrique + mémoire symbolique/documentaire"],
      problemsRaised: ["Qualité de la récupération : si le bon document n'est pas récupéré, le LLM génère sur bases incorrectes", "Conflit de connaissances (knowledge conflict) entre le LLM et le contexte récupéré"],
      tags: ["RAG", "récupération", "hybridation", "base vectorielle", "hallucinations", "knowlege augmentation"],
      keyPapers: [
        { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", authors: "Lewis, P. et al.", year: 2020, url: "https://arxiv.org/abs/2005.11401" }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // ÉPOQUE 14 : NEURO-SYMBOLIQUE ET WORLD MODELS (2020-2026)
    // ══════════════════════════════════════════════════════════

    {
      id: "symbol-grounding",
      label: "Symbol Grounding Problem (Harnad)",
      type: "Neuro-symbolique/World Model",
      period: [1990, 1990],
      year: 1990,
      authors: ["Stevan Harnad"],
      description: "The Symbol Grounding Problem (Physica D, 1990) : comment un symbole peut-il avoir une signification intrinsèque si sa définition ne renvoie qu'à d'autres symboles ? Un dictionnaire définit les mots par d'autres mots — significations flottantes (floating) sans ancrage dans l'expérience sensorimotrice. Problème directement hérité de la réflexion peircienne sur la circularité des définitions symboliques. En 2025-2026, ce débat reste ouvert : Bender et al. (2020) 'stochastic parrot', vs Patel & Pavlick (2021), Schölkopf (2022).",
      problemsSolved: ["Formulation claire du problème de l'ancrage des symboles", "Critère de distinction entre manipulation syntaxique et compréhension sémantique"],
      problemsRaised: ["Reste partiellement ouvert en 2026 : grounding pour les concepts concrets amélioré par le multi-modal, mais échoue sur les abstraits", "Question de la suffisance du grounding textuel vs sensorimoteur pour les LLMs"],
      tags: ["symbol grounding", "sémantique", "embodiment", "circularité symbolique", "ancrage"],
      keyPapers: [
        { title: "The Symbol Grounding Problem", authors: "Harnad, S.", year: 1990, url: "https://doi.org/10.1016/0167-2789(90)90087-6" }
      ]
    },

    {
      id: "neuro-symbolic",
      label: "IA Neuro-symbolique",
      type: "Neuro-symbolique/World Model",
      period: [2020, 2025],
      year: 2022,
      authors: ["Pascal Hitzler", "Frank van Harmelen", "Gary Marcus", "Luc De Raedt"],
      description: "Revue systématique Neuro-Symbolic AI in 2024 (arXiv:2501.05435) : quatre stratégies d'hybridation. (1) Neural→Symbolic : extraction de règles depuis des représentations neurales (Neural Theorem Provers, ILP). (2) Symbolic→Neural : enrichir les réseaux avec des contraintes symboliques via fonctions de perte différentiables. (3) Parallel : module neuronal pour la perception + module symbolique pour le raisonnement formel (ex. NS-CL, LASER). (4) KG+LLM : enrichir les LLMs avec des knowledge graphs structurés. Promeut l'hétérogénéité méthodologique face aux scaling laws.",
      problemsSolved: ["Hybridation de la scalabilité neuronale et de la rigueur symbolique", "Réduction des données d'entraînement nécessaires (antiméthodologie des scaling laws)", "Amélioration de la transparence et de l'explicabilité"],
      problemsRaised: ["Comment intégrer des représentations symboliques dynamiques dans les modèles neuraux ?", "Comment développer des mécanismes métacognitifs (auto-monitoring) ?"],
      tags: ["neuro-symbolique", "hybride", "knowledge graph + LLM", "Neural Theorem Provers", "scaling laws"],
      keyPapers: [
        { title: "Neuro-Symbolic AI in 2024: A Systematic Review", authors: "Hitzler, P. et al.", year: 2024, url: "https://arxiv.org/abs/2501.05435" },
        { title: "Neuro-Symbolic Approaches in Artificial Intelligence", authors: "Hitzler, P. et al.", year: 2022, url: "https://doi.org/10.1093/nsr/nwac035" }
      ]
    },

    {
      id: "world-models",
      label: "World Models / JEPA (LeCun)",
      type: "Neuro-symbolique/World Model",
      period: [2022, 2026],
      year: 2022,
      authors: ["Yann LeCun", "Google DeepMind (Genie 3)", "OpenAI"],
      description: "Paradigme des world models (LeCun, 2022 et AMI Labs, 2025) : modèles apprenants des représentations structurées de la dynamique et de la causalité du monde physique. JEPA (Joint Embedding Predictive Architecture) : prédit les représentations de l'environnement futur dans un espace latent abstrait (non les pixels bruts). Contraintes d'invariance forçant l'abstraction des régularités causales. V-JEPA 2, NWM. Genie 3 (Google DeepMind, 2025) : génère des environnements 3D persistants à 24fps. Fidélité physique intrinsèque (Newton, dynamique des fluides) sans programmation explicite.",
      problemsSolved: ["Représentation grounded sensorimotrice (vs purement textuelle des LLMs)", "Planification intrinsèque dans l'espace latent", "Zéro-shot sur nouvelles tâches physiques"],
      problemsRaised: ["Généralisation aux domaines abstraits au-delà du physique", "Intégration avec les systèmes symboliques pour la vérifiabilité", "Scalabilité et coût computationnel des simulations 3D"],
      tags: ["world models", "JEPA", "grounding", "causalité", "planification", "embodied AI", "AGI"],
      keyPapers: [
        { title: "A Path Towards Autonomous Machine Intelligence", authors: "LeCun, Y.", year: 2022, url: "https://openreview.net/pdf?id=BZ5a1r-kVsf" },
        { title: "World Models Race 2026", authors: "Introl Blog", year: 2026, url: "https://introl.com/blog/world-models-race-agi-2026" },
        { title: "Simulating the Visual World with Artificial Intelligence: A Roadmap", authors: "Multiple authors", year: 2024, url: "https://arxiv.org/abs/2403.19022" }
      ]
    }

  ], // fin nodes

  // ─── ARCS ─────────────────────────────────────────────────
  edges: [

    // ══ Fondations cognitives → IA symbolique ══════════════

    { id: "e001", from: "cave-art",             to: "mesopotamian-tokens",     type: "Evolution",   label: "Montée en abstraction : icône → symbole arbitraire" },
    { id: "e002", from: "mesopotamian-tokens",   to: "aristotle-categories",   type: "Inspiration", label: "Notation abstraite → catégorisation formelle" },
    { id: "e003", from: "aristotle-categories",  to: "llull-ars-magna",        type: "Inspiration", label: "Catégories et syllogismes → combinatoire mécanique" },
    { id: "e004", from: "llull-ars-magna",        to: "leibniz-characteristica",type: "Inspiration", label: "Combinatoire de primitives → Characteristica Universalis" },
    { id: "e005", from: "aristotle-categories",  to: "leibniz-characteristica",type: "Inspiration", label: "Catégories → primitives sémantiques universelles" },
    { id: "e006", from: "leibniz-characteristica",to: "boole-algebra",         type: "Inspiration", label: "Calcul du raisonnement → algèbre de la logique" },
    { id: "e007", from: "boole-algebra",          to: "frege-begriffsschrift",  type: "Evolution",   label: "Algèbre propositionnelle → logique du premier ordre (quantificateurs)" },
    { id: "e008", from: "frege-begriffsschrift",  to: "turing-computability",   type: "Inspiration", label: "Crise des fondements (Russell 1901, Gödel 1931) → computabilité" },
    { id: "e009", from: "turing-computability",   to: "logic-theorist",         type: "Inspiration", label: "Machine de Turing → premiers programmes d'IA (computation = intelligence)" },

    // ══ Fondations connexionnistes ══════════════════════════

    { id: "e010", from: "mcculloch-pitts",        to: "hebb-rule",              type: "Inspiration", label: "Neurone formel → mécanisme de plasticité synaptique" },
    { id: "e011", from: "hebb-rule",              to: "hopfield-network",       type: "Evolution",   label: "Règle de Hebb → mémoire associative dans réseau récurrent" },
    { id: "e012", from: "shannon-information",    to: "vsm-tfidf",              type: "Inspiration", label: "Théorie de l'information → pondération TF-IDF et espace vectoriel" },
    { id: "e013", from: "mcculloch-pitts",        to: "logic-theorist",         type: "Convergence", label: "Deux lignées computationnelles (connexionniste/symbolique) émergent simultanément" },

    // ══ IA symbolique — évolutions ══════════════════════════

    { id: "e014", from: "logic-theorist",         to: "gps",                    type: "Evolution",   label: "Raisonnement symbolique → architecture avec mémoire de travail séparée" },
    { id: "e015", from: "gps",                    to: "advice-taker",           type: "Convergence", label: "GPS : représentation séparée → Advice Taker : base de connaissances déclarative mutable" },
    { id: "e016", from: "frege-begriffsschrift",  to: "resolution-robinson",    type: "Evolution",   label: "FOL → principe de résolution (inférence automatique)" },
    { id: "e017", from: "advice-taker",           to: "resolution-robinson",    type: "Integration", label: "KB déclarative + résolution = moteur d'inférence pratique" },
    { id: "e018", from: "resolution-robinson",    to: "dendral",                type: "Application", label: "Résolution → systèmes experts (LISP + règles de production)" },
    { id: "e019", from: "resolution-robinson",    to: "mycin",                  type: "Application", label: "Inférence automatique → raisonnement médical sous incertitude" },
    { id: "e020", from: "resolution-robinson",    to: "ops5-rete",              type: "Evolution",   label: "Résolution → systèmes de production (Rete pour le pattern-matching)" },
    { id: "e021", from: "mcculloch-pitts",        to: "semantic-networks",      type: "Inspiration", label: "Graphe neuronal → graphe de connaissances orienté étiqueté" },
    { id: "e022", from: "semantic-networks",      to: "shrdlu",                 type: "Integration", label: "Réseaux sémantiques + logique procédurale → SHRDLU hybride" },
    { id: "e023", from: "frames-minsky",          to: "semantic-networks",      type: "Critique",    label: "Frames répondent aux ambiguïtés des liens IS-A (Woods 1975)" },
    { id: "e024", from: "semantic-networks",      to: "frames-minsky",          type: "Evolution",   label: "Réseaux sémantiques informels → frames avec sémantique par défaut" },
    { id: "e025", from: "scripts-schank",         to: "frames-minsky",          type: "Integration", label: "Scripts (stéréotypés+temporels) s'appuient sur le formalisme des frames" },
    { id: "e026", from: "frames-minsky",          to: "kl-one",                 type: "Evolution",   label: "Frames → sémantique formelle via structured inheritance networks" },
    { id: "e027", from: "kl-one",                 to: "description-logics",     type: "Evolution",   label: "KL-ONE → logiques de description (fragments décidables de FOL)" },

    // ══ Calcul des situations → logiques non-monotones ═════

    { id: "e028", from: "situation-calculus",     to: "default-logic",          type: "Inspiration", label: "Frame problem → logique par défaut (règle d'inertie)" },
    { id: "e029", from: "situation-calculus",     to: "circumscription",        type: "Evolution",   label: "Frame problem → circonscription (minimisation des anormaux)" },
    { id: "e030", from: "ops5-rete",              to: "truth-maintenance",      type: "Integration", label: "Systèmes de production + TMS pour la révision des croyances" },
    { id: "e031", from: "default-logic",          to: "agm-revision",           type: "Convergence", label: "Logique par défaut + AGM = théorie complète de la révision des croyances" },
    { id: "e032", from: "truth-maintenance",      to: "agm-revision",           type: "Convergence", label: "TMS computationnel + AGM formel = vision complémentaire de la révision" },

    // ══ Architectures cognitives ════════════════════════════

    { id: "e033", from: "gps",                    to: "soar",                   type: "Evolution",   label: "GPS mémoire de travail → SOAR architecture cognitive unifiée" },
    { id: "e034", from: "ops5-rete",              to: "soar",                   type: "Integration", label: "Systèmes de production (OPS5) intégrés dans SOAR" },
    { id: "e035", from: "soar",                   to: "act-r",                  type: "Convergence", label: "SOAR (cognitif unifié) → ACT-R (modèle quantitatif de la mémoire)" },
    { id: "e036", from: "scripts-schank",         to: "cbr-cyrus",              type: "Evolution",   label: "Scripts + MOPs → E-MOPs et mémoire épisodique computationnelle (CBR)" },
    { id: "e037", from: "act-r",                  to: "clarion",                type: "Inspiration", label: "ACT-R (implicite/explicite) → CLARION (extraction de règles)" },

    // ══ Probabiliste ════════════════════════════════════════

    { id: "e038", from: "mycin",                  to: "bayesian-networks",      type: "Rupture",     label: "Facteurs de certitude ad hoc → fondement probabiliste rigoureux (Pearl)" },
    { id: "e039", from: "shannon-information",    to: "bayesian-networks",      type: "Inspiration", label: "Théorie de l'information → probabilisme et inférence bayésienne" },
    { id: "e040", from: "bayesian-networks",      to: "hmm",                    type: "Integration", label: "Réseaux bayésiens → HMMs (cas particulier de DAG temporel)" },

    // ══ Vers le Web sémantique ══════════════════════════════

    { id: "e041", from: "description-logics",     to: "rdf-owl",                type: "Application", label: "Logiques de description → OWL (fragment DL SHIQ pour le Web)" },
    { id: "e042", from: "cyc",                    to: "rdf-owl",                type: "Convergence", label: "CYC (sens commun) + Web Sémantique = vision distribuée des ontologies" },
    { id: "e043", from: "kl-one",                 to: "cyc",                    type: "Inspiration", label: "KL-ONE (frames formels) → CYC (frames + microthéories + sens commun)" },
    { id: "e044", from: "rdf-owl",                to: "knowledge-graphs",       type: "Evolution",   label: "OWL/RDF → knowledge graphs industriels (DBpedia, Freebase, Wikidata)" },

    // ══ Connexionnisme et représentations distribuées ═══════

    { id: "e045", from: "hopfield-network",       to: "boltzmann-rbm",          type: "Evolution",   label: "Mémoire associative énergétique → mémoire générative stochastique" },
    { id: "e046", from: "boltzmann-rbm",          to: "backpropagation",        type: "Convergence", label: "RBM (Hinton) + backpropagation = Deep Belief Networks (2006)" },
    { id: "e047", from: "backpropagation",        to: "catastrophic-forgetting", type: "Application", label: "Entraînement séquentiel de réseaux → oubli catastrophique identifié" },
    { id: "e048", from: "backpropagation",        to: "lstm",                   type: "Evolution",   label: "Backpropagation + gradient vanescent → LSTM (portes de mémoire)" },
    { id: "e049", from: "hebb-rule",              to: "backpropagation",        type: "Inspiration", label: "Apprentissage hebbien local → gradient global (Rumelhart 1986)" },

    // ══ IR et LSA → Embeddings ══════════════════════════════

    { id: "e050", from: "vsm-tfidf",              to: "lsa",                    type: "Evolution",   label: "Espace vectoriel sparse → espace sémantique latent dense (SVD)" },
    { id: "e051", from: "lsa",                    to: "word2vec",               type: "Evolution",   label: "Co-occurrences latentes → embeddings appris par réseau neuronal" },
    { id: "e052", from: "backpropagation",        to: "word2vec",               type: "Application", label: "Backpropagation → apprentissage efficace de représentations de mots" },

    // ══ KG Embeddings ═══════════════════════════════════════

    { id: "e053", from: "knowledge-graphs",       to: "transe",                 type: "Evolution",   label: "Graphes de connaissances structurés → embeddings de graphes (TransE)" },
    { id: "e054", from: "word2vec",               to: "transe",                 type: "Inspiration", label: "Vectorisation des mots → vectorisation des entités et relations" },

    // ══ Mémoire augmentée différentiable ════════════════════

    { id: "e055", from: "turing-computability",   to: "ntm",                    type: "Inspiration", label: "Machine de Turing → Neural Turing Machine (différentiable)" },
    { id: "e056", from: "lstm",                   to: "ntm",                    type: "Evolution",   label: "LSTM (mémoire interne) → NTM (mémoire externe adressable)" },
    { id: "e057", from: "ntm",                    to: "dnc",                    type: "Evolution",   label: "NTM → DNC (gestion mémoire libre + liens temporels)" },
    { id: "e058", from: "ntm",                    to: "memory-networks",        type: "Convergence", label: "Mémoire externe (NTM) + attention multi-hop = Memory Networks" },

    // ══ Attention → Transformer → LLMs ══════════════════════

    { id: "e059", from: "lstm",                   to: "attention-bahdanau",     type: "Evolution",   label: "Encodeur-décodeur LSTM + attention = résolution du goulot d'étranglement" },
    { id: "e060", from: "attention-bahdanau",     to: "transformer",            type: "Rupture",     label: "Attention séquentielle → auto-attention universelle parallèle (abandon de la récurrence)" },
    { id: "e061", from: "transformer",            to: "bert",                   type: "Evolution",   label: "Transformer encodeur → BERT (pré-entraînement MLM bidirectionnel)" },
    { id: "e062", from: "transformer",            to: "gpt-series",             type: "Evolution",   label: "Transformer décodeur → GPT (génération autoregressive)" },
    { id: "e063", from: "word2vec",               to: "bert",                   type: "Rupture",     label: "Embeddings statiques → embeddings contextuels (polysémie résolue)" },
    { id: "e064", from: "lsa",                    to: "transformer",            type: "Inspiration", label: "Représentation sémantique distribuée → espace d'attention généralisé" },

    // ══ Vers le neuro-symbolique et les world models ════════

    { id: "e065", from: "knowledge-graphs",       to: "neuro-symbolic",         type: "Integration", label: "KG structurés + LLMs = approche KG-augmented neuro-symbolique" },
    { id: "e066", from: "bert",                   to: "rag",                    type: "Integration", label: "LLM paramétrique + récupération documentaire = RAG" },
    { id: "e067", from: "knowledge-graphs",       to: "rag",                    type: "Integration", label: "Base de connaissances structurée + LLM génératif = RAG hybride" },
    { id: "e068", from: "gpt-series",             to: "rag",                    type: "Integration", label: "GPT-3 hallucinations → RAG comme solution partielle" },
    { id: "e069", from: "symbol-grounding",       to: "neuro-symbolic",         type: "Inspiration", label: "Symbol grounding problem → motivation de l'hybridation neuro-symbolique" },
    { id: "e070", from: "symbol-grounding",       to: "world-models",           type: "Inspiration", label: "Symbol grounding → world models comme solution par ancrage sensorimoteur" },
    { id: "e071", from: "neuro-symbolic",         to: "world-models",           type: "Evolution",   label: "Hybridation neuro-symbolique → world models comme prochaine rupture" },
    { id: "e072", from: "bayesian-networks",      to: "world-models",           type: "Inspiration", label: "Raisonnement causal (Pearl) → causalité intrinsèque dans les world models" },
    { id: "e073", from: "gpt-series",             to: "world-models",           type: "Rupture",     label: "LLMs (token, statistique, non grounded) → world models (état monde, causal, ancré)" },
    { id: "e074", from: "cbr-cyrus",              to: "neuro-symbolic",         type: "Inspiration", label: "Mémoire épisodique symbolique (CBR) → mémoire épisodique neuronale différentiable" },
    { id: "e075", from: "catastrophic-forgetting",to: "neuro-symbolic",         type: "Inspiration", label: "Oubli catastrophique → motivation des architectures hybrides (stabilité+plasticité)" },
    { id: "e076", from: "description-logics",     to: "neuro-symbolic",         type: "Integration", label: "DL (rigueur formelle) + neuronale (scalabilité) = neuro-symbolique" },

    // ══ Critique et ruptures philosophiques ═════════════════

    { id: "e077", from: "aristotle-categories",  to: "situation-calculus",     type: "Inspiration", label: "Ontologie statique → calcul des situations dynamique" },
    { id: "e078", from: "frege-begriffsschrift",  to: "kl-one",                type: "Inspiration", label: "FOL (expressivité) → DL (fragments décidables pour l'ontologie)" },
    { id: "e079", from: "dendral",               to: "cyc",                    type: "Inspiration", label: "Systèmes experts spécialisés → ambition de la connaissance générale (CYC)" },
    { id: "e080", from: "mycin",                 to: "ops5-rete",              type: "Evolution",   label: "Règles de production MYCIN → généralisation OPS5/Rete" }

  ] // fin edges

}; // fin GRAPH_DATA

// ─── Export pour Node.js (extensibilité) ──────────────────
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GRAPH_DATA;
}
