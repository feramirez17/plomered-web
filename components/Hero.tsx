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
      <HeroCarousel />

      <a
        href="#que-ofrecemos"
        className="block border-t border-white/10 group"
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
