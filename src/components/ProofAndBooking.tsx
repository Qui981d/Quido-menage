"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    location: "Paris 7ème",
    quote: "Une prestation d'une qualité rare. L'équipe est discrète et le résultat est toujours au rendez-vous. C'est un soulagement quotidien.",
  },
  {
    name: "Thomas D.",
    location: "Lyon 6ème",
    quote: "Enfin un service sur lequel on peut compter les yeux fermés. Le soin apporté aux détails est vraiment ce qui fait la différence.",
  },
  {
    name: "Claire & Antoine",
    location: "Bordeaux",
    quote: "Notre maison est toujours impeccable. La réservation est simple et l'intervention toujours ponctuelle. Un sans-faute.",
  },
];

export default function ProofAndBooking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="avis" className="bg-white border-t border-b border-gray-200" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        
        {/* LEFT COMPONENT — Pure Editorial Testimonial */}
        <div className="p-10 sm:p-16 lg:p-24 xl:p-32 relative overflow-hidden flex flex-col justify-between min-h-[500px] lg:min-h-[700px]">
          <div className="font-display tracking-tight text-[100px] lg:text-[180px] leading-[0.5] text-black mb-12 lg:mb-20">
            “
          </div>
          
          <div className="relative z-10 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-full flex flex-col"
              >
                <blockquote 
                  className="font-display font-medium text-black tracking-tight leading-[1.1] mb-12"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {testimonials[active].quote}
                </blockquote>
                
                <div className="mt-auto flex items-center gap-6">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`transition-all duration-500 cursor-pointer h-[2px] ${
                          i === active ? "w-12 bg-black" : "w-4 bg-gray-200 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="h-4 w-px bg-gray-200" />
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-black">
                    {testimonials[active].name} <span className="text-gray-400 font-normal ml-2">{testimonials[active].location}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COMPONENT — Stark CTA */}
        <div className="p-10 sm:p-16 lg:p-24 xl:p-32 flex flex-col justify-center bg-gray-50/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8 font-display">
              Réservation express
            </p>
            
            <h2 
              className="font-display font-bold tracking-[-0.04em] text-black leading-[0.9] mb-10"
              style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)" }}
            >
              L'excellence,<br />
              chez <span className="relative inline-block z-10 text-black">vous.<span className="absolute -bottom-1 -left-2 -right-4 h-[12px] bg-quido-yellow/80 -z-10 rotate-2 origin-left"></span></span>
            </h2>
            
            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-md mb-16">
              Devenez l'un de nos clients privilégiés. Obtenez une simulation en moins de 2 minutes.
            </p>

            <a 
              href="/menage/reservation" 
              className="group inline-flex items-center gap-4 text-2xl lg:text-3xl font-display font-bold text-black border-b-2 border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
            >
              Évaluer mon besoin
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
