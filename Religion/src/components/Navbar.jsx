import { Link } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {{ href: string, label: string }} [props.backLink]
 */
export default function Navbar({ backLink }) {
  return (
    <nav style={{ height: 60, background: '#0F1117', borderBottom: '1px solid #252A35' }}
      className="flex items-center justify-between px-14 flex-shrink-0">
      <Link to="/" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.18em', color: '#C1623F', textDecoration: 'none', textTransform: 'uppercase', fontWeight: 500 }}>
        Religion Explorer
      </Link>
      <div className="flex items-center gap-8">
        {backLink && (
          <Link to={backLink.href}
            style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C', textDecoration: 'none', transition: 'color 180ms ease-out' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E8E2D9'}
            onMouseLeave={e => e.currentTarget.style.color = '#8A857C'}>
            ← {backLink.label}
          </Link>
        )}
        {['About', 'Methodology', 'Sources'].map(link => (
          <a key={link} href="#"
            style={{ fontFamily: 'Inter', fontSize: 13, color: '#8A857C', textDecoration: 'none', transition: 'color 180ms ease-out' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E8E2D9'}
            onMouseLeave={e => e.currentTarget.style.color = '#8A857C'}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
