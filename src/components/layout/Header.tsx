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
          <a href="https://drive.google.com/open?id=1m9q1cGma0pVq_xxAVRi0VOL3H94wVb-3&usp=drive_fs" className="resume-link"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17H6a4 4 0 0 1-1-7.9A7 7 0 0 1 18 8a4.5 4.5 0 0 1 0 9h-1M12 11v10m-4-4 4 4 4-4" /></svg>Resume</a>
        </nav>
      </PageContainer>
    </header>
  );
}
