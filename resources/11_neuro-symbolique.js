// ============================================================
// 11_neuro-symbolique.js — Neuro-symbolique & World Models
// Époque 10 : Hybridation neuro-symbolique, world models, JEPA (2019-2026)
// ============================================================

export const TOPIC = {

  meta: {
    title: "Neuro-symbolique & World Models",
    epoch: 10,
    period: [2019, 2026],
    description: "Hybridation des représentations neuronales et symboliques, world models, JEPA, émergence de l'IA de nouvelle génération."
  },

  // ─── NŒUDS ────────────────────────────────────────────────
  nodes: [

    {
      id: "neuro-symbolic-ai",
      label: "IA Neuro-Symbolique",
      type: "Neuro-symbolique/World Model",
      period: [2019, 2026],
      year: 2019,
      periodLabel: "2019-2026",
      authors: ["Gary Marcus", "Henry Kautz", "Luc De Raedt", "Luis Lamb"],
      description: "L'IA neuro-symbolique (Marcus & Davis, 2019 ; Kautz, 2020 'Third Wave of AI') vise à combiner la robustesse de l'apprentissage profond avec la précision et l'interprétabilité du raisonnement symbolique. Approches : Neural Theorem Proving (NTP, Rocktäschel & Riedel, 2017), Differentiable Logic (Marra et al., 2019), DeepProbLog (Manhaeve et al., 2018), LNN (Logical Neural Networks, IBM, 2020). Ambition : systèmes capables d'abstraction, de généralisation compositionnelle et de raisonnement causal explicite.",
      problemsSolved: [
        "Généralisation compositionnelle hors distribution (SCAN, COGS)",
        "Raisonnement causal explicite et vérifiable",
        "Interprétabilité des décisions par extraction de règles symboliques"
      ],
      problemsRaised: [
        "Intégration des gradients à travers les opérations symboliques discrètes",
        "Passage à l'échelle des solveurs symboliques sur des données non structurées",
        "Définir la frontière optimale symbolique/subsymbolique selon la tâche"
      ],
      tags: ["neuro-symbolique", "raisonnement", "intégration", "logique différentiable", "LNN", "DeepProbLog"],
      keyWorks: [
        { title: "Rebooting AI: Building Artificial Intelligence We Can Trust", authors: "Marcus, G., Davis, E.", year: 2019, url: "https://www.penguinrandomhouse.com/books/603982/rebooting-ai-by-gary-marcus-and-ernest-davis/" },
        { title: "The Third Wave of AI (Keynote)", authors: "Kautz, H.", year: 2020, url: "https://henrykautz.com/talks/DARPA2020.pdf" },
        { title: "Logical Neural Networks", authors: "Riegel, R. et al. (IBM)", year: 2020, url: "https://arxiv.org/abs/2006.13155" }
      ]
    },

    {
      id: "world-models-lecun",
      label: "World Models / JEPA (LeCun)",
      type: "Neuro-symbolique/World Model",
      period: [2022, 2026],
      year: 2022,
      periodLabel: "2022-2026",
      authors: ["Yann LeCun"],
      description: "LeCun (2022, 'A Path Towards Autonomous Machine Intelligence') propose une architecture cognitive basée sur des world models prédictifs et hiérarchiques : JEPA (Joint Embedding Predictive Architecture). Contrairement aux LLMs auto-régressifs, JEPA prédit des représentations abstraites dans l'espace latent plutôt que des tokens. Composants : perception (encodeur), world model (prédicateur de l'état latent futur), acteur, et évaluateur de coût. I-JEPA (2023) et V-JEPA (2024) illustrent cette approche pour l'image et la vidéo.",
      problemsSolved: [
        "Apprentissage du monde par prédiction dans l'espace latent (vs génération pixel)",
        "Planification à long terme via simulation interne du monde",
        "Réduction de la dépendance aux données labellisées supervisées"
      ],
      problemsRaised: [
        "Définir et apprendre un espace latent 'suffisamment abstrait' reste non résolu",
        "Évaluation des world models sur tâches de planification complexes",
        "Combinaison avec la mémoire épisodique à long terme"
      ],
      tags: ["world model", "JEPA", "prédiction latente", "self-supervised", "planification", "LeCun"],
      keyWorks: [
        { title: "A Path Towards Autonomous Machine Intelligence", authors: "LeCun, Y.", year: 2022, url: "https://openreview.net/forum?id=BZ5a1r-kVsf" },
        { title: "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA)", authors: "Assran, M. et al.", year: 2023, url: "https://arxiv.org/abs/2301.08243" }
      ]
    },

    {
      id: "knowledge-graph-llm",
      label: "KG + LLM : graphes neuro-symboliques",
      type: "Neuro-symbolique/World Model",
      period: [2021, 2026],
      year: 2023,
      periodLabel: "2021-2026",
      authors: ["Shirui Pan", "Lianghao Xia", "Yizhou Sun"],
      description: "Intégration des graphes de connaissances (KG) avec les LLMs pour pallier les hallucinations et le knowledge cutoff. Deux directions : (1) KG → LLM : enrichir le prompt avec des faits structurés récupérés du KG (KGRAG) ; (2) LLM → KG : construire ou compléter automatiquement des KGs depuis le texte (GenIE, PiVe). GraphRAG (Microsoft, 2024) propose une indexation par communautés de graphe. Permet de combiner la fluidité des LLMs avec la précision et la traçabilité des KGs.",
      problemsSolved: [
        "Ancrage factuel des LLMs via connaissances structurées vérifiables",
        "Mise à jour incrémentale des connaissances sans ré-entraînement",
        "Raisonnement multi-hop sur des graphes de faits"
      ],
      problemsRaised: [
        "Alignement des entités texte/graphe (entity linking) toujours imparfait",
        "Scalabilité des raisonneurs KG sur des millions de triplets en temps réel",
        "KG incomplets : hallucinations lors de la traversée de relations manquantes"
      ],
      tags: ["KG-LLM", "KGRAG", "GraphRAG", "graphe de connaissances", "neuro-symbolique", "hallucinations"],
      keyWorks: [
        { title: "Unifying Large Language Models and Knowledge Graphs: A Roadmap", authors: "Pan, S. et al.", year: 2023, url: "https://arxiv.org/abs/2306.08302" },
        { title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization", authors: "Edge, D. et al. (Microsoft)", year: 2024, url: "https://arxiv.org/abs/2404.16130" }
      ]
    },

    {
      id: "llm-agents",
      label: "Agents LLM & mémoire externe",
      type: "Neuro-symbolique/World Model",
      period: [2023, 2026],
      year: 2023,
      periodLabel: "2023-2026",
      authors: ["Lilian Weng", "Shunyu Yao", "Harrison Chase"],
      description: "Les agents LLM (ReAct, Yao et al., 2023 ; AutoGPT, 2023 ; LangChain/LangGraph) combinent un LLM centralisé avec une mémoire externe structurée (vectorstore, KV-store, base de données) et des outils (code, API, recherche). Architecture Reason-Act (ReAct) : boucle Pensée → Action → Observation. Mémoire hiérarchique : mémoire tampon (contexte), mémoire épisodique (embeddings FAISS), mémoire sémantique (KG), mémoire procédurale (outils). Réalise architecturalement ce que SOAR/ACT-R visaient cognitivement.",
      problemsSolved: [
        "Dépassement de la fenêtre de contexte par mémoire externe persistante",
        "Décomposition de tâches complexes en sous-tâches (planification)",
        "Utilisation d'outils externes pour ancrage factuel et calcul précis"
      ],
      problemsRaised: [
        "Erreurs de planification en cascade (compounding errors)",
        "Gestion cohérente de mémoires de types hétérogènes",
        "Évaluation de la fiabilité des agents dans des environnements ouverts"
      ],
      tags: ["agents LLM", "ReAct", "mémoire externe", "planification", "LangChain", "AutoGPT"],
      keyWorks: [
        { title: "ReAct: Synergizing Reasoning and Acting in Language Models", authors: "Yao, S. et al.", year: 2023, url: "https://arxiv.org/abs/2210.03629" },
        { title: "Cognitive Architectures for Language Agents (CoALA)", authors: "Sumers, T.R. et al.", year: 2023, url: "https://arxiv.org/abs/2309.02427" }
      ]
    }

  ],

  // ─── ARCS ─────────────────────────────────────────────────
  edges: [
    { from: "gpt-family", to: "neuro-symbolic-ai", type: "Critique",
      label: "LLMs saturent les benchmarks symboliques mais échouent en généralisation compositionnelle" },
    { from: "knowledge-graphs", to: "neuro-symbolic-ai", type: "Integration",
      label: "KGs comme couche symbolique de vérification et d'ancrage" },
    { from: "backpropagation", to: "neuro-symbolic-ai", type: "Integration",
      label: "Différentiation automatique comme pont entre neurones et symboles" },
    { from: "neuro-symbolic-ai", to: "world-models-lecun", type: "Inspiration",
      label: "Architectures hybrides → vision de l'intelligence basée sur des world models prédictifs" },
    { from: "lstm", to: "world-models-lecun", type: "Critique",
      label: "Mémoire séquentielle limitée → remplacée par prédiction dans l'espace latent" },
    { from: "rag", to: "knowledge-graph-llm", type: "Evolution",
      label: "RAG vectoriel → RAG structuré sur KG (GraphRAG)" },
    { from: "knowledge-graphs", to: "knowledge-graph-llm", type: "Integration",
      label: "KG comme mémoire symbolique externe enrichissant les LLMs" },
    { from: "gpt-family", to: "knowledge-graph-llm", type: "Integration",
      label: "LLM + KG : combinaison fluidité générative + précision factuelle" },
    { from: "rag", to: "llm-agents", type: "Evolution",
      label: "Retrieval statique → agents avec mémoire dynamique et outils" },
    { from: "soar", to: "llm-agents", type: "Convergence",
      label: "Architecture cognitive SOAR (mémoires multiples + délibération) converge avec les agents LLM" },
    { from: "gpt-family", to: "llm-agents", type: "Evolution",
      label: "LLM comme moteur de raisonnement au cœur des agents" },
    { from: "knowledge-graph-llm", to: "llm-agents", type: "Integration",
      label: "KG comme mémoire sémantique structurée des agents" }
  ]

};
