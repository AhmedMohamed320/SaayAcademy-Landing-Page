"use client";

import React, { useState } from "react";
import {
  Sparkles,
  BookOpen,
  CalendarCheck,
  Video,
  GraduationCap,
  ShieldCheck,
  Laptop,
  CheckCircle2,
  ArrowLeft,
} from "@/components/icons/AnimatedIcons";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"student" | "teacher">("student");

  const studentSteps = [
    {
      stepNumber: "01",
      icon: BookOpen,
      title: "حدد دولتك ومنهجك ومادتك",
      description: "اختر الدولة والمنهج الدراسي (سعودي، إماراتي، بريطاني IGCSE، أمريكي، IB) والمادة التي يحتاج الطالب لتقويتها.",
    },
    {
      stepNumber: "02",
      icon: CalendarCheck,
      title: "اختر معلمك المعتمد والموعد الأنسب",
      description: "تصفح ملفات صفوة المعلمين، تقييماتهم، وخبراتهم الأكاديمية وحدد الوقت الملائم لجدولك اليومي بكل سهولة.",
    },
    {
      stepNumber: "03",
      icon: Video,
      title: "انطلق في حصتك التفاعلية وتابع التطور",
      description: "احضر الحصة الفردية عبر قاعة سَعى الذكية، احصل على التسجيل كاملاً، واستلم تقرير الأداء الفوري بعد كل درس.",
    },
  ];

  const teacherSteps = [
    {
      stepNumber: "01",
      icon: GraduationCap,
      title: "قدّم طلب الانضمام ومؤهلاتك",
      description: "سجل بياناتك وخبراتك التعليمية والمناهج التي تتقن تدريسها لندرس ملفك بعناية واهتمام.",
    },
    {
      stepNumber: "02",
      icon: ShieldCheck,
      title: "اجتز المقابلة والاعتماد الأكاديمي",
      description: "نحدد جلسة محاكاة تدريسية حية للتحقق من أسلوبك وتفاعلك واعتماد حسابك كمعلم رسمي في سَعى.",
    },
    {
      stepNumber: "03",
      icon: Laptop,
      title: "حدد جدولك وابدأ التدريس بدخل مجزي",
      description: "اضبط أوقات فراغك، استقبل حجوزات الطلاب المباشرة، وقدم حصصك بأحدث الأدوات الرقمية وبأمان مالي كامل.",
    },
  ];

  const currentSteps = activeTab === "student" ? studentSteps : teacherSteps;

  return (
    <section id="how-it-works" className="py-10 sm:py-16 md:py-20 bg-bg-surface border-y border-border-light relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold mb-2.5 sm:mb-3 whitespace-nowrap">
            <Sparkles size={14} className="text-brand-gold" />
            <span>بساطة مطلقة ونتائج استثنائية</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading mb-2 sm:mb-3">
            كيف تعمل أكاديمية سَعى؟
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body">
            صممنا التجربة لتكون سلسة ومباشرة في 3 خطوات واضحة، بدون تعقيدات إدارية أو إضاعة للوقت.
          </p>

          {/* Tab Switcher - Responsive Full-Width on Mobile */}
          <div className="grid grid-cols-2 p-1 rounded-2xl bg-bg-page border border-border-light mt-4 sm:mt-5 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className={`px-2.5 py-2 rounded-xl text-[11px] sm:text-xs md:text-sm font-bold transition-all duration-200 text-center truncate ${
                activeTab === "student"
                  ? "bg-brand-primary text-text-inverted shadow-soft"
                  : "text-text-body hover:text-brand-green"
              }`}
            >
              👨‍🎓 رحلة الطالب وولي الأمر
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("teacher")}
              className={`px-2.5 py-2 rounded-xl text-[11px] sm:text-xs md:text-sm font-bold transition-all duration-200 text-center truncate ${
                activeTab === "teacher"
                  ? "bg-brand-primary text-text-inverted shadow-soft"
                  : "text-text-body hover:text-brand-green"
              }`}
            >
              👨‍🏫 رحلة المعلم المتميز
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {/* Connector Line behind cards on desktop */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-0.5 bg-gradient-to-l from-brand-primary via-brand-green to-brand-green-light -translate-y-8 -z-0 opacity-20" />

          {currentSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-bg-page rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border-light shadow-soft hover:shadow-hover transition-all duration-300 relative z-10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-brand-green-light text-brand-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} className="text-brand-green" />
                    </div>
                    <span className="font-heading font-black text-xl sm:text-2xl text-brand-primary/20 group-hover:text-brand-green transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-heading font-heading mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-border-light flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-brand-primary">
                  <CheckCircle2 size={14} className="text-brand-green" />
                  <span className="whitespace-nowrap">خطوة مؤكدة وسهلة</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button below steps */}
        <div className="text-center mt-6 sm:mt-10">
          {activeTab === "student" ? (
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all duration-200 whitespace-nowrap"
            >
              <span>ابدأ الآن واحجز حصتك التجريبية</span>
              <ArrowLeft size={15} className="text-brand-green" />
            </a>
          ) : (
            <a
              href="#teachers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all duration-200 whitespace-nowrap"
            >
              <span>قدّم طلب الانضمام كمعلم في سَعى</span>
              <ArrowLeft size={15} className="text-brand-green" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
