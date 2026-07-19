import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import {
  getProject,
  getProjectSlugs,
} from "@/content/projects";
import { resolveProjectMedia } from "@/lib/resolveMedia";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} — case study`,
      description: project.oneLiner,
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const media = await resolveProjectMedia(project);

  return (
    <CaseStudy
      project={{
        ...project,
        media,
      }}
    />
  );
}
