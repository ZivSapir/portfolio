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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <figure
              key={`${item.type}-${item.label ?? item.alt}`}
              className="overflow-hidden rounded-sm border border-border bg-placeholder animate-fade-in"
            >
              {item.type === "image" && item.src ? (
                <div className="flex h-[26rem] items-center justify-center bg-[#e8eef2] px-4 py-5 md:h-[28rem]">
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
                <div className="flex h-[26rem] flex-col items-center justify-center gap-2 px-6 text-center md:h-[28rem]">
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
              className="w-full max-w-md overflow-hidden rounded-sm border border-border bg-placeholder animate-fade-in md:max-w-lg"
            >
              {item.src ? (
                <div className="bg-foreground/90 px-3 py-4">
                  <video
                    className="mx-auto max-h-[26rem] w-full object-contain md:max-h-[28rem]"
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
