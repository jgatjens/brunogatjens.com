import { MainNavigation } from "./MainNavigation";
import Link from "next/link";
import Image from "next/image";
import { PageContainer } from "./PageContainer";

export function Header() {
  return (
    <header className="border-b border-divider">
      <PageContainer className="flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-4 py-4">
        <Link href="/" className="flex items-center gap-6 text-sm font-semibold lg:ml-header-inset lg:text-header"><Image src="/images/avatar-me.png" alt="" width={64} height={64} sizes="32px" className="size-8 shrink-0" /><span>Bruno Gätjens</span></Link>
        <MainNavigation />
      </PageContainer>
    </header>
  );
}
