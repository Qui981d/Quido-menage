"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export function getFaqItems(cityName?: string) {
  const defaultRegion = "au Pays de Gex";
  const localizedRegion = cityName ? `à ${cityName}` : defaultRegion;
  const inRegion = cityName ? `à ${cityName}` : "dans le Pays de Gex";

  return [
    {
      question: `Comment sont sélectionnés vos intervenants ${localizedRegion} ?`,
      answer: `Chaque candidat passe par un processus rigoureux : vérification d'identité, d'expérience et de références. Nous réalisons des entretiens personnels pour nous assurer de leur fiabilité et de leur savoir-être. Tous nos agents de propreté ${localizedRegion} sont déclarés, assurés RC Pro, et formés à nos protocoles de nettoyage premium.`,
    },
    {
      question: "Puis-je garder le même intervenant à chaque fois ?",
      answer: `Absolument. Nous favorisons la continuité en vous attribuant un(e) intervenant(e) attitré(e) qui connaît vos habitudes et vos préférences. C'est d'ailleurs notre force ${localizedRegion} : nos agents travaillent à nos côtés depuis des années.`,
    },
    {
      question: "Quels produits d'entretien sont utilisés ?",
      answer: `Nos intervenants utilisent des produits professionnels écologiques, sans COV nocifs : pas de javel ni d'ammoniac. Nous privilégions des gammes éco-labelisées et la puissance de la vapeur sèche. Vous pouvez aussi fournir vos propres produits. Notre démarche éco-responsable protège votre famille, vos animaux et l'environnement ${inRegion}.`,
    },
    {
      question: "Comment modifier ou annuler une réservation ?",
      answer: "Modifiez ou annulez en ligne jusqu'à 24h avant le créneau prévu. Aucun frais dans ce délai. La flexibilité est au cœur de notre service.",
    },
    {
      question: "Êtes-vous assurés ?",
      answer: `Oui, chaque intervention ${localizedRegion} est couverte par notre assurance responsabilité civile professionnelle (RC Pro). En cas de casse accidentelle sur vos biens, tout est pris en charge sans aucune démarche de votre part.`,
    },
    {
      question: `Quelles sont vos zones d'intervention ${inRegion} ?`,
      answer: cityName
        ? `Nous intervenons prioritairement à ${cityName} et dans toutes les communes limitrophes. Renseignez votre code postal lors de la réservation pour confirmer la disponibilité.`
        : "Nous intervenons dans l'ensemble du Pays de Gex (01) : Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains, Cessy, Prévessin-Moëns, Thoiry, Ornex, Ségny, Crozet, Versonnex et Échenevex. Renseignez votre code postal lors de la réservation.",
    },
    {
      question: `Proposez-vous le ménage pour les locations Airbnb ${localizedRegion} ?`,
      answer: `Oui, nous proposons un service de ménage Airbnb et de conciergerie locative sur-mesure ${inRegion}. Nettoyage entre chaque voyageur, préparation du linge, mise en place — nous gérons l'intégralité de l'entretien de vos locations saisonnières avec la même exigence premium que pour nos clients particuliers.`,
    },
    {
      question: "Le ménage à domicile ouvre-t-il droit au crédit d'impôt de 50% ?",
      answer: "Oui. En tant qu'entreprise agréée Services à la Personne (SAP), nos prestations de ménage à domicile ouvrent droit au crédit d'impôt immédiat de 50%. Concrètement, 200€ de ménage ne vous coûtent que 100€. L'avance immédiate URSSAF est disponible, vous ne payez que le montant net dès la facturation.",
    },
  ];
}

export default function FAQSection({ cityName }: { cityName?: string } = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  
  const items = getFaqItems(cityName);

  return (
    <section id="faq" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* LEFT */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-black mb-6 font-display">
                FAQ
              </p>
              <h2
                className="font-display font-bold tracking-[-0.04em] text-black leading-[0.98] mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
              >
                Des <span className="relative inline-block z-10 text-black">questions<span className="absolute -bottom-1 -left-2 -right-4 h-[8px] bg-quido/80 -z-10 rotate-1 origin-left"></span></span> ?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
                Les réponses aux questions les plus fréquentes de nos clients {cityName ? `à ${cityName}` : "au Pays de Gex"}.
              </p>
              <Link
                href="/reservation"
                className="group inline-flex items-center gap-2 text-[14px] font-bold text-black border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors font-display w-fit"
              >
                Réserver maintenant
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:col-span-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-6 lg:py-7 text-left cursor-pointer group"
                >
                  <span className="font-display text-base lg:text-lg font-bold text-black pr-6 group-hover:text-gray-600 transition-colors duration-200">
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === i
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-black"
                    }`}
                  >
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-gray-500 text-[15px] leading-[1.8] max-w-2xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
