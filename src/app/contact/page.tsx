import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez Quido Ménage | Agence au Pays de Gex",
  description: "Contactez notre agence Quido Ménage au Pays de Gex. Téléphone, email, et plan d'accès vers nos bureaux à Saint-Genis-Pouilly.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-black mb-6 font-display">
              NOUS CONTACTER
            </p>
            <h1 
              className="font-display font-bold tracking-[-0.04em] text-black leading-[0.98] mb-6"
              style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
            >
              Parlons de votre <span className="text-quido">intérieur.</span>
            </h1>
            <p className="text-gray-500 text-lg lg:text-xl">
              Notre équipe est à votre disposition pour vous accompagner et répondre à toutes vos questions sur nos prestations au Pays de Gex.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                <Phone size={28} className="text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-2">Par téléphone</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">
                Du lundi au vendredi<br />de 8h00 à 18h00
              </p>
              <a href="tel:0602165671" className="text-black font-bold text-lg hover:text-quido transition-colors">
                06 02 16 56 71
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                <Mail size={28} className="text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-2">Par email</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">
                Nous nous engageons à vous répondre dans les plus brefs délais.
              </p>
              <a href="mailto:hello@quido.fr" className="text-black font-bold text-lg hover:text-quido transition-colors">
                hello@quido.fr
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                <MapPin size={28} className="text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-2">Nos bureaux</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">
                Situés au cœur du Pays de Gex pour une excellente réactivité.
              </p>
              <p className="text-black font-bold text-base leading-relaxed">
                181 rue du parc Jean Monnet<br />01630 Saint-Genis-Pouilly
              </p>
            </div>

          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="font-display font-bold text-3xl text-black mb-4">Notre ancrage local</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Basés à Saint-Genis-Pouilly, nous intervenons avec un maximum de réactivité sur l'ensemble du Pays de Gex (Gex, Ferney-Voltaire, Divonne-les-Bains...). Venez nous rencontrer sur rendez-vous !
                </p>
                <Link href="/reservation" className="btn-primary btn-pulse w-fit">
                  Estimer mon besoin
                  <ArrowRight size={17} />
                </Link>
              </div>
              <div className="h-[400px] lg:h-auto w-full bg-gray-100 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.366228399321!2d6.020286076735777!3d46.24276708249007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c634c0525ff65%3A0xc31faeb4f4699fce!2s181%20Rue%20du%20Parc%20Jean%20Monnet%2C%2001630%20Saint-Genis-Pouilly%2C%20France!5e0!3m2!1sen!2sch!4v1712239450849!5m2!1sen!2sch" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Google Maps bureaux Quido"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
