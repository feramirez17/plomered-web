export const CATALOG_PDF = "/catalogo/catalogo-plomered.pdf";

export const CATALOG_CATEGORIES = [
  { slug: "tuberia", title: "Tubería", pages: 8, pdfPage: 7 },
  { slug: "conexiones", title: "Conexiones", pages: 44, pdfPage: 15 },
  { slug: "valvulas", title: "Válvulas", pages: 10, pdfPage: 94 },
  { slug: "almacenamiento-agua", title: "Almacenamiento de agua", pages: 6, pdfPage: 105 },
  {
    slug: "bombas-hidroneumatico",
    title: "Bombas y equipo hidroneumático",
    pages: 4,
    pdfPage: 111,
  },
  { slug: "pegamentos-soldaduras", title: "Pegamentos y soldaduras", pages: 8, pdfPage: 58 },
  { slug: "soporteria-fijacion", title: "Soportería y fijación", pages: 2, pdfPage: 114 },
  { slug: "residencial", title: "Residencial", pages: 16, pdfPage: 67 },
  { slug: "urbanizacion", title: "Urbanización", pages: 12, pdfPage: 82 },
  { slug: "electrico", title: "Eléctrico", pages: 4, pdfPage: 124 },
  { slug: "temporada", title: "Temporada", pages: 8, pdfPage: 117 },
  { slug: "otros-plomeria", title: "Otros plomería", pages: 4, pdfPage: 128 },
] as const;

export type CatalogCategory = (typeof CATALOG_CATEGORIES)[number];

export function getCatalogCategory(slug: string): CatalogCategory | undefined {
  return CATALOG_CATEGORIES.find((c) => c.slug === slug);
}
