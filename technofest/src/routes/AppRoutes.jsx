import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/public/Home";
import Explore from "../pages/public/Explore";
import ProjectDetailsPage from "../pages/public/ProjectDetailsPage";
import About from "../pages/public/About";
import FAQ from "../pages/public/FAQ";
import Contact from "../pages/public/Contact";
import Privacy from "../pages/public/Privacy";
import Terms from "../pages/public/Terms";

import Login from "../pages/public/auth/Login";
import Signup from "../pages/public/auth/Signup";
import ForgotPassword from "../pages/public/auth/ForgotPassword";


function Placeholder({ title }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <p className="text-sm font-medium text-maroon-700">
          Technofest
        </p>

        <h1 className="mt-2 text-2xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          This page will be implemented by the assigned collaborator.
        </p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>

      {/* =========================
          PERSON 1 — PUBLIC
          ========================= */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/explore"
        element={<Explore />}
      />

      <Route
        path="/projects/:id"
        element={<ProjectDetailsPage />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/faq"
        element={<FAQ />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/privacy"
        element={<Privacy />}
      />

      <Route
        path="/terms"
        element={<Terms />}
      />

      {/* =========================
          PERSON 1 — AUTH
          ========================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* =========================
          PERSON 2 — STUDENT
          Keep placeholders for now
          ========================= */}

      <Route
        path="/student"
        element={
          <Placeholder title="Student Dashboard" />
        }
      />

      <Route
        path="/student/projects"
        element={
          <Placeholder title="Student Projects" />
        }
      />

      <Route
        path="/student/projects/new"
        element={
          <Placeholder title="Create Project" />
        }
      />

      <Route
        path="/student/projects/:id"
        element={
          <Placeholder title="Student Project" />
        }
      />

      <Route
        path="/student/projects/:id/edit"
        element={
          <Placeholder title="Edit Project" />
        }
      />

      <Route
        path="/student/collaboration"
        element={
          <Placeholder title="Collaboration" />
        }
      />

      <Route
        path="/student/mentors"
        element={
          <Placeholder title="Mentors" />
        }
      />

      <Route
        path="/student/notifications"
        element={
          <Placeholder title="Notifications" />
        }
      />

      <Route
        path="/student/profile"
        element={
          <Placeholder title="Student Profile" />
        }
      />

      {/* =========================
          PERSON 2 — ORGANIZATION
          ========================= */}

      <Route
        path="/organization"
        element={
          <Placeholder title="Organization Dashboard" />
        }
      />

      <Route
        path="/organization/projects"
        element={
          <Placeholder title="Organization Projects" />
        }
      />

      <Route
        path="/organization/saved"
        element={
          <Placeholder title="Saved Projects" />
        }
      />

      <Route
        path="/organization/internships"
        element={
          <Placeholder title="Internships" />
        }
      />

      <Route
        path="/organization/partnerships"
        element={
          <Placeholder title="Partnerships" />
        }
      />

      <Route
        path="/organization/profile"
        element={
          <Placeholder title="Organization Profile" />
        }
      />

      {/* =========================
          PERSON 3 — MENTOR
          ========================= */}

      <Route
        path="/mentor"
        element={
          <Placeholder title="Mentor Dashboard" />
        }
      />

      <Route
        path="/mentor/projects"
        element={
          <Placeholder title="Assigned Projects" />
        }
      />

      <Route
        path="/mentor/projects/:id"
        element={
          <Placeholder title="Review Project" />
        }
      />

      <Route
        path="/mentor/profile"
        element={
          <Placeholder title="Mentor Profile" />
        }
      />

      {/* =========================
          PERSON 3 — ADMIN
          ========================= */}

      <Route
        path="/admin"
        element={
          <Placeholder title="Admin Dashboard" />
        }
      />

      <Route
        path="/admin/submissions"
        element={
          <Placeholder title="Submissions" />
        }
      />

      <Route
        path="/admin/users"
        element={
          <Placeholder title="Users" />
        }
      />

      <Route
        path="/admin/organizations"
        element={
          <Placeholder title="Organizations" />
        }
      />

      <Route
        path="/admin/mentors"
        element={
          <Placeholder title="Mentors" />
        }
      />

      <Route
        path="/admin/categories"
        element={
          <Placeholder title="Categories" />
        }
      />

      <Route
        path="/admin/reports"
        element={
          <Placeholder title="Reports" />
        }
      />

      <Route
        path="/admin/settings"
        element={
          <Placeholder title="Settings" />
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

function Placeholder({ title }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <p className="text-sm font-medium text-maroon-700">
          Technofest
        </p>

        <h1 className="mt-2 text-2xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          This page will be implemented by another
          collaborator.
        </p>
      </div>
    </div>
  );
}