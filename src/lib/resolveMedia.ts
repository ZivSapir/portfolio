import { readdir } from "node:fs/promises";
import path from "node:path";
import type { Project, ProjectMedia } from "@/content/projects";

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov"]);

function labelFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  return base
    .replace(/^\d+-/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

async function listMediaFiles(
  folder: string,
  extensions: Set<string>,
): Promise<string[]> {
  try {
    const entries = await readdir(folder);
    return entries
      .filter((name) => extensions.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export async function resolveProjectMedia(
  project: Project,
): Promise<ProjectMedia[]> {
  const screenshotsDir = path.join(
    process.cwd(),
    "public",
    "screenshots",
    project.slug,
  );
  const videosDir = path.join(
    process.cwd(),
    "public",
    "videos",
    project.slug,
  );

  const images = await listMediaFiles(screenshotsDir, IMAGE_EXT);
  const videos = await listMediaFiles(videosDir, VIDEO_EXT);

  const resolved: ProjectMedia[] = [
    ...images.map((filename) => ({
      type: "image" as const,
      src: `/screenshots/${project.slug}/${filename}`,
      alt: `${project.title} — ${labelFromFilename(filename)}`,
      label: labelFromFilename(filename),
    })),
    ...videos.map((filename) => ({
      type: "video" as const,
      src: `/videos/${project.slug}/${filename}`,
      alt: `${project.title} — ${labelFromFilename(filename)}`,
      label: labelFromFilename(filename),
    })),
  ];

  if (resolved.length > 0) {
    return resolved;
  }

  return project.media;
}
