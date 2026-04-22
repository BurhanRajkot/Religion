import { religions } from '../data/religions';
import Navbar from '../components/Navbar';
import { ReligionCard } from './ReligionCard';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      <div className={styles.hero}>
        
        {/* Overlapping background image on the left bottom side */}
        <div className={styles.heroBg}>
          <img src="/prayer-line-art.png" alt="Prayer Art" />
        </div>

        <div className={styles.heroCopy}>
          {/* Text Content */}
          <div>
            <div className={styles.heroEyebrow}>
              An independent reference for world religions
            </div>
            <h1 className={styles.heroTitle}>
              Every religion.<br/>Every branch.<br/>Every text.
            </h1>
            <p className={styles.heroBody}>
              A structured, source-cited platform exploring the beliefs, practices, divisions, texts, histories, and cultures of the world's major faith traditions.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className={styles.cardsSection}>
          <div className={styles.cardsLabel}>
            Select a tradition to explore
          </div>
          <div className={styles.cardsGrid}>
            {religions.map(r => <ReligionCard key={r.id} religion={r} />)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.footerText}>
          Religion Explorer · All content is source-cited · Not affiliated with any religious institution
        </span>
      </div>
    </div>
  );
}

