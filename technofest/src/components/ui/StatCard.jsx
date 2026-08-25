import Card from "./Card";

export default function StatCard({ title, value, icon }) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
      </div>

      <span className="text-2xl" aria-hidden="true">
        {icon}
      </span>
    </Card>
  );
}