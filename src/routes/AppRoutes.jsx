import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dashboard from '../pages/student/Dashboard';
import Projects from '../pages/student/Projects';
import CreateProject from '../pages/student/CreateProject';
import ProjectPreview from '../pages/student/ProjectPreview';
import Collaboration from '../pages/student/Collaboration';
import MentorFeedback from '../pages/student/MentorFeedback';
import StudentProfile from '../pages/student/StudentProfile';

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/student" element={<Dashboard />} />
        <Route path="/student/projects" element={<Projects />} />
        <Route path="/student/projects/new" element={<CreateProject />} />
        <Route path="/student/projects/preview" element={<ProjectPreview />} />
        <Route path="/student/collaboration" element={<Collaboration />} />
        <Route path="/student/feedback" element={<MentorFeedback />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="*" element={<Navigate to="/student" replace />} />
      </Routes>
    </>
  );
}