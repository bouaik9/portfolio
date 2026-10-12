# Ayoub Bouaik — Portfolio (React v2)

Modern React + Vite + Framer Motion portfolio with Google Analytics.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Before deploying

1. **Google Analytics** — replace `G-XXXXXXXXXX` in `index.html` (two places) with your GA4 Measurement ID (https://analytics.google.com → Admin → Data Streams). Pageviews are automatic; custom events (resume download, project clicks, certificate clicks, contact submit, section views) are wired in `src/analytics.js`.
2. **Resume** — drop your PDF at `public/assets/Ayoub-Bouaik-Resume.pdf` (a modern print-ready version is included in the repo root).
3. Update links/socials in `src/data.js` — all content lives in that one file.

## Structure

- `src/data.js` — all content (profile, experience, skills, projects...)
- `src/components/` — one component per section
- `src/analytics.js` — GA event helper
- Dark/light theme toggle, scroll-reveal animations, animated skill bars, typed hero
