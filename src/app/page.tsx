import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import BentoShowcase from "@/components/BentoShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutLocalSection from "@/components/AboutLocalSection";
import ProofAndBooking from "@/components/ProofAndBooking";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.quido.fr/menage/#localbusiness",
  name: "Quido Ménage",
  description:
    "Service de ménage et nettoyage premium à domicile au Pays de Gex. Personnel vérifié, produits écologiques, ménage Airbnb, nettoyage fin de bail.",
  url: "https://www.quido.fr/menage",
  telephone: "+33602165671",
  email: "hello@quido.fr",
  image: "https://www.quido.fr/menage/images/about-quido.jpg",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, CESU",
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
  areaServed: [
    { "@type": "City", name: "Gex", sameAs: "https://fr.wikipedia.org/wiki/Gex_(Ain)" },
    { "@type": "City", name: "Ferney-Voltaire" },
    { "@type": "City", name: "Saint-Genis-Pouilly" },
    { "@type": "City", name: "Divonne-les-Bains" },
    { "@type": "City", name: "Cessy" },
    { "@type": "City", name: "Prévessin-Moëns" },
    { "@type": "City", name: "Thoiry" },
    { "@type": "City", name: "Ornex" },
    { "@type": "City", name: "Ségny" },
    { "@type": "City", name: "Crozet" },
    { "@type": "City", name: "Versonnex" },
    { "@type": "City", name: "Échenevex" },
    { "@type": "AdministrativeArea", name: "Pays de Gex" },
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
      datePublished: "2026-03-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Thomas D." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Enfin un service sur lequel on peut compter les yeux fermés. Le soin apporté aux détails est vraiment ce qui fait la différence.",
      datePublished: "2026-02-20",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Claire & Antoine" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Notre maison est toujours impeccable. La réservation est simple et l'intervention toujours ponctuelle. Un sans-faute.",
      datePublished: "2026-01-10",
    },
  ],
  sameAs: ["https://www.quido.fr"],
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.quido.fr/menage/#service",
  serviceType: "Ménage et nettoyage à domicile",
  provider: { "@id": "https://www.quido.fr/menage/#localbusiness" },
  areaServed: { "@type": "AdministrativeArea", name: "Pays de Gex, Ain" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de ménage Quido",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ménage régulier",
          description:
            "Entretien hebdomadaire ou bi-mensuel de votre domicile au Pays de Gex. Même intervenant(e) attitré(e) à chaque visite.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Grand nettoyage (Deep Clean)",
          description:
            "Nettoyage en profondeur du sol au plafond. Idéal pour le nettoyage de printemps à Gex, Ferney-Voltaire ou Divonne.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nettoyage fin de bail / après travaux",
          description:
            "Remise en état après déménagement ou rénovation. Nettoyage garanti pour la remise des clés aux régies du Pays de Gex et Genève.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ménage Airbnb / Conciergerie locative",
          description:
            "Nettoyage entre chaque voyageur pour locations Airbnb et conciergerie haut de gamme au Pays de Gex.",
        },
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment sont sélectionnés vos intervenants au Pays de Gex ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque candidat passe par un processus rigoureux : vérification d'identité, d'expérience et de références. Nous réalisons des entretiens personnels pour nous assurer de leur fiabilité et de leur savoir-être. Tous nos intervenants au Pays de Gex sont déclarés, assurés RC Pro, et formés à nos protocoles de nettoyage premium.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je garder le même intervenant à chaque fois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Nous favorisons la continuité en vous attribuant un(e) intervenant(e) attitré(e) qui connaît vos habitudes et vos préférences. C'est d'ailleurs notre force au Pays de Gex : nos agents travaillent à nos côtés depuis des années.",
      },
    },
    {
      "@type": "Question",
      name: "Quels produits d'entretien sont utilisés chez Quido ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos intervenants utilisent des produits professionnels écologiques, sans COV nocifs (pas de javel ni d'ammoniac). Vous pouvez aussi fournir vos propres produits si vous le souhaitez. Notre démarche éco-responsable protège votre famille, vos animaux et l'environnement du Pays de Gex.",
      },
    },
    {
      "@type": "Question",
      name: "Comment modifier ou annuler une réservation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modifiez ou annulez en ligne jusqu'à 24h avant le créneau prévu. Aucun frais dans ce délai.",
      },
    },
    {
      "@type": "Question",
      name: "Êtes-vous assurés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, chaque intervention au Pays de Gex est couverte par notre assurance responsabilité civile professionnelle (RC Pro). Vos biens sont protégés en cas de casse ou de dommage accidentel.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont vos zones d'intervention dans le Pays de Gex ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous intervenons dans l'ensemble du Pays de Gex (01) : Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains, Cessy, Prévessin-Moëns, Thoiry, Ornex, Ségny, Crozet et Versonnex.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous le ménage pour les logements Airbnb au Pays de Gex ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous proposons un service de ménage Airbnb et de conciergerie locative sur-mesure dans tout le Pays de Gex. Nettoyage entre chaque voyageur, préparation du linge, accueil — nous gérons l'intégralité de l'entretien de vos locations saisonnières.",
      },
    },
    {
      "@type": "Question",
      name: "Le ménage à domicile ouvre-t-il droit au crédit d'impôt de 50% ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. En tant qu'entreprise agréée Services à la Personne (SAP), nos prestations de ménage à domicile ouvrent droit au crédit d'impôt immédiat de 50%. Le coût réel de votre ménage est donc divisé par deux. L'avance immédiate URSSAF est disponible.",
      },
    },
  ],
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
      name: "Ménage",
      item: "https://www.quido.fr/menage",
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD — LocalBusiness */}
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
      </main>
      <Footer />
    </>
  );
}
