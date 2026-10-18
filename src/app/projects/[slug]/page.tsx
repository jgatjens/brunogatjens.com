import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { projectDetails } from "@/content/project-details";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails.find((project) => project.slug === slug);
  return project ? { title: project.title } : {};
}

export function generateStaticParams() {
  return projectDetails.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectDetails.find((project) => project.slug === slug);
  if (!project || !projects.some((project) => project.slug === slug)) notFound();
  return <ProjectDetail project={project} />;
}
