import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import ProjectImage from "./ProjectImage";
import ProjectStatus from "./ProjectStatus";

export default function ProjectCard({ project }) {
  return (
    <Card hover padding={false} className="overflow-hidden">
      <ProjectImage
        src={project.image}
        alt={`${project.title} project`}
        className="h-48 w-full"
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <Badge variant="primary">{project.category}</Badge>

          <ProjectStatus status={project.status} />
        </div>

        <h3 className="mt-4 line-clamp-2 text-lg font-semibold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
          {project.summary}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
          <Users size={15} />

          <span>
            {project.team?.length || 0} team member
            {project.team?.length === 1 ? "" : "s"}
          </span>

          <span>•</span>

          <span>{project.stage}</span>
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-maroon-700 hover:text-maroon-900"
        >
          View project
          <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  );
}