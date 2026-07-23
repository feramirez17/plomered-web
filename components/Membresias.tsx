import Image from "next/image";

const MEMBERSHIPS = [
  {
    name: "CANACO SERVYTUR Chihuahua",
    src: "/membresias/canaco-chihuahua.png",
    href: "https://canacochihuahua.com/",
    width: 1021,
    height: 340,
  },
  {
    name: "CMIC",
    src: "/membresias/cmic.png",
    href: "https://cmic.org/",
    width: 300,
    height: 72,
  },
];

export default function Membresias() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-8">
          Miembros y aliados institucionales
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {MEMBERSHIPS.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              title={m.name}
              className="opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={m.src}
                alt={m.name}
                width={m.width}
                height={m.height}
                className="h-10 w-auto md:h-12 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
