"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedText({
  text,
  isVisible,
  delayOffset = 0,
  className = "",
}: {
  text: string;
  isVisible: boolean;
  delayOffset?: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block ${isVisible ? "animate-char-in" : "opacity-0"}`}
          style={{
            animationDelay: isVisible ? `${delayOffset + i * 35}ms` : "0ms",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function SocialProofSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight leading-tight">
            <span className="block">
              <AnimatedText
                text="Remote-first. On-site when it counts."
                isVisible={isVisible}
              />
            </span>
            <span className="block text-muted-foreground">
              <AnimatedText
                text="Built to serve SMEs anywhere."
                isVisible={isVisible}
                delayOffset={600}
              />
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
