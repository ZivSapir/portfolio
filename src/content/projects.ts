export type ProjectStatus =
  | "live-mvp"
  | "prototype"
  | "in-progress"
  | "research";

export type ProjectMedia = {
  type: "image" | "video" | "placeholder";
  src?: string;
  alt: string;
  label?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  status: ProjectStatus;
  statusLabel: string;
  oneLiner: string;
  blurb: string;
  tech: string[];
  problem: string;
  betterThan: string[];
  betterThanTitle?: string;
  smartChoices: {
    title: string;
    why: string;
  }[];
  smartChoicesTitle?: string;
  stackNotes: string[];
  media: ProjectMedia[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "home-co-op",
    title: "Home Co-Op",
    shortTitle: "Home Co-Op",
    status: "live-mvp",
    statusLabel: "Live MVP",
    featured: true,
    oneLiner:
      "Household task coordination with a shared API for mobile and Telegram.",
    blurb:
      "Built a household task platform (Expo, NestJS, Prisma/Postgres) with calendar views, a shared API for mobile + Telegram, invites, recurrence, reminders, and workload-based fair assignment.",
    tech: [
      "Expo",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "grammY",
      "TypeScript",
      "JWT",
    ],
    problem:
      "Shared household chores usually live in group chats, sticky notes, or generic to-do apps that don’t model households, recurrence, or fairness. Work piles onto whoever remembers — or whoever complains first.",
    betterThan: [
      "One API powers both the Expo app and a Telegram bot — business rules aren’t duplicated across clients.",
      "Household → lists → tasks is a real domain model, not a flat personal checklist.",
      "Workload-based fair assignment and calendar views make coordination visible, not vibes-based.",
    ],
    smartChoices: [
      {
        title: "Monorepo with shared Prisma package",
        why: "Schema and client live in packages/db so mobile and API stay on one source of truth — no copy-pasted models.",
      },
      {
        title: "NestJS + Prisma + Postgres",
        why: "Chose a structured API and relational DB over a thin Express toy so authz, modules, and migrations match how real products grow.",
      },
      {
        title: "Telegram bot hits the same API",
        why: "Reminders and completion stay consistent whether someone uses the phone app or Telegram — one rule set.",
      },
      {
        title: "Integration tests as behavior docs",
        why: "Supertest specs document invites, membership, and task flows — safer refactors while learning the backend.",
      },
      {
        title: "Dev JWT for MVP; harden auth later",
        why: "Shipped the product loop first. Production auth (Clerk etc.) is a deliberate next hardening step, not fake “done.”",
      },
    ],
    stackNotes: [
      "Shipped: Expo mobile, Nest API, Prisma/Postgres, grammY bot, calendar, fair-assign, invites, recurrence/reminders.",
      "In progress / designed: Google Calendar OAuth sync, voice/NL → task.",
    ],
    media: [
      {
        type: "placeholder",
        alt: "Home Co-Op household lists screenshot placeholder",
        label: "Household lists",
      },
      {
        type: "placeholder",
        alt: "Home Co-Op calendar screenshot placeholder",
        label: "Calendar",
      },
      {
        type: "placeholder",
        alt: "Home Co-Op task detail screenshot placeholder",
        label: "Task detail",
      },
    ],
  },
  {
    slug: "job-chaser",
    title: "Job Chaser",
    shortTitle: "Job Chaser",
    status: "prototype",
    statusLabel: "Working prototype",
    oneLiner:
      "AI-assisted job pipeline — paste a URL or command, edit in a spreadsheet UI.",
    blurb:
      "Built a Next.js job-application tracker for roles, contacts, and status updates—manual or via free-text/URL commands (Gemini)—with filtering, sorting, favorites, and archive. Data persists in the browser today; cloud sync is a deliberate next step.",
    tech: [
      "Next.js",
      "TypeScript",
      "Gemini",
      "localStorage",
      "Tailwind CSS",
    ],
    problem:
      "Job hunting sprawls across tabs, spreadsheets, and Notion boards. Importing a posting and updating status is slow; AI chat toys rarely map cleanly onto a pipeline you can edit.",
    betterThan: [
      "Agent command center turns a job URL or natural-language update into structured rows — not a freeform chat dump.",
      "Spreadsheet-style tables with inline editing keep power users in flow for status, remote policy, and dates.",
      "Favorites, archive, and sort are first-class — the pipeline stays workable as volume grows.",
    ],
    smartChoices: [
      {
        title: "Ship value with localStorage first",
        why: "Avoided a premature backend so the agent + table UX could be proven. Cloud sync is a next step, not a fake claim.",
      },
      {
        title: "Server routes only where secrets belong",
        why: "Gemini API key stays on the server; the client owns the product model and editing experience.",
      },
      {
        title: "Typed agent commands over chat theater",
        why: "Commands map to concrete pipeline mutations — import, update, structure — so the AI serves the product, not the other way around.",
      },
      {
        title: "Honest roadmap for auth/sync",
        why: "Auth and multi-device sync aren’t claimed until built. The prototype is useful today without overstating infrastructure.",
      },
    ],
    stackNotes: [
      "Shipped: Next.js App Router, Gemini parse/agent routes, spreadsheet UI, favorites/archive/sort, browser persistence.",
      "Next: authenticated cloud sync when the product needs it.",
    ],
    media: [
      {
        type: "placeholder",
        alt: "Job Chaser pipeline table screenshot placeholder",
        label: "Pipeline table",
      },
      {
        type: "placeholder",
        alt: "Job Chaser agent command screenshot placeholder",
        label: "Agent command",
      },
      {
        type: "placeholder",
        alt: "Job Chaser favorites and archive screenshot placeholder",
        label: "Favorites / archive",
      },
    ],
  },
  {
    slug: "trip-buddy",
    title: "Trip Buddy",
    shortTitle: "Trip Buddy",
    status: "in-progress",
    statusLabel: "In progress",
    oneLiner:
      "Collaborative trip planner and settle-up — architecture first, product UI next.",
    blurb:
      "Building a collaborative trip planner (Expo, NestJS, Prisma) with day itineraries, map pinpoints, hotels & want-to-go lists, shared to-dos, and group expense tracking with settle-up in integer cents.",
    tech: [
      "Expo",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "pnpm monorepo",
      "Docker",
    ],
    problem:
      "Couples and small groups plan trips across chat threads, maps, and separate expense apps. Itinerary and “who owes whom” rarely live in one product with a trustworthy money model.",
    betterThan: [
      "One product loop for trip → places → day plan → expenses → settle-up — instead of stitching three apps.",
      "Money designed as integer cents from day one — no JavaScript float bugs on balances.",
      "Local-first Docker Postgres for personal use at $0 hosting while the product takes shape.",
    ],
    smartChoices: [
      {
        title: "Reuse a proven architecture on purpose",
        why: "Same Expo → Nest → Prisma → Postgres shape as Home Co-Op, rebuilt deliberately so the patterns stick — not cargo-culted.",
      },
      {
        title: "Integer cents for settle-up",
        why: "Locked money math early so expense features won’t need a painful rewrite later.",
      },
      {
        title: "Monorepo + migrations before UI sprawl",
        why: "Foundation (workspace, Docker DB, Prisma User, Nest health) ships first so the domain has a real home.",
      },
      {
        title: "Honest “in progress” status",
        why: "Foundation is real; product UI is next. The case study shows judgment — not vaporware dressed as finished.",
      },
    ],
    stackNotes: [
      "Shipped so far: pnpm monorepo, Docker Postgres, Prisma User, Nest health endpoint + Prisma DI.",
      "Next: auth, trips, mobile screens, expenses/settle-up UI.",
    ],
    media: [
      {
        type: "placeholder",
        alt: "Trip Buddy architecture placeholder",
        label: "Architecture foundation",
      },
      {
        type: "placeholder",
        alt: "Trip Buddy product UI coming soon placeholder",
        label: "Product UI — coming next",
      },
    ],
  },
  {
    slug: "msc-thesis",
    title: "Smartphone Pressure Data",
    shortTitle: "M.Sc. Thesis",
    status: "research",
    statusLabel: "M.Sc. Thesis · 2024",
    oneLiner:
      "Large-scale Python analysis of crowdsourced smartphone barometer data vs ERA5.",
    blurb:
      "M.Sc. thesis (Tel Aviv University, Prof. Colin Price): evaluated whether smartphone barometers can support meteorological research — WeatherSignal ETL at scale, grid aggregation, ERA5 calibration, and four 2014 storm case studies including pressure-gradient wind estimates.",
    tech: [
      "Python",
      "WeatherSignal",
      "ERA5 / ECMWF",
      "ETL",
      "Linear regression",
      "Geospatial grids",
      "Time series",
    ],
    problem:
      "Traditional pressure networks are sparse relative to how densely people carry phones. Flagship phones include accurate barometers — but crowdsourced readings are noisy (buildings, vehicles, calibration) and need rigorous processing before they can inform weather analysis.",
    betterThanTitle: "What the analysis showed",
    betterThan: [
      "Crowdsourced WeatherSignal pressure can resolve major storm systems on maps after grid aggregation and sea-level correction.",
      "Localized linear calibration against ERA5 markedly improves agreement versus a single coast-wide fit.",
      "Pressure gradients from phone data relate strongly to wind — supporting meteorological use beyond static maps.",
    ],
    smartChoicesTitle: "Method choices",
    smartChoices: [
      {
        title: "Pivot to WeatherSignal at scale",
        why: "An early Android prototype showed the sensor idea works, but density was too low for event studies — so the research centered on ~700 CSVs / ~1 GB of WeatherSignal data instead of the app alone.",
      },
      {
        title: "Grid + time aggregation before fancy models",
        why: "Averaging samples into lat/lon cells and hourly bins made storm structures visible and comparable to reanalysis without overclaiming a production ML system.",
      },
      {
        title: "Calibrate against ERA5",
        why: "Pearson / linear-regression checks vs ECMWF reanalysis quantified bias and showed when local fits outperform regional ones.",
      },
      {
        title: "Four storm case studies",
        why: "Hurricane Arthur, Bertha, Gonzalo remnants over the UK, and Cyclone Qendresa — maps, time series, and gradient–wind analysis across different basins.",
      },
    ],
    stackNotes: [
      "Focus: data engineering + analysis pipeline (ingest, clean, grid, calibrate, visualize), not a consumer app.",
      "Prototype phone app existed for collection experiments; usable density came from WeatherSignal.",
      "Full thesis stays private — happy to discuss methods and results on request.",
    ],
    media: [
      {
        type: "placeholder",
        alt: "Thesis figure placeholder",
        label: "Thesis figures",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
