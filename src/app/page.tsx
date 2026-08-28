"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AcademicSelector from "@/components/sections/AcademicSelector";
import ValuePillars from "@/components/sections/ValuePillars";
import HowItWorks from "@/components/sections/HowItWorks";
import ParentExperience from "@/components/sections/ParentExperience";
import TeacherRecruitment from "@/components/sections/TeacherRecruitment";
import PricingPlans from "@/components/sections/PricingPlans";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ConciergeModal from "@/components/sections/ConciergeModal";
import BookingModal from "@/components/sections/BookingModal";
import TeacherModal from "@/components/sections/TeacherModal";
import { SubjectGroup, PricingPlan } from "@/types";
import { SAAY_PRICING_PLANS } from "@/lib/constants";

export default function Home() {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<SubjectGroup | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  // Search parameters from Hero to pass down to AcademicSelector
  const [searchParams, setSearchParams] = useState({
    country: "egypt",
    curriculum: "all",
    subject: "all",
  });

  const handleQuickSearch = (country: string, curriculum: string, subject: string) => {
    setSearchParams({ country, curriculum, subject });
  };

  const handleSelectGroupForBooking = (group: SubjectGroup) => {
    setSelectedGroup(group);
    setSelectedPlan(null);
    setIsBookingOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setSelectedGroup(null);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedPlan(SAAY_PRICING_PLANS[0]);
    setSelectedGroup(null);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-bg-page text-text-body font-body selection:bg-brand-green selection:text-brand-primary">
      {/* Main Header & Navbar with Dark Background */}
      <Navbar
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenTeacherModal={() => setIsTeacherModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onQuickSearch={handleQuickSearch}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Interactive Subject Groups Matcher */}
      <AcademicSelector
        initialCountry={searchParams.country}
        initialCurriculum={searchParams.curriculum}
        initialSubject={searchParams.subject}
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onSelectGroupForBooking={handleSelectGroupForBooking}
      />

      {/* 4 Core Value Pillars of Saay */}
      <ValuePillars />

      {/* How it Works (3-Step Journey for Student and Teacher) */}
      <HowItWorks />

      {/* Parent Experience & Peace of Mind Showcase */}
      <ParentExperience />

      {/* Teacher Recruitment Section with Earnings Calculator */}
      <TeacherRecruitment onOpenTeacherModal={() => setIsTeacherModalOpen(true)} />

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

      {/* Comprehensive Academic Footer */}
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
        group={selectedGroup}
        plan={selectedPlan}
      />

      <TeacherModal
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
      />
    </main>
  );
}
