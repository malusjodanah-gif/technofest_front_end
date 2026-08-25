import React, { useState } from "react";

export default function MentorFeedback() {
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      projectTitle: "Solar Micro-Grid",
      mentorName: "Dr. Alex Narobi",
      date: "2026-08-22",
      status: "Action Required",
      section: "Section 3: Budget & Resource Plan",
      comment: "Please expand on the battery storage cost projections. The current calculations seem low for rural transport conditions.",
      isResolved: false,
    },
    {
      id: 2,
      projectTitle: "PNG Hydropower Optimization",
      mentorName: "Dr. Alex Narobi",
      date: "2026-08-15",
      status: "Approved",
      section: "Full Proposal",
      comment: "Excellent technical design. Approved for presentation at Innoject 2026.",
      isResolved: true,
    },
  ]);

  const toggleResolved = (id) => {
    setFeedbackList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isResolved: !item.isResolved } : item
      )
    );
  };

  const handleRequestMeeting = (mentorName) => {
    alert(`Meeting request submitted to ${mentorName}!`);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", padding: "32px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div>
            <h1 style={{ fontSize: "28px", margin: "0 0 8px 0" }}>Mentor Feedback</h1>
            <p style={{ color: "#94a3b8", margin: 0 }}>Review notes and revision requests from your assigned project mentors.</p>
          </div>
          <button
            onClick={() => handleRequestMeeting("Dr. Alex Narobi")}
            style={{ backgroundColor: "#334155", color: "#60a5fa", border: "1px solid #1d4ed8", padding: "10px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", fontSize: "13px" }}
          >
            📅 Request Meeting
          </button>
        </div>

        <div style={{ display: "grid", gap: "20px" }}>
          {feedbackList.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#1e293b",
                padding: "24px",
                borderRadius: "8px",
                border: "1px solid #334155",
                borderLeft: item.isResolved ? "4px solid #10b981" : "4px solid #f59e0b",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div>
                  <h2 style={{ fontSize: "18px", margin: "0 0 4px 0" }}>{item.projectTitle}</h2>
                  <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
                    Mentor: <strong>{item.mentorName}</strong> | Date: {item.date}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    backgroundColor: item.isResolved ? "#064e3b" : "#78350f",
                    color: item.isResolved ? "#34d399" : "#fbbf24",
                  }}
                >
                  {item.isResolved ? "Resolved" : item.status}
                </span>
              </div>

              <div style={{ backgroundColor: "#0f172a", padding: "16px", borderRadius: "6px", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", color: "#800000", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                  {item.section}
                </span>
                <p style={{ margin: 0, fontSize: "14px", color: "#cbd5e1", lineHeight: "1.5" }}>
                  "{item.comment}"
                </p>
              </div>

              <button
                onClick={() => toggleResolved(item.id)}
                style={{
                  backgroundColor: item.isResolved ? "#334155" : "#10b981",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.isResolved ? "Mark as Unresolved" : "Mark as Resolved"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}