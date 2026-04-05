"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqItems = [
  {
    question: "Comment sont sélectionnés vos intervenants ?",
    answer: "Chaque candidat passe par un processus rigoureux : vérification d'identité, d'expérience et de références. Nous réalisons des entretiens personnels pour nous assurer de leur fiabilité et de leur savoir-être.",
  },
  {
    question: "Puis-je garder le même intervenant à chaque fois ?",
    answer: "Absolument. Nous favorisons la continuité en vous attribuant un(e) intervenant(e) attitré(e) qui connaît vos habitudes et vos préférences.",
  },
  {
    question: "Quels produits d'entretien sont utilisés ?",
    answer: "Nos intervenants utilisent des produits professionnels efficaces et écologiques. Vous pouvez aussi fournir vos propres produits si vous le souhaitez.",
  },
  {
    question: "Comment modifier ou annuler une réservation ?",
    answer: "Modifiez ou annulez en ligne jusqu'à 24h avant le créneau prévu. Aucun frais dans ce délai.",
  },
  {
    question: "Êtes-vous assurés ?",
    answer: "Oui, chaque intervention est couverte par notre assurance responsabilité civile professionnelle.",
  },
  {
    question: "Quelles sont vos zones d'intervention ?",
    answer: "Nous intervenons dans les grandes métropoles et leurs agglomérations. Renseignez votre code postal lors de la réservation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Des <span className="relative inline-block z-10 text-black">questions<span className="absolute -bottom-1 -left-2 -right-4 h-[8px] bg-quido/80 -z-10 rotate-1 origin-left"></span></span> ?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
                Les réponses aux questions les plus fréquentes de nos clients.
              </p>
              <a
                href="/reservation"
                className="group inline-flex items-center gap-2 text-[14px] font-bold text-black border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors font-display w-fit"
              >
                Réserver maintenant
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:col-span-8">
            {faqItems.map((item, i) => (
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
