import { useParams, Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import NodeTabs from '../../../components/NodeTabs';
import { getNodeData } from '../data/nodes/index';
import { findNode, islamTree } from '../data/islamTree';
import styles from './NodePage.module.css';

function StatChip({ label, value }) {
  return (
    <div className={styles.statChip}>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statValue}>{value}</div>
    </div>
  );
}

function SiblingNav({ nodeId }) {
  const result = findNode(nodeId, islamTree);
  if (!result || result.path.length < 2) return null;
  const parent = result.path[result.path.length - 2];
  const siblings = parent.children || [];

  return (
    <div className={styles.siblingNav}>
      <div className={styles.navHeader}>Sibling branches</div>
      <div className={styles.navSub}>Under: <span>{parent.name}</span></div>
      <div className={styles.navLinks}>
        {siblings.map(s => (
          <Link key={s.id} to={`/node/${s.id}`}
            className={`${styles.navLink} ${s.id === nodeId ? styles.navLinkActive : styles.navLinkInactive}`}>
            {s.name}
            {s.contested && <span className={styles.contestedBadge}>C</span>}
          </Link>
        ))}
      </div>

      {parent.id !== 'islam' && (
        <div className={styles.upLinkSection}>
          <Link to={`/node/${parent.id}`} className={styles.upLink}>
            ↑ {parent.name}
          </Link>
        </div>
      )}

      <div className={styles.backTreeSection}>
        <Link to="/tree/islam" className={styles.backTreeLink}>
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
    <div className={styles.breadcrumbNav}>
      <Link to="/" className={styles.breadcrumbLink}>Religion Explorer</Link>
      <span>/</span>
      <Link to="/tree/islam" className={styles.breadcrumbLink}>Islam</Link>
      {crumbs.slice(1).map(c => (
        <span key={c.id + '-wrap'}>
          <span key={c.id + '-sep'}>/</span>{' '}
          {c.id === nodeId
            ? <span key={c.id} className={styles.breadcrumbActive}>{c.name}</span>
            : <Link key={c.id} to={`/node/${c.id}`} className={styles.breadcrumbLink}>{c.name}</Link>
          }
        </span>
      ))}
    </div>
  );
}

export default function NodePage() {
  const { id } = useParams();
  const data = getNodeData(id);

  if (!data) {
    return (
      <div className={styles.page}>
        <Navbar backLink={{ href: '/tree/islam', label: 'Back to Islam tree' }} />
        <div className={styles.comingSoon}>
          <div className={styles.comingSoonTitle}>Entry coming soon</div>
          <div className={styles.comingSoonText}>
            Detailed content for this branch is being prepared. The tree structure reflects the academic taxonomy; individual entries will be published progressively.
          </div>
          <Link to="/tree/islam" className={styles.comingSoonLink}>
            ← Return to Islam tree
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Navbar backLink={{ href: '/tree/islam', label: 'Back to Islam tree' }} />

      <div className={styles.breadcrumbBar}>
        <TaxonomyBreadcrumb nodeId={id} />
      </div>

      <div className={styles.mainLayout}>
        <SiblingNav nodeId={id} />

        <div className={styles.contentArea}>
          <div className={styles.heroSection}>
            <h1 className={styles.nodeTitle}>{data.name}</h1>
            <div className={styles.nodeSubtitle}>{data.subtitle}</div>
            <div className={styles.statsRow}>
              <StatChip label="Adherents" value={data.meta.adherents} />
              <StatChip label="Founded" value={data.meta.founded} />
              <StatChip label="Primary regions" value={data.meta.primaryRegions} />
            </div>
          </div>

          <div className={styles.divider} />

          <NodeTabs sections={data.sections} />
        </div>
      </div>
    </div>
  );
}

