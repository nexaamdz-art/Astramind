import React from 'react';
import { Language } from '../types';

interface LegalModalProps {
  language: Language;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  language,
  type,
  onClose,
}) => {
  const isAr = language === 'ar';

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        style={{ maxWidth: '580px', padding: '26px' }}
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

        <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: '#101d3d' }}>
          {type === 'privacy'
            ? isAr
              ? 'سياسة الخصوصية — AstraMind'
              : 'Privacy Policy — AstraMind'
            : isAr
            ? 'شروط الاستخدام — AstraMind'
            : 'Terms of Use — AstraMind'}
        </h3>

        {type === 'privacy' ? (
          <div style={{ fontSize: '13px', lineHeight: '1.65', color: '#44516d' }}>
            <p>
              {isAr
                ? 'يلتزم نادي AstraMind بحماية خصوصية جميع الأعضاء والمهتمين. يتم استخدام المعلومات الشخصية التي تقدمها عبر نموذج الانضمام حصرياً للتواصل معك بخصوص أنشطة النادي، ورشات العمل، والفعاليات.'
                : 'AstraMind Science & Innovation Club is committed to protecting member privacy. Any personal information submitted through our membership registration form is strictly used to communicate with you regarding club activities, workshops, and official events.'}
            </p>
            <p>
              {isAr
                ? 'لا نقوم بمشاركة أي من بياناتك مع أطراف ثالثة. يمكنك طلب تعديل أو حذف بياناتك في أي وقت عن طريق التواصل معنا عبر البريد الإلكتروني.'
                : 'We never sell, rent, or distribute personal details to third parties. You may request the update or removal of your details at any time by contacting our team.'}
            </p>
          </div>
        ) : (
          <div style={{ fontSize: '13px', lineHeight: '1.65', color: '#44516d' }}>
            <p>
              {isAr
                ? 'من خلال المشاركة في أنشطة نادي AstraMind واستخدام هذا الموقع، فإنك توافق على الالتزام بقيم الاحترام المتبادل، النزاهة العلمية، والتعاون الإيجابي مع جميع الزملاء.'
                : 'By participating in AstraMind club initiatives and using this platform, you agree to uphold our community standards of mutual respect, scientific integrity, and constructive teamwork.'}
            </p>
            <p>
              {isAr
                ? 'جميع المواد والمشاريع المنتجة ضمن النادي تهدف إلى تطوير المهارات الطلابية وخدمة المجتمع العلمي والجامعي.'
                : 'All resources, research presentations, and workshops hosted by the club aim to enrich student learning and advance community innovation.'}
            </p>
          </div>
        )}

        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClose}
            style={{ fontSize: '11px', padding: '8px 18px' }}
          >
            {isAr ? 'حسناً' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
