"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getFaqItems } from "@/lib/faq";

// Re-export for backward compatibility
export { getFaqItems } from "@/lib/faq";

export default function FAQSection({ cityName }: { cityName?: string } = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  
  const items = getFaqItems(cityName);

  return (
    <section id="faq" aria-label="Questions fréquentes sur le ménage" className="py-28 lg:py-36 bg-white">
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

          {/* RIGHT — FAQ items always rendered in DOM for crawlability */}
          <div className="lg:col-span-8">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between py-6 lg:py-7 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-display text-base lg:text-lg font-bold text-black pr-6 group-hover:text-gray-600 transition-colors duration-200">
                      {item.question}
                    </span>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-black"
                      }`}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  {/* 
                    CRITICAL SEO FIX: Content is ALWAYS in the DOM for Google crawling.
                    We use CSS overflow + max-height for visual show/hide instead of 
                    conditional JS rendering (which hides content from crawlers).
                  */}
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                      opacity: isOpen ? 1 : 0,
                      transition: "max-height 0.4s cubic-bezier(0.25, 0.4, 0.25, 1), opacity 0.3s ease",
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 text-gray-500 text-[15px] leading-[1.8] max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
