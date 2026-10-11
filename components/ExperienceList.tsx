"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

interface ExperienceListProps {
  onOpenConnectModal: () => void;
}

const experiencePoints = [
  "Build clean, balanced shapes engineered specifically for your hair texture",
  "Master clipper control with seamless transitions and zero-snag tapers",
  "Design beards that complement your jawline, cheekbones, and face structure",
  "Enjoy private consultation with warm beverage, steam towel, and tailored advice",
  "Transparent pricing with effortless direct communication on your preferred app",
];

export default function ExperienceList({ onOpenConnectModal }: ExperienceListProps) {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] border-t border-[#1b1915] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with layered composition */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-[#26231e] bg-[#121212] group shadow-2xl">
              <div className="aspect-[4/5] relative w-full">
                <Image
                  src="/images/service_fade.jpg"
                  alt="Seamless fade haircut and precision grooming"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#0e0e0e]/95 backdrop-blur-md border border-[#c5a059]/30">
                <p className="text-[10px] uppercase tracking-widest text-[#8c7343]">
                  Precision Standard
                </p>
                <p className="font-serif text-base text-[#f5f2eb]">
                  Every Angle Refined
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Values and Points */}
          <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span>Your Grooming Ritual</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal leading-tight">
              More than a cut.
              <br />
              <span className="italic font-light text-[#c5a059]">
                Build a standard.
              </span>
            </h2>

            <p className="text-[#9c978b] text-base leading-relaxed font-light">
              Leave with lasting confidence, sharp silhouettes that grow out
              gracefully, and a customized routine that keeps your aesthetic
              impeccable between appointments.
            </p>

            <div className="space-y-3.5 pt-2">
              {experiencePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 p-3 rounded-sm bg-[#111111] border border-[#1f1d18] hover:border-[#c5a059]/40 transition-colors"
                >
                  <div className="w-5 h-5 rounded-sm bg-[#c5a059]/15 border border-[#c5a059]/50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#c5a059]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#f5f2eb] font-light">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenConnectModal}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#d8b26e] font-semibold group cursor-pointer"
              >
                <span>Connect With Our Barbers To Consult</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
