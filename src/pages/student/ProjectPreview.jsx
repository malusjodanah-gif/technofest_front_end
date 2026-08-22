import React from "react";

export default function ProjectPreview() {
  const project = {
    title: "PNG Hydropower Optimization",
    category: "Engineering",
    stage: "Prototype",
    summary: "An automated sensor-based system designed to optimize micro-hydro turbine output in rural Papua New Guinea.",
    problem: "Remote communities face frequent power drops due to unmonitored flow rate shifts in micro-hydro turbines.",
    solution: "An automated microcontroller system that adjusts turbine intake based on real-time water flow telemetry.",
    impact: "Provides stable baseline electricity for over 1,200 rural households.",
    targetUsers: "Rural community energy boards and local technicians.",
    team: [
      { name: "Kingsley", role: "Lead Developer / Student" }
    ],
    mentor: "Dr. Alex Narobi",
    status: "Draft Preview"
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", padding: "32px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Banner Alert */}
        <div style={{ backgroundColor: "#1e3a8a", border: "1px solid #3b82f6", padding: "12px 16px", borderRadius: "6px", marginBottom: "24px", color: "#93c5fd", fontSize: "14px" }}>
          ℹ️ <strong>Preview Mode:</strong> This is how your project presentation will look to public users and reviewers once approved.
        </div>

        {/* Card Body */}
        <div style={{ backgroundColor: "#1e293b", padding: "32px", borderRadius: "8px", border: "1px solid #334155" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <span style={{ backgroundColor: "#800000", color: "#fff", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
              {project.category}
            </span>
            <span style={{ backgroundColor: "#334155", color: "#cbd5e1", padding: "4px 12px", borderRadius: "12px", fontSize: "12px" }}>
              Stage: {project.stage}
            </span>
          </div>

          <h1 style={{ fontSize: "28px", margin: "0 0 12px 0" }}>{project.title}</h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.5", marginTop: 0 }}>{project.summary}</p>

          <hr style={{ border: "none", borderTop: "1px solid #334155", margin: "24px 0" }} />

          <div style={{ display: "grid", gap: "20px" }}>
            <div>
              <h3 style={{ color: "#f8fafc", fontSize: "16px", marginBottom: "6px" }}>The Problem</h3>
              <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>{project.problem}</p>
            </div>

            <div>
              <h3 style={{ color: "#f8fafc", fontSize: "16px", marginBottom: "6px" }}>The Solution</h3>
              <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>{project.solution}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <h3 style={{ color: "#f8fafc", fontSize: "16px", marginBottom: "6px" }}>Target Users</h3>
                <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>{project.targetUsers}</p>
              </div>
              <div>
                <h3 style={{ color: "#f8fafc", fontSize: "16px", marginBottom: "6px" }}>Expected Impact</h3>
                <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>{project.impact}</p>
              </div>
            </div>

            <div style={{ backgroundColor: "#0f172a", padding: "16px", borderRadius: "6px", display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <div>
                <span style={{ color: "#64748b" }}>Team Lead: </span>
                <span>{project.team[0].name}</span>
              </div>
              <div>
                <span style={{ color: "#64748b" }}>Assigned Mentor: </span>
                <span>{project.mentor}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}