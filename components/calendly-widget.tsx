"use client";

import Script from "next/script";

export const CALENDLY_URL =
  "https://calendly.com/tpayegbusi?hide_gdpr_banner=1";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function initBadgeWidget() {
  window.Calendly?.initBadgeWidget({
    url: CALENDLY_URL,
    text: "Book free audit",
    color: "#1a1a1a",
    textColor: "#ffffff",
    branding: true,
  });
}

export function openCalendlyPopup() {
  window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
}

export function CalendlyWidget() {
  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={initBadgeWidget}
      />
    </>
  );
}
