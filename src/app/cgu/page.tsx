import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Quido Ménage",
  description: "Conditions Generales d'Utilisation (CGU) des services Quido Ménage.",
};

export default function CGU() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 font-display">
              LÉGAL
            </p>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-6">
              Conditions Générales d'Utilisation
            </h1>
          </div>

          <div className="prose prose-lg prose-gray max-w-none text-gray-600">
            <h2 className="text-xl font-bold text-black mt-8 mb-4">1. Objet</h2>
            <p className="mb-4">
              Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site www.quido.fr et de ses services associés. L'utilisation de ce site implique l'acceptation pleine et entière des présentes CGU.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">2. Services proposés</h2>
            <p className="mb-4">
              Le site Quido Ménage présente les prestations de nettoyage à domicile et conciergerie proposées par Quido SARL dans le Pays de Gex. Il permet aux utilisateurs de demander des devis et d'entrer en contact avec nos équipes. Les obligations de Quido découlant de la fourniture des prestations de ménage font l'objet d'un contrat de prestation de services distinct.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">3. Accès au site</h2>
            <p className="mb-4">
              Le site est accessible gratuitement en tout lieu à tout utilisateur ayant un accès à Internet. Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">4. Responsabilité</h2>
            <p className="mb-4">
              Quido SARL s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, l'entreprise ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">5. Liens hypertextes</h2>
            <p className="mb-4">
              Le site peut contenir des liens hypertextes vers d'autres sites web. Quido SARL n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-4">6. Modification des CGU</h2>
            <p className="mb-4">
              Quido SARL se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU. Les utilisateurs seront informés de ces modifications.
            </p>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
