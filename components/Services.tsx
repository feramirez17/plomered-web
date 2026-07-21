import Image from "next/image";

const CATALOG_PDF = "/catalogo/catalogo-plomered.pdf";

const categories = [
  { slug: "tuberia", title: "Tubería", page: 7 },
  { slug: "conexiones", title: "Conexiones", page: 15 },
  { slug: "valvulas", title: "Válvulas", page: 93 },
  { slug: "almacenamiento-agua", title: "Almacenamiento de agua", page: 105 },
  { slug: "bombas-hidroneumatico", title: "Bombas y equipo hidroneumático", page: 111 },
  { slug: "pegamentos-soldaduras", title: "Pegamentos y soldaduras", page: 59 },
  { slug: "soporteria-fijacion", title: "Soportería y fijación", page: 114 },
  { slug: "residencial", title: "Residencial", page: 67 },
  { slug: "urbanizacion", title: "Urbanización", page: 80 },
  { slug: "electrico", title: "Eléctrico", page: 124 },
  { slug: "temporada", title: "Temporada", page: 117 },
  { slug: "otros-plomeria", title: "Otros plomería", page: 129 },
];

export default function Services() {
  return (
    <section id="que-ofrecemos" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-2">Qué ofrecemos</h2>
            <p className="text-gray-600 max-w-2xl">
              Inventario profundo y especializado para que tu proyecto no se detenga por falta
              de material.
            </p>
          </div>
          <a
            href={CATALOG_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition"
          >
            Consulta nuestro catálogo
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`${CATALOG_PDF}#page=${category.page}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[612/792] overflow-hidden rounded-lg shadow-sm block"
            >
              <Image
                src={`/categorias-limpias/${category.slug}.jpg`}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pt-10 pb-3 px-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={`/iconos-blanco/${category.slug}.png`}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain shrink-0"
                  />
                  <span className="text-white text-sm font-semibold leading-tight">
                    {category.title}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Da clic en cualquier categoría para verla directo en el catálogo. También puedes{" "}
          <a href={CATALOG_PDF} download className="text-brand font-semibold hover:underline">
            descargar el catálogo completo en PDF
          </a>
          .
        </p>
      </div>
    </section>
  );
}
