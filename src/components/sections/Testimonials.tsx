"use client";

import React from "react";
import { Star, TrendingUp } from "@/components/icons/AnimatedIcons";
import { SAAY_TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-16 md:py-20 bg-bg-surface border-y border-border-light relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold mb-2.5 sm:mb-3 whitespace-nowrap">
            <Star size={14} className="text-brand-gold" />
            <span>قصص نجاح وتفوق موثقة</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading mb-2 sm:mb-3">
            تجارب حقيقية لطلاب وأولياء أمور مع سَعى
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body leading-relaxed">
            فخورون بثقة مئات العائلات في السعودية، الإمارات، قطر، ومصر، وبصنع فارق حقيقي في نتائج أبنائهم الدراسية.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SAAY_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-bg-page rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-border-light shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Profile Bar */}
                <div className="flex items-start justify-between gap-2.5 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-sm sm:text-base">{item.countryFlag}</span>
                      <h4 className="text-xs sm:text-base font-bold text-text-heading font-heading">{item.name}</h4>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-text-muted bg-bg-surface px-1.5 py-0.5 rounded-md border border-border-light whitespace-nowrap">
                        {item.role} - {item.location}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-brand-primary font-semibold block mt-0.5">
                      {item.curriculum} • {item.grade}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-brand-gold flex-shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-3.5 italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Improvement Metric Badge */}
              <div className="pt-3 border-t border-border-light flex items-center gap-2 bg-brand-green-light text-brand-primary p-2 sm:p-2.5 rounded-xl border border-brand-green/20">
                <TrendingUp size={15} className="text-brand-green flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold">{item.improvementText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
