"use client";

import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { openCalendlyPopup } from "@/components/calendly-widget";

const faqs = [
  {
    question: "Is SEQR right for my business?",
    answer:
      "If your business runs on cloud infrastructure — AWS, Microsoft 365, Google Workspace, or similar — and you do not have a dedicated security team watching it, SEQR is built for you. We work with small and mid-sized businesses that know security matters but do not have the internal resource to do it properly themselves.",
  },
  {
    question: "Do you need access to our systems to run an assessment?",
    answer:
      "For cloud security assessments, yes — we require read-only access to your cloud environment. We never need admin or write access. Before any access is granted, both parties sign a Non-Disclosure Agreement. Your data is securely deleted within 30 days of the engagement closing.",
  },
  {
    question: "What cloud platforms do you support?",
    answer:
      "AWS, Microsoft Azure, Google Cloud Platform, Microsoft 365, and Google Workspace. If your business runs on any of these, we can help.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every business's cloud environment is different, so we scope and price each engagement individually in USD. Book a free Cloud Security Leak Check and we will give you a clear, no-obligation quote within 24 hours.",
    showCalendly: true,
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free Cloud Security Leak Check. We scan five critical areas of your cloud environment and deliver a written risk summary within 48 hours — no cost, no commitment. That is where every SEQR engagement begins.",
    showCalendly: true,
  },
];

export function FaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="relative pt-12 lg:pt-16 pb-12 lg:pb-16 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            FAQ
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Common questions
            <br />
            <span className="text-muted-foreground">before you get started</span>
          </h2>
        </div>

        <div
          className={`max-w-3xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="border-foreground/10">
                <AccordionTrigger className="text-lg lg:text-xl font-display hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  <p>{faq.answer}</p>
                  {faq.showCalendly && (
                    <Button
                      size="sm"
                      onClick={openCalendlyPopup}
                      className="mt-4 bg-foreground hover:bg-foreground/90 text-background rounded-full"
                    >
                      Book free leak check
                    </Button>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
