import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { mentors } from "../../data/mentors";

export default function Mentors() {
  const [selected, setSelected] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#800000]">
        Mentors
      </h1>

      <div className="grid gap-5 md:grid-cols-2">
        {mentors.map((mentor) => (
          <Card key={mentor.id}>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">
                {mentor.name}
              </h2>

              <Badge type="success">
                {mentor.availability}
              </Badge>
            </div>

            <p className="mt-3">
              Institution: {mentor.institution}
            </p>

            <p>Role: {mentor.role}</p>

            <p>Email: {mentor.email}</p>

            <p className="mt-2">
              Assigned Projects:{" "}
              {mentor.assignedProjects}
            </p>

            <div className="mt-5">
              <select
                value={selected}
                onChange={(e) =>
                  setSelected(e.target.value)
                }
                className="w-full rounded-lg border px-3 py-2"
              >
                <option value="">
                  Select project
                </option>
                <option value="Smart Agriculture System">
                  Smart Agriculture System
                </option>
                <option value="EduConnect">
                  EduConnect
                </option>
                <option value="HealthConnect PNG">
                  HealthConnect PNG
                </option>
              </select>

              <Button
                className="mt-3"
                onClick={() =>
                  alert(
                    `${selected || "Project"} assigned to ${mentor.name}`
                  )
                }
              >
                Assign Mentor
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
