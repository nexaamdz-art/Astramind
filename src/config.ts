import { AstraMindConfig } from './types';

export const defaultConfig: AstraMindConfig = {
  email: 'astramind.club@example.com',
  social: {
    youtube: 'https://youtube.com/@your-channel',
    instagram: 'https://instagram.com/your_username',
    linkedin: 'https://linkedin.com/company/your-page',
    discord: 'https://discord.gg/your-invite'
  }
};

// Check if window.ASTRAMIND_CONFIG exists (for compatibility), otherwise fallback to defaultConfig
declare global {
  interface Window {
    ASTRAMIND_CONFIG?: AstraMindConfig;
  }
}

export function getConfig(): AstraMindConfig {
  if (typeof window !== 'undefined' && window.ASTRAMIND_CONFIG) {
    return {
      email: window.ASTRAMIND_CONFIG.email || defaultConfig.email,
      social: {
        youtube: window.ASTRAMIND_CONFIG.social?.youtube || defaultConfig.social.youtube,
        instagram: window.ASTRAMIND_CONFIG.social?.instagram || defaultConfig.social.instagram,
        linkedin: window.ASTRAMIND_CONFIG.social?.linkedin || defaultConfig.social.linkedin,
        discord: window.ASTRAMIND_CONFIG.social?.discord || defaultConfig.social.discord
      }
    };
  }
  return defaultConfig;
}
