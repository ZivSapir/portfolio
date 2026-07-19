import type { ProjectStatus } from "@/content/projects";

type StatusBadgeProps = {
  status: ProjectStatus;
  label: string;
};

const styles: Record<ProjectStatus, string> = {
  "live-mvp": "bg-accent-soft text-accent-deep",
  prototype: "bg-accent-blue-soft text-[#3d5f86]",
  "in-progress": "bg-[#f3eaf8] text-[#6b4f7a]",
  research: "bg-[#e7f0fa] text-[#3d5a7a]",
};

export function StatusBadge({
  status,
  label,
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-medium tracking-wide ${styles[status]}`}
    >
      {label}
    </span>
  );
}
