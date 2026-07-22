"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "plomered-welcome-video-shown";

export default function WelcomeVideoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute -top-10 right-0 md:top-2 md:right-2 text-white/80 hover:text-white text-2xl leading-none z-10"
        >
          ✕
        </button>
        <video
          src="/video/promo-plomered.mp4"
          controls
          autoPlay
          muted
          playsInline
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
