import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
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
    keywords: article.metadata.keywords,
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metadata.title,
    description: article.metadata.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.date,
    publisher: {
      "@type": "LocalBusiness",
      name: "Quido",
      url: "https://www.quido.fr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pays de Gex",
        addressRegion: "Ain",
        addressCountry: "FR"
      }
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <header className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <a href="/conseils" className="text-gray-400 hover:text-black font-bold uppercase tracking-widest text-[11px] transition-colors">
                Magazine
              </a>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="text-quido font-bold uppercase tracking-widest text-[11px]">
                {article.category}
              </span>
            </div>
            
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
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-a:text-quido hover:prose-a:text-quido-dark prose-li:my-1">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          {/* Call to action at the end of every article to maximize conversion */}
          <div className="mt-20 p-10 bg-gray-50 rounded-3xl border border-gray-100 text-center">
            <h3 className="font-display font-bold text-2xl text-black mb-4">Prêt à confier votre intérieur à des experts ?</h3>
            <p className="text-gray-500 mb-8">Obtenez un devis gratuit et sans engagement en moins de 2 minutes pour nos services au Pays de Gex.</p>
            <a href="/reservation" className="inline-flex bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
              Réserver un créneau
            </a>
          </div>

        </article>
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
