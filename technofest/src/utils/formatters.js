export function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export function truncateText(text, maxLength = 120) {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.substring(0, maxLength).trim()}...`;
}

export function capitalize(text) {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}