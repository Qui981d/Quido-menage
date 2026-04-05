"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Check } from "lucide-react";

const services = [
  {
    title: "Ménage régulier",
    description: "Hebdomadaire ou bi-mensuel, toujours la même personne de confiance.",
    details: "Notre formule de ménage régulier est conçue pour alléger votre quotidien. En choisissant une intervention hebdomadaire ou bi-mensuelle, vous bénéficiez du même agent d'entretien, spécifiquement formé aux exigences de votre foyer. Nous mettons en place un protocole incluant le lavage des sols, le dépoussiérage, l'assainissement des sanitaires et l'entretien de la cuisine."
  },
  {
    title: "Grand nettoyage",
    description: "En profondeur, du sol au plafond. Pour un intérieur comme neuf.",
    details: "Le Deep-Clean idéal pour le nettoyage de printemps. Nos équipes interviennent avec un équipement complet pour traiter en profondeur : nettoyage derrière le lourd électroménager, lessivage intégral des plinthes, dégraissage intensif de la cuisine et détartrage professionnel strict des salles d'eau."
  },
  {
    title: "Remise en état",
    description: "Après déménagement ou travaux. On remet tout en ordre.",
    details: "Rendre un appartement aux standards drastiques d'une régie ou éliminer la fine poussière blanche de plâtre après une rénovation est un métier. Nous avons le matériel (vapeur sèche, aspirateurs de chantier décolmatants) pour garantir la remise des clés et retrouver une hygiène irréprochable."
  },
  {
    title: "Sur mesure",
    description: "Vous décidez, on s'adapte. Chaque foyer est unique.",
    details: "Besoins atypiques ou conciergerie locative haut de gamme (Airbnb Premium) ? Entretien de baies vitrées de plusieurs mètres, ou résidence secondaire à préparer pour l'été ? Nous établissons un cahier des charges 100% personnalisé."
  },
];

export default function BentoShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpansion = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-24 lg:mb-32"
        >
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-quido mb-6 font-display">
            Nos services
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <h2
              className="font-display font-bold tracking-[-0.04em] text-black leading-[0.98]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
            >
              Un intérieur impeccable,{" "}
              <span className="relative inline-block z-10 text-black">sans compromis.<span className="absolute -bottom-1 -left-2 -right-4 h-[10px] bg-quido/80 -z-10 -rotate-1 origin-left"></span></span>
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-md lg:ml-auto">
              Du ménage hebdomadaire au grand nettoyage en profondeur,
              notre équipe s&apos;adapte à votre rythme de vie et à vos exigences.
            </p>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-[20px] overflow-hidden mb-20 lg:mb-28 group"
        >
          <div className="aspect-[21/9] sm:aspect-[2.5/1] relative">
            <Image
              src="/menage/images/hero-living-room.png"
              alt="Intérieur parfaitement nettoyé"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s]"
            />
            {/* Strong overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 z-10">
              <p className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 mb-3">
                Le plus populaire
              </p>
              <h3
                className="font-display font-bold text-white tracking-tight leading-[1.1] mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                Ménage régulier
              </h3>
              <p className="text-white/80 text-sm max-w-sm mb-6 hidden sm:block">
                87% de nos clients choisissent la formule régulière.
                La même personne de confiance, chaque semaine.
              </p>
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold font-display group/link hover:text-quido transition-colors"
              >
                Réserver →
              </a>
            </div>

            <div className="absolute top-8 right-8 sm:top-12 sm:right-12 text-right hidden md:block z-10">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-5 py-4">
                <p className="font-display text-5xl lg:text-6xl font-bold text-white tracking-tight">87%</p>
                <p className="text-white/70 text-sm mt-1">de clients fidèles</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services list */}
        <div ref={gridRef} className="relative">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-b border-gray-200"
            >
              <button
                onClick={() => toggleExpansion(i)}
                className="w-full flex items-center justify-between py-7 lg:py-9 transition-colors duration-300 text-left"
              >
                <div className="flex items-baseline gap-6 lg:gap-10">
                  <span className={`font-display text-[13px] font-bold tracking-tight tabular-nums transition-colors duration-300 ${isExpanded ? "text-black" : "text-gray-200 group-hover:text-black"}`}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-black tracking-tight transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-medium mt-1.5 max-w-md transition-colors duration-300 ${isExpanded ? "text-gray-600" : "text-gray-400 group-hover:text-gray-600"}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className={`shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ml-4 ${isExpanded ? "bg-black border-black" : "group-hover:opacity-100 group-hover:bg-gray-100"}`}>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? "text-white rotate-180" : "text-gray-400 group-hover:text-black"}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pt-2 pl-12 lg:pl-16 pr-4">
                      <p className="text-gray-600 leading-relaxed font-normal mb-6">
                        {service.details}
                      </p>
                      
                      <ul className="space-y-2 mb-8">
                        <li className="flex items-center gap-3 text-sm text-gray-500 font-normal">
                          <Check size={16} className="text-quido" /> Assurance tous risques incluse
                        </li>
                      </ul>

                      <a 
                        href="/menage/reservation" 
                        className="group/btn inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                      >
                        Réserver mon ménage
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )})}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-16 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-[16px] overflow-hidden aspect-[4/3] group"
          >
            <Image src="/menage/images/kitchen-premium.png" alt="Cuisine impeccable" fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white text-sm font-semibold font-display">Cuisines impeccables</p>
              <p className="text-white/70 text-xs">Chaque surface traitée avec soin</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative rounded-[16px] overflow-hidden aspect-[4/3] group"
          >
            <Image src="/menage/images/bathroom-premium.png" alt="Salle de bain immaculée" fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white text-sm font-semibold font-display">Salles de bain</p>
              <p className="text-white/70 text-xs">Désinfection et brillance</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative rounded-[16px] overflow-hidden aspect-[4/3] group col-span-2 lg:col-span-1"
          >
            <Image src="/menage/images/eco-products.png" alt="Produits éco-responsables" fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white text-sm font-semibold font-display">100% éco-responsable</p>
              <p className="text-white/70 text-xs">Produits certifiés</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
