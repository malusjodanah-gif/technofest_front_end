import { PublicLayout } from "../../components/layout";

export default function Privacy() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        <h1 className="text-3xl font-bold text-gray-900">
          Privacy
        </h1>

        <div className="mt-8 space-y-8 text-sm leading-7 text-gray-600">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Your information
            </h2>

            <p className="mt-2">
              Innoject is designed to give users clear
              information about how their account and project
              information is used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Project visibility
            </h2>

            <p className="mt-2">
              Students should be able to control which contact
              information is publicly visible.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Project ownership
            </h2>

            <p className="mt-2">
              Project ownership, submission dates, and relevant
              declarations should be clearly communicated.
            </p>
          </section>

        </div>
      </div>
    </PublicLayout>
  );
}