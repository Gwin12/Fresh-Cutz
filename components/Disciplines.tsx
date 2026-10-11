"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface DisciplinesProps {
  onSelectDiscipline: (title: string) => void;
}

const disciplinesData = [
  {
    id: "01",
    title: "The Foundation",
    category: "Consultation & Shear Work",
    lessons: "6 Lessons",
    image: "/images/service_cut.jpg",
    description: "Sectioning, tension control, and perimeter architecture.",
  },
  {
    id: "02",
    title: "Precision Fades",
    category: "Skin Tapers & Shadow Blends",
    lessons: "12 Lessons",
    image: "/images/service_fade.jpg",
    description: "Seamless drop and skin tapers using zero-gap clipper mechanics.",
  },
  {
    id: "03",
    title: "Beard Architecture",
    category: "Contour & Sculpting",
    lessons: "9 Lessons",
    image: "/images/service_beard.jpg",
    description: "Cheek symmetry, neckline framing, and botanical oil infusion.",
  },
  {
    id: "04",
    title: "Classic Shaving",
    category: "Straight Razor & Steam",
    lessons: "7 Lessons",
    image: "/images/hero_barber.jpg",
    description: "Feather blade precision, eucalyptus steam, and warm badger foam.",
  },
  {
    id: "05",
    title: "Cut & Style",
    category: "Complete Ritual",
    lessons: "10 Lessons",
    image: "/images/barber_tools.jpg",
    description: "Bespoke shear cut, beard sculpt, and matte clay finish.",
  },
];

export default function Disciplines({ onSelectDiscipline }: DisciplinesProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="disciplines" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span>Inside The Atelier</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal">
              Five disciplines. One complete standard.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#9c978b] leading-relaxed">
            Follow the program in order or connect with our master barbers to
            tailor your signature appointment.
          </p>
        </div>

        {/* 5 Cards Grid (Matching Behance layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {disciplinesData.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onSelectDiscipline(item.title)}
              className="group relative rounded-sm overflow-hidden border border-[#22201d] bg-[#111111] cursor-pointer transition-all duration-500 hover:border-[#c5a059] hover:shadow-2xl hover:shadow-[#c5a059]/20 flex flex-col h-[460px]"
            >
              {/* Background Image - Clean & Vivid with subtle bottom fade */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Subtle dark gradient overlay concentrated at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-black/20 group-hover:via-[#080808]/20 transition-all duration-500" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                {/* Top Number & Expand Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#c5a059] tracking-widest border border-[#c5a059]/40 bg-[#080808]/80 backdrop-blur-sm px-2.5 py-1 rounded-sm shadow-md">
                    {item.id}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#080808]/80 backdrop-blur-sm border border-[#333] group-hover:border-[#c5a059] group-hover:bg-[#c5a059] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9c978b] group-hover:text-[#080808] transition-colors" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="space-y-1.5 bg-[#080808]/85 backdrop-blur-md -mx-5 -mb-5 p-5 border-t border-[#22201d] group-hover:border-[#c5a059]/40 transition-colors">
                  <p className="text-[10px] uppercase tracking-wider text-[#c5a059] font-medium">
                    {item.id}
                  </p>
                  <h3 className="font-serif text-lg text-[#f5f2eb] group-hover:text-[#c5a059] transition-colors font-medium">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#8c7343] uppercase tracking-wider">
                    {item.lessons}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#9c978b] border-t border-[#1b1915] mt-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#9c978b]">
                      Direct Inquire
                    </span>
                    <span className="text-[#c5a059] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                      Reach Out <ArrowUpRight className="w-3 h-3 inline" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
