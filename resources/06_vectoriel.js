// ============================================================
// resources/06_vectoriel.js
// Thématique : Représentations vectorielles (1972-2014)
// ============================================================

export const TOPIC = {
  meta: {
    title: "Représentations vectorielles",
    theme: "vectorial",
    order: 6,
    description: "De l'espace vectoriel LSA aux word embeddings Word2Vec et GloVe."
  },

  nodes: [
    {
      id: "vector-space-model",
      label: "Modèle espace vectoriel (Salton)",
      type: "Représentation vectorielle",
      period: [1971, 1975],
      year: 1975,
      authors: ["Gerard Salton"],
      description: "SMART (1971-1975) : représentation des documents et requêtes comme vecteurs TF-IDF dans un espace R^|V|. Similarité cosinus = cos(θ) = (d·q)/(||d||.||q||). Première représentation continue des significations textuelles.",
      problemsSolved: ["Recherche documentaire par similarité continue", "Premier modèle de représentation non-symbolique du sens"],
      problemsRaised: ["Sparse : vocabulaire de 10⁵-10⁶ dimensions", "Ignore l'ordre des mots et la sémantique fine"],
      tags: ["TF-IDF", "cosinus", "RI", "vecteurs creux", "SMART"],
      keyPapers: [{ title: "A Vector Space Model for Automatic Indexing", authors: "Salton, G.", year: 1975, url: "https://doi.org/10.1145/361219.361220" }]
    },
    {
      id: "lsa",
      label: "Analyse Sémantique Latente (LSA)",
      type: "Représentation vectorielle",
      period: [1988, 1990],
      year: 1990,
      authors: ["Scott Deerwester", "Susan Dumais", "George Furnas", "Thomas Landauer"],
      description: "LSI/LSA (1990) : SVD de la matrice termes-documents pour réduire le bruit et capturer la co-occurrence sémantique. Synonymes proches dans l'espace réduit. Première représentation dense distribuant le sens sur plusieurs dimensions.",
      problemsSolved: ["Synonymie : termes différents, sens proches", "Représentation dense de la sémantique"],
      problemsRaised: ["Pas de sens intrinsèque aux dimensions", "SVD coûteuse sur grands corpus"],
      tags: ["LSA", "SVD", "sémantique latente", "représentation dense", "co-occurrence"],
      keyPapers: [{ title: "Indexing by Latent Semantic Analysis", authors: "Deerwester et al.", year: 1990, url: "https://doi.org/10.1002/(SICI)1097-4571(199009)41:6%3C391::AID-ASI1%3E3.0.CO;2-9" }]
    },
    {
      id: "word2vec",
      label: "Word2Vec",
      type: "Représentation vectorielle",
      period: [2013, 2013],
      year: 2013,
      authors: ["Tomáš Mikolov", "Kai Chen", "Greg Corrado", "Jeffrey Dean"],
      description: "Efficient Estimation of Word Representations in Vector Space (2013) : CBOW (prédire le mot central) et Skip-gram (prédire le contexte). Vecteurs denses de 50-300 dimensions. roi - homme + femme ≈ reine. Scalable à des milliards de tokens.",
      problemsSolved: ["Embeddings denses et scalables", "Relations sémantiques analogiques", "Transfert pour downstream NLP"],
      problemsRaised: ["Vecteur unique par mot (polysmie ignorée)", "Biais des corpus d'entraînement amplifiés"],
      tags: ["word2vec", "embeddings", "CBOW", "skip-gram", "analogies"],
      keyPapers: [{ title: "Efficient Estimation of Word Representations in Vector Space", authors: "Mikolov et al.", year: 2013, url: "https://arxiv.org/abs/1301.3781" }]
    },
    {
      id: "glove",
      label: "GloVe",
      type: "Représentation vectorielle",
      period: [2014, 2014],
      year: 2014,
      authors: ["Jeffrey Pennington", "Richard Socher", "Christopher Manning"],
      description: "GloVe (Global Vectors, 2014) : factorisation de la matrice de co-occurrence log-normalisée. Unification des approches globales (LSA) et locales (Word2Vec). J(Θ) = Σ f(Xᵢⱼ)(wᵢᵀ wᵣ + bᵢ + bᵣ - log Xᵢⱼ)². Meilleures performances sur analogies.",
      problemsSolved: ["Synthèse approches locales et globales", "Fondé sur des statistiques corpus"],
      problemsRaised: ["Toujours un vecteur par mot (polysmie)", "Succède mais ne résout pas le problème de contexte"],
      tags: ["GloVe", "co-occurrence", "factorisation", "analogies", "NLP"],
      keyPapers: [{ title: "GloVe: Global Vectors for Word Representation", authors: "Pennington, Socher, Manning", year: 2014, url: "https://doi.org/10.3115/v1/D14-1162" }]
    }
  ],

  edges: [
    { id: "e-shannon-vsm",   from: "shannon-information", to: "vector-space-model", type: "Inspiration", label: "quantification de l'information" },
    { id: "e-vsm-lsa",       from: "vector-space-model",  to: "lsa",               type: "Evolution",   label: "sémantique latente" },
    { id: "e-back-w2v",      from: "backpropagation",     to: "word2vec",           type: "Application", label: "représentations distribuées" },
    { id: "e-lsa-w2v",       from: "lsa",                 to: "word2vec",           type: "Rupture",     label: "embeddings neuronaux vs SVD" },
    { id: "e-w2v-glove",     from: "word2vec",             to: "glove",              type: "Integration", label: "global + local" }
  ]
};
