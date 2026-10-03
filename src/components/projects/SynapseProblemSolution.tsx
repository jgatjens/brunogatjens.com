import Image from "next/image";

const stages = ["Research & Audit", "Design System", "Personnel Mgr", "Assets Mgr", "Field Information & Operations", "Admin Dashboard"];

export function SynapseProblemSolution() {
  return (
    <section aria-label="Problem, solution, and project timeline" className="mt-section">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_69px_minmax(0,1fr)] md:gap-8">
        <div>
          <h2 className="border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight">Problem</h2>
          <p className="mt-8 text-sm leading-relaxed text-muted sm:mt-12 sm:text-base">Fragmented transport data with no visibility causes rework. How might we create a single source of truth for installations?</p>
        </div>
        <Image src="/images/projects/synapse/synapse-section-02-item-01.svg" alt="" width={69} height={272}
          className="mx-auto hidden h-auto w-[69px] md:block" />
        <div>
          <h2 className="border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight">Solution</h2>
          <p className="mt-8 text-sm leading-relaxed text-muted sm:mt-12 sm:text-base">Installation Management Platform with guided forms, GPS photo validation, real-time tracking, and supervisor dashboard.</p>
        </div>
      </div>
      <div className="mt-8 sm:mt-12">
        <h3 id="synapse-timeline" className="font-sans text-sm font-normal text-muted sm:text-base">TIMELINE: 8 Months</h3>
        <ol aria-labelledby="synapse-timeline" className="mt-6 grid gap-6 md:grid-cols-[repeat(12,minmax(0,1fr))] md:gap-x-6 md:gap-y-4">
          {stages.map((stage, index) => (
            <li key={stage} className={`relative flex min-w-0 items-center gap-4 border-l border-border pl-6 md:flex-col md:gap-3 md:border-b md:border-l-0 md:px-0 md:pb-6 ${index === 4 ? "md:col-span-4" : "md:col-span-2"}`}>
              <span aria-hidden="true" className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-foreground bg-background md:left-1/2 md:top-auto md:-bottom-1.5 md:-translate-x-1/2 md:translate-y-0" />
              <span className="rounded-full border border-border px-3 py-1 text-sm text-muted md:px-2 md:text-xs">{stage}</span>
              <span className="text-sm text-muted">{index + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
