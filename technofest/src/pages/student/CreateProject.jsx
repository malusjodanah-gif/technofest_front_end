import React, { useState, useEffect } from "react";

export default function CreateProject() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    problem: "",
    solution: "",
    category: "Engineering",
    teamMembers: "",
    impact: "",
    targetUsers: "",
    mediaUrl: "",
    mentor: "Dr. Alex Narobi",
    visibility: "Public",
    declaration: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedDraft = localStorage.getItem("technofest_project_draft");
    if (savedDraft) {
      setFormData(JSON.parse(savedDraft));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const saveDraft = () => {
    localStorage.setItem("technofest_project_draft", JSON.stringify(formData));
    alert("Draft saved successfully to local storage!");
  };

  const validateStep = () => {
    let errs = {};
    if (currentStep === 1) {
      if (!formData.title.trim()) errs.title = "Project title is required.";
      if (!formData.summary.trim()) errs.summary = "Summary is required.";
    }
    if (currentStep === 2) {
      if (!formData.problem.trim()) errs.problem = "Problem statement is required.";
      if (!formData.solution.trim()) errs.solution = "Proposed solution is required.";
    }
    if (currentStep === 7 && !formData.declaration) {
      errs.declaration = "You must agree to the declaration before proceeding.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 8));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      localStorage.removeItem("technofest_project_draft");
      alert("Project submitted successfully for review!");
    }
  };

  const steps = [
    "Basic Info",
    "Problem & Solution",
    "Category & Team",
    "Impact",
    "Media",
    "Mentor",
    "Declaration",
    "Preview & Submit",
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", padding: "32px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>Create Project</h1>
            <p style={{ color: "#94a3b8", marginTop: "4px" }}>Step {currentStep} of 8: {steps[currentStep - 1]}</p>
          </div>
          <button onClick={saveDraft} style={{ backgroundColor: "#334155", color: "#fff", border: "1px solid #475569", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" }}>
            💾 Save Draft
          </button>
        </div>

        {/* Progress Indicator */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "32px" }}>
          {steps.map((_, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                height: "6px",
                borderRadius: "3px",
                backgroundColor: idx + 1 <= currentStep ? "#800000" : "#334155",
              }}
            />
          ))}
        </div>

        {/* Form Body */}
        <div style={{ backgroundColor: "#1e293b", padding: "32px", borderRadius: "8px", border: "1px solid #334155" }}>
          
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div>
              <h2 style={{ marginTop: 0 }}>Step 1: Basic Information</h2>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Project Title *</label>
                <small style={{ color: "#64748b", display: "block", marginBottom: "8px" }}>Enter a clear name for your project.</small>
                <input
                  type="text"
                  name="title"
                  maxLength={100}
                  value={formData.title}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                  {errors.title ? <span style={{ color: "#f87171", fontSize: "12px" }}>{errors.title}</span> : <span />}
                  <span style={{ color: "#64748b", fontSize: "12px" }}>{formData.title.length}/100</span>
                </div>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Short Summary *</label>
                <small style={{ color: "#64748b", display: "block", marginBottom: "8px" }}>Briefly summarize your project in 200 characters or less.</small>
                <textarea
                  name="summary"
                  maxLength={200}
                  value={formData.summary}
                  onChange={handleChange}
                  rows="3"
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                  {errors.summary ? <span style={{ color: "#f87171", fontSize: "12px" }}>{errors.summary}</span> : <span />}
                  <span style={{ color: "#64748b", fontSize: "12px" }}>{formData.summary.length}/200</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Problem & Solution */}
          {currentStep === 2 && (
            <div>
              <h2 style={{ marginTop: 0 }}>Step 2: Problem & Solution</h2>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Problem Statement *</label>
                <small style={{ color: "#64748b", display: "block", marginBottom: "8px" }}>Describe the specific issue your project addresses.</small>
                <textarea
                  name="problem"
                  maxLength={500}
                  value={formData.problem}
                  onChange={handleChange}
                  rows="3"
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                  {errors.problem ? <span style={{ color: "#f87171", fontSize: "12px" }}>{errors.problem}</span> : <span />}
                  <span style={{ color: "#64748b", fontSize: "12px" }}>{formData.problem.length}/500</span>
                </div>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Proposed Solution *</label>
                <small style={{ color: "#64748b", display: "block", marginBottom: "8px" }}>Explain how your technology solves this problem.</small>
                <textarea
                  name="solution"
                  maxLength={500}
                  value={formData.solution}
                  onChange={handleChange}
                  rows="3"
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                  {errors.solution ? <span style={{ color: "#f87171", fontSize: "12px" }}>{errors.solution}</span> : <span />}
                  <span style={{ color: "#64748b", fontSize: "12px" }}>{formData.solution.length}/500</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Category & Team */}
          {currentStep === 3 && (
            <div>
              <h2 style={{ marginTop: 0 }}>Step 3: Category & Team</h2>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Energy">Energy</option>
                  <option value="Health">Health</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Team Members</label>
                <small style={{ color: "#64748b", display: "block", marginBottom: "8px" }}>Enter names separated by commas.</small>
                <input
                  type="text"
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleChange}
                  placeholder="e.g. Kingsley, John Doe"
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                />
              </div>
            </div>
          )}

          {/* Step 4: Impact & Target Users */}
          {currentStep === 4 && (
            <div>
              <h2 style={{ marginTop: 0 }}>Step 4: Impact & Target Users</h2>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Target Users</label>
                <input
                  type="text"
                  name="targetUsers"
                  value={formData.targetUsers}
                  onChange={handleChange}
                  placeholder="e.g. Local farmers, Rural health clinics"
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Expected Impact</label>
                <textarea
                  name="impact"
                  value={formData.impact}
                  onChange={handleChange}
                  rows="3"
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                />
              </div>
            </div>
          )}

          {/* Step 5: Media */}
          {currentStep === 5 && (
            <div>
              <h2 style={{ marginTop: 0 }}>Step 5: Media & Documents</h2>
              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Media Image / Document URL</label>
                <small style={{ color: "#64748b", display: "block", marginBottom: "8px" }}>Provide a direct web link to your diagram or document.</small>
                <input
                  type="text"
                  name="mediaUrl"
                  value={formData.mediaUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                />
              </div>
            </div>
          )}

          {/* Step 6: Mentor */}
          {currentStep === 6 && (
            <div>
              <h2 style={{ marginTop: 0 }}>Step 6: Mentor & Visibility</h2>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Assigned Mentor</label>
                <input
                  type="text"
                  name="mentor"
                  value={formData.mentor}
                  disabled
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#94a3b8" }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Visibility</label>
                <select
                  name="visibility"
                  value={formData.visibility}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "6px", color: "#fff" }}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 7: Declaration */}
          {currentStep === 7 && (
            <div>
              <h2 style={{ marginTop: 0 }}>Step 7: Declaration</h2>
              <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                I hereby declare that this project submission represents original work created for Innoject 2026.
              </p>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", marginTop: "16px" }}>
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                />
                <span style={{ fontSize: "14px" }}>I agree to the declaration terms *</span>
              </label>
              {errors.declaration && <span style={{ color: "#f87171", fontSize: "12px", display: "block", marginTop: "4px" }}>{errors.declaration}</span>}
            </div>
          )}

          {/* Step 8: Preview & Submit */}
          {currentStep === 8 && (
            <div>
              <h2 style={{ marginTop: 0 }}>Step 8: Preview & Submit</h2>
              <div style={{ backgroundColor: "#0f172a", padding: "16px", borderRadius: "6px", marginBottom: "16px" }}>
                <h3 style={{ margin: "0 0 8px 0" }}>{formData.title || "Untitled Project"}</h3>
                <p style={{ color: "#94a3b8", fontSize: "14px", margin: "0 0 8px 0" }}>{formData.summary}</p>
                <p style={{ fontSize: "12px", color: "#64748b" }}>Category: {formData.category} | Mentor: {formData.mentor}</p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px", paddingTop: "16px", borderTop: "1px solid #334155" }}>
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              style={{ padding: "10px 20px", backgroundColor: "#334155", color: "#fff", border: "none", borderRadius: "6px", cursor: currentStep === 1 ? "not-allowed" : "pointer" }}
            >
              Back
            </button>
            {currentStep < 8 ? (
              <button
                onClick={handleNext}
                style={{ padding: "10px 20px", backgroundColor: "#800000", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                style={{ padding: "10px 20px", backgroundColor: "#10b981", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
              >
                Submit Project
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}