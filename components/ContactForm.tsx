"use client";

import { useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

type FormStatus = "idle" | "submitting" | "success" | "error";

function ContactFormFields() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!executeRecaptcha) {
      return;
    }

    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);

    const recaptchaToken = await executeRecaptcha("contact_form");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        company: formData.get("company"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        message: formData.get("message"),
        recaptchaToken,
      }),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-md bg-green-50 border border-green-200 text-green-800 p-6 text-center">
        Gracias por contactarnos. Un especialista de Plomered te responderá a la brevedad.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          required
          placeholder="Nombre completo"
          className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <input
          name="company"
          type="text"
          placeholder="Empresa (opcional)"
          className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="phone"
          type="tel"
          required
          placeholder="Teléfono"
          className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Correo electrónico"
          className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Cuéntanos qué material o proyecto necesitas"
        className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Solicitar cotización"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm">
          No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.
        </p>
      )}
    </form>
  );
}

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return (
      <p className="rounded-md bg-amber-50 border border-amber-200 text-amber-800 p-6 text-center">
        Configura NEXT_PUBLIC_RECAPTCHA_SITE_KEY para activar el formulario de contacto.
      </p>
    );
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      container={{
        element: "recaptcha-badge-container",
        parameters: { badge: "bottomleft" },
      }}
    >
      <div id="recaptcha-badge-container" />
      <ContactFormFields />
    </GoogleReCaptchaProvider>
  );
}
