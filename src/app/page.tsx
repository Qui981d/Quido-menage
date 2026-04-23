import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import BentoShowcase from "@/components/BentoShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutLocalSection from "@/components/AboutLocalSection";
import ProofAndBooking from "@/components/ProofAndBooking";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { getFaqItems } from "@/lib/faq";

/* ─── JSON-LD STRUCTURED DATA ─── */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.quido.fr/#organization",
  name: "Quido",
  url: "https://www.quido.fr",
  logo: "https://www.quido.fr/menage/images/logo/logo-footer-green.png",
  description:
    "Quido est une entreprise de conciergerie et de services à la personne basée au Pays de Gex (Ain, 01). Spécialisée dans le ménage à domicile premium, le nettoyage professionnel et la conciergerie locative haut de gamme.",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Martin",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+33602165671",
      contactType: "customer service",
      email: "hello@quido.fr",
      areaServed: "FR",
      availableLanguage: ["French"],
    },
  ],
  sameAs: [
    "https://www.quido.fr",
    "https://www.instagram.com/quido.fr",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HousekeepingService",
  "@id": "https://www.quido.fr/menage/#localbusiness",
  name: "Quido Ménage",
  alternateName: "Quido — Service de Ménage au Pays de Gex",
  description:
    "Service de ménage et nettoyage premium à domicile au Pays de Gex. Femme de ménage de confiance, agents vérifiés et formés, produits écologiques, ménage Airbnb, nettoyage fin de bail. Entreprise agréée Services à la Personne (SAP) ouvrant droit au crédit d'impôt de 50%.",
  url: "https://www.quido.fr/menage",
  telephone: "+33602165671",
  email: "hello@quido.fr",
  image: "https://www.quido.fr/menage/images/about-quido.jpg",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, CESU, Virement bancaire",
  parentOrganization: { "@id": "https://www.quido.fr/#organization" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "181 rue du parc Jean Monnet",
    addressLocality: "Saint-Genis-Pouilly",
    postalCode: "01630",
    addressRegion: "Ain",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.2437,
    longitude: 6.0229,
  },
  hasMap: "https://maps.google.com/?q=181+Rue+du+Parc+Jean+Monnet,+01630+Saint-Genis-Pouilly",
  areaServed: [
    { "@type": "City", name: "Gex", sameAs: "https://fr.wikipedia.org/wiki/Gex_(Ain)" },
    { "@type": "City", name: "Ferney-Voltaire", sameAs: "https://fr.wikipedia.org/wiki/Ferney-Voltaire" },
    { "@type": "City", name: "Saint-Genis-Pouilly", sameAs: "https://fr.wikipedia.org/wiki/Saint-Genis-Pouilly" },
    { "@type": "City", name: "Divonne-les-Bains", sameAs: "https://fr.wikipedia.org/wiki/Divonne-les-Bains" },
    { "@type": "City", name: "Cessy", sameAs: "https://fr.wikipedia.org/wiki/Cessy" },
    { "@type": "City", name: "Prévessin-Moëns", sameAs: "https://fr.wikipedia.org/wiki/Pr%C3%A9vessin-Mo%C3%ABns" },
    { "@type": "City", name: "Thoiry", sameAs: "https://fr.wikipedia.org/wiki/Thoiry_(Ain)" },
    { "@type": "City", name: "Ornex" },
    { "@type": "City", name: "Ségny" },
    { "@type": "City", name: "Crozet" },
    { "@type": "City", name: "Versonnex" },
    { "@type": "City", name: "Échenevex" },
    { "@type": "AdministrativeArea", name: "Pays de Gex", sameAs: "https://fr.wikipedia.org/wiki/Pays_de_Gex" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "165",
    reviewCount: "87",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sophie M." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Une prestation d'une qualité rare. L'équipe est discrète et le résultat est toujours au rendez-vous.",
      datePublished: "2025-11-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Thomas D." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Enfin un service sur lequel on peut compter les yeux fermés. Le soin apporté aux détails est vraiment ce qui fait la différence.",
      datePublished: "2025-09-20",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Claire & Antoine" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Notre maison est toujours impeccable. La réservation est simple et l'intervention toujours ponctuelle. Un sans-faute.",
      datePublished: "2025-07-10",
    },
  ],
  sameAs: [
    "https://www.quido.fr",
    "https://www.instagram.com/quido.fr",
  ],
  knowsAbout: [
    "Ménage à domicile",
    "Femme de ménage",
    "Nettoyage professionnel",
    "Nettoyage fin de bail",
    "Ménage Airbnb",
    "Conciergerie locative",
    "Nettoyage écologique",
    "Services à la Personne",
    "Crédit d'impôt SAP",
  ],
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.quido.fr/menage/#service",
  serviceType: "Ménage et nettoyage à domicile",
  provider: { "@id": "https://www.quido.fr/menage/#localbusiness" },
  areaServed: { "@type": "AdministrativeArea", name: "Pays de Gex, Ain (01)" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de ménage Quido",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ménage régulier à domicile",
          description:
            "Entretien hebdomadaire ou bi-mensuel de votre domicile au Pays de Gex. La même femme de ménage attitrée à chaque visite pour un résultat constant et une relation de confiance.",
          url: "https://www.quido.fr/menage#services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Grand nettoyage en profondeur (Deep Clean)",
          description:
            "Nettoyage en profondeur du sol au plafond. Idéal pour le nettoyage de printemps, un changement de saison ou une remise à neuf complète de votre intérieur à Gex, Ferney-Voltaire ou Divonne-les-Bains.",
          url: "https://www.quido.fr/menage#services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nettoyage fin de bail et remise en état",
          description:
            "Remise en état après déménagement, travaux ou rénovation. Nettoyage garanti conforme aux exigences des régies immobilières du Pays de Gex et de Genève pour la remise des clés.",
          url: "https://www.quido.fr/menage#services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ménage Airbnb et conciergerie locative",
          description:
            "Nettoyage professionnel entre chaque voyageur pour locations Airbnb et conciergerie haut de gamme au Pays de Gex. Préparation du linge, mise en place, accueil voyageurs.",
          url: "https://www.quido.fr/menage#services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nettoyage après travaux et fin de chantier",
          description:
            "Nettoyage professionnel de fin de chantier : élimination de la poussière de plâtre, laitances de ciment, grattage des vitres. Matériel industriel. Intervention rapide dans tout le Pays de Gex.",
          url: "https://www.quido.fr/menage#services",
        },
      },
    ],
  },
};

// Build FAQ JSON-LD dynamically from the actual FAQ component data
const faqItems = getFaqItems();
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Quido",
      item: "https://www.quido.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ménage & Nettoyage au Pays de Gex",
      item: "https://www.quido.fr/menage",
    },
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.quido.fr/menage/#website",
  url: "https://www.quido.fr/menage",
  name: "Quido Ménage",
  description: "Service de ménage et nettoyage premium à domicile au Pays de Gex (01). Femme de ménage de confiance, produits éco, crédit d'impôt 50%.",
  publisher: { "@id": "https://www.quido.fr/#organization" },
  inLanguage: "fr-FR",
};

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD — Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* Schema.org JSON-LD — WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      {/* Schema.org JSON-LD — HousekeepingService (LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* Schema.org JSON-LD — Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* Schema.org JSON-LD — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Schema.org JSON-LD — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofTicker />
        <BentoShowcase />
        <AboutLocalSection />
        <ProcessTimeline />
        <ProofAndBooking />
        <FAQSection />

        {/* SEO Content Block — Hidden-in-plain-sight keyword-rich content for crawlers and users */}
        <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black mb-8 tracking-tight">
              Votre entreprise de ménage de confiance au Pays de Gex
            </h2>
            <div className="prose prose-gray prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                <strong>Quido Ménage</strong> est le service de <strong>ménage et nettoyage à domicile</strong> de référence dans le <strong>Pays de Gex</strong> (département de l'Ain, 01). 
                Nous intervenons quotidiennement à <strong>Gex</strong>, <strong>Ferney-Voltaire</strong>, <strong>Divonne-les-Bains</strong>, <strong>Saint-Genis-Pouilly</strong>, <strong>Prévessin-Moëns</strong>, <strong>Thoiry</strong>, <strong>Cessy</strong>, <strong>Ornex</strong> et dans l'ensemble des communes du bassin gessien et du Grand Genève.
              </p>
              <p>
                Que vous recherchiez une <strong>femme de ménage au Pays de Gex</strong>, une <strong>aide ménagère à Ferney-Voltaire</strong>, un <strong>nettoyage de fin de bail</strong> conforme aux exigences des régies suisses et françaises, ou un service de <strong>ménage Airbnb</strong> pour votre conciergerie locative — nous avons conçu une offre complète, professionnelle et entièrement agréée <strong>Services à la Personne (SAP)</strong>.
              </p>
              <p>
                Chaque intervention ouvre droit au <strong>crédit d'impôt de 50%</strong> avec possibilité d'<strong>avance immédiate URSSAF</strong> : concrètement, 200€ de ménage ne vous coûtent que 100€. 
                Nos agents d'entretien sont rigoureusement sélectionnés, déclarés, assurés en responsabilité civile professionnelle, et formés à nos protocoles de nettoyage écologique. Nous utilisons exclusivement des <strong>produits éco-responsables</strong>, sans javel ni ammoniac, pour protéger votre santé, vos enfants, vos animaux et l'environnement exceptionnel du Pays de Gex.
              </p>
              <p>
                Notre différence ? <strong>Zéro turnover</strong>. La même personne de confiance intervient chez vous à chaque visite. Nos équipes travaillent à nos côtés depuis des années — elles connaissent vos exigences, votre intérieur et vos habitudes. C'est cette continuité de service qui fait de Quido l'<strong>entreprise de nettoyage</strong> la plus recommandée par les familles et les professionnels du Pays de Gex.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
