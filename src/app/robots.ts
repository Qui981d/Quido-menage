import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.quido.fr/menage/sitemap.xml",
    // IMPORTANT: Ce robots.txt est servi à /menage/robots.txt
    // Google ne lit que le robots.txt racine à quido.fr/robots.txt
    // Il faut AUSSI ajouter la ligne suivante dans le robots.txt 
    // du projet principal (conciergerie) :
    // Sitemap: https://www.quido.fr/menage/sitemap.xml
  };
}
