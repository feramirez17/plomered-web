"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ALLY_LOGOS = [
  { name: "Rotoplas", src: "/marcas/rotoplas.svg" },
  { name: "AFER", src: "/marcas/afer.png" },
  { name: "IUSA", src: "/marcas/iusa.png" },
  { name: "Amanco Wavin", src: "/marcas/amanco.png" },
  { name: "Cresco", src: "/marcas/cresco.png" },
  { name: "Futura", src: "/marcas/futura.png" },
  { name: "PTM", src: "/marcas/ptm.svg" },
  { name: "Rugo", src: "/marcas/rugo.png" },
  { name: "Alfa", src: "/marcas/alfa.png" },
  { name: "Coflex", src: "/marcas/coflex.png" },
  { name: "Tuboplus", src: "/marcas/tuboplus.png" },
];

const CTAS = (
  <div className="mt-10 flex flex-wrap gap-4">
    <a
      href="#contacto"
      className="rounded-md bg-brand-accent px-6 py-3 font-semibold text-white hover:brightness-90 transition"
    >
      Solicitar cotización
    </a>
    <a
      href="#que-ofrecemos"
      className="rounded-md border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 transition"
    >
      Ver catálogo
    </a>
  </div>
);

type Slide = {
  eyebrow: string;
  headline: string;
  background: "color" | { photo: string };
};

const slides: Slide[] = [
  {
    eyebrow: "La Red de Soluciones",
    headline: "El material que tu obra necesita, cuando lo necesitas.",
    background: "color",
  },
  {
    eyebrow: "Nuestra infraestructura",
    headline: "Fuerza de almacenaje.",
    background: { photo: "/hero/fuerza-almacenaje.jpg" },
  },
  {
    eyebrow: "La Red de Soluciones",
    headline: "Nuestros aliados.",
    background: "color",
  },
  // TODO: agregar slide "toma aérea de nuestras instalaciones" cuando tengamos la foto.
];

const AUTOPLAY_MS = 7000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[640px] md:min-h-[680px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {slide.background === "color" && <div className="absolute inset-0 bg-brand" />}
          {typeof slide.background === "object" && (
            <>
              <Image
                src={slide.background.photo}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/70 to-brand/40" />
            </>
          )}

          <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-16 text-white">
            <p className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4">
              {slide.eyebrow}
            </p>
            <h1 className="uppercase text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
              {slide.headline}
            </h1>

            {i === 0 && (
              <p className="mt-6 text-lg text-white/85 max-w-2xl">
                Somos especialistas en{" "}
                <span className="font-semibold text-white">plomería, agua y drenaje</span>.{" "}
                <span className="font-semibold text-white">
                  Más que productos, ofrecemos soluciones.
                </span>
              </p>
            )}

            {i === 1 && (
              <p className="mt-6 text-lg text-white/85 max-w-2xl">
                Miles de metros cuadrados de inventario listos para surtir tu proyecto, sin
                importar el tamaño.
              </p>
            )}

            {i === 2 && (
              <div className="mt-6 flex flex-wrap gap-3 max-w-3xl">
                {ALLY_LOGOS.map((brand) => (
                  <div
                    key={brand.name}
                    className="bg-white rounded-md px-4 py-2.5 flex items-center justify-center h-14 w-28"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={90}
                      height={36}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {CTAS}
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
