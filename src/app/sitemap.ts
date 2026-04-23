import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.quido.fr/menage";

  // Static pages with fixed dates (not new Date() which changes every build)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: "2026-04-23",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/reservation`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conseils`,
      lastModified: "2026-04-04",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: "2026-01-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: "2026-01-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/cgu`,
      lastModified: "2026-01-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Dynamic blog article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/conseils/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic city pages for Local SEO
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/ville/${city.slug}`,
    lastModified: "2026-04-23",
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...articlePages, ...cityPages];
}
