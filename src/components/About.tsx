import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { BulbIcon, GearIcon, TrophyIcon, UsersIcon } from './Icons';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language];

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bulb':
        return <BulbIcon />;
      case 'gear':
        return <GearIcon />;
      case 'users':
        return <UsersIcon />;
      case 'trophy':
        return <TrophyIcon />;
      default:
        return <BulbIcon />;
    }
  };

  return (
    <section className="about section" id="about">
      <div className="about-copy">
        <p className="section-label">
          <i />
          <span>{t.about.label}</span>
        </p>
        <h2>{t.about.heading}</h2>
        <p>{t.about.description}</p>
        <a
          className="learn-link"
          href="#activities"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#activities');
          }}
        >
          {t.about.learnMore}
        </a>
      </div>

      <div className="values">
        {t.about.values.map((v, idx) => (
          <article key={idx}>
            <span className="value-icon">{getIcon(v.icon)}</span>
            <strong>{v.title}</strong>
          </article>
        ))}
      </div>

      <div className="book-art">
        <img
          src="/Assets/sections/book-brain.jpg"
          alt="An open book with a glowing idea bulb"
        />
      </div>
    </section>
  );
};
