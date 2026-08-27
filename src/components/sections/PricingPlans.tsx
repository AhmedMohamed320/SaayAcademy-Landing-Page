"use client";

import React from "react";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Star,
  ArrowLeft,
  BadgePercent,
  Lock,
} from "@/components/icons/AnimatedIcons";
import { SAAY_PRICING_PLANS } from "@/lib/constants";
import { PricingPlan } from "@/types";

interface PricingPlansProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  return (
    <section id="pricing" className="py-10 sm:py-16 md:py-20 bg-bg-page relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold mb-2.5 sm:mb-3 whitespace-nowrap">
            <BadgePercent size={15} className="text-brand-green" />
            <span>تسعير واضح وشفاف 100% بدون أي رسوم خفية</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading mb-2 sm:mb-3">
            باقات مدروسة لتلائم هدف ابنك الدراسي
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body">
            استثمر في تفوق ابنك مع باقات مرنة توفر لك أعلى جودة تدريسية مع ضمان استرداد الرضا الكامل.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch mb-8 sm:mb-10">
          {SAAY_PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-bg-surface border-2 border-brand-green shadow-card scale-100 md:scale-105 z-10"
                    : "bg-bg-surface border border-border-light shadow-soft hover:shadow-hover"
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-brand-green text-brand-primary text-[11px] sm:text-xs font-black py-0.5 sm:py-1 px-3.5 sm:px-4 rounded-full shadow-soft flex items-center gap-1 whitespace-nowrap">
                    <Sparkles size={12} className="text-brand-primary" />
                    <span>{plan.badge || "الباقة الأكثر طلباً"}</span>
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
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-4xl font-black font-heading text-text-heading">
                        {plan.totalPrice}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-brand-green">
                        {plan.currency}
                      </span>
                      {plan.sessionsCount > 1 && (
                        <span className="text-[10px] sm:text-xs text-text-muted font-normal whitespace-nowrap">
                          ({plan.pricePerSession} {plan.currency} / للحصة)
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] sm:text-xs text-brand-green font-bold mt-1 block">
                      عدد الحصص: {plan.sessionsCount} {plan.sessionsCount === 1 ? "حصة فردية" : "حصص فردية"}
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
              <div className="text-xs font-bold text-text-heading whitespace-nowrap">دفع آمن ومشفر بالكامل</div>
              <div className="text-[10px] sm:text-[11px] text-text-muted whitespace-nowrap">مدى، فيزا، ماستركارد، و Apple Pay</div>
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
