"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/content/projects";

type ProjectNavigationProps = {
  projects: readonly Project[];
  availableProjectSlugs: readonly string[];
  activeSlug: string;
};

export function ProjectNavigation({
  projects,
  availableProjectSlugs,
  activeSlug,
}: ProjectNavigationProps) {
  const availableSlugs = new Set(availableProjectSlugs);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: false });

  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setScrollState({
      canScrollLeft: container.scrollLeft > 0,
      canScrollRight: container.scrollLeft + container.clientWidth < container.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const centerActiveTab = () => {
      const list = container.querySelector<HTMLUListElement>("ul");
      if (!window.matchMedia("(max-width: 767px)").matches) {
        if (list) list.style.paddingInline = "";
        return;
      }

      const activeTab = container.querySelector<HTMLElement>('[aria-current="page"]');
      if (!activeTab) return;

      if (list) {
        list.style.paddingInline = `${Math.max(
          0,
          (container.clientWidth - activeTab.getBoundingClientRect().width) / 2,
        )}px`;
      }

      const containerRect = container.getBoundingClientRect();
      const activeTabRect = activeTab.getBoundingClientRect();
      container.scrollLeft +=
        activeTabRect.left - containerRect.left +
        activeTabRect.width / 2 -
        container.clientWidth / 2;
    };
    const handleResize = () => {
      centerActiveTab();
      updateScrollState();
    };

    centerActiveTab();
    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSlug, updateScrollState]);

  const scrollByViewport = (direction: -1 | 1) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * container.clientWidth * 0.75, behavior: "smooth" });
  };

  const navigationItems = (
    <ul className="flex w-max min-w-full gap-0 md:w-full">
      {projects.map((project) => {
        const isActive = project.slug === activeSlug;
        const href = availableSlugs.has(project.slug) ? project.detailHref : undefined;

        return (
          <li key={project.slug} className="min-w-[120px] flex-1 md:min-w-0">
            {href ? (
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                aria-label={project.title}
                className={`relative flex items-center justify-center whitespace-nowrap border-b-2 px-1 pb-3 pt-5 text-[13px] font-normal ${isActive ? "border-foreground" : "border-transparent"} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus`}
              >
                <span className="block w-full min-w-0 truncate text-center">
                  {project.navigationLabel ?? project.cardLabel}
                </span>
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className={`relative flex items-center justify-center whitespace-nowrap border-b-2 px-1 pb-3 pt-5 text-[13px] font-normal ${isActive ? "border-foreground" : "border-transparent"} cursor-default`}
              >
                <span className="block w-full min-w-0 truncate text-center">
                  {project.navigationLabel ?? project.cardLabel}
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav
      aria-label="Project navigation"
      className="sticky top-[77px] z-30 border-b border-divider bg-background lg:top-[65px]"
    >
      <div className="mx-auto flex w-full max-w-page items-center gap-2 px-2 md:block md:px-page-gutter">
        <button
          type="button"
          aria-label="Scroll project navigation left"
          disabled={!scrollState.canScrollLeft}
          onClick={() => scrollByViewport(-1)}
          className="flex size-8 shrink-0 items-center justify-center bg-transparent text-[#22212c] disabled:opacity-40 md:hidden"
        >
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" fill="#F8FAFD" />
            <path d="M11.3329 7.33338H6.27294L8.47294 5.14004C8.59847 5.01451 8.669 4.84424 8.669 4.66671C8.669 4.48917 8.59847 4.31891 8.47294 4.19338C8.3474 4.06784 8.17714 3.99731 7.99961 3.99731C7.82207 3.99731 7.65181 4.06784 7.52627 4.19338L4.19294 7.52671C4.13224 7.59011 4.08467 7.66487 4.05294 7.74671C3.98626 7.90902 3.98626 8.09107 4.05294 8.25338C4.08467 8.33521 4.13224 8.40997 4.19294 8.47338L7.52627 11.8067C7.58825 11.8692 7.66198 11.9188 7.74322 11.9526C7.82446 11.9865 7.9116 12.0039 7.99961 12.0039C8.08761 12.0039 8.17475 11.9865 8.25599 11.9526C8.33723 11.9188 8.41096 11.8692 8.47294 11.8067C8.53542 11.7447 8.58502 11.671 8.61887 11.5898C8.65271 11.5085 8.67014 11.4214 8.67014 11.3334C8.67014 11.2454 8.65271 11.1582 8.61887 11.077C8.58502 10.9958 8.53542 10.922 8.47294 10.86L6.27294 8.66671H11.3329C11.5097 8.66671 11.6793 8.59647 11.8043 8.47145C11.9294 8.34642 11.9996 8.17685 11.9996 8.00004C11.9996 7.82323 11.9294 7.65366 11.8043 7.52864C11.6793 7.40361 11.5097 7.33338 11.3329 7.33338Z" fill="#22212C" />
          </svg>
        </button>
        <div
          ref={scrollContainerRef}
          className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-none md:overflow-visible"
        >
          {navigationItems}
        </div>
        <button
          type="button"
          aria-label="Scroll project navigation right"
          disabled={!scrollState.canScrollRight}
          onClick={() => scrollByViewport(1)}
          className="flex size-8 shrink-0 items-center justify-center bg-transparent text-[#22212c] disabled:opacity-40 md:hidden"
        >
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" fill="#F8FAFD" />
            <path d="M11.9467 7.74671C11.9149 7.66487 11.8674 7.59011 11.8067 7.52671L8.47333 4.19338C8.41117 4.13122 8.33738 4.08191 8.25617 4.04827C8.17495 4.01463 8.08791 3.99731 8 3.99731C7.82247 3.99731 7.6522 4.06784 7.52667 4.19338C7.46451 4.25553 7.4152 4.32933 7.38156 4.41054C7.34792 4.49176 7.33061 4.5788 7.33061 4.66671C7.33061 4.84424 7.40113 5.01451 7.52667 5.14004L9.72667 7.33338H4.66667C4.48986 7.33338 4.32029 7.40361 4.19526 7.52864C4.07024 7.65366 4 7.82323 4 8.00004C4 8.17685 4.07024 8.34642 4.19526 8.47145C4.32029 8.59647 4.48986 8.66671 4.66667 8.66671H9.72667L7.52667 10.86C7.46418 10.922 7.41459 10.9958 7.38074 11.077C7.34689 11.1582 7.32947 11.2454 7.32947 11.3334C7.32947 11.4214 7.34689 11.5085 7.38074 11.5898C7.41459 11.671 7.46418 11.7447 7.52667 11.8067C7.58864 11.8692 7.66238 11.9188 7.74362 11.9526C7.82486 11.9865 7.91199 12.0039 8 12.0039C8.08801 12.0039 8.17515 11.9865 8.25638 11.9526C8.33762 11.9188 8.41136 11.8692 8.47333 11.8067L11.8067 8.47338C11.8674 8.40997 11.9149 8.33521 11.9467 8.25338C12.0133 8.09107 12.0133 7.90902 11.9467 7.74671Z" fill="#22212C" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
