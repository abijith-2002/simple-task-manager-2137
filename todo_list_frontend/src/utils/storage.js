const STORAGE_KEY = 'ocean_tasks_v1';

/**
 * Safely load tasks from localStorage.
 * Returns an array of task objects or an empty array if none are found.
 */
// PUBLIC_INTERFACE
export function loadTasks() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (Array.isArray(data)) return data;
    return [];
  } catch {
    return [];
  }
}

/**
 * Persist tasks to localStorage.
 * Accepts an array of task objects.
 */
// PUBLIC_INTERFACE
export function saveTasks(tasks) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks || []));
  } catch {
    // ignore quota or serialization errors
  }
}
