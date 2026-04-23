import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) return {};

  return {
    title: article.metadata.title,
    description: article.metadata.description,
    alternates: {
      canonical: `/menage/conseils/${article.slug}`,
    },
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      locale: "fr_FR",
      siteName: "Quido Ménage",
      url: `https://www.quido.fr/menage/conseils/${article.slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metadata.title,
      description: article.metadata.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find related articles (same category, or next/prev by date)
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      // Prioritize same category
      const aSameCategory = a.category === article.category ? 1 : 0;
      const bSameCategory = b.category === article.category ? 1 : 0;
      if (aSameCategory !== bSameCategory) return bSameCategory - aSameCategory;
      // Then by date (most recent first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metadata.title,
    description: article.metadata.description,
    image: `https://www.quido.fr${article.image}`,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.date,
    dateModified: article.date,
    publisher: {
      "@type": "Organization",
      name: "Quido Ménage",
      url: "https://www.quido.fr/menage",
      logo: {
        "@type": "ImageObject",
        url: "https://www.quido.fr/menage/images/logo/logo-footer-green.png",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saint-Genis-Pouilly",
        postalCode: "01630",
        addressRegion: "Ain",
        addressCountry: "FR",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.quido.fr/menage/conseils/${article.slug}`,
    },
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.quido.fr/menage/#website",
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
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: `https://www.quido.fr/menage/conseils/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      
      {/* Schema.org JSON-LD — Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Schema.org JSON-LD — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-white pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <header className="mb-14">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-3 mb-6">
              <Link href="/conseils" className="text-gray-400 hover:text-black font-bold uppercase tracking-widest text-[11px] transition-colors">
                Magazine
              </Link>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="text-quido font-bold uppercase tracking-widest text-[11px]">
                {article.category}
              </span>
            </nav>
            
            <h1 
              className="font-display font-bold tracking-tight text-black leading-[1.05] mb-8"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
            >
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 border-b border-gray-100 pb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-display font-bold text-gray-500">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-black text-sm">{article.author}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{article.readTime} de lecture</span>
                </div>
              </div>
            </div>
          </header>

          <div className="relative w-full h-[400px] mb-16 rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
              priority
            />
          </div>

          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-a:text-quido hover:prose-a:text-quido-dark prose-li:my-1">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          {/* Call to action at the end of every article to maximize conversion */}
          <div className="mt-20 p-10 bg-gray-50 rounded-3xl border border-gray-100 text-center">
            <h3 className="font-display font-bold text-2xl text-black mb-4">Prêt à confier votre intérieur à des experts ?</h3>
            <p className="text-gray-500 mb-8">Obtenez un devis gratuit et sans engagement en moins de 2 minutes pour nos services de ménage au Pays de Gex.</p>
            <Link href="/reservation" className="inline-flex bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
              Réserver un créneau
            </Link>
          </div>

        </article>

        {/* Related Articles — Internal linking for SEO juice */}
        {relatedArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
            <h2 className="font-display font-bold text-2xl text-black mb-10 tracking-tight">
              Articles connexes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/conseils/${related.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-40 relative overflow-hidden bg-gray-100">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      {related.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-black leading-tight group-hover:text-gray-600 transition-colors mb-3">
                      {related.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 flex-1">{related.excerpt}</p>
                    <span className="mt-4 text-xs font-bold text-black uppercase tracking-widest">
                      Lire →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
