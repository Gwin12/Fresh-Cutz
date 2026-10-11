"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

interface HeroProps {
  onOpenConnectModal: () => void;
}

export default function Hero({ onOpenConnectModal }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080808]">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#c5a059]/30 bg-[#14120e]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#c5a059]">
                The Complete Men&apos;s Atelier
              </span>
            </div>

            {/* Massive Editorial Heading (Matches Behance) */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#f5f2eb] leading-[1.08]">
              Master the craft.
              <br />
              <span className="italic font-light text-[#c5a059]">
                Own your standard.
              </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-base sm:text-lg text-[#9c978b] font-light leading-relaxed">
              Experience the precision, discipline, and uncompromising attention
              of bespoke men&apos;s grooming. Every consultation, taper, and
              straight-razor line is calculated to elevate your natural presence.
            </p>

            {/* CTAs (Direct to Contacts & Socials as requested) */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConnectModal}
                className="group inline-flex items-center justify-center gap-3 bg-[#c5a059] hover:bg-[#d8b26e] text-[#080808] px-7 py-4 rounded-sm font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#c5a059]/25 cursor-pointer"
              >
                <span>Connect &amp; Book Direct</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#disciplines"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-[#2b2720] hover:border-[#c5a059]/60 text-[#f5f2eb] hover:text-[#c5a059] bg-[#101010]/60 hover:bg-[#151515] text-xs uppercase tracking-widest font-medium transition-all duration-300"
              >
                <span>View Disciplines</span>
              </a>
            </div>

            {/* Direct Connect Quick Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#9c978b]">
              <span className="text-[11px] uppercase tracking-wider text-[#8c7343]">
                Instant Reach:
              </span>
              <a
                href="#contact"
                className="hover:text-[#c5a059] flex items-center gap-1.5 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>@freshcutz</span>
              </a>
              <span className="text-[#2a2720]">•</span>
              <a
                href="mailto:contact@freshcutz.com"
                className="hover:text-[#c5a059] flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Email Concierge</span>
              </a>
              <span className="text-[#2a2720]">•</span>
              <a
                href="https://wa.me/15553827491"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a059] flex items-center gap-1.5 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>WhatsApp Fast-Track</span>
              </a>
            </div>

            {/* Key Trust Stats Bar */}
            <div className="pt-6 border-t border-[#22201d] grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#f5f2eb]">
                  20<span className="text-[#c5a059]">+</span>
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8c7343] mt-0.5">
                  Years In Chair
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#f5f2eb]">
                  100<span className="text-[#c5a059]">%</span>
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8c7343] mt-0.5">
                  Bespoke Ritual
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#f5f2eb]">
                  4.9<span className="text-[#c5a059] font-sans text-lg">/5</span>
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8c7343] mt-0.5">
                  Client Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Image Card with Warm Border & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative golden frame accent */}
              <div className="absolute -inset-2 rounded-sm border border-[#c5a059]/20 -rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-sm overflow-hidden border border-[#26231e] bg-[#121212] shadow-2xl group">
                <div className="aspect-[4/5] sm:aspect-[3/4] relative w-full">
                  <Image
                    src="/images/hero_barber.jpg"
                    alt="Master barber crafting precision fade in dark luxury barbershop"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />
                </div>

                {/* Badge Overlay (Matches Behance: 20+ YEARS AT THE CHAIR) */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#0e0e0e]/90 backdrop-blur-md border border-[#c5a059]/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#8c7343]">
                      Mastery &amp; Precision
                    </p>
                    <p className="font-serif text-base text-[#f5f2eb] font-medium">
                      Fresh Cutz Atelier
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#c5a059] font-mono text-xs font-semibold">
                      EST. 2004
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
