import { Select } from "../ui";

export default function ProjectSort({ value, onChange }) {
  const options = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "title", label: "Title" },
  ];

  return (
    <div>
      <Select
        label="Sort by"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        options={options}
      />
    </div>
  );
}