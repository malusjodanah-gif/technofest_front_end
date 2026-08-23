import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}) {
  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`relative w-full ${sizes[size]} rounded-xl bg-white shadow-2xl`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2
            id="modal-title"
            className="text-lg font-semibold text-gray-900"
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto p-5">
          {children}
        </div>
      </div>
    </div>
  );
}