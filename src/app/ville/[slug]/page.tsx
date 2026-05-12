import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cities } from "@/lib/cities";
import Navbar from "@/components/Navbar";
import LocalContextBlock from "@/components/LocalContextBlock";
import BentoShowcase from "@/components/BentoShowcase";
import FAQSection from "@/components/FAQSection";
import { getFaqItems } from "@/lib/faq";
import Footer from "@/components/Footer";
import ProofAndBooking from "@/components/ProofAndBooking";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        {/* 
          SSR H1 Hero — Fully server-rendered, unique per city.
          This is the most critical SEO element on the page.
          NO client-side rendering, NO opacity:0, NO framer-motion.
        */}
        <section className="relative min-h-[70svh] flex flex-col overflow-hidden bg-white">
          <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
            <div className="max-w-3xl">
              <h1
                className="font-display font-bold tracking-[-0.05em] leading-[0.92] text-black mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                Femme de ménage à{" "}
                <span className="relative inline-block z-10">
                  {city.name}
                  <span className="absolute -bottom-1 -left-4 -right-4 h-[10px] bg-quido-yellow/80 -z-10 -rotate-1 origin-left"></span>
                </span>
                <br />
                <span className="text-gray-400" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                  ({city.postalCode}) — Service premium au Pays de Gex
                </span>
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-10">
                {city.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
                <Link href="/reservation" className="btn-primary btn-pulse">
                  Réserver un créneau à {city.name}
                  <ArrowRight size={17} />
                </Link>
                <Link href="/#services" className="btn-secondary">
                  Découvrir nos services
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-black tracking-tight">165+</p>
                  <p className="text-sm text-gray-400 mt-0.5">foyers entretenus</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-black tracking-tight">4.9/5</p>
                  <p className="text-sm text-gray-400 mt-0.5">note moyenne</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-quido tracking-tight">50%</p>
                  <p className="text-sm text-gray-400 mt-0.5">crédit d&apos;impôt</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique local context content per city */}
        <LocalContextBlock city={city} />

        {/* Services showcase — kept but lighter weight than homepage */}
        <BentoShowcase />

        {/* Social proof + CTA */}
        <ProofAndBooking />

        {/* Localized FAQ */}
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
