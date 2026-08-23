import { useState } from "react";
import { Link } from "react-router-dom";

import { PublicLayout } from "../../../components/layout";

import {
  Alert,
  Button,
  Card,
  Input,
} from "../../../components/ui";

export default function ForgotPassword() {
  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <PublicLayout>
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6">

        <Card>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Forgot your password?
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter your email address and we'll help you
              reset your password.
            </p>
          </div>

          {submitted && (
            <Alert
              type="success"
              title="Request received"
              className="mt-6"
            >
              In the completed application, a password reset
              email would be sent here.
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

            <Button
              type="submit"
              className="w-full"
            >
              Send Reset Link
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-semibold text-maroon-700"
            >
              Back to login
            </Link>
          </div>
        </Card>

      </div>
    </PublicLayout>
  );
}