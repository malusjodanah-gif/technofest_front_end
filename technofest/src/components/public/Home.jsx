import { Link } from "react-router-dom";

import CategorySection from "./CategorySection";
import FeaturedProjects from "./FeaturedProjects";
import Hero from "./Hero";
import SponsorSection from "./SponsorSection";
import StatsSection from "./StatsSection";

import { PublicLayout } from "../../components/layout";

import { Button } from "../../components/ui";

import { categories } from "../../data/categories";
import { projects } from "../../data/projects";

export default function Home() {
  return (
    <PublicLayout>
      <Hero />

      <StatsSection />

      <FeaturedProjects projects={projects} />

      <CategorySection categories={categories} />

      <section className="bg-maroon-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-bold text-white">
            Have an innovation to share?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-maroon-100">
            Create an account and showcase your project to
            organizations, mentors, and the wider community.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/signup">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Create an account
              </Button>
            </Link>

            <Link to="/explore">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Explore projects
              </Button>
            </Link>
          </div>

        </div>
      </section>

      <SponsorSection />
    </PublicLayout>
  );
}