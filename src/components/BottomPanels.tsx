import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import {
  ArrowIcon,
  CalendarIcon,
  ChevronIcon,
  ImageIcon,
  PinIcon,
  RocketIcon,
} from './Icons';

interface BottomPanelsProps {
  language: Language;
  onOpenGallery: (initialIndex?: number) => void;
}

export const BottomPanels: React.FC<BottomPanelsProps> = ({
  language,
  onOpenGallery,
}) => {
  const t = translations[language];

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bottom-panels section">
      {/* Events Panel */}
      <div className="panel events-panel" id="events">
        <div className="panel-heading">
          <h2>
            <span>
              <CalendarIcon />
            </span>
            <span>{t.panels.upcomingEvents}</span>
          </h2>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
          >
            {t.panels.seeAll}
          </a>
        </div>

        <div className="event-row">
          <img
            src="/Assets/sections/event-brain.jpg"
            alt="AstraMind science event visual"
          />
          <div className="date-box">
            <strong>{t.panels.eventDateDay}</strong>
            <small>{t.panels.eventDateMonth}</small>
          </div>
          <div className="event-info">
            <strong>{t.panels.eventTitle}</strong>
            <p>{t.panels.eventSubtitle}</p>
            <small>
              <PinIcon /> {t.panels.eventLocation}
            </small>
          </div>
          <a
            className="round-arrow"
            href="#contact"
            aria-label="Contact us"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
          >
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* Gallery Panel */}
      <div className="panel gallery-panel" id="gallery">
        <div className="panel-heading">
          <h2>
            <span>
              <ImageIcon />
            </span>
            <span>{t.panels.gallery}</span>
          </h2>
          <button
            type="button"
            className="learn-link"
            style={{
              background: 'transparent',
              color: '#3d328c',
              boxShadow: 'none',
              padding: 0,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontSize: '9px',
            }}
            onClick={() => onOpenGallery(0)}
          >
            {t.panels.viewGallery}
          </button>
        </div>

        <div className="gallery-strip">
          {t.galleryList.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt}
              title={language === 'ar' ? photo.titleAr : photo.titleEn}
              onClick={() => onOpenGallery(index)}
            />
          ))}
        </div>

        <button
          className="gallery-next"
          aria-label="Next image"
          type="button"
          onClick={() => onOpenGallery(0)}
        >
          <ChevronIcon />
        </button>
      </div>

      {/* Join Card */}
      <div className="join-card" id="join">
        <div>
          <h2>{t.panels.joinTitle}</h2>
          <p>{t.panels.joinDesc}</p>
          <a
            href="#membership"
            className="register-btn"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#membership');
            }}
          >
            {t.panels.registerNow}
          </a>
        </div>
        <RocketIcon />
      </div>
    </section>
  );
};
