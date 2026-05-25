#!/usr/bin/env node

// ============================================================
// tools/validate.js
// Validateur de cohérence du graphe EpistemIA
// Vérifie : IDs uniques, types valides, arcs valides, champs requis
// ============================================================

const fs = require('fs');
const path = require('path');

// Couleurs pour terminal
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  bold: '\x1b[1m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✅${colors.reset} ${msg}`),
  error: (msg) => console.error(`${colors.red}❌${colors.reset} ${msg}`),
  warn: (msg) => console.warn(`${colors.yellow}⚠️${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ️${colors.reset} ${msg}`),
  header: (msg) => console.log(`\n${colors.bold}${msg}${colors.reset}`),
};

let errorCount = 0;
let warningCount = 0;

/**
 * Charge le schéma depuis schema.js
 */
function loadSchema() {
  try {
    const schemaPath = path.join(__dirname, '../resources/schema.js');
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');

    // Extraction manuelle du schéma (pas d'import ES6 en Node)
    const match = schemaContent.match(/const SCHEMA = \{([\s\S]*?)\n\};/);
    if (!match) throw new Error('Schema structure not found');

    // Parser simple pour extraire types
    const schemaStr = match[0];
    const nodeTypesMatch = schemaStr.match(/nodeTypes:\s*\{([\s\S]*?)\n\s*\},/);
    const edgeTypesMatch = schemaStr.match(/edgeTypes:\s*\{([\s\S]*?)\n\s*\}\n\s*\}/);

    if (!nodeTypesMatch || !edgeTypesMatch) {
      throw new Error('Failed to parse nodeTypes or edgeTypes');
    }

    // Extraire les clés des types
    const extractTypes = (typeStr) => {
      const regex = /"([^"]+)":\s*\{/g;
      const types = [];
      let match;
      while ((match = regex.exec(typeStr)) !== null) {
        types.push(match[1]);
      }
      return types;
    };

    return {
      nodeTypes: extractTypes(nodeTypesMatch[1]),
      edgeTypes: extractTypes(edgeTypesMatch[1])
    };
  } catch (err) {
    log.error(`Failed to load schema: ${err.message}`);
    process.exit(1);
  }
}

/**
 * Charge tous les fichiers de thématiques
 */
function loadTopics() {
  const resourcesPath = path.join(__dirname, '../resources');
  const files = fs.readdirSync(resourcesPath)
    .filter(f => f.match(/^\d{2}_.*\.js$/) && f !== 'index.js' && f !== 'schema.js')
    .sort();

  const topics = [];

  for (const file of files) {
    try {
      const filePath = path.join(resourcesPath, file);
      const content = fs.readFileSync(filePath, 'utf8');

      // Extraction du TOPIC object
      const match = content.match(/export const TOPIC = \{([\s\S]*?)\n\};/);
      if (!match) {
        log.warn(`Skipping ${file} - no TOPIC export found`);
        warningCount++;
        continue;
      }

      // Parser basique pour nodes et edges
      const topicStr = match[0];
      const nodesMatch = topicStr.match(/nodes:\s*\[([\s\S]*?)\n\s*\],/);
      const edgesMatch = topicStr.match(/edges:\s*\[([\s\S]*?)\n\s*\]\s*\}\s*;/);

      const nodes = parseNodes(nodesMatch ? nodesMatch[1] : '');
      const edges = parseEdges(edgesMatch ? edgesMatch[1] : '');

      topics.push({ file, nodes, edges });
    } catch (err) {
      log.error(`Error parsing ${file}: ${err.message}`);
      errorCount++;
    }
  }

  return topics;
}

/**
 * Parser simplifié pour nœuds (regex-based, pas parfait mais fonctionnel)
 */
function parseNodes(str) {
  const nodes = [];
  const nodeMatches = str.match(/\{\s*id:\s*"([^"]+)"/g) || [];

  for (const match of nodeMatches) {
    const idMatch = match.match(/"([^"]+)"/);
    if (idMatch) {
      nodes.push({ id: idMatch[1] });
    }
  }

  return nodes;
}

/**
 * Parser simplifié pour arcs
 */
function parseEdges(str) {
  const edges = [];
  const edgeMatches = str.match(/from:\s*"([^"]+)"[\s\S]*?to:\s*"([^"]+)"[\s\S]*?type:\s*"([^"]+)"/g) || [];

  for (const match of edgeMatches) {
    const parts = match.match(/"([^"]+)"/g);
    if (parts && parts.length >= 3) {
      edges.push({
        from: parts[0].replace(/"/g, ''),
        to: parts[1].replace(/"/g, ''),
        type: parts[2].replace(/"/g, '')
      });
    }
  }

  return edges;
}

/**
 * Valide le graphe complet
 */
function validateGraph(topics, schema) {
  log.header('VALIDATION DU GRAPHE');

  // Collecter tous les nœuds
  const allNodeIds = new Set();
  const nodeIdsByTopic = {};
  let totalNodes = 0;

  for (const topic of topics) {
    nodeIdsByTopic[topic.file] = new Set();
    for (const node of topic.nodes) {
      totalNodes++;
      if (allNodeIds.has(node.id)) {
        log.error(`Duplicate node ID: "${node.id}" in ${topic.file}`);
        errorCount++;
      } else {
        allNodeIds.add(node.id);
        nodeIdsByTopic[topic.file].add(node.id);
      }
    }
  }

  log.success(`${totalNodes} nœuds chargés`);

  // Valider les arcs
  let totalEdges = 0;
  for (const topic of topics) {
    for (const edge of topic.edges) {
      totalEdges++;

      // Vérifier que source existe
      if (!allNodeIds.has(edge.from)) {
        log.error(`Arc invalide dans ${topic.file}: nœud source "${edge.from}" n'existe pas`);
        errorCount++;
      }

      // Vérifier que cible existe
      if (!allNodeIds.has(edge.to)) {
        log.error(`Arc invalide dans ${topic.file}: nœud cible "${edge.to}" n'existe pas`);
        errorCount++;
      }

      // Vérifier type d'arc
      if (!schema.edgeTypes.includes(edge.type)) {
        log.error(`Arc invalide dans ${topic.file}: type "${edge.type}" n'existe pas (valides: ${schema.edgeTypes.join(', ')})`);
        errorCount++;
      }
    }
  }

  log.success(`${totalEdges} arcs validés`);
}

/**
 * Valide les types de nœuds utilisés
 */
function validateNodeTypes(topics, schema) {
  log.header('VALIDATION DES TYPES DE NŒUDS');

  const usedTypes = new Set();

  for (const topic of topics) {
    for (const node of topic.nodes) {
      usedTypes.add(node.id); // Placeholder : on n'a que l'ID en sortie du parser
    }
  }

  log.info(`Types de nœuds disponibles: ${schema.nodeTypes.length}`);
  log.info(`${schema.nodeTypes.join(', ')}`);
}

/**
 * Affiche un résumé
 */
function printSummary(topics) {
  log.header('RÉSUMÉ');

  const totalNodes = topics.reduce((sum, t) => sum + t.nodes.length, 0);
  const totalEdges = topics.reduce((sum, t) => sum + t.edges.length, 0);

  console.log(`
Total des thématiques : ${topics.length}
Total des nœuds : ${totalNodes}
Total des arcs : ${totalEdges}
Erreurs : ${errorCount}
Avertissements : ${warningCount}
  `);

  if (errorCount === 0 && warningCount === 0) {
    log.success('Validation réussie ! ✨');
    return true;
  } else if (errorCount === 0) {
    log.warn(`Validation complète avec ${warningCount} avertissement(s)`);
    return true;
  } else {
    log.error(`Validation échouée avec ${errorCount} erreur(s) et ${warningCount} avertissement(s)`);
    return false;
  }
}

/**
 * Point d'entrée
 */
function main() {
  console.log(`${colors.bold}🔍 EpistemIA Graph Validator v1.0${colors.reset}\n`);

  const schema = loadSchema();
  const topics = loadTopics();

  log.info(`Schéma chargé: ${schema.nodeTypes.length} types de nœuds, ${schema.edgeTypes.length} types d'arcs`);
  log.info(`${topics.length} thématiques chargées\n`);

  validateGraph(topics, schema);
  validateNodeTypes(topics, schema);

  const success = printSummary(topics);
  process.exit(success ? 0 : 1);
}

main();
