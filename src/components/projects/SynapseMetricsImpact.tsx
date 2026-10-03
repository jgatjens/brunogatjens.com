import Image from "next/image";

export function SynapseMetricsImpact() {
  return (
    <section aria-labelledby="synapse-metrics-impact" className="mt-section">
      <h2 id="synapse-metrics-impact" className="border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight">Metrics &amp; Impact</h2>
      <div className="mt-8 grid items-center gap-8 sm:mt-12 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16 lg:gap-32">
        <div className="min-w-0 space-y-8 text-sm leading-relaxed text-muted sm:space-y-10 sm:text-base">
          <div>
            <h3 className="font-sans text-sm font-normal sm:text-base">Success metrics:</h3>
            <p className="mt-6">Reduced incomplete installations, admin rework time, and the overall installation-to-billing cycle.</p>
          </div>
          <div>
            <h3 className="font-sans text-sm font-normal sm:text-base">Expected impact:</h3>
            <p className="mt-6">Improved operational confidence, faster billing, and a scalable process</p>
          </div>
        </div>
        <Image src="/images/projects/synapse/synapse-section-06.svg" alt="" width={240} height={240}
          className="mx-auto h-auto w-full max-w-60" />
      </div>
    </section>
  );
}
