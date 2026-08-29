"use client";

import React from "react";
import {
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  MessageSquare,
  Gift,
  CheckCircle2,
} from "@/components/icons/AnimatedIcons";

interface HeroSectionProps {
  onOpenConcierge: () => void;
}

export default function HeroSection({ onOpenConcierge }: HeroSectionProps) {
  return (
    <section className="relative pt-10 pb-14 md:pt-18 md:pb-20 hero-glow-mesh overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green-glow rounded-full blur-3xl -z-10 pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-xs sm:text-sm font-bold shadow-soft mb-6 animate-in fade-in duration-300">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <Sparkles size={14} className="text-brand-gold flex-shrink-0" />
          <span>مجموعات دراسية تفاعلية لمناهج مصر 🇪🇬 والإمارات 🇦🇪</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-text-heading leading-[1.38] md:leading-[1.3] tracking-tight mb-5 max-w-3xl mx-auto">
          احجز مادتك الدراسية بسهولة..{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-primary via-brand-green-dark to-brand-green">
            8 حصص شهرياً لمصر والإمارات
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="text-sm sm:text-lg text-text-body leading-[1.8] max-w-2xl mx-auto mb-8">
          حصص تفاعلية مباشرة مع معلمين مصريين مؤهلين ومختبرين بعناية، وتسجيل كامل لكل حصة للمراجعة في أي وقت، مع <strong>حصة استكشافية أولى مجانية بالكامل</strong>.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 max-w-md mx-auto">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-green hover:bg-brand-green-hover text-brand-primary px-8 py-3.5 rounded-xl font-black text-sm sm:text-base shadow-glow hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            <Gift size={18} />
            <span>احجز حصتك المجانية الآن</span>
            <ArrowLeft size={16} />
          </a>

          <button
            type="button"
            onClick={onOpenConcierge}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bg-surface hover:bg-bg-surface-subtle text-text-heading border border-border-medium hover:border-brand-green px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-soft transition-all duration-200 whitespace-nowrap"
          >
            <MessageSquare size={18} className="text-brand-green" />
            <span>تحدث مع المنسق الأكاديمي</span>
          </button>
        </div>

        {/* Key Highlights Trust Row */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-3 px-5 rounded-2xl bg-bg-surface border border-border-light shadow-soft text-xs sm:text-sm text-text-heading">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🇪🇬</span>
            <span><strong>مصر:</strong> 300 ج.م شهرياً (8 حصص)</span>
          </div>

          <span className="hidden sm:inline text-border-medium">•</span>

          <div className="flex items-center gap-1.5">
            <span className="text-base">🇦🇪</span>
            <span><strong>الإمارات:</strong> 30 - 50 درهم للحصة</span>
          </div>

          <span className="hidden sm:inline text-border-medium">•</span>

          <div className="flex items-center gap-1.5 text-brand-primary font-bold">
            <ShieldCheck size={16} className="text-brand-green" />
            <span>ضمان الرضا 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
