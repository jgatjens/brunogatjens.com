"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import UilEstate from "@iconscout/react-unicons/icons/uil-estate";
import UilPhone from "@iconscout/react-unicons/icons/uil-phone";
import UilUserSquare from "@iconscout/react-unicons/icons/uil-user-square";
import { projects } from "@/content/projects";
import { scheduleCallUrl } from "@/content/links";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";

const colorThemeStorageKey = "bruno-portfolio-color-theme";
type ColorTheme = "light" | "dark";

function getFirstProjectHref() {
  const href = projects[0]?.detailHref;
  if (!href) throw new Error("The first project must have a detail URL for Work navigation.");
  return href;
}

const firstProjectHref = getFirstProjectHref();

function subscribeToColorTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-color-theme"],
  });
  return () => observer.disconnect();
}

function getColorThemeSnapshot(): ColorTheme {
  const savedTheme = document.documentElement.dataset.colorTheme;
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return document.querySelector('[data-project-theme="dark"]') ? "dark" : "light";
}

function getServerColorThemeSnapshot(): ColorTheme {
  return "light";
}

export function MainNavigation() {
  const pathname = usePathname();
  const theme = useSyncExternalStore(
    subscribeToColorTheme,
    getColorThemeSnapshot,
    getServerColorThemeSnapshot,
  );
  const activeProject = projects.find((project) => project.detailHref === pathname);
  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.dataset.colorTheme = nextTheme;

    try {
      window.localStorage.setItem(colorThemeStorageKey, nextTheme);
    } catch (error) {
      console.error("Unable to save the color theme preference.", error);
    }
  };

  const links = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
      icon: <UilEstate size={24} color="currentColor" aria-hidden="true" focusable="false" className="lg:hidden" />,
    },
    {
      href: firstProjectHref,
      label: "Work",
      active: pathname.startsWith("/projects/"),
      icon: (
        <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:hidden">
          <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
      icon: <UilUserSquare size={24} color="currentColor" aria-hidden="true" focusable="false" className="lg:hidden" />,
    },
  ];

  return (
    <div
      className={`site-menu glass-style mx-auto w-full max-w-[1280px] ${activeProject ? "site-menu--open" : ""}`}
    >
      <div className="flex h-[70px] items-center justify-between gap-2 px-4 py-[11px] max-[360px]:gap-0 sm:px-5 md:px-6 md:py-[11px]">
        <Link
          href="/"
          aria-label="Bruno Gätjens home"
          className="flex shrink-0 items-center gap-2 text-sm font-normal md:gap-6 md:text-base"
        >
          <Image
            src="/images/avatar-me.png"
            alt=""
            width={96}
            height={96}
            sizes="(min-width: 768px) 32px, 48px"
            className="size-12 shrink-0 rounded-full max-[360px]:size-11 md:size-8"
          />
          <span className="hidden md:inline">Bruno Gätjens</span>
        </Link>

        <nav aria-label="Main navigation" className="ml-auto flex shrink-0 items-center gap-1 max-[360px]:gap-0 sm:gap-2 lg:gap-6">
          {links.map(({ href, label, active, icon }) => (
            <Link
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex size-12 shrink-0 items-center justify-center rounded-full px-0 text-base font-normal leading-[21px] transition-colors max-[360px]:size-11 lg:h-auto lg:w-auto lg:px-4 lg:py-2 ${
                active
                  ? isDark
                    ? "bg-[#1764d8] text-white"
                    : "bg-[#e1edff] text-[#22212c]"
                  : "hover:bg-hover focus-visible:bg-hover"
              }`}
            >
              {icon}
              <span className="sr-only lg:not-sr-only">{label}</span>
            </Link>
          ))}

          <a
            href={scheduleCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Let's Talk (opens in a new tab)"
            className="flex size-12 shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-0 text-white transition-opacity hover:opacity-90 focus-visible:outline-offset-2 max-[360px]:size-11 lg:h-auto lg:w-auto lg:px-5 lg:py-2"
          >
            <UilPhone size={24} color="currentColor" aria-hidden="true" focusable="false" />
            <span className="sr-only whitespace-nowrap font-semibold lg:not-sr-only">Let&apos;s Talk</span>
          </a>

          <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="flex size-12 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-hover focus-visible:bg-hover max-[360px]:size-11 md:size-10"
          >
            {isDark ? (
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      <div
        aria-hidden={!activeProject}
        inert={!activeProject}
        className={`site-menu-submenu ${activeProject ? "site-menu-submenu--open" : ""}`}
      >
        <div className="site-menu-submenu-content">
          <ProjectNavigation projects={projects} activeSlug={activeProject?.slug ?? ""} />
        </div>
      </div>
    </div>
  );
}
