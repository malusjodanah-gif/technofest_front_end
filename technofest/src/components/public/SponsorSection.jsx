export default function SponsorSection() {
  const sponsors = [
    "Partner Organization",
    "University Partner",
    "Innovation Partner",
    "Community Partner",
  ];

  return (
    <section className="bg-beige-100 py-14">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        <p className="text-sm font-semibold text-gray-600">
          Supported by
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor}
              className="flex h-20 items-center justify-center rounded-xl border border-beige-300 bg-white px-4 text-sm font-semibold text-gray-500"
            >
              {sponsor}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}