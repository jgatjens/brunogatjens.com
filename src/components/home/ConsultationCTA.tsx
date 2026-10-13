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
          <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.7065 9.53333C28.5038 9.41631 28.2739 9.3547 28.0398 9.3547C27.8058 9.3547 27.5759 9.41631 27.3732 9.53333L22.6665 11.8533C22.6285 10.8181 22.1904 9.83796 21.4443 9.11925C20.6982 8.40054 19.7024 7.9993 18.6665 8H6.6665C5.60564 8 4.58822 8.42143 3.83808 9.17157C3.08793 9.92172 2.6665 10.9391 2.6665 12V20C2.6665 21.0609 3.08793 22.0783 3.83808 22.8284C4.58822 23.5786 5.60564 24 6.6665 24H18.6665C19.7024 24.0007 20.6982 23.5995 21.4443 22.8807C22.1904 22.162 22.6285 21.1819 22.6665 20.1467L27.4132 22.52C27.5949 22.6132 27.7956 22.6634 27.9998 22.6667C28.2495 22.6675 28.4943 22.5982 28.7065 22.4667C28.8987 22.3466 29.057 22.1795 29.1667 21.9812C29.2763 21.7829 29.3336 21.5599 29.3332 21.3333V10.6667C29.3336 10.4401 29.2763 10.2171 29.1667 10.0188C29.057 9.82051 28.8987 9.65343 28.7065 9.53333V9.53333ZM19.9998 20C19.9998 20.3536 19.8594 20.6928 19.6093 20.9428C19.3593 21.1929 19.0201 21.3333 18.6665 21.3333H6.6665C6.31288 21.3333 5.97374 21.1929 5.7237 20.9428C5.47365 20.6928 5.33317 20.3536 5.33317 20V12C5.33317 11.6464 5.47365 11.3072 5.7237 11.0572C5.97374 10.8071 6.31288 10.6667 6.6665 10.6667H18.6665C19.0201 10.6667 19.3593 10.8071 19.6093 11.0572C19.8594 11.3072 19.9998 11.6464 19.9998 12V20ZM26.6665 19.1733L22.6665 17.1733V14.8267L26.6665 12.8267V19.1733Z" fill="black" />
          </svg>
          <h3 className="mt-5 mb-8 font-sans text-xl font-semibold">Let&apos;s talk</h3>
          <p className="flex items-start gap-2 text-consultation-body font-semibold"><InfoIcon className="mt-0.5 size-4 shrink-0" /><span>Book a Call.</span></p>
          <ul className="mt-6 space-y-5 text-consultation-body font-semibold">
            <li className="flex items-start gap-2"><ClockIcon className="mt-0.5 size-4 shrink-0" /><span>30 min</span></li>
            <li className="flex items-start gap-2"><LocationIcon className="mt-0.5 size-4 shrink-0" /><span>Zoom</span></li>
            <li className="flex items-start gap-2"><GlobeIcon className="mt-0.5 size-4 shrink-0" /><span>Heredia / Costa Rica</span></li>
          </ul>
        </div>
      </div>
      {email ? <a target="_blank" className="mt-consultation-inner inline-block rounded-sm bg-[#22212C] px-6 py-2 text-lg text-[#F8FAFD] transition-colors hover:bg-[#9580FF] sm:text-xl" href={`${email}`} aria-label="Email Bruno to discuss a free consultation">LET&apos;S TALK</a> : <span className="mt-consultation-inner inline-block rounded-sm bg-[#22212C] px-6 py-2 text-lg text-[#F8FAFD] sm:text-xl" aria-disabled="true">LET&apos;S TALK<span className="sr-only"> — contact link awaiting confirmation</span></span>}
    </section>
  );
}
