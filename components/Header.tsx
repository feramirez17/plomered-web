import Image from "next/image";

const links = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#que-ofrecemos", label: "Qué ofrecemos" },
  { href: "#segmentos", label: "Para quién trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="shrink-0">
          <Image src="/logo-navy.png" alt="Plomered" width={180} height={30} priority />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Solicitar cotización
        </a>
      </div>
    </header>
  );
}
