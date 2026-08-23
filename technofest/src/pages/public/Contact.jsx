import { useState } from "react";

import { Mail, MapPin, Phone } from "lucide-react";

import { PublicLayout } from "../../components/layout";

import {
  Alert,
  Button,
  Card,
  Input,
  PageHeader,
  Textarea,
} from "../../components/ui";

export default function Contact() {
  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <PublicLayout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <PageHeader
          title="Contact Technofest"
          description="Have a question or need help? Send us a message."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="space-y-4">

            <Card>
              <Mail
                size={22}
                className="text-maroon-700"
              />

              <h2 className="mt-4 font-semibold text-gray-900">
                Email
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                hello@technofest.example
              </p>
            </Card>

            <Card>
              <Phone
                size={22}
                className="text-maroon-700"
              />

              <h2 className="mt-4 font-semibold text-gray-900">
                Phone
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Contact information to be added.
              </p>
            </Card>

            <Card>
              <MapPin
                size={22}
                className="text-maroon-700"
              />

              <h2 className="mt-4 font-semibold text-gray-900">
                Location
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Papua New Guinea
              </p>
            </Card>

          </div>

          <Card className="lg:col-span-2">
            {submitted && (
              <Alert
                type="success"
                title="Message received"
                className="mb-6"
              >
                Your message has been recorded in this frontend
                prototype.
              </Alert>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  required
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <Input
                label="Subject"
                name="subject"
                placeholder="What can we help with?"
                required
              />

              <Textarea
                label="Message"
                name="message"
                placeholder="Write your message..."
                rows={6}
                required
              />

              <div className="flex justify-end">
                <Button type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>

        </div>
      </div>
    </PublicLayout>
  );
}