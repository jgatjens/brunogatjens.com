const labels = ["ALL", "CASE STUDY", "BRAND", "UI/PROPS"];

export function ProjectFilterPreview() {
  return (
    <div className="project-filter-preview">
      <p className="sr-only">Project categories. All projects are shown; filtering is not available yet.</p>
      <ul className="filter-list" aria-label="Project categories">
        {labels.map((label, index) => <li key={label} className={index === 0 ? "filter-label filter-label-selected" : "filter-label"}>{label}</li>)}
      </ul>
    </div>
  );
}
