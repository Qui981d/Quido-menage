import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cities } from "@/lib/cities";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import LocalContextBlock from "@/components/LocalContextBlock";
import BentoShowcase from "@/components/BentoShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQSection from "@/components/FAQSection";
import { getFaqItems } from "@/lib/faq";
import Footer from "@/components/Footer";
import ProofAndBooking from "@/components/ProofAndBooking";

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return {};
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `/menage/ville/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://www.quido.fr/menage/ville/${city.slug}`,
      type: "website",
      locale: "fr_FR",
      siteName: "Quido Ménage",
      images: [
        {
          url: "/menage/images/about-quido.jpg",
          width: 1200,
          height: 630,
          alt: `Quido Ménage — Service de ménage à ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
      images: ["/menage/images/about-quido.jpg"],
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  const customHeroTitle = (
    <>
      MÉNAGE
      <br />
      À <span className="relative inline-block z-10 uppercase">{city.name}.<span className="absolute -bottom-1 -left-4 -right-4 h-[10px] bg-quido-yellow/80 -z-10 -rotate-1 origin-left"></span></span>
    </>
  );

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HousekeepingService",
    "@id": `https://www.quido.fr/menage/ville/${city.slug}/#localbusiness`,
    name: `Quido Ménage — Femme de ménage à ${city.name}`,
    alternateName: `Service de ménage et nettoyage à ${city.name} (${city.postalCode})`,
    description: city.metaDescription,
    url: `https://www.quido.fr/menage/ville/${city.slug}`,
    telephone: "+33602165671",
    email: "hello@quido.fr",
    image: "https://www.quido.fr/menage/images/about-quido.jpg",
    priceRange: "€€",
    parentOrganization: { "@id": "https://www.quido.fr/menage/#localbusiness" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "181 rue du parc Jean Monnet",
      addressLocality: "Saint-Genis-Pouilly",
      postalCode: "01630",
      addressRegion: "Ain",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      sameAs: `https://fr.wikipedia.org/wiki/${encodeURIComponent(city.name)}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "165",
    },
    sameAs: ["https://www.quido.fr", "https://www.instagram.com/quido.fr"],
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
        name: "Ménage au Pays de Gex",
        item: "https://www.quido.fr/menage",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Ménage à ${city.name}`,
        item: `https://www.quido.fr/menage/ville/${city.slug}`,
      },
    ],
  };

  // FAQ JSON-LD for city page — uses localized FAQ items
  const faqItems = getFaqItems(city.name);
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection 
          cityName={city.name} 
          customTitle={customHeroTitle} 
          customSubtitle={city.heroSubtitle} 
        />
        <SocialProofTicker />
        <LocalContextBlock city={city} />
        <BentoShowcase />
        <ProcessTimeline />
        <ProofAndBooking />
        <FAQSection cityName={city.name} />

        {/* SEO Content Block — Unique content per city for search engines */}
        {city.seoContent && (
          <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-black mb-8 tracking-tight">
                {city.seoTitle || `Service de ménage professionnel à ${city.name}`}
              </h2>
              <div className="prose prose-gray prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                {city.seoContent.map((paragraph, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
