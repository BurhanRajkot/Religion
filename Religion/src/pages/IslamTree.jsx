import Navbar from '../components/Navbar';
import IslamGraph from '../components/IslamGraph';

export default function IslamTree() {
  return (
    <div style={{ height: '100vh', background: '#0F1117', display: 'flex', flexDirection: 'column' }}>
      <Navbar backLink={{ href: '/', label: 'Back to religions' }} />

      {/* breadcrumb bar */}
      <div style={{ height: 44, background: '#181C24', borderBottom: '1px solid #252A35', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', flexShrink: 0 }}>
        <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C' }}>
          Religion Explorer / <span style={{ color: '#E8E2D9' }}>Islam</span>
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3A3F4D' }}>
          Click any branch to open its full entry
        </div>
      </div>

      {/* graph header */}
      <div style={{ padding: '28px 40px 16px', flexShrink: 0 }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: 38, fontWeight: 400, color: '#E8E2D9', margin: 0 }}>
          Islam — Taxonomy of branches &amp; schools
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#8A857C', marginTop: 8, marginBottom: 0 }}>
          A visual map of the major divisions, legal schools, and mystical traditions within Islam.
          Contested branches are marked in red. Cross-branch traditions use a dashed connector.
        </p>
      </div>

      {/* full-screen graph canvas */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <IslamGraph />
      </div>
    </div>
  );
}
