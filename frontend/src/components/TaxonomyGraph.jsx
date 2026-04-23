import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom';
import styles from './TaxonomyGraph.module.css';

const NODE_W = 160;
const NODE_H = 52;
const H_GAP = 64;
const V_GAP = 28;

export default function TaxonomyGraph({ 
  treeData, 
  onNodeClick = undefined, 
  rootId = treeData?.id,
  hasNodeData = (/** @type {string} */_id) => false
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const zoomRef = useRef(null);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredPath, setHoveredPath] = useState([]);
  const [activeHoverNode, setActiveHoverNode] = useState(null);

  const root = useMemo(() => d3.hierarchy(treeData), [treeData]);
  const allNodes = useMemo(() => root.descendants(), [root]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allNodes.filter(n =>
      n.data.name.toLowerCase().includes(q) ||
      (n.data.note && n.data.note.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [searchQuery, allNodes]);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const width  = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    const g   = svg.select('.zoom-layer');

    // Layout
    const treeLayout = d3.tree().nodeSize([NODE_W + V_GAP, NODE_H + H_GAP]);
    treeLayout(root);

    // Bounding box
    let x0 = Infinity, x1 = -Infinity;
    let y0 = Infinity, y1 = -Infinity;
    root.each(d => {
      if (d.x > x1) x1 = d.x;
      if (d.x < x0) x0 = d.x;
      if (d.y > y1) y1 = d.y;
      if (d.y < y0) y0 = d.y;
    });

    const graphWidth  = x1 - x0 + NODE_W;
    const graphHeight = y1 - y0 + NODE_H;

    // Zoom
    const zoom = d3.zoom()
      .scaleExtent([0.08, 3])
      .on('zoom', event => g.attr('transform', event.transform));

    zoomRef.current = zoom;
    svg.call(zoom);
    svg.on('dblclick.zoom', null);

    const initialScale = Math.min((width - 80) / graphWidth, (height - 80) / graphHeight, 1);
    const initialX = (width - graphWidth * initialScale) / 2 - x0 * initialScale + (NODE_W / 2) * initialScale;
    const initialY = 48;

    svg.call(zoom.transform, d3.zoomIdentity.translate(initialX, initialY).scale(initialScale));

    // --- Links ---
    const linkGen = d3.linkVertical();
    g.select('.links').selectAll('.link').data(root.links())
      .join('path')
      .attr('class', 'link')
      .attr('d', d => linkGen({
        source: [d.source.x, d.source.y + NODE_H],
        target: [d.target.x, d.target.y]
      }))
      .attr('fill', 'none')
      .attr('stroke', d =>
        (d.source.data.crossCuts || d.target.data.crossCuts) ? '#4A4030' : '#2A2E3A'
      )
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', d =>
        (d.source.data.crossCuts || d.target.data.crossCuts) ? '5 5' : 'none'
      );

    // --- Nodes ---
    const nodeUpdate = g.select('.nodes').selectAll('.node-group')
      .data(root.descendants(), d => d.data.id);

    const nodeEnter = nodeUpdate.join('g')
      .attr('class', 'node-group')
      .attr('transform', d => `translate(${d.x - NODE_W / 2},${d.y})`)
      .style('cursor', d => d.data.id !== rootId ? 'pointer' : 'default')
      .on('mouseenter', (event, d) => {
        setActiveHoverNode(d.data.id);
        setHoveredPath(d.ancestors().reverse().map(n => n.data.name));
      })
      .on('mouseleave', () => setActiveHoverNode(null))
      .on('click', (event, d) => {
        if (d.data.id !== rootId) {
          if (onNodeClick) onNodeClick(d.data);
          else navigate(`/node/${d.data.id}`);
        }
      });

    nodeEnter.selectAll('*').remove();

    // Background rect
    nodeEnter.append('rect')
      .attr('width', NODE_W)
      .attr('height', NODE_H)
      .attr('rx', 3)
      .attr('fill', d => d.data.id === rootId ? '#1C2030' : '#111318')
      .attr('stroke', d => {
        if (d.data.id === rootId) return '#6B7280';
        if (d.data.contested)    return '#5C2F2F';
        if (d.data.crossCuts)    return '#5C4A2F';
        return '#232730';
      })
      .attr('stroke-width', 1)
      .attr('class', 'node-box');

    // Top border line (accent) — only 3 node types
    nodeEnter.filter(d => d.data.id === rootId || d.data.contested || d.data.crossCuts)
      .append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', NODE_W)
      .attr('y2', 0)
      .attr('stroke', d => {
        if (d.data.id === rootId) return '#6B7280';
        if (d.data.contested)     return '#9B4444';
        return '#9B7A44';
      })
      .attr('stroke-width', 2);

    // Name text
    nodeEnter.append('text')
      .attr('x', 12)
      .attr('y', d => d.data.note ? 22 : NODE_H / 2 + 5)
      .attr('font-family', 'Inter, system-ui, sans-serif')
      .attr('font-size', '12px')
      .attr('font-weight', d => d.data.id === rootId ? '600' : '400')
      .attr('fill', d => d.data.id === rootId ? '#E0DDD8' : '#B0ADA8')
      .attr('class', 'node-title')
      .style('pointer-events', 'none')
      .text(d => d.data.name);

    // Note text
    nodeEnter.filter(d => d.data.note).append('text')
      .attr('x', 12)
      .attr('y', 40)
      .attr('font-family', 'Inter, system-ui, sans-serif')
      .attr('font-size', '10px')
      .attr('fill', '#4A4A50')
      .style('pointer-events', 'none')
      .text(d => d.data.note);

    // Has-detail dot (small indicator, top-right)
    nodeEnter.filter(d => hasNodeData(d.data.id)).append('circle')
      .attr('cx', NODE_W - 10)
      .attr('cy', 10)
      .attr('r', 3)
      .attr('fill', '#6B7280');

  }, [root, rootId, navigate, onNodeClick]);

  // Hover sync
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);

    svg.selectAll('.node-group').select('.node-box')
      .attr('fill', d => {
        const isHovered = d.data.id === activeHoverNode && d.data.id !== rootId;
        if (isHovered)               return '#1C2030';
        if (d.data.id === rootId)    return '#1C2030';
        return '#111318';
      })
      .attr('stroke', d => {
        const isHovered = d.data.id === activeHoverNode && d.data.id !== rootId;
        if (isHovered)               return '#6B7280';
        if (d.data.id === rootId)    return '#6B7280';
        if (d.data.contested)        return '#5C2F2F';
        if (d.data.crossCuts)        return '#5C4A2F';
        return '#232730';
      });

    svg.selectAll('.node-group').select('.node-title')
      .attr('fill', d => {
        const isHovered = d.data.id === activeHoverNode && d.data.id !== rootId;
        if (isHovered || d.data.id === rootId) return '#E0DDD8';
        return '#B0ADA8';
      });

  }, [activeHoverNode, rootId]);

  const flyToNode = node => {
    if (!svgRef.current || !zoomRef.current || !containerRef.current) return;
    const svg = d3.select(svgRef.current);
    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;
    const scale = 1.4;
    svg.transition().duration(600)
      .call(zoomRef.current.transform,
        d3.zoomIdentity
          .translate(w / 2 - node.x * scale, h / 2 - node.y * scale - (NODE_H / 2) * scale)
          .scale(scale)
      );
  };

  const handleZoomIn  = () => svgRef.current && zoomRef.current &&
    d3.select(svgRef.current).transition().duration(250).call(zoomRef.current.scaleBy, 1.3);
  const handleZoomOut = () => svgRef.current && zoomRef.current &&
    d3.select(svgRef.current).transition().duration(250).call(zoomRef.current.scaleBy, 0.77);

  const handleSearchResultClick = node => {
    setSearchQuery('');
    flyToNode(node);
    setActiveHoverNode(node.data.id);
    setHoveredPath(node.ancestors().reverse().map(n => n.data.name));
  };

  return (
    <div className={styles.container} ref={containerRef}>

      {/* Top bar */}
      <div className={styles.topBar}>
        {/* Breadcrumb trail */}
        <div className={styles.breadcrumb} style={{ opacity: hoveredPath.length ? 1 : 0 }}>
          {hoveredPath.map((p, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className={styles.sep}>›</span>}
              <span className={i === hoveredPath.length - 1 ? styles.crumbActive : styles.crumb}>{p}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Search */}
        <div className={styles.searchWrap}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchResults.length > 0 && (
            <div className={styles.searchResults}>
              {searchResults.map(r => (
                <div key={r.data.id} className={styles.searchItem} onClick={() => handleSearchResultClick(r)}>
                  <span className={styles.searchName}>{r.data.name}</span>
                  {r.data.note && <span className={styles.searchNote}>{r.data.note}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Zoom controls */}
      <div className={styles.controls}>
        <button className={styles.zoomBtn} onClick={handleZoomIn}  aria-label="Zoom in">+</button>
        <button className={styles.zoomBtn} onClick={handleZoomOut} aria-label="Zoom out">−</button>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.legendDot} style={{ borderColor: '#5C2F2F' }} /> Contested
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendDash} /> Cross-branch
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendDot} style={{ borderColor: '#6B7280' }} /> Has entry
        </span>
      </div>

      <svg ref={svgRef} className={styles.svgGraph}>
        <g className="zoom-layer">
          <g className="links" />
          <g className="nodes" />
        </g>
      </svg>
    </div>
  );
}
