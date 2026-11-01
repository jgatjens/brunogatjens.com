"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/content/projects";
import { ProjectGrid } from "./ProjectGrid";

type ProjectFilterProps = {
  projects: readonly Project[];
  categoryLabels: Record<ProjectCategory, string>;
};

export function ProjectFilter({ projects, categoryLabels }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");
  const options: { value: "all" | ProjectCategory; label: string }[] = [
    { value: "all", label: "ALL" },
    { value: "case-study", label: categoryLabels["case-study"] },
    { value: "brand", label: categoryLabels.brand },
    { value: "ui-props", label: categoryLabels["ui-props"] },
    { value: "2d-art", label: categoryLabels["2d-art"] },
  ];
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <>
      <div className="mb-filter-grid" role="group" aria-label="Filter projects">
        <ul className="flex flex-wrap justify-center gap-2.5">
          {options.map(({ value, label }) => (
            <li key={value}>
              <button
                type="button"
                aria-pressed={activeFilter === value}
                className={`min-h-filter-target cursor-pointer rounded-full border px-3 py-2 text-sm leading-tight hover:border-transparent hover:bg-[#e8ecf3] focus-visible:border-transparent focus-visible:bg-[#e8ecf3] md:text-base lg:min-h-filter-target-desktop lg:text-filter-desktop ${activeFilter === value ? "project-filter-active border-transparent" : "border-[#cdcdcd] bg-transparent"}`}
                onClick={() => setActiveFilter(value)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="sr-only" role="status" aria-atomic="true">
        {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"} shown.
      </p>
      {visibleProjects.length > 0
        ? <ProjectGrid projects={visibleProjects} />
        : <p className="py-6 text-muted">No projects in this category yet.</p>}
    </>
  );
}
