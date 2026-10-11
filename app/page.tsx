"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Disciplines from "@/components/Disciplines";
import ToolsSection from "@/components/ToolsSection";
import MasterBarber from "@/components/MasterBarber";
import ExperienceList from "@/components/ExperienceList";
import Testimonial from "@/components/Testimonial";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";
import ConnectModal from "@/components/ConnectModal";
import FloatingContactBar from "@/components/FloatingContactBar";

export default function Home() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [selectedDisciplinePreset, setSelectedDisciplinePreset] = useState<string | undefined>(
    undefined
  );

  const handleOpenConnectModal = () => {
    setSelectedDisciplinePreset(undefined);
    setIsConnectModalOpen(true);
  };

  const handleSelectDiscipline = (title: string) => {
    setSelectedDisciplinePreset(title);
    setIsConnectModalOpen(true);
  };

  const handleCloseConnectModal = () => {
    setIsConnectModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f2eb] flex flex-col selection:bg-[#c5a059] selection:text-[#080808]">
      {/* Navigation */}
      <Navbar onOpenConnectModal={handleOpenConnectModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenConnectModal={handleOpenConnectModal} />

        {/* 2. Philosophy & Technique Section */}
        <Philosophy onOpenConnectModal={handleOpenConnectModal} />

        {/* 3. The 5 Disciplines / Services Grid */}
        <Disciplines onSelectDiscipline={handleSelectDiscipline} />

        {/* 4. Tools Of The Trade & Equipment */}
        <ToolsSection onOpenConnectModal={handleOpenConnectModal} />

        {/* 5. Master Barber & Founder Profile */}
        <MasterBarber onOpenConnectModal={handleOpenConnectModal} />

        {/* 6. The Elevated Experience & Checklist */}
        <ExperienceList onOpenConnectModal={handleOpenConnectModal} />

        {/* 7. Client Testimonial Stories */}
        <Testimonial />

        {/* 8. Dedicated Direct Contact & Social Media Hub */}
        <ContactHub selectedServicePreset={selectedDisciplinePreset} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quick Connect Modal */}
      <ConnectModal
        isOpen={isConnectModalOpen}
        onClose={handleCloseConnectModal}
        presetDiscipline={selectedDisciplinePreset}
      />

      {/* Floating Quick Action Contacts Bar */}
      <FloatingContactBar onOpenConnectModal={handleOpenConnectModal} />
    </div>
  );
}
