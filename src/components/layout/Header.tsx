import { MainNavigation } from "./MainNavigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 h-20 w-full px-2 pt-2 md:h-[88px] md:px-4 md:pt-4">
      <MainNavigation />
    </header>
  );
}
