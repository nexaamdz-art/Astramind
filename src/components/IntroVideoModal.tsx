import React from 'react';
import { Language } from '../types';

interface IntroVideoModalProps {
  language: Language;
  onClose: () => void;
  onJoinClick: () => void;
}

export const IntroVideoModal: React.FC<IntroVideoModalProps> = ({
  language,
  onClose,
  onJoinClick,
}) => {
  const isAr = language === 'ar';

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        style={{ maxWidth: '640px', padding: '30px' }}
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
          <div style={{ width: '48px', height: '44px', display: 'grid', placeItems: 'center' }}>
            <img
              src="/assets/aistudio/file_00000000fc3881f4b4f0c3d532ba170e_2dec6d87.png"
              alt="AstraMind Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '20px', color: '#101d3d' }}>
              {isAr ? 'مرحباً بكم في AstraMind' : 'Welcome to AstraMind'}
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#63718b' }}>
              {isAr
                ? 'المدرسة العليا للأساتذة – ملحقة بجاية'
                : 'Teacher Education College — Annex of Bejaia'}
            </p>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            borderRadius: '14px',
            overflow: 'hidden',
            backgroundColor: '#0f1c3a',
            color: '#fff',
            padding: '24px',
            marginBottom: '20px',
            backgroundImage:
              'radial-gradient(ellipse at center, rgba(120,98,216,0.3) 0%, rgba(20,36,71,0.95) 100%)',
          }}
        >
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: '20px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                fontSize: '11px',
                letterSpacing: '1px',
                marginBottom: '12px',
              }}
            >
              {isAr ? 'فكر · تعلّم · ابتكر' : 'THINK · LEARN · INNOVATE'}
            </span>
            <h4
              style={{
                fontSize: '22px',
                lineHeight: 1.3,
                margin: '0 0 12px',
                fontWeight: 800,
              }}
            >
              {isAr
                ? 'بناء جيل جديد من الباحثين والمبتكرين في العلوم'
                : 'Empowering the Next Generation of Thinkers and Innovators'}
            </h4>
            <p
              style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: '#dce7fa',
                maxWidth: '460px',
                margin: '0 auto',
              }}
            >
              {isAr
                ? 'نادي علمي وتقني يجمع الطلاب والشغوفين بالمعرفة من مختلف التخصصات لتنظيم ورشات عمل، مسابقات ابتكارية، ومشاريع بحثية تحوّل الأفكار إلى واقع.'
                : 'A vibrant academic and technical society uniting passionate students across disciplines through hands-on hackathons, research labs, coding workshops, and scientific conferences.'}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
            style={{ fontSize: '11px' }}
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              onClose();
              onJoinClick();
            }}
            style={{ fontSize: '11px' }}
          >
            {isAr ? 'انضم إلى النادي الآن' : 'Join Our Club Now'}
          </button>
        </div>
      </div>
    </div>
  );
};
