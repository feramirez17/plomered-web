const segments = [
  {
    title: "Constructoras y contratistas",
    description:
      "Cotización rápida, surtido de partidas completas y cumplimiento de tiempos de entrega para tu proyecto.",
  },
  {
    title: "Plomeros profesionales",
    description: "Catálogo claro, reorden ágil y asesoría técnica para tu trabajo recurrente.",
  },
  {
    title: "Consumidor final",
    description: "Catálogo accesible y asesoría clara para resolver tu instalación con confianza.",
  },
];

export default function Segments() {
  return (
    <section id="segmentos" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center">
        Nuestra Promesa de Servicio
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed mb-12">
        En Plomered nos comprometemos a ser el líder en soluciones para la industria. Le
        garantizamos a nuestros{" "}
        <span className="font-semibold text-brand">CONSTRUCTORES, PLOMEROS Y CONSUMIDORES</span>{" "}
        que siempre que lleguen a nuestras puertas, saldrán con una solución.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {segments.map((segment) => (
          <div key={segment.title} className="text-center">
            <h3 className="font-semibold text-lg text-brand mb-2">{segment.title}</h3>
            <p className="text-gray-600 text-sm">{segment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
