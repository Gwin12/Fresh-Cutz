"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PhilosophyProps {
  onOpenConnectModal: () => void;
}

export default function Philosophy({ onOpenConnectModal }: PhilosophyProps) {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#1b1915] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with overlay badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-[#23201a] bg-[#121212] group">
              <div className="aspect-[4/5] relative w-full">
                <Image
                  src="/images/service_cut.jpg"
                  alt="Precision scissor craft and sectioning at Fresh Cutz"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Stat Pill on Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-[#0e0e0e]/95 backdrop-blur-md border border-[#c5a059]/30">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#8c7343]">
                    Years At The Chair
                  </span>
                  <span className="text-sm font-serif text-[#c5a059] font-bold">
                    20+ Years
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span>Built For Serious Craft</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal leading-tight">
              Technique is learned.
              <br />
              <span className="italic font-light text-[#c5a059]">
                Mastery is trained.
              </span>
            </h2>

            <p className="text-[#9c978b] text-base leading-relaxed font-light">
              This isn&apos;t a collection of rushed haircuts. It&apos;s a complete system
              for understanding shape, control, facial symmetry, and the uncompromising
              standards that make a gentleman feel formidable.
            </p>

            <p className="text-[#9c978b] text-base leading-relaxed font-light">
              Every appointment takes you close to the craft with meticulous consultations,
              flawless taper gradients, and razor work executed with surgeon-grade precision.
            </p>

            {/* Key Stats Counter Row (Matches Behance: 46 / 5 / 4.9) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1f1d18]">
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] font-medium">
                  46<span className="text-[#c5a059] text-2xl">+</span>
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8c7343] mt-1">
                  Signature Styles
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] font-medium">
                  5
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8c7343] mt-1">
                  Core Disciplines
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] font-medium">
                  4.9
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8c7343] mt-1">
                  Student & Client Rating
                </p>
              </div>
            </div>

            {/* Direct Connect Link */}
            <div className="pt-4">
              <button
                onClick={onOpenConnectModal}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#d8b26e] font-semibold group cursor-pointer"
              >
                <span>Reserve Chair or Inquire Via Socials</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
