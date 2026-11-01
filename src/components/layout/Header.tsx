import { MainNavigation } from "./MainNavigation";
import Link from "next/link";
import Image from "next/image";
import { PageContainer } from "./PageContainer";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-background">
      <PageContainer className="flex min-h-16 flex-nowrap items-center justify-between gap-x-0 px-5 py-4 max-md:!px-5 max-[360px]:!px-2 xl:max-w-[1280px] xl:!px-[130px]">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-sm font-normal md:gap-6 md:text-base">
          <Image src="/images/avatar-me.png" alt="" width={64} height={64} sizes="(min-width: 768px) 32px, 48px" className="size-12 shrink-0 rounded-full md:size-8" />
          <span className="hidden md:inline">Bruno Gätjens</span>
        </Link>
        <MainNavigation />
      </PageContainer>
    </header>
  );
}
