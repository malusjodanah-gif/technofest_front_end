import StatCard from "../../components/ui/StatCard";
import PageHeader from "../../components/layout/PageHeader";
import { projects } from "../../data/projects";

export default function OrganizationDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Organization Dashboard"
        description="Discover student projects and connect with emerging talent."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Projects Viewed" value="24" icon="👁️" />
        <StatCard title="Saved Projects" value="8" icon="🔖" />
        <StatCard title="Expressions of Interest" value="5" icon="💼" />
        <StatCard title="Partnerships" value="3" icon="🤝" />
        <StatCard title="Internships" value="4" icon="🎓" />
        <StatCard title="Total Projects" value={projects.length} icon="📊" />
        <StatCard
          title="Approved Projects"
          value={projects.filter((p) => p.status === "approved").length}
          icon="✅"
        />
      </div>
    </div>
  );
}
