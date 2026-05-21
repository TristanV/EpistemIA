// ============================================================
// resources/schema.js — EpistemIA Shared Schema
// Source unique de vérité pour les types de nœuds et d'arcs.
// Importé par tous les fichiers de thématiques et par index.html.
// ============================================================

export const SCHEMA = {

  meta: {
    version: "2.1",
    updated: "2026-05-21",
    description: "Définitions partagées des NodeTypes et EdgeTypes pour l'ensemble du graphe EpistemIA."
  },

  // ─── TYPES DE NŒUDS ───────────────────────────────────────
  nodeTypes: {
    "Fondation cognitive":         { color: "#8B6914", icon: "🏛️", label: "Représentations pré-computationnelles, cognitives ou philosophiques" },
    "Fondation logique":           { color: "#1a6b8a", icon: "⊢",  label: "Formalisation logique et mathématique du raisonnement" },
    "Architecture symbolique":     { color: "#2d7a2d", icon: "🌳", label: "IA symbolique : règles, frames, réseaux sémantiques" },
    "Logique non-monotone":        { color: "#6b1a7a", icon: "⊘",  label: "Gestion de l'incertitude, révision des croyances, raisonnement par défaut" },
    "Architecture cognitive":      { color: "#7a3d1a", icon: "🧠", label: "Modèles cognitifs unifiés (SOAR, ACT-R, CLARION)" },
    "Représentation vectorielle":  { color: "#1a5c8a", icon: "⃗",  label: "Espaces vectoriels, LSA, embeddings distribués" },
    "Architecture connexionniste": { color: "#8a1a2d", icon: "●",  label: "Réseaux de neurones, mémoire associative, apprentissage profond" },
    "Probabiliste/Bayésien":       { color: "#5a5a1a", icon: "P",  label: "Raisonnement probabiliste, réseaux bayésiens, HMM" },
    "Ontologie/Web sémantique":    { color: "#1a7a5c", icon: "🔗", label: "Ontologies formelles, OWL, graphes de connaissances" },
    "Mémoire augmentée":           { color: "#4a1a8a", icon: "⊛",  label: "Mémoire externe différentiable, NTM, DNC, Memory Networks" },
    "Modèle contextuel":           { color: "#8a4a1a", icon: "◑",  label: "Attention, Transformer, pré-entraînement contextuel" },
    "Neuro-symbolique/World Model":{ color: "#1a1a8a", icon: "⊕",  label: "Hybridation neuro-symbolique, world models, JEPA" }
  },

  // ─── TYPES D'ARCS ─────────────────────────────────────────
  edgeTypes: {
    "Evolution":   { color: "#2d7a2d", dash: "",     label: "Évolution",    description: "Amélioration directe ou généralisation" },
    "Rupture":     { color: "#c0392b", dash: "8,4",  label: "Rupture",      description: "Changement paradigmatique, abandon d'hypothèses antérieures" },
    "Integration": { color: "#8e44ad", dash: "4,4",  label: "Intégration",  description: "Fusion ou synthèse de deux approches" },
    "Inspiration": { color: "#e67e22", dash: "2,6",  label: "Inspiration",  description: "Influence intellectuelle indirecte" },
    "Convergence": { color: "#1a6b8a", dash: "6,2",  label: "Convergence",  description: "Deux lignées indépendantes se rejoignent" },
    "Critique":    { color: "#c0392b", dash: "3,3",  label: "Critique",     description: "Remise en question ou réfutation" },
    "Application": { color: "#27ae60", dash: "1,4",  label: "Application",  description: "Mise en œuvre pratique d'un formalisme" }
  }

};
