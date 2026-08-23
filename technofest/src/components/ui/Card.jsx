import { cn } from "../../utils/cn";

export default function Card({
  children,
  className,
  padding = true,
  hover = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white shadow-card",
        padding && "p-5",
        hover && "transition-shadow duration-200 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}