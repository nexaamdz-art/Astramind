import React, { useState } from 'react';
import { Language } from '../types';
import { SearchIcon } from './Icons';

interface SearchModalProps {
  language: Language;
  onClose: () => void;
  onNavigate: (hash: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  language,
  onClose,
  onNavigate,
}) => {
  const isAr = language === 'ar';
  const [query, setQuery] = useState('');

  const searchableItems = [
    {
      title: isAr ? 'ورشات وندوات علمية' : 'Workshops & Seminars',
      category: isAr ? 'الأنشطة' : 'Activities',
      hash: '#activities',
    },
    {
      title: isAr ? 'المسابقات والهاكاثونات' : 'Competitions & Hackathons',
      category: isAr ? 'الأنشطة' : 'Activities',
      hash: '#activities',
    },
    {
      title: isAr ? 'مشاريع بحثية طلابية' : 'Research Projects',
      category: isAr ? 'الأنشطة' : 'Activities',
      hash: '#activities',
    },
    {
      title: isAr ? 'فعاليات ومؤتمرات مجتمعية' : 'Community Events',
      category: isAr ? 'الأنشطة' : 'Activities',
      hash: '#activities',
    },
    {
      title: isAr ? 'الذكاء الاصطناعي ومستقبل التعليم' : 'AI and the Future of Education',
      category: isAr ? 'الفعاليات' : 'Events',
      hash: '#events',
    },
    {
      title: isAr ? 'طلب الانضمام إلى النادي' : 'Membership Application',
      category: isAr ? 'العضوية' : 'Membership',
      hash: '#membership',
    },
    {
      title: isAr ? 'معرض صور الأنشطة والحرم الجامعي' : 'Photo Gallery',
      category: isAr ? 'المعرض' : 'Gallery',
      hash: '#gallery',
    },
    {
      title: isAr ? 'عن النادي وأهدافه' : 'About AstraMind & Vision',
      category: isAr ? 'من نحن' : 'About',
      hash: '#about',
    },
  ];

  const filtered = query.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchableItems;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        style={{ maxWidth: '520px', padding: '24px' }}
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

        <h3 style={{ margin: '0 0 14px', fontSize: '18px', color: '#101d3d' }}>
          {isAr ? 'بحث في موقع AstraMind' : 'Search AstraMind'}
        </h3>

        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <input
            type="text"
            autoFocus
            placeholder={isAr ? 'ابحث عن ورشات، فعاليات، أنشطة...' : 'Search activities, events, resources...'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px',
              paddingLeft: isAr ? '14px' : '38px',
              paddingRight: isAr ? '38px' : '14px',
              border: '1px solid #dce4f0',
              borderRadius: '10px',
              fontSize: '13px',
              backgroundColor: '#f8fafd',
              outline: 'none',
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: isAr ? 'auto' : '12px',
              right: isAr ? '12px' : 'auto',
              color: '#8a99b3',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SearchIcon />
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '45vh', overflowY: 'auto' }}>
          {filtered.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                onClose();
                onNavigate(item.hash);
              }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #edf2f7',
                background: '#fff',
                cursor: 'pointer',
                textAlign: isAr ? 'right' : 'left',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5fa')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              <strong style={{ fontSize: '13px', color: '#142447' }}>{item.title}</strong>
              <span
                style={{
                  fontSize: '10px',
                  color: '#4c8ed0',
                  backgroundColor: '#eaf3fc',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  fontWeight: 600,
                }}
              >
                {item.category}
              </span>
            </button>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '20px', color: '#8898aa', fontSize: '12px' }}>
              {isAr ? 'لم يتم العثور على نتائج' : 'No matching results found.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
