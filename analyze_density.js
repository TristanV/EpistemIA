// Analyser la distribution des événements par période
import { buildFullGraph } from './resources/index.js';

const graph = buildFullGraph();
const nodes = graph.nodes;

// Compter les événements par décennie et siècle
const byDecade = {};
const byCentury = {};

nodes.forEach(n => {
  const yearMid = Math.round((n.period[0] + n.period[1]) / 2);
  const decade = Math.floor(yearMid / 10) * 10;
  const century = Math.floor(yearMid / 100) * 100;
  
  byDecade[decade] = (byDecade[decade] || 0) + 1;
  byCentury[century] = (byCentury[century] || 0) + 1;
});

// Afficher les périodes les plus denses
const sortedDecades = Object.entries(byDecade)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15);

console.log('=== DÉCENNIES LES PLUS DENSES ===');
sortedDecades.forEach(([decade, count]) => {
  console.log(`${decade}s: ${count} événements`);
});

console.log('\n=== SIÈCLES LES PLUS DENSES ===');
const sortedCenturies = Object.entries(byCentury)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);
sortedCenturies.forEach(([century, count]) => {
  console.log(`${century}s: ${count} événements`);
});
