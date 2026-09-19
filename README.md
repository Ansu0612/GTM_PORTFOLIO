# Ansu Priya — GTM Engineer Portfolio

A pixel-RPG-themed portfolio built with React + Vite. The visual language (quest cards,
player stats, power-ups) is the presentation layer; the content underneath is real —
sourced from your resume and the project context you provided.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## What's real vs. what's a proof-of-work vs. what's a placeholder

- **Professional experience** (Journey section, About): pulled directly from your resume —
  Sparity, Apxor, Quantum Revenue Solutions, India Infrastructure Publication.
- **GTM proof-of-work** (Oliv.ai, Cheerio AI, Eubrics): real projects built around real
  companies' context. Each project page carries an explicit disclaimer that this is
  proof-of-work, not employment or a completed client engagement with a claimed business
  outcome — do not remove those disclaimers without re-checking they stay accurate.
- **Independent / analytics projects** (Interview Buddy, Digital Word of Mouth): your own
  build and your internship experience, respectively.
- **Locked "Real-World Case Studies"**: intentionally marked "Coming Soon" — don't fill
  these in until you have real, documented outcomes to show.

## Where to edit content

Everything content-related lives in `src/data/`, separate from the components, so you can
update copy without touching UI code:

- `src/data/projects.js` — every quest card + full case-study page (Oliv.ai, Cheerio AI,
  Eubrics, Interview Buddy, Digital Word of Mouth, and the locked future case studies).
  Add a new project by adding a new object to the array — the detail page renders any
  project from this shape automatically.
- `src/data/journey.js` — career levels, roles, dates, bullet points.
- `src/data/skills.js` — GTM Power-Ups categories and the GTM Operating System flow.
- `src/data/troubleshooting.js` — GTM Troubleshooting Lab scenario cards.
- `src/data/social.js` — LinkedIn/GitHub/YouTube/email links, Playbook essays, and
  Transmissions (content-feed placeholders). **Fill in your GitHub URL and real post links
  here as they go live** — they're currently empty placeholders and are hidden from the
  UI until filled in.

## Contact form — current behavior and how to upgrade it

The Contact form currently works by opening the visitor's email client with a pre-filled
`mailto:` link to `ansu11as@gmail.com` — no backend required, works on any static host.

If you want messages to arrive without relying on the visitor's email client, swap the
`handleSubmit` function in `src/components/Contact.jsx` for a real form backend. Two
low-effort options that work well with Vercel/Netlify static hosting:
- [Formspree](https://formspree.io) — point the form at your Formspree endpoint.
- [EmailJS](https://www.emailjs.com) — send email straight from the browser via their API.

Both need only a few lines of code in place of the current `mailto:` logic.

## Deployment

This is a static Vite app — the build output in `dist/` can be deployed to any static
host.

**Vercel**
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel → it auto-detects Vite (build command `npm run build`,
   output directory `dist`).
3. Deploy.

**Netlify**
1. Push this folder to a GitHub repo (or drag-and-drop the `dist/` folder after running
   `npm run build` into Netlify's deploy UI for a one-off deploy).
2. If connecting the repo: build command `npm run build`, publish directory `dist`.

No environment variables or separate backend deployment are required unless you wire up
Formspree/EmailJS (in which case follow their own setup docs for an API key).

## Project structure

```
src/
  data/         # all editable content — projects, journey, skills, playbook, links
  components/   # reusable UI pieces (Nav, Hero, QuestBoard, Skills, Contact, ...)
  pages/        # Home, ProjectDetail (data-driven case-study template), NotFound
  index.css     # design tokens + all styling
```

## Notes / assumptions made while building this

- No reference image was provided, so the visual direction (dark navy + pink/blue/purple/
  green accents, pixel-cartridge cards, Press Start 2P for display + Space Grotesk/Inter
  for body) is an original interpretation of the brief's written description.
- The pixel-art avatar is an original SVG sprite (grid of rects), not a photo or generated
  image — reused across the hero and detail-page back-links.
- No fake metrics, revenue figures, or employment claims were added anywhere. Where your
  source material didn't confirm a number (e.g. "8+ dashboards" for Digital Word of
  Mouth), it was left out rather than estimated.
- The phone number on your resume was intentionally left off the public site; only email
  and LinkedIn are shown. Add it back in `src/data/social.js` if you want it public.
