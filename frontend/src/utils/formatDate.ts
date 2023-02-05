export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("ja", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}
