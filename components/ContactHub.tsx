"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Calendar,
  Clock,
  ExternalLink,
} from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

interface ContactHubProps {
  selectedServicePreset?: string;
}

export default function ContactHub({ selectedServicePreset }: ContactHubProps) {
  // State for copy feedbacks
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Form State
  const [clientName, setClientName] = useState("");
  const [selectedService, setSelectedService] = useState(
    selectedServicePreset || "02 Precision Skin Fades"
  );
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactData = {
    instagram: "@freshcutz_barber",
    email: "contact@freshcutz.com",
    whatsapp: "+15553827491",
    phoneDisplay: "+1 (555) 382-7491",
    hours: "Mon - Sat: 9:00 AM — 8:00 PM",
    location: "104 Heritage Boulevard, Suite 4B, Design District",
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  // Compile formatted message for DM / WhatsApp / Email
  const compiledMessage = `Hello Fresh Cutz! ✂️%0D%0A%0D%0AMy name is ${clientName || "[Your Name]"}.%0D%0AI would like to book an appointment for: ${selectedService}.%0D%0APreferred Day: ${preferredDay || "Flexible"}%0D%0APreferred Time: ${preferredTime || "Anytime"}%0D%0AAdditional Notes: ${notes || "None"}`;

  const plainMessage = `Hello Fresh Cutz! ✂️\n\nMy name is ${clientName || "[Your Name]"}.\nI would like to book an appointment for: ${selectedService}.\nPreferred Day: ${preferredDay || "Flexible"}\nPreferred Time: ${preferredTime || "Anytime"}\nAdditional Notes: ${notes || "None"}`;

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(`Appointment Inquiry - ${selectedService}`)}&body=${compiledMessage}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const waUrl = `https://wa.me/${contactData.whatsapp}?text=${compiledMessage}`;
    window.open(waUrl, "_blank");
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] border-t border-[#1b1915] relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#c5a059]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span>Direct Reach &amp; Booking Concierge</span>
            <span className="w-6 h-[1px] bg-[#c5a059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal leading-tight">
            Step into the chair.
            <br />
            <span className="italic font-light text-[#c5a059]">
              Connect directly with our team.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#9c978b] font-light leading-relaxed">
            We value personal connection over generic booking algorithms. Reach out
            directly via our official social handles, shoot an email to our master
            chair, or send a fast message below.
          </p>
        </div>

        {/* 3 Primary Channel Cards (Instagram, Email, WhatsApp) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* 1. Instagram Card */}
          <div className="rounded-sm border border-[#23201a] bg-[#111111] p-6 hover:border-[#c5a059]/60 hover:shadow-xl hover:shadow-[#c5a059]/5 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-sm bg-[#181818] border border-[#26231e] group-hover:border-[#c5a059] flex items-center justify-center transition-colors">
                  <InstagramIcon className="w-6 h-6 text-[#c5a059]" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30">
                  Most Popular
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#f5f2eb]">Instagram Direct</h3>
                <p className="text-xs text-[#8c7343] font-mono mt-0.5">{contactData.instagram}</p>
                <p className="text-xs text-[#9c978b] mt-2 leading-relaxed">
                  Browse daily transformations, client before/afters, and send an instant DM for priority slots.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#d8b26e] text-[#080808] py-2.5 px-4 rounded-sm font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Open Instagram DM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => copyToClipboard(contactData.instagram, "instagram")}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#26231e] hover:border-[#c5a059]/50 text-[#f5f2eb] hover:text-[#c5a059] py-2 px-4 rounded-sm text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                {copiedType === "instagram" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Handle Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#9c978b]" />
                    <span>Copy @Handle</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 2. Direct Email Card */}
          <div className="rounded-sm border border-[#23201a] bg-[#111111] p-6 hover:border-[#c5a059]/60 hover:shadow-xl hover:shadow-[#c5a059]/5 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-sm bg-[#181818] border border-[#26231e] group-hover:border-[#c5a059] flex items-center justify-center transition-colors">
                  <Mail className="w-6 h-6 text-[#c5a059]" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#1f1d18] text-[#9c978b] border border-[#2b2720]">
                  Official Concierge
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#f5f2eb]">Email Concierge</h3>
                <p className="text-xs text-[#8c7343] font-mono mt-0.5">{contactData.email}</p>
                <p className="text-xs text-[#9c978b] mt-2 leading-relaxed">
                  Best for private grooming inquiries, masterclass enrollments, wedding party bookings, and collaborations.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2.5">
              <a
                href={`mailto:${contactData.email}?subject=Booking Inquiry - Fresh Cutz Atelier`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#d8b26e] text-[#080808] py-2.5 px-4 rounded-sm font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Send Direct Email</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => copyToClipboard(contactData.email, "email")}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#26231e] hover:border-[#c5a059]/50 text-[#f5f2eb] hover:text-[#c5a059] py-2 px-4 rounded-sm text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                {copiedType === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#9c978b]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 3. WhatsApp Fast-Track Card */}
          <div className="rounded-sm border border-[#23201a] bg-[#111111] p-6 hover:border-[#c5a059]/60 hover:shadow-xl hover:shadow-[#c5a059]/5 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-sm bg-[#181818] border border-[#26231e] group-hover:border-[#c5a059] flex items-center justify-center transition-colors">
                  <WhatsAppIcon className="w-6 h-6 text-[#c5a059]" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                  Instant Reply
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#f5f2eb]">WhatsApp Fast-Track</h3>
                <p className="text-xs text-[#8c7343] font-mono mt-0.5">{contactData.phoneDisplay}</p>
                <p className="text-xs text-[#9c978b] mt-2 leading-relaxed">
                  Fast response directly to the studio desk. Check chair availability in real-time or request same-day slots.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2.5">
              <a
                href={`https://wa.me/${contactData.whatsapp}?text=Hi%20Fresh%20Cutz!%20I'd%20like%20to%20inquire%20about%20booking%20a%20slot.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#d8b26e] text-[#080808] py-2.5 px-4 rounded-sm font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${contactData.whatsapp}`}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#26231e] hover:border-[#c5a059]/50 text-[#f5f2eb] hover:text-[#c5a059] py-2 px-4 rounded-sm text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#9c978b]" />
                <span>Call Studio Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Booking & Inquiry Message Generator */}
        <div className="rounded-sm border border-[#23201a] bg-[#111111] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-[#f5f2eb]">
                  Compose Your Inquiry
                </h3>
                <p className="text-xs text-[#9c978b] mt-1">
                  Fill in your details to instantly format an inquiry for Email, Instagram DM, or WhatsApp.
                </p>
              </div>

              <form onSubmit={handleEmailSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8c7343] font-medium mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. David Vance"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#161616] border border-[#26231e] rounded-sm px-3.5 py-2.5 text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c5a059] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8c7343] font-medium mb-1.5">
                      Select Discipline
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#161616] border border-[#26231e] rounded-sm px-3.5 py-2.5 text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c5a059] transition-colors"
                    >
                      <option value="01 The Foundation (Precision Scissor Cut)">
                        01 The Foundation (Precision Scissor Cut)
                      </option>
                      <option value="02 Precision Skin Fades">
                        02 Precision Skin Fades
                      </option>
                      <option value="03 Beard Architecture">
                        03 Beard Architecture
                      </option>
                      <option value="04 Classic Shaving (Straight Razor)">
                        04 Classic Shaving (Straight Razor)
                      </option>
                      <option value="05 Cut & Style (Full Executive Ritual)">
                        05 Cut & Style (Full Executive Ritual)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8c7343] font-medium mb-1.5">
                      Preferred Day
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Friday Afternoon or Specific Date"
                      value={preferredDay}
                      onChange={(e) => setPreferredDay(e.target.value)}
                      className="w-full bg-[#161616] border border-[#26231e] rounded-sm px-3.5 py-2.5 text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8c7343] font-medium mb-1.5">
                      Preferred Time Slot
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2:00 PM - 5:00 PM"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#161616] border border-[#26231e] rounded-sm px-3.5 py-2.5 text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8c7343] font-medium mb-1.5">
                    Grooming Notes or Specific Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your hair style, beard preferences, or any specific requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#161616] border border-[#26231e] rounded-sm px-3.5 py-2.5 text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                  />
                </div>

                {/* Dispatch Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#d8b26e] text-[#080808] py-3 px-5 rounded-sm font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#202020] border border-[#2b2720] hover:border-emerald-500/50 text-[#f5f2eb] py-3 px-5 rounded-sm font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>Send Via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(plainMessage, "template")}
                    className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#202020] border border-[#2b2720] hover:border-[#c5a059]/50 text-[#f5f2eb] py-3 px-5 rounded-sm font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {copiedType === "template" ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Copied for Instagram DM!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#c5a059]" />
                        <span>Copy for Instagram DM</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Preview Column */}
            <div className="lg:col-span-5 bg-[#161616] border border-[#23201a] rounded-sm p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#23201a] pb-3">
                  <span className="text-[11px] uppercase tracking-widest text-[#8c7343] font-medium">
                    Inquiry Preview
                  </span>
                  <span className="text-[10px] font-mono text-[#c5a059]">
                    Auto-Formatted
                  </span>
                </div>

                <div className="bg-[#0e0e0e] border border-[#1f1d18] rounded p-4 font-mono text-xs text-[#9c978b] whitespace-pre-wrap leading-relaxed">
                  {plainMessage}
                </div>
              </div>

              <div className="pt-6 border-t border-[#23201a] mt-6 space-y-2 text-xs text-[#9c978b]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Hours: {contactData.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Private VIP sessions available on Sunday upon request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
