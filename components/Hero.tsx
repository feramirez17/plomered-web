import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

const categories = [
  { slug: "tuberia", title: "Tubería" },
  { slug: "conexiones", title: "Conexiones" },
  { slug: "valvulas", title: "Válvulas" },
  { slug: "almacenamiento-agua", title: "Almacenamiento de agua" },
  { slug: "bombas-hidroneumatico", title: "Bombas e hidroneumático" },
  { slug: "pegamentos-soldaduras", title: "Pegamentos y soldaduras" },
  { slug: "soporteria-fijacion", title: "Soportería y fijación" },
  { slug: "residencial", title: "Residencial" },
  { slug: "urbanizacion", title: "Urbanización" },
  { slug: "electrico", title: "Eléctrico" },
  { slug: "temporada", title: "Temporada" },
  { slug: "otros-plomeria", title: "Otros plomería" },
];

export default function Hero() {
  return (
    <section className="bg-brand text-white">
      <div className="relative overflow-hidden">
        <HeroCarousel />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-16">
          <p className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4">
            La Red de Soluciones
          </p>
          <h1 className="uppercase text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            El material que tu obra necesita, cuando lo necesitas.
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl">
            Somos especialistas en <span className="font-semibold text-white">plomería, agua y drenaje</span>.{" "}
            <span className="font-semibold text-white">Más que productos, ofrecemos soluciones.</span>
          </p>
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
        </div>
      </div>

      <a
        href="#que-ofrecemos"
        className="mt-16 md:mt-20 block border-t border-white/10 group"
      >
        <div className="mx-auto max-w-6xl px-6 py-8 flex items-center gap-6 overflow-x-auto">
          <div className="flex items-center gap-8 shrink-0">
            {categories.map((category) => (
              <div key={category.slug} className="flex flex-col items-center gap-2 w-16 shrink-0">
                <Image
                  src={`/iconos-blanco/${category.slug}.png`}
                  alt={category.title}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-[11px] text-center text-white/70 leading-tight">
                  {category.title}
                </span>
              </div>
            ))}
          </div>
          <span className="ml-auto shrink-0 text-white/60 group-hover:text-white transition text-xl">
            →
          </span>
        </div>
      </a>
    </section>
  );
}
