// ============================================================
// 10_transformers.js — Modèles Contextuels & Transformers
// Époque 9 : Attention, Transformer, BERT, GPT (2017-2023)
// ============================================================

export const TOPIC = {

  meta: {
    title: "Modèles contextuels & Transformers",
    epoch: 9,
    period: [2017, 2023],
    description: "Attention, architecture Transformer, pré-entraînement contextuel, LLMs."
  },

  // ─── NŒUDS ────────────────────────────────────────────────
  nodes: [

    {
      id: "attention-bahdanau",
      label: "Mécanisme d'attention (Bahdanau)",
      type: "Modèle contextuel",
      period: [2014, 2015],
      year: 2015,
      periodLabel: "2014-2015",
      authors: ["Dzmitry Bahdanau", "Kyunghyun Cho", "Yoshua Bengio"],
      description: "Neural Machine Translation by Jointly Learning to Align and Translate (Bahdanau et al., 2015) : rupture avec l'encodeur-décodeur RNN à vecteur de contexte fixe. L'attention permet au décodeur de peser dynamiquement toutes les représentations cachées de l'encodeur à chaque pas de décodage : c_t = Σᵢ α_{t,i} h_i, où α_{t,i} = softmax(e_{t,i}). Préfigure le self-attention généralisé des Transformers.",
      problemsSolved: [
        "Dégoulot du vecteur de contexte fixe dans seq2seq",
        "Alignement implicite source-cible appris automatiquement",
        "Amélioration drastique de la traduction de longues phrases"
      ],
      problemsRaised: [
        "Complexité O(n²) entre chaque pas de décodage et tous les tokens source",
        "Pas encore de mécanisme de self-attention dans l'encodeur"
      ],
      tags: ["attention", "seq2seq", "traduction", "alignement", "RNN", "encodeur-décodeur"],
      keyWorks: [
        { title: "Neural Machine Translation by Jointly Learning to Align and Translate", authors: "Bahdanau, D., Cho, K., Bengio, Y.", year: 2015, url: "https://arxiv.org/abs/1409.0473" }
      ]
    },

    {
      id: "attention-transformer",
      label: "Attention Is All You Need (Transformer)",
      type: "Modèle contextuel",
      period: [2017, 2017],
      year: 2017,
      periodLabel: "2017",
      authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Łukasz Kaiser", "Illia Polosukhin"],
      description: "Attention Is All You Need (Vaswani et al., NeurIPS 2017) : architecture Transformer pure sans récurrence ni convolution. Self-attention multi-têtes (Multi-Head Attention) : pour chaque tête h, Attention(Q,K,V) = softmax(QKᵀ/√d_k)V. Positional encoding sinusoïdal. Parallisabilité complète de l'entraînement. Chaque token reçoit un contexte global à O(1) couches. Base de toute l'IA moderne. Représentation distribuée contextuelle remplaçant les bases de connaissances explicites.",
      problemsSolved: [
        "Parallélisation complète de l'entraînement (vs RNN séquentiel)",
        "Contexte global pour chaque token dès la première couche",
        "Scalabilité : loi de puissance paramètres → performance"
      ],
      problemsRaised: [
        "Complexité O(n²) en longueur de séquence (mémoire et calcul)",
        "Aucune mémoire persistante entre séquences indépendantes",
        "Opacité des représentations internes (boîte noire distributionneée)"
      ],
      tags: ["Transformer", "self-attention", "multi-head", "positional encoding", "scalabilité"],
      keyWorks: [
        { title: "Attention Is All You Need", authors: "Vaswani, A. et al.", year: 2017, url: "https://arxiv.org/abs/1706.03762" }
      ]
    },

    {
      id: "bert",
      label: "BERT (Devlin et al.)",
      type: "Modèle contextuel",
      period: [2018, 2019],
      year: 2018,
      periodLabel: "2018-2019",
      authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
      description: "BERT (Bidirectional Encoder Representations from Transformers, Devlin et al., NAACL 2019) : pré-entraînement bidiectionnel sur deux tâches (Masked LM + NSP). Contextualise les représentations de tokens dans les deux directions simultanément. Fine-tuning sur 11 tâches NLP. Représentation contextuelle : le même token a des vecteurs différents selon son contexte. Apporte la notion de 'représentation universelle' pré-entraînée d'un vocabulaire contextuel.",
      problemsSolved: [
        "Représentation contextuelle bidirectionnelle (vs GPT-1 unidirectionnel)",
        "Transfert vers 11 tâches NLP par simple fine-tuning",
        "Performance SOTA sur GLUE, SQuAD, SWAG"
      ],
      problemsRaised: [
        "Lenteur d'inférence (encodeur complet à chaque token)",
        "Pré-entraînement MLM ne capture pas la distribution auto-régressive",
        "NSP critiqué comme tâche trop facile (RoBERTa la supprimera)"
      ],
      tags: ["BERT", "pré-entraînement", "bidirectionnel", "MLM", "fine-tuning", "NLP"],
      keyWorks: [
        { title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", authors: "Devlin, J. et al.", year: 2019, url: "https://arxiv.org/abs/1810.04805" }
      ]
    },

    {
      id: "gpt-family",
      label: "GPT-n (OpenAI)",
      type: "Modèle contextuel",
      period: [2018, 2023],
      year: 2020,
      periodLabel: "2018-2023",
      authors: ["Alec Radford", "Karthik Narasimhan", "Tim Salimans", "Ilya Sutskever", "Tom Brown", "Benjamin Mann", "Nick Ryder", "Melanie Subbiah"],
      description: "GPT-1 (2018) : pré-entraînement auto-régressif (causal LM) + fine-tuning. GPT-2 (2019, 1.5B params) : scaling + zero-shot. GPT-3 (2020, 175B params) : few-shot learning in-context sans mise à jour des poids. La loi de scaling (Kaplan et al., 2020) régit la relation perte ∝ N^{-0.076}. GPT-4 (2023) : multimodal, instruction-following. Montre que la représentation contextuelle à grande échelle supplante les bases de connaissances explicites.",
      problemsSolved: [
        "Génération de texte cohérente sur de longs contextes",
        "Few-shot in-context learning sans paramètres supplémentaires",
        "Scalabilité prédictible via lois de puissance"
      ],
      problemsRaised: [
        "Hallucinations : confiance élevée sur des faits incorrects",
        "Connaîssances figées au cutoff d'entraînement",
        "Opacité du raisonnement interne (chaîne de pensee implicite)"
      ],
      tags: ["GPT", "LLM", "autoregressive", "scaling laws", "few-shot", "in-context learning"],
      keyWorks: [
        { title: "Language Models are Few-Shot Learners (GPT-3)", authors: "Brown, T. et al.", year: 2020, url: "https://arxiv.org/abs/2005.14165" },
        { title: "Scaling Laws for Neural Language Models", authors: "Kaplan, J. et al.", year: 2020, url: "https://arxiv.org/abs/2001.08361" }
      ]
    },

    {
      id: "rag",
      label: "RAG (Retrieval-Augmented Generation)",
      type: "Modèle contextuel",
      period: [2020, 2024],
      year: 2020,
      periodLabel: "2020-2024",
      authors: ["Patrick Lewis", "Ethan Perez", "Aleksandra Piktus", "Fabio Petroni", "Vladimir Karpukhin", "Naman Goyal", "Heinrich Küttler", "Mike Lewis", "Wen-tau Yih", "Tim Rocktäschel", "Sebastian Riedel", "Douwe Kiela"],
      description: "Retrieval-Augmented Generation (Lewis et al., NeurIPS 2020) : hybridation LLM génératif + récupérateur dense (DPR). Pour chaque requête q, DPR récupère les top-k documents par cosine similarity dans un index dense FAISS. Le générateur (BART/T5) conditionne sa réponse sur (q, doc_1,...,doc_k). Hybridation mémoire paramétrique (LLM) + mémoire non-paramétrique (base vectorielle). Permet la mise à jour des connaissances sans ré-entraînement.",
      problemsSolved: [
        "Connaîssances figées des LLMs : mise à jour sans ré-entraînement",
        "Ancrage factuel réduisant les hallucinations",
        "Attribution des sources pour la traçabilité"
      ],
      problemsRaised: [
        "Qualité de la réponse dépendante du récupérateur (garbage in, garbage out)",
        "Latence accrue par le retrieval à l'inférence",
        "Absence de raisonnement multi-étapes natif sur les documents récupérés"
      ],
      tags: ["RAG", "retrieval", "DPR", "FAISS", "hybridation", "mémoire non-paramétrique"],
      keyWorks: [
        { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", authors: "Lewis, P. et al.", year: 2020, url: "https://arxiv.org/abs/2005.11401" }
      ]
    }

  ],

  // ─── ARCS ─────────────────────────────────────────────────
  edges: [
    { from: "kv-memory", to: "attention-bahdanau", type: "Convergence",
      label: "Adressage clé/valeur converge avec l'attention de Bahdanau" },
    { from: "attention-bahdanau", to: "attention-transformer", type: "Evolution",
      label: "Attention Bahdanau → self-attention multi-têtes généralisée" },
    { from: "dnc", to: "attention-transformer", type: "Critique",
      label: "Mémoire externe explicite supplantée par attention implicite" },
    { from: "word2vec", to: "attention-transformer", type: "Integration",
      label: "Embeddings distribués intégrés dans le token embedding" },
    { from: "attention-transformer", to: "bert", type: "Evolution",
      label: "Encodeur Transformer → pré-entraînement bidirectionnel" },
    { from: "attention-transformer", to: "gpt-family", type: "Evolution",
      label: "Décodeur Transformer → LM autoregressif scalable" },
    { from: "bert", to: "gpt-family", type: "Rupture",
      label: "Encodeur bidirectionnel vs décodeur causal : paradigmes complémentaires" },
    { from: "kv-memory", to: "rag", type: "Inspiration",
      label: "Mémoire clé/valeur → retrieval dense" },
    { from: "gpt-family", to: "rag", type: "Integration",
      label: "LLM génératif hybridé avec récupérateur externe" }
  ]

};
