"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Expression du besoin",
    detail: "Spécifiez vos attentes : surface, fréquence, et particularités de votre intérieur. Quelques minutes suffisent.",
  },
  {
    title: "Matching sur-mesure",
    detail: "Nous sélectionnons l'intervenant idéal selon vos critères d'exigence, vos horaires, et votre quartier.",
  },
  {
    title: "Intervention premium",
    detail: "Ponctualité, discrétion et efficacité. Votre intérieur est entre de bonnes mains, à chaque visite.",
  },
  {
    title: "Suivi & flexibilité",
    detail: "Gérez vos plannings, évaluez la prestation, mettez en pause ou ajustez en toute liberté depuis votre espace.",
  },
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="processus"
      className="relative py-28 lg:py-48 bg-dark grain overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-quido/8 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
          
          {/* LEFT — Sticky Sticky Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:w-5/12 lg:sticky lg:top-40"
          >
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-quido mb-6 font-display">
              Le Processus
            </p>
            <h2
              className="font-display font-bold tracking-[-0.04em] text-white leading-[0.98] mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
            >
              Conçu pour votre <br />
              <span className="relative inline-block z-10 text-white">tranquillité.<span className="absolute -bottom-1 -left-2 -right-4 h-[12px] bg-quido-yellow/80 -z-10 rotate-1 origin-left"></span></span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-md mb-12">
              Nous avons éliminé toute friction. Dites-nous ce qu&apos;il vous faut, nous nous occupons du reste.
            </p>
            <Link href="/reservation" className="btn-primary-dark group hidden lg:inline-flex">
               Réserver un créneau
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* RIGHT — Scrolling Editorial Timeline */}
          <div className="lg:w-7/12 relative">
            {/* Vertical Line */}
            <div className="absolute left-[20px] lg:left-[40px] top-4 bottom-0 w-px bg-white/10">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent origin-top"
              />
            </div>

            <div className="flex flex-col gap-24 lg:gap-36 py-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="relative pl-[70px] lg:pl-[120px] group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[16px] lg:left-[36px] top-[14px] w[9px] h-[9px] w-[9px] rounded-full bg-dark border-2 border-white group-hover:bg-white transition-colors duration-300 z-10 ring-8 ring-dark" />
                  
                  {/* Big Number Accent */}
                  <div className="absolute -left-4 lg:left-0 -top-6 lg:-top-10 font-display font-bold text-white/[0.08] text-[100px] lg:text-[140px] leading-none pointer-events-none select-none -z-10 group-hover:text-white/[0.12] transition-colors duration-500">
                    0{i + 1}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-5 transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-lg lg:text-xl leading-relaxed max-w-xl group-hover:text-white/70 transition-colors duration-500">
                    {step.detail}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-20 pl-[70px] lg:hidden">
               <Link href="/reservation" className="btn-primary-dark group">
                 Commencer
                 <ArrowRight size={16} />
               </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
