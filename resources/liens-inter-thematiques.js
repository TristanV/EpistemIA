// ============================================================
// resources/liens-inter-thématiques.js
// Arcs inter-thématiques : connexions entre thématiques distinctes
// Ces arcs lient des nœuds provenant de différents fichiers thématiques
// ============================================================

export const CROSS_TOPIC = {
  meta: {
    title: "Liens inter-thématiques",
    description: "Arcs de transition et d'inspiration entre thématiques disjointes"
  },

  // Les nœuds ne sont pas redéfinis ici (ils existent dans leurs fichiers respectifs)
  // Seuls les arcs inter-thématiques sont listés
  nodes: [],

  edges: [
    // ══ Arcs intra-thématiques complétés (non trouvés dans les fichiers) ════

    // e035-e037 : Architectures cognitives / Systèmes experts
    { id: "e-soar-clarion",       from: "soar",              to: "clarion",         type: "Integration", label: "architecture hybride" },
    { id: "e-actr-clarion",       from: "act-r",             to: "clarion",         type: "Inspiration", label: "ACT-R (implicite/explicite) → CLARION (extraction de règles)" },

    // e038-e040 : Systèmes experts vers Probabiliste
    { id: "e-mycin-bayesian",     from: "mycin",             to: "bayesian-networks", type: "Rupture", label: "Facteurs de certitude ad hoc → fondement probabiliste rigoureux (Pearl)" },
    { id: "e-shannon-bayesian",   from: "shannon-information", to: "bayesian-networks", type: "Inspiration", label: "Théorie de l'information → probabilisme et inférence bayésienne" },
    { id: "e-bayesian-hmm",       from: "bayesian-networks",  to: "hmm",            type: "Integration", label: "Réseaux bayésiens → HMMs (cas particulier de DAG temporel)" },

    // e041-e044 : Description Logics vers Web Sémantique / Knowledge Graphs
    { id: "e-dl-owl",             from: "description-logics", to: "rdf-owl",        type: "Application", label: "Logiques de description → OWL (fragment DL SHIQ pour le Web)" },
    { id: "e-cyc-owl",            from: "cyc",               to: "rdf-owl",        type: "Convergence", label: "CYC (sens commun) + Web Sémantique = vision distribuée des ontologies" },
    { id: "e-klone-cyc",          from: "kl-one",            to: "cyc",            type: "Inspiration", label: "KL-ONE (frames formels) → CYC (frames + microthéories + sens commun)" },
    { id: "e-owl-kg",             from: "rdf-owl",           to: "knowledge-graphs", type: "Evolution", label: "OWL/RDF → knowledge graphs industriels (DBpedia, Freebase, Wikidata)" },

    // e045-e049 : Connexionnisme profond
    { id: "e-hopfield-rbm",       from: "hopfield-network",  to: "boltzmann-rbm",  type: "Evolution", label: "Mémoire associative énergétique → mémoire générative stochastique" },
    { id: "e-rbm-backprop",       from: "boltzmann-rbm",     to: "backpropagation", type: "Convergence", label: "RBM (Hinton) + backpropagation = Deep Belief Networks (2006)" },
    { id: "e-backprop-catforgetting", from: "backpropagation", to: "catastrophic-forgetting", type: "Application", label: "Entraînement séquentiel de réseaux → oubli catastrophique identifié" },
    { id: "e-backprop-lstm",      from: "backpropagation",   to: "lstm",           type: "Evolution", label: "Backpropagation + gradient vanescent → LSTM (portes de mémoire)" },
    { id: "e-hebb-backprop",      from: "hebb-rule",         to: "backpropagation", type: "Inspiration", label: "Apprentissage hebbien local → gradient global (Rumelhart 1986)" },

    // e050-e052 : Vectoriel vers Embeddings
    { id: "e-lsa-w2v",            from: "lsa",               to: "word2vec",       type: "Evolution", label: "Co-occurrences latentes → embeddings appris par réseau neuronal" },
    { id: "e-backprop-w2v",       from: "backpropagation",   to: "word2vec",       type: "Application", label: "Backpropagation → apprentissage efficace de représentations de mots" },

    // e053-e054 : KG Embeddings
    { id: "e-kg-transe",          from: "knowledge-graphs",  to: "transe",         type: "Evolution", label: "Graphes de connaissances structurés → embeddings de graphes (TransE)" },
    { id: "e-w2v-transe",         from: "word2vec",          to: "transe",         type: "Inspiration", label: "Vectorisation des mots → vectorisation des entités et relations" },

    // e055-e058 : Mémoire augmentée
    { id: "e-turing-ntm",         from: "turing-computability", to: "ntm",         type: "Inspiration", label: "Machine de Turing → Neural Turing Machine (différentiable)" },
    { id: "e-lstm-ntm",           from: "lstm",              to: "ntm",            type: "Evolution", label: "LSTM (mémoire interne) → NTM (mémoire externe adressable)" },
    { id: "e-ntm-dnc",            from: "ntm",               to: "dnc",            type: "Evolution", label: "NTM → DNC (gestion mémoire libre + liens temporels)" },
    { id: "e-ntm-memnet",         from: "ntm",               to: "memory-networks", type: "Convergence", label: "Mémoire externe (NTM) + attention multi-hop = Memory Networks" },

    // e059-e064 : Attention vers Transformer vers LLMs
    { id: "e-lstm-attention",     from: "lstm",              to: "attention-bahdanau", type: "Evolution", label: "Encodeur-décodeur LSTM + attention = résolution du goulot d'étranglement" },
    { id: "e-attention-transformer", from: "attention-bahdanau", to: "attention-transformer", type: "Rupture", label: "Attention séquentielle → auto-attention universelle parallèle (abandon de la récurrence)" },
    { id: "e-transformer-bert",   from: "attention-transformer", to: "bert",       type: "Evolution", label: "Transformer encodeur → BERT (pré-entraînement MLM bidirectionnel)" },
    { id: "e-transformer-gpt",    from: "attention-transformer", to: "gpt-family", type: "Evolution", label: "Transformer décodeur → GPT (génération autoregressive)" },
    { id: "e-w2v-bert",           from: "word2vec",          to: "bert",           type: "Rupture", label: "Embeddings statiques → embeddings contextuels (polysémie résolue)" },
    { id: "e-lsa-transformer",    from: "lsa",               to: "attention-transformer", type: "Inspiration", label: "Représentation sémantique distribuée → espace d'attention généralisé" },

    // e065-e076 : Vers le neuro-symbolique et world models
    { id: "e-kg-neuro",           from: "knowledge-graphs",  to: "neuro-symbolic", type: "Integration", label: "KG structurés + LLMs = approche KG-augmented neuro-symbolique" },
    { id: "e-bert-rag",           from: "bert",              to: "rag",            type: "Integration", label: "LLM paramétrique + récupération documentaire = RAG" },
    { id: "e-kg-rag",             from: "knowledge-graphs",  to: "rag",            type: "Integration", label: "Base de connaissances structurée + LLM génératif = RAG hybride" },
    { id: "e-gpt-rag",            from: "gpt-family",        to: "rag",            type: "Integration", label: "GPT-3 hallucinations → RAG comme solution partielle" },
    { id: "e-grounding-neuro",    from: "symbol-grounding",  to: "neuro-symbolic", type: "Inspiration", label: "Symbol grounding problem → motivation de l'hybridation neuro-symbolique" },
    { id: "e-grounding-world",    from: "symbol-grounding",  to: "world-models",   type: "Inspiration", label: "Symbol grounding → world models comme solution par ancrage sensorimoteur" },
    { id: "e-neuro-world",        from: "neuro-symbolic",    to: "world-models",   type: "Evolution", label: "Hybridation neuro-symbolique → world models comme prochaine rupture" },
    { id: "e-bayesian-world",     from: "bayesian-networks", to: "world-models",   type: "Inspiration", label: "Raisonnement causal (Pearl) → causalité intrinsèque dans les world models" },
    { id: "e-gpt-world",          from: "gpt-family",        to: "world-models",   type: "Rupture", label: "LLMs (token, statistique, non grounded) → world models (état monde, causal, ancré)" },
    { id: "e-cbr-neuro",          from: "cbr-cyrus",         to: "neuro-symbolic", type: "Inspiration", label: "Mémoire épisodique symbolique (CBR) → mémoire épisodique neuronale différentiable" },
    { id: "e-catforgetting-neuro", from: "catastrophic-forgetting", to: "neuro-symbolic", type: "Inspiration", label: "Oubli catastrophique → motivation des architectures hybrides (stabilité+plasticité)" },
    { id: "e-dl-neuro",           from: "description-logics", to: "neuro-symbolic", type: "Integration", label: "DL (rigueur formelle) + neuronale (scalabilité) = neuro-symbolique" },

    // e077-e080 : Critique et ruptures philosophiques
    { id: "e-aristotle-sitcalc",  from: "aristotle-categories", to: "situation-calculus", type: "Inspiration", label: "Ontologie statique → calcul des situations dynamique" },
    { id: "e-frege-klone",        from: "frege-begriffsschrift", to: "kl-one",      type: "Inspiration", label: "FOL (expressivité) → DL (fragments décidables pour l'ontologie)" },
    { id: "e-dendral-cyc",        from: "dendral",           to: "cyc",            type: "Inspiration", label: "Systèmes experts spécialisés → ambition de la connaissance générale (CYC)" },
    { id: "e-mycin-ops5",         from: "mycin",             to: "ops5-rete",      type: "Evolution", label: "Règles de production MYCIN → généralisation OPS5/Rete" }
  ]
};
