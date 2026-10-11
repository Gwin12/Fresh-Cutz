"use client";

import React from "react";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

interface MasterBarberProps {
  onOpenConnectModal: () => void;
}

export default function MasterBarber({ onOpenConnectModal }: MasterBarberProps) {
  return (
    <section id="master-barber" className="py-24 bg-[#080808] border-t border-[#1b1915] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bio & Accolades */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span>Your Master Barber &amp; Founder</span>
            </div>

            <div className="space-y-1">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal">
                Marcus Cole
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8c7343] font-medium">
                Master Barber • Atelier Founder • Educator
              </p>
            </div>

            {/* Pull Quote (Matches Behance) */}
            <div className="pl-5 border-l-2 border-[#c5a059] py-2">
              <p className="font-serif text-lg sm:text-xl italic text-[#f5f2eb] font-light leading-relaxed">
                &ldquo;The difference between good and exceptional is rarely talent.
                It&apos;s the standard you repeat.&rdquo;
              </p>
            </div>

            <p className="text-[#9c978b] text-base leading-relaxed font-light">
              For more than two decades, Marcus has honed his craft behind the chair,
              catering to executives, artists, and gentlemen seeking distinction.
              Known for unmatched scissor control, bespoke beard architecture, and
              a private studio atmosphere rooted in quiet elegance.
            </p>

            {/* Accolades (Matches Behance: 2,400+ / 18) */}
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-[#1f1d18]">
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] font-medium">
                  2,400<span className="text-[#c5a059]">+</span>
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8c7343] mt-1">
                  Gentlemen Styled
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] font-medium">
                  18
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8c7343] mt-1">
                  Industry Accolades
                </p>
              </div>
            </div>

            {/* Direct Social & Email Actions for Marcus */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#141414] hover:bg-[#1a1a1a] border border-[#2b2720] hover:border-[#c5a059] text-xs text-[#f5f2eb] transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-[#c5a059]" />
                <span>DM @marcus_freshcutz</span>
              </a>

              <a
                href="mailto:marcus@freshcutz.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#141414] hover:bg-[#1a1a1a] border border-[#2b2720] hover:border-[#c5a059] text-xs text-[#f5f2eb] transition-all"
              >
                <Mail className="w-4 h-4 text-[#c5a059]" />
                <span>Email Marcus Directly</span>
              </a>

              <button
                onClick={onOpenConnectModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#c5a059] hover:bg-[#d8b26e] text-[#080808] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Book Marcus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Founder Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-2 rounded-sm border border-[#c5a059]/20 rotate-1 pointer-events-none" />
              <div className="relative rounded-sm overflow-hidden border border-[#26231e] bg-[#121212] shadow-2xl group">
                <div className="aspect-[3/4] relative w-full">
                  <Image
                    src="/images/barber_founder.jpg"
                    alt="Marcus Cole - Founder and Master Barber of Fresh Cutz"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-70" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-sm bg-[#0e0e0e]/95 backdrop-blur-md border border-[#c5a059]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider text-[#f5f2eb]">
                      Accepting Private Consultations
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#c5a059]">
                    VIP Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
