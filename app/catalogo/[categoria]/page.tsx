import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATALOG_CATEGORIES, CATALOG_PDF, getCatalogCategory } from "@/lib/catalogo";

export function generateStaticParams() {
  return CATALOG_CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = getCatalogCategory(categoria);
  return { title: category ? `${category.title} | Catálogo Plomered` : "Catálogo Plomered" };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = getCatalogCategory(categoria);
  if (!category) notFound();

  const pageNumbers = Array.from({ length: category.pages }, (_, i) => i + 1);

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-brand text-white">
          <div className="mx-auto max-w-4xl px-6 py-10">
            <Link href="/#que-ofrecemos" className="text-white/70 text-sm hover:text-white">
              ← Volver a categorías
            </Link>
            <h1 className="text-3xl font-bold mt-2">{category.title}</h1>
            <p className="text-white/70 text-sm mt-1">
              Sin precio · consulta código y medida, y contáctanos para cotizar.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col items-center gap-6">
          {pageNumbers.map((n) => (
            <div key={n} className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src={`/catalogo-paginas/${category.slug}/${String(n).padStart(2, "0")}.jpg`}
                alt={`${category.title} — página ${n}`}
                width={1102}
                height={1428}
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-16 text-center">
          <a
            href={`${CATALOG_PDF}#page=${category.pdfPage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline text-sm"
          >
            Ver esta sección en el PDF
          </a>
          <span className="text-gray-400 mx-2">·</span>
          <a href={CATALOG_PDF} download className="text-brand font-semibold hover:underline text-sm">
            Descargar catálogo completo
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
