import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ArrowIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className = 'i play', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
    <path d="m6 3 14 9-14 9z" />
  </svg>
);

export const BulbIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4" />
  </svg>
);

export const GearIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
    <circle cx="12" cy="12" r="7" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1.1 1.2C7.8 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1.1 1.2 1.1.6 1.9 2 1.9 3.8M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export const PresentIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h20M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3M12 16v5M8 21h8M7 12l3-3 2 2 4-4" />
  </svg>
);

export const AtomIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="1" />
    <path d="M20.2 20.2c2-2 0-7.4-4.5-11.9S5.8 1.8 3.8 3.8s0 7.4 4.5 11.9 9.9 6.5 11.9 4.5ZM15.7 15.7c4.5-4.5 6.5-9.9 4.5-11.9s-7.4 0-11.9 4.5-6.5 9.9-4.5 11.9 7.400 0 11.900-4.500Z" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 2v4M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

export const ImageIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
  </svg>
);

export const PinIcon: React.FC<IconProps> = ({ className = 'i pin', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ChevronIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className = 'i rocket', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.700-.5 5-2c.7-.8.7-2.100-.1-2.900a2.200 2.200 0 0 0-2.900-.1ZM12 15l-3-3a22 22 0 0 1 2-3.900A12.900 12.900 0 0 1 22 2c0 2.700-.8 7.500-6 11a22 22 0 0 1-4 2ZM9 12H4s.6-3 2-4c1.600-1 5 0 5 0M12 15v5s3-.6 4-2c1-1.600 0-5 0-5" />
  </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.500 17a24 24 0 0 1 0-10 2 2 0 0 1 1.400-1.400 49 49 0 0 1 16.200 0A2 2 0 0 1 21.500 7a24 24 0 0 1 0 10 2 2 0 0 1-1.400 1.400 49 49 0 0 1-16.200 0A2 2 0 0 1 2.500 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.500 6.500h.01" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const DiscordIcon: React.FC<IconProps> = ({ className = 'i', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7.900 20A9 9 0 1 0 4 16.100L2 22Z" />
    <path d="M8 12h.01M12 12h.01M16 12h.01" />
  </svg>
);

export const LogoSvg: React.FC<{ sparkColor?: string }> = ({ sparkColor }) => (
  <svg viewBox="0 0 100 80" aria-hidden="true">
    <path d="M49 12C36 1 17 9 17 25 4 31 8 50 20 54c0 13 16 19 27 10 10 9 27 3 28-10 14-5 14-25 2-31C74 9 60 5 49 12Z" />
    <path d="M49 12v54M18 29l20 7 11-24 13 20 17-6M19 52l20-16 10 22 14-19 14 13M30 18l8 18m25-17-3 19M29 57l10-21m25 20-3-20M49 66c6 2 12 7 14 12M49 66c-1 6-5 10-10 12" />
    <path className="spark" style={sparkColor ? { fill: sparkColor } : undefined} d="m84 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" />
  </svg>
);

export const SkylineSvg: React.FC<{ className?: string }> = ({ className = 'skyline' }) => (
  <svg className={className} viewBox="0 0 300 70" fill="none" stroke="#9fb4dd" strokeWidth="1.2" aria-hidden="true">
    <path d="M0 69h300M10 69V40h30v29M14 40l11-12 11 12M50 69V30h40v39M58 30l12-16 12 16M62 69V45h16v24M100 69V20h28v49M104 20l10-14 10 14M138 69V35h50v34M146 35V22h34v13M196 69V44h30v25M232 69V28h36v41M240 28l10-12 10 12M274 69V48h22v21" />
  </svg>
);

export const WaveSvg: React.FC<{ className?: string }> = ({ className = 'wave' }) => (
  <div className={className} aria-hidden="true" />
);
