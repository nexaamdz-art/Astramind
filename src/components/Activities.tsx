import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { AtomIcon, PresentIcon, TrophyIcon, UsersIcon } from './Icons';

interface ActivitiesProps {
  language: Language;
}

export const Activities: React.FC<ActivitiesProps> = ({ language }) => {
  const t = translations[language];

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'present':
        return <PresentIcon />;
      case 'trophy':
        return <TrophyIcon />;
      case 'atom':
        return <AtomIcon />;
      case 'users':
        return <UsersIcon />;
      default:
        return <PresentIcon />;
    }
  };

  return (
    <section className="activities section" id="activities">
      <div className="activity-intro">
        <p className="section-label">
          <i />
          <span>{t.activities.label}</span>
        </p>
        <h2>{t.activities.heading}</h2>
        <p>{t.activities.description}</p>
        <a
          className="learn-link"
          href="#events"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#events');
          }}
        >
          {t.activities.discoverAll}
        </a>
      </div>

      <div className="activity-cards">
        {t.activities.cards.map((card, idx) => (
          <a
            key={idx}
            className="activity-card"
            href="#events"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#events');
            }}
          >
            <img src={card.image} alt={card.title} />
            <span className="activity-icon">{getCardIcon(card.icon)}</span>
            <strong>{card.title}</strong>
            <small>{card.subtitle}</small>
          </a>
        ))}
      </div>
    </section>
  );
};
