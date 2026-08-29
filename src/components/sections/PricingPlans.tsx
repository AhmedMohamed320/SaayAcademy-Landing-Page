"use client";

import React, { useState } from "react";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Star,
  ArrowLeft,
  BadgePercent,
  Lock,
  Gift,
} from "@/components/icons/AnimatedIcons";
import { SAAY_PRICING_PLANS_EG, SAAY_PRICING_PLANS_AE } from "@/lib/constants";
import { PricingPlan } from "@/types";

interface PricingPlansProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  const [selectedCountry, setSelectedCountry] = useState<"egypt" | "uae">("egypt");

  const currentPlans = selectedCountry === "egypt" ? SAAY_PRICING_PLANS_EG : SAAY_PRICING_PLANS_AE;

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-bg-page relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold mb-2.5 sm:mb-3 whitespace-nowrap">
            <BadgePercent size={15} className="text-brand-green" />
            <span>تسعير واضح وشفاف 100% بدون أي رسوم خفية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading leading-[1.45] mb-3">
            اشتراكات المواد بأفضل عائد تعليمي واقتصادي
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body leading-[1.75]">
            اشتراك شهري للمادة (8 حصص تفاعلية) مع معلمين مصريين مؤهلين ومختبرين من سَعى وضمان استرداد الرضا 100%.
          </p>
        </div>

        {/* Country Selector Toggle for Egypt & UAE */}
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center p-1.5 bg-bg-surface border border-border-medium rounded-2xl shadow-soft">
            <button
              type="button"
              onClick={() => setSelectedCountry("egypt")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCountry === "egypt"
                  ? "bg-brand-primary text-text-inverted shadow-soft"
                  : "text-text-body hover:text-brand-primary"
              }`}
            >
              <span>🇪🇬</span>
              <span>مصر (300 ج.م / شهرياً للمادة)</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCountry("uae")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCountry === "uae"
                  ? "bg-brand-primary text-text-inverted shadow-soft"
                  : "text-text-body hover:text-brand-primary"
              }`}
            >
              <span>🇦🇪</span>
              <span>الإمارات (30 - 50 درهم / للحصة)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch mb-8 sm:mb-10">
          {currentPlans.map((plan) => {
            const isPopular = plan.popular;
            const isFree = plan.totalPrice === 0;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-bg-surface border-2 border-brand-green shadow-card scale-100 md:scale-105 z-10"
                    : isFree
                    ? "bg-bg-surface border border-brand-green/40 shadow-soft hover:shadow-hover"
                    : "bg-bg-surface border border-border-light shadow-soft hover:shadow-hover"
                }`}
              >
                {/* Popular or Free Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-brand-green text-brand-primary text-[11px] sm:text-xs font-black py-0.5 sm:py-1 px-3.5 sm:px-4 rounded-full shadow-soft flex items-center gap-1 whitespace-nowrap">
                    <Sparkles size={12} className="text-brand-primary" />
                    <span>{plan.badge || "الباقة الأكثر طلباً"}</span>
                  </div>
                )}

                {isFree && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-emerald-500 text-white text-[11px] sm:text-xs font-black py-0.5 sm:py-1 px-3.5 sm:px-4 rounded-full shadow-soft flex items-center gap-1 whitespace-nowrap">
                    <Gift size={12} />
                    <span>تجربة مجانية بالكامل</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-4 sm:mb-5">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-heading font-heading mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed min-h-[28px] sm:min-h-[32px]">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-border-light">
                    {isFree ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black font-heading text-emerald-600">
                          مجاناً
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          100% بدون أي رسوم
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-4xl font-black font-heading text-text-heading">
                          {plan.totalPrice}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-brand-green">
                          {plan.currency}
                        </span>
                        {plan.sessionsCount > 1 && (
                          <span className="text-[10px] sm:text-xs text-text-muted font-normal whitespace-nowrap">
                            (حوالي {plan.pricePerSession} {plan.currency} / للحصة)
                          </span>
                        )}
                      </div>
                    )}
                    <span className="text-[11px] sm:text-xs text-brand-green font-bold mt-1 block">
                      عدد الحصص: {plan.sessionsCount} {plan.sessionsCount === 1 ? "حصة استكشافية" : "حصص تفاعلية للمادة"}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs md:text-sm text-text-body">
                        <span className="p-0.5 rounded-full bg-brand-green-light text-brand-green flex-shrink-0 mt-0.5">
                          <Check size={13} className="stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
                      isPopular
                        ? "bg-brand-primary hover:bg-brand-primary-hover text-text-inverted shadow-soft hover:shadow-hover"
                        : isFree
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft hover:shadow-hover"
                        : "bg-bg-surface-subtle hover:bg-brand-primary hover:text-text-inverted text-text-heading border border-border-medium"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowLeft size={14} className={isPopular ? "text-brand-green" : ""} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees Bar */}
        <div className="bg-bg-surface rounded-2xl border border-border-light p-4 sm:p-5 max-w-4xl mx-auto shadow-soft grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-right">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand-gold-light text-brand-gold flex-shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-xs font-bold text-text-heading whitespace-nowrap">ضمان استرداد الرضا 100%</div>
              <div className="text-[10px] sm:text-[11px] text-text-muted whitespace-nowrap">استرجع رسومك إن لم تعجبك الحصة الأولى</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand-primary-light text-brand-primary flex-shrink-0">
              <Lock size={18} />
            </div>
            <div>
              <div className="text-xs font-bold text-text-heading whitespace-nowrap">طرق دفع محلية آمنة</div>
              <div className="text-[10px] sm:text-[11px] text-text-muted whitespace-nowrap">فودافون كاش، إنستاباي، فيزا، وماستركارد</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand-green-light text-brand-green flex-shrink-0">
              <Star size={18} />
            </div>
            <div>
              <div className="text-xs font-bold text-text-heading whitespace-nowrap">مرونة استبدال المعلم</div>
              <div className="text-[10px] sm:text-[11px] text-text-muted whitespace-nowrap">إمكانية تغيير المعلم في أي وقت بضغطة زر</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
