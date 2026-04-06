import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Quido Ménage",
  description: "Politique de confidentialité et gestion des données personnelles de Quido Ménage.",
};

export default function Confidentialite() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 font-display">
              RGPD & DONNÉES
            </p>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-6">
              Politique de Confidentialité
            </h1>
          </div>

          <div className="prose prose-lg prose-gray max-w-none text-gray-600">
            <h2 className="text-xl font-bold text-black mt-8 mb-4">Préambule</h2>
            <p className="mb-4">
              Quido SARL s'engage à ce que les traitements de données personnelles effectués sur www.quido.fr soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">1. Données collectées</h2>
            <p className="mb-4">
              Dans le cadre de l'utilisation de nos services (demande de devis, réservation), nous sommes amenés à collecter les données suivantes :
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Données d'identification : nom, prénom.</li>
              <li>Données de contact : adresse e-mail, numéro de téléphone.</li>
              <li>Données de localisation : adresse postale, informations d'accès.</li>
              <li>Données relatives au logement : superficie, nombre de pièces, préférences de ménage.</li>
            </ul>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">2. Finalité de la collecte</h2>
            <p className="mb-4">Ces données sont collectées afin de :</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Mettre en relation l'utilisateur avec nos équipes opérationnelles.</li>
              <li>Établir des devis précis pour les prestations demandées.</li>
              <li>Gérer la facturation et le service client.</li>
              <li>Gérer les obligations légales liées au crédit d'impôt (déclaration URSSAF).</li>
            </ul>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">3. Conservation des données</h2>
            <p className="mb-4">
              Les données personnelles sont conservées pendant toute la durée de la relation commerciale, et pendant une durée maximale de 3 ans après la dernière sollicitation de l'utilisateur à des fins de prospection commerciale. Les données liées à la facturation sont conservées 10 ans (obligation légale).
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">4. Droits des utilisateurs</h2>
            <p className="mb-4">
              Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, d'effacement (droit à l'oubli), et d'opposition au traitement de vos données. Vous pouvez exercer ce droit en nous contactant à <strong>hello@quido.fr</strong>.
            </p>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
