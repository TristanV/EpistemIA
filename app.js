// =============================================================
// EpistemIA — Couche d'interaction applicative
// Extrait de index.html (Phase 0.B du refactoring monolithique)
// Dépendances globales attendues : d3 (CDN), GRAPH_DATA (epistemia_data.js)
// =============================================================

// ═══════════════════════════════════════════════════════════
// ÉTAT
// ═══════════════════════════════════════════════════════════
const state = {
  selectedNode: null,
  activeNodeTypes: new Set(Object.keys(GRAPH_DATA.nodeTypes)),
  activeEdgeTypes: new Set(Object.keys(GRAPH_DATA.edgeTypes)),
  searchText: '',
  yearMin: -100000,
  yearMax: 2026,
  simRunning: false
};

const nodePos = {};

// ═══════════════════════════════════════════════════════════
// THÈME
// ═══════════════════════════════════════════════════════════
(function () {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  t && t.addEventListener('click', () => {
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);
    t.setAttribute('aria-label', 'Basculer vers le thème ' + (d === 'dark' ? 'clair' : 'sombre'));
    renderAxis();
    renderLinks();
    renderNodes();
  });
})();

// ═══════════════════════════════════════════════════════════
// ÉCHELLE TEMPORELLE LOGARITHMIQUE INVERSÉE
// ═══════════════════════════════════════════════════════════
const PRESENT = 2026;
const MARGIN_X = 110;

function yearToLogX(year) {
  const dist = Math.max(PRESENT - year, 0.5);
  return Math.log10(dist + 1);
}

function buildLogScale(nodes, W) {
  const allYears = nodes.map(n => (n.period[0] + n.period[1]) / 2);
  const logVals = allYears.map(y => yearToLogX(y));
  const logMin = Math.min(...logVals);
  const logMax = Math.max(...logVals);
  return function (year) {
    const lv = yearToLogX(year);
    const frac = logMax === logMin ? 0.5 : (logMax - lv) / (logMax - logMin);
    return MARGIN_X + frac * (W - MARGIN_X * 2);
  };
}

function buildAxisTicks(yearToX) {
  const ticks = [
    { year: -100000, label: '−100 000' },
    { year: -8000,   label: '−8 000' },
    { year: -3200,   label: '−3 200' },
    { year: -400,    label: '−400' },
    { year: 0,       label: '0' },
    { year: 1000,    label: '1000' },
    { year: 1500,    label: '1500' },
    { year: 1700,    label: '1700' },
    { year: 1800,    label: '1800' },
    { year: 1850,    label: '1850' },
    { year: 1900,    label: '1900' },
    { year: 1940,    label: '1940' },
    { year: 1950,    label: '1950' },
    { year: 1960,    label: '1960' },
    { year: 1970,    label: '1970' },
    { year: 1980,    label: '1980' },
    { year: 1990,    label: '1990' },
    { year: 2000,    label: '2000' },
    { year: 2010,    label: '2010' },
    { year: 2015,    label: '2015' },
    { year: 2020,    label: '2020' },
    { year: 2023,    label: '2023' },
    { year: 2025,    label: '2025' },
    { year: 2026,    label: '2026' },
  ];
  return ticks.map(t => ({ ...t, x: yearToX(t.year) }));
}

// ═══════════════════════════════════════════════════════════
// POSITIONS INITIALES
// ═══════════════════════════════════════════════════════════
function getTypeYFrac(nodeType) {
  const typeOrder = Object.keys(GRAPH_DATA.nodeTypes);
  const i = typeOrder.indexOf(nodeType);
  return i / Math.max(typeOrder.length - 1, 1);
}

function initPositions(W, H) {
  const visNodes = getVisibleNodes();
  const yearToX = buildLogScale(GRAPH_DATA.nodes, W);
  const MARGIN_Y = 55;

  const slotMap = {};
  visNodes.forEach(n => {
    const yearMid = (n.period[0] + n.period[1]) / 2;
    const x0 = Math.round(yearToX(yearMid) / 40);
    const typeOrder = Object.keys(GRAPH_DATA.nodeTypes);
    const ty = typeOrder.indexOf(n.type);
    const key = `${x0},${ty}`;
    if (!slotMap[key]) slotMap[key] = [];
    slotMap[key].push(n.id);
  });

  visNodes.forEach(n => {
    if (nodePos[n.id]) return;
    const yearMid = (n.period[0] + n.period[1]) / 2;
    const x = yearToX(yearMid);
    const yFrac = getTypeYFrac(n.type);
    const y = MARGIN_Y + yFrac * (H - MARGIN_Y * 2);

    const typeOrder = Object.keys(GRAPH_DATA.nodeTypes);
    const ty = typeOrder.indexOf(n.type);
    const x0 = Math.round(x / 40);
    const key = `${x0},${ty}`;
    const group = slotMap[key] || [n.id];
    const groupIdx = group.indexOf(n.id);
    const offsetY = (groupIdx - (group.length - 1) / 2) * 26;

    nodePos[n.id] = { x, y: y + offsetY, vx: 0, vy: 0 };
  });
}

// ═══════════════════════════════════════════════════════════
// SVG SETUP
// ═══════════════════════════════════════════════════════════
const svgEl = document.getElementById('graph-svg');
const svg = d3.select('#graph-svg');
let W = svgEl.clientWidth, H = svgEl.clientHeight;

const defs = svg.append('defs');

function ensureMarker(color) {
  const mid = 'arrow-' + color.replace('#', '').replace(/[^a-zA-Z0-9]/g, '');
  if (!defs.select('#' + mid).empty()) return mid;
  defs.append('marker')
    .attr('id', mid).attr('viewBox', '0 -4 8 8')
    .attr('refX', 16).attr('refY', 0)
    .attr('markerWidth', 6).attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path').attr('d', 'M0,-4L8,0L0,4').attr('fill', color);
  return mid;
}
Object.values(GRAPH_DATA.edgeTypes).forEach(t => ensureMarker(t.color));

const zoomBehavior = d3.zoom().scaleExtent([0.05, 5])
  .on('zoom', e => g.attr('transform', e.transform));
svg.call(zoomBehavior);

const g = svg.append('g');
const gAxis  = g.append('g').attr('class', 'axis-layer');
const gLinks = g.append('g').attr('class', 'links-layer');
const gNodes = g.append('g').attr('class', 'nodes-layer');

// ═══════════════════════════════════════════════════════════
// FILTRAGE
// ═══════════════════════════════════════════════════════════
function getVisibleNodes() {
  return GRAPH_DATA.nodes.filter(n =>
    state.activeNodeTypes.has(n.type) &&
    n.period[0] <= state.yearMax && n.period[1] >= state.yearMin &&
    matchesSearch(n)
  );
}

function getVisibleEdges(visibleNodeIds) {
  const set = new Set(visibleNodeIds);
  return GRAPH_DATA.edges.filter(e =>
    state.activeEdgeTypes.has(e.type) && set.has(e.from) && set.has(e.to)
  );
}

function matchesSearch(node) {
  if (!state.searchText) return true;
  const q = state.searchText.toLowerCase();
  return (
    node.label.toLowerCase().includes(q) ||
    (node.authors || []).some(a => a.toLowerCase().includes(q)) ||
    (node.tags || []).some(t => t.toLowerCase().includes(q)) ||
    (node.description || '').toLowerCase().includes(q)
  );
}

// ═══════════════════════════════════════════════════════════
// SIMULATION D3 FORCE
// ═══════════════════════════════════════════════════════════
let simulation = null;

function buildSimulation(visNodes, visEdges) {
  if (simulation) { simulation.stop(); simulation = null; }
  if (!state.simRunning) return;

  const yearToX = buildLogScale(GRAPH_DATA.nodes, W);

  const simNodes = visNodes.map(n => ({
    id: n.id,
    x: nodePos[n.id]?.x || W / 2,
    y: nodePos[n.id]?.y || H / 2,
    targetX: yearToX((n.period[0] + n.period[1]) / 2),
    targetY: 55 + getTypeYFrac(n.type) * (H - 110)
  }));

  const simLinks = visEdges.map(e => ({
    source: e.from, target: e.to, type: e.type
  }));

  simulation = d3.forceSimulation(simNodes)
    .force('link', d3.forceLink(simLinks).id(d => d.id).distance(90).strength(0.12))
    .force('charge', d3.forceManyBody().strength(-180).distanceMax(350))
    .force('collide', d3.forceCollide(28))
    .force('xAnchor', d3.forceX(d => d.targetX).strength(0.55))
    .force('yAnchor', d3.forceY(d => d.targetY).strength(0.08))
    .alphaDecay(0.012)
    .velocityDecay(0.45)
    .on('tick', () => {
      simNodes.forEach(sn => {
        nodePos[sn.id] = { x: sn.x, y: sn.y, vx: sn.vx || 0, vy: sn.vy || 0 };
      });
      renderLinks();
      renderNodes();
    })
    .on('end', () => {
      simNodes.forEach(sn => { nodePos[sn.id] = { x: sn.x, y: sn.y }; });
    });
}

// ═══════════════════════════════════════════════════════════
// RENDU AXE
// ═══════════════════════════════════════════════════════════
function renderAxis() {
  gAxis.selectAll('*').remove();
  const yearToX = buildLogScale(GRAPH_DATA.nodes, W);
  const ticks = buildAxisTicks(yearToX);
  const typeOrder = Object.keys(GRAPH_DATA.nodeTypes);
  const MARGIN_Y = 55;

  ticks.forEach(t => {
    if (t.x < 20 || t.x > W - 10) return;
    gAxis.append('line').attr('class', 'time-line')
      .attr('x1', t.x).attr('x2', t.x).attr('y1', 0).attr('y2', H);
    gAxis.append('text').attr('class', 'time-label')
      .attr('x', t.x + 2).attr('y', H - 6).text(t.label);
  });

  typeOrder.forEach((tid, i) => {
    const yFrac = i / Math.max(typeOrder.length - 1, 1);
    const y = MARGIN_Y + yFrac * (H - MARGIN_Y * 2);
    const t = GRAPH_DATA.nodeTypes[tid];
    gAxis.append('text').attr('class', 'type-lane-label')
      .attr('x', 4).attr('y', y + 4)
      .attr('fill', t.color)
      .text(t.icon + ' ' + t.label);
  });
}

// ═══════════════════════════════════════════════════════════
// RENDU LIENS
// ═══════════════════════════════════════════════════════════
function renderLinks() {
  const visNodes = getVisibleNodes();
  const visEdges = getVisibleEdges(visNodes.map(n => n.id));

  const sel = gLinks.selectAll('.link-g').data(visEdges, d => d.from + '-' + d.to + '-' + d.type);
  sel.exit().remove();
  const entered = sel.enter().append('g').attr('class', 'link-g');
  entered.append('path').attr('class', 'link');
  entered.append('path').attr('class', 'link-hit')
    .style('fill', 'none').style('stroke', 'transparent').style('stroke-width', '12');

  const all = gLinks.selectAll('.link-g');

  all.select('.link').each(function (d) {
    const et = GRAPH_DATA.edgeTypes[d.type];
    const col = et ? et.color : '#888';
    d3.select(this)
      .attr('stroke', col)
      .attr('stroke-dasharray', et && et.dash !== 'none' ? et.dash : null)
      .attr('marker-end', `url(#${ensureMarker(col)})`);
  });

  all.on('mouseover.tip', (ev, d) => {
    const et = GRAPH_DATA.edgeTypes[d.type];
    showTooltip(ev, `<strong>${et ? et.label : d.type}</strong><br>${d.label || ''}`);
  }).on('mousemove.tip', moveTooltip).on('mouseout.tip', hideTooltip);

  updateAllLinkPaths(all);
  applyDimmingVisual();
}

function curvePath(sx, sy, tx, ty) {
  const dx = tx - sx, dy = ty - sy;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const r = 16;
  const x1 = sx + dx / len * r, y1 = sy + dy / len * r;
  const x2 = tx - dx / len * (r + 8), y2 = ty - dy / len * (r + 8);
  const mx = (x1 + x2) / 2 - dy / len * 35;
  const my = (y1 + y2) / 2 + dx / len * 35;
  return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
}

function updateAllLinkPaths(sel) {
  sel.select('.link,.link-hit').attr('d', d => {
    const s = nodePos[d.from], t = nodePos[d.to];
    if (!s || !t) return '';
    return curvePath(s.x, s.y, t.x, t.y);
  });
}

// ═══════════════════════════════════════════════════════════
// RENDU NOEUDS
// ═══════════════════════════════════════════════════════════
function renderNodes() {
  const visNodes = getVisibleNodes();

  const sel = gNodes.selectAll('.node-group').data(visNodes, d => d.id);
  sel.exit().remove();
  const entered = sel.enter().append('g').attr('class', 'node-group');
  entered.append('circle').attr('class', 'node-circle');
  entered.append('text').attr('class', 'node-icon');
  entered.append('text').attr('class', 'node-label');

  const all = gNodes.selectAll('.node-group');

  const drag = d3.drag()
    .on('start', function (event, d) {
      if (!state.simRunning && simulation) return;
      if (simulation) {
        const sn = simulation.nodes().find(n => n.id === d.id);
        if (sn) { sn.fx = sn.x; sn.fy = sn.y; }
      }
      d3.select(this).raise();
    })
    .on('drag', function (event, d) {
      nodePos[d.id] = { x: event.x, y: event.y, vx: 0, vy: 0 };
      if (simulation) {
        const sn = simulation.nodes().find(n => n.id === d.id);
        if (sn) { sn.fx = event.x; sn.fy = event.y; sn.x = event.x; sn.y = event.y; }
        simulation.alpha(Math.max(simulation.alpha(), 0.1)).restart();
      }
      d3.select(this).attr('transform', `translate(${event.x},${event.y})`);
      gLinks.selectAll('.link-g').select('.link,.link-hit').attr('d', e => {
        const s = nodePos[e.from], t2 = nodePos[e.to];
        if (!s || !t2) return '';
        return curvePath(s.x, s.y, t2.x, t2.y);
      });
    })
    .on('end', function (event, d) {
      nodePos[d.id] = { x: event.x, y: event.y, vx: 0, vy: 0 };
      if (simulation) {
        const sn = simulation.nodes().find(n => n.id === d.id);
        if (sn) { sn.fx = null; sn.fy = null; }
      }
    });

  all.call(drag);

  all.on('click', (event, d) => {
    event.stopPropagation();
    selectNode(d.id);
  })
    .on('mouseover.tip', (ev, d) => {
      const nt = GRAPH_DATA.nodeTypes[d.type];
      showTooltip(ev, `<strong>${d.label}</strong><br>${d.periodLabel || ''}<br><em>${nt?.label || d.type}</em>`);
    })
    .on('mousemove.tip', moveTooltip)
    .on('mouseout.tip', hideTooltip);

  all.attr('transform', d => {
    const p = nodePos[d.id];
    return p ? `translate(${p.x},${p.y})` : 'translate(0,0)';
  });

  all.select('.node-circle')
    .attr('r', 14)
    .attr('fill', d => (GRAPH_DATA.nodeTypes[d.type]?.color || '#888') + '22')
    .attr('stroke', d => GRAPH_DATA.nodeTypes[d.type]?.color || '#888')
    .attr('stroke-width', 2);

  all.select('.node-icon').attr('y', 1)
    .text(d => GRAPH_DATA.nodeTypes[d.type]?.icon || '●');

  all.select('.node-label').attr('y', 26).attr('text-anchor', 'middle')
    .text(d => d.label.length > 22 ? d.label.slice(0, 20) + '…' : d.label);

  applyDimmingVisual();
}

// ═══════════════════════════════════════════════════════════
// DIMMING
// ═══════════════════════════════════════════════════════════
function applyDimmingVisual() {
  const nodeId = state.selectedNode;
  if (!nodeId) {
    gNodes.selectAll('.node-group').classed('dimmed', false).classed('highlighted', false);
    gLinks.selectAll('.link-g').classed('dimmed', false).classed('highlighted', false);
    return;
  }
  const visNodes = getVisibleNodes().map(n => n.id);
  const visEdges = getVisibleEdges(visNodes);
  const neighbors = new Set([nodeId]);
  visEdges.forEach(e => {
    if (e.from === nodeId) neighbors.add(e.to);
    if (e.to === nodeId) neighbors.add(e.from);
  });
  gNodes.selectAll('.node-group')
    .classed('dimmed', d => !neighbors.has(d.id))
    .classed('highlighted', d => d.id === nodeId);
  gLinks.selectAll('.link-g')
    .classed('dimmed', d => d.from !== nodeId && d.to !== nodeId)
    .classed('highlighted', d => d.from === nodeId || d.to === nodeId);
}

function clearDimming() {
  state.selectedNode = null;
  applyDimmingVisual();
}

// ═══════════════════════════════════════════════════════════
// RENDU COMPLET
// ═══════════════════════════════════════════════════════════
function renderGraph() {
  W = svgEl.clientWidth; H = svgEl.clientHeight;
  initPositions(W, H);
  renderAxis();
  renderLinks();
  renderNodes();

  const visNodes = getVisibleNodes();
  const visEdges = getVisibleEdges(visNodes.map(n => n.id));
  document.getElementById('stat-nodes').textContent = visNodes.length;
  document.getElementById('stat-edges').textContent = visEdges.length;
  document.getElementById('node-count').textContent = `${visNodes.length} / ${GRAPH_DATA.nodes.length} nœuds`;

  if (state.simRunning) buildSimulation(visNodes, visEdges);
}

function updateGraph() {
  W = svgEl.clientWidth; H = svgEl.clientHeight;
  initPositions(W, H);
  renderAxis();
  renderLinks();
  renderNodes();
  const visNodes = getVisibleNodes();
  const visEdges = getVisibleEdges(visNodes.map(n => n.id));
  document.getElementById('stat-nodes').textContent = visNodes.length;
  document.getElementById('stat-edges').textContent = visEdges.length;
  document.getElementById('node-count').textContent = `${visNodes.length} / ${GRAPH_DATA.nodes.length} nœuds`;
  if (state.simRunning) buildSimulation(visNodes, visEdges);
}

// ═══════════════════════════════════════════════════════════
// SÉLECTION
// ═══════════════════════════════════════════════════════════
function selectNode(nodeId) {
  state.selectedNode = nodeId;
  applyDimmingVisual();
  renderDetailPanel(nodeId);
  document.getElementById('detail-panel').classList.add('open');
}
window.selectNode = selectNode;
window.clearDimming = clearDimming;
window.state = state;

svg.on('click', () => {
  state.selectedNode = null;
  clearDimming();
  document.getElementById('detail-panel').classList.remove('open');
});

// ═══════════════════════════════════════════════════════════
// PANEL DÉTAIL
// ═══════════════════════════════════════════════════════════
function renderDetailPanel(nodeId) {
  const node = GRAPH_DATA.nodes.find(n => n.id === nodeId);
  if (!node) return;
  const nt = GRAPH_DATA.nodeTypes[node.type];
  const color = nt?.color || '#888';
  const visNodes = getVisibleNodes().map(n => n.id);
  const visEdges = getVisibleEdges(visNodes);
  const preds = visEdges.filter(e => e.to === nodeId);
  const succs = visEdges.filter(e => e.from === nodeId);

  document.getElementById('detail-inner').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-shrink:0">
      <div class="detail-header" style="flex:1;min-width:0">
        <div class="detail-icon" style="background:${color}22;color:${color}">${nt?.icon || '●'}</div>
        <div>
          <div class="detail-title">${node.label}</div>
          <div class="detail-period">${node.periodLabel || ''}</div>
          <span class="detail-type-badge" style="background:${color}18;color:${color};border:1px solid ${color}40;margin-top:.3rem">${nt?.label || node.type}</span>
        </div>
      </div>
      <button onclick="document.getElementById('detail-panel').classList.remove('open');state.selectedNode=null;clearDimming();"
        style="flex-shrink:0;width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-sm);background:var(--color-surface-offset);color:var(--color-text-muted);border:1px solid var(--color-border);cursor:pointer" aria-label="Fermer le panneau">✕</button>
    </div>
    <div>
      <div class="section-title">Description</div>
      <p class="detail-desc">${node.description || ''}</p>
    </div>
    ${node.authors?.length ? `<div>
      <div class="section-title">Auteurs</div>
      <div class="authors-list">${node.authors.map(a => `<span class="author-chip">${a}</span>`).join('')}</div>
    </div>` : ''}
    ${node.keyWorks?.length ? `<div>
      <div class="section-title">Références clés</div>
      <div class="works-list">${node.keyWorks.map(w => `
        <div class="work-item">
          ${w.url ? `<a href="${w.url}" target="_blank" rel="noopener noreferrer">${w.title}</a>` : w.title}
          <span class="work-year">(${w.year < 0 ? Math.abs(w.year) + ' av. J.-C.' : w.year})</span>
        </div>`).join('')}
      </div>
    </div>` : ''}
    ${node.tags?.length ? `<div>
      <div class="section-title">Concepts clés</div>
      <div class="tags-wrap">${node.tags.map(t => `<span class="tag-item">${t}</span>`).join('')}</div>
    </div>` : ''}
    ${node.problemsSolved?.length || node.problemsRaised?.length ? `<div>
      <div class="section-title">Problèmes résolus / ouverts</div>
      <div class="problems-box">
        ${(node.problemsSolved || []).map(p => `<div class="problem-item problem-solved">✓ ${p}</div>`).join('')}
        ${(node.problemsRaised || []).map(p => `<div class="problem-item problem-raised">⚡ ${p}</div>`).join('')}
      </div>
    </div>` : ''}
    <div>
      <div class="section-title">Voisinage dans le graphe</div>
      <div class="neighbors-grid">
        ${preds.length ? `<div class="neighbor-section">
          <div class="neighbor-label">← Antécédents (${preds.length})</div>
          ${preds.map(e => {
            const src = GRAPH_DATA.nodes.find(n => n.id === e.from);
            const et = GRAPH_DATA.edgeTypes[e.type];
            const c2 = GRAPH_DATA.nodeTypes[src?.type]?.color || '#888';
            return `<div class="neighbor-item" onclick="selectNode('${e.from}')">
              <span class="neighbor-dot" style="background:${c2}"></span>
              <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${src?.label || e.from}</span>
              <span class="edge-badge" style="background:${et?.color || '#888'}22;color:${et?.color || '#888'}">${et?.label || e.type}</span>
            </div>`;
          }).join('')}
        </div>` : ''}
        ${succs.length ? `<div class="neighbor-section">
          <div class="neighbor-label">Successeurs → (${succs.length})</div>
          ${succs.map(e => {
            const tgt = GRAPH_DATA.nodes.find(n => n.id === e.to);
            const et = GRAPH_DATA.edgeTypes[e.type];
            const c2 = GRAPH_DATA.nodeTypes[tgt?.type]?.color || '#888';
            return `<div class="neighbor-item" onclick="selectNode('${e.to}')">
              <span class="neighbor-dot" style="background:${c2}"></span>
              <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${tgt?.label || e.to}</span>
              <span class="edge-badge" style="background:${et?.color || '#888'}22;color:${et?.color || '#888'}">${et?.label || e.type}</span>
            </div>`;
          }).join('')}
        </div>` : ''}
        ${!preds.length && !succs.length ? '<div style="color:var(--color-text-faint);font-size:var(--text-xs)">Aucun voisin visible</div>' : ''}
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════
// TOOLTIP
// ═══════════════════════════════════════════════════════════
const tooltip = document.getElementById('tooltip');
function showTooltip(event, html) {
  tooltip.innerHTML = html;
  tooltip.classList.add('visible');
  moveTooltip(event);
}
function moveTooltip(event) {
  const x = event.clientX + 14, y = event.clientY - 10;
  const rect = tooltip.getBoundingClientRect();
  tooltip.style.left = (x + rect.width > window.innerWidth ? x - rect.width - 24 : x) + 'px';
  tooltip.style.top = (y + rect.height > window.innerHeight ? y - rect.height - 10 : y) + 'px';
}
function hideTooltip() { tooltip.classList.remove('visible'); }

// ═══════════════════════════════════════════════════════════
// LÉGENDE
// ═══════════════════════════════════════════════════════════
function renderLegend() {
  const lc = document.getElementById('legend-content');
  lc.innerHTML = Object.entries(GRAPH_DATA.edgeTypes).map(([, et]) => `
    <div class="legend-item">
      <svg width="28" height="8" style="flex-shrink:0">
        <line x1="0" y1="4" x2="20" y2="4" stroke="${et.color}" stroke-width="1.5"
          stroke-dasharray="${et.dash !== 'none' ? et.dash : ''}"/>
        <polygon points="20,0 28,4 20,8" fill="${et.color}"/>
      </svg>
      <span>${et.label}</span>
    </div>`).join('');
}

document.getElementById('toggle-legend-btn').addEventListener('click', () => {
  document.getElementById('legend').classList.toggle('visible');
});

// ═══════════════════════════════════════════════════════════
// FILTRES UI
// ═══════════════════════════════════════════════════════════
function buildFilters() {
  const ntc = document.getElementById('node-type-filters');
  const etc = document.getElementById('edge-type-filters');

  Object.entries(GRAPH_DATA.nodeTypes).forEach(([key, nt]) => {
    const btn = document.createElement('button');
    btn.className = 'filter-tag active';
    btn.style.cssText = `background:${nt.color}18;color:${nt.color};border-color:${nt.color}40`;
    btn.innerHTML = `<span class="tag-dot" style="background:${nt.color}"></span>${nt.label}`;
    btn.dataset.key = key;
    btn.addEventListener('click', () => {
      if (state.activeNodeTypes.has(key)) state.activeNodeTypes.delete(key);
      else state.activeNodeTypes.add(key);
      btn.classList.toggle('active', state.activeNodeTypes.has(key));
      updateGraph();
    });
    ntc.appendChild(btn);
  });

  Object.entries(GRAPH_DATA.edgeTypes).forEach(([key, et]) => {
    const btn = document.createElement('button');
    btn.className = 'filter-tag active';
    btn.style.cssText = `background:${et.color}18;color:${et.color};border-color:${et.color}40`;
    btn.innerHTML = `<span class="tag-dot" style="background:${et.color}"></span>${et.label}`;
    btn.dataset.key = key;
    btn.addEventListener('click', () => {
      if (state.activeEdgeTypes.has(key)) state.activeEdgeTypes.delete(key);
      else state.activeEdgeTypes.add(key);
      btn.classList.toggle('active', state.activeEdgeTypes.has(key));
      updateGraph();
    });
    etc.appendChild(btn);
  });
}

document.getElementById('search-input').addEventListener('input', e => {
  state.searchText = e.target.value.trim();
  Object.keys(nodePos).forEach(k => delete nodePos[k]);
  updateGraph();
});

document.getElementById('year-min').addEventListener('change', e => {
  state.yearMin = parseInt(e.target.value) || -100000;
  Object.keys(nodePos).forEach(k => delete nodePos[k]);
  updateGraph();
});

document.getElementById('year-max').addEventListener('change', e => {
  state.yearMax = parseInt(e.target.value) || 2026;
  Object.keys(nodePos).forEach(k => delete nodePos[k]);
  updateGraph();
});

document.getElementById('reset-btn').addEventListener('click', () => {
  state.activeNodeTypes = new Set(Object.keys(GRAPH_DATA.nodeTypes));
  state.activeEdgeTypes = new Set(Object.keys(GRAPH_DATA.edgeTypes));
  state.searchText = '';
  state.yearMin = -100000;
  state.yearMax = 2026;
  document.getElementById('search-input').value = '';
  document.getElementById('year-min').value = '-100000';
  document.getElementById('year-max').value = '2026';
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.add('active'));
  Object.keys(nodePos).forEach(k => delete nodePos[k]);
  updateGraph();
});

// SIMULATION TOGGLE
document.getElementById('sim-toggle').addEventListener('click', () => {
  state.simRunning = !state.simRunning;
  const btn = document.getElementById('sim-toggle');
  const lbl = document.getElementById('sim-label');
  const ico = document.getElementById('sim-icon');
  if (state.simRunning) {
    btn.classList.replace('stopped', 'running');
    lbl.textContent = 'Arrêter la simulation';
    ico.innerHTML = '<rect x="2" y="1" width="3" height="10"/><rect x="7" y="1" width="3" height="10"/>';
    const vis = getVisibleNodes();
    buildSimulation(vis, getVisibleEdges(vis.map(n => n.id)));
  } else {
    btn.classList.replace('running', 'stopped');
    lbl.textContent = 'Activer la simulation';
    ico.innerHTML = '<polygon points="2,1 11,6 2,11"/>';
    if (simulation) { simulation.stop(); simulation = null; }
  }
});

// ZOOM
document.getElementById('zoom-in-btn').addEventListener('click', () => svg.transition().call(zoomBehavior.scaleBy, 1.4));
document.getElementById('zoom-out-btn').addEventListener('click', () => svg.transition().call(zoomBehavior.scaleBy, 1 / 1.4));
document.getElementById('zoom-reset-btn').addEventListener('click', () => {
  svg.transition().duration(500).call(zoomBehavior.transform, d3.zoomIdentity);
});

// RESIZE
window.addEventListener('resize', () => {
  W = svgEl.clientWidth; H = svgEl.clientHeight;
  Object.keys(nodePos).forEach(k => delete nodePos[k]);
  renderGraph();
});

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
buildFilters();
renderLegend();
renderGraph();
