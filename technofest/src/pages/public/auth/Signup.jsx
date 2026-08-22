import { Link } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function Signup() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-maroon-700">
            Create account
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Sign up</h1>
        </div>

        <form className="space-y-5">
          <Input label="Full name" name="fullName" type="text" placeholder="Jane Doe" />
          <Input label="Email" name="email" type="email" placeholder="you@example.com" />
          <Input label="Password" name="password" type="password" placeholder="Create a password" />

          <Button className="w-full" type="submit">
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-maroon-700 hover:text-maroon-900">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
