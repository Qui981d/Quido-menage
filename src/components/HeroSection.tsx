"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Shield, Sparkles, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

const badges = [
  { icon: Shield, label: "Assuré RC Pro" },
  { icon: Sparkles, label: "Personnel vérifié" },
  { icon: Leaf, label: "Produits éco" },
];

interface HeroSectionProps {
  cityName?: string;
  customTitle?: React.ReactNode;
  customSubtitle?: string;
}

export default function HeroSection({ cityName, customTitle, customSubtitle }: HeroSectionProps = {}) {
  /* ─── Default SEO-rich text content (always in the DOM for crawlers) ─── */
  const defaultTitle = cityName
    ? <>FEMME DE MÉNAGE<br />À <span className="relative inline-block z-10 uppercase">{cityName}.<span className="absolute -bottom-1 -left-4 -right-4 h-[10px] bg-quido-yellow/80 -z-10 -rotate-1 origin-left"></span></span></>
    : <>MÉNAGE &<br />NETTOYAGE{" "}<span className="relative inline-block z-10">À DOMICILE.<span className="absolute -bottom-1 -left-4 -right-4 h-[10px] bg-quido-yellow/80 -z-10 -rotate-1 origin-left"></span></span></>;

  const defaultSubtitle = cityName
    ? `Service de ménage et nettoyage premium à ${cityName}. Personnel de confiance vérifié, produits éco-responsables, créneaux flexibles. Crédit d'impôt 50%. Entreprise agréée Services à la Personne.`
    : "Votre femme de ménage de confiance au Pays de Gex. De Ferney-Voltaire à Divonne-les-Bains : personnel vérifié, produits éco-responsables, créneaux flexibles. Crédit d'impôt 50%.";

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-white">
      <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* LEFT */}
          <div>

            {/* 
              SEO-CRITICAL: H1 is rendered with full text in the initial HTML.
              The motion wrapper only animates the entrance but content is 
              always present in the DOM for search engine crawlers.
              Using animate-fade-up CSS class as fallback for non-JS.
            */}
            <h1
              className="font-display font-bold tracking-[-0.05em] leading-[0.92] text-black mb-8 animate-fade-up"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              {customTitle || defaultTitle}
            </h1>

            {/* Keyword-rich subtitle — also SSR visible */}
            <p
              className="text-lg text-gray-500 leading-relaxed max-w-md mb-10 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              {customSubtitle || defaultSubtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-14"
            >
              <Link href="/reservation" className="btn-primary btn-pulse">
                Réserver un créneau
                <ArrowRight size={17} />
              </Link>
              <Link href="/#services" className="btn-secondary">
                Découvrir nos services
              </Link>
            </motion.div>

            {/* Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-8"
            >
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  <AnimatedCounter target={165} suffix="+" />
                </p>
                <p className="text-sm text-gray-400 mt-0.5">foyers entretenus</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  4.9/5
                </p>
                <p className="text-sm text-gray-400 mt-0.5">note moyenne</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-quido tracking-tight">
                  2 min
                </p>
                <p className="text-sm text-gray-400 mt-0.5">pour réserver</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-full rounded-bl-[32px] overflow-hidden aspect-[3/4]">
                <Image src="/menage/images/hero-living-room.png" alt="Salon nettoyé par Quido, service de ménage à domicile dans le Pays de Gex" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 400px" priority />
              </div>
              <div className="flex flex-col gap-4 pt-12">
                <div className="relative rounded-[32px] overflow-hidden aspect-square">
                  <Image src="/menage/images/kitchen-premium.png" alt="Cuisine impeccable après nettoyage professionnel à Ferney-Voltaire, Pays de Gex" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 300px" />
                </div>
                <div className="relative rounded-full rounded-tr-[32px] overflow-hidden aspect-[4/3]">
                  <Image src="/menage/images/eco-products.png" alt="Produits ménagers écologiques utilisés par Quido au Pays de Gex" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 300px" />
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-1/3 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <p className="text-black text-[13px] font-bold font-display"><span className="text-quido-yellow-dark">✨</span> +165 foyers</p>
              <p className="text-gray-500 text-[11px]">nous font confiance</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
