import EmptyState from "../ui/EmptyState";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
  projects = [],
  emptyTitle = "No projects found",
  emptyDescription = "Try changing your search or filters.",
}) {
  if (projects.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}