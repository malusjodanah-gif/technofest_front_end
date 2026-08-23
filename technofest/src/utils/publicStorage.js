const SAVED_PROJECTS_KEY =
  "technofest_saved_projects";

const AUTH_KEY =
  "technofest_demo_user";

export function getSavedProjects() {
  try {
    const saved = localStorage.getItem(
      SAVED_PROJECTS_KEY
    );

    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function isProjectSaved(id) {
  const saved = getSavedProjects();

  return saved.includes(String(id));
}

export function toggleProjectSaved(id) {
  const projectId = String(id);

  const saved = getSavedProjects();

  const exists = saved.includes(projectId);

  const updated = exists
    ? saved.filter((item) => item !== projectId)
    : [...saved, projectId];

  localStorage.setItem(
    SAVED_PROJECTS_KEY,
    JSON.stringify(updated)
  );

  return !exists;
}

export function setDemoUser(user) {
  localStorage.setItem(
    AUTH_KEY,
    JSON.stringify(user)
  );
}

export function getDemoUser() {
  try {
    const user = localStorage.getItem(AUTH_KEY);

    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

export function clearDemoUser() {
  localStorage.removeItem(AUTH_KEY);
}