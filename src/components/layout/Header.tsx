import { MainNavigation } from "./MainNavigation";
import Link from "next/link";
import Image from "next/image";
import { PageContainer } from "./PageContainer";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-background">
      <PageContainer className="flex min-h-16 flex-nowrap items-center justify-between gap-x-0 py-4 max-[360px]:px-2 lg:gap-x-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-[14px] font-semibold lg:ml-header-inset lg:gap-6 lg:text-header"><Image src="/images/avatar-me.png" alt="" width={64} height={64} sizes="32px" className="size-8 shrink-0" /><span>Bruno Gätjens</span></Link>
        <MainNavigation />
      </PageContainer>
    </header>
  );
}
