import React from 'react';
import { AstraMindConfig, Language } from '../types';
import { translations } from '../translations';
import {
  DiscordIcon,
  InstagramIcon,
  LinkedinIcon,
  LogoSvg,
  SkylineSvg,
  YoutubeIcon,
} from './Icons';

interface FooterProps {
  language: Language;
  config: AstraMindConfig;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  config,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const t = translations[language];

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="resources">
      <a
        className="brand footer-brand"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('#home');
        }}
      >
        <span className="logo">
          <LogoSvg sparkColor="#e5efff" />
        </span>
        <span className="brand-name">
          <strong>AstraMind</strong>
          <small>{t.hero.subTitle}</small>
        </span>
      </a>

      <div className="socials" aria-label="Social media">
        <a
          href={config.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <YoutubeIcon />
        </a>
        <a
          href={config.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href={config.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <a
          href={config.social.discord}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <DiscordIcon />
        </a>
      </div>

      <p>{t.footer.motto}</p>

      <div className="legal">
        <button type="button" onClick={onOpenPrivacy}>
          {t.footer.privacyPolicy}
        </button>
        <span>|</span>
        <button type="button" onClick={onOpenTerms}>
          {t.footer.termsOfUse}
        </button>
      </div>

      <SkylineSvg />

      <div className="footer-contact" id="contact" style={{ display: 'flex' }}>
        <span>{t.footer.contactTitle}</span>
        <a id="contactEmail" href={`mailto:${config.email}`}>
          {config.email}
        </a>
        <span>{t.footer.configNotice}</span>
      </div>
    </footer>
  );
};
