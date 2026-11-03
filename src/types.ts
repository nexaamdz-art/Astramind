export type Language = 'en' | 'ar';

export interface AstraMindConfig {
  email: string;
  social: {
    youtube?: string;
    instagram: string;
    linkedin?: string;
    discord: string;
  };
}

export interface MembershipSubmission {
  id?: string;
  fullName: string;
  email: string;
  study: string;
  interest: string;
  message: string;
  consent: string;
  submittedAt: string;
}

export interface GalleryPhoto {
  src: string;
  titleEn: string;
  titleAr: string;
  alt: string;
}
