"use client";

import React from "react";
import { Sparkles, ArrowLeft, Gift } from "@/components/icons/AnimatedIcons";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-primary text-text-inverted py-1.5 sm:py-2 px-3 sm:px-4 text-[11px] sm:text-xs md:text-sm font-medium border-b border-border-dark-glass relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-1.5 sm:gap-2 mx-auto sm:mx-0 text-center sm:text-right">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
          <span className="flex items-center gap-1 font-heading leading-tight">
            <Sparkles size={13} className="text-brand-gold flex-shrink-0" />
            <strong className="text-brand-gold font-bold">عرض خاص:</strong>
            <span>احجز الحصة الاستكشافية الأولى مجاناً بالكامل لتجربة الشرح مع ضمان الرضا 100%.</span>
          </span>
        </div>

        <a
          href="#pricing"
          className="hidden sm:inline-flex items-center gap-1 text-brand-gold hover:text-text-inverted transition-colors duration-200 underline-offset-4 hover:underline font-semibold flex-shrink-0 whitespace-nowrap"
        >
          <Gift size={13} />
          <span>احجز مجاناً</span>
          <ArrowLeft size={13} />
        </a>
      </div>
    </div>
  );
}
