import { ResumeIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { PageContainer } from "./PageContainer";

export function Header() {
  return (
    <header className="border-b border-divider">
      <PageContainer className="flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-4 py-4">
        <Link href="/" className="flex items-center gap-6 text-sm font-semibold lg:ml-header-inset lg:text-header"><Image src="/images/avatar-me.png" alt="" width={64} height={64} sizes="32px" className="size-8 shrink-0" /><span>Bruno Gätjens</span></Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold md:gap-x-8 lg:mr-header-inset lg:text-header">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/info" className="hover:underline">Info</Link>
          <a href="https://drive.google.com/open?id=1m9q1cGma0pVq_xxAVRi0VOL3H94wVb-3&usp=drive_fs" className="inline-flex items-center gap-2 hover:underline"><ResumeIcon className="size-5" />Resume</a>
        </nav>
      </PageContainer>
    </header>
  );
}
