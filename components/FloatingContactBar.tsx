"use client";

import React from "react";
import { Mail } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

interface FloatingContactBarProps {
  onOpenConnectModal: () => void;
}

export default function FloatingContactBar({
  onOpenConnectModal,
}: FloatingContactBarProps) {
  return (
    <aside
      aria-label="Quick contact links"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#121212]/95 backdrop-blur-md border border-[#c5a059]/40 shadow-2xl shadow-black/80"
    >
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-[#1a1a1a] hover:bg-[#c5a059] text-[#9c978b] hover:text-[#080808] flex items-center justify-center transition-colors duration-200"
        title="Direct Instagram DM"
        aria-label="Instagram DM"
      >
        <InstagramIcon className="w-4 h-4" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/15553827491"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-[#1a1a1a] hover:bg-emerald-500 text-[#9c978b] hover:text-white flex items-center justify-center transition-colors duration-200"
        title="Direct WhatsApp"
        aria-label="WhatsApp Message"
      >
        <WhatsAppIcon className="w-4 h-4" />
      </a>

      {/* Email */}
      <a
        href="mailto:contact@freshcutz.com"
        className="w-9 h-9 rounded-full bg-[#1a1a1a] hover:bg-[#c5a059] text-[#9c978b] hover:text-[#080808] flex items-center justify-center transition-colors duration-200"
        title="Email Concierge"
        aria-label="Email Concierge"
      >
        <Mail className="w-4 h-4" />
      </a>

      {/* Connect & Book Button */}
      <button
        onClick={onOpenConnectModal}
        className="inline-flex items-center gap-1.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#080808] px-3.5 py-2 rounded-full font-semibold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
      >
        <span>Connect</span>
      </button>
    </aside>
  );
}
