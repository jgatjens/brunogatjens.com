import { ResumeIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { PageContainer } from "./PageContainer";

export function Header() {
  return (
    <header className="site-header">
      <PageContainer className="header-content">
        <Link href="/" className="site-identity"><Image src="/images/avatar-me.png" alt="" width={64} height={64} sizes="32px" className="size-8 shrink-0" /><span>Bruno Gätjens</span></Link>
        <nav aria-label="Main navigation" className="header-nav">
          <Link href="/">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/info">Info</Link>
          <a href="https://drive.google.com/open?id=1m9q1cGma0pVq_xxAVRi0VOL3H94wVb-3&usp=drive_fs" className="resume-link"><ResumeIcon />Resume</a>
        </nav>
      </PageContainer>
    </header>
  );
}
