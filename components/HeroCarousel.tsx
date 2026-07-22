"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ALLY_LOGOS = [
  { name: "Rotoplas", src: "/marcas/rotoplas.svg" },
  { name: "AFER", src: "/marcas/afer.png" },
  { name: "Cresco", src: "/marcas/cresco.png" },
  { name: "Futura", src: "/marcas/futura.png" },
  { name: "PTM", src: "/marcas/ptm.svg" },
  { name: "Rugo", src: "/marcas/rugo.png" },
  { name: "Coflex", src: "/marcas/coflex.png" },
];

// TODO: falta logo de estas marcas — mándalos cuando los tengas.
const ALLY_NO_LOGO = ["Amanco", "Alfa", "Tuboplus"];

type Slide =
  | { type: "default" }
  | { type: "brands" }
  | { type: "photo"; src: string; caption: string };

const slides: Slide[] = [
  { type: "default" },
  { type: "brands" },
  {
    type: "photo",
    src: "/hero/fuerza-almacenaje.jpg",
    caption: "Fuerza de almacenaje.",
  },
  // TODO: agregar slide "toma aérea de nuestras instalaciones" cuando tengamos la foto.
];

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {slide.type === "default" && <div className="absolute inset-0 bg-brand" />}

          {slide.type === "photo" && (
            <>
              <Image
                src={slide.src}
                alt={slide.caption}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-brand/30" />
              <p className="absolute bottom-6 right-6 text-white/70 text-xs font-semibold uppercase tracking-widest">
                {slide.caption}
              </p>
            </>
          )}

          {slide.type === "brands" && (
            <div className="absolute inset-0 bg-brand flex flex-col items-center justify-center px-6">
              <p className="text-brand-accent font-semibold uppercase tracking-widest text-xs mb-6">
                Nuestros aliados
              </p>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
                {ALLY_LOGOS.map((brand) => (
                  <div
                    key={brand.name}
                    className="bg-white rounded-md px-5 py-3 flex items-center justify-center h-16 w-32"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={100}
                      height={40}
                      className="max-h-9 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-white/40 text-xs">
                También: {ALLY_NO_LOGO.join(" · ")}
              </p>
            </div>
          )}
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a la imagen ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
