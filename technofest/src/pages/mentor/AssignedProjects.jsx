import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { projects } from "../../data/projects";

export default function AssignedProjects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Assigned Projects
        </h1>
      </div>

      <Card padding={false} className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
          <thead className="bg-[#E8DCC4]">
            <tr>
              <th className="p-4 text-left">Project</th>
              <th className="p-4 text-left">Student/Team</th>
              <th className="p-4 text-left">Stage</th>
              <th className="p-4 text-left">Last Updated</th>
              <th className="p-4 text-left">Review Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b"
              >
                <td className="p-4 font-medium">
                  {project.title}
                </td>

                <td className="p-4">
                  {project.team.map((member) => (
                    <div key={member.name}>
                      {member.name}
                    </div>
                  ))}
                </td>

                <td className="p-4">
                  <Badge>{project.stage}</Badge>
                </td>

                <td className="p-4">
                  {project.updated}
                </td>

                <td className="p-4">
                  <Badge
                    type={
                      project.status === "approved"
                        ? "success"
                        : "warning"
                    }
                  >
                    {project.status}
                  </Badge>
                </td>

                <td className="p-4">
                  <Button
                    onClick={() =>
                      alert(
                        `Reviewing ${project.title}`
                      )
                    }
                  >
                    Review
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
