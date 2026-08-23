import { useMemo, useState } from "react";
import { projects } from "../../data/projects";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function ExploreProjects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [stage, setStage] = useState("All");
  const [saved, setSaved] = useState([]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.summary.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || project.category === category;

      const matchesStage =
        stage === "All" || project.stage === stage;

      return matchesSearch && matchesCategory && matchesStage;
    });
  }, [search, category, stage]);

  const toggleSave = (id) => {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Explore Projects
        </h1>
        <p className="text-gray-500">
          Discover innovative student projects.
        </p>
      </div>

      <Card>
        <div className="grid gap-4 md:grid-cols-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="rounded-lg border px-4 py-2"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border px-4 py-2"
          >
            <option>All</option>
            <option>Agriculture</option>
            <option>Health</option>
            <option>Education</option>
            <option>Technology</option>
          </select>

          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="rounded-lg border px-4 py-2"
          >
            <option>All</option>
            <option>Idea</option>
            <option>Prototype</option>
            <option>Development</option>
          </select>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id}>
            <div className="mb-4 flex items-start justify-between">
              <Badge type="info">{project.category}</Badge>
              <Badge>{project.stage}</Badge>
            </div>

            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {project.summary}
            </p>

            <p className="mt-3 text-sm">
              <strong>Impact:</strong> {project.impact}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => toggleSave(project.id)}
              >
                {saved.includes(project.id)
                  ? "Saved"
                  : "Save"}
              </Button>

              <Button
                onClick={() =>
                  alert(
                    `Expression of interest sent for ${project.title}`
                  )
                }
              >
                Express Interest
              </Button>

              <Button
                variant="secondary"
                onClick={() =>
                  alert(`Contacting team for ${project.title}`)
                }
              >
                Contact
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
