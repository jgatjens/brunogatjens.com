"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/content/projects";

type ProjectNavigationProps = {
  projects: readonly Project[];
  activeSlug: string;
};

export function ProjectNavigation({ projects, activeSlug }: ProjectNavigationProps) {
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

    const centerActiveTab = (behavior: ScrollBehavior) => {
      if (!window.matchMedia("(max-width: 767px)").matches) return;
      const list = container.querySelector<HTMLUListElement>("ul");
      if (list) list.style.paddingInline = "";

      const activeTab = container.querySelector<HTMLElement>('[aria-current="page"]');
      if (!activeTab) return;

      const containerRect = container.getBoundingClientRect();
      const activeTabRect = activeTab.getBoundingClientRect();
      const nextScrollLeft = container.scrollLeft +
        activeTabRect.left - containerRect.left +
        activeTabRect.width / 2 -
        container.clientWidth / 2;
      container.scrollTo({ left: Math.max(0, nextScrollLeft), behavior });
    };
    const handleResize = () => {
      centerActiveTab("auto");
      updateScrollState();
    };

    centerActiveTab(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");
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

  return (
    <nav aria-label="Project navigation" className="min-w-0 px-2 pb-3 md:px-6 md:pb-4">
      <div className="relative min-w-0 md:block">
        <button
          type="button"
          aria-label="Scroll project navigation left"
          disabled={!scrollState.canScrollLeft}
          onClick={() => scrollByViewport(-1)}
          className="absolute left-0 top-1/2 z-10 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-nav-arrow transition-opacity disabled:opacity-40 md:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="w-full min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-x-auto"
        >
          <ul className="flex w-max min-w-full gap-2 pl-4 md:w-full md:min-w-0 md:justify-between md:gap-1 md:px-0">
            {projects.map((project) => {
              const isActive = project.slug === activeSlug;
              const label = project.navigationLabel ?? project.cardLabel;

              return (
                <li key={project.slug} className="flex-none md:min-w-0 md:flex-1">
                  {project.detailHref ? (
                    <Link
                      href={project.detailHref}
                      aria-current={isActive ? "page" : undefined}
                      aria-label={project.title}
                      className={`flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2 text-sm font-normal leading-normal transition-colors md:px-3 ${
                        isActive
                          ? "bg-nav-active text-nav-active-foreground"
                          : "hover:bg-hover focus-visible:bg-hover"
                      }`}
                    >
                      <span className="block min-w-0 truncate text-center">{label}</span>
                    </Link>
                  ) : (
                    <span
                      aria-disabled="true"
                      className={`flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2 text-sm font-normal leading-normal ${
                        isActive ? "bg-nav-active text-nav-active-foreground" : "cursor-default"
                      }`}
                    >
                      <span className="block min-w-0 truncate text-center">{label}</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          type="button"
          aria-label="Scroll project navigation right"
          disabled={!scrollState.canScrollRight}
          onClick={() => scrollByViewport(1)}
          className="absolute right-0 top-1/2 z-10 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-nav-arrow transition-opacity disabled:opacity-40 md:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
