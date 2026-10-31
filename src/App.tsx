import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { getConfig } from './config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { BottomPanels } from './components/BottomPanels';
import { MembershipForm } from './components/MembershipForm';
import { Footer } from './components/Footer';
import { GalleryModal } from './components/GalleryModal';
import { IntroVideoModal } from './components/IntroVideoModal';
import { LegalModal } from './components/LegalModal';
import { SubmissionsDrawer } from './components/SubmissionsDrawer';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [galleryOpenIndex, setGalleryOpenIndex] = useState<number | null>(null);
  const [introOpen, setIntroOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);
  const [submissionsOpen, setSubmissionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);

  const config = getConfig();

  // Keep track of submissions count
  const updateSubmissionCount = () => {
    try {
      const items = JSON.parse(
        localStorage.getItem('astramind-demo-membership-requests') || '[]'
      );
      setSubmissionCount(items.length);
    } catch {
      setSubmissionCount(0);
    }
  };

  useEffect(() => {
    updateSubmissionCount();
  }, []);

  // Update HTML tag attributes when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // IntersectionObserver for active navigation highlighting
  useEffect(() => {
    const sectionIds = ['home', 'about', 'activities', 'events', 'gallery', 'membership', 'resources'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if ('IntersectionObserver' in window && elements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-35% 0px -55% 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleNavigate = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header
        language={language}
        onLanguageToggle={toggleLanguage}
        activeSection={activeSection}
        onSearchClick={() => setSearchOpen(true)}
      />

      <main>
        <Hero
          language={language}
          onWatchIntro={() => setIntroOpen(true)}
        />

        <About language={language} />

        <Activities language={language} />

        <BottomPanels
          language={language}
          onOpenGallery={(index = 0) => setGalleryOpenIndex(index)}
        />

        <MembershipForm
          language={language}
          onOpenSubmissions={() => setSubmissionsOpen(true)}
          submissionCount={submissionCount}
        />
      </main>

      <Footer
        language={language}
        config={config}
        onOpenPrivacy={() => setLegalType('privacy')}
        onOpenTerms={() => setLegalType('terms')}
      />

      {/* Modals */}
      {galleryOpenIndex !== null && (
        <GalleryModal
          language={language}
          initialIndex={galleryOpenIndex}
          onClose={() => setGalleryOpenIndex(null)}
        />
      )}

      {introOpen && (
        <IntroVideoModal
          language={language}
          onClose={() => setIntroOpen(false)}
          onJoinClick={() => handleNavigate('#membership')}
        />
      )}

      {legalType && (
        <LegalModal
          language={language}
          type={legalType}
          onClose={() => setLegalType(null)}
        />
      )}

      {submissionsOpen && (
        <SubmissionsDrawer
          language={language}
          onClose={() => setSubmissionsOpen(false)}
          onSubmissionsUpdated={updateSubmissionCount}
        />
      )}

      {searchOpen && (
        <SearchModal
          language={language}
          onClose={() => setSearchOpen(false)}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
};

export default App;
