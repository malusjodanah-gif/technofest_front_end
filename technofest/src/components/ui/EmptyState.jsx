import { Inbox } from "lucide-react";

export default function EmptyState({
  title = "Nothing here yet",
  description = "There is nothing to display at the moment.",
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-beige-100 text-maroon-700">
        <Inbox size={24} />
      </div>

      <h3 className="text-base font-semibold text-gray-900">{title}</h3>

      <p className="mt-1 max-w-md text-sm text-gray-500">
        {description}
      </p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}