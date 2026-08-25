import { useState } from "react";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { organizations } from "../../data/organizations";

export default function Organizations() {
  const [data, setData] = useState(organizations);

  const updateVerification = (id, value) => {
    setData(
      data.map((org) =>
        org.id === id
          ? { ...org, verification: value }
          : org
      )
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#800000]">
        Organizations
      </h1>

      <div className="grid gap-5 md:grid-cols-2">
        {data.map((org) => (
          <div
            key={org.id}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">
                {org.name}
              </h2>

              <Badge
                type={
                  org.verification === "Verified"
                    ? "success"
                    : "warning"
                }
              >
                {org.verification}
              </Badge>
            </div>

            <p className="mt-3 text-gray-600">
              Industry: {org.industry}
            </p>

            <p className="text-gray-600">
              Email: {org.email}
            </p>

            <div className="mt-5 flex gap-2">
              <Button
                onClick={() =>
                  alert(`Viewing ${org.name}`)
                }
              >
                View Details
              </Button>

              <Button
                variant="success"
                onClick={() =>
                  updateVerification(
                    org.id,
                    "Verified"
                  )
                }
              >
                Approve
              </Button>

              <Button
                variant="danger"
                onClick={() =>
                  updateVerification(
                    org.id,
                    "Rejected"
                  )
                }
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
