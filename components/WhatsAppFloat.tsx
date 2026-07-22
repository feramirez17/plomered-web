const WHATSAPP_URL =
  "https://wa.me/526144733204?text=Hola%2C%20me%20interesa%20cotizar%20material.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-4 py-3 shadow-lg shadow-black/20 hover:brightness-95 transition"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <svg
        viewBox="0 0 24 24"
        className="relative h-7 w-7 shrink-0 fill-white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 4.997L2 22l5.126-1.345a9.955 9.955 0 0 0 4.878 1.242h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.928-7.069a9.93 9.93 0 0 0-7.073-2.828zm0 18.174h-.003a8.28 8.28 0 0 1-4.223-1.156l-.303-.18-3.14.824.838-3.06-.198-.314a8.26 8.26 0 0 1-1.267-4.417c0-4.567 3.717-8.284 8.288-8.284a8.23 8.23 0 0 1 5.86 2.428 8.23 8.23 0 0 1 2.427 5.86c-.002 4.566-3.72 8.283-8.28 8.283z" />
      </svg>
      <span className="relative text-white font-semibold text-sm whitespace-nowrap">
        Escríbenos
      </span>
    </a>
  );
}
