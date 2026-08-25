import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { PublicLayout } from "../../../components/layout";

import {
  Alert,
  Button,
  Card,
  Input,
} from "../../../components/ui";

import { setDemoUser } from "../../../utils/publicStorage";

export default function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setDemoUser({
      name: email.split("@")[0],
      email,
      role: "student",
    });

    navigate("/student");
  }

  return (
    <PublicLayout>
      <div className="mx-auto flex max-w-md px-4 py-16 sm:px-6">

        <Card className="w-full">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-maroon-700 font-bold text-white">
              T
            </div>

            <h1 className="mt-5 text-2xl font-bold text-gray-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Log in to your Innoject account.
            </p>
          </div>

          {error && (
            <Alert
              type="error"
              title="Unable to log in"
              className="mt-6"
            >
              {error}
            </Alert>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-5"
          >
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-maroon-700 hover:text-maroon-900"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
            >
              Log in
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-maroon-700"
            >
              Create one
            </Link>
          </p>
        </Card>

      </div>
    </PublicLayout>
  );
}