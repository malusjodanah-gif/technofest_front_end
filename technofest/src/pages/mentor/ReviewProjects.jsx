import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { projects } from "../../data/projects";

export default function ReviewProject() {
  const project = projects[0];

  const [feedback, setFeedback] = useState("");
  const [comments, setComments] = useState([]);

  const submitFeedback = () => {
    if (!feedback.trim()) return;

    setComments([
      ...comments,
      {
        text: feedback,
        date: new Date().toLocaleDateString(),
      },
    ]);

    setFeedback("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Review Project
        </h1>

        <p className="text-gray-500">
          {project.title}
        </p>
      </div>

      <Card>
        <h2 className="text-2xl font-semibold">
          Project Information
        </h2>

        <div className="mt-5 space-y-4">
          <div>
            <strong>Problem</strong>
            <p className="text-gray-600">
              {project.problem}
            </p>
          </div>

          <div>
            <strong>Solution</strong>
            <p className="text-gray-600">
              {project.solution}
            </p>
          </div>

          <div>
            <strong>Impact</strong>
            <p className="text-gray-600">
              {project.impact}
            </p>
          </div>

          <div>
            <strong>Stage</strong>
            <p>{project.stage}</p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">
          Student / Team
        </h2>

        <div className="mt-4 space-y-2">
          {project.team.map((member) => (
            <div
              key={member.name}
              className="rounded-lg bg-gray-50 p-3"
            >
              <strong>{member.name}</strong>
              <p className="text-sm text-gray-500">
                {member.programme} — Year {member.year}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">
          Milestones
        </h2>

        <div className="mt-4 space-y-3">
          <div className="rounded-lg bg-green-50 p-3">
            ✓ Project proposal completed
          </div>

          <div className="rounded-lg bg-green-50 p-3">
            ✓ Prototype completed
          </div>

          <div className="rounded-lg bg-yellow-50 p-3">
            ○ Testing in progress
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">
          Feedback
        </h2>

        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="5"
          placeholder="Enter feedback for the student..."
          className="mt-4 w-full rounded-lg border p-3"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={submitFeedback}>
            Submit Feedback
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              alert("Update requested from student")
            }
          >
            Request Update
          </Button>

          <Button
            variant="success"
            onClick={() =>
              alert("Feedback marked as addressed")
            }
          >
            Mark Feedback Addressed
          </Button>

          <Button
            variant="danger"
            onClick={() =>
              alert("Project issue flagged")
            }
          >
            Flag Issue
          </Button>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">
          Comments
        </h2>

        <div className="mt-4 space-y-3">
          {comments.length === 0 ? (
            <p className="text-gray-500">
              No comments yet.
            </p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-50 p-3"
              >
                <p>{comment.text}</p>
                <p className="text-xs text-gray-500">
                  {comment.date}
                </p>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
