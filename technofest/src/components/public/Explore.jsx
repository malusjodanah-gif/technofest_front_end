import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { PublicLayout } from "../../components/layout";
import { PageHeader } from "../../components/layout";

import Pagination from "./Pagination";
import ProjectCard from "../project/ProjectCard";
import ProjectFilters from "./ProjectFilters";
import ProjectSort from "./ProjectSort";
import SearchBar from "./SearchBar";

import Button from "../ui/Button";
import EmptyState from "../ui/EmptyState";

import { projects } from "../../data/projects";

export default function Explore() {
  const [searchParams] = useSearchParams();

  const initialCategory =
    searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState(initialCategory);
  const [stage, setStage] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const pageSize = 6;

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    const query = search.toLowerCase().trim();

    if (query) {
      result = result.filter((project) => {
        return (
          project.title.toLowerCase().includes(query) ||
          project.summary.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tags?.some((tag) =>
            tag.toLowerCase().includes(query)
          )
        );
      });
    }

    if (category) {
      result = result.filter(
        (project) =>
          project.category.toLowerCase() ===
          category.toLowerCase()
      );
    }

    if (stage) {
      result = result.filter(
        (project) => project.stage.toLowerCase() === stage
      );
    }

    if (sort === "title") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sort === "oldest") {
      result.reverse();
    }

    return result;
  }, [search, category, stage, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / pageSize)
  );

  const visibleProjects = filteredProjects.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  function updateSearch(value) {
    setSearch(value);
    setPage(1);
  }

  function updateCategory(value) {
    setCategory(value);
    setPage(1);
  }

  function updateStage(value) {
    setStage(value);
    setPage(1);
  }

  function updateSort(value) {
    setSort(value);
    setPage(1);
  }

  return (
    <PublicLayout>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <PageHeader
            title="Explore Innovations"
            description="Discover projects created by student innovators."
          />

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

            <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-base font-semibold text-gray-900">
                Find a project
              </h2>

              <div className="mt-5 space-y-5">
                <SearchBar
                  value={search}
                  onChange={updateSearch}
                  onClear={() => updateSearch("")}
                />

                <ProjectFilters
                  category={category}
                  stage={stage}
                  onCategoryChange={updateCategory}
                  onStageChange={updateStage}
                />

                <ProjectSort
                  value={sort}
                  onChange={updateSort}
                />

                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setSearch("");
                    setCategory("");
                    setStage("");
                    setSort("newest");
                    setPage(1);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            </aside>

            <section>
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {filteredProjects.length} project
                  {filteredProjects.length === 1 ? "" : "s"} found
                </p>
              </div>

              {visibleProjects.length > 0 ? (
                <>
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>

                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                  />
                </>
              ) : (
                <EmptyState
                  title="No projects found"
                  description="Try changing your search or filters."
                  action={
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearch("");
                        setCategory("");
                        setStage("");
                      }}
                    >
                      Clear filters
                    </Button>
                  }
                />
              )}
            </section>

          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
