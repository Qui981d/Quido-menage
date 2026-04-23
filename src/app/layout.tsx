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
    "Femme de ménage et service de nettoyage premium au Pays de Gex (Gex, Ferney-Voltaire, Divonne-les-Bains, Saint-Genis-Pouilly). Personnel vérifié, produits éco-responsables, ménage Airbnb, nettoyage fin de bail. Réservation en 2 min. Crédit d'impôt 50%. Entreprise agréée SAP.",
  alternates: {
    canonical: "/menage",
  },
  openGraph: {
    title: "Femme de Ménage & Nettoyage Premium au Pays de Gex | Quido",
    description:
      "Le service de ménage de référence au Pays de Gex. Personnel vérifié, produits éco-responsables, créneaux flexibles, ménage Airbnb. Réservation en 2 minutes. Crédit d'impôt 50%.",
    type: "website",
    locale: "fr_FR",
    siteName: "Quido Ménage",
    url: "https://www.quido.fr/menage",
    images: [
      {
        url: "/menage/images/about-quido.jpg",
        width: 1200,
        height: 630,
        alt: "Quido Ménage — Service de ménage et nettoyage premium au Pays de Gex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Femme de Ménage & Nettoyage Premium au Pays de Gex | Quido",
    description:
      "Le service de ménage de référence au Pays de Gex. Personnel vérifié, produits éco-responsables. Réservation en 2 minutes.",
    images: ["/menage/images/about-quido.jpg"],
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
  other: {
    "geo.region": "FR-01",
    "geo.placename": "Pays de Gex",
    "geo.position": "46.2437;6.0229",
    "ICBM": "46.2437, 6.0229",
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
