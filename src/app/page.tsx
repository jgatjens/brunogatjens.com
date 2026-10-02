import type { Metadata } from "next";
import { projects, projectCategoryLabels } from "@/content/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { HomeIntro } from "@/components/home/HomeIntro";
import { ProjectFilter } from "@/components/home/ProjectFilter";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";

const title = "Bruno Gätjens — UX/UI Designer / Illustrator";
const description = "Portfolio of Bruno Gätjens, UX/UI Designer and Illustrator.";
const previewImage = {
  url: "/images/card-seo-preview.png",
  width: 2080,
  height: 1483,
  alt: "Bruno Gätjens portfolio preview",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brunogatjens.com"),
  openGraph: {
    title,
    description,
    type: "website",
    images: [previewImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [previewImage],
  },
};

export default function HomePage() {
  return (
    <PageContainer>
      <HomeIntro />
      <section id="projects" className="scroll-mt-6" aria-label="Projects">
        <ProjectFilter projects={projects} categoryLabels={projectCategoryLabels} />
      </section>
      <ConsultationCTA email="https://calendly.com/gatjensb/30min" />
    </PageContainer>
  );
}
