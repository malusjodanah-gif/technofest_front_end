import {
  CheckCircle2,
  Info,
  TriangleAlert,
  XCircle,
} from "lucide-react";

import { cn } from "../../utils/cn";

const config = {
  success: {
    icon: CheckCircle2,
    classes: "border-success-200 bg-success-50 text-success-700",
  },
  error: {
    icon: XCircle,
    classes: "border-error-200 bg-error-50 text-error-700",
  },
  warning: {
    icon: TriangleAlert,
    classes: "border-warning-200 bg-warning-50 text-warning-700",
  },
  info: {
    icon: Info,
    classes: "border-info-200 bg-info-50 text-info-700",
  },
};

export default function Alert({
  type = "info",
  title,
  children,
  className,
}) {
  const { icon: Icon, classes } = config[type];

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4",
        classes,
        className
      )}
      role="alert"
    >
      <Icon size={20} className="mt-0.5 shrink-0" />

      <div>
        {title && (
          <h4 className="font-semibold">{title}</h4>
        )}

        {children && (
          <div className="mt-1 text-sm">{children}</div>
        )}
      </div>
    </div>
  );
}