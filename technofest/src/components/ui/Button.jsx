import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-maroon-700 text-white hover:bg-maroon-800 focus:ring-maroon-300",
  secondary:
    "border border-maroon-700 bg-white text-maroon-700 hover:bg-maroon-50 focus:ring-maroon-300",
  outline:
    "border border-maroon-700 bg-transparent text-maroon-700 hover:bg-maroon-50 focus:ring-maroon-300",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  danger:
    "bg-error-600 text-white hover:bg-error-700 focus:ring-error-300",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  loading = false,
  disabled = false,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}

      {children}
    </button>
  );
}