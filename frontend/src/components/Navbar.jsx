import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

/**
 * @param {Object} props
 * @param {{ href: string, label: string }} [props.backLink]
 */
export default function Navbar({ backLink }) {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>
        Religion Explorer
      </Link>
      <div className={styles.links}>
        {backLink && (
          <Link to={backLink.href} className={styles.link}>
            ← {backLink.label}
          </Link>
        )}
        {['About', 'Methodology', 'Sources'].map(link => (
          <a key={link} href="#" className={styles.link}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

