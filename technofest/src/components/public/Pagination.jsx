import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "../ui/Button";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft size={16} />
        Previous
      </Button>

      <span className="text-sm text-gray-500">
        Page {page} of {totalPages}
      </span>

      <Button
        variant="outline"
        size="sm"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}