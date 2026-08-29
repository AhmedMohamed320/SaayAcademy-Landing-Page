"use client";

import React from "react";
import {
  Sparkles,
  BookOpen,
  CalendarCheck,
  Video,
  CheckCircle2,
  ArrowLeft,
} from "@/components/icons/AnimatedIcons";

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: "01",
      icon: BookOpen,
      title: "حدد دولتك ومنهجك ومادتك",
      description: "اختر الدولة (مصر أو الإمارات) والمنهج الدراسي والمادة التي تريد تقويتها ومتابعتها.",
    },
    {
      stepNumber: "02",
      icon: CalendarCheck,
      title: "انضم للمجموعة والموعد الأنسب",
      description: "اختر الموعد الأنسب لجدولك الأسبوعي، وتقوم سَعى بتعيين المعلم المؤهل والمختبر لتدريس مجموعتك.",
    },
    {
      stepNumber: "03",
      icon: Video,
      title: "احضر الحصص واستفد من التسجيلات",
      description: "حصص تفاعلية منتظمة (8 حصص شهرياً) عبر قاعة سَعى، مع تسجيل كامل لجميع الحصص متاح للمراجعة في أي وقت.",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-bg-surface border-y border-border-light relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-xs sm:text-sm font-bold mb-3 whitespace-nowrap">
            <Sparkles size={14} className="text-brand-gold" />
            <span>بساطة مطلقة في ٣ خطوات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading leading-[1.45] mb-3">
            كيف تبدأ الدراسة مع سَعى؟
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body leading-[1.75]">
            خطوات سهلة ومباشرة تبدأ بحصة استكشافية أولى مجاناً.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-bg-page rounded-2xl p-6 border border-border-light shadow-soft hover:shadow-hover transition-all duration-300 relative z-10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-brand-green-light text-brand-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} className="text-brand-green" />
                    </div>
                    <span className="font-heading font-black text-2xl text-brand-primary/20 group-hover:text-brand-green transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-text-heading font-heading mb-2 leading-[1.45]">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-body leading-[1.75]">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-light flex items-center gap-1.5 text-xs font-semibold text-brand-primary">
                  <CheckCircle2 size={14} className="text-brand-green" />
                  <span>خطوة سهلة ومباشرة</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button below steps */}
        <div className="text-center mt-10">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all duration-200 whitespace-nowrap"
          >
            <span>احجز الحصة الاستكشافية المجانية</span>
            <ArrowLeft size={15} className="text-brand-green" />
          </a>
        </div>
      </div>
    </section>
  );
}
