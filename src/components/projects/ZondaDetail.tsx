import Image from "next/image";
import type { ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectSection } from "./ProjectSection";

const heading = "border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight";
const text = "text-sm leading-relaxed text-muted sm:text-base";
const stages = ["Research & Audit", "Define Goals & Users", "Ideation", "Wireframing", "Design System", "Testing & Refinement"];
const roles = ["UX/UI Designer", "Visual Designer", "Wireframes", "interaction design", "Design system definition"];
const tools = ["Figma", "Google Analytics", "Slack", "Google Meet"];
const wireframeImages = [
  { src: "/images/projects/zonda/zonda-early-wireframe-1.png", alt: "Photograph of an early handwritten Zonda dashboard wireframe" },
  { src: "/images/projects/zonda/zonda-early-wireframe-2.png", alt: "Photograph of a second early handwritten Zonda dashboard wireframe" },
  { src: "/images/projects/zonda/zonda-early-wireframe-3.png", alt: "Photograph of a third early handwritten Zonda dashboard wireframe" },
] as const;

function ExampleSection({ title, children }: { title: string; children: ReactNode }) {
  const id = `zonda-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`;

  return (
    <section aria-labelledby={id}>
      <div className="pb-16 pt-6">
        <div className="flex items-center border-l-2 border-foreground px-4 sm:px-10">
          <h2 id={id} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-normal text-foreground">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = `zonda-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return <section aria-labelledby={id}><h2 id={id} className={heading}>{title}</h2><div className="mt-8 sm:mt-12">{children}</div></section>;
}

function Illustration({ name }: { name: "research" | "learnings" | "constraints" }) {
  if (name === "constraints") return (
    <svg aria-hidden="true" viewBox="0 0 240 240" className="mx-auto h-auto w-full max-w-60" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M83 30 Q80 30 83 38 Q124 120 83 202 Q80 210 86 210 H154 Q160 210 157 202 Q116 120 157 38 Q160 30 154 30 Z" fill="#f1f1f1" />
      <path d="M0 120 H87 M35 67 L87 120 L35 173 M240 120 H153 M205 67 L153 120 L205 173" />
    </svg>
  );
  return <Image src={`/images/projects/synapse/synapse-section-${name === "research" ? "04" : "05"}.svg`} alt="" width={240} height={240} className="project-section-illustration-white mx-auto h-auto w-full max-w-60" />;
}

export function ZondaDetail() {
  return (
    <PageContainer className="project-page-content py-section lg:pt-20">
      <article aria-labelledby="zonda-title">
        <header className="grid items-center gap-10 border-b border-border md:grid-cols-[minmax(0,682fr)_minmax(0,310fr)] md:gap-12">
          <div className="pb-8">
            <h1 id="zonda-title"><span className="sr-only">Zonda Live</span><Image src="/images/projects/zonda/logo-zonda.svg" alt="" width={94} height={80} className="h-auto w-full max-w-[94px]" /></h1>
            <p className="mt-4 text-sm sm:text-base">UX/UI CASE STUDY</p>
            <p className={`mt-8 sm:mt-10 ${text}`}>Housing industry data and lead information</p>
          </div>
          <Image src="/images/projects/zonda/header-zonda.svg" alt="Illustration of blue houses and a red sun" width={310} height={357} sizes="(min-width: 1120px) 310px, (min-width: 768px) 29vw, calc(100vw - 32px)" className="h-auto w-full" />
        </header>
        <div className="mt-section space-y-section">
          <ProjectSection section={{ id: "zonda-dashboard-screens", title: "Dashboard screens", groups: [{ id: "zonda-dashboard", layout: "full", images: [{ id: "zonda-dashboard-light-image", src: "/images/projects/zonda/zonda-dashboard-light.png", alt: "Zonda Live real estate analytics dashboard in the light theme, with community completeness scores and performance charts", width: 858, height: 768 }, { id: "zonda-dashboard-dark-image", src: "/images/projects/zonda/zonda-dashboard-dark.png", alt: "Zonda Live real estate analytics dashboard in the dark theme, with community completeness scores and performance charts", width: 858, height: 768 }] }] }} />
          <section aria-label="Problem, solution, and project timeline">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_69px_minmax(0,1fr)]">
              <div><h2 className={heading}>Problem</h2><p className={`mt-8 sm:mt-12 ${text}`}>Overwhelming dense dashboards, poor hierarchy, inconsistent UI, steep learning curve.</p></div>
              <Image src="/images/projects/synapse/synapse-section-02-item-01.svg" alt="" width={69} height={272} className="project-section-illustration-white project-section-illustration-dark-surrounding mx-auto hidden h-auto w-[69px] md:block" />
              <div><h2 className={heading}>Solution</h2><p className={`mt-8 sm:mt-12 ${text}`}>Dashboard redesign, improved visuals, lead UI, filters & reporting tools</p></div>
            </div>
            <div className="project-timeline mt-8 sm:mt-12">
              <h3 id="zonda-timeline" className="flex items-center gap-4 font-sans text-sm font-normal text-[#425466] sm:text-base">
                <span className="uppercase">Timeline:</span>
                <span>1 Year</span>
              </h3>
              <ol aria-labelledby="zonda-timeline" className="relative mt-6 flex flex-col gap-4 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-0.5 before:bg-[#22212c] lg:flex-row lg:gap-2 lg:before:bottom-[5px] lg:before:left-0 lg:before:right-0 lg:before:top-auto lg:before:h-0.5 lg:before:w-auto">
                {stages.map((stage, index) => (
                  <li key={stage} className="relative flex items-center gap-4 pl-6 lg:flex-1 lg:flex-col lg:items-center lg:gap-2 lg:pb-6 lg:pl-0">
                    <span aria-hidden="true" className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-[#22212c] bg-background lg:bottom-0 lg:left-1/2 lg:top-auto lg:order-3 lg:size-3 lg:-translate-x-1/2 lg:translate-y-0" />
                    <span className="rounded-full border border-[#22212c] px-2 py-1 text-xs leading-normal text-[#425466]">{stage}</span>
                    <span className="text-sm leading-normal text-[#707070] lg:order-2">{index + 1}</span>
                  </li>
                ))}
              </ol>
            </div>
            </section>
          <Section title="Role & Tools">
            <div className="grid items-center gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-16 lg:gap-32">
              <Image src="/images/projects/synapse/synapse-section-03.svg" alt="" width={300} height={300} className="project-section-illustration-white mx-auto h-auto w-full max-w-60 md:max-w-75" />
              <div className="min-w-0 space-y-8 sm:space-y-10">{[{title:"ROLE:",items:roles},{title:"TOOLS:",items:tools}].map(group => <div key={group.title}><h3 className={`font-sans font-normal ${text}`}>{group.title}</h3><ul aria-label={group.title} className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">{group.items.map(item => <li key={item} className="max-w-full rounded-lg border border-border px-3 py-2 text-sm text-muted sm:text-base">{item}</li>)}</ul></div>)}</div>
            </div>
          </Section>
          <Section title="Research & Insights"><div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16 lg:gap-32"><p className={text}>Hierarchy first, scannable design, UI consistency &amp; decision-focused</p><Illustration name="research" /></div></Section>
          <ExampleSection title="Example - Early wireframes">
            <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3">
              {wireframeImages.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={340}
                  height={453}
                  sizes="(min-width: 1120px) 340px, (min-width: 768px) 30vw, 93.75vw"
                  className="block h-auto w-full"
                  priority={index === 0}
                />
              ))}
            </div>
          </ExampleSection>
          <ExampleSection title="Example User Journey">
            <Image
              src="/images/projects/zonda/zonda-user-journey.png"
              alt="Photograph of an early handwritten Zonda user journey"
              width={1040}
              height={862}
              sizes="(min-width: 1120px) 1040px, (min-width: 512px) 93.75vw, calc(100vw - 32px)"
              className="block h-auto w-full"
            />
          </ExampleSection>
          <Section title="Constraints"><div className="grid items-center gap-8 md:grid-cols-[240px_minmax(0,1fr)] md:gap-16 lg:gap-32"><Illustration name="constraints" /><p className={text}>Fixed data structure, large datasets, complex filters, desktop-first long sessions.</p></div></Section>
          <Section title="Learnings"><div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16 lg:gap-32"><ul className={`list-disc pl-5 ${text}`}><li>Enterprise users value clarity over density</li><li>Visual hierarchy is critical in data products</li><li>Consistency builds trust in complex systems</li></ul><Illustration name="learnings" /></div></Section>
          <Section title="Modals screens">
            <div className="space-y-8 sm:space-y-12">
              <Image src="/images/projects/zonda/zonda-section-07-item-01.png" alt="Zonda Spotlight order summary modal with selected markets and order confirmation" width={2200} height={1470} sizes="(min-width: 1120px) 1040px, (min-width: 512px) 93.75vw, calc(100vw - 32px)" className="mx-auto h-auto w-full" />
              <Image src="/images/projects/zonda/zonda-section-07-item-02.png" alt="Zonda home spotlight selection modal with market rows and selected homes" width={1472} height={2052} sizes="(min-width: 800px) 736px, (min-width: 512px) 93.75vw, calc(100vw - 32px)" className="mx-auto h-auto w-full max-w-[736px]" />
            </div>
          </Section>
        </div>
      </article>
    </PageContainer>
  );
}
