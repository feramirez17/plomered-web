import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Plomered | Especialistas en plomería, drenaje y conducción de fluidos",
  description:
    "Plomered es la comercializadora especialista en plomería, conducción y almacenamiento de líquidos en Chihuahua. Inventario profundo, respuesta rápida y asesoría técnica para constructoras, plomeros y consumidor final.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="antialiased bg-white text-gray-900 font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
