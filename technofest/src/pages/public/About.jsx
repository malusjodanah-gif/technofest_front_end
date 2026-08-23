import {
  Eye,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

import { PublicLayout } from "../../components/layout";

import { PageHeader } from "../../components/layout";
import { Card } from "../../components/ui";

const values = [
  {
    title: "Student Innovation",
    description:
      "Create a place where student ideas can be discovered and appreciated.",
    icon: Lightbulb,
  },
  {
    title: "Opportunity",
    description:
      "Help students connect their projects with mentors, organizations, and opportunities.",
    icon: Target,
  },
  {
    title: "Community",
    description:
      "Build connections between innovators, mentors, institutions, and organizations.",
    icon: Users,
  },
  {
    title: "Visibility",
    description:
      "Give student projects a public space where their work and impact can be understood.",
    icon: Eye,
  },
];

export default function About() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <PageHeader
          title="About Technofest"
          description="A digital platform for showcasing student innovation."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Turning student ideas into visible opportunities
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Technofest is designed to help student innovators
              showcase their projects and connect with people
              who can help them grow.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              The platform brings students, organizations,
              mentors, administrators, and visitors together
              around student innovation.
            </p>
          </div>

          <div className="rounded-2xl bg-beige-100 p-8">
            <p className="text-sm font-semibold text-maroon-700">
              Our purpose
            </p>

            <p className="mt-4 text-2xl font-bold leading-tight text-gray-900">
              Make student innovation easier to discover,
              understand, and support.
            </p>
          </div>

        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">
            What we value
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Card key={value.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-maroon-50 text-maroon-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-semibold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </PublicLayout>
  );
}