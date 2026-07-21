import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECAPTCHA_SCORE_THRESHOLD = 0.5;

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const result = await response.json();
  return result.success === true && result.score >= RECAPTCHA_SCORE_THRESHOLD;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, company, phone, email, message, recaptchaToken } = body;

  if (!name || !phone || !email || !message || !recaptchaToken) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return NextResponse.json({ error: "Verificación reCAPTCHA fallida" }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!toEmail || !resendApiKey) {
    return NextResponse.json(
      { error: "El formulario de contacto no está configurado" },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: "Plomered Web <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `Nueva solicitud de cotización — ${name}`,
    text: [
      `Nombre: ${name}`,
      `Empresa: ${company || "N/A"}`,
      `Teléfono: ${phone}`,
      `Correo: ${email}`,
      "",
      "Mensaje:",
      message,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
