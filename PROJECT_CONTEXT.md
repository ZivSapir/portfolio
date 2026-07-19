# Portfolio Site — Project Context & Handoff

Use this file to onboard a new Cursor session. **Read this entire file before continuing.**

**Last updated:** Jul 19, 2026 (case-study portfolio plan locked; app in progress)

---

## Who I am

- Display name: **Ziv Sapir**
- Title: Mobile & Full-Stack Engineer
- Formerly Wix (QA/release → design-system / calendar / RN UI lib); building full-stack personal products end-to-end
- Canonical background: `~/.cursor/ziv-knowledge-base.md` + `cv-studio/data/master.yaml`
- Contact:
  - Email: zivsushiku@gmail.com
  - LinkedIn: https://www.linkedin.com/in/ziv-sapir-79413a217/
  - GitHub: https://github.com/ZivSapir
- Public portfolio site presents personal projects; product repos stay **private**
- Prefers: explain before code, one step at a time, approve then implement ("let's go")
- Concise answers; frontend-strong; more guidance on deploy/backend when needed

---

## Positioning

- **Pitch:** Builds end-to-end product apps — Expo mobile clients, NestJS APIs, and practical AI tooling — with clear architecture choices, not demos for demos’ sake.
- **Role story:** Dual — React Native / mobile + full-stack. Home Co-Op is the flagship; Job Chaser shows AI + product craft; Trip Buddy shows deliberate architecture-in-progress.
- **Deploy:** GitHub Pages · public repo https://github.com/ZivSapir/portfolio
- **Live URL:** https://zivsapir.github.io/portfolio/

---

## What we're building

A **Next.js + TypeScript + Tailwind** portfolio with:

| Route | Purpose |
|-------|---------|
| `/` | Hero, about, 3 project cards, contact |
| `/projects/home-co-op` | Full case study |
| `/projects/job-chaser` | Full case study |
| `/projects/trip-buddy` | Full case study (In progress) |

| Project | Local path | Role on portfolio |
|---------|------------|-------------------|
| Home Co-Op | `~/Documents/Code/home-co-op` | Featured — most complete full-stack |
| Job Chaser | `~/Documents/Code/job-chaser` | Featured — AI + Next.js |
| Trip Buddy | `~/Documents/Code/trip-buddy` | Featured — in progress / architecture |

Product repos stay private. Site CTA: “Private codebase available on request.”

---

## Case-study skeleton (every project page)

1. Status badge
2. Problem
3. Why this is better (3 differentiators)
4. Smart choices (4–5 with *why*)
5. Stack (honest — only what’s used)
6. Media (screenshots + optional video)
7. CTA — private repo on request

Shared public copy lives in `src/content/projects.ts` (once scaffolded).

---

## Approved site blurbs (honest)

### Home Co-Op | Live MVP

Built a household task platform (Expo, NestJS, Prisma/Postgres) with calendar views, shared API for mobile + Telegram, invites, recurrence, reminders, and workload-based fair assignment.

**Shipped:** Expo mobile, Nest API, Prisma/Postgres, grammY bot, calendar, fair-assign.  
**In progress / designed:** Google Calendar OAuth sync, voice/NL → task.

**Tech:** Expo, NestJS, Prisma, PostgreSQL, grammY, JWT, calendar, fair-assign / workload stats.

### Job Chaser | Working prototype

Built a Next.js job-application tracker for roles, contacts, and status updates—manual or via free-text/URL commands (Gemini)—with filtering, sorting, favorites, and archive. Data persists in the browser today; cloud sync is a deliberate next step.

**Tech:** Next.js, TypeScript, Gemini, localStorage, spreadsheet-style UI, agent command API routes.

### Trip Buddy | In progress

Building a collaborative trip planner (Expo, NestJS, Prisma) with day itineraries, map pinpoints, hotels & want-to-go lists, shared to-dos, and group expense tracking with settle-up in integer cents.

**Shipped so far:** pnpm monorepo, Docker Postgres, Prisma User, Nest health.  
**Next:** auth, trips, mobile UI, expenses.

**Tech:** Expo, NestJS, Prisma, PostgreSQL, pnpm monorepo, integer-cents settle-up (designed), local-first Docker Postgres.

---

## Media brief

Drop files into:

- `public/screenshots/{home-co-op,job-chaser,trip-buddy}/`
- `public/videos/{home-co-op,job-chaser,trip-buddy}/` (optional)

| Project | Screenshots (2–4) | Video (optional, 15–40s) |
|---------|-------------------|--------------------------|
| Home Co-Op | Lists, calendar, task detail, Telegram if possible | Core loop: list → task → complete |
| Job Chaser | Pipeline, agent command, favorites/archive | URL/NL → row update (**redact personal data**) |
| Trip Buddy | UI if any; else architecture placeholder | Skip until UI exists |

Filenames: `01-lists.png`, `02-calendar.png`, etc. Placeholders until user supplies real captures.

---

## Visual direction

Light, soft editorial — soft lilac + light blue accents, pastel supporting tones. Expressive display font + clean sans. Hero: brand-first, one composition. 2–3 intentional motions.

---

## Related product context

- Home Co-Op: `~/Documents/Code/home-co-op/PROJECT_CONTEXT.md`
- Trip Buddy: `~/Documents/Code/trip-buddy/PROJECT_CONTEXT.md`
- Job Chaser: `~/Documents/Code/job-chaser/README.md`

---

## How we work

1. Agree next step → implement
2. Keep portfolio repo **public**; do not copy private product source
3. Prefer honest status over overclaims
4. See `PLAN.md` for step checklist
