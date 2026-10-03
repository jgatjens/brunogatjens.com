import Image from "next/image";
import type { ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectSection } from "./ProjectSection";

const heading = "border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight";
const text = "text-sm leading-relaxed text-muted sm:text-base";
const stages = ["Research & Audit", "Design System", "Passenger", "Driver", "Admin Dashboard"];
const roles = ["UX/UI Designer", "Visual Designer", "Wireframes", "interaction design", "Design system definition"];
const tools = ["Figma", "Google Analytics", "Slack", "Google Meet"];

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = `moveon-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return <section aria-labelledby={id}><h2 id={id} className={heading}>{title}</h2><div className="mt-8 sm:mt-12">{children}</div></section>;
}

function Decoration({ section }: { section: string }) {
  return <Image src={`/images/projects/synapse/synapse-section-${section}.svg`} alt="" width={240} height={240} className="mx-auto h-auto w-full max-w-60" />;
}

export function MoveOnDetail() {
  return (
    <PageContainer className="py-section lg:pt-20">
      <article aria-labelledby="moveon-title">
        <header className="grid items-center gap-10 border-b border-border md:grid-cols-[minmax(0,1fr)_423px] md:gap-12">
          <div className="pb-8">
            <h1 id="moveon-title"><span className="sr-only">MoveOn</span><Image src="/images/projects/moveon/logo-moveon.svg" alt="" width={298} height={80} className="h-auto w-full max-w-[298px]" /></h1>
            <p className="mt-4 text-sm sm:text-base">UX/UI CASE STUDY</p>
            <p className={`mt-8 sm:mt-10 ${text}`}>Corporate transportation app</p>
            <a href="https://www.moveon.com/" className="mt-4 inline-block max-w-full break-words text-sm text-muted underline sm:text-base">https://www.moveon.com/</a>
          </div>
          <Image src="/images/projects/moveon/header-moveon.svg" alt="Illustration of a bus traveling through a mountain landscape" width={423} height={423} sizes="(min-width: 768px) 423px, calc(100vw - 32px)" className="mx-auto h-auto w-full max-w-[423px]" />
        </header>
        <div className="mt-section space-y-section">
          <ProjectSection section={{ id: "moveon-mobile-screens", title: "Mobile screens", groups: [{ id: "moveon-mobile", layout: "columns-2", images: [
            { id: "moveon-reservations", src: "/images/projects/moveon/moveon-section-01-item-01.png", alt: "MoveOn mobile reservations with trip information and pickup details", width: 780, height: 1572 },
            { id: "moveon-trip-details", src: "/images/projects/moveon/moveon-section-01-item-02.png", alt: "MoveOn mobile trip details with route map and driver information", width: 780, height: 1572 },
          ] }] }} />
          <section aria-label="Problem, solution, and project timeline">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_69px_minmax(0,1fr)]">
              <div><h2 className={heading}>Problem</h2><p className={`mt-8 sm:mt-12 ${text}`}>Transportation is fragmented and unclear, making it hard to coordinate trips.</p></div>
              <Image src="/images/projects/synapse/synapse-section-02-item-01.svg" alt="" width={69} height={272} className="mx-auto hidden h-auto w-[69px] md:block" />
              <div><h2 className={heading}>Solution</h2><p className={`mt-8 sm:mt-12 ${text}`}>A role-based system with mobile apps and a web dashboard, all synced in real time.</p></div>
            </div>
            <h3 id="moveon-timeline" className={`mt-8 font-sans font-normal sm:mt-12 ${text}`}>TIMELINE: 8 Months</h3>
            <ol aria-labelledby="moveon-timeline" className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-0">
              {stages.map((stage, index) => <li key={stage} className="relative flex items-center gap-4 border-l border-border pl-6 lg:flex-1 lg:flex-col lg:gap-3 lg:border-b lg:border-l-0 lg:px-0 lg:pb-6"><span className="rounded-full border border-border px-2 py-1 text-xs text-muted">{stage}</span><span className="text-sm text-muted">{index + 1}</span><span aria-hidden="true" className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-foreground bg-background lg:left-1/2 lg:top-auto lg:-bottom-1.5 lg:-translate-x-1/2 lg:translate-y-0" /></li>)}
            </ol>
          </section>
          <Section title="Role & Tools">
            <div className="grid items-center gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-16 lg:gap-32">
              <Image src="/images/projects/synapse/synapse-section-03.svg" alt="" width={300} height={300} className="mx-auto h-auto w-full max-w-60 md:max-w-75" />
              <div className="min-w-0 space-y-8 sm:space-y-10">{[{ title: "ROLE:", items: roles }, { title: "TOOLS:", items: tools }].map(group => <div key={group.title}><h3 className={`font-sans font-normal ${text}`}>{group.title}</h3><ul aria-label={group.title} className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">{group.items.map(item => <li key={item} className="max-w-full rounded-lg border border-border bg-[#f1f1f1] px-3 py-2 text-sm text-muted sm:text-base">{item}</li>)}</ul></div>)}</div>
            </div>
          </Section>
          <Section title="Research & Insights">
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16 lg:gap-32">
              <div className={`space-y-8 ${text}`}><div><h3 className="font-sans font-normal">RESEARCH METHODS:</h3><p className="mt-6">Interviews, observations &amp; tool reviews.</p></div><div><h3 className="font-sans font-normal">KEY INSIGHTS:</h3><p className="mt-6">Simple driver UI, passenger ETA focus, admin alerts.</p></div></div>
              <Decoration section="04" />
            </div>
          </Section>
          <Section title="Learnings">
            <div className="grid items-center gap-8 md:grid-cols-[240px_minmax(0,1fr)] md:gap-16 lg:gap-32"><Decoration section="05" /><p className={text}>Simplicity for drivers, real-time visibility for passengers, and alerts for admins.</p></div>
            <Image src="/images/projects/moveon/moveon-section-05.png" alt="MoveOn role-based user flow: passenger booking and pickup, driver trip management, and admin monitoring, connected through real-time synchronization" width={2160} height={2146} sizes="(min-width: 768px) 720px, (min-width: 512px) 93.75vw, calc(100vw - 32px)" className="mx-auto mt-8 h-auto w-full max-w-[720px] sm:mt-12" />
          </Section>
          <Section title="Success Metrics"><div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16 lg:gap-32"><p className={text}>fewer missed pickups/support calls, higher on-time &amp; driver usage</p><Decoration section="06" /></div></Section>
          <ProjectSection section={{ id: "moveon-tablet-screens", title: "Tablet screens", groups: [{ id: "moveon-tablet", layout: "full", images: [{ id: "moveon-section-07", src: "/images/projects/moveon/moveon-section-07.png", alt: "MoveOn tablet trip dashboard with reservations, route map, and passenger list", width: 1536, height: 2048 }] }] }} />
        </div>
      </article>
    </PageContainer>
  );
}
