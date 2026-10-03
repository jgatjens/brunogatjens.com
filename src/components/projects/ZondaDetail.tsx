import Image from "next/image";
import type { ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectSection } from "./ProjectSection";

const heading = "border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight";
const text = "text-sm leading-relaxed text-muted sm:text-base";
const stages = ["Research & Audit", "Define Goals & Users", "Ideation", "Wireframing", "Design System", "Testing & Refinement"];
const roles = ["UX/UI Designer", "Visual Designer", "Wireframes", "interaction design", "Design system definition"];
const tools = ["Figma", "Google Analytics", "Slack", "Google Meet"];

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
  return <Image src={`/images/projects/synapse/synapse-section-${name === "research" ? "04" : "05"}.svg`} alt="" width={240} height={240} className="mx-auto h-auto w-full max-w-60" />;
}

export function ZondaDetail() {
  return (
    <PageContainer className="py-section lg:pt-20">
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
          <ProjectSection section={{ id: "zonda-dashboard-screens", title: "Dashboard screens", groups: [{ id: "zonda-dashboard", layout: "full", images: [{ id: "zonda-dashboard-image", src: "/images/projects/zonda/zonda-section-01-item-01.png", alt: "Zonda Live dashboard in light and dark themes with community metrics, conversion charts, and call-to-action data", width: 2080, height: 3804 }] }] }} />
          <section aria-label="Problem, solution, and project timeline">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_69px_minmax(0,1fr)]">
              <div><h2 className={heading}>Problem</h2><p className={`mt-8 sm:mt-12 ${text}`}>Overwhelming dense dashboards, poor hierarchy, inconsistent UI, steep learning curve.</p></div>
              <Image src="/images/projects/synapse/synapse-section-02-item-01.svg" alt="" width={69} height={272} className="mx-auto hidden h-auto w-[69px] md:block" />
              <div><h2 className={heading}>Solution</h2><p className={`mt-8 sm:mt-12 ${text}`}>Dashboard redesign, improved visuals, lead UI, filters & reporting tools</p></div>
            </div>
            <h3 id="zonda-timeline" className={`mt-8 font-sans font-normal sm:mt-12 ${text}`}>TIMELINE: 1 Year</h3>
            <ol aria-labelledby="zonda-timeline" className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-2">
              {stages.map((stage, index) => <li key={stage} className="relative flex items-center gap-4 border-l border-border pl-6 lg:flex-1 lg:flex-col lg:gap-3 lg:border-b lg:border-l-0 lg:px-0 lg:pb-6"><span className="rounded-full border border-border px-2 py-1 text-xs text-muted">{stage}</span><span className="text-sm text-muted">{index + 1}</span><span aria-hidden="true" className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-foreground bg-background lg:left-1/2 lg:top-auto lg:-bottom-1.5 lg:-translate-x-1/2 lg:translate-y-0" /></li>)}
            </ol>
          </section>
          <Section title="Role & Tools">
            <div className="grid items-center gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-16 lg:gap-32">
              <Image src="/images/projects/synapse/synapse-section-03.svg" alt="" width={300} height={300} className="mx-auto h-auto w-full max-w-60 md:max-w-75" />
              <div className="min-w-0 space-y-8 sm:space-y-10">{[{title:"ROLE:",items:roles},{title:"TOOLS:",items:tools}].map(group => <div key={group.title}><h3 className={`font-sans font-normal ${text}`}>{group.title}</h3><ul aria-label={group.title} className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">{group.items.map(item => <li key={item} className="max-w-full rounded-lg border border-border bg-[#f1f1f1] px-3 py-2 text-sm text-muted sm:text-base">{item}</li>)}</ul></div>)}</div>
            </div>
          </Section>
          <Section title="Research & Insights"><div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16 lg:gap-32"><p className={text}>Hierarchy first, scannable design, UI consistency &amp; decision-focused</p><Illustration name="research" /></div></Section>
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
