"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site-config";

const footerLinks = {
  Services: [
    { name: "Cloud Security Audit", href: "/#services" },
    { name: "Penetration Testing", href: "/#services" },
    { name: "Incident Response", href: "/#services" },
    { name: "Security Training", href: "/#services" },
  ],
  Company: [
    { name: "About Us", href: "/#about" },
    { name: "Why Us", href: "/#why-us" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: `mailto:${CONTACT_EMAIL}` },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/legal#privacy" },
    { name: "Terms of Service", href: "/legal#terms" },
    { name: "NDA", href: "/legal#nda" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { name: "Instagram", href: SOCIAL_LINKS.instagram },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">SEQR</span>
                <span className="text-xs text-muted-foreground font-mono">Cloud Security</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Enterprise cloud security audits, penetration testing, and incident response. Secure your infrastructure with confidence.
              </p>

              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-foreground/10">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 SEQR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
