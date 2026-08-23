import {
  ArrowRight,
  Sprout,
  HeartPulse,
  GraduationCap,
  Cpu,
  Leaf,
  BriefcaseBusiness,
  Users,
  MoreHorizontal,
} from "lucide-react";

import { Link } from "react-router-dom";

const iconMap = {
  agriculture: Sprout,
  health: HeartPulse,
  education: GraduationCap,
  technology: Cpu,
  environment: Leaf,
  business: BriefcaseBusiness,
  community: Users,
  other: MoreHorizontal,
};

export default function CategorySection({ categories }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <p className="text-sm font-semibold text-maroon-700">
            Browse by category
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Find innovation that interests you
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon =
              iconMap[category.id] || MoreHorizontal;

            return (
              <Link
                key={category.id}
                to={`/explore?category=${category.id}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-maroon-50 text-maroon-700">
                  <Icon size={22} />
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>

                  <ArrowRight
                    size={17}
                    className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-maroon-700"
                  />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}