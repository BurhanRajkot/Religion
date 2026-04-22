import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

/**
 * @typedef {Object} Religion
 * @property {string} id
 * @property {string} name
 * @property {string} era
 * @property {string} adherents
 * @property {string} description
 * @property {boolean} available
 */

/**
 * @param {{ religion: Religion }} props
 */
function ReligionCard({ religion }) {
  const navigate = useNavigate();

  function handleClick() {
    if (religion.available) navigate(`/tree/${religion.id}`);
  }

  const cardClass = [styles.card, religion.available ? styles.available : ''].join(' ');

  return (
    <div className={cardClass} onClick={handleClick}>
      <div className={styles.cardInner}>
        <div className={styles.cardName}>{religion.name}</div>
        <div className={styles.cardMeta}>{religion.era} · {religion.adherents}</div>
        <div className={styles.cardDesc}>{religion.description}</div>
        <div className={styles.cardAction}>
          {religion.available
            ? <span className={styles.cardExplore}>Explore →</span>
            : <span className={styles.cardSoon}>Coming soon</span>
          }
        </div>
      </div>
    </div>
  );
}

export { ReligionCard };
