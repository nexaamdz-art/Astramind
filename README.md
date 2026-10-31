# AstraMind — Science & Innovation Club

Official web application for **AstraMind**, the Science & Innovation Club at Teacher Education College (Annex of Bejaia).

Rewritten in **React + TypeScript + Vite**, preserving the full bilingual (English & Arabic) experience, responsive layout, aesthetic design, and interactive club features.

## ✨ Features

- **Bilingual Experience (EN / AR)**:
  - Instant one-click toggle between English (LTR) and Arabic (RTL).
  - Native typography pairing (`Manrope` / `DM Sans` for Latin script and `Cairo` for Arabic script).
- **Interactive Sections**:
  - **Hero**: Science, technology, and innovation motto, campus visual of the University of Bejaia, and interactive introduction modal.
  - **About AstraMind**: Core values (Scientific Knowledge, Innovation, Collaborative Community, Future Leaders) with glassmorphism cards.
  - **Activities**: Workshops & Seminars, Competitions, Research Projects, and Community Events.
  - **Bottom Panels**: Upcoming events spotlight ("AI and the Future of Education"), interactive photo gallery with responsive lightbox, and "Join AstraMind" card.
  - **Membership Application**: Complete registration form with real-time feedback, localStorage demo persistence (`astramind-demo-membership-requests`), and stored applications review drawer.
  - **Search & Navigation**: Quick search dialog and smooth scroll spy with active navigation indicators.
  - **Footer & Socials**: Connected club channels (YouTube, Instagram, LinkedIn, Discord), contact email, and legal modal dialogs (Privacy Policy & Terms of Use).

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Typecheck and build for production
npm run build
```

## 📁 Project Structure

```
├── public/                 # Static assets (campus photos, section illustrations)
│   ├── Assets/
│   └── assets/
├── src/
│   ├── components/         # Modular React components
│   │   ├── Header.tsx      # Navigation & language switcher
│   │   ├── Hero.tsx        # Hero banner & intro trigger
│   │   ├── About.tsx       # About & core values
│   │   ├── Activities.tsx  # Activities showcase
│   │   ├── BottomPanels.tsx# Events, Gallery strip, Join card
│   │   ├── MembershipForm.tsx # Registration form & demo persistence
│   │   ├── Footer.tsx      # Social links & contact
│   │   ├── Icons.tsx       # Vector SVG icons
│   │   ├── GalleryModal.tsx# Lightbox carousel
│   │   ├── IntroVideoModal.tsx # Club welcome modal
│   │   ├── LegalModal.tsx  # Privacy & Terms dialogs
│   │   ├── SearchModal.tsx # Quick site search
│   │   └── SubmissionsDrawer.tsx # Inspect demo submissions
│   ├── config.ts           # Club email & social channels config
│   ├── translations.ts     # Complete EN / AR dictionaries
│   ├── types.ts            # TypeScript interfaces
│   ├── index.css           # Preserved design system & animations
│   ├── App.tsx             # Main application orchestrator
│   └── main.tsx            # Vite root entry
├── index.html              # HTML shell & font preloading
├── metadata.json           # AI Studio applet metadata
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies & scripts
```
