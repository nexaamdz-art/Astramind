import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { MailIcon, SearchIcon } from './Icons';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  activeSection: string;
  onSearchClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageToggle,
  activeSection,
  onSearchClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const handleNavClick = (hash: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <a
        className="brand"
        href="#home"
        aria-label="AstraMind home"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('#home');
        }}
      >
        <span className="logo" aria-hidden="true">
          <img
            src="/assets/aistudio/file_00000000fc3881f4b4f0c3d532ba170e_2dec6d87.png"
            alt="AstraMind Logo"
            className="logo-img"
          />
        </span>
        <span className="brand-name">
          <strong>AstraMind</strong>
          <small>{t.hero.subTitle}</small>
        </span>
      </a>

      <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`} id="mainNav" aria-label="Main navigation">
        <a
          className={activeSection === 'home' ? 'active' : ''}
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          {t.nav.home}
        </a>
        <a
          className={activeSection === 'about' ? 'active' : ''}
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#about');
          }}
        >
          {t.nav.about}
        </a>
        <a
          className={`has-menu ${activeSection === 'activities' ? 'active' : ''}`}
          href="#activities"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#activities');
          }}
        >
          {t.nav.activities}
        </a>
        <a
          className={activeSection === 'events' ? 'active' : ''}
          href="#events"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#events');
          }}
        >
          {t.nav.events}
        </a>
        <a
          className={`has-menu ${activeSection === 'resources' ? 'active' : ''}`}
          href="#resources"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#resources');
          }}
        >
          {t.nav.resources}
        </a>
        <a
          className={activeSection === 'gallery' ? 'active' : ''}
          href="#gallery"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#gallery');
          }}
        >
          {t.nav.gallery}
        </a>
        <a
          className={activeSection === 'join' || activeSection === 'membership' ? 'active' : ''}
          href="#join"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#join');
          }}
        >
          {t.nav.join}
        </a>
        <div className="mobile-nav-cta">
          <a
            className="btn btn-primary mobile-contact-btn"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            <span>{t.header.contact}</span>
            <MailIcon />
          </a>
        </div>
      </nav>

      <div className="header-tools">
        <button
          className="search-btn"
          aria-label={t.header.search}
          onClick={onSearchClick}
          type="button"
        >
          <SearchIcon />
        </button>

        <button
          className="language"
          id="langSwitch"
          onClick={onLanguageToggle}
          aria-label={t.langSwitchAria}
          type="button"
        >
          {t.langSwitchLabel}
        </button>

        <a
          className="contact-button desktop-contact-btn"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
        >
          <span>{t.header.contact}</span>
          <MailIcon />
        </a>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label={t.header.toggleNav}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
        >
          {mobileMenuOpen ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
};
