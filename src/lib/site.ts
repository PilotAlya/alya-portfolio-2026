/** Canonical URL of this portfolio deploy. */
function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.trim().replace(/\/+$/, "");
  return `${trimmed}/`;
}

/**
 * Override on a new Vercel project via Environment Variable:
 *   VITE_SITE_URL=https://your-new-project.vercel.app
 *
 * Keep the old Vercel project (portfolio-resume-alya-akbarova) untouched
 * for past applications; point the new project at this repo + set VITE_SITE_URL.
 */
export const SITE_URL = normalizeSiteUrl(
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
    "https://portfolio-resume-alya-akbarova.vercel.app",
);

export const SITE_ORIGIN = SITE_URL.replace(/\/$/, "");
