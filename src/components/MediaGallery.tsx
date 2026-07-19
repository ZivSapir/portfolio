import type { ProjectMedia } from "@/content/projects";

type MediaGalleryProps = {
  media: ProjectMedia[];
  projectTitle: string;
};

export function MediaGallery({
  media,
  projectTitle,
}: MediaGalleryProps) {
  const images = media.filter(
    (item) => item.type === "image" || item.type === "placeholder",
  );
  const videos = media.filter((item) => item.type === "video");

  return (
    <div className="space-y-8">
      {images.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <figure
              key={`${item.type}-${item.label ?? item.alt}`}
              className="overflow-hidden rounded-sm border border-border bg-placeholder animate-fade-in"
            >
              {item.type === "image" && item.src ? (
                <div className="flex h-72 items-center justify-center bg-[#e8eef2] px-3 py-4 md:h-80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ) : null}
              {item.type === "placeholder" ? (
                <div className="flex h-72 flex-col items-center justify-center gap-2 px-6 text-center md:h-80">
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
      ) : null}

      {videos.length > 0 ? (
        <div className="flex flex-col items-center gap-4">
          {videos.map((item) => (
            <figure
              key={`${item.type}-${item.label ?? item.alt}`}
              className="w-full max-w-sm overflow-hidden rounded-sm border border-border bg-placeholder animate-fade-in md:max-w-md"
            >
              {item.src ? (
                <div className="bg-foreground/90 px-2 py-3">
                  <video
                    className="mx-auto max-h-72 w-full object-contain md:max-h-80"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={item.alt}
                  >
                    <source
                      src={item.src}
                      type={
                        item.src.endsWith(".webm")
                          ? "video/webm"
                          : "video/mp4"
                      }
                    />
                  </video>
                </div>
              ) : null}
              {item.label ? (
                <figcaption className="border-t border-border bg-surface px-4 py-2 text-sm text-muted">
                  {item.label}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : null}
    </div>
  );
}
