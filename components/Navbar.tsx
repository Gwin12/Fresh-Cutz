"use client";

import React, { useState, useEffect } from "react";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

interface NavbarProps {
  onOpenConnectModal: () => void;
}

export default function Navbar({ onOpenConnectModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#22201d]/80 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Fresh Cutz Home"
          >
            <div className="w-10 h-10 rounded-sm border border-[#c5a059] flex items-center justify-center bg-[#121212] group-hover:bg-[#c5a059] transition-colors duration-300">
              <span className="font-serif font-bold text-lg text-[#c5a059] group-hover:text-[#080808] transition-colors duration-300">
                FC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-sm uppercase text-[#f5f2eb] font-semibold group-hover:text-[#c5a059] transition-colors">
                FRESH CUTZ
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#8c7343]">
                The Grooming Standard
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#9c978b]">
            <a
              href="#disciplines"
              className="hover:text-[#c5a059] transition-colors duration-200"
            >
              Disciplines
            </a>
            {/* <a
              href="#the-kit"
              className="hover:text-[#c5a059] transition-colors duration-200"
            >
              The Kit
            </a> */}
            {/* <a
              href="#master-barber"
              className="hover:text-[#c5a059] transition-colors duration-200"
            >
              Master Barber
            </a> */}
            <a
              href="#experience"
              className="hover:text-[#c5a059] transition-colors duration-200"
            >
              Experience
            </a>
            {/* <a
              href="#reviews"
              className="hover:text-[#c5a059] transition-colors duration-200"
            >
              Stories
            </a> */}
            {/* <a
              href="#contact"
              className="hover:text-[#c5a059] transition-colors duration-200"
            >
              Contact Hub
            </a> */}
          </nav>

          {/* Action & Direct Channels */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Quick Shortcuts */}
            <div className="flex items-center gap-2 border-r border-[#22201d] pr-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#22201d] flex items-center justify-center text-[#9c978b] hover:text-[#c5a059] hover:border-[#c5a059] transition-colors"
                title="Direct Instagram DM"
                aria-label="Instagram Handle"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/15553827491"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#22201d] flex items-center justify-center text-[#9c978b] hover:text-[#c5a059] hover:border-[#c5a059] transition-colors"
                title="WhatsApp Chat"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:contact@freshcutz.com"
                className="w-8 h-8 rounded-full border border-[#22201d] flex items-center justify-center text-[#9c978b] hover:text-[#c5a059] hover:border-[#c5a059] transition-colors"
                title="Email Concierge"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Connect CTA Button */}
            <button
              onClick={onOpenConnectModal}
              className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#d8b26e] text-[#080808] px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#c5a059]/20 cursor-pointer"
            >
              <span>Connect &amp; Book</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenConnectModal}
              className="bg-[#c5a059] text-[#080808] px-3 py-1.5 rounded-sm text-xs font-semibold tracking-wider uppercase cursor-pointer"
            >
              Connect
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#f5f2eb] p-2 rounded-sm border border-[#22201d] bg-[#121212] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#c5a059]" />
              ) : (
                <Menu className="w-5 h-5 text-[#c5a059]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 pt-2 border-t border-[#22201d] bg-[#0c0c0c]/95 backdrop-blur-lg px-4 rounded-b-lg space-y-4">
            <nav className="flex flex-col space-y-3 pt-2 text-sm uppercase tracking-wider font-medium text-[#9c978b]">
              <a
                href="#disciplines"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c5a059] py-1 border-b border-[#1b1915]"
              >
                Disciplines
              </a>
              {/* <a
                href="#the-kit"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c5a059] py-1 border-b border-[#1b1915]"
              >
                The Kit
              </a> */}
              {/* <a
                href="#master-barber"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c5a059] py-1 border-b border-[#1b1915]"
              >
                Master Barber
              </a> */}
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c5a059] py-1 border-b border-[#1b1915]"
              >
                Experience
              </a>
              {/* <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c5a059] py-1 border-b border-[#1b1915]"
              >
                Stories
              </a> */}
              {/* <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c5a059] py-1 border-b border-[#1b1915]"
              >
                Contact &amp; Social Hub
              </a> */}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-widest text-[#8c7343]">
                Direct Contacts:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#f5f2eb] bg-[#161616] px-3 py-2 rounded-sm border border-[#22201d]"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Instagram</span>
                </a>
                <a
                  href="mailto:contact@freshcutz.com"
                  className="flex items-center gap-2 text-xs text-[#f5f2eb] bg-[#161616] px-3 py-2 rounded-sm border border-[#22201d]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Email</span>
                </a>
                <a
                  href="https://wa.me/15553827491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#f5f2eb] bg-[#161616] px-3 py-2 rounded-sm border border-[#22201d]"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
