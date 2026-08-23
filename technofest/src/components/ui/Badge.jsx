import { cn } from "../../utils/cn";

const variants = {
  default: "bg-gray-100 text-gray-700",
  primary: "bg-maroon-100 text-maroon-800",
  success: "bg-success-100 text-success-700",
  warning: "bg-warning-100 text-warning-700",
  error: "bg-error-100 text-error-700",
  info: "bg-info-100 text-info-700",
};

export default function Badge({
  children,
  variant = "default",
  className,
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}