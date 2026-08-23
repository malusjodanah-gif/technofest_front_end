import { Link } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function Login() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-maroon-700">
            Welcome back
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Log in</h1>
        </div>

        <form className="space-y-5">
          <Input label="Email" name="email" type="email" placeholder="you@example.com" />
          <Input label="Password" name="password" type="password" placeholder="••••••••" />

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-maroon-700 focus:ring-maroon-500" />
              Remember me
            </label>

            <Link to="/forgot-password" className="font-medium text-maroon-700 hover:text-maroon-900">
              Forgot password?
            </Link>
          </div>

          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold text-maroon-700 hover:text-maroon-900">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
