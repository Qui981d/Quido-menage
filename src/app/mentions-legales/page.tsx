import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Quido Ménage",
  description: "Mentions légales du site Quido Ménage, service d'entretien à domicile au Pays de Gex.",
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 font-display">
              INFORMATIONS LÉGALES
            </p>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-6">
              Mentions Légales
            </h1>
          </div>

          <div className="prose prose-lg prose-gray max-w-none text-gray-600">
            <h2 className="text-xl font-bold text-black mt-8 mb-4">1. Éditeur de l'application / du site</h2>
            <p className="mb-4">
              Le site <strong>www.quido.fr/menage</strong> est édité par :<br />
              <strong>Quido SARL</strong><br />
              Capital social : 1 000€<br />
              RCS Bourg-en-Bresse : 922 470 668<br />
              TVA Intracommunautaire : FR73922470668<br />
              Siège social : 181 rue du parc Jean Monnet, 01630 Saint-Genis-Pouilly, France.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">2. Directeur de la publication</h2>
            <p className="mb-4">
              Directeur de la publication : Équipe de Direction Quido Sarl. <br />
              Contact : hello@quido.fr ou 06 02 16 56 71
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">3. Hébergement</h2>
            <p className="mb-4">
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              États-Unis
            </p>
            <p className="mb-4">
              Les bases de données sont hébergées en Europe via l'infrastructure sécurisée du partenaire de la plateforme.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">4. Propriété intellectuelle</h2>
            <p className="mb-4">
              La structure générale, ainsi que les textes, images, vidéos, et autres éléments composant le site sont la propriété légale exclusive de Quido SARL. Toute représentation, reproduction, ou exploitation partielle ou totale des contenus sans autorisation est strictement interdite.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">5. Service Client</h2>
            <p className="mb-4">
              Pour toute question ou information sur les services présentés sur le site, ou concernant le site lui-même, vous pouvez nous écrire à l'adresse suivante : <strong>hello@quido.fr</strong>.
            </p>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
