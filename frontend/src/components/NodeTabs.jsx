import { useState } from 'react';

const TABS = ['Overview', 'Beliefs', 'Practices', 'Texts', 'History', 'Geography', 'Culture', 'Controversies', 'Research', 'Sources'];

// ─── sub-components ──────────────────────────────────────────────────────────

function Badge({ type }) {
  const styles = {
    primary: { background: '#1A2010', border: '1px solid #3B6D11', color: '#639922' },
    hadith: { background: '#1A1C10', border: '1px solid #854F0B', color: '#EF9F27' },
    jurisprudence: { background: '#1A1810', border: '1px solid #C1623F', color: '#C1623F' },
  };
  const labels = { primary: 'Primary', hadith: 'Hadith', jurisprudence: 'Jurisprudence' };
  return (
    <span style={{ ...styles[type], fontFamily: 'Inter', fontSize: 10, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 3, padding: '2px 7px' }}>
      {labels[type] || type}
    </span>
  );
}

function SectionHeader({ children }) {
  return (
    <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 400, color: '#E8E2D9', marginBottom: 24, marginTop: 0 }}>
      {children}
    </h2>
  );
}

function Divider() {
  return <div style={{ height: 1, background: '#252A35', margin: '32px 0' }} />;
}

// ─── tabs ─────────────────────────────────────────────────────────────────────

function OverviewTab({ data }) {
  return (
    <div>
      {data.paragraphs.map((p, i) => (
        <p key={i} style={{ fontFamily: 'Inter', fontSize: 15, color: '#8A857C', lineHeight: 1.8, marginBottom: 20 }}>{p}</p>
      ))}
      <Divider />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {data.keyFacts.map((f, i) => (
          <div key={i} style={{ background: '#181C24', border: '1px solid #252A35', borderRadius: 6, padding: 20 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8A857C', marginBottom: 8 }}>{f.label}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 15, color: '#E8E2D9' }}>{f.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeliefsTab({ data }) {
  return (
    <div>
      <SectionHeader>Core theological positions</SectionHeader>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {data.map((b, i) => (
          <div key={i} style={{ background: '#181C24', border: '1px solid #252A35', borderRadius: 6, padding: 22 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: '#E8E2D9', marginBottom: 10 }}>{b.title}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 14, color: '#8A857C', lineHeight: 1.7 }}>{b.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticesTab({ data }) {
  return (
    <div>
      <SectionHeader>Ritual and daily practice</SectionHeader>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {data.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 24, paddingTop: 24, paddingBottom: 24, borderBottom: '1px solid #252A35' }}>
            <div style={{ fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 400, color: '#3A2015', minWidth: 40, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</div>
            <div>
              <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: '#E8E2D9', marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 14, color: '#8A857C', lineHeight: 1.7 }}>{p.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TextsTab({ data }) {
  return (
    <div>
      <SectionHeader>Sacred and scholarly texts</SectionHeader>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {data.map((t, i) => (
          <div key={i} style={{ background: '#181C24', border: '1px solid #252A35', borderRadius: 6, padding: 20, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ width: 3, borderRadius: 2, background: t.type === 'primary' ? '#C1623F' : '#252A35', alignSelf: 'stretch', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: '#E8E2D9' }}>{t.name}</span>
                <Badge type={t.type} />
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C', lineHeight: 1.65 }}>{t.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HistoryTab({ data }) {
  return (
    <div>
      <SectionHeader>Historical timeline</SectionHeader>
      <div style={{ position: 'relative', paddingLeft: 100 }}>
        <div style={{ position: 'absolute', left: 72, top: 0, bottom: 0, width: 1, background: '#252A35' }} />
        {data.map((ev, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: 36 }}>
            <div style={{ position: 'absolute', left: -100, width: 80, fontFamily: 'Inter', fontSize: 12, fontWeight: 500, color: '#C1623F', textAlign: 'right', paddingTop: 2, lineHeight: 1.3 }}>{ev.year}</div>
            <div style={{ position: 'absolute', left: -32, top: 4, width: 6, height: 6, background: '#C1623F' }} />
            <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#E8E2D9', marginBottom: 4 }}>{ev.event}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C', lineHeight: 1.65 }}>{ev.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GeographyTab({ data }) {
  return (
    <div>
      <SectionHeader>Geographic distribution</SectionHeader>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {data.map((g, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#E8E2D9' }}>{g.region}</span>
              <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: '#C1623F' }}>{g.percentage}%</span>
            </div>
            <div style={{ height: 4, background: '#252A35', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${g.percentage}%`, background: '#C1623F', borderRadius: 2, transition: 'width 600ms ease-out' }} />
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#8A857C', marginTop: 6 }}>{g.note}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, fontFamily: 'Inter', fontSize: 12, color: '#8A857C' }}>
        Note: Figures are estimates. Religious demographics vary by region and source.
      </div>
    </div>
  );
}

function CultureTab({ data }) {
  return (
    <div>
      <SectionHeader>Cultural expressions</SectionHeader>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        {data.map((c, i) => (
          <div key={i} style={{ background: '#181C24', border: '1px solid #252A35', borderRadius: 6, padding: 22 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#E8E2D9', marginBottom: 10 }}>{c.category}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C', lineHeight: 1.65, marginBottom: 12 }}>{c.description}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#8A857C', letterSpacing: '0.04em' }}>Sources available</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ControversiesTab({ data }) {
  return (
    <div>
      <SectionHeader>
        Points of scholarly and historical <span style={{ color: '#8B3A3A' }}>debate</span>
      </SectionHeader>
      <div style={{ background: '#1A1212', border: '1px solid #8B3A3A', borderRadius: 4, padding: '12px 16px', marginBottom: 24, fontFamily: 'Inter', fontSize: 13, color: '#C08080', lineHeight: 1.6 }}>
        This section presents multiple perspectives without endorsing any. All claims are attributed to named scholars or traditions.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {data.map((c, i) => (
          <div key={i} style={{ background: '#181C24', border: '1px solid #252A35', borderLeft: '3px solid #8B3A3A', borderRadius: '0 6px 6px 0', padding: 24 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: '#E8E2D9', marginBottom: 20 }}>{c.title}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 20 }}>
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8A857C', marginBottom: 10 }}>{c.positionA.label}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C', lineHeight: 1.65 }}>{c.positionA.text}</div>
              </div>
              <div style={{ background: '#252A35' }} />
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8A857C', marginBottom: 10 }}>{c.positionB.label}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C', lineHeight: 1.65 }}>{c.positionB.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResearchTab({ data }) {
  return (
    <div>
      <div style={{ background: '#1C1810', border: '1px solid #C1623F', borderRadius: 4, padding: '12px 20px', marginBottom: 24, fontFamily: 'Inter', fontSize: 13, color: '#C1623F', lineHeight: 1.6 }}>
        This section contains comparative analysis and editorial perspective. It is clearly distinguished from documented fact.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {data.map((r, i) => (
          <div key={i} style={{ background: '#1C1810', border: '1px solid #2A2418', borderLeft: '3px solid #C1623F', borderRadius: '0 6px 6px 0', padding: 24 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C1623F', marginBottom: 10 }}>Editorial analysis</div>
            <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: '#E8E2D9', marginBottom: 14 }}>{r.title}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 14, color: '#8A857C', lineHeight: 1.75 }}>{r.analysis}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SourcesTab({ data }) {
  return (
    <div>
      <SectionHeader>References and further reading</SectionHeader>
      <div>
        {data.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 24, padding: '18px 0', borderBottom: '1px solid #252A35' }}>
            <div style={{ fontFamily: 'Playfair Display', fontSize: 16, color: '#3A3F4D', minWidth: 32, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}.</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#E8E2D9', marginBottom: 4 }}>{s.author} — {s.title}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C', marginBottom: 8 }}>{s.publisher}, {s.year}</div>
              <a href={s.url} style={{ fontFamily: 'Inter', fontSize: 12, color: '#C1623F', textDecoration: 'none' }}>View source →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function NodeTabs({ sections }) {
  const [activeTab, setActiveTab] = useState('Overview');

  function renderTab() {
    switch (activeTab) {
      case 'Overview': return <OverviewTab data={sections.overview} />;
      case 'Beliefs': return <BeliefsTab data={sections.beliefs} />;
      case 'Practices': return <PracticesTab data={sections.practices} />;
      case 'Texts': return <TextsTab data={sections.texts} />;
      case 'History': return <HistoryTab data={sections.history} />;
      case 'Geography': return <GeographyTab data={sections.geography} />;
      case 'Culture': return <CultureTab data={sections.culture} />;
      case 'Controversies': return <ControversiesTab data={sections.controversies} />;
      case 'Research': return <ResearchTab data={sections.research} />;
      case 'Sources': return <SourcesTab data={sections.sources} />;
      default: return null;
    }
  }

  return (
    <div>
      {/* Tab bar */}
      <div style={{ borderBottom: '1px solid #252A35', display: 'flex', gap: 0, overflowX: 'auto' }}>
        {TABS.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            style={{
              fontFamily: 'Inter', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: activeTab === tab ? '#E8E2D9' : '#8A857C',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '12px 0', marginRight: 28, flexShrink: 0,
              borderBottom: activeTab === tab ? '2px solid #C1623F' : '2px solid transparent',
              transition: 'color 180ms ease-out',
            }}
            onMouseEnter={e => { if (activeTab !== tab) e.currentTarget.style.color = '#E8E2D9'; }}
            onMouseLeave={e => { if (activeTab !== tab) e.currentTarget.style.color = '#8A857C'; }}>
            {tab}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div style={{ paddingTop: 32 }}>
        {renderTab()}
      </div>
    </div>
  );
}
