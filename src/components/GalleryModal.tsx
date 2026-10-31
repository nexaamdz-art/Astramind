import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ChevronIcon } from './Icons';

interface GalleryModalProps {
  language: Language;
  initialIndex: number;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  language,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const photos = translations[language].galleryList;
  const current = photos[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        style={{ maxWidth: '780px', padding: '16px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            src={current.src}
            alt={current.alt}
            style={{
              width: '100%',
              maxHeight: '65vh',
              objectFit: 'contain',
              borderRadius: '12px',
              backgroundColor: '#0c162e',
            }}
          />

          <button
            type="button"
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.85)',
              border: 'none',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
            aria-label="Previous image"
          >
            <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>
              <ChevronIcon />
            </span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.85)',
              border: 'none',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
            aria-label="Next image"
          >
            <ChevronIcon />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '14px',
            padding: '0 8px',
          }}
        >
          <strong style={{ fontSize: '15px', color: '#101d3d' }}>
            {language === 'ar' ? current.titleAr : current.titleEn}
          </strong>
          <span style={{ fontSize: '12px', color: '#63718b' }}>
            {currentIndex + 1} / {photos.length}
          </span>
        </div>
      </div>
    </div>
  );
};
