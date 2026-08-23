import StatCard from "../../components/ui/StatCard";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/layout/PageHeader";
import { projects } from "../../data/projects";

export default function MentorDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Mentor Dashboard"
        description="Monitor and support your assigned projects."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Assigned Projects"
          value="5"
          icon="📁"
        />

        <StatCard
          title="Pending Reviews"
          value="2"
          icon="📝"
        />

        <StatCard
          title="Feedback Awaiting Response"
          value="3"
          icon="💬"
        />

        <StatCard
          title="Mentoring Progress"
          value="78%"
          icon="📈"
        />
      </div>

      <Card>
        <h2 className="mb-4 text-xl font-semibold">
          Recent Activity
        </h2>

        {projects.map((project) => (
          <div
            key={project.id}
            className="border-b py-3 last:border-0"
          >
            <p className="font-medium">
              {project.title}
            </p>

            <p className="text-sm text-gray-500">
              Last updated {project.updated}
            </p>
          </div>
        ))}
      </Card>
    </div>
  );
}
