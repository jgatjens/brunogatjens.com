import Image from "next/image";

const roles = ["UX/UI Designer", "Visual Designer", "Wireframes", "interaction design", "Design system definition"];
const tools = ["Figma", "Google Analytics", "Slack", "Google Meet"];

export function SynapseRoleTools() {
  return (
    <section aria-labelledby="synapse-role-tools" className="mt-section">
      <h2 id="synapse-role-tools" className="border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight">Role &amp; Tools</h2>
      <div className="mt-8 grid items-center gap-8 sm:mt-12 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-16 lg:gap-32">
        <Image src="/images/projects/synapse/synapse-section-03.svg" alt="" width={300} height={300}
          className="mx-auto h-auto w-full max-w-60 md:max-w-75" />
        <div className="min-w-0 space-y-8 sm:space-y-10">
          {[{ id: "synapse-roles", title: "ROLE:", items: roles }, { id: "synapse-tools", title: "TOOLS:", items: tools }].map((group) => (
            <div key={group.id}>
              <h3 id={group.id} className="font-sans text-sm font-normal text-muted sm:text-base">{group.title}</h3>
              <ul aria-labelledby={group.id} className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                {group.items.map((item) => <li key={item} className="max-w-full rounded-lg border border-border bg-[#f1f1f1] px-3 py-2 text-sm text-muted sm:text-base">{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
