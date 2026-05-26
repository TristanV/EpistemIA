// ============================================================
// resources/index.js — EpistemIA Topic Manifest
// Manifeste centralisé : une ligne par thématique à ajouter.
// Importé par index.html pour composer le graphe complet.
// Pour ajouter une thématique : importer et ajouter dans TOPICS.
// ============================================================

import { SCHEMA } from './schema.js';

import { TOPIC as fondationsCognitives }    from './01_fondations-cognitives.js';
import { TOPIC as fondationsConnexionnistes } from './02_fondations-connexionnistes.js';
import { TOPIC as iaSymbolique }            from './03_ia-symbolique.js';
import { TOPIC as systemesExperts }         from './04_systemes-experts.js';
import { TOPIC as architecturesCognitives } from './05_architectures-cognitives.js';
import { TOPIC as vectoriel }               from './06_vectoriel.js';
import { TOPIC as probabiliste }            from './07_probabiliste.js';
import { TOPIC as ontologies }              from './08_ontologies.js';
import { TOPIC as memoireAugmentee }        from './09_memoire-augmentee.js';
import { TOPIC as transformers }            from './10_transformers.js';
import { TOPIC as neuroSymbolique }         from './11_neuro-symbolique.js';
import { CROSS_TOPIC as liensInterThematiques } from './liens-inter-thematiques.js';

export const TOPICS = [
  fondationsCognitives,
  fondationsConnexionnistes,
  iaSymbolique,
  systemesExperts,
  architecturesCognitives,
  vectoriel,
  probabiliste,
  ontologies,
  memoireAugmentee,
  transformers,
  neuroSymbolique,
  liensInterThematiques,
];

/**
 * Compose le graphe complet en fusionnant tous les topics.
 * @returns {{ meta, nodeTypes, edgeTypes, nodes, edges }}
 */
export function buildFullGraph() {
  return {
    meta: {
      title: "Graphe des Représentations de Connaissances",
      version: "2.1",
      description: "Graphe complet auto-composé depuis " + TOPICS.length + " thématiques.",
      topics: TOPICS.map(t => t.meta.title)
    },
    nodeTypes: SCHEMA.nodeTypes,
    edgeTypes: SCHEMA.edgeTypes,
    nodes: TOPICS.flatMap(t => t.nodes),
    edges: TOPICS.flatMap(t => t.edges)
  };
}
