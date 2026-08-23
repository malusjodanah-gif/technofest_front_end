import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { internships } from "../../data/internships";

export default function Internships() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Internships
        </h1>
        <p className="text-gray-500">
          Find opportunities for student talent.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {internships.map((internship) => (
          <Card key={internship.id}>
            <h2 className="text-xl font-semibold">
              {internship.organization}
            </h2>

            <p className="mt-3">
              <strong>Description:</strong>{" "}
              {internship.description}
            </p>

            <p className="mt-3">
              <strong>Requirements:</strong>{" "}
              {internship.requirements}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Deadline: {internship.deadline}
            </p>

            <Button
              className="mt-5"
              onClick={() =>
                alert("Internship details opened")
              }
            >
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
