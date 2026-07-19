import type { ProjectMedia } from "@/content/projects";

type MediaGalleryProps = {
  media: ProjectMedia[];
  projectTitle: string;
};

export function MediaGallery({
  media,
  projectTitle,
}: MediaGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {media.map((item) => (
        <figure
          key={`${item.type}-${item.label ?? item.alt}`}
          className="overflow-hidden rounded-sm border border-border bg-placeholder animate-fade-in"
        >
          {item.type === "image" && item.src ? (
            // Plain <img>: Next/Image + static export can miss GitHub Pages basePath
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
          {item.type === "video" && item.src ? (
            <video
              className="aspect-[4/3] h-full w-full bg-foreground/90 object-contain"
              controls
              playsInline
              preload="metadata"
              aria-label={item.alt}
            >
              <source
                src={item.src}
                type={
                  item.src.endsWith(".webm") ? "video/webm" : "video/mp4"
                }
              />
            </video>
          ) : null}
          {item.type === "placeholder" ? (
            <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 px-6 text-center">
              <p className="font-display text-lg text-foreground/80">
                {item.label ?? "Screenshot"}
              </p>
              <p className="max-w-xs text-sm text-muted">
                Drop a real capture into{" "}
                <code className="text-xs">public/screenshots/</code> for{" "}
                {projectTitle}.
              </p>
            </div>
          ) : null}
          {item.label && item.type !== "placeholder" ? (
            <figcaption className="border-t border-border bg-surface px-4 py-2 text-sm text-muted">
              {item.label}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
