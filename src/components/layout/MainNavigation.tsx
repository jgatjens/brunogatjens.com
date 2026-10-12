"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import UilFileDownloadAlt from "@iconscout/react-unicons/icons/uil-file-download-alt";
import UilEstate from "@iconscout/react-unicons/icons/uil-estate";
import UilUserSquare from "@iconscout/react-unicons/icons/uil-user-square";

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="ml-auto flex shrink-0 flex-nowrap items-center gap-x-4 text-base font-semibold lg:ml-0 lg:mr-header-inset lg:gap-x-10">
      {[
        { href: "/", label: "Home", Icon: UilEstate },
        { href: "/info", label: "Info", Icon: UilUserSquare },
      ].map(({ href, label, Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`relative flex size-11 items-center justify-center leading-[21px] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:bg-[#9580FF] max-[360px]:size-8 lg:size-auto lg:justify-start lg:after:bottom-auto lg:after:left-0 lg:after:top-[22.5px] lg:after:w-full lg:after:translate-x-0 ${isActive ? "text-[#9580FF] after:content-['']" : "after:content-none"}`}
          >
            <Icon size={24} color="#22212C" aria-hidden="true" focusable="false" className="lg:hidden" />
            <span className="sr-only lg:not-sr-only">{label}</span>
          </Link>
        );
      })}
      <a
        href="https://drive.google.com/open?id=1m9q1cGma0pVq_xxAVRi0VOL3H94wVb-3&usp=drive_fs"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex size-11 items-center justify-center leading-[21px] hover:underline max-[360px]:size-8 lg:size-auto lg:justify-start"
        aria-label="Resume"
      >
        <UilFileDownloadAlt size={24} color="#22212C" aria-hidden="true" focusable="false" className="lg:hidden" />
        <span
          aria-hidden="true"
          className="hidden size-6 shrink-0 bg-current [mask-image:url('/images/download-file-24-outline.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] lg:inline-block"
        />
        <span className="sr-only lg:not-sr-only">Resume</span>
      </a>
    </nav>
  );
}
