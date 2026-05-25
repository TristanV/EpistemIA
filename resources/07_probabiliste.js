// ============================================================
// resources/07_probabiliste.js
// Thématique : Approches probabilistes et bayésiennes (1763-2000)
// ============================================================

export const TOPIC = {
  meta: {
    title: "Approches probabilistes et bayésiennes",
    theme: "probabilistic",
    order: 7,
    description: "Raisonnement sous incertitude : réseaux bayésiens, HMM, MDPs."
  },

  nodes: [
    {
      id: "bayes-theorem",
      label: "Théorème de Bayes",
      type: "Probabiliste/Bayésien",
      period: [1763, 1763],
      year: 1763,
      authors: ["Thomas Bayes", "Richard Price"],
      description: "An Essay towards Solving a Problem in the Doctrine of Chances (1763, posthume) : P(H|E) = P(E|H)·P(H)/P(E). Fondement du raisonnement inverse. Laplace (1812) généralise et applique à l'estimation. Base de tout raisonnement probabiliste en IA.",
      problemsSolved: ["Mise à jour des croyances à partir de nouvelles preuves", "Raisonnement inverse (causes → effets → causes)"],
      problemsRaised: ["Choix du prior : subjectivité bayésienne", "Calcul intractable pour les grands espaces"],
      tags: ["Bayes", "probabilité conditionnelle", "prior", "likelihood", "inférence"],
      keyPapers: [{ title: "An Essay towards Solving a Problem in the Doctrine of Chances", authors: "Bayes, T.", year: 1763, url: "https://doi.org/10.1098/rstl.1763.0053" }]
    },
    {
      id: "bayesian-networks",
      label: "Réseaux bayésiens (Pearl)",
      type: "Probabiliste/Bayésien",
      period: [1985, 1988],
      year: 1988,
      authors: ["Judea Pearl"],
      description: "Probabilistic Reasoning in Intelligent Systems (1988) : graphes orientés acycliques (DAG) représentant la structure causale P(X₁,…,Xₙ) = Π P(Xᵢ|Pa(Xᵢ)). Algorithme belief propagation sur arbres. Première représentation formelle de la causalité en IA.",
      problemsSolved: ["Représentation compacte des distributions jointes", "Inférence probabiliste exacte sur arbres"],
      problemsRaised: ["Inférence exacte NP-difficile sur graphes généraux", "Acquisition de la structure causale non triviale"],
      tags: ["réseaux bayésiens", "DAG", "causalité", "belief propagation", "Pearl"],
      keyPapers: [{ title: "Probabilistic Reasoning in Intelligent Systems", authors: "Pearl, J.", year: 1988, url: "https://www.elsevier.com/books/probabilistic-reasoning-in-intelligent-systems/pearl/978-0-08-051489-5" }]
    },
    {
      id: "hmm",
      label: "Modèles de Markov Cachés (HMM)",
      type: "Probabiliste/Bayésien",
      period: [1966, 1989],
      year: 1989,
      authors: ["L.E. Baum", "Lloyd Welch", "A.J. Viterbi"],
      description: "HMM (Hidden Markov Models) : états cachés S avec transitions P(Sₜ|Sₜ₋₁) et émissions P(Oₜ|Sₜ). Algorithmes : Forward-Backward (Baum-Welch) pour l'entraînement, Viterbi pour le décodage. Standard de la parole jusqu'à 2012, de la bio-informatique.",
      problemsSolved: ["Modélisation de séquences temporelles avec états cachés", "Reconnaissance de la parole et de l'écriture"],
      problemsRaised: ["Hypothèse de Markov : contexte limité à l'état précédent", "Apprentissage tombé dans des maxima locaux"],
      tags: ["HMM", "Viterbi", "Baum-Welch", "séquences", "parole"],
      keyPapers: [{ title: "A Tutorial on Hidden Markov Models", authors: "Rabiner, L.R.", year: 1989, url: "https://doi.org/10.1109/5.18626" }]
    },
    {
      id: "mdp-reinforcement",
      label: "MDP et apprentissage par renforcement",
      type: "Probabiliste/Bayésien",
      period: [1957, 1992],
      year: 1992,
      authors: ["Richard Bellman", "Christopher Watkins"],
      description: "MDPs (Bellman, 1957) : états, actions, récompenses, transitions. Équation de Bellman : V*(s) = max_a [R(s,a) + γΣP(s'|s,a)V*(s')]. Q-learning (Watkins, 1989) : apprentissage sans modèle. Fonde l'apprentissage par renforcement profond (DQN, AlphaGo).",
      problemsSolved: ["Décision séquentielle optimale sous incertitude", "Apprentissage sans modèle de l'environnement"],
      problemsRaised: ["Malédiction de la dimensionnalité pour les grands espaces d'états", "Reward hacking : l'agent optimise le proxy, pas l'objectif réel"],
      tags: ["MDP", "Q-learning", "Bellman", "apprentissage par renforcement", "décision"],
      keyPapers: [{ title: "Q-learning", authors: "Watkins, C.J.C.H., Dayan, P.", year: 1992, url: "https://doi.org/10.1007/BF00992698" }]
    }
  ],

  edges: [
    { id: "e-bayes-bn",       from: "bayes-theorem",     to: "bayesian-networks",  type: "Evolution",   label: "structure causale" },
    { id: "e-shannon-hmm",    from: "shannon-information", to: "hmm",               type: "Inspiration", label: "modèles de séquences" },
    { id: "e-bayes-hmm",      from: "bayes-theorem",     to: "hmm",                type: "Application", label: "inférence probabiliste" },
    { id: "e-bayes-mdp",      from: "bayes-theorem",     to: "mdp-reinforcement",  type: "Inspiration", label: "décision sous incertitude" },
    { id: "e-mycin-bn",       from: "mycin",             to: "bayesian-networks",  type: "Rupture",     label: "formalisme probabiliste rigoureux" }
  ]
};
