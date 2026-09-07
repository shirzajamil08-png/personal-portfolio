/* Thin wrapper around fetch for the Express API.
   In dev, Vite proxies /api to http://localhost:5000 (see vite.config.js).
   In production set VITE_API_URL if the API lives on another domain. */

const BASE = import.meta.env.VITE_API_URL || "";

async function request(path, options = {}) {
  const res = await fetch(`${BASE}/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  let body = null;
  try {
    body = await res.json();
  } catch {
    // a non-JSON response (HTML error page, empty body) — treat as a failure
  }

  if (!res.ok) {
    const err = new Error(body?.message || `Request failed with status ${res.status}`);
    err.status = res.status;
    err.errors = body?.errors || null;
    throw err;
  }

  return body;
}

export const getProjects = () => request("/projects");

export const sendMessage = (payload) =>
  request("/messages", { method: "POST", body: JSON.stringify(payload) });

export const getHealth = () => request("/health");
