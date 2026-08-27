"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowLeft, GraduationCap, Sparkles } from "@/components/icons/AnimatedIcons";

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

  // Simplified and smart navigation links with concise, single-phrase labels
  const navLinks = [
    { label: "المناهج", href: "#academic-selector" },
    { label: "عن سَعى", href: "#why-saay" },
    { label: "كيف نعمل", href: "#how-it-works" },
    { label: "أولياء الأمور", href: "#parents" },
    { label: "الأسعار", href: "#pricing" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-surface-glass backdrop-blur-md shadow-soft border-b border-border-light py-2"
          : "bg-transparent py-2.5 sm:py-3.5"
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

        {/* Desktop Navigation Links - Single line, non-wrapping */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs xl:text-sm font-medium text-text-body hover:text-brand-green hover:bg-bg-surface-subtle rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons - Desktop */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          {onOpenTeacherModal ? (
            <button
              type="button"
              onClick={onOpenTeacherModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-text-heading hover:text-brand-green bg-bg-surface border border-border-medium hover:border-brand-green rounded-xl transition-all duration-200 whitespace-nowrap shadow-soft"
            >
              <GraduationCap size={15} className="text-brand-green" />
              <span>انضم كمعلم</span>
            </button>
          ) : (
            <a
              href="#teachers"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-text-heading hover:text-brand-green bg-bg-surface border border-border-medium hover:border-brand-green rounded-xl transition-all duration-200 whitespace-nowrap shadow-soft"
            >
              <GraduationCap size={15} className="text-brand-green" />
              <span>انضم كمعلم</span>
            </a>
          )}

          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs md:text-sm font-bold text-text-inverted bg-brand-primary hover:bg-brand-primary-hover border border-brand-primary rounded-xl shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap group"
          >
            <span>احجز حصتك الآن</span>
            <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1 text-brand-green" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-text-body hover:text-brand-primary hover:bg-bg-surface-subtle transition-colors focus:outline-none flex-shrink-0"
          aria-label="القائمة الرئيسية"
        >
          {mobileMenuOpen ? <X size={22} className="text-brand-green" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer - Directly attached below header */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-bg-surface border-b border-border-light shadow-card p-4 animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto z-50">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-text-heading hover:text-brand-green hover:bg-bg-surface-subtle rounded-xl transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-border-light flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenTeacherModal) onOpenTeacherModal();
                  else {
                    const el = document.getElementById("teachers");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-text-heading bg-bg-surface-subtle border border-border-medium rounded-xl whitespace-nowrap"
              >
                <GraduationCap size={16} className="text-brand-green" />
                <span>انضم كمعلم في سَعى</span>
              </button>

              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-text-inverted bg-brand-primary rounded-xl shadow-soft whitespace-nowrap"
              >
                <span>احجز حصتك الاستكشافية</span>
                <ArrowLeft size={16} className="text-brand-green" />
              </a>

              {onOpenConcierge && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConcierge();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold text-text-muted hover:text-brand-green whitespace-nowrap"
                >
                  <Sparkles size={13} className="text-brand-gold" />
                  <span>طلب منهج أو دولة غير مدرجة</span>
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
