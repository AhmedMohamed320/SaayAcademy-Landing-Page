"use client";

import React from "react";
import {
  ShieldCheck,
  Video,
  FileText,
  CalendarCheck,
  Headphones,
  Users,
  Sparkles,
  CheckCircle2,
} from "@/components/icons/AnimatedIcons";

export default function ValuePillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      badge: "معايير اختيار صارمة",
      title: "نخبة المعلمين المعتمدين (Top 5%)",
      description:
        "لا نقبل إلا المعلمين الذين يجتازون اختبارات الكفاءة الأكاديمية والمقابلات التدريسية الحية. نضمن لك معلماً متمكناً من المنهج ولديه شغف حقيقي بالشرح.",
      colorClass: "bg-brand-green-light text-brand-green border-brand-green/20",
    },
    {
      icon: Users,
      badge: "تركيز بنسبة 100%",
      title: "حصص فردية خاصة 1-on-1",
      description:
        "حصة تعليمية مخصصة بالكامل لطالب واحد. لا تشتيت، لا مجموعات مزدحمة، والشرح يسير بالسرعة والأسلوب الذي يلائم عقلية وقدرات ابنك بدقة.",
      colorClass: "bg-brand-primary-light text-brand-primary border-brand-primary/20",
    },
    {
      icon: Video,
      badge: "مكتبة مراجعة ذكية",
      title: "تسجيل كامل لجميع الحصص بتقنية HD",
      description:
        "كل دقيقة يتم تسجيلها وحفظها في حساب الطالب للرجوع إليها في أي وقت للمراجعة ليلة الاختبارات وتثبيت المفاهيم الصعبة بكل يسر.",
      colorClass: "bg-brand-green-light text-brand-green border-brand-green/20",
    },
    {
      icon: FileText,
      badge: "شفافية مطلقة",
      title: "تقارير أداء فورية لولي الأمر",
      description:
        "يصلك تقرير تفصيلي بعد نهاية كل حصة يوضح مستوى التفاعل، المهام المنجزة، ونقاط القوة والتحسين لتبقى دائماً على اطلاع بمسيرة ابنك الأكاديمية.",
      colorClass: "bg-brand-gold-light text-brand-gold border-brand-gold/20",
    },
    {
      icon: CalendarCheck,
      badge: "راحة تامة للعائلة",
      title: "مرونة كاملة في المواعيد وإعادة الجدولة",
      description:
        "اختر الأوقات التي تناسب جدول العائلة، مع إمكانية تعديل الموعد بسهولة وبدون أي تعقيدات أو خسارة للحصة.",
      colorClass: "bg-brand-green-light text-brand-green border-brand-green/20",
    },
    {
      icon: Headphones,
      badge: "إشراف بشري مستمر",
      title: "منسق أكاديمي ودعم بشري حقيقي",
      description:
        "لست وحدك في التجربة. فريق المنسقين الأكاديميين متاح دائماً عبر واتساب لمساعدتك في المواءمة، وتغيير المعلم إذا رغبت، والإجابة عن أي استفسار.",
      colorClass: "bg-brand-primary-light text-brand-primary border-brand-primary/20",
    },
  ];

  return (
    <section id="why-saay" className="py-10 sm:py-16 md:py-20 bg-bg-page relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-green-glow rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold mb-2.5 sm:mb-3 whitespace-nowrap">
            <Sparkles size={14} className="text-brand-gold" />
            <span>لماذا يختار أولياء الأمور سَعى؟</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading mb-2 sm:mb-3">
            ركائز التفوق الأكاديمي وصناعة الفارق الحقيقي
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body leading-relaxed">
            لم نقم فقط برقمنة الدروس الخصوصية، بل أعدنا هندستها وفق معايير تضمن الجودة والأمان الأكاديمي والراحة
            المطلقة للطالب وولي الأمر.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-bg-surface rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border-light shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border ${pillar.colorClass} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-text-muted bg-bg-surface-subtle px-2 py-0.5 rounded-full border border-border-light whitespace-nowrap">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-heading font-heading mb-1.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-border-light flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-brand-primary group-hover:text-brand-green transition-colors">
                  <CheckCircle2 size={14} className="text-brand-green" />
                  <span className="whitespace-nowrap">معتمد ومضمون 100% في سَعى</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
