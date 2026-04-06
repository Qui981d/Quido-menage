"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutLocalSection() {
  return (
    <section className="bg-white py-24 lg:py-32 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Huge Editorial Text */}
          <div className="w-full lg:w-1/2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8 font-display"
            >
              Ancrage Local
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.05] mb-10"
            >
              L'excellence du ménage. <br/>
              Exclusivement dans <span className="relative inline-block z-10 text-black">le Pays de Gex.<span className="absolute -bottom-1 -left-2 -right-4 h-[10px] sm:h-[14px] bg-[#00cdb4]/80 -z-10 rotate-1 origin-left"></span></span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium"
            >
              <p>
                Depuis <strong>plus de 3 ans</strong>, Quido s'est imposé comme l'acteur de confiance dans la <strong>conciergerie locative de standing et l'entretien de propriétés</strong> privées partout dans le Pays de Gex (01).
              </p>
              <p>
                Nous connaissons parfaitement les enjeux de notre territoire. Trouver du personnel technique fiable et qualifié y est un défi local constant. C'est pourquoi nous avons changé les règles : <strong>nous formons, rémunérons solidement et fidélisons nos équipes.</strong>
              </p>
              <p>
                Résultat ? Nos agents d'entretien travaillent à nos côtés depuis des années. Ils connaissent vos exigences, maîtrisent des normes de propreté rigoureuses, et interviennent chez vous avec une <strong>efficacité et une discrétion absolues</strong>. Zéro turnover, zéro stress pour vous.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex flex-col">
                <span className="font-display font-bold text-4xl text-black">3 ans</span>
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">D'expertise locale</span>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-4xl text-black">100%</span>
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Agents de confiance</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Stark Editorial Image */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full border border-gray-100 p-2 lg:p-4 bg-gray-50 rounded-2xl"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image 
                  src="/menage/images/about-quido.jpg" 
                  alt="Équipe professionnelle Quido, entreprise de ménage et nettoyage à domicile au Pays de Gex (Ain)"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
