import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { religions } from '../data/religions';
import Navbar from '../components/Navbar';

function ReligionCard({ religion }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  function handleClick() {
    if (religion.available) navigate(`/tree/${religion.id}`);
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#181C24',
        border: `1px solid ${hovered && religion.available ? '#C1623F' : '#252A35'}`,
        borderRadius: 6,
        padding: 28,
        cursor: religion.available ? 'pointer' : 'default',
        transition: 'border-color 180ms ease-out',
        position: 'relative',
        height: 220,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>

      {/* left accent bar */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 2,
        height: hovered && religion.available ? '100%' : 32,
        background: '#C1623F',
        transition: 'height 180ms ease-out',
      }} />

      <div style={{ marginLeft: 16, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#E8E2D9', lineHeight: 1.1, marginBottom: 10 }}>
          {religion.name}
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#8A857C', marginBottom: 14 }}>
          {religion.era} · {religion.adherents}
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 14, color: '#6B6560', lineHeight: 1.6, flex: 1 }}>
          {religion.description}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
          {religion.available ? (
            <span style={{ fontFamily: 'Inter', fontSize: 13, color: '#C1623F' }}>Explore →</span>
          ) : (
            <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#3A3F4D', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Coming soon</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#0F1117', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 56px 60px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A857C', marginBottom: 20 }}>
          An independent reference for world religions
        </div>
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: 62, fontWeight: 400, color: '#E8E2D9', maxWidth: 680, lineHeight: 1.08, margin: '0 0 24px' }}>
          Every religion. Every branch. Every text.
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 17, color: '#8A857C', maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
          A structured, source-cited platform exploring the beliefs, practices, divisions, texts, histories, and cultures of the world's major faith traditions.
        </p>

        {/* Cards */}
        <div style={{ width: '100%', maxWidth: 960, marginTop: 56 }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A857C', marginBottom: 28, textAlign: 'center' }}>
            Select a tradition to explore
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {religions.map(r => <ReligionCard key={r.id} religion={r} />)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #252A35', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#8A857C' }}>
          Religion Explorer · All content is source-cited · Not affiliated with any religious institution
        </span>
      </div>
    </div>
  );
}
