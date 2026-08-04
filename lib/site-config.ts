export const CONTACT_EMAIL = "contact@getseqr.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/seqr",
  instagram: "https://www.instagram.com/seqr",
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://getseqr.com";

export function mailtoQuote(plan?: string) {
  const subject = plan
    ? `SEQR quote request — ${plan}`
    : "SEQR quote request";
  const body =
    "Hi SEQR team,%0D%0A%0D%0AI'd like to discuss scope and pricing for cloud security services.%0D%0A%0D%0ACompany:%0D%0ACloud platform(s):%0D%0AWhat I need help with:%0D%0A%0D%0AThanks,";
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
}
