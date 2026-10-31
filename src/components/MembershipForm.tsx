import React, { useState } from 'react';
import { Language, MembershipSubmission } from '../types';
import { translations } from '../translations';

interface MembershipFormProps {
  language: Language;
  onOpenSubmissions: () => void;
  submissionCount: number;
}

export const MembershipForm: React.FC<MembershipFormProps> = ({
  language,
  onOpenSubmissions,
  submissionCount,
}) => {
  const t = translations[language];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [study, setStudy] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    setIsSubmitting(true);

    const submission: MembershipSubmission = {
      fullName,
      email,
      study,
      interest,
      message,
      consent: 'yes',
      submittedAt: new Date().toISOString(),
    };

    // Store in localStorage as preserved from original script.js
    const key = 'astramind-demo-membership-requests';
    try {
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push(submission);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch {
      // localStorage may fail in restricted iframes
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setStatusMessage(t.membership.savedSuccess);
      // Reset form
      setFullName('');
      setEmail('');
      setStudy('');
      setInterest('');
      setMessage('');
      setConsent(false);
    }, 400);
  };

  return (
    <section className="membership section" id="membership">
      <div className="membership-intro">
        <p className="section-label">
          <i />
          <span>{t.membership.label}</span>
        </p>
        <h2>{t.membership.heading}</h2>
        <p>{t.membership.description}</p>
        <div className="membership-note">
          <span>✦</span>
          <span>{t.membership.note}</span>
        </div>

        {submissionCount > 0 && (
          <div style={{ marginTop: '16px' }}>
            <button
              type="button"
              className="btn btn-outline"
              style={{ fontSize: '10px', padding: '8px 14px' }}
              onClick={onOpenSubmissions}
            >
              📋 {t.membership.viewSubmissions} ({submissionCount})
            </button>
          </div>
        )}
      </div>

      <form
        className="membership-form"
        name="membership"
        method="POST"
        action="/"
        data-netlify="true"
        id="membershipForm"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="membership" />
        <p className="hidden-field">
          <label>
            Do not fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="form-grid">
          <label>
            <span>{t.membership.nameLabel}</span>
            <input
              name="fullName"
              type="text"
              autoComplete="name"
              required
              placeholder={t.membership.namePlaceholder}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label>
            <span>{t.membership.emailLabel}</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={t.membership.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>{t.membership.studyLabel}</span>
            <input
              name="study"
              type="text"
              placeholder={t.membership.studyPlaceholder}
              value={study}
              onChange={(e) => setStudy(e.target.value)}
            />
          </label>

          <label>
            <span>{t.membership.interestLabel}</span>
            <select
              name="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option value="">{t.membership.interestChoose}</option>
              {t.membership.interests.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label className="full-field">
            <span>{t.membership.messageLabel}</span>
            <textarea
              name="message"
              rows={4}
              placeholder={t.membership.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>

        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>{t.membership.consentText}</span>
        </label>

        <button
          className="btn btn-primary form-submit"
          type="submit"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? t.membership.submitting : t.membership.submitBtn}</span>
        </button>

        <p
          className={`form-status ${isSuccess ? 'is-success' : ''}`}
          id="formStatus"
          role="status"
          aria-live="polite"
        >
          {statusMessage || t.membership.defaultStatus}
        </p>
      </form>
    </section>
  );
};
