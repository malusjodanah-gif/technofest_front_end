import Card from "../../components/ui/Card";

export default function Reports() {
  const categoryData = [
    ["Technology", 25],
    ["Agriculture", 18],
    ["Education", 15],
    ["Health", 12],
  ];

  const stageData = [
    ["Idea", 20],
    ["Prototype", 30],
    ["Development", 25],
    ["Completed", 15],
  ];

  const roleData = [
    ["Students", 180],
    ["Organizations", 32],
    ["Mentors", 14],
    ["Admins", 4],
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#800000]">
        Reports & Analytics
      </h1>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <h2 className="font-semibold">
            Projects by Category
          </h2>

          <div className="mt-4 space-y-3">
            {categoryData.map(([name, value]) => (
              <div key={name}>
                <div className="flex justify-between text-sm">
                  <span>{name}</span>
                  <span>{value}</span>
                </div>

                <div className="mt-1 h-2 rounded bg-gray-200">
                  <div
                    className="h-2 rounded bg-[#800000]"
                    style={{
                      width: `${value * 4}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold">
            Projects by Stage
          </h2>

          <div className="mt-4 space-y-3">
            {stageData.map(([name, value]) => (
              <div
                key={name}
                className="flex justify-between border-b pb-2"
              >
                <span>{name}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold">
            Users by Role
          </h2>

          <div className="mt-4 space-y-3">
            {roleData.map(([name, value]) => (
              <div
                key={name}
                className="flex justify-between border-b pb-2"
              >
                <span>{name}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold">
          Project Approval Rate
        </h2>

        <div className="mt-5">
          <div className="h-5 rounded-full bg-gray-200">
            <div
              className="h-5 rounded-full bg-green-600"
              style={{ width: "78%" }}
            />
          </div>

          <p className="mt-2 text-sm">
            78% of reviewed projects have been approved.
          </p>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">
          Activity
        </h2>

        <ul className="mt-4 space-y-3">
          <li>18 projects submitted this month.</li>
          <li>12 projects approved.</li>
          <li>5 organizations verified.</li>
          <li>3 new mentors registered.</li>
        </ul>
      </Card>
    </div>
  );
}
