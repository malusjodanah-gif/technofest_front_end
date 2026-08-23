import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { projects } from "../../data/projects";

export default function SavedProjects() {
  const savedProjects = projects.slice(0, 2);

  return (
    <div className="space-y-6 text-center">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Saved Projects
        </h1>
        <p className="text-gray-500">
          Projects your organization wants to revisit.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {savedProjects.map((project) => (
          <Card key={project.id}>
            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {project.summary}
            </p>

            <div className="mt-5 flex justify-center gap-2">
              <Button
                onClick={() =>
                  alert(`Opening ${project.title}`)
                }
              >
                View Project
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  alert(`${project.title} removed`)
                }
              >
                Remove
              </Button>

              <Button
                variant="secondary"
                onClick={() =>
                  alert("Expression of interest submitted")
                }
              >
                Express Interest
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
