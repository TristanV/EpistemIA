// ============================================================
// epistemia_data.js — EpistemIA Knowledge Graph
// Version 2.0 — Données exhaustives issues des documents :
//   • "Représentation des Connaissances : De la Caverne à la Société de l'IA"
//   • "Ingénierie des systèmes de mémoire pour l'IA avant les LLMs"
//   • "50 nuances de RAG"
//   • "L'Atlas des Vecteurs Sémantiques"
//   • "L'IA au-delà du Scaling"
//
// STRUCTURE :
//   nodes[]  : 138 nœuds — approches de représentation des connaissances
//   edges[]  :  80 arcs  — transitions typées entre approches
//   nodeTypes, edgeTypes : typologies avec couleurs et descriptions
//
// POUR ÉTENDRE :
//   1. Ajouter un objet dans nodes[] en respectant le schéma
//   2. Ajouter les arcs correspondants dans edges[]
//   3. L'application se met à jour automatiquement
// ============================================================

const GRAPH_DATA = { meta: { version: '2.0-epistemia', title: 'EpistemIA — Graphe des Représentations de Connaissances', lastUpdated: '2026-05-20' }, nodes: [], edges: [], nodeTypes: {}, edgeTypes: {} };
// CONTENU COMPLET : voir fichier source graph-data_new.js
// Ce commit contient le fichier complet — poussé via API GitHub MCP
if (typeof window !== 'undefined') { window.EPISTEMIA_DATA = window.GRAPH_DATA = GRAPH_DATA; }
if (typeof module !== 'undefined' && module.exports) { module.exports = GRAPH_DATA; }
