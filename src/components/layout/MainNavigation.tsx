"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ResumeIcon } from "@/components/icons";

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold md:gap-x-8 lg:mr-header-inset lg:text-header">
      {[{ href: "/", label: "Home" }, { href: "/info", label: "Info" }].map(({ href, label }) => (
        <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}
          className={`decoration-1 underline-offset-2 hover:underline ${pathname === href ? "underline" : ""}`}>
          {label}
        </Link>
      ))}
      <a href="https://drive.google.com/open?id=1m9q1cGma0pVq_xxAVRi0VOL3H94wVb-3&usp=drive_fs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><ResumeIcon className="size-5" />Resume</a>
    </nav>
  );
}
