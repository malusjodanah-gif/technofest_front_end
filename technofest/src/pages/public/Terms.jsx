import { PublicLayout } from "../../components/layout";

export default function Terms() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        <h1 className="text-3xl font-bold text-gray-900">
          Terms of Use
        </h1>

        <div className="mt-8 space-y-8 text-sm leading-7 text-gray-600">

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Accurate information
            </h2>

            <p className="mt-2">
              Users are responsible for ensuring that submitted
              information is accurate and appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Project content
            </h2>

            <p className="mt-2">
              Users should only submit projects and materials
              that they have the right to share.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Moderation
            </h2>

            <p className="mt-2">
              Submitted projects may be reviewed and moderated
              before approval.
            </p>
          </section>

        </div>
      </div>
    </PublicLayout>
  );
}