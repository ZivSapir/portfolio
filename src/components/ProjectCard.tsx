import Link from "next/link";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/StatusBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-b border-border py-8 transition-colors first:pt-0 last:border-b-0 last:pb-0 hover:border-accent/40"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="max-w-xl space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
              {project.title}
            </h3>
            <StatusBadge
              status={project.status}
              label={project.statusLabel}
            />
          </div>
          <p className="text-base leading-relaxed text-muted">
            {project.oneLiner}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end md:pt-1">
          <ul className="flex flex-wrap gap-2 md:justify-end">
            {project.tech.slice(0, 5).map((tag) => (
              <li
                key={tag}
                className="rounded-sm border border-border bg-surface px-2 py-1 text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
            Case study →
          </span>
        </div>
      </div>
    </Link>
  );
}
