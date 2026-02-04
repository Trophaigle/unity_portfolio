// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const receiverEmail = process.env.RECEIVER_EMAIL;
    if (!receiverEmail) {
      return NextResponse.json({ error: "Email de réception non configuré" }, { status: 500 });
    }

    await resend.emails.send({
      from: "Unity-Portfolio <onboarding@resend.dev>", // ton email Resend
      to: receiverEmail, // où tu veux recevoir les messages
      subject: `New contact form message from ${email}`,
      html: `<p><strong>From:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}