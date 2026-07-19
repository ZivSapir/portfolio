import Link from "next/link";
import type { Project } from "@/content/projects";
import { site } from "@/content/site";
import { StatusBadge } from "@/components/StatusBadge";
import { MediaGallery } from "@/components/MediaGallery";

type CaseStudyProps = {
  project: Project;
};

export function CaseStudy({
  project,
}: CaseStudyProps) {
  const isResearch = project.status === "research";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const pdfHref = project.pdfUrl
    ? `${basePath}${project.pdfUrl}`
    : undefined;

  return (
    <article>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--hero-glow),transparent_55%)] opacity-70"
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-28 md:px-8 md:pb-20 md:pt-32">
          <Link
            href="/#projects"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 animate-fade-up">
            <StatusBadge
              status={project.status}
              label={project.statusLabel}
            />
            {project.featured ? (
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Flagship
              </span>
            ) : null}
          </div>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-6xl animate-fade-up-delay">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted animate-fade-up-delay-2">
            {project.blurb}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-16 md:px-8 md:py-20">
        <section className="max-w-2xl space-y-3">
          <h2 className="font-display text-2xl tracking-tight">
            {isResearch ? "Research question" : "Problem"}
          </h2>
          <p className="leading-relaxed text-muted">{project.problem}</p>
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-2xl tracking-tight">
            {project.betterThanTitle ?? "Why this is better"}
          </h2>
          <ol className="space-y-4">
            {project.betterThan.map((point, index) => (
              <li
                key={point}
                className="flex gap-4 border-l-2 border-accent/40 pl-4"
              >
                <span className="font-display text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-muted">{point}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-6">
          <h2 className="font-display text-2xl tracking-tight">
            {project.smartChoicesTitle ?? "Smart choices"}
          </h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {project.smartChoices.map((choice) => (
              <li
                key={choice.title}
                className="space-y-2 border-t border-border pt-4"
              >
                <h3 className="font-medium text-foreground">{choice.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {choice.why}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-tight">
            {isResearch ? "Tools & methods" : "Stack"}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <li
                key={tag}
                className="rounded-sm border border-border bg-surface px-3 py-1.5 text-sm text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-muted">
            {project.stackNotes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-2xl tracking-tight">Media</h2>
          <MediaGallery
            media={project.media}
            projectTitle={project.title}
            variant={isResearch ? "document" : "phone"}
          />
        </section>

        <section className="border-t border-border pt-10">
          <h2 className="font-display text-2xl tracking-tight">
            {isResearch ? "Read the thesis" : "Want to see the code?"}
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            {isResearch
              ? "Figures above are excerpts. The full PDF covers methods, four storm case studies, and limitations in detail."
              : `${site.privateRepoNote} Reach out and I can walk through architecture and implementation.`}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {pdfHref ? (
              <a
                href={pdfHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
              >
                Download full PDF
              </a>
            ) : (
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  `${project.title} — code walkthrough`,
                )}`}
                className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
              >
                Email me
              </a>
            )}
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            {pdfHref ? (
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  `${project.title} — discussion`,
                )}`}
                className="inline-flex items-center justify-center rounded-sm border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Email me
              </a>
            ) : null}
          </div>
        </section>
      </div>
    </article>
  );
}
