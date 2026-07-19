import type { ProjectMedia } from "@/content/projects";

type MediaVariant = "phone" | "document" | "desktop";

type MediaGalleryProps = {
  media: ProjectMedia[];
  projectTitle: string;
  variant?: MediaVariant;
};

export function MediaGallery({
  media,
  projectTitle,
  variant = "phone",
}: MediaGalleryProps) {
  const images = media.filter(
    (item) => item.type === "image" || item.type === "placeholder",
  );
  const videos = media.filter((item) => item.type === "video");

  const frameClass =
    variant === "document"
      ? "flex h-[30rem] items-center justify-center bg-placeholder px-3 py-4 md:h-[34rem]"
      : variant === "desktop"
        ? "flex min-h-[22rem] items-center justify-center bg-placeholder px-4 py-5 md:min-h-[28rem]"
        : "flex h-[26rem] items-center justify-center bg-placeholder px-4 py-5 md:h-[28rem]";

  const gridClass =
    variant === "document"
      ? "grid gap-5 md:grid-cols-2"
      : variant === "desktop"
        ? "grid gap-6"
        : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3";

  const imageClass =
    variant === "desktop"
      ? "h-auto w-full max-h-[36rem] object-contain md:max-h-[40rem]"
      : "max-h-full w-auto max-w-full object-contain";

  const videoFigureClass =
    variant === "desktop"
      ? "w-full max-w-5xl overflow-hidden rounded-sm border border-border bg-placeholder animate-fade-in"
      : "w-full max-w-md overflow-hidden rounded-sm border border-border bg-placeholder animate-fade-in md:max-w-lg";

  const videoClass =
    variant === "desktop"
      ? "mx-auto max-h-[36rem] w-full object-contain md:max-h-[42rem]"
      : "mx-auto max-h-[26rem] w-full object-contain md:max-h-[28rem]";

  return (
    <div className="space-y-8">
      {images.length > 0 ? (
        <div className={gridClass}>
          {images.map((item) => (
            <figure
              key={`${item.type}-${item.label ?? item.alt}`}
              className="overflow-hidden rounded-sm border border-border bg-placeholder animate-fade-in"
            >
              {item.type === "image" && item.src ? (
                <div className={frameClass}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={imageClass}
                    loading="lazy"
                  />
                </div>
              ) : null}
              {item.type === "placeholder" ? (
                <div
                  className={`${frameClass} flex-col gap-2 px-6 text-center`}
                >
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
              className={videoFigureClass}
            >
              {item.src ? (
                <div className="bg-foreground/90 px-3 py-4 md:px-5 md:py-5">
                  <video
                    className={videoClass}
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
