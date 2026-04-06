import { CityContent } from "@/lib/cities";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function LocalContextBlock({ city }: { city: CityContent }) {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* TEXT CONTENT */}
          <div className="relative z-10">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 font-display">
              VOTRE AGENCE LOCALE
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-black leading-[1.1] mb-8">
              {city.contextTitle}
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10">
              {city.contextParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-quido shrink-0" />
                <span className="text-black font-medium">Intervention rapide prioritaire à {city.name} ({city.postalCode})</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-quido shrink-0" />
                <span className="text-black font-medium">Agent exclusif et régulier dédié à votre secteur</span>
              </li>
            </ul>

            <Link href="/reservation" className="btn-primary-dark w-fit">
              Demander un devis gratuit
            </Link>
          </div>

          {/* VISUAL & STATS */}
          <div className="relative">
             <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl">
               <Image 
                 src="/menage/images/kitchen-premium.png" 
                 alt={`Entretien premium de logement à ${city.name}`} 
                 fill 
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-display font-bold text-2xl mb-2">Exigence & Discrétion</p>
                  <p className="text-white/80 text-sm">Le standard Quido pour votre intérieur.</p>
               </div>
             </div>

             {/* Floating badge */}
             <div className="absolute -left-6 -top-6 lg:-left-12 lg:top-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]">
               <div className="text-4xl font-display font-bold text-quido mb-2">50%</div>
               <p className="text-black text-sm font-bold mb-1">Crédit d'impôt</p>
               <p className="text-gray-500 text-xs leading-snug">Avance immédiate URSSAF disponible !</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
