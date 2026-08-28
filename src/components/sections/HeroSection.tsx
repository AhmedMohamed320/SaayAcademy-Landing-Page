"use client";

import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Video,
  Star,
  ArrowLeft,
  GraduationCap,
  CheckCircle2,
  Clock,
  Award,
  MessageSquare,
  BookOpen,
  CalendarCheck,
} from "@/components/icons/AnimatedIcons";

interface HeroSectionProps {
  onQuickSearch?: (country: string, curriculum: string, subject: string) => void;
  onOpenConcierge: () => void;
}

export default function HeroSection({ onOpenConcierge }: HeroSectionProps) {
  const scrollToAcademic = () => {
    const target = document.getElementById("academic-selector");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-8 pb-14 md:pt-16 md:pb-24 hero-glow-mesh overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-green-glow rounded-full blur-3xl -z-10 pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-xs sm:text-sm font-bold shadow-soft mb-6 animate-in fade-in duration-300">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <Sparkles size={14} className="text-brand-gold flex-shrink-0" />
          <span>منصة سَعى للمجموعات الدراسية لمناهج مصر 🇪🇬 والإمارات 🇦🇪</span>
        </div>

        {/* Hero Headline - Balanced, Authentic, High Line-Height */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-text-heading leading-[1.38] md:leading-[1.32] tracking-tight mb-5 max-w-4xl mx-auto">
          احجز مادتك الدراسية بسهولة..{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-primary via-brand-green-dark to-brand-green">
            8 حصص شهرياً في مصر والإمارات
          </span>
        </h1>

        {/* Honest, Clear Value Proposition */}
        <p className="text-sm sm:text-lg md:text-xl text-text-body leading-[1.8] max-w-3xl mx-auto mb-8">
          مجموعات دراسية تفاعلية لمناهج مصر (عام ولغات) والإمارات والدولية، مع معلمين مصريين مؤهلين ومختبرين من إدارة سَعى، وحصص مسجلة بالكامل مع ضمان استرداد الرضا 100%.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 max-w-xl mx-auto">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-green hover:bg-brand-green-hover text-brand-primary px-8 py-3.5 rounded-xl font-black text-sm sm:text-base shadow-glow hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            <span>احجز الحصة الاستكشافية الآن</span>
            <ArrowLeft size={16} />
          </a>

          <button
            type="button"
            onClick={scrollToAcademic}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bg-surface hover:bg-bg-surface-subtle text-text-heading border border-border-medium hover:border-brand-green px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-soft transition-all duration-200 whitespace-nowrap"
          >
            <BookOpen size={18} className="text-brand-green" />
            <span>استكشف المواد والمجموعات المتاحة</span>
          </button>
        </div>

        {/* Transparent Key Pricing & Trust Row */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-3 px-5 rounded-2xl bg-bg-surface border border-border-light shadow-soft text-xs sm:text-sm text-text-heading mb-12">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🇪🇬</span>
            <span><strong>مصر:</strong> 250 ج.م شهرياً للمادة (8 حصص)</span>
          </div>

          <span className="hidden sm:inline text-border-medium">•</span>

          <div className="flex items-center gap-1.5">
            <span className="text-base">🇦🇪</span>
            <span><strong>الإمارات:</strong> 30 - 50 درهم للحصة</span>
          </div>

          <span className="hidden sm:inline text-border-medium">•</span>

          <div className="flex items-center gap-1.5 text-brand-primary font-bold">
            <ShieldCheck size={16} className="text-brand-green" />
            <span>ضمان استرداد الرضا 100%</span>
          </div>
        </div>

        {/* Clean Showcase: Real Subject Group Batch Preview */}
        <div className="max-w-3xl mx-auto text-right">
          <div className="bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light shadow-card p-5 sm:p-7 relative overflow-hidden">
            {/* Top Batch Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-light mb-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-brand-primary text-brand-green flex items-center justify-center font-heading font-bold text-base border border-brand-green/30 shadow-soft flex-shrink-0">
                  <BookOpen size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-text-heading font-heading">
                      مجموعة الرياضيات والعلوم (المرحلة الإعدادية والثانوية)
                    </h3>
                  </div>
                  <p className="text-xs text-text-muted mt-0.5">
                    المنهج المصري العام واللغات • المنهج الإماراتي • IGCSE
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="flex items-center gap-1.5 text-xs font-bold text-brand-primary bg-brand-green-light px-3 py-1 rounded-full whitespace-nowrap">
                  <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
                  8 حصص شهرياً
                </span>
              </div>
            </div>

            {/* Middle Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div className="bg-bg-page p-3.5 rounded-xl border border-border-light">
                <div className="flex items-center gap-2 text-xs font-bold text-text-heading mb-1">
                  <ShieldCheck size={15} className="text-brand-green" />
                  <span>معلم مختبر ومؤهل</span>
                </div>
                <p className="text-[11px] text-text-muted">تختبر سَعى المعلمين بعناية للتأكد من أسلوب الشرح.</p>
              </div>

              <div className="bg-bg-page p-3.5 rounded-xl border border-border-light">
                <div className="flex items-center gap-2 text-xs font-bold text-text-heading mb-1">
                  <Video size={15} className="text-brand-green" />
                  <span>تسجيل كامل لكل حصة</span>
                </div>
                <p className="text-[11px] text-text-muted">متاح للطالب وولي الأمر للمراجعة في أي وقت.</p>
              </div>

              <div className="bg-bg-page p-3.5 rounded-xl border border-border-light">
                <div className="flex items-center gap-2 text-xs font-bold text-text-heading mb-1">
                  <Clock size={15} className="text-brand-primary" />
                  <span>مواعيد مرنة ومنتظمة</span>
                </div>
                <p className="text-[11px] text-text-muted">جدول أسبوعي منظم ومتابعة مستمرة عبر واتساب.</p>
              </div>
            </div>

            {/* Bottom Quick Match Direct Trigger */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-border-light">
              <div className="text-xs text-text-muted">
                اختر مادتك وسنقوم بتنسيق مجموعتك والموعد الأنسب لك فوراً.
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={scrollToAcademic}
                  className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap"
                >
                  <span>تصفح المجموعات المتاحة</span>
                  <ArrowLeft size={13} className="text-brand-green" />
                </button>

                <button
                  type="button"
                  onClick={onOpenConcierge}
                  className="inline-flex items-center justify-center gap-1.5 bg-bg-surface-subtle hover:bg-bg-surface text-text-heading border border-border-medium px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap"
                >
                  <MessageSquare size={13} className="text-brand-green" />
                  <span>المنسق الأكاديمي</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
