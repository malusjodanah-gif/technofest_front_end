import Card from "./Card";

export default function StatCard({ title, value, description, icon }) {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center text-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-[#800000]">
            {value}
          </h3>

          {description && (
            <p className="mt-1 text-xs text-gray-500">
              {description}
            </p>
          )}
        </div>

        {icon && (
          <div className="text-2xl">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
