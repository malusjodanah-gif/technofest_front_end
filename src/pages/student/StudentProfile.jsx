import React, { useState } from "react";

export default function StudentProfile() {
  const [profile, setProfile] = useState({
    fullName: "Kingsley",
    email: "kingsley@student.unitech.ac.pg",
    studentId: "2026-STU-8821",
    department: "Computer Science & IT",
    yearOfStudy: "3rd Year",
    bio: "Passionate about full-stack web application development and IoT solutions for community development.",
  });

  const [savedMessage, setSavedMessage] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", padding: "32px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <h1 style={{ fontSize: "28px", margin: "0 0 8px 0" }}>Student Profile</h1>
        <p style={{ color: "#94a3b8", marginBottom: "32px" }}>Update your account details and student preferences.</p>

        {savedMessage && (
          <div style={{ backgroundColor: "#064e3b", color: "#34d399", padding: "12px 16px", borderRadius: "6px", marginBottom: "20px", fontSize: "14px", border: "1px solid #059669" }}>
            ✓ Profile saved successfully!
          </div>
        )}

        <form onSubmit={handleSave} style={{ backgroundColor: "#1e293b", padding: "32px", borderRadius: "8px", border: "1px solid #334155" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Student ID</label>
              <input
                type="text"
                name="studentId"
                value={profile.studentId}
                disabled
                style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#64748b" }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Department</label>
              <input
                type="text"
                name="department"
                value={profile.department}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows="4"
              style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#800000", color: "#fff", border: "none", padding: "10px 24px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
          >
            Save Changes
          </button>
        </form>

      </div>
    </div>
  );
}