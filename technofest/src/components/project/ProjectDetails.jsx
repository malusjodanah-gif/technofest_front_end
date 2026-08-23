import { FileText, Users } from "lucide-react";

import Badge from "../ui/Badge";
import Card from "../ui/Card";
import ProjectImage from "./ProjectImage";
import ProjectStatus from "./ProjectStatus";

export default function ProjectDetails({
  project,
  actions,
}) {
  if (!project) return null;

  return (
    <div className="space-y-6">
      <Card padding={false} className="overflow-hidden">
        <ProjectImage
          src={project.image}
          alt={`${project.title} project`}
          className="h-64 w-full sm:h-80 lg:h-96"
        />

        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">{project.category}</Badge>

            <ProjectStatus status={project.status} />

            <Badge>{project.stage}</Badge>
          </div>

          <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            {project.title}
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            {project.summary}
          </p>

          {actions && (
            <div className="mt-6 flex flex-wrap gap-3">
              {actions}
            </div>
          )}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <h2 className="text-lg font-semibold text-gray-900">
              The Problem
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              {project.problem}
            </p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-gray-900">
              The Solution
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              {project.solution}
            </p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-gray-900">
              Expected Impact
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              {project.impact}
            </p>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-2">
              <Users size={19} className="text-maroon-700" />

              <h2 className="font-semibold text-gray-900">
                Team
              </h2>
            </div>

            <div className="mt-4 space-y-4">
              {project.team?.map((member) => (
                <div key={member.name}>
                  <p className="text-sm font-medium text-gray-900">
                    {member.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {member.programme} • Year {member.year}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {project.documents?.length > 0 && (
            <Card>
              <div className="flex items-center gap-2">
                <FileText
                  size={19}
                  className="text-maroon-700"
                />

                <h2 className="font-semibold text-gray-900">
                  Documents
                </h2>
              </div>

              <div className="mt-4 space-y-2">
                {project.documents.map((document) => (
                  <a
                    key={document.name}
                    href={document.url}
                    className="block rounded-lg bg-gray-50 p-3 text-sm text-maroon-700 hover:bg-maroon-50"
                  >
                    {document.name}
                  </a>
                ))}
              </div>
            </Card>
          )}

          {project.mentor && (
            <Card>
              <h2 className="font-semibold text-gray-900">
                Mentor
              </h2>

              <p className="mt-3 text-sm font-medium text-gray-900">
                {project.mentor.name}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {project.mentor.role}
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}