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
      description: "اختر الدولة (مصر أو الإمارات) والمنهج الدراسي والمادة التي تريد تقويتها ومتابعتها.",
    },
    {
      stepNumber: "02",
      icon: CalendarCheck,
      title: "انضم للمجموعة الدراسية والموعد الأنسب",
      description: "اختر الموعد الأنسب لجدولك الأسبوعي، وتقوم سَعى بتعيين المعلم المؤهل والمختبر لتدريس المجموعة.",
    },
    {
      stepNumber: "03",
      icon: Video,
      title: "احضر الحصص واستفد من التسجيلات",
      description: "حصص تفاعلية منتظمة (8 حصص شهرياً) عبر قاعة سَعى، مع تسجيل كامل لجميع الحصص متاح للمراجعة في أي وقت.",
    },
  ];

  const teacherSteps = [
    {
      stepNumber: "01",
      icon: GraduationCap,
      title: "قدّم طلب التدريس ومؤهلاتك",
      description: "سجل بياناتك وخبراتك والمناهج التي تتقن شرحها لندرس ملفك بعناية واهتمام.",
    },
    {
      stepNumber: "02",
      icon: ShieldCheck,
      title: "اجتز اختبار التقييم التدريسي",
      description: "جلسة تقييم واختبار للتحقق من أسلوب الشرح والتمكن والتفاعل قبل إسناد المجموعات الطلابية.",
    },
    {
      stepNumber: "03",
      icon: Laptop,
      title: "درّس بمرونة وبأجر 100-150 ج.م/ساعة",
      description: "اضبط جدولك، درّس مجموعات طلاب مصر والإمارات، وقدم حصصك بأحدث الأدوات الرقمية وبأمان مالي كامل.",
    },
  ];

  const currentSteps = activeTab === "student" ? studentSteps : teacherSteps;

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-bg-surface border-y border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with generous line-height */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-xs sm:text-sm font-bold mb-3 whitespace-nowrap">
            <Sparkles size={14} className="text-brand-gold" />
            <span>بساطة مطلقة ونتائج واضحة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading leading-[1.45] mb-3">
            كيف تعمل أكاديمية سَعى؟
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body leading-[1.75]">
            صممنا التجربة لتكون سلسة ومباشرة في 3 خطوات واضحة بدون أي تعقيد.
          </p>

          {/* Tab Switcher */}
          <div className="grid grid-cols-2 p-1 rounded-2xl bg-bg-page border border-border-light mt-5 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-center truncate ${
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
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-center truncate ${
                activeTab === "teacher"
                  ? "bg-brand-primary text-text-inverted shadow-soft"
                  : "text-text-body hover:text-brand-green"
              }`}
            >
              👨‍🏫 رحلة المعلم المصري
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {currentSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-bg-page rounded-2xl p-5 sm:p-6 border border-border-light shadow-soft hover:shadow-hover transition-all duration-300 relative z-10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-brand-green-light text-brand-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} className="text-brand-green" />
                    </div>
                    <span className="font-heading font-black text-xl sm:text-2xl text-brand-primary/20 group-hover:text-brand-green transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-text-heading font-heading mb-2 leading-[1.45]">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-body leading-[1.75]">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-border-light flex items-center gap-1 text-[11px] font-semibold text-brand-primary">
                  <CheckCircle2 size={14} className="text-brand-green" />
                  <span className="whitespace-nowrap">خطوة سهلة ومباشرة</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button below steps */}
        <div className="text-center mt-8 sm:mt-10">
          {activeTab === "student" ? (
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all duration-200 whitespace-nowrap"
            >
              <span>احجز الحصة الاستكشافية الآن</span>
              <ArrowLeft size={15} className="text-brand-green" />
            </a>
          ) : (
            <a
              href="#teachers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all duration-200 whitespace-nowrap"
            >
              <span>قدّم طلب التدريس في سَعى</span>
              <ArrowLeft size={15} className="text-brand-green" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
