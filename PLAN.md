# Portfolio — Plan

**Goal:** Public GitHub portfolio (case studies) for Home Co-Op, Job Chaser, and Trip Buddy without open-sourcing those product repos.

**Status:** Site implemented (Jul 19, 2026). Screenshots pending from user; publish in progress.

---

## Principles

- Portfolio = marketing / case-study site only (no private product source)
- Real screenshots from the user (placeholders until then)
- Honest stack and status badges
- Ship small slices; deploy on Vercel

---

## Steps

### Step 0 — Done

- [x] Create `~/Documents/Code/portfolio`
- [x] Screenshot folders under `public/screenshots/{home-co-op,job-chaser,trip-buddy}`
- [x] Identity, dual positioning, case-study model, honesty fixes documented

### Step 1 — Scaffold

- [x] Next.js + TypeScript + Tailwind
- [x] Content module + routes
- [x] Git init

### Step 2 — Home + case studies

- [x] Hero (Ziv Sapir), about, project cards, contact
- [x] Three case-study pages (problem / better / choices / stack / media)
- [x] Placeholder media wired (auto-detects files when dropped in)

### Step 3 — Screenshots

- [ ] User drops images into `public/screenshots/...`
- [ ] Wire real media; redact Job Chaser personal data

### Step 4 — Polish & publish

- [x] Favicon / OG meta / page titles
- [ ] Push public GitHub repo (ZivSapir)
- [ ] Deploy Vercel
- [ ] Link from LinkedIn / CV

---

## Out of scope (for now)

- Open-sourcing product repos
- Live demos of private backends
- Blog / CMS
- Claiming unfinished features as shipped

---

## Screenshot checklist

| Project | Suggested shots |
|---------|-----------------|
| Home Co-Op | Lists, calendar, task/detail (± Telegram) |
| Job Chaser | Pipeline, agent command, favorites/archive |
| Trip Buddy | UI if any + “In progress” |

Filename idea: `01-home.png`, `02-calendar.png`, etc. Case studies auto-pick up files from `public/screenshots/<slug>/`.
