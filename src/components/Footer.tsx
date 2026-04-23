"use client";

import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-[#121212] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-8">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          
          {/* Logo & Intro */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/menage/images/logo/logo-footer-green.png"
                alt="Quido Ménage — Service de ménage et nettoyage premium au Pays de Gex"
                width={260}
                height={90}
                className="h-10 md:h-14 w-auto"
              />
            </Link>
            <p className="text-[13px] text-white/50 leading-relaxed max-w-[280px]">
              Service de ménage premium au Pays de Gex. Entretien régulier, nettoyage de fin de bail et interventions ponctuelles. Profitez de votre temps libre en toute sérénité.
            </p>
            <a 
              href="https://www.instagram.com/quido.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Suivre Quido sur Instagram"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all mt-2"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Ménage Régulier</Link></li>
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Grand Nettoyage (Deep Clean)</Link></li>
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Nettoyage Fin de bail</Link></li>
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Ménage Airbnb</Link></li>
              <li><Link href="/reservation" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Estimation Gratuite</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-bold text-base text-white mb-6">Entreprise</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Nous contacter</Link></li>
              <li><Link href="/conseils" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Conseils & Blog</Link></li>
              <li><Link href="/#faq" className="text-sm text-white/50 hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/reservation" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Prendre rendez-vous</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base text-white mb-6">Contact</h4>
            <ul className="space-y-4 border-l border-transparent lg:pl-0">
              <li>
                <a href="mailto:hello@quido.fr" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200">
                  <Mail size={15} className="text-quido shrink-0" />
                  hello@quido.fr
                </a>
              </li>
              <li>
                <a href="tel:+33602165671" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200">
                  <Phone size={15} className="text-quido shrink-0" />
                  06 02 16 56 71
                </a>
              </li>
              <li>
                <address className="flex items-start gap-3 text-sm text-white/50 not-italic">
                  <MapPin size={15} className="text-quido shrink-0 mt-1" />
                  <span className="leading-relaxed">181 rue du Parc Jean Monnet<br/>01630 Saint-Genis-Pouilly</span>
                </address>
              </li>
            </ul>
          </div>

        </div>

        {/* Cities — Internal linking for SEO */}
        <nav aria-label="Nos zones d'intervention" className="border-t border-white/10 py-8">
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-5 font-bold">
            MÉNAGE ET NETTOYAGE DANS LE PAYS DE GEX
          </p>
          <div className="flex flex-wrap items-center gap-y-3 text-[13px] text-white/40">
            {cities.map((city, index) => (
              <span key={city.slug} className="flex items-center">
                <Link href={`/ville/${city.slug}`} className="hover:text-white transition-colors">
                  {city.name}
                </Link>
                {index < cities.length - 1 && <span className="mx-3 text-white/10">·</span>}
              </span>
            ))}
          </div>
        </nav>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-white/40">© {new Date().getFullYear()} Quido Ménage. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/mentions-legales" className="text-[13px] text-white/40 hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/confidentialite" className="text-[13px] text-white/40 hover:text-white transition-colors">Politique de Confidentialité</Link>
            <Link href="/cgu" className="text-[13px] text-white/40 hover:text-white transition-colors">CGU</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
