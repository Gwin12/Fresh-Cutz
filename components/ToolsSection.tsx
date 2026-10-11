"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

interface ToolsSectionProps {
  onOpenConnectModal: () => void;
}

const toolChecklist = [
  {
    title: "Hand-Forged Japanese Steel Shears",
    desc: "Ergonomic convex edge shears calibrated for micro-tension and featherweight slicing.",
  },
  {
    title: "Surgical Zero-Gap Cordless Clippers",
    desc: "High-torque rotary motors with diamond-like carbon blades for zero-snag tapers.",
  },
  {
    title: "Product & Sanitation Essentials",
    desc: "Hospital-grade multi-step sterilization, UV sanitizers, and fresh neck strips every client.",
  },
  {
    title: "Artisanal Botanical Elixirs & Balms",
    desc: "Cold-pressed jojoba, cedarwood, and sandalwood pomades formulated for healthy skin & scalp.",
  },
];

export default function ToolsSection({ onOpenConnectModal }: ToolsSectionProps) {
  return (
    <section id="the-kit" className="py-24 bg-[#0a0a0a] border-t border-[#1b1915] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image of barber kit */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#26231e] bg-[#121212] group shadow-2xl">
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/images/barber_tools.jpg"
                  alt="High end barber tools, Japanese shears, gold clippers, and straight razor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-sm bg-[#0e0e0e]/95 backdrop-blur-md border border-[#c5a059]/30 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#f5f2eb] font-medium">
                  Curated Equipment Standard
                </span>
                <span className="text-[11px] font-mono text-[#c5a059]">
                  100% Sanitized
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist (Matches Behance layout) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span>Tools Of The Trade</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal leading-tight">
              Know your kit.
              <br />
              <span className="italic font-light text-[#c5a059]">
                Control your result.
              </span>
            </h2>

            <p className="text-[#9c978b] text-base leading-relaxed font-light">
              Understand what every tool does, how to maintain it, and why surgical
              equipment makes the difference between an average cut and a transformative
              silhouette.
            </p>

            {/* Checklist items */}
            <div className="space-y-4 pt-2">
              {toolChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3 rounded-sm bg-[#111111] border border-[#1f1d18] hover:border-[#c5a059]/40 transition-colors"
                >
                  <div className="w-5 h-5 rounded-sm bg-[#c5a059]/15 border border-[#c5a059]/50 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#f5f2eb]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#9c978b] mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenConnectModal}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#d8b26e] font-semibold group cursor-pointer"
              >
                <span>Ask Us About Equipment Or Book A Chair</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
