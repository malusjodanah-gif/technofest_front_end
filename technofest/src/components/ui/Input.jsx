import { cn } from "../../utils/cn";

export default function Input({
  label,
  error,
  hint,
  required = false,
  id,
  className,
  ...props
}) {
  const inputId = id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
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

      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
        }
        className={cn(
          "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900",
          "placeholder:text-gray-400",
          "transition-colors",
          "focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-100",
          error
            ? "border-error-500 focus:border-error-600 focus:ring-error-100"
            : "border-gray-300",
          "disabled:cursor-not-allowed disabled:bg-gray-100",
          className
        )}
        {...props}
      />

      {hint && !error && (
        <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-gray-500">
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 text-xs text-error-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}