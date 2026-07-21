import { MEXICO_MAP_VIEWBOX, MEXICO_STATES } from "@/lib/mexico-map";

export default function MexicoMap({ highlight = "Chihuahua" }: { highlight?: string }) {
  return (
    <svg viewBox={MEXICO_MAP_VIEWBOX} className="w-full h-auto" role="img" aria-label={`Mapa de México con ${highlight} resaltado`}>
      {MEXICO_STATES.map((state) => (
        <path
          key={state.name}
          d={state.path}
          fill={state.name === highlight ? "#FF0025" : "#B5B5B5"}
          fillOpacity={state.name === highlight ? 1 : 0.35}
          stroke="#ffffff"
          strokeWidth={0.8}
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
