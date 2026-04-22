import Navbar from '../../../components/Navbar';
import TaxonomyGraph from '../../../components/TaxonomyGraph';
import { islamTree } from '../data/islamTree';
import styles from './IslamTree.module.css';

export default function IslamTree() {
  return (
    <div className={styles.page}>
      <Navbar backLink={{ href: '/', label: 'Back to religions' }} />

      {/* breadcrumb bar */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbText}>
          Religion Explorer / <span className={styles.breadcrumbActive}>Islam</span>
        </div>
        <div className={styles.hint}>
          Click any branch to open its full entry
        </div>
      </div>

      {/* graph header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          Islam — Taxonomy of branches &amp; schools
        </h1>
        <p className={styles.description}>
          A visual map of the major divisions, legal schools, and mystical traditions within Islam.
          Contested branches are marked in red. Cross-branch traditions use a dashed connector.
        </p>
      </div>

      {/* full-screen graph canvas */}
      <div className={styles.graphContainer}>
        <TaxonomyGraph treeData={islamTree} rootId="islam" />
      </div>
    </div>
  );
}

