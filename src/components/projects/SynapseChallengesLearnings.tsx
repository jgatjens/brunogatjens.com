import Image from "next/image";

export function SynapseChallengesLearnings() {
  return (
    <section aria-labelledby="synapse-challenges-learnings" className="mt-section">
      <h2 id="synapse-challenges-learnings" className="border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight">Challenges and Learnings</h2>
      <div className="mt-8 grid items-center gap-8 sm:mt-12 md:grid-cols-[240px_minmax(0,1fr)] md:gap-16 lg:gap-32">
        <Image src="/images/projects/synapse/synapse-section-05.svg" alt="" width={240} height={240}
          className="mx-auto h-auto w-full max-w-60" />
        <div className="min-w-0 space-y-8 text-sm leading-relaxed text-muted sm:space-y-10 sm:text-base">
          <div>
            <h3 className="font-sans text-sm font-normal sm:text-base">Challenges:</h3>
            <p className="mt-6">Aligned stakeholders on problem scope, facilitated trade-offs, and advocated for field users.</p>
          </div>
          <div>
            <h3 className="font-sans text-sm font-normal sm:text-base">Learnings:</h3>
            <p className="mt-6">Constraints drive better behavior than training — adoption beats elegance.</p>
          </div>
        </div>
      </div>
      <Image src="/images/projects/synapse/synapse-section-05-item-01.png"
        alt="Technician and admin workflow from login to job completion: dispatch and select jobs, verify arrival and monitor progress, install and resolve issues, then send the report and approve closure."
        width={1480} height={1689}
        sizes="(min-width: 800px) 740px, (min-width: 512px) 93.75vw, calc(100vw - 32px)"
        className="mx-auto mt-8 h-auto w-full max-w-[740px] sm:mt-12" />
    </section>
  );
}
