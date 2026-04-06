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
    "@type": "LocalBusiness",
    "@id": `https://www.quido.fr/menage/ville/${city.slug}/#localbusiness`,
    name: `Quido Ménage - ${city.name}`,
    description: city.metaDescription,
    url: `https://www.quido.fr/menage/ville/${city.slug}`,
    telephone: "+33602165671",
    email: "hello@quido.fr",
    image: "https://www.quido.fr/menage/images/about-quido.jpg",
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
      </main>
      <Footer />
    </>
  );
}
