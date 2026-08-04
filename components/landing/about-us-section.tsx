"use client";

import { useEffect, useRef, useState } from "react";

export function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" ref={sectionRef} className="relative pt-12 lg:pt-16 pb-12 lg:pb-16 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            About SEQR
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We are SEQR
            <br />
            <span className="text-muted-foreground">built for businesses growing fast</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Most businesses move to the cloud quickly. Security does not move with them. Configurations get left open. Access controls never get set up properly. Nobody is watching.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              That is the problem SEQR was built to solve. We use the same tools and techniques that real attackers use to find gaps in cloud environments — and we close them before they become incidents. Every engagement is scoped precisely, delivered on time, and written in plain language that does not require a security background to understand.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most of our work is delivered remotely. When a migration, assessment, or incident needs someone on the ground, we travel. Cloud security is all we do — that focus is what makes us good at it.
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="p-6 bg-foreground/5 rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-colors">
              <div className="text-4xl font-display mb-3">3</div>
              <p className="text-sm text-muted-foreground">Major cloud platforms supported</p>
            </div>
            <div className="p-6 bg-foreground/5 rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-colors">
              <div className="text-4xl font-display mb-3">99.9%</div>
              <p className="text-sm text-muted-foreground">Average risk reduction post-audit</p>
            </div>
            <div className="p-6 bg-foreground/5 rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-colors">
              <div className="text-4xl font-display mb-3">5</div>
              <p className="text-sm text-muted-foreground">Critical areas checked in every leak review</p>
            </div>
            <div className="p-6 bg-foreground/5 rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-colors">
              <div className="text-4xl font-display mb-3">48hrs</div>
              <p className="text-sm text-muted-foreground">Average audit turnaround time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
