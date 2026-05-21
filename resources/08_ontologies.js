// ============================================================
// resources/08_ontologies.js
// Thématique : Ontologies et Web sémantique (1989-2012)
// ============================================================

export const TOPIC = {
  meta: {
    title: "Ontologies et Web sémantique",
    theme: "ontologies",
    order: 8,
    description: "De Cyc aux knowledge graphs : formalisation à grande échelle des connaissances du monde."
  },

  nodes: [
    {
      id: "cyc",
      label: "CYC (Lenat)",
      type: "Ontologie/Web sémantique",
      period: [1984, 2022],
      year: 1984,
      authors: ["Douglas Lenat"],
      description: "CYC (1984, MCC) : ambition de coder exhaustivement le common sense dans une base de règles et faits. ~25 millions d'assertions, ~300 000 concepts, 15 000 prédicats. Microthéories pour la cohérence locale. Montre la difficulté colossale du common sense : la plus grande base de connaissances manuelle jamais construite reste incomplète.",
      problemsSolved: ["Première large base de common sense", "Système de microthéories pour la cohérence locale"],
      problemsRaised: ["Acquisition manuelle à l'échelle (knowledge acquisition bottleneck radical)", "Incomplétude : certains problèmes de sens commun restent non couverts"],
      tags: ["CYC", "common sense", "microthéories", "base de connaissances", "Lenat"],
      keyPapers: [{ title: "CYC: A Large-Scale Investment in Knowledge Infrastructure", authors: "Lenat, D.B.", year: 1995, url: "https://doi.org/10.1145/219717.219745" }]
    },
    {
      id: "wordnet",
      label: "WordNet",
      type: "Ontologie/Web sémantique",
      period: [1985, 1995],
      year: 1995,
      authors: ["George Miller", "Christiane Fellbaum"],
      description: "WordNet (Princeton, 1985-1995) : base lexicale du lexique anglais organisée en synsets (ensembles de synonymes). Relations : hyperonymie (IS-A), hyponymie, méronymie, antonymie. ~117 000 synsets. Ressource standard pour l'annotation sémantique et l'évaluation NLP.",
      problemsSolved: ["Ressource lexicale de référence pour NLP", "Organisation systématique du lexique selon les relations sémantiques"],
      problemsRaised: ["Couverture des sens contextuels insuffisante", "Maintenance et évolution lente"],
      tags: ["WordNet", "synsets", "hyperonymie", "lexique", "sémantique lexicale"],
      keyPapers: [{ title: "WordNet: A Lexical Database for English", authors: "Miller, G.A.", year: 1995, url: "https://doi.org/10.1145/219717.219748" }]
    },
    {
      id: "owl-semantic-web",
      label: "OWL / Web Sémantique",
      type: "Ontologie/Web sémantique",
      period: [2001, 2004],
      year: 2004,
      authors: ["Tim Berners-Lee", "James Hendler", "Ora Lassila", "W3C"],
      description: "The Semantic Web (Scientific American, 2001) + OWL (2004) : pile RDF-RDFS-OWL sur les logiques de description (SHOIN/SROIQ). Triple-store, raisonnement par classification. Les knowledge graphs industriels (DBpedia, Freebase, Wikidata) s'en inspirent.",
      problemsSolved: ["Web de données structurées et interopérables", "Raisonnement automatique sur des ontologies ouvertes"],
      problemsRaised: ["Adoption limitée par la complexité du full OWL", "Compromis OWA/CWA non intuitif pour les développeurs"],
      tags: ["OWL", "RDF", "SPARQL", "triple-store", "web sémantique"],
      keyPapers: [{ title: "The Semantic Web", authors: "Berners-Lee, Hendler, Lassila", year: 2001, url: "https://www.scientificamerican.com/article/the-semantic-web/" }]
    },
    {
      id: "knowledge-graphs",
      label: "Graphes de connaissances (Knowledge Graphs)",
      type: "Ontologie/Web sémantique",
      period: [2010, 2015],
      year: 2012,
      authors: ["Google", "Freebase", "Wikidata"],
      description: "Google Knowledge Graph (2012), Freebase, DBpedia, Wikidata, YAGO : milliards de triplets (entité, relation, entité). Embedding des graphes de connaissances (TransE, 2013). Pont entre représentation symbolique et apprentissage différentiable.",
      problemsSolved: ["Représentation structurée de milliards de faits du monde réel", "Enrichissement des LLMs par RAG + KG"],
      problemsRaised: ["Incomplétude (≈ 66% des entités manquent de propriétés)", "Curation et maintien à jour à l'échelle"],
      tags: ["knowledge graph", "triplets", "embeddings", "Wikidata", "RAG"],
      keyPapers: [{ title: "Translating Embeddings for Modeling Multi-relational Data", authors: "Bordes et al.", year: 2013, url: "https://proceedings.neurips.cc/paper/2013/hash/1cecc7a77928ca8133fa24680a88d2f9-Abstract.html" }]
    }
  ],

  edges: [
    { id: "e-frames-cyc",     from: "frames-minsky",     to: "cyc",              type: "Evolution",   label: "common sense à grande échelle" },
    { id: "e-semantic-wn",    from: "semantic-networks", to: "wordnet",           type: "Evolution",   label: "base lexicale structurée" },
    { id: "e-dl-owl",         from: "description-logics", to: "owl-semantic-web", type: "Application", label: "OWL sur logiques de description" },
    { id: "e-owl-kg",         from: "owl-semantic-web",   to: "knowledge-graphs", type: "Evolution",   label: "knowledge graphs industriels" },
    { id: "e-cyc-kg",         from: "cyc",                to: "knowledge-graphs", type: "Convergence", label: "base de faits à grande échelle" }
  ]
};
