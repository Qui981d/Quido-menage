import { articles } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conseils Ménage & Nettoyage au Pays de Gex | Blog Quido",
  description: "Découvrez les conseils d'experts Quido : astuces d'entretien ménager, guides nettoyage de printemps, fin de bail, produits écologiques et crédit d'impôt. Blog ménage Pays de Gex.",
  alternates: {
    canonical: "/menage/conseils",
  },
  openGraph: {
    title: "Conseils Ménage & Nettoyage au Pays de Gex | Blog Quido",
    description: "Tous nos conseils de professionnels du ménage : guides, astuces et expertise locale pour un intérieur impeccable au Pays de Gex.",
    type: "website",
    locale: "fr_FR",
    siteName: "Quido Ménage",
    url: "https://www.quido.fr/menage/conseils",
    images: [
      {
        url: "/menage/images/about-quido.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Quido Ménage — Conseils nettoyage et entretien",
      },
    ],
  },
};

export default function BlogHub() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Conseils & Expertise Ménage — Blog Quido",
    description: "Articles experts sur le ménage, le nettoyage et l'entretien à domicile au Pays de Gex.",
    url: "https://www.quido.fr/menage/conseils",
    isPartOf: { "@id": "https://www.quido.fr/menage/#website" },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.quido.fr/menage/conseils/${article.slug}`,
        name: article.title,
      })),
    },
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
        name: "Conseils & Blog",
        item: "https://www.quido.fr/menage/conseils",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="mb-16">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-black mb-6 font-display">
              MAGAZINE
            </p>
            <h1 
              className="font-display font-bold tracking-[-0.04em] text-black leading-[0.98] mb-6"
              style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
            >
              Conseils ménage & nettoyage.
            </h1>
            <p className="text-gray-500 text-lg lg:text-xl max-w-2xl">
              Les conseils de professionnels de l'entretien et du nettoyage pour maintenir un espace de vie impeccable au Pays de Gex et dans le bassin lémanique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article.slug} 
                href={`/conseils/${article.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden flex items-center justify-center bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-100 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h2 className="font-display font-bold text-2xl text-black leading-[1.2] mb-4 group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-500 line-clamp-3 mb-6 flex-1 text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-black uppercase tracking-widest">
                      Lire l'article
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
