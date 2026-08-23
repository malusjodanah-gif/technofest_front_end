import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../components/public/Home";
import Explore from "../components/public/Explore";
import Navbar from "../components/layout/Navbar";
import Login from "../pages/public/auth/Login";
import Signup from "../pages/public/auth/Signup";
import Collaboration from "../pages/student/Collaboration";
import CreateProject from "../pages/student/CreateProject";
import Dashboard from "../pages/student/Dashboard";
import Mentors from "../pages/student/Mentors";
import ProjectPreview from "../pages/student/ProjectPreview";
import Projects from "../pages/student/Projects";
import Profile from "../pages/student/Profile";

function Placeholder({ title }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <p className="text-sm font-medium text-maroon-700">Technofest</p>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-500">
          This page will be implemented by the assigned collaborator.
        </p>
      </div>
    </div>
  );
}

function StudentPage({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/projects/:id" element={<Placeholder title="Project Details" />} />
      <Route path="/about" element={<Placeholder title="About" />} />
      <Route path="/faq" element={<Placeholder title="FAQ" />} />
      <Route path="/contact" element={<Placeholder title="Contact" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<Placeholder title="Forgot Password" />} />

      <Route path="/student" element={<StudentPage><Dashboard /></StudentPage>} />
      <Route path="/student/projects" element={<StudentPage><Projects /></StudentPage>} />
      <Route path="/student/projects/new" element={<StudentPage><CreateProject /></StudentPage>} />
      <Route path="/student/projects/preview" element={<StudentPage><ProjectPreview /></StudentPage>} />
      <Route path="/student/projects/:id" element={<Placeholder title="Student Project" />} />
      <Route path="/student/projects/:id/edit" element={<Placeholder title="Edit Project" />} />
      <Route path="/student/collaboration" element={<StudentPage><Collaboration /></StudentPage>} />
      <Route path="/student/mentors" element={<StudentPage><Mentors /></StudentPage>} />
      <Route path="/student/notifications" element={<Placeholder title="Notifications" />} />
      <Route path="/student/profile" element={<StudentPage><Profile /></StudentPage>} />

      <Route path="/organization" element={<Placeholder title="Organization Dashboard" />} />
      <Route path="/organization/projects" element={<Placeholder title="Organization Projects" />} />
      <Route path="/organization/saved" element={<Placeholder title="Saved Projects" />} />
      <Route path="/organization/internships" element={<Placeholder title="Internships" />} />
      <Route path="/organization/partnerships" element={<Placeholder title="Partnerships" />} />
      <Route path="/organization/profile" element={<Placeholder title="Organization Profile" />} />

      <Route path="/mentor" element={<Placeholder title="Mentor Dashboard" />} />
      <Route path="/mentor/projects" element={<Placeholder title="Assigned Projects" />} />
      <Route path="/mentor/projects/:id" element={<Placeholder title="Review Project" />} />
      <Route path="/mentor/profile" element={<Placeholder title="Mentor Profile" />} />

      <Route path="/admin" element={<Placeholder title="Admin Dashboard" />} />
      <Route path="/admin/submissions" element={<Placeholder title="Submissions" />} />
      <Route path="/admin/users" element={<Placeholder title="Users" />} />
      <Route path="/admin/organizations" element={<Placeholder title="Organizations" />} />
      <Route path="/admin/mentors" element={<Placeholder title="Mentors" />} />
      <Route path="/admin/categories" element={<Placeholder title="Categories" />} />
      <Route path="/admin/reports" element={<Placeholder title="Reports" />} />
      <Route path="/admin/settings" element={<Placeholder title="Settings" />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
