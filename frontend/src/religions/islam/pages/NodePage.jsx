import { useParams, Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import NodeTabs from '../../../components/NodeTabs';
import { getNodeData } from '../data/nodes/index';
import { findNode, islamTree } from '../data/islamTree';

function StatChip({ label, value }) {
  return (
    <div style={{ background: '#181C24', border: '1px solid #252A35', borderRadius: 4, padding: '12px 20px' }}>
      <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8A857C', marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: 'Inter', fontSize: 17, fontWeight: 500, color: '#E8E2D9' }}>{value}</div>
    </div>
  );
}

function SiblingNav({ nodeId }) {
  const result = findNode(nodeId, islamTree);
  if (!result || result.path.length < 2) return null;
  const parent = result.path[result.path.length - 2];
  const siblings = parent.children || [];

  return (
    <div style={{ background: '#181C24', borderRight: '1px solid #252A35', width: 260, flexShrink: 0, overflowY: 'auto', padding: '28px 20px' }}>
      <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8A857C', marginBottom: 16 }}>
        Sibling branches
      </div>
      <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#3A3F4D', marginBottom: 20 }}>
        Under: <span style={{ color: '#8A857C' }}>{parent.name}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {siblings.map(s => (
          <Link key={s.id} to={`/node/${s.id}`}
            style={{
              fontFamily: 'Inter', fontSize: 13, fontWeight: 500,
              color: s.id === nodeId ? '#E8E2D9' : '#8A857C',
              background: s.id === nodeId ? '#252A35' : 'none',
              borderLeft: s.id === nodeId ? '2px solid #C1623F' : '2px solid transparent',
              padding: '8px 12px',
              borderRadius: '0 4px 4px 0',
              textDecoration: 'none',
              display: 'block',
              transition: 'color 180ms ease-out, background 180ms ease-out',
            }}
            onMouseEnter={e => { if (s.id !== nodeId) { e.currentTarget.style.color = '#E8E2D9'; } }}
            onMouseLeave={e => { if (s.id !== nodeId) { e.currentTarget.style.color = '#8A857C'; } }}>
            {s.name}
            {s.contested && <span style={{ marginLeft: 8, fontFamily: 'Inter', fontSize: 10, color: '#8B3A3A', border: '1px solid #8B3A3A', borderRadius: 2, padding: '1px 4px' }}>C</span>}
          </Link>
        ))}
      </div>

      {/* parent's siblings if available */}
      {parent.id !== 'islam' && (
        <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid #252A35' }}>
          <Link to={`/node/${parent.id}`} style={{ fontFamily: 'Inter', fontSize: 12, color: '#C1623F', textDecoration: 'none' }}>
            ↑ {parent.name}
          </Link>
        </div>
      )}

      <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #252A35' }}>
        <Link to="/tree/islam" style={{ fontFamily: 'Inter', fontSize: 12, color: '#8A857C', textDecoration: 'none', transition: 'color 180ms' }}
          onMouseEnter={e => e.currentTarget.style.color = '#E8E2D9'}
          onMouseLeave={e => e.currentTarget.style.color = '#8A857C'}>
          ← Full Islam tree
        </Link>
      </div>
    </div>
  );
}

function TaxonomyBreadcrumb({ nodeId }) {
  const result = findNode(nodeId, islamTree);
  if (!result) return null;
  const crumbs = result.path;

  return (
    <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#8A857C', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
      <Link to="/" style={{ color: '#8A857C', textDecoration: 'none' }}>Religion Explorer</Link>
      <span>/</span>
      <Link to="/tree/islam" style={{ color: '#8A857C', textDecoration: 'none' }}>Islam</Link>
      {crumbs.slice(1).map(c => (
        <>
          <span key={c.id + '-sep'}>/</span>
          {c.id === nodeId
            ? <span key={c.id} style={{ color: '#E8E2D9' }}>{c.name}</span>
            : <Link key={c.id} to={`/node/${c.id}`} style={{ color: '#8A857C', textDecoration: 'none' }}>{c.name}</Link>
          }
        </>
      ))}
    </div>
  );
}

export default function NodePage() {
  const { id } = useParams();
  const data = getNodeData(id);

  if (!data) {
    return (
      <div style={{ height: '100vh', background: '#0F1117', display: 'flex', flexDirection: 'column' }}>
        <Navbar backLink={{ href: '/tree/islam', label: 'Back to Islam tree' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
          <div style={{ fontFamily: 'Playfair Display', fontSize: 38, color: '#E8E2D9', marginBottom: 16 }}>
            Entry coming soon
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 15, color: '#8A857C', maxWidth: 480, lineHeight: 1.7 }}>
            Detailed content for this branch is being prepared. The tree structure reflects the academic taxonomy; individual entries will be published progressively.
          </div>
          <Link to="/tree/islam" style={{ display: 'inline-block', marginTop: 32, fontFamily: 'Inter', fontSize: 13, color: '#C1623F', textDecoration: 'none' }}>
            ← Return to Islam tree
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', background: '#0F1117', display: 'flex', flexDirection: 'column' }}>
      <Navbar backLink={{ href: '/tree/islam', label: 'Back to Islam tree' }} />

      {/* breadcrumb bar */}
      <div style={{ height: 44, background: '#181C24', borderBottom: '1px solid #252A35', display: 'flex', alignItems: 'center', padding: '0 40px', flexShrink: 0 }}>
        <TaxonomyBreadcrumb nodeId={id} />
      </div>

      {/* body: sidebar + main */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <SiblingNav nodeId={id} />

        {/* main content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '40px 56px' }}>
          {/* hero */}
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontFamily: 'Playfair Display', fontSize: 48, fontWeight: 400, color: '#E8E2D9', margin: '0 0 10px' }}>
              {data.name}
            </h1>
            <div style={{ fontFamily: 'Inter', fontSize: 14, color: '#8A857C', marginBottom: 24 }}>
              {data.subtitle}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <StatChip label="Adherents" value={data.meta.adherents} />
              <StatChip label="Founded" value={data.meta.founded} />
              <StatChip label="Primary regions" value={data.meta.primaryRegions} />
            </div>
          </div>

          <div style={{ height: 1, background: '#252A35', margin: '28px 0' }} />

          <NodeTabs sections={data.sections} />
        </div>
      </div>
    </div>
  );
}
