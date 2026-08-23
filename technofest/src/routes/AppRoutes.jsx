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

import DashboardLayout from "../components/layout/DashboardLayout";
import {
  adminNavigation,
  mentorNavigation,
  organizationNavigation,
} from "../constants/navigation";

import OrganizationDashboard from "../pages/organization/Dashboard";
import ExploreProjects from "../pages/organization/ExploreProjects";
import SavedProjects from "../pages/organization/SavedProjects";
import OrganizationProfile from "../pages/organization/Profile";
import Internships from "../pages/organization/Internships";
import Partnerships from "../pages/organization/Partnerships";

import MentorDashboard from "../pages/mentor/Dashboard";
import AssignedProjects from "../pages/mentor/AssignedProjects";
import MentorProfile from "../pages/mentor/Profile";

import AdminDashboard from "../pages/admin/Dashboard";
import Submissions from "../pages/admin/Submissions";
import Users from "../pages/admin/Users";
import Organizations from "../pages/admin/Organizations";
import Mentors from "../pages/admin/Mentors";
import Categories from "../pages/admin/Categories";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";

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

      <Route path="/" element={<Home />} />

      <Route path="/explore" element={<Explore />} />

      <Route
        path="/projects/:id"
        element={<ProjectDetailsPage />}
      />

      <Route path="/about" element={<About />} />

      <Route path="/faq" element={<FAQ />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/privacy" element={<Privacy />} />

      <Route path="/terms" element={<Terms />} />

      {/* =========================
          PERSON 1 — AUTH
          ========================= */}

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

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
        element={<Placeholder title="Create Project" />}
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
        element={<Placeholder title="Mentors" />}
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
          <DashboardLayout
            sidebarItems={organizationNavigation}
            user={{ name: "Organization", role: "Organization" }}
          >
            <OrganizationDashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/organization/projects"
        element={
          <DashboardLayout
            sidebarItems={organizationNavigation}
            user={{ name: "Organization", role: "Organization" }}
          >
            <ExploreProjects />
          </DashboardLayout>
        }
      />

      <Route
        path="/organization/saved"
        element={
          <DashboardLayout
            sidebarItems={organizationNavigation}
            user={{ name: "Organization", role: "Organization" }}
          >
            <SavedProjects />
          </DashboardLayout>
        }
      />

      <Route
        path="/organization/internships"
        element={
          <DashboardLayout
            sidebarItems={organizationNavigation}
            user={{ name: "Organization", role: "Organization" }}
          >
            <Internships />
          </DashboardLayout>
        }
      />

      <Route
        path="/organization/partnerships"
        element={
          <DashboardLayout
            sidebarItems={organizationNavigation}
            user={{ name: "Organization", role: "Organization" }}
          >
            <Partnerships />
          </DashboardLayout>
        }
      />

      <Route
        path="/organization/profile"
        element={
          <DashboardLayout
            sidebarItems={organizationNavigation}
            user={{ name: "Organization", role: "Organization" }}
          >
            <OrganizationProfile />
          </DashboardLayout>
        }
      />

      {/* =========================
          PERSON 3 — MENTOR
          ========================= */}

      <Route
        path="/mentor"
        element={
          <DashboardLayout
            sidebarItems={mentorNavigation}
            user={{ name: "Mentor", role: "Mentor" }}
          >
            <MentorDashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/mentor/projects"
        element={
          <DashboardLayout
            sidebarItems={mentorNavigation}
            user={{ name: "Mentor", role: "Mentor" }}
          >
            <AssignedProjects />
          </DashboardLayout>
        }
      />

      <Route
        path="/mentor/projects/:id"
        element={<Placeholder title="Review Project" />}
      />

      <Route
        path="/mentor/profile"
        element={
          <DashboardLayout
            sidebarItems={mentorNavigation}
            user={{ name: "Mentor", role: "Mentor" }}
          >
            <MentorProfile />
          </DashboardLayout>
        }
      />

      {/* =========================
          PERSON 3 — ADMIN
          ========================= */}

      <Route
        path="/admin"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <AdminDashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/admin/submissions"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <Submissions />
          </DashboardLayout>
        }
      />

      <Route
        path="/admin/users"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <Users />
          </DashboardLayout>
        }
      />

      <Route
        path="/admin/organizations"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <Organizations />
          </DashboardLayout>
        }
      />

      <Route
        path="/admin/mentors"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <Mentors />
          </DashboardLayout>
        }
      />

      <Route
        path="/admin/categories"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <Categories />
          </DashboardLayout>
        }
      />

      <Route
        path="/admin/reports"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <Reports />
          </DashboardLayout>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <Settings />
          </DashboardLayout>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
