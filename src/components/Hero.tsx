import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { PlayIcon, WaveSvg } from './Icons';

interface HeroProps {
  language: Language;
  onWatchIntro: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onWatchIntro }) => {
  const t = translations[language];

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-sky" />
      <div className="neural-art" aria-hidden="true">
        <img src="/Assets/sections/neural-brain.jpg" alt="" />
      </div>

      <div className="hero-copy">
        <p className="hero-overline">
          <i />
          <span>{t.hero.overline}</span>
        </p>
        <h1>{t.hero.clubName}</h1>
        <h2>{t.hero.subTitle}</h2>
        <p className="motto">{t.hero.motto}</p>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="#membership"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#membership');
            }}
          >
            {t.hero.joinBtn}
          </a>
          <button
            className="btn btn-outline"
            type="button"
            onClick={onWatchIntro}
          >
            <PlayIcon />
            <span>{t.hero.watchIntro}</span>
          </button>
        </div>
      </div>

      <div className="campus-frame">
        <img
          src="/Assets/sections/campus.jpg"
          alt="Entrance of the Teacher Education College — Annex of Bejaia"
        />
        <div className="campus-shade" />
        <div className="campus-caption">
          <span>{t.hero.campusLabel}</span>
          <strong>{t.hero.campusTagline}</strong>
        </div>
      </div>

      <WaveSvg />

      <a
        className="scroll-cue"
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('#about');
        }}
      >
        <span className="mouse">↓</span>
        <span>{t.hero.scrollDown}</span>
      </a>
    </section>
  );
};
