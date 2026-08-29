"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowLeft, GraduationCap, Sparkles, Gift } from "@/components/icons/AnimatedIcons";

interface NavbarProps {
  onOpenConcierge?: () => void;
  onOpenTeacherModal?: () => void;
}

export default function Navbar({ onOpenConcierge, onOpenTeacherModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focused navigation links for streamlined page
  const navLinks = [
    { label: "كيف تعمل سَعى", href: "#how-it-works" },
    { label: "الأسعار والباقات", href: "#pricing" },
    { label: "آراء المشتركين", href: "#testimonials" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-brand-primary border-b border-border-dark-glass text-text-inverted shadow-card transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-brand-primary/95 backdrop-blur-md"
          : "py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <div className="relative h-8 sm:h-10 w-auto flex items-center">
            <Image
              src="/brand/saay-logo-arabic.png"
              alt="أكاديمية سَعى"
              width={120}
              height={36}
              className="h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-text-inverted-muted hover:text-brand-green hover:bg-bg-dark-card rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons - Desktop */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          {onOpenTeacherModal && (
            <button
              type="button"
              onClick={onOpenTeacherModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-text-inverted hover:text-brand-green bg-bg-dark-card border border-border-dark-glass hover:border-brand-green rounded-xl transition-all duration-200 whitespace-nowrap shadow-soft"
            >
              <GraduationCap size={15} className="text-brand-green" />
              <span>انضم كمعلم</span>
            </button>
          )}

          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs md:text-sm font-black text-brand-primary bg-brand-green hover:bg-brand-green-hover border border-brand-green rounded-xl shadow-glow hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap group"
          >
            <Gift size={15} />
            <span>احجز حصتك مجاناً</span>
            <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-text-inverted hover:text-brand-green hover:bg-bg-dark-card transition-colors focus:outline-none flex-shrink-0"
          aria-label="القائمة الرئيسية"
        >
          {mobileMenuOpen ? <X size={22} className="text-brand-green" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-brand-primary border-b border-border-dark-glass shadow-card p-4 animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto z-50 text-text-inverted">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-text-inverted hover:text-brand-green hover:bg-bg-dark-card rounded-xl transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-border-dark-glass flex flex-col gap-2">
              {onOpenTeacherModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTeacherModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-text-inverted bg-bg-dark-card border border-border-dark-glass hover:border-brand-green rounded-xl whitespace-nowrap"
                >
                  <GraduationCap size={16} className="text-brand-green" />
                  <span>انضم كمعلم في سَعى</span>
                </button>
              )}

              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-black text-brand-primary bg-brand-green hover:bg-brand-green-hover rounded-xl shadow-glow whitespace-nowrap"
              >
                <Gift size={16} />
                <span>احجز حصتك الاستكشافية مجاناً</span>
                <ArrowLeft size={16} />
              </a>

              {onOpenConcierge && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConcierge();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold text-text-inverted-muted hover:text-brand-green whitespace-nowrap"
                >
                  <Sparkles size={13} className="text-brand-gold" />
                  <span>طلب منهج أو استشارة أكاديمية</span>
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
