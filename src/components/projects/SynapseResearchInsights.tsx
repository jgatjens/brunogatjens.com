import Image from "next/image";

export function SynapseResearchInsights() {
  return (
    <section aria-labelledby="synapse-research-insights" className="mt-section">
      <h2 id="synapse-research-insights" className="border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight">Research &amp; Insights</h2>
      <div className="mt-8 grid items-center gap-8 sm:mt-12 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16 lg:gap-32">
        <div className="min-w-0 space-y-8 text-sm leading-relaxed text-muted sm:space-y-10 sm:text-base">
          <div>
            <h3 className="font-sans text-sm font-normal sm:text-base">RESEARCH METHODS:</h3>
            <p className="mt-6">Conducted interviews with technicians, supervisors, and admins, plus workflow observation.</p>
          </div>
          <div>
            <h3 className="font-sans text-sm font-normal sm:text-base">KEY INSIGHTS:</h3>
            <p className="mt-6">Technicians prioritize speed over documentation, rely on WhatsApp, and most errors occur during admin processing.</p>
          </div>
        </div>
        <Image src="/images/projects/synapse/synapse-section-04.svg" alt="" width={240} height={240}
          className="mx-auto h-auto w-full max-w-60" />
      </div>
    </section>
  );
}
