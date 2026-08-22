import React, { useState } from "react";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [projectList, setProjectList] = useState([
    {
      id: 1,
      title: "PNG Hydropower Optimization",
      category: "Engineering",
      stage: "Prototype",
      status: "Approved",
      updatedAt: "2026-08-10",
    },
    {
      id: 2,
      title: "Local AgriTech Market",
      category: "Agriculture",
      stage: "Concept",
      status: "Under Review",
      updatedAt: "2026-08-18",
    },
    {
      id: 3,
      title: "Solar Micro-Grid",
      category: "Energy",
      stage: "Ideation",
      status: "Draft",
      updatedAt: "2026-08-20",
    },
  ]);

  const filteredProjects = projectList.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjectList(projectList.filter((p) => p.id !== id));
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", padding: "32px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>My Projects</h1>
          <p style={{ color: "#94a3b8", marginTop: "4px" }}>Manage, edit, and track your submission statuses.</p>
        </div>
        <button 
          onClick={() => alert("Redirecting to Create Project Form...")}
          style={{ backgroundColor: "#800000", color: "#ffffff", border: "none", padding: "10px 18px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
        >
          + Create New Project
        </button>
      </div>

      <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
        <input
          type="text"
          placeholder="Search projects by title or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1, padding: "10px 14px", backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "6px", color: "#fff", outline: "none" }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "10px 14px", backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "6px", color: "#fff", cursor: "pointer", outline: "none" }}
        >
          <option value="All">All Statuses</option>
          <option value="Approved">Approved</option>
          <option value="Under Review">Under Review</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} style={{ backgroundColor: "#1e293b", padding: "20px", borderRadius: "8px", border: "1px solid #334155", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#94a3b8", backgroundColor: "#0f172a", padding: "4px 8px", borderRadius: "4px" }}>
                    {project.category}
                  </span>
                  <span style={{ 
                    fontSize: "12px", 
                    padding: "4px 8px", 
                    borderRadius: "12px", 
                    fontWeight: "bold",
                    backgroundColor: project.status === "Approved" ? "#064e3b" : project.status === "Draft" ? "#78350f" : "#1e3a8a",
                    color: project.status === "Approved" ? "#34d399" : project.status === "Draft" ? "#fbbf24" : "#60a5fa"
                  }}>
                    {project.status}
                  </span>
                </div>
                <h3 style={{ fontSize: "18px", margin: "0 0 8px 0" }}>{project.title}</h3>
                <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>Stage: {project.stage}</p>
                <p style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>Updated: {project.updatedAt}</p>
              </div>

              <div style={{ display: "flex", gap: "8px", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #334155", flexWrap: "wrap" }}>
                <button onClick={() => alert(`Viewing ${project.title}`)} style={{ flex: 1, padding: "6px 10px", backgroundColor: "#334155", border: "none", color: "#fff", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>View</button>
                <button onClick={() => alert(`Editing ${project.title}`)} style={{ flex: 1, padding: "6px 10px", backgroundColor: "#334155", border: "none", color: "#fff", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>Edit</button>
                <button onClick={() => alert(`Previewing ${project.title}`)} style={{ flex: 1, padding: "6px 10px", backgroundColor: "#334155", border: "none", color: "#fff", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>Preview</button>
                <button onClick={() => handleDelete(project.id)} style={{ padding: "6px 10px", backgroundColor: "#7f1d1d", border: "none", color: "#fca5a5", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#94a3b8", gridColumn: "1 / -1" }}>No projects found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}