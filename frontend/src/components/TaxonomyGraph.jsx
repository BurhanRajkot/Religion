import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom';
import styles from './TaxonomyGraph.module.css';
import { hasNodeData } from '../religions/islam/data/nodes/index';

const NODE_W = 140;
const NODE_H = 44;
const H_GAP = 72;
const V_GAP = 24;

export default function TaxonomyGraph({ treeData, onNodeClick, rootId = 'islam' }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const zoomRef = useRef(null);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredPath, setHoveredPath] = useState([]);
  const [activeHoverNode, setActiveHoverNode] = useState(null);

  // Parse the data with d3.hierarchy
  const root = useMemo(() => d3.hierarchy(treeData), [treeData]);

  // Flatten for search
  const allNodes = useMemo(() => root.descendants(), [root]);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allNodes.filter(n => n.data.name.toLowerCase().includes(q) || (n.data.note && n.data.note.toLowerCase().includes(q))).slice(0, 5);
  }, [searchQuery, allNodes]);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    const g = svg.select('.zoom-layer');

    // Layout
    const treeLayout = d3.tree().nodeSize([NODE_W + V_GAP, NODE_H + H_GAP]);
    treeLayout(root);

    // Bounding Box to center properly
    let x0 = Infinity, x1 = -x0, y0 = Infinity, y1 = -y0;
    root.each(d => {
      if (d.x > x1) x1 = d.x;
      if (d.x < x0) x0 = d.x;
      if (d.y > y1) y1 = d.y;
      if (d.y < y0) y0 = d.y;
    });

    const graphWidth = x1 - x0 + NODE_W;
    const graphHeight = y1 - y0 + NODE_H;

    // Zoom setup
    const zoom = d3.zoom()
      .scaleExtent([0.1, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });
    
    zoomRef.current = zoom;
    svg.call(zoom);
    // Disable double click zoom to avoid confusing the user
    svg.on("dblclick.zoom", null);

    // Initial transform to center
    const initialScale = Math.min((width - 100) / graphWidth, (height - 100) / graphHeight, 1);
    const initialX = (width - graphWidth * initialScale) / 2 - x0 * initialScale + (NODE_W/2)*initialScale;
    const initialY = 60; // Padding top

    svg.call(zoom.transform, d3.zoomIdentity.translate(initialX, initialY).scale(initialScale));

    // Draw Links
    const linkGenerator = d3.linkVertical()
      .x(d => d.x)
      .y(d => d.y);

    const linkUpdate = g.select('.links').selectAll('.link').data(root.links());
    linkUpdate.join('path')
      .attr('class', 'link')
      .attr('d', d => linkGenerator({
        source: { x: d.source.x, y: d.source.y + NODE_H },
        target: { x: d.target.x, y: d.target.y }
      }))
      .attr('fill', 'none')
      .attr('stroke', d => (d.source.data.crossCuts || d.target.data.crossCuts) ? '#C1623F' : '#252A35')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', d => (d.source.data.crossCuts || d.target.data.crossCuts) ? '4 4' : 'none')
      .attr('opacity', d => (d.source.data.crossCuts || d.target.data.crossCuts) ? 0.6 : 1);

    // Draw Nodes
    const nodeUpdate = g.select('.nodes').selectAll('.node-group').data(root.descendants(), d => d.data.id);
    
    const nodeEnter = nodeUpdate.join('g')
      .attr('class', 'node-group')
      .attr('transform', d => `translate(${d.x - NODE_W/2},${d.y})`)
      .style('cursor', d => d.data.id !== rootId ? 'pointer' : 'default')
      .on('mouseenter', (event, d) => {
        setActiveHoverNode(d.data.id);
        const path = d.ancestors().reverse().map(n => n.data.name);
        setHoveredPath(path);
      })
      .on('mouseleave', () => {
        setActiveHoverNode(null);
      })
      .on('click', (event, d) => {
        if (d.data.id !== rootId) {
          if (onNodeClick) onNodeClick(d.data);
          else navigate(`/node/${d.data.id}`);
        }
      });

    // Cleanup previous contents for safety during re-renders
    nodeEnter.selectAll('*').remove();

    // Node Box
    nodeEnter.append('rect')
      .attr('width', NODE_W)
      .attr('height', NODE_H)
      .attr('rx', 4)
      .attr('ry', 4)
      .attr('fill', d => {
        if (d.data.contested) return '#1A1010';
        if (d.data.crossCuts) return '#1A1810';
        if (d.data.id === rootId) return '#252A35';
        return '#181C24';
      })
      .attr('stroke', d => {
        if (d.data.contested) return '#8B3A3A';
        if (d.data.crossCuts || d.data.id === rootId) return '#C1623F';
        return '#252A35';
      })
      .attr('stroke-width', 1)
      .attr('class', 'node-box');

    // Contested Marker (Left Edge)
    nodeEnter.filter(d => d.data.contested).append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 3)
      .attr('height', NODE_H)
      .attr('rx', 2)
      .attr('fill', '#8B3A3A');

    // Detail Indicator (Dot)
    nodeEnter.filter(d => hasNodeData(d.data.id)).append('circle')
      .attr('cx', NODE_W - 10)
      .attr('cy', 8)
      .attr('r', 3)
      .attr('fill', '#C1623F')
      .attr('opacity', 0.6);

    // Node Name
    nodeEnter.append('text')
      .attr('x', d => d.data.contested ? 12 : 8)
      .attr('y', d => d.data.note ? 17 : NODE_H / 2 + 5)
      .attr('font-family', 'Inter')
      .attr('font-size', '12px')
      .attr('font-weight', '500')
      .attr('fill', d => d.data.id === rootId ? '#E8E2D9' : '#C8C2B9')
      .style('pointer-events', 'none')
      .attr('class', 'node-title')
      .text(d => d.data.name);

    // Note Subtitle
    nodeEnter.filter(d => d.data.note).append('text')
      .attr('x', d => d.data.contested ? 12 : 8)
      .attr('y', 32)
      .attr('font-family', 'Inter')
      .attr('font-size', '10px')
      .attr('fill', d => d.data.id === rootId ? '#8A857C' : '#4A4540')
      .style('pointer-events', 'none')
      .text(d => d.data.note);

    // Contested Badge Text
    nodeEnter.filter(d => d.data.contested).append('g').call(g => {
      g.append('rect')
        .attr('x', NODE_W - 58)
        .attr('y', NODE_H - 14)
        .attr('width', 52)
        .attr('height', 12)
        .attr('rx', 2)
        .attr('fill', '#1A1010')
        .attr('stroke', '#8B3A3A')
        .attr('stroke-width', 0.75);
      g.append('text')
        .attr('x', NODE_W - 55)
        .attr('y', NODE_H - 4)
        .attr('font-family', 'Inter')
        .attr('font-size', '9px')
        .attr('font-weight', '500')
        .attr('fill', '#C08080')
        .text('CONTESTED');
    });

    // Cross-Cuts Badge Text
    nodeEnter.filter(d => d.data.crossCuts).append('g').call(g => {
      g.append('rect')
        .attr('x', NODE_W - 72)
        .attr('y', NODE_H - 14)
        .attr('width', 66)
        .attr('height', 12)
        .attr('rx', 2)
        .attr('fill', '#1C1810')
        .attr('stroke', '#C1623F')
        .attr('stroke-width', 0.75);
      g.append('text')
        .attr('x', NODE_W - 70)
        .attr('y', NODE_H - 4)
        .attr('font-family', 'Inter')
        .attr('font-size', '9px')
        .attr('font-weight', '500')
        .attr('fill', '#C1623F')
        .text('CROSS-BRANCH');
    });

  }, [root, rootId, navigate, onNodeClick]);

  // Hover Effect Sync
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    
    svg.selectAll('.node-group').select('.node-box')
      .attr('fill', d => {
        const isHover = d.data.id === activeHoverNode && d.data.id !== rootId;
        if (isHover) return '#252A35';
        if (d.data.contested) return '#1A1010';
        if (d.data.crossCuts) return '#1A1810';
        if (d.data.id === rootId) return '#252A35';
        return '#181C24';
      })
      .attr('stroke', d => {
        const isHover = d.data.id === activeHoverNode && d.data.id !== rootId;
        if (isHover) return '#C1623F';
        if (d.data.contested) return '#8B3A3A';
        if (d.data.crossCuts || d.data.id === rootId) return '#C1623F';
        return '#252A35';
      });

    svg.selectAll('.node-group').select('.node-title')
      .attr('fill', d => {
        const isHover = d.data.id === activeHoverNode && d.data.id !== rootId;
        if (isHover || d.data.id === rootId) return '#E8E2D9';
        return '#C8C2B9';
      });

  }, [activeHoverNode, rootId]);

  const flyToNode = (node) => {
    if (!svgRef.current || !zoomRef.current || !containerRef.current) return;
    const svg = d3.select(svgRef.current);
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    // Calculate new transform
    const scale = 1.2; // Zoom in
    const x = width / 2 - node.x * scale;
    const y = height / 2 - node.y * scale - NODE_H/2 * scale;

    svg.transition()
      .duration(750)
      .call(zoomRef.current.transform, d3.zoomIdentity.translate(x, y).scale(scale));
  };

  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1.3);
    }
  };

  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 0.7);
    }
  };

  const handleSearchResultClick = (node) => {
    setSearchQuery('');
    flyToNode(node);
    
    // Simulate hover to show breadcrumb
    setActiveHoverNode(node.data.id);
    const path = node.ancestors().reverse().map(n => n.data.name);
    setHoveredPath(path);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      
      {/* Top Bar with Breadcrumb and Search */}
      <div className={styles.topBar}>
        <div className={styles.breadcrumb} style={{ opacity: hoveredPath.length ? 1 : 0, transition: 'opacity 200ms' }}>
          {hoveredPath.map((p, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span>/</span>}
              <span className={i === hoveredPath.length - 1 ? styles.crumbActive : ''}>{p}</span>
            </React.Fragment>
          ))}
        </div>

        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search branches..." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchResults.length > 0 && (
            <div className={styles.searchResults}>
              {searchResults.map((result) => (
                <div 
                  key={result.data.id} 
                  className={styles.searchResultItem}
                  onClick={() => handleSearchResultClick(result)}
                >
                  <div style={{ color: '#E8E2D9' }}>{result.data.name}</div>
                  {result.data.note && <div style={{ fontSize: '11px', marginTop: '2px' }}>{result.data.note}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Zoom Controls */}
      <div className={styles.controls}>
        <button className={styles.zoomBtn} onClick={handleZoomIn}>+</button>
        <button className={styles.zoomBtn} onClick={handleZoomOut}>−</button>
      </div>

      {/* Instruction Hint */}
      <div className={styles.instructionHint}>
        Scroll to zoom · drag to pan · click a node to explore
      </div>

      <svg ref={svgRef} className={styles.svgGraph}>
        <g className="zoom-layer">
          <g className="links"></g>
          <g className="nodes"></g>
        </g>
      </svg>
    </div>
  );
}
