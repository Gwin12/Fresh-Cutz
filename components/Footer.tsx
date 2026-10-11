"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1b1915] text-[#9c978b] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#181612]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm border border-[#c5a059] flex items-center justify-center bg-[#121212]">
                <span className="font-serif font-bold text-base text-[#c5a059]">
                  FC
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-sm uppercase text-[#f5f2eb] font-semibold">
                  FRESH CUTZ
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8c7343]">
                  The Grooming Standard
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9c978b] leading-relaxed max-w-sm">
              An uncompromising men&apos;s grooming atelier devoted to precision
              scissor work, surgical fades, and bespoke beard architecture.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#121212] border border-[#23201a] hover:border-[#c5a059] hover:text-[#c5a059] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/15553827491"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#121212] border border-[#23201a] hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@freshcutz.com"
                className="w-8 h-8 rounded-sm bg-[#121212] border border-[#23201a] hover:border-[#c5a059] hover:text-[#c5a059] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+15553827491"
                className="w-8 h-8 rounded-sm bg-[#121212] border border-[#23201a] hover:border-[#c5a059] hover:text-[#c5a059] flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#f5f2eb]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#disciplines" className="hover:text-[#c5a059] transition-colors">
                  Disciplines
                </a>
              </li>
              <li>
                <a href="#the-kit" className="hover:text-[#c5a059] transition-colors">
                  Tools Of The Trade
                </a>
              </li>
              <li>
                <a href="#master-barber" className="hover:text-[#c5a059] transition-colors">
                  Master Barber
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#c5a059] transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#c5a059] transition-colors">
                  Client Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Social Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#f5f2eb]">
              Social &amp; Reach
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a059] flex items-center gap-1.5 transition-colors"
                >
                  <span className="text-[#8c7343]">IG:</span> @freshcutz_barber
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@freshcutz.com"
                  className="hover:text-[#c5a059] flex items-center gap-1.5 transition-colors"
                >
                  <span className="text-[#8c7343]">Email:</span> contact@freshcutz.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/15553827491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a059] flex items-center gap-1.5 transition-colors"
                >
                  <span className="text-[#8c7343]">WhatsApp:</span> +1 (555) 382-7491
                </a>
              </li>
              <li>
                <span className="text-[#68645c]">
                  TikTok: @freshcutz_studio
                </span>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#f5f2eb]">
              Atelier Location
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                <span>104 Heritage Boulevard, Suite 4B, Design District</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6b675e] gap-4">
          <p>© 2026 Fresh Cutz Atelier. Built for the craft. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-[#c5a059] transition-colors">
              Direct Contact
            </a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">
              Terms of Grooming
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
