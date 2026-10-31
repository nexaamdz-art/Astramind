import React, { useState, useEffect } from 'react';
import { Language, MembershipSubmission } from '../types';
import { translations } from '../translations';

interface SubmissionsDrawerProps {
  language: Language;
  onClose: () => void;
  onSubmissionsUpdated: () => void;
}

export const SubmissionsDrawer: React.FC<SubmissionsDrawerProps> = ({
  language,
  onClose,
  onSubmissionsUpdated,
}) => {
  const t = translations[language];
  const [submissions, setSubmissions] = useState<MembershipSubmission[]>([]);

  const loadSubmissions = () => {
    try {
      const data = JSON.parse(
        localStorage.getItem('astramind-demo-membership-requests') || '[]'
      );
      setSubmissions(data);
    } catch {
      setSubmissions([]);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const handleClear = () => {
    if (confirm(language === 'ar' ? 'هل أنت متأكد من مسح جميع الطلبات؟' : 'Are you sure you want to clear all stored submissions?')) {
      localStorage.removeItem('astramind-demo-membership-requests');
      loadSubmissions();
      onSubmissionsUpdated();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        style={{ maxWidth: '650px', padding: '26px' }}
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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', color: '#101d3d' }}>
            📋 {t.membership.viewSubmissions}
          </h3>
          {submissions.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              style={{
                background: '#ffeded',
                color: '#b3261e',
                border: '1px solid #ffd4d4',
                borderRadius: '8px',
                padding: '5px 12px',
                fontSize: '11px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              {t.membership.clearSubmissions}
            </button>
          )}
        </div>

        <p style={{ fontSize: '12px', color: '#56627a', margin: '0 0 16px' }}>
          {t.membership.storedCount} <strong>{submissions.length}</strong>
        </p>

        {submissions.length === 0 ? (
          <div
            style={{
              padding: '30px',
              textAlign: 'center',
              backgroundColor: '#f8fafd',
              borderRadius: '12px',
              color: '#718096',
              fontSize: '13px',
            }}
          >
            {t.membership.noSubmissions}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '55vh', overflowY: 'auto' }}>
            {submissions.map((item, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '14px',
                  backgroundColor: '#fbfcff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '14px', color: '#101d3d' }}>{item.fullName}</strong>
                  <span style={{ fontSize: '10px', color: '#8898aa' }}>
                    {new Date(item.submittedAt).toLocaleDateString()}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#4a5568', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div>
                    <span style={{ fontWeight: 600 }}>Email:</span> {item.email}
                  </div>
                  {item.study && (
                    <div>
                      <span style={{ fontWeight: 600 }}>Study:</span> {item.study}
                    </div>
                  )}
                  {item.interest && (
                    <div>
                      <span style={{ fontWeight: 600 }}>Interest:</span> {item.interest}
                    </div>
                  )}
                  {item.message && (
                    <div style={{ marginTop: '4px', fontStyle: 'italic', background: '#fff', padding: '8px', borderRadius: '6px', border: '1px solid #edf2f7' }}>
                      "{item.message}"
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
