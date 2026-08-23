import { Link } from "react-router-dom";

import ProjectGrid from "../project/ProjectGrid";
import Button from "../ui/Button";

export default function FeaturedProjects({ projects }) {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-maroon-700">
              Featured Innovations
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Explore student ideas
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Discover projects and innovations developed by
              students.
            </p>
          </div>

          <Link to="/explore">
            <Button variant="outline">
              View all projects
            </Button>
          </Link>
        </div>

        <ProjectGrid projects={featured} />
      </div>
    </section>
  );
}