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
  title: "Quido Ménage — Votre intérieur mérite le meilleur",
  description:
    "Service de ménage premium par Quido. Personnel vérifié, créneaux flexibles, réservation en 2 minutes. Récupérez vos week-ends.",
  keywords: [
    "quido ménage",
    "nettoyage à domicile",
    "aide ménagère professionnelle",
    "service de ménage premium",
    "réservation ménage en ligne",
    "personnel de maison vérifié",
  ],
  openGraph: {
    title: "Quido Ménage — Votre intérieur mérite le meilleur",
    description:
      "Service de ménage premium par Quido. Personnel vérifié, créneaux flexibles, réservation en 2 minutes.",
    type: "website",
    locale: "fr_FR",
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
