"use client";

import React, { useState } from "react";
import { MessageSquare, X, Sparkles } from "@/components/icons/AnimatedIcons";

export default function FloatingWhatsApp() {
  const [hasDismissed, setHasDismissed] = useState(false);

  const defaultPhone = "+966500000000";
  const defaultMessage = encodeURIComponent(
    "السلام عليكم، أود الاستفسار عن المجموعات الدراسية واشتراك المواد في أكاديمية سَعى."
  );
  const whatsappUrl = `https://wa.me/${defaultPhone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-start gap-2 max-w-[calc(100vw-32px)]">
      {/* Tooltip speech bubble - Responsive width for mobile */}
      {!hasDismissed && (
        <div className="bg-bg-surface border border-border-light shadow-hover rounded-2xl p-3 max-w-[270px] sm:max-w-xs text-right animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setHasDismissed(true)}
            className="absolute top-2 left-2 text-text-muted hover:text-text-heading p-0.5 rounded-lg hover:bg-bg-surface-subtle transition-colors"
            aria-label="إغلاق التنبيه"
          >
            <X size={13} />
          </button>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-text-heading mb-0.5 pr-0.5">
            <Sparkles size={13} className="text-brand-gold flex-shrink-0" />
            <span>المنسق الأكاديمي متاح الآن</span>
          </div>
          <p className="text-[10px] sm:text-[11px] text-text-muted leading-relaxed">
            هل تحتاج مساعدة في اختيار المادة أو الانضمام لمجموعة دراسية؟
          </p>
        </div>
      )}

      {/* Floating Button - Flush to the far right */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-brand-primary font-black py-2.5 px-4 sm:py-3 sm:px-4.5 rounded-full shadow-glow hover:scale-105 transition-all duration-200"
        aria-label="تواصل معنا عبر واتساب"
      >
        <div className="relative flex items-center justify-center">
          <MessageSquare size={18} fill="currentColor" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-brand-primary rounded-full animate-ping"></span>
        </div>
        <span className="text-xs font-bold font-heading whitespace-nowrap">
          محادثة مباشرة مع المنسق
        </span>
      </a>
    </div>
  );
}
