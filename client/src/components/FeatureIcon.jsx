const ICONS = {
  crm: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 18c1.3-2.8 3.6-4.3 6.5-4.3s5.2 1.5 6.5 4.3" />
      <path d="M17 7.2h2.3M18.15 6.05v2.3" />
    </>
  ),
  email: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="3" />
      <path d="M6 8l6 5 6-5" />
    </>
  ),
  ai: (
    <>
      <path d="M12 4.5v3.2" />
      <path d="M12 16.3v3.2" />
      <path d="M4.5 12h3.2" />
      <path d="M16.3 12h3.2" />
      <path d="M6.6 6.6l2.3 2.3" />
      <path d="M15.1 15.1l2.3 2.3" />
      <path d="M17.4 6.6l-2.3 2.3" />
      <path d="M8.9 15.1l-2.3 2.3" />
      <circle cx="12" cy="12" r="2.2" />
    </>
  ),
  billing: (
    <>
      <rect x="4" y="6.5" width="16" height="11" rx="3" />
      <path d="M4 10h16" />
      <path d="M8 14h3" />
      <path d="M14.5 14h1.5" />
    </>
  ),
  finance: (
    <>
      <path d="M6 17V8" />
      <path d="M10 17V5" />
      <path d="M14 17V11" />
      <path d="M18 17V7" />
      <path d="M4 17h16" />
    </>
  ),
  invoice: (
    <>
      <path d="M7 4.5h10a1.5 1.5 0 0 1 1.5 1.5v12L16 16l-2.5 2-2.5-2-2.5 2-2.5-2V6a1.5 1.5 0 0 1 1.5-1.5Z" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </>
  ),
  analytics: (
    <>
      <path d="M5 18h14" />
      <path d="M7 15l3-3 2 2 4-5" />
      <path d="M16 9h.01" />
    </>
  ),
  employees: (
    <>
      <rect x="5" y="4.5" width="14" height="15" rx="3" />
      <circle cx="12" cy="10" r="2.2" />
      <path d="M8.5 16c.9-1.7 2.3-2.6 3.5-2.6s2.6.9 3.5 2.6" />
    </>
  ),
  collaboration: (
    <>
      <path d="M7.5 14.5c-1.7 0-3-1.2-3-2.8s1.3-2.8 3-2.8 3 1.2 3 2.8" />
      <path d="M16.5 14.5c1.7 0 3-1.2 3-2.8s-1.3-2.8-3-2.8-3 1.2-3 2.8" />
      <path d="M7.5 14.5c0 1.5 1.4 2.7 3.2 2.7h2.8c1.8 0 3.2-1.2 3.2-2.7" />
    </>
  ),
  files: (
    <>
      <path d="M6 4.8h6l4 4v10.4a1.8 1.8 0 0 1-1.8 1.8H6a1.8 1.8 0 0 1-1.8-1.8V6.6A1.8 1.8 0 0 1 6 4.8Z" />
      <path d="M12 4.8V9h4.2" />
      <path d="M8 13h8" />
      <path d="M8 16h5" />
    </>
  ),
  integrations: (
    <>
      <path d="M8 8a2.5 2.5 0 1 1 3.5 2.3V13" />
      <path d="M16 16a2.5 2.5 0 1 0-3.5-2.3V11" />
      <circle cx="8" cy="8" r="1.2" />
      <circle cx="16" cy="16" r="1.2" />
    </>
  ),
  projects: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M8 9h8" />
      <path d="M8 12h8" />
      <path d="M8 15h5" />
    </>
  ),
  dashboard: (
    <>
      <rect x="4.5" y="4.5" width="6" height="6" rx="1.8" />
      <rect x="13.5" y="4.5" width="6" height="6" rx="1.8" />
      <rect x="4.5" y="13.5" width="6" height="6" rx="1.8" />
      <rect x="13.5" y="13.5" width="6" height="6" rx="1.8" />
    </>
  ),
  secure: (
    <>
      <path d="M12 4.5 18 7v5c0 4-2.8 6.5-6 7.5-3.2-1-6-3.5-6-7.5V7l6-2.5Z" />
      <path d="M12 10.2v3.3" />
      <circle cx="12" cy="8.8" r=".8" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 18c1-3.1 3.3-4.7 6-4.7s5 1.6 6 4.7" />
      <path d="M17.6 6.4h2M18.6 5.4v2" />
    </>
  ),
};

export default function FeatureIcon({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feature-icon ${className}`.trim()}
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.dashboard}
    </svg>
  );
}
