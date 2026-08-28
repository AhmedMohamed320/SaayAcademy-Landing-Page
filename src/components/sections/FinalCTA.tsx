"use client";

import React from "react";
import { Sparkles, ArrowLeft, ShieldCheck, MessageSquare } from "@/components/icons/AnimatedIcons";

interface FinalCTAProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
}

export default function FinalCTA({ onOpenBooking, onOpenConcierge }: FinalCTAProps) {
  return (
    <section className="py-14 sm:py-18 md:py-24 bg-bg-dark-section text-text-inverted relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green opacity-15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-dark-card border border-border-dark-glass text-brand-green text-xs sm:text-sm font-bold mb-4 sm:mb-5 whitespace-nowrap">
          <Sparkles size={14} />
          <span>خطوة واحدة تفصل ابنك عن التفوق الأكاديمي</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading text-text-inverted leading-[1.45] sm:leading-[1.35] mb-4">
          مستقبل ابنك الدراسي يستحق الأفضل..{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green via-emerald-400 to-teal-200 block sm:inline mt-1 sm:mt-0">
            ابدأ رحلة التفوق مع سَعى اليوم
          </span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-text-inverted-muted max-w-2xl mx-auto mb-8 leading-[1.8]">
          انضم إلى مجتمع العائلات التي اختارت الجودة والأمان الأكاديمي. احجز الحصة الاستكشافية الأولى لابنك مع ضمان
          الرضا التام واسترداد الرسوم إن لم تنل إعجابك.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-brand-primary px-7 py-3.5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm shadow-glow hover:shadow-hover transition-all duration-200 whitespace-nowrap"
          >
            <span>احجز الحصة الاستكشافية الآن</span>
            <ArrowLeft size={15} />
          </button>

          <button
            type="button"
            onClick={onOpenConcierge}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bg-dark-card hover:bg-brand-primary border border-border-dark-glass text-text-inverted px-7 py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap"
          >
            <MessageSquare size={15} className="text-brand-green" />
            <span>تحدث مع المنسق الأكاديمي</span>
          </button>
        </div>

        {/* Guarantees footnote */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-text-inverted-muted text-center flex-wrap leading-relaxed">
          <ShieldCheck size={15} className="text-brand-green flex-shrink-0" />
          <span>ضمان استرداد الرضا 100% • لا التزامات طويلة الأجل • بدون رسوم خفية</span>
        </div>
      </div>
    </section>
  );
}
