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
  ];
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <>
      <div className="project-filter-controls" role="group" aria-label="Filter projects">
        <ul className="filter-list">
          {options.map(({ value, label }) => (
            <li key={value}>
              <button
                type="button"
                aria-pressed={activeFilter === value}
                className={activeFilter === value ? "filter-label filter-label-selected" : "filter-label"}
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
