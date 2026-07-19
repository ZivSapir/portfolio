# Ziv Sapir — Portfolio

Public portfolio site for [Ziv Sapir](https://github.com/ZivSapir): React Native & Full-Stack case studies for Home Co-Op, Job Chaser, and Trip Buddy.

**Live site:** https://zivsapir.github.io/portfolio/

Product repos stay private. This site presents problem framing, smart choices, stack honesty, and media.

## Stack

- Next.js (App Router) · TypeScript · Tailwind CSS
- Hosting: **GitHub Pages** (static export via GitHub Actions)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Local production-style build (no `/portfolio` prefix):

```bash
npm run build
```

## Deploy

Push to `main`. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the static site and publishes GitHub Pages.

Repo → Settings → Pages should use **GitHub Actions** as the source (one-time).

## Screenshots & videos

Drop real captures into:

```
public/screenshots/{home-co-op,job-chaser,trip-buddy}/
public/videos/{home-co-op,job-chaser,trip-buddy}/
```

Suggested names: `01-lists.png`, `02-calendar.png`. Case-study pages auto-detect files; placeholders show until then.

## Contact

- Email: zivsushiku@gmail.com
- LinkedIn: https://www.linkedin.com/in/ziv-sapir-79413a217/
- GitHub: https://github.com/ZivSapir

## Docs for future sessions

- [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md) — handoff
- [`PLAN.md`](./PLAN.md) — checklist
