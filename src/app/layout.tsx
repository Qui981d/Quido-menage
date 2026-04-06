import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "../../public/Font/ProximaNova-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Font/ProximaNova-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Font/ProximaNova-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Font/ProximaNova-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Font/ProximaNova-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/Font/ProximaNova-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-proxima",
  display: "swap",
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
      <body className={`${proximaNova.variable} font-body antialiased selection:bg-quido/30 selection:text-black min-h-screen flex flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
