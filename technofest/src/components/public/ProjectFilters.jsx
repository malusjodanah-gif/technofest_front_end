import { Select } from "../ui";

export default function ProjectFilters({
  category,
  stage,
  onCategoryChange,
  onStageChange,
}) {
  const categories = [
    { value: "agriculture", label: "Agriculture" },
    { value: "health", label: "Health" },
    { value: "education", label: "Education" },
    { value: "technology", label: "Technology" },
    { value: "environment", label: "Environment" },
    { value: "business", label: "Business" },
    { value: "community", label: "Community" },
  ];

  const stages = [
    { value: "idea", label: "Idea" },
    { value: "prototype", label: "Prototype" },
    { value: "tested", label: "Tested" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Select
        label="Category"
        value={category}
        onChange={(event) =>
          onCategoryChange(event.target.value)
        }
        options={categories}
      />

      <Select
        label="Project stage"
        value={stage}
        onChange={(event) =>
          onStageChange(event.target.value)
        }
        options={stages}
      />
    </div>
  );
}