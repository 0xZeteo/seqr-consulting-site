import { CONTACT_EMAIL, SITE_URL } from "@/lib/site-config";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SEQR",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    description:
      "Cloud security audits, penetration testing, and incident response for AWS, Azure, and GCP.",
    areaServed: "Worldwide",
    serviceType: [
      "Cloud Security Audit",
      "Penetration Testing",
      "Incident Response",
      "Secure Cloud Migration",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
