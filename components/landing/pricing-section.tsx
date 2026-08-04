"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { mailtoQuote } from "@/lib/site-config";
import { openCalendlyPopup } from "@/components/calendly-widget";

const plans = [
  {
    name: "Essentials",
    description: "Start with the basics",
    features: [
      "Cloud Security Leak Check",
      "Cloud Security Risk Assessment",
      "Email support",
      "Quarterly reports",
      "Up to 2 clouds (AWS/Azure/GCP)",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Most popular for mid-market",
    features: [
      "Everything in Essentials",
      "Cloud Security Audit & Hardening",
      "Phishing Simulation & Email Audit",
      "Monthly security retainer",
      "Priority 24-hour support",
      "Up to 5 clouds",
      "Custom reports",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Advanced protection for enterprise",
    features: [
      "Everything in Professional",
      "Cloud Penetration Testing",
      "Secure Cloud Migration Security",
      "Security Awareness Training",
      "Security Policy Development",
      "Incident Response & Recovery",
      "24/7 dedicated security team",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative pt-12 lg:pt-16 pb-40 lg:pb-48 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Plans
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Security plans
            <br />
            <span className="text-stroke">for every organization</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Every engagement is scoped to your infrastructure. Email us and we&apos;ll reply with a tailored quote — no fixed pricing on the site.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-foreground/10">
                <span className="font-display text-lg text-muted-foreground">
                  Scoped to your needs — email for a quote
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => {
                  window.location.href = mailtoQuote(plan.name);
                }}
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                Email for a quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          All plans include detailed reporting, remediation guidance, and compliance roadmaps.{" "}
          <button
            type="button"
            onClick={openCalendlyPopup}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Or book a free audit call
          </button>
        </p>
      </div>
    </section>
  );
}
