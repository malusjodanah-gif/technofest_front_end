import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Bookmark,
  Flag,
  MessageCircle,
  Share2,
} from "lucide-react";

import { PublicLayout } from "../../components/layout";

import {
  ProjectDetails,
} from "../../components/project";

import {
  Alert,
  Button,
  EmptyState,
  Modal,
} from "../../components/ui";

import { projects } from "../../data/projects";

import {
  isProjectSaved,
  toggleProjectSaved,
} from "../../utils/publicStorage";

export default function ProjectDetailsPage() {
  const { id } = useParams();

  const project = useMemo(
    () =>
      projects.find(
        (item) => String(item.id) === String(id)
      ),
    [id]
  );

  const [saved, setSaved] = useState(() =>
    isProjectSaved(id)
  );

  const [interestOpen, setInterestOpen] =
    useState(false);

  const [reportOpen, setReportOpen] =
    useState(false);

  const [message, setMessage] = useState("");

  if (!project) {
    return (
      <PublicLayout>
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <EmptyState
            title="Project not found"
            description="The project you are looking for does not exist or may have been removed."
            action={
              <Link to="/explore">
                <Button>
                  Back to Explore
                </Button>
              </Link>
            }
          />
        </div>
      </PublicLayout>
    );
  }

  function handleSave() {
    const newState = toggleProjectSaved(id);

    setSaved(newState);

    setMessage(
      newState
        ? "Project saved."
        : "Project removed from saved projects."
    );
  }

  function handleInterest() {
    setInterestOpen(false);

    setMessage(
      "Your expression of interest has been recorded for this frontend prototype."
    );
  }

  function handleReport() {
    setReportOpen(false);

    setMessage(
      "Thank you. Your report has been recorded for this frontend prototype."
    );
  }

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: project.title,
        text: project.summary,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);

      setMessage("Project link copied.");
    }
  }

  return (
    <PublicLayout>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <Link
            to="/explore"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-maroon-700"
          >
            <ArrowLeft size={17} />
            Back to Explore
          </Link>

          {message && (
            <div className="mb-6">
              <Alert
                type="success"
                title="Done"
              >
                {message}
              </Alert>
            </div>
          )}

          <ProjectDetails
            project={project}
            actions={
              <>
                <Button onClick={() => setInterestOpen(true)}>
                  <MessageCircle size={17} />
                  Express Interest
                </Button>

                <Button
                  variant="outline"
                  onClick={handleSave}
                >
                  <Bookmark
                    size={17}
                    fill={saved ? "currentColor" : "none"}
                  />

                  {saved ? "Saved" : "Save Project"}
                </Button>

                <Button
                  variant="ghost"
                  onClick={handleShare}
                >
                  <Share2 size={17} />
                  Share
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => setReportOpen(true)}
                >
                  <Flag size={17} />
                  Report
                </Button>
              </>
            }
          />

        </div>
      </div>

      <Modal
        isOpen={interestOpen}
        onClose={() => setInterestOpen(false)}
        title="Express interest"
      >
        <p className="text-sm leading-6 text-gray-600">
          In the completed platform, this action would allow
          a verified organization to contact the student/team
          safely.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="ghost"
            onClick={() => setInterestOpen(false)}
          >
            Cancel
          </Button>

          <Button onClick={handleInterest}>
            Submit Interest
          </Button>
        </div>
      </Modal>

      <Modal
        isOpen={reportOpen}
        onClose={() => setReportOpen(false)}
        title="Report project"
      >
        <p className="text-sm leading-6 text-gray-600">
          Report inappropriate, unsafe, or inaccurate content
          for administrator review.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="ghost"
            onClick={() => setReportOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={handleReport}
          >
            Submit Report
          </Button>
        </div>
      </Modal>
    </PublicLayout>
  );
}