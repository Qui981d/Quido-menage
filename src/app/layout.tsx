import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quido.fr"),
  title: {
    default: "Ménage & Nettoyage à Domicile au Pays de Gex | Quido",
    template: "%s | Quido Ménage",
  },
  description:
    "Service de ménage premium au Pays de Gex (Gex, Ferney-Voltaire, Divonne-les-Bains, Saint-Genis-Pouilly). Personnel vérifié, produits éco, ménage Airbnb, nettoyage fin de bail. Réservation en 2 min. Crédit d'impôt 50%.",
  keywords: [
    "ménage pays de gex",
    "femme de ménage pays de gex",
    "nettoyage pays de gex",
    "ménage ferney voltaire",
    "femme de ménage ferney voltaire",
    "ménage gex",
    "femme de ménage gex",
    "ménage divonne les bains",
    "nettoyage saint genis pouilly",
    "ménage airbnb pays de gex",
    "conciergerie ménage gex",
    "nettoyage fin de bail pays de gex",
    "entreprise de nettoyage pays de gex",
    "aide ménagère gex",
    "ménage écologique pays de gex",
    "nettoyage après travaux gex",
    "service de ménage premium gex",
    "crédit impôt ménage ain",
    "ménage prévessin moëns",
    "nettoyage thoiry",
    "ménage cessy",
    "quido ménage",
  ],
  alternates: {
    canonical: "/menage",
  },
  openGraph: {
    title: "Ménage & Nettoyage Premium au Pays de Gex | Quido",
    description:
      "Le service de ménage de référence au Pays de Gex. Personnel vérifié, produits éco-responsables, créneaux flexibles, ménage Airbnb. Réservation en 2 minutes.",
    type: "website",
    locale: "fr_FR",
    siteName: "Quido Ménage",
    url: "https://www.quido.fr/menage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ménage & Nettoyage Premium au Pays de Gex | Quido",
    description:
      "Le service de ménage de référence au Pays de Gex. Personnel vérifié, produits éco-responsables. Réservation en 2 minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
