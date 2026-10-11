"use client";

import React, { useState } from "react";
import {
  X,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetDiscipline?: string;
}

export default function ConnectModal({
  isOpen,
  onClose,
  presetDiscipline,
}: ConnectModalProps) {
  if (!isOpen) return null;

  const disciplineText = presetDiscipline
    ? ` for ${presetDiscipline}`
    : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-sm border border-[#c5a059]/40 bg-[#0e0e0e] p-6 sm:p-8 shadow-2xl space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-sm border border-[#26231e] hover:border-[#c5a059] text-[#9c978b] hover:text-[#f5f2eb] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">
            <span className="w-4 h-[1px] bg-[#c5a059]" />
            <span>Direct Client Concierge</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb]">
            Connect With Fresh Cutz
          </h3>
          <p className="text-xs text-[#9c978b] leading-relaxed">
            {presetDiscipline
              ? `You selected "${presetDiscipline}". Choose your preferred channel to consult or book with our master barber:`
              : "Choose your preferred channel to speak directly with our master chair for consultations and appointments:"}
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {/* Option 1: Instagram DM */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-sm bg-[#141414] border border-[#23201a] hover:border-[#c5a059] group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-sm bg-[#1c1c1c] border border-[#2b2720] flex items-center justify-center group-hover:border-[#c5a059] transition-colors">
                <InstagramIcon className="w-4 h-4 text-[#c5a059]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#f5f2eb]">
                  Instagram Direct Message
                </p>
                <p className="text-[11px] text-[#8c7343] font-mono">@freshcutz_barber</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#9c978b] group-hover:text-[#c5a059] transition-colors" />
          </a>

          {/* Option 2: Email Concierge */}
          <a
            href={`mailto:contact@freshcutz.com?subject=Inquiry${encodeURIComponent(disciplineText)}&body=Hello%20Fresh%20Cutz,%20I%20would%20like%20to%20book%20a%20session${encodeURIComponent(disciplineText)}.`}
            className="flex items-center justify-between p-3.5 rounded-sm bg-[#141414] border border-[#23201a] hover:border-[#c5a059] group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-sm bg-[#1c1c1c] border border-[#2b2720] flex items-center justify-center group-hover:border-[#c5a059] transition-colors">
                <Mail className="w-4 h-4 text-[#c5a059]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#f5f2eb]">
                  Direct Email Concierge
                </p>
                <p className="text-[11px] text-[#8c7343] font-mono">contact@freshcutz.com</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#9c978b] group-hover:text-[#c5a059] transition-colors" />
          </a>

          {/* Option 3: WhatsApp Fast Track */}
          <a
            href={`https://wa.me/15553827491?text=Hello%20Fresh%20Cutz!%20I%20would%20like%20to%20book%20an%20appointment${encodeURIComponent(disciplineText)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-sm bg-[#141414] border border-[#23201a] hover:border-[#c5a059] group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-sm bg-[#1c1c1c] border border-[#2b2720] flex items-center justify-center group-hover:border-[#c5a059] transition-colors">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#f5f2eb]">
                  WhatsApp Fast-Track Chat
                </p>
                <p className="text-[11px] text-emerald-400 font-mono">+1 (555) 382-7491</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#9c978b] group-hover:text-[#c5a059] transition-colors" />
          </a>

          {/* Option 4: Call Studio */}
          <a
            href="tel:+15553827491"
            className="flex items-center justify-between p-3.5 rounded-sm bg-[#141414] border border-[#23201a] hover:border-[#c5a059] group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-sm bg-[#1c1c1c] border border-[#2b2720] flex items-center justify-center group-hover:border-[#c5a059] transition-colors">
                <Phone className="w-4 h-4 text-[#9c978b]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#f5f2eb]">
                  Call Atelier Desk
                </p>
                <p className="text-[11px] text-[#9c978b] font-mono">+1 (555) 382-7491</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#9c978b] group-hover:text-[#c5a059] transition-colors" />
          </a>
        </div>

        {/* Jump to full inquiry composer */}
        <div className="pt-2 border-t border-[#1f1d18] text-center">
          <a
            href="#contact"
            onClick={onClose}
            className="text-xs text-[#c5a059] hover:underline uppercase tracking-wider font-medium"
          >
            Or use the custom booking composer on page ↓
          </a>
        </div>
      </div>
    </div>
  );
}
