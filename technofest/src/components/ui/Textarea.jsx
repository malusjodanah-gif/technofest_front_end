import { cn } from "../../utils/cn";

export default function Textarea({
  label,
  error,
  hint,
  required = false,
  id,
  className,
  rows = 4,
  ...props
}) {
  const textareaId = id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="mb-1.5 block text-sm font-medium text-gray-800"
        >
          {label}
          {required && (
            <span className="ml-1 text-error-600" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <textarea
        id={textareaId}
        rows={rows}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full resize-y rounded-lg border bg-white px-3.5 py-2.5 text-sm",
          "placeholder:text-gray-400",
          "focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-100",
          error ? "border-error-500" : "border-gray-300",
          "disabled:cursor-not-allowed disabled:bg-gray-100",
          className
        )}
        {...props}
      />

      {hint && !error && (
        <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
      )}

      {error && (
        <p className="mt-1.5 text-xs text-error-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}