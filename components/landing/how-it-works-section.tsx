"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Book a Free Cloud Security Check",
    description:
      "A 30-minute call or a five-point scan of your environment. We tell you honestly where you are exposed. No cost, no obligation.",
  },
  {
    number: "02",
    title: "We Map Your Risk",
    description:
      "A full assessment of your cloud environment. Every finding documented with evidence, severity rated, and explained in plain language.",
  },
  {
    number: "03",
    title: "We Fix It and Keep Watching",
    description:
      "Remediation, hardening, and ongoing monthly oversight so your cloud environment stays secure as your business grows.",
  },
];

const STEP_DELAY_MS = 700;

export function HowItWorksSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setVisibleCount(1);

          const timer2 = window.setTimeout(() => setVisibleCount(2), STEP_DELAY_MS);
          const timer3 = window.setTimeout(
            () => setVisibleCount(3),
            STEP_DELAY_MS * 2
          );

          return () => {
            window.clearTimeout(timer2);
            window.clearTimeout(timer3);
          };
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative pt-12 lg:pt-16 pb-12 lg:pb-16 px-8 lg:px-16 border-t border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            How It Works
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Simple. Structured.
            <br />
            <span className="text-muted-foreground">No surprises.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Progress line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[2.75rem] left-[16.666%] right-[16.666%] h-px bg-foreground/10"
          >
            <div
              className="h-full bg-foreground origin-left transition-transform duration-700 ease-out"
              style={{
                transform: `scaleX(${visibleCount <= 1 ? 0 : visibleCount === 2 ? 0.5 : 1})`,
              }}
            />
          </div>

          {steps.map((step, index) => {
            const isVisible = visibleCount > index;

            return (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <div
                  className={`mb-6 flex items-center gap-4 transition-colors duration-500 ${
                    isVisible ? "text-foreground" : "text-muted-foreground/40"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-mono text-sm transition-all duration-500 ${
                      isVisible
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/20 bg-transparent text-muted-foreground"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div
                    className={`hidden lg:block h-px flex-1 transition-colors duration-500 ${
                      index < steps.length - 1 ? "bg-transparent" : ""
                    }`}
                  />
                </div>

                <h3 className="text-xl lg:text-2xl font-display mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
