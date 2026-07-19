import type { ProjectStatus } from "@/content/projects";

type StatusBadgeProps = {
  status: ProjectStatus;
  label: string;
};

const styles: Record<ProjectStatus, string> = {
  "live-mvp": "bg-accent-soft text-accent-deep",
  prototype: "bg-[#e8eef5] text-[#2f4a63]",
  "in-progress": "bg-[#f3efe6] text-[#5c4a2a]",
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
