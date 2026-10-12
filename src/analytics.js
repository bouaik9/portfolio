// Thin wrapper around gtag so every tracked event is consistent.
// Falls back silently to console in dev so nothing crashes without GA loaded.
export function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else if (import.meta.env.DEV) {
    console.debug("[analytics]", name, params);
  }
}

export const events = {
  resumeDownload: () => trackEvent("resume_download"),
  projectClick: (project) => trackEvent("project_click", { project }),
  certificateClick: (cert) => trackEvent("certificate_click", { certificate: cert }),
  contactSubmit: () => trackEvent("contact_submit"),
  sectionView: (section) => trackEvent("section_view", { section }),
};
