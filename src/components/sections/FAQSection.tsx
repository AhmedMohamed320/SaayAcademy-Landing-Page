"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "@/components/icons/AnimatedIcons";
import { SAAY_FAQS } from "@/lib/constants";

interface FAQSectionProps {
  onOpenConcierge: () => void;
}

export default function FAQSection({ onOpenConcierge }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(SAAY_FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-10 sm:py-16 md:py-20 bg-bg-page relative">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold mb-2.5 sm:mb-3 whitespace-nowrap">
            <HelpCircle size={14} className="text-brand-green" />
            <span>إجابات واضحة لجميع استفساراتك</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading mb-2 sm:mb-3">
            الأسئلة الشائعة حول أكاديمية سَعى
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body">
            كل ما تود معرفته عن طريقة اختيار المعلمين، سير الحصص، والمناهج المدعومة.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-10">
          {SAAY_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-bg-surface rounded-xl sm:rounded-2xl border border-border-light overflow-hidden transition-all duration-200 shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-3.5 sm:p-5 text-right flex items-center justify-between gap-2.5 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-text-heading font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1 sm:p-1.5 rounded-xl bg-bg-surface-subtle text-text-body transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-brand-primary text-text-inverted" : ""
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-text-body leading-relaxed border-t border-border-light/60 bg-bg-page/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="bg-bg-surface rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-border-light text-center shadow-soft">
          <h3 className="text-xs sm:text-base font-bold text-text-heading font-heading mb-1">
            هل لديك استفسار آخر أو حالة أكاديمية خاصة؟
          </h3>
          <p className="text-[11px] sm:text-xs text-text-muted mb-3 sm:mb-4 max-w-md mx-auto">
            فريق المنسقين الأكاديميين متاح على مدار الساعة لمساعدتك في اختيار المعلم وتنسيق جدولك.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onOpenConcierge}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft transition-all whitespace-nowrap"
            >
              <Sparkles size={14} className="text-brand-gold" />
              <span>تحدث مع المنسق الأكاديمي</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
