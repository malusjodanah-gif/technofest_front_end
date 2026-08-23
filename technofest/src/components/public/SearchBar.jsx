import { Search, X } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Search projects...",
}) {
  return (
    <div className="relative">
      <Search
        size={19}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-11 text-sm focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-100"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}