import Image from "next/image";
import Link from "next/link";
import { CATALOG_CATEGORIES, CATALOG_PDF } from "@/lib/catalogo";

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
          {CATALOG_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/catalogo/${category.slug}`}
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
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Da clic en cualquier categoría para verla dentro de la página. También puedes{" "}
          <a href={CATALOG_PDF} download className="text-brand font-semibold hover:underline">
            descargar el catálogo completo en PDF
          </a>
          .
        </p>
      </div>
    </section>
  );
}
