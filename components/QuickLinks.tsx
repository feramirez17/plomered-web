import MexicoMap from "./MexicoMap";

// TODO: falta el número de WhatsApp para activar ese botón.
const SOCIAL_LINKS = {
  Facebook: "https://www.facebook.com/plomeredcuu/",
  Instagram: "https://www.instagram.com/plomeredcuu/",
  WhatsApp: "",
};

const shortcuts = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Catálogo", href: "/#que-ofrecemos" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

export default function QuickLinks() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {shortcuts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand hover:text-white hover:border-brand transition"
            >
              {item.label}
            </a>
          ))}
          {Object.entries(SOCIAL_LINKS).map(([name, url]) =>
            url ? (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand hover:text-white hover:border-brand transition"
              >
                {name}
              </a>
            ) : (
              <span
                key={name}
                title="Falta la URL de esta red social"
                className="rounded-full border border-dashed border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-300 cursor-not-allowed"
              >
                {name}
              </span>
            )
          )}
        </div>
      </div>

      <div id="cobertura" className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-xs mx-auto md:mx-0">
            <MexicoMap highlight="Chihuahua" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Cobertura</h2>
            <p className="text-white/85 leading-relaxed">
              Capacidad de entrega en todo el estado de Chihuahua, desde nuestro centro de
              distribución hasta la puerta de tu obra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
