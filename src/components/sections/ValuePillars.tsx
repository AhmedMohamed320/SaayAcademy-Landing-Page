"use client";

import React from "react";
import {
  ShieldCheck,
  Video,
  FileText,
  Users,
  Sparkles,
  CheckCircle2,
} from "@/components/icons/AnimatedIcons";

export default function ValuePillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      badge: "تقييم واختبار دقيق",
      title: "معلمون مصريون مؤهلون ومختبرون",
      description:
        "اختبار وتأهيل دقيق للمهارات التدريسية وشغف الشرح للتأكد من تمكن المعلم ومناسبته لتدريس المنهج المصري أو الإماراتي.",
      colorClass: "bg-brand-green-light text-brand-green border-brand-green/20",
    },
    {
      icon: Users,
      badge: "8 حصص شهرياً للمادة",
      title: "مجموعات دراسية تفاعلية",
      description:
        "مجموعات صغيرة تفاعلية تركز على الشرح وحل الأسئلة والتمارين بمعدل حصتين أسبوعياً لكل مادة دراسية.",
      colorClass: "bg-brand-primary-light text-brand-primary border-brand-primary/20",
    },
    {
      icon: Video,
      badge: "مراجعة دائمة",
      title: "تسجيل كامل لجميع الحصص",
      description:
        "تسجيل الحصص بتقنية HD وإتاحتها للطالب وولي الأمر للرجوع إليها ليلة الاختبارات وتثبيت المفاهيم بكل سهولة.",
      colorClass: "bg-brand-green-light text-brand-green border-brand-green/20",
    },
    {
      icon: FileText,
      badge: "أمان ورضا تام",
      title: "تسعير عادل وضمان استرداد 100%",
      description:
        "اشتراك شهري يبدأ من 250 ج.م للمادة بمصر و 30-50 درهم للحصة بالإمارات، مع إمكانية استرداد الرسوم إن لم تعجبك الحصة الأولى.",
      colorClass: "bg-brand-gold-light text-brand-gold border-brand-gold/20",
    },
  ];

  return (
    <section id="why-saay" className="py-12 sm:py-16 md:py-20 bg-bg-page relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-green-glow rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with generous line-height */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-xs sm:text-sm font-bold mb-3 whitespace-nowrap">
            <Sparkles size={14} className="text-brand-gold" />
            <span>لماذا يختار أولياء الأمور سَعى؟</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading leading-[1.45] mb-3">
            ركائز التجربة التعليمية في سَعى
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body leading-[1.75]">
            نمنحك تجربة تعليمية متكاملة تجمع بين كفاءة الشرح للمجموعات الدراسية وراحة بال الأسرة والمتابعة المستمرة.
          </p>
        </div>

        {/* 4 Focused Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-bg-surface rounded-2xl p-5 sm:p-6 border border-border-light shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${pillar.colorClass} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-text-muted bg-bg-surface-subtle px-2 py-0.5 rounded-full border border-border-light whitespace-nowrap">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-text-heading font-heading mb-2 leading-[1.45]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-body leading-[1.75]">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-border-light flex items-center gap-1.5 text-[11px] font-bold text-brand-primary group-hover:text-brand-green transition-colors">
                  <CheckCircle2 size={14} className="text-brand-green" />
                  <span className="whitespace-nowrap">مضمون 100% في سَعى</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
