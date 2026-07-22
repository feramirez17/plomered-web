import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuickLinks from "@/components/QuickLinks";
import Services from "@/components/Services";
import Segments from "@/components/Segments";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WelcomeVideoModal from "@/components/WelcomeVideoModal";

export default function Home() {
  return (
    <>
      <WelcomeVideoModal />
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <About />
        <Services />
        <Segments />
        <section id="contacto" className="bg-gray-50">
          <div className="mx-auto max-w-2xl px-6 py-20">
            <h2 className="text-3xl font-bold text-brand-dark mb-2 text-center">
              Solicita tu cotización
            </h2>
            <p className="text-gray-600 mb-10 text-center">
              Cuéntanos qué necesitas y un especialista te contactará.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
