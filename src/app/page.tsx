import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_20%,var(--hero-glow),transparent_55%),radial-gradient(ellipse_70%_50%_at_85%_10%,var(--hero-glow-lilac),transparent_50%),linear-gradient(160deg,#eef2fb_0%,var(--background)_48%,#f0eaf8_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 pb-24 pt-28 md:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent animate-fade-up">
            Portfolio
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-foreground md:text-7xl lg:text-8xl animate-fade-up-delay">
            {site.name}
          </h1>
          <p className="mt-4 font-display text-xl text-foreground/85 md:text-2xl animate-fade-up-delay">
            {site.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted animate-fade-up-delay-2">
            {site.pitch}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
            >
              View projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-sm border border-border bg-surface/80 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-b border-border bg-surface"
      >
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-8 md:py-20">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            About
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Projects
            </h2>
            <p className="mt-3 text-muted">
              Product case studies plus M.Sc. research — what shipped, how it
              was analyzed, and why the approach looked that way.
            </p>
          </div>
          <div>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-surface"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Open to mobile, frontend, and full-stack roles. Happy to walk
            through private codebases on request.
          </p>
          <ul className="mt-8 space-y-3 text-base">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
