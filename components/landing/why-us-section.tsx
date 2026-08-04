"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Clock, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Cloud specialists, not generalists",
    description: "Cloud security is the only thing we do. You get a firm that thinks about this all day — not a team that switches between general IT work and reviewing your IAM policies.",
  },
  {
    icon: Shield,
    title: "We find real problems",
    description: "We use the same tools and techniques real attackers use. We do not run a checkbox audit. We look for exploitable misconfigurations, overpermissioned accounts, exposed storage, and credential risks.",
  },
  {
    icon: Users,
    title: "We speak plainly",
    description: "No jargon. No vague recommendations. Every report has an executive summary for non-technical readers and a technical section for whoever is doing the remediation.",
  },
  {
    icon: Clock,
    title: "We start before you spend a penny",
    description: "Our free Cloud Security Leak Check gives you a real picture of your exposure before you commit to anything. Five critical areas, a risk score, three immediate recommendations — within 48 hours.",
  },
];

export function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="relative pt-12 lg:pt-16 pb-12 lg:pb-16 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Why SEQR
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why SEQR
            <br />
            <span className="text-muted-foreground">What makes us different</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`group rounded-2xl border border-foreground/10 p-8 lg:p-10 hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
