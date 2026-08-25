import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/student" },
    { label: "My Projects", path: "/student/projects" },
    { label: "Create Project", path: "/student/projects/new" },
    { label: "Preview", path: "/student/projects/preview" },
    { label: "Collaboration", path: "/student/collaboration" },
    { label: "Feedback", path: "/student/feedback" },
    { label: "Profile", path: "/student/profile" },
  ];

  return (
    <nav style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155", padding: "12px 24px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
      <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "16px", marginRight: "12px" }}>
        Innoject <span style={{ color: "#800000" }}>Student</span>
      </span>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            style={{
              color: isActive ? "#ffffff" : "#94a3b8",
              backgroundColor: isActive ? "#800000" : "transparent",
              padding: "6px 12px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: isActive ? "bold" : "normal",
              transition: "all 0.2s",
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}