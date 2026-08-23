import { FolderKanban, GraduationCap, Handshake, Users } from "lucide-react";

const stats = [
  {
    label: "Student Projects",
    value: "100+",
    icon: FolderKanban,
  },
  {
    label: "Student Innovators",
    value: "250+",
    icon: GraduationCap,
  },
  {
    label: "Organizations",
    value: "30+",
    icon: Handshake,
  },
  {
    label: "Mentors",
    value: "50+",
    icon: Users,
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex items-center gap-3 border-gray-200 px-4 py-4 lg:justify-center lg:border-r last:border-r-0"
            >
              <Icon
                size={24}
                className="shrink-0 text-maroon-700"
              />

              <div>
                <p className="text-xl font-bold text-gray-900">
                  {stat.value}
                </p>

                <p className="text-xs text-gray-500">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}