import { Navigate, Route, Routes } from "react-router-dom";

import About from "../pages/public/About";
import Login from "../pages/public/auth/Login";
import Signup from "../pages/public/auth/Signup";

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
      {/* PUBLIC */}
      <Route path="/" element={<Placeholder title="Home" />} />
      <Route
        path="/explore"
        element={<Placeholder title="Explore" />}
      />
      <Route
        path="/projects/:id"
        element={<Placeholder title="Project Details" />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/faq"
        element={<Placeholder title="FAQ" />}
      />
      <Route
        path="/contact"
        element={<Placeholder title="Contact" />}
      />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/forgot-password"
        element={<Placeholder title="Forgot Password" />}
      />

      {/* STUDENT */}
      <Route
        path="/student"
        element={<Placeholder title="Student Dashboard" />}
      />
      <Route
        path="/student/projects"
        element={<Placeholder title="Student Projects" />}
      />
      <Route
        path="/student/projects/new"
        element={<Placeholder title="Create Project" />}
      />
      <Route
        path="/student/projects/:id"
        element={<Placeholder title="Student Project" />}
      />
      <Route
        path="/student/projects/:id/edit"
        element={<Placeholder title="Edit Project" />}
      />
      <Route
        path="/student/projects/:id/preview"
        element={<Placeholder title="Project Preview" />}
      />
      <Route
        path="/student/collaboration"
        element={<Placeholder title="Collaboration" />}
      />
      <Route
        path="/student/mentors"
        element={<Placeholder title="Mentors" />}
      />
      <Route
        path="/student/notifications"
        element={<Placeholder title="Notifications" />}
      />
      <Route
        path="/student/profile"
        element={<Placeholder title="Student Profile" />}
      />

      {/* ORGANIZATION */}
      <Route
        path="/organization"
        element={<Placeholder title="Organization Dashboard" />}
      />
      <Route
        path="/organization/projects"
        element={<Placeholder title="Organization Projects" />}
      />
      <Route
        path="/organization/saved"
        element={<Placeholder title="Saved Projects" />}
      />
      <Route
        path="/organization/internships"
        element={<Placeholder title="Internships" />}
      />
      <Route
        path="/organization/partnerships"
        element={<Placeholder title="Partnerships" />}
      />
      <Route
        path="/organization/profile"
        element={<Placeholder title="Organization Profile" />}
      />

      {/* MENTOR */}
      <Route
        path="/mentor"
        element={<Placeholder title="Mentor Dashboard" />}
      />
      <Route
        path="/mentor/projects"
        element={<Placeholder title="Assigned Projects" />}
      />
      <Route
        path="/mentor/projects/:id"
        element={<Placeholder title="Review Project" />}
      />
      <Route
        path="/mentor/profile"
        element={<Placeholder title="Mentor Profile" />}
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={<Placeholder title="Admin Dashboard" />}
      />
      <Route
        path="/admin/submissions"
        element={<Placeholder title="Submissions" />}
      />
      <Route
        path="/admin/users"
        element={<Placeholder title="Users" />}
      />
      <Route
        path="/admin/organizations"
        element={<Placeholder title="Organizations" />}
      />
      <Route
        path="/admin/mentors"
        element={<Placeholder title="Mentors" />}
      />
      <Route
        path="/admin/categories"
        element={<Placeholder title="Categories" />}
      />
      <Route
        path="/admin/reports"
        element={<Placeholder title="Reports" />}
      />
      <Route
        path="/admin/settings"
        element={<Placeholder title="Settings" />}
      />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}