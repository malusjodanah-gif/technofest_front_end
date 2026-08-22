import Badge from "../ui/Badge";

const statusMap = {
  draft: {
    label: "Draft",
    variant: "default",
  },
  pending: {
    label: "Pending Review",
    variant: "warning",
  },
  approved: {
    label: "Approved",
    variant: "success",
  },
  changes_requested: {
    label: "Changes Requested",
    variant: "warning",
  },
  rejected: {
    label: "Rejected",
    variant: "error",
  },
};

export default function ProjectStatus({ status }) {
  const config = statusMap[status] || statusMap.draft;

  return (
    <Badge variant={config.variant}>
      {config.label}
    </Badge>
  );
}