"use client";

import { MapPin } from "lucide-react";

const cities = [
  "Gex",
  "Ferney-Voltaire",
  "Saint-Genis-Pouilly",
  "Cessy",
  "Prévessin-Moëns",
  "Thoiry",
  "Divonne-les-Bains",
  "Gex",
  "Ferney-Voltaire",
  "Saint-Genis-Pouilly",
  "Cessy",
  "Prévessin-Moëns",
  "Thoiry",
  "Divonne-les-Bains",
];

export default function SocialProofTicker() {
  return (
    <section className="py-5 bg-white border-b border-gray-200 overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {cities.map((city, i) => (
            <div key={i} className="flex items-center gap-2 px-6 whitespace-nowrap">
              <MapPin size={14} className="text-[#E63946] shrink-0" />
              <span className="text-[13px] font-medium text-gray-500">{city}</span>
              <span className="text-gray-200 ml-4">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
