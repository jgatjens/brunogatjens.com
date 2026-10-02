import { InfoIcon, ClockIcon, LocationIcon, GlobeIcon } from "@/components/icons";

export function ConsultationCTA({ email }: { email?: string }) {
  return (
    <section className="pt-consultation-top pb-consultation-bottom text-center" aria-labelledby="consultation-title">
      <h2 id="consultation-title" className="text-consultation font-bold">Book a Free Consultation</h2>
      <div className="relative mt-consultation-inner">
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
          <span className="absolute flex size-28 items-center justify-center border-2 border-border bg-surface font-heading text-4xl font-bold text-muted blur-[5px] tile-left-one">12</span>
          <span className="absolute flex size-28 items-center justify-center border-2 border-border bg-surface font-heading text-4xl font-bold text-muted blur-sm tile-left-two">24</span>
          <span className="absolute flex size-28 items-center justify-center border-2 border-border bg-surface font-heading text-4xl font-bold text-muted blur-[5px] tile-left-three">02</span>
          <span className="absolute flex size-28 items-center justify-center border-2 border-border bg-surface font-heading text-4xl font-bold text-muted blur-[5px] tile-right-one">4</span>
          <span className="absolute flex size-28 items-center justify-center border-2 border-border bg-surface font-heading text-4xl font-bold text-muted blur-sm tile-right-two">12</span>
          <span className="absolute flex size-28 items-center justify-center border-2 border-border bg-surface font-heading text-4xl font-bold text-muted blur-[5px] tile-right-three">08</span>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-consultation border-2 border-foreground bg-surface p-consultation-padding text-left">
          <span className="font-heading text-4xl font-bold" aria-hidden="true">&lt;&gt;</span>
          <h3 className="mt-5 mb-8 font-sans text-xl font-semibold">Let&apos;s talk</h3>
          <p className="flex items-start gap-2 text-consultation-body font-semibold"><InfoIcon className="mt-0.5 size-4 shrink-0" /><span>Book me and I will never give up. Cal will never let you down. Open Source will never run around and desert you.</span></p>
          <ul className="mt-6 space-y-5 text-consultation-body font-semibold">
            <li className="flex items-start gap-2"><ClockIcon className="mt-0.5 size-4 shrink-0" /><span>30 min</span></li>
            <li className="flex items-start gap-2"><LocationIcon className="mt-0.5 size-4 shrink-0" /><span>Zoom</span></li>
            <li className="flex items-start gap-2"><GlobeIcon className="mt-0.5 size-4 shrink-0" /><span>Heredia / Costa Rica</span></li>
          </ul>
        </div>
      </div>
      {email ? <a className="mt-consultation-inner inline-block rounded-sm bg-surface px-6 py-2 text-lg hover:underline sm:text-xl" href={`mailto:${email}`} aria-label="Email Bruno to discuss a free consultation">LET&apos;S TALK</a> : <span className="mt-consultation-inner inline-block rounded-sm bg-surface px-6 py-2 text-lg sm:text-xl" aria-disabled="true">LET&apos;S TALK<span className="sr-only"> — contact link awaiting confirmation</span></span>}
    </section>
  );
}
