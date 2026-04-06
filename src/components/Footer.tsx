"use client";

import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  service: [
    { label: "Nos services", href: "/#services" },
    { label: "Comment ça marche", href: "/#processus" },
    { label: "Avis clients", href: "/#avis" },
    { label: "Conseils", href: "/conseils" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "CGU", href: "/cgu" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark relative overflow-hidden grain">
      <div className="absolute top-0 left-[20%] w-[500px] h-[300px] bg-quido/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-quido/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-8">
        {/* Brand statement */}
        <div className="mb-16 lg:mb-20">
          <h2
            className="font-display font-bold tracking-[-0.04em] text-white leading-[0.98] mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Votre intérieur
            <br />
            mérite le <span className="text-quido">meilleur.</span>
          </h2>
          <Link href="/reservation" className="btn-primary-dark">
            Réserver un créneau
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <Image
              src="/menage/images/logo/logo-footer-green.png"
              alt="Quido - Service de ménage premium au Pays de Gex"
              width={260}
              height={90}
              className="h-10 md:h-14 w-auto"
            />
            <p className="text-sm text-white/50 leading-relaxed mt-3 max-w-xs">
              Le service de ménage premium par Quido. Personnel vérifié, créneaux flexibles.
            </p>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold text-white/30 uppercase tracking-[0.14em] mb-5">Le service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold text-white/30 uppercase tracking-[0.14em] mb-5">Informations</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold text-white/30 uppercase tracking-[0.14em] mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 -ml-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-quido transition-colors duration-300">
                    <Mail size={14} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1 font-display">Nous écrire</span>
                    <span className="text-sm font-medium text-white group-hover:text-quido transition-colors">hello@quido.fr</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 -ml-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-quido transition-colors duration-300">
                    <Phone size={14} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1 font-display">Nous appeler</span>
                    <span className="text-sm font-medium text-white group-hover:text-quido transition-colors">06 02 16 56 71</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 -ml-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-quido transition-colors duration-300">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1 font-display">Nous trouver</span>
                    <span className="text-sm font-medium text-white/80 leading-relaxed max-w-[200px]">181 rue du parc Jean Monnet,<br/>01630 Saint-Genis-Pouilly</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Quido. Tous droits réservés.</p>
          <p className="text-xs text-white/30">Fait avec soin en France 🇫🇷</p>
        </div>
      </div>
    </footer>
  );
}
