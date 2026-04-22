import { useRef, useEffect, useState, useCallback } from 'react';
import { islamTree } from '../data/islamTree';
import { hasNodeData } from '../data/nodes/index';
import { useNavigate } from 'react-router-dom';
import styles from './IslamGraph.module.css';

// ─── layout constants ─────────────────────────────────────────────────────────
const NODE_W = 140;
const NODE_H = 44;
const H_GAP = 72;   // vertical gap between levels
const V_GAP = 18;   // horizontal gap between sibling nodes

// ─── recursive layout ─────────────────────────────────────────────────────────
function layoutNode(node, depth, counter) {
  const children = (node.children || []).map(c => layoutNode(c, depth + 1, counter));

  let x;
  if (children.length === 0) {
    x = counter.val * (NODE_W + V_GAP);
    counter.val += 1;
  } else {
    // center over children
    const firstX = children[0].x;
    const lastX = children[children.length - 1].x;
    x = (firstX + lastX + NODE_W) / 2 - NODE_W / 2;
  }

  return { ...node, x, y: depth * (NODE_H + H_GAP), children };
}

function layout(tree) {
  const counter = { val: 0 };
  return layoutNode(tree, 0, counter);
}

// ─── collect all nodes + edges ────────────────────────────────────────────────
function collect(node, nodes = [], edges = []) {
  nodes.push(node);
  (node.children || []).forEach(child => {
    edges.push({ from: node, to: child });
    collect(child, nodes, edges);
  });
  return { nodes, edges };
}

// ─── component ────────────────────────────────────────────────────────────────
export default function IslamGraph() {
  const navigate = useNavigate();
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const laidOut = layout(islamTree);
  const { nodes, edges } = collect(laidOut);

  // bounding box
  const maxX = Math.max(...nodes.map(n => n.x)) + NODE_W;
  const maxY = Math.max(...nodes.map(n => n.y)) + NODE_H;
  const PAD = 60;
  const svgW = maxX + PAD * 2;
  const svgH = maxY + PAD * 2;

  // pan & zoom
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [hoveredId, setHoveredId] = useState(null);
  const dragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  // auto-fit on mount
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    const scaleX = (width - 80) / svgW;
    const scaleY = (height - 80) / svgH;
    const scale = Math.min(scaleX, scaleY, 1);
    const x = (width - svgW * scale) / 2;
    const y = 40;
    setTransform({ x, y, scale });
  }, [svgW, svgH]);

  const onWheel = useCallback(e => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform(t => {
      const newScale = Math.max(0.2, Math.min(3, t.scale * delta));
      const rect = containerRef.current.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      return {
        scale: newScale,
        x: mx - (mx - t.x) * (newScale / t.scale),
        y: my - (my - t.y) * (newScale / t.scale),
      };
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.addEventListener('wheel', onWheel, { passive: false });
    return () => { if (el) el.removeEventListener('wheel', onWheel); };
  }, [onWheel]);

  const onMouseDown = useCallback(e => {
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseMove = useCallback(e => {
    if (!dragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    setTransform(t => ({ ...t, x: t.x + dx, y: t.y + dy }));
  }, []);

  const onMouseUp = useCallback(() => { dragging.current = false; }, []);

  function handleNodeClick(node) {
    if (node.id === 'islam') return; // root — no page
    navigate(`/node/${node.id}`);
  }

  function nodeColor(node) {
    if (node.contested) return { bg: '#1A1010', border: '#8B3A3A' };
    if (node.crossCuts) return { bg: '#1A1810', border: '#C1623F' };
    if (node.id === 'islam') return { bg: '#252A35', border: '#C1623F' };
    return { bg: '#181C24', border: '#252A35' };
  }

  function hoverBorder(node) {
    if (node.contested) return '#8B3A3A';
    return '#C1623F';
  }

  const clickable = (node) => node.id !== 'islam';

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ cursor: dragging.current ? 'grabbing' : 'grab' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}>

      {/* zoom controls */}
      <div className={styles.controls}>
        {[
          { label: '+', action: () => setTransform(t => ({ ...t, scale: Math.min(3, t.scale * 1.2) })) },
          { label: '−', action: () => setTransform(t => ({ ...t, scale: Math.max(0.2, t.scale * 0.8) })) },
        ].map(btn => (
          <button key={btn.label} onClick={btn.action} className={styles.zoomBtn}>
            {btn.label}
          </button>
        ))}
      </div>

      {/* instruction hint */}
      <div className={styles.instructionHint}>
        Scroll to zoom · drag to pan · click a node to explore
      </div>

      <svg
        ref={svgRef}
        width={svgW}
        height={svgH}
        className={styles.svgGraph}
        style={{ transform: `translate(${transform.x}px,${transform.y}px) scale(${transform.scale})` }}>

        {/* connector lines — draw behind nodes */}
        <g>
          {edges.map((edge, i) => {
            const fromX = edge.from.x + PAD + NODE_W / 2;
            const fromY = edge.from.y + PAD + NODE_H;
            const toX = edge.to.x + PAD + NODE_W / 2;
            const toY = edge.to.y + PAD;
            const midY = (fromY + toY) / 2;
            const isCross = edge.from.crossCuts || edge.to.crossCuts;
            return (
              <path key={i}
                d={`M${fromX},${fromY} C${fromX},${midY} ${toX},${midY} ${toX},${toY}`}
                fill="none"
                stroke={isCross ? '#C1623F' : '#252A35'}
                strokeWidth={1}
                strokeDasharray={isCross ? '4 3' : 'none'}
                opacity={isCross ? 0.6 : 1}
              />
            );
          })}
        </g>

        {/* nodes */}
        <g>
          {nodes.map(node => {
            const colors = nodeColor(node);
            const isHovered = hoveredId === node.id;
            const isClickable = clickable(node);
            const hasDetail = hasNodeData(node.id);
            const x = node.x + PAD;
            const y = node.y + PAD;

            return (
              <g key={node.id}
                transform={`translate(${x},${y})`}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleNodeClick(node)}>

                {/* node box */}
                <rect
                  width={NODE_W} height={NODE_H}
                  rx={4} ry={4}
                  fill={isHovered && isClickable ? '#252A35' : colors.bg}
                  stroke={isHovered && isClickable ? '#C1623F' : colors.border}
                  strokeWidth={isHovered && isClickable ? 1 : 1}
                />

                {/* contested marker — left edge accent */}
                {node.contested && (
                  <rect x={0} y={0} width={3} height={NODE_H} rx={2} fill="#8B3A3A" />
                )}

                {/* active indicator for nodes with detail */}
                {hasDetail && !isHovered && (
                  <circle cx={NODE_W - 10} cy={8} r={3} fill="#C1623F" opacity={0.6} />
                )}

                {/* node name */}
                <text
                  x={node.contested ? 12 : 8}
                  y={node.note ? 17 : NODE_H / 2 + 5}
                  fontFamily="Inter"
                  fontSize={12}
                  fontWeight={500}
                  fill={isHovered && isClickable ? '#E8E2D9' : node.id === 'islam' ? '#E8E2D9' : '#C8C2B9'}
                  style={{ pointerEvents: 'none' }}>
                  {node.name}
                </text>

                {/* note subtitle */}
                {node.note && (
                  <text
                    x={node.contested ? 12 : 8}
                    y={32}
                    fontFamily="Inter"
                    fontSize={10}
                    fill={node.id === 'islam' ? '#8A857C' : '#4A4540'}
                    style={{ pointerEvents: 'none' }}>
                    {node.note}
                  </text>
                )}

                {/* contested badge */}
                {node.contested && (
                  <g>
                    <rect x={NODE_W - 58} y={NODE_H - 14} width={52} height={12} rx={2} fill="#1A1010" stroke="#8B3A3A" strokeWidth={0.75} />
                    <text x={NODE_W - 57 + 2} y={NODE_H - 4} fontFamily="Inter" fontSize={9} fontWeight={500} fill="#C08080" style={{ pointerEvents: 'none' }}>CONTESTED</text>
                  </g>
                )}

                {/* cross-cuts label */}
                {node.crossCuts && (
                  <g>
                    <rect x={NODE_W - 72} y={NODE_H - 14} width={66} height={12} rx={2} fill="#1C1810" stroke="#C1623F" strokeWidth={0.75} />
                    <text x={NODE_W - 70} y={NODE_H - 4} fontFamily="Inter" fontSize={9} fontWeight={500} fill="#C1623F" style={{ pointerEvents: 'none' }}>CROSS-BRANCH</text>
                  </g>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
