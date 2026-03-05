/**
 * Format a date string into a human-readable format.
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Get today's date as an ISO date string (YYYY-MM-DD).
 */
export function getTodayISO(): string {
  return new Date().toISOString().split("T")[0];
}

/**
 * Check if a date string is in the past.
 */
export function isPastDate(date: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(date) < today;
}

/**
 * Calculate the number of nights between two date strings.
 */
export function daysBetween(start: string, end: string): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const s = new Date(start);
  const e = new Date(end);
  return Math.max(0, Math.round((e.getTime() - s.getTime()) / msPerDay));
}

/**
 * Check if two date ranges overlap.
 * Uses the rule: (start1 <= end2) && (start2 <= end1)
 */
export function datesOverlap(
  start1: string,
  end1: string,
  start2: string,
  end2: string
): boolean {
  return start1 <= end2 && start2 <= end1;
}

