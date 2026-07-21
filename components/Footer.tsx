export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Plomered. Todos los derechos reservados.</p>
        <p>Chihuahua, México · Parte del grupo RAMSA</p>
      </div>
    </footer>
  );
}
