import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../components/public/Home";
import Explore from "../components/public/Explore";
import Login from "../pages/public/auth/Login";
import Signup from "../pages/public/auth/Signup";
import Collaboration from "../pages/student/Collaboration";
import CreateProject from "../pages/student/CreateProject";
import Dashboard from "../pages/student/Dashboard";
import Mentors from "../pages/student/Mentors";
import ProjectPreview from "../pages/student/ProjectPreview";
import Projects from "../pages/student/Projects";
import Profile from "../pages/student/Profile";

import OrganizationDashboard from "../pages/organization/Dashboard";
import ExploreProjects from "../pages/organization/ExploreProjects";
import SavedProjects from "../pages/organization/SavedProjects";
import OrganizationProfile from "../pages/organization/Profile";
import Internships from "../pages/organization/Internships";
import Partnerships from "../pages/organization/Partnerships";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  adminNavigation,
  mentorNavigation,
  organizationNavigation,
  studentNavigation,
} from "../constants/navigation";
import MentorDashboard from "../pages/mentor/Dashboard";
import AssignedProjects from "../pages/mentor/AssignedProjects";
import MentorProfile from "../pages/mentor/Profile";
import AdminDashboard from "../pages/admin/Dashboard";
import Submissions from "../pages/admin/Submissions";
import Users from "../pages/admin/Users";
import AdminMentors from "../pages/admin/Mentors";
import Categories from "../pages/admin/Categories";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
import Notifications from "../pages/shared/Notifications";
import WorkspacePage from "../pages/shared/WorkspacePage";
import StudentNotifications from "../pages/student/Notifications";
import PublicLayout from "../components/layout/PublicLayout";

function StudentPage({ children }) {
  return (
    <DashboardLayout
      sidebarItems={studentNavigation}
      user={{ name: "Student", role: "Student" }}
      className="student-workspace"
    >
      {children}
    </DashboardLayout>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/projects/:id" element={<PublicLayout><WorkspacePage title="Project details" description="Review the project story, progress, and ways to connect with its team." items={[{ title: "Project overview", description: "Project details are ready to review as the team develops its next milestone." }, { title: "Get involved", description: "Explore the project and contact the team from the project workspace." }]} links={[{ label: "Explore projects", to: "/explore" }]} /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><WorkspacePage title="About Innoject" description="Digital Platform for Showcasing Student Innovation." items={[{ title: "Student innovation", description: "Students turn practical ideas into projects with measurable impact." }, { title: "Community support", description: "Mentors and organizations help teams refine, validate, and launch their work." }]} links={[{ label: "Explore projects", to: "/explore" }, { label: "Contact the team", to: "/contact" }]} /></PublicLayout>} />
      <Route path="/faq" element={<PublicLayout><WorkspacePage title="Help center" description="Find your way around the Innoject platform." items={[{ title: "Projects", description: "Use Explore to discover projects, then open a project to learn more." }, { title: "Your account", description: "Your dashboard contains your projects, profile, collaborations, and notifications." }, { title: "Need more help?", description: "The support team can help with account and submission questions." }]} links={[{ label: "Contact support", to: "/contact" }]} /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><WorkspacePage title="Contact us" description="Reach the Innoject team for platform and event support." items={[{ title: "Platform support", description: "For sign-in, profile, or submission questions, contact support@innoject.example." }, { title: "Event enquiries", description: "For event details and partnerships, contact events@innoject.example." }]} links={[{ label: "Read FAQs", to: "/faq" }]} /></PublicLayout>} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<WorkspacePage title="Reset your password" description="Password reset instructions will be sent to your account email." items={[{ title: "Check your inbox", description: "Submit the reset form from the login page and follow the secure link in your email." }]} links={[{ label: "Back to login", to: "/login" }]} />} />

      <Route path="/student" element={<StudentPage><Dashboard /></StudentPage>} />
      <Route path="/student/projects" element={<StudentPage><Projects /></StudentPage>} />
      <Route path="/student/projects/new" element={<StudentPage><CreateProject /></StudentPage>} />
      <Route path="/student/projects/preview" element={<StudentPage><ProjectPreview /></StudentPage>} />
      <Route path="/student/projects/:id" element={<StudentPage><WorkspacePage title="Project workspace" description="Track progress, feedback, and next steps for this project." items={[{ title: "Project progress", description: "Your project milestones and review status will appear here." }, { title: "Mentor feedback", description: "Keep feedback and requested changes together while you prepare the next submission." }]} links={[{ label: "View my projects", to: "/student/projects" }, { label: "Open notifications", to: "/student/notifications" }]} /></StudentPage>} />
      <Route path="/student/projects/:id/edit" element={<StudentPage><CreateProject /></StudentPage>} />
      <Route path="/student/collaboration" element={<StudentPage><Collaboration /></StudentPage>} />
      <Route path="/student/mentors" element={<StudentPage><Mentors /></StudentPage>} />
      <Route path="/student/notifications" element={<StudentPage><StudentNotifications /></StudentPage>} />
      <Route path="/student/profile" element={<StudentPage><Profile /></StudentPage>} />

      {/* ORGANIZATION */}
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
      <Route path="/organization/notifications" element={<DashboardLayout sidebarItems={organizationNavigation} user={{ name: "Organization", role: "Organization" }}><Notifications role="organization" /></DashboardLayout>} />

      {/* MENTOR */}
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
        element={<DashboardLayout sidebarItems={mentorNavigation} user={{ name: "Mentor", role: "Mentor" }}><WorkspacePage title="Project review" description="Review the assigned project and leave clear next steps for its team." items={[{ title: "Review checklist", description: "Assess the project brief, evidence, impact, and readiness for the next stage." }, { title: "Feedback", description: "Your review notes will be shared with the project team." }]} links={[{ label: "Back to assigned projects", to: "/mentor/projects" }]} /></DashboardLayout>}
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
      <Route path="/mentor/notifications" element={<DashboardLayout sidebarItems={mentorNavigation} user={{ name: "Mentor", role: "Mentor" }}><Notifications role="mentor" /></DashboardLayout>} />

      {/* ADMIN */}
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
        element={<DashboardLayout sidebarItems={adminNavigation} user={{ name: "Admin", role: "Admin" }}><WorkspacePage title="Organizations" description="Review participating organizations and partnership activity." items={[{ title: "32 organizations", description: "Manage verification status and participation across the event." }, { title: "Verification queue", description: "Review organization profiles before they connect with student teams." }]} links={[{ label: "Open notifications", to: "/admin/notifications" }]} /></DashboardLayout>}
      />
      <Route
        path="/admin/mentors"
        element={
          <DashboardLayout
            sidebarItems={adminNavigation}
            user={{ name: "Admin", role: "Admin" }}
          >
            <AdminMentors />
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
      <Route path="/admin/notifications" element={<DashboardLayout sidebarItems={adminNavigation} user={{ name: "Admin", role: "Admin" }}><Notifications role="admin" /></DashboardLayout>} />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
/*
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
      {// =========================
          PERSON 1 — PUBLIC
          ========================= }

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

      {// =========================
          PERSON 1 — AUTH
          ========================= }

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {// =========================
          PERSON 2 — STUDENT
          Keep placeholders for now
          ========================= }

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

      {// =========================
          PERSON 2 — ORGANIZATION
          ========================= }

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

      {// =========================
          PERSON 3 — MENTOR
          ========================= }

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

      {// =========================
          PERSON 3 — ADMIN
          ========================= }

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
*/