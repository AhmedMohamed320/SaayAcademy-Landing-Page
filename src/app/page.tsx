"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingPlans from "@/components/sections/PricingPlans";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ConciergeModal from "@/components/sections/ConciergeModal";
import BookingModal from "@/components/sections/BookingModal";
import TeacherModal from "@/components/sections/TeacherModal";
import { PricingPlan } from "@/types";
import { SAAY_PRICING_PLANS } from "@/lib/constants";

export default function Home() {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedPlan(SAAY_PRICING_PLANS[0]);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-bg-page text-text-body font-body selection:bg-brand-green selection:text-brand-primary">
      {/* Main Header & Navbar with Dark Background */}
      <Navbar
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenTeacherModal={() => setIsTeacherModalOpen(true)}
      />

      {/* Hero Section — Simplified */}
      <HeroSection
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* How it Works (3-Step Journey for Student) */}
      <HowItWorks />

      {/* Transparent Pricing Plans & Guarantee Badges */}
      <PricingPlans onSelectPlan={handleSelectPlan} />

      {/* Verified Student and Parent Testimonials */}
      <Testimonials />

      {/* Interactive FAQ Accordion */}
      <FAQSection onOpenConcierge={() => setIsConciergeOpen(true)} />

      {/* High-Conversion Closing Hero CTA */}
      <FinalCTA
        onOpenBooking={handleOpenGeneralBooking}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenTeacherModal={() => setIsTeacherModalOpen(true)}
      />

      {/* Floating WhatsApp Quick Chat */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        group={null}
        plan={selectedPlan}
      />

      <TeacherModal
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
      />
    </main>
  );
}
