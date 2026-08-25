import NotificationsPanel from "../../components/shared/NotificationsPanel";

const updates = {
  student: [
    { id: 1, type: "success", title: "Project approved", message: "PNG Hydropower Optimization is ready for presentation.", read: false, createdAt: "Today" },
    { id: 2, type: "info", title: "Mentor feedback", message: "Dr. Alex Narobi left feedback on your Solar Micro-Grid project.", read: false, createdAt: "Yesterday" },
    { id: 3, type: "warning", title: "Revision requested", message: "Update the budget and resource plan before resubmitting.", read: true, createdAt: "18 Aug 2026" },
  ],
  organization: [
    { id: 4, type: "info", title: "New project available", message: "Three student projects match your technology interests.", read: false, createdAt: "Today" },
    { id: 5, type: "success", title: "Interest sent", message: "Your expression of interest was sent to the Solar Micro-Grid team.", read: true, createdAt: "Yesterday" },
    { id: 6, type: "warning", title: "Profile incomplete", message: "Add your organization details to improve partnership responses.", read: true, createdAt: "16 Aug 2026" },
  ],
  mentor: [
    { id: 7, type: "warning", title: "Reviews waiting", message: "Two assigned projects need feedback before the next review cycle.", read: false, createdAt: "Today" },
    { id: 8, type: "info", title: "Meeting request", message: "A student requested a mentoring session for this week.", read: false, createdAt: "Yesterday" },
    { id: 9, type: "success", title: "Review completed", message: "Your feedback on PNG Hydropower Optimization was acknowledged.", read: true, createdAt: "15 Aug 2026" },
  ],
  admin: [
    { id: 10, type: "warning", title: "Submissions awaiting review", message: "18 project submissions are currently in the review queue.", read: false, createdAt: "Today" },
    { id: 11, type: "info", title: "New mentor registered", message: "A new mentor profile is ready for verification.", read: false, createdAt: "Yesterday" },
    { id: 12, type: "success", title: "Weekly report ready", message: "The platform activity summary is ready to view.", read: true, createdAt: "16 Aug 2026" },
  ],
};

export default function Notifications({ role = "student" }) {
  return <NotificationsPanel role={role} items={updates[role] || updates.student} />;
}