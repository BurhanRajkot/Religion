import { useState } from 'react';
import styles from './NodeTabs.module.css';

const TABS = ['Overview', 'Beliefs', 'Practices', 'Texts', 'History', 'Geography', 'Culture', 'Controversies', 'Research', 'Sources'];

// ─── sub-components ──────────────────────────────────────────────────────────

function Badge({ type }) {
  const typeClass = type === 'primary' ? styles.badgePrimary : type === 'hadith' ? styles.badgeHadith : styles.badgeJurisprudence;
  const labels = { primary: 'Primary', hadith: 'Hadith', jurisprudence: 'Jurisprudence' };
  return (
    <span className={`${styles.badge} ${typeClass}`}>
      {labels[type] || type}
    </span>
  );
}

function SectionHeader({ children }) {
  return (
    <h2 className={styles.sectionHeader}>
      {children}
    </h2>
  );
}

function Divider() {
  return <div className={styles.divider} />;
}

// ─── tabs ─────────────────────────────────────────────────────────────────────

function OverviewTab({ data }) {
  return (
    <div>
      {data.paragraphs.map((p, i) => (
        <p key={i} className={styles.paragraph}>{p}</p>
      ))}
      <Divider />
      <div className={styles.grid2}>
        {data.keyFacts.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardLabel}>{f.label}</div>
            <div className={styles.cardValue}>{f.value}</div>
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
      <div className={styles.grid2}>
        {data.map((b, i) => (
          <div key={i} className={`${styles.card} ${styles.cardPadLg}`}>
            <div className={styles.cardTitle}>{b.title}</div>
            <div className={styles.cardDesc}>{b.description}</div>
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
          <div key={i} className={styles.practiceItem}>
            <div className={styles.practiceNum}>{String(i + 1).padStart(2, '0')}</div>
            <div>
              <div className={styles.practiceTitle}>{p.name}</div>
              <div className={styles.cardDesc}>{p.description}</div>
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
          <div key={i} className={styles.textCard}>
            <div className={`${styles.textIndicator} ${t.type === 'primary' ? styles.textIndicatorPrimary : styles.textIndicatorSecondary}`} />
            <div style={{ flex: 1 }}>
              <div className={styles.textHeader}>
                <span className={styles.textName}>{t.name}</span>
                <Badge type={t.type} />
              </div>
              <div className={styles.textDesc}>{t.description}</div>
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
      <div className={styles.timeline}>
        <div className={styles.timelineLine} />
        {data.map((ev, i) => (
          <div key={i} className={styles.timelineEvent}>
            <div className={styles.timelineYear}>{ev.year}</div>
            <div className={styles.timelineDot} />
            <div className={styles.timelineEventName}>{ev.event}</div>
            <div className={styles.timelineDesc}>{ev.description}</div>
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
      <div className={styles.geoList}>
        {data.map((g, i) => (
          <div key={i}>
            <div className={styles.geoHeader}>
              <span className={styles.geoRegion}>{g.region}</span>
              <span className={styles.geoPct}>{g.percentage}%</span>
            </div>
            <div className={styles.geoBarBg}>
              <div className={styles.geoBarFg} style={{ width: `${g.percentage}%` }} />
            </div>
            <div className={styles.geoNote}>{g.note}</div>
          </div>
        ))}
      </div>
      <div className={styles.geoFooter}>
        Note: Figures are estimates. Religious demographics vary by region and source.
      </div>
    </div>
  );
}

function CultureTab({ data }) {
  return (
    <div>
      <SectionHeader>Cultural expressions</SectionHeader>
      <div className={styles.grid3}>
        {data.map((c, i) => (
          <div key={i} className={`${styles.card} ${styles.cardPadLg}`}>
            <div className={styles.cultureTitle}>{c.category}</div>
            <div className={styles.cultureDesc}>{c.description}</div>
            <div className={styles.cultureSources}>Sources available</div>
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
        Points of scholarly and historical <span className={styles.redText}>debate</span>
      </SectionHeader>
      <div className={styles.debateBanner}>
        This section presents multiple perspectives without endorsing any. All claims are attributed to named scholars or traditions.
      </div>
      <div className={styles.controversyList}>
        {data.map((c, i) => (
          <div key={i} className={styles.controversyCard}>
            <div className={styles.cardTitle}>{c.title}</div>
            <div className={styles.debateGrid}>
              <div>
                <div className={styles.debateLabel}>{c.positionA.label}</div>
                <div className={styles.debateText}>{c.positionA.text}</div>
              </div>
              <div className={styles.debateSep} />
              <div>
                <div className={styles.debateLabel}>{c.positionB.label}</div>
                <div className={styles.debateText}>{c.positionB.text}</div>
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
      <div className={styles.researchBanner}>
        This section contains comparative analysis and editorial perspective. It is clearly distinguished from documented fact.
      </div>
      <div className={styles.researchList}>
        {data.map((r, i) => (
          <div key={i} className={styles.researchCard}>
            <div className={styles.researchLabel}>Editorial analysis</div>
            <div className={styles.researchTitle}>{r.title}</div>
            <div className={styles.researchAnalysis}>{r.analysis}</div>
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
          <div key={i} className={styles.sourceItem}>
            <div className={styles.sourceNum}>{String(i + 1).padStart(2, '0')}.</div>
            <div style={{ flex: 1 }}>
              <div className={styles.sourceAuthor}>{s.author} — {s.title}</div>
              <div className={styles.sourcePub}>{s.publisher}, {s.year}</div>
              <a href={s.url} className={styles.sourceLink}>View source →</a>
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
      <div className={styles.tabBar}>
        {TABS.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : styles.tabInactive}`}>
            {tab}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div className={styles.tabContent}>
        {renderTab()}
      </div>
    </div>
  );
}

