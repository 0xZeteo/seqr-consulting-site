import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/site-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service } = body;

    if (!name?.trim() || !email?.trim() || !company?.trim() || !service?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please email us directly at contact@getseqr.com.",
        },
        { status: 503 }
      );
    }

    const fromAddress =
      process.env.RESEND_FROM_EMAIL ?? "SEQR Contact <onboarding@resend.dev>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `New inquiry from ${name} — ${service}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          `Service: ${service}`,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or email us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
