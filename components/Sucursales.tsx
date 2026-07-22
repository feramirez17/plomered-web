const LOCATIONS = [
  {
    name: "Plomered — Matriz Chihuahua",
    address: "José Fuentes Mares 9802, Col. Villa Juárez, Chihuahua, Chih.",
    hours: [
      "Lunes a viernes: 8:00–13:00 y 14:00–17:00",
      "Sábado: 8:00–13:00",
      "Domingo: Cerrado",
    ],
    phone: "(614) 473-32-04",
  },
];

export default function Sucursales() {
  return (
    <section id="sucursales" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-brand-dark mb-2 text-center">
        Nuestra sucursal
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Visítanos, llámanos o pasa directo por tu material.
      </p>

      <div className="grid gap-8">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.name}
            className="grid md:grid-cols-2 rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <iframe
              title={`Mapa — ${loc.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
              className="w-full h-64 md:h-full min-h-[16rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-3">{loc.name}</h3>
              <p className="text-gray-700 mb-4">{loc.address}</p>
              <ul className="text-gray-600 text-sm space-y-1 mb-4">
                {loc.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="text-gray-700 font-medium mb-6">Tel. {loc.phone}</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
