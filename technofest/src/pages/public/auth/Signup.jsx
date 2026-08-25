import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { PublicLayout } from "../../../components/layout";

import {
  Alert,
  Button,
  Card,
  Input,
  Select,
} from "../../../components/ui";

import { setDemoUser } from "../../../utils/publicStorage";

const roles = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "organization",
    label: "Organization",
  },
  {
    value: "mentor",
    label: "Mentor",
  },
];

export default function Signup() {
  const navigate = useNavigate();

  const [role, setRole] =
    useState("student");

  const [error, setError] =
    useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");

    if (!name || !email || !role) {
      setError(
        "Please complete all required fields."
      );

      return;
    }

    setDemoUser({
      name,
      email,
      role,
    });

    navigate(`/${role}`);
  }

  return (
    <PublicLayout>
      <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">

        <Card>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Join the Innoject innovation community.
            </p>
          </div>

          {error && (
            <Alert
              type="error"
              title="Check your information"
              className="mt-6"
            >
              {error}
            </Alert>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >
            <Select
              label="Account type"
              name="role"
              value={role}
              onChange={(event) =>
                setRole(event.target.value)
              }
              options={roles}
              required
            />

            <Input
              label="Full name"
              name="name"
              placeholder="Your full name"
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            {role === "student" && (
              <>
                <Input
                  label="Institution"
                  name="institution"
                  placeholder="Your institution"
                />

                <Input
                  label="Course"
                  name="course"
                  placeholder="Your programme or course"
                />

                <Input
                  label="Year level"
                  name="year"
                  placeholder="e.g. 2"
                />

                <Input
                  label="Phone number"
                  name="phone"
                  placeholder="Phone number"
                />
              </>
            )}

            {role === "organization" && (
              <>
                <Input
                  label="Company name"
                  name="company"
                  placeholder="Company name"
                />

                <Input
                  label="Employer name"
                  name="employer"
                  placeholder="Employer name"
                />

                <Input
                  label="Role"
                  name="organizationRole"
                  placeholder="HR Manager / Officer"
                />

                <Input
                  label="Address"
                  name="address"
                  placeholder="Organization address"
                />

                <Input
                  label="Work number"
                  name="workNumber"
                  placeholder="Work phone number"
                />
              </>
            )}

            {role === "mentor" && (
              <>
                <Input
                  label="Institution"
                  name="institution"
                  placeholder="Your institution"
                />

                <Input
                  label="Role"
                  name="mentorRole"
                  placeholder="Alumni / Lecturer / Past participant"
                />

                <Input
                  label="Phone number"
                  name="phone"
                  placeholder="Phone number"
                />
              </>
            )}

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-maroon-700 focus:ring-maroon-700"
              />

              <span className="text-sm leading-6 text-gray-600">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-medium text-maroon-700"
                >
                  terms
                </Link>{" "}
                and understand how my information will be
                used.
              </span>
            </label>

            <Button
              type="submit"
              className="w-full"
            >
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-maroon-700"
            >
              Log in
            </Link>
          </p>
        </Card>

      </div>
    </PublicLayout>
  );
}