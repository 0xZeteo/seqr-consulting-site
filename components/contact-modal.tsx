"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONTACT_EMAIL, mailtoQuote } from "@/lib/site-config";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  "Cloud Security Audit",
  "Penetration Testing",
  "Incident Response",
  "Secure Cloud Migration",
  "Security Training",
  "Other",
];

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 503) {
          window.location.href = mailtoQuote(formData.service);
          return;
        }
        throw new Error(data.error ?? "Failed to send message.");
      }

      setIsSubmitted(true);

      setTimeout(() => {
        onOpenChange(false);
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "", service: "" });
      }, 3000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Something went wrong. Email us at ${CONTACT_EMAIL}.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] bg-background border border-foreground/10">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact us</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us what you need — we&apos;ll reply within one business day with scope and pricing.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-display text-foreground">Message sent</h3>
            <p className="text-sm text-muted-foreground">
              We&apos;ll get back to you within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-foreground/5 border-foreground/10 focus:border-foreground/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-foreground/5 border-foreground/10 focus:border-foreground/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Your company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                className="bg-foreground/5 border-foreground/10 focus:border-foreground/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">What do you need?</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                required
              >
                <SelectTrigger className="bg-foreground/5 border-foreground/10 focus:border-foreground/30">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isLoading || !formData.service}
              className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-lg h-11"
            >
              {isLoading ? "Sending..." : "Send message"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
