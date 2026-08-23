import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "Submitted Projects", count: 2, color: "#3b82f6" },
    { label: "Draft Projects", count: 1, color: "#f59e0b" },
    { label: "Under Review", count: 1, color: "#8b5cf6" },
    { label: "Approved Projects", count: 1, color: "#10b981" },
  ];

  const recentActivities = [
    { text: "Submitted 'PNG Hydropower Optimization' for review", time: "2 hours ago" },
    { text: "Assigned Dr. Alex Narobi as Project Mentor", time: "1 day ago" },
    { text: "Saved draft for 'Solar Micro-Grid'", time: "3 days ago" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", padding: "32px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>Welcome Back, Kingsley 👋</h1>
            <p style={{ color: "#94a3b8", marginTop: "4px" }}>TechnoFest 2026 Student Workstation</p>
          </div>
          <button 
            onClick={() => navigate("/student/projects/new")}
            style={{ backgroundColor: "#800000", color: "#ffffff", border: "none", padding: "10px 18px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
          >
            + Create New Project
          </button>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "32px" }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ backgroundColor: "#1e293b", padding: "20px", borderRadius: "8px", border: "1px solid #334155", textAlign: "center" }}>
              <p style={{ color: "#94a3b8", fontSize: "14px", margin: "0 0 8px 0" }}>{stat.label}</p>
              <h2 style={{ fontSize: "32px", margin: 0, color: stat.color }}>{stat.count}</h2>
            </div>
          ))}
        </div>

        {/* Lower Content Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>
          
          {/* Notifications */}
          <div style={{ backgroundColor: "#1e293b", padding: "24px", borderRadius: "8px", border: "1px solid #334155" }}>
            <h2 style={{ fontSize: "18px", marginTop: 0, marginBottom: "20px", textAlign: "center" }}>🔔 Notifications & System Alerts</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ backgroundColor: "#0f172a", borderLeft: "4px solid #f59e0b", padding: "16px", borderRadius: "4px" }}>
                <strong style={{ display: "block", marginBottom: "4px", textAlign: "center" }}>Changes Requested</strong>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", textAlign: "center" }}>Mentor left feedback on Section 3 of Solar Micro-Grid.</p>
              </div>
              <div style={{ backgroundColor: "#0f172a", borderLeft: "4px solid #10b981", padding: "16px", borderRadius: "4px" }}>
                <strong style={{ display: "block", marginBottom: "4px", textAlign: "center" }}>Project Approved</strong>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", textAlign: "center" }}>PNG Hydropower Optimization was approved for TechnoFest 2026!</p>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div style={{ backgroundColor: "#1e293b", padding: "24px", borderRadius: "8px", border: "1px solid #334155" }}>
            <h2 style={{ fontSize: "18px", marginTop: 0, marginBottom: "20px", textAlign: "center" }}>⏰ Recent Activity</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {recentActivities.map((act, idx) => (
                <div key={idx} style={{ textAlign: "center" }}>
                  <p style={{ margin: "0 0 4px 0", fontSize: "13px", color: "#f8fafc" }}>{act.text}</p>
                  <span style={{ fontSize: "11px", color: "#64748b" }}>{act.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}