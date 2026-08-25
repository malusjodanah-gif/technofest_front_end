import { ArrowRight, Bell, FolderKanban, Plus, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";

const stats = [
  { label: "Submitted projects", count: 2, tone: "text-maroon-700", icon: FolderKanban },
  { label: "Draft projects", count: 1, tone: "text-amber-700", icon: FolderKanban },
  { label: "Under review", count: 1, tone: "text-sky-700", icon: Bell },
  { label: "Approved projects", count: 1, tone: "text-emerald-700", icon: Users },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-maroon-700">Student workspace</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Welcome back, Kingsley</h1>
          <p className="mt-2 text-gray-600">Keep your ideas moving toward the Innoject 2026 showcase.</p>
        </div>
        <button type="button" onClick={() => navigate("/student/projects/new")} className="inline-flex items-center gap-2 rounded-lg bg-maroon-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-maroon-800"><Plus size={17} />Create project</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, count, tone, icon: Icon }) => (
          <Card key={label} className="flex items-center justify-between border-gray-200">
            <div><p className="text-sm font-medium text-gray-500">{label}</p><p className={`mt-2 text-3xl font-bold ${tone}`}>{count}</p></div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-beige-200 text-maroon-800"><Icon size={19} /></div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <div className="flex items-center justify-between gap-3"><div><h2 className="text-lg font-semibold text-gray-900">Latest updates</h2><p className="mt-1 text-sm text-gray-500">Stay close to your project momentum.</p></div><Link to="/student/notifications" className="text-sm font-semibold text-maroon-700">View all</Link></div>
          <div className="mt-5 space-y-3">
            {["Mentor requested changes on Solar Micro-Grid", "PNG Hydropower Optimization was approved", "Draft saved for Solar Micro-Grid"].map((text, index) => <div key={text} className="flex gap-3 rounded-lg bg-beige-100 p-3"><span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${index === 1 ? "bg-emerald-600" : "bg-maroon-700"}`} /><p className="text-sm text-gray-700">{text}</p></div>)}
          </div>
        </Card>
        <Card className="border-maroon-100 bg-maroon-50/40">
          <h2 className="text-lg font-semibold text-gray-900">Keep building</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">Open your projects to update milestones, review mentor feedback, or find a collaborator.</p>
          <div className="mt-5 space-y-2"><Link to="/student/projects" className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5 text-sm font-semibold text-maroon-800">Open my projects <ArrowRight size={16} /></Link><Link to="/student/collaboration" className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5 text-sm font-semibold text-maroon-800">Find collaborators <ArrowRight size={16} /></Link></div>
        </Card>
      </div>
    </div>
  );
}
