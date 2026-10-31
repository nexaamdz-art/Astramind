ASTRAMIND — SCIENCE & INNOVATION CLUB WEBSITE

This is a bilingual, responsive static website based on the selected visual reference.
The campus entrance photo supplied by the user is used in the hero section.

FILES
- index.html       Main website and membership form
- style.css        Responsive layout and visual design
- script.js        Language switch, mobile navigation, contact links and form preview behavior
- config.js        EDIT THIS FILE to replace sample email and social URLs
- assets/          Campus and illustrative science/activity images

PLACEHOLDERS TO REPLACE
1. Open config.js and replace:
   - astramind.club@example.com
   - https://youtube.com/@your-channel
   - https://instagram.com/your_username
   - https://linkedin.com/company/your-page
   - https://facebook.com/your-page
2. Replace the illustrative images in assets/sections/ with real AstraMind photos when available.
3. Replace the sample event text in index.html with confirmed event details.

MEMBERSHIP FORM
- The form is marked up for Netlify Forms (name="membership", data-netlify="true").
- To receive and store applications, deploy this folder to Netlify with form detection enabled.
  After deployment, submit one test request and verify it appears in Netlify Dashboard > Forms.
- When opened directly as a local file, the form only saves a DEMO entry in that browser's
  localStorage. This is not a real submission and is not sent to the club.
- If you host somewhere other than Netlify, connect the form to that host's form handling
  service before publishing.

PREVIEW
Open index.html in a browser. For best results, run a local static server from this folder.

PRE-LAUNCH CHECKLIST
- Replace sample email and social URLs in config.js.
- Replace illustrative images and sample event copy.
- Deploy to Netlify (or connect another form backend).
- Test the membership form on the deployed URL and confirm the request is stored.
- Test English/Arabic, right-to-left layout, navigation, links, and form on mobile and desktop.

The project is a frontend website. It is not published online by this package operation.
