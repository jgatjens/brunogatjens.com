import { PageContainer } from "@/components/layout/PageContainer";
import { HomeIntro } from "@/components/home/HomeIntro";
import { ProjectFilterPreview } from "@/components/home/ProjectFilterPreview";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";

export default function HomePage() {
  return (
    <PageContainer>
      <HomeIntro />
      <section id="projects" className="home-projects" aria-label="Projects">
        <ProjectFilterPreview />
        <ProjectGrid />
      </section>
      <ConsultationCTA email="gatjensb@gmail.com" />
    </PageContainer>
  );
}
