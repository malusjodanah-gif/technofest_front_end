import React, { useState } from "react";

export default function Collaboration() {
  const [incomingRequests, setIncomingRequests] = useState([
    { id: 1, studentName: "Grace K.", projectTitle: "AgriTech Market Platform", role: "UI/UX Designer", date: "2026-08-21" },
  ]);

  const [outgoingRequests, setOutgoingRequests] = useState([
    { id: 101, projectTitle: "PNG Hydropower Optimization", invitedStudent: "Dana M.", status: "Pending", date: "2026-08-19" },
  ]);

  const handleAccept = (id) => {
    setIncomingRequests(incomingRequests.filter((req) => req.id !== id));
    alert("Collaboration request accepted!");
  };

  const handleDecline = (id) => {
    setIncomingRequests(incomingRequests.filter((req) => req.id !== id));
    alert("Collaboration request declined.");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", padding: "32px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        <h1 style={{ fontSize: "28px", margin: "0 0 8px 0" }}>Team Collaboration</h1>
        <p style={{ color: "#94a3b8", marginBottom: "32px" }}>Manage team invitations and incoming join requests.</p>

        {/* Incoming Requests */}
        <div style={{ backgroundColor: "#1e293b", padding: "24px", borderRadius: "8px", border: "1px solid #334155", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", marginTop: 0, marginBottom: "16px" }}>Incoming Join Requests</h2>
          {incomingRequests.length > 0 ? (
            incomingRequests.map((req) => (
              <div key={req.id} style={{ backgroundColor: "#0f172a", padding: "16px", borderRadius: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: "16px", margin: "0 0 4px 0" }}>{req.studentName}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>Wants to join as <strong>{req.role}</strong> on {req.projectTitle}</p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => handleAccept(req.id)} style={{ backgroundColor: "#064e3b", color: "#34d399", border: "none", padding: "8px 14px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", fontSize: "12px" }}>Accept</button>
                  <button onClick={() => handleDecline(req.id)} style={{ backgroundColor: "#7f1d1d", color: "#fca5a5", border: "none", padding: "8px 14px", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>Decline</button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>No pending incoming requests.</p>
          )}
        </div>

        {/* Outgoing Requests */}
        <div style={{ backgroundColor: "#1e293b", padding: "24px", borderRadius: "8px", border: "1px solid #334155" }}>
          <h2 style={{ fontSize: "18px", marginTop: 0, marginBottom: "16px" }}>Sent Invitations</h2>
          {outgoingRequests.map((req) => (
            <div key={req.id} style={{ backgroundColor: "#0f172a", padding: "16px", borderRadius: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: "16px", margin: "0 0 4px 0" }}>Invited: {req.invitedStudent}</h3>
                <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>Project: {req.projectTitle}</p>
              </div>
              <span style={{ backgroundColor: "#78350f", color: "#fbbf24", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold" }}>
                {req.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}