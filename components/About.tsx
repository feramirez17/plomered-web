const stats = [
  { value: "+20", label: "años en el mercado" },
  { value: "+7,000", label: "artículos de variedad" },
  { value: "+3,000 m²", label: "de almacenamiento" },
  { value: null, label: "Capacidad de entrega en todo el estado de Chihuahua" },
];

export default function About() {
  return (
    <section id="quienes-somos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Quiénes somos</h2>
          <p className="text-gray-700 leading-relaxed">
            Somos una comercializadora especializada en soluciones para la plomería,
            conducción y almacenamiento de líquidos y residuos. Nuestra infraestructura,
            especialización y acompañamiento nos hacen ser el mejor aliado para todos
            nuestros socios comerciales.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-gray-100 bg-gray-50 p-6 text-center flex flex-col justify-center">
              {stat.value && <p className="text-3xl font-bold text-brand">{stat.value}</p>}
              <p className={`text-sm text-gray-600 ${stat.value ? "mt-2" : "font-semibold text-brand-dark"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
