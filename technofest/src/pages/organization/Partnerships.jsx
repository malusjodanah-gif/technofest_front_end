import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { partnerships } from "../../data/partnerships";

export default function Partnerships() {
  const groups = {
    Active: partnerships.filter((p) => p.status === "Active"),
    Pending: partnerships.filter((p) => p.status === "Pending"),
    Completed: partnerships.filter(
      (p) => p.status === "Completed"
    ),
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Partnerships
        </h1>
      </div>

      {Object.entries(groups).map(([status, items]) => (
        <section key={status}>
          <h2 className="mb-3 text-xl font-semibold">
            {status} Partnerships
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {items.map((partnership) => (
              <Card key={partnership.id}>
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    {partnership.organization}
                  </h3>

                  <Badge
                    type={
                      status === "Active"
                        ? "success"
                        : status === "Pending"
                        ? "warning"
                        : "default"
                    }
                  >
                    {status}
                  </Badge>
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  Project: {partnership.project}
                </p>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
