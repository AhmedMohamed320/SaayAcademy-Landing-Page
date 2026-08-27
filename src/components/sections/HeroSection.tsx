"use client";

import React, { useState, useMemo } from "react";
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
  CheckCheck,
} from "@/components/icons/AnimatedIcons";
import { SAAY_COUNTRIES, SAAY_CURRICULA, SAAY_SUBJECTS } from "@/lib/constants";
import CustomSelect, { OptionItem } from "@/components/ui/CustomSelect";

interface HeroSectionProps {
  onQuickSearch: (country: string, curriculum: string, subject: string) => void;
  onOpenConcierge: () => void;
}

export default function HeroSection({ onQuickSearch, onOpenConcierge }: HeroSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState(SAAY_COUNTRIES[0].id);
  const [selectedCurriculum, setSelectedCurriculum] = useState(SAAY_CURRICULA[0].id);
  const [selectedSubject, setSelectedSubject] = useState(SAAY_SUBJECTS[0].id);

  const countryOptions: OptionItem[] = useMemo(
    () =>
      SAAY_COUNTRIES.map((c) => ({
        value: c.id,
        label: `${c.flag} ${c.name}`,
      })),
    []
  );

  const curriculumOptions: OptionItem[] = useMemo(
    () =>
      SAAY_CURRICULA.map((cur) => ({
        value: cur.id,
        label: cur.name,
      })),
    []
  );

  const subjectOptions: OptionItem[] = useMemo(
    () =>
      SAAY_SUBJECTS.map((sub) => ({
        value: sub.id,
        label: sub.name,
      })),
    []
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch(selectedCountry, selectedCurriculum, selectedSubject);
    const target = document.getElementById("academic-selector");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-3 pb-10 md:pt-10 md:pb-20 hero-glow-mesh overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green-glow rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-brand-primary-glow rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Right Column: High-Impact Hero Copy (RTL Lead) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-right">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs md:text-sm font-semibold shadow-soft">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <Sparkles size={14} className="text-brand-gold flex-shrink-0" />
              <span>تعليم فردي خصوصي معتمد في مصر 🇪🇬 والإمارات 🇦🇪</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-extrabold font-heading text-text-heading leading-[1.3] sm:leading-[1.25] tracking-tight">
              تعليم خصوصي فردي بمعايير استثنائية..{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-primary via-brand-green-dark to-brand-green">
                مصمّم خصيصاً لتفوّق ابنك
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base md:text-lg text-text-body leading-relaxed max-w-2xl">
              نربطك فورياً بصفوة <strong className="text-brand-primary font-bold">أفضل 5% من المعلمين المعتمدين</strong>{" "}
              في المناهج الوطنية (المصري العام واللغات، والإماراتي بمساراته واختبارات EmSAT) والمناهج الدولية (البريطاني IGCSE، الأمريكي، و IB).
              حصص فردية 1-on-1 تفاعلية، مسجلة بالكامل مع تقارير أداء ومتابعة مستمرة لولي الأمر.
            </p>

            {/* Quick Interactive Match Finder Box */}
            <div className="bg-bg-surface-glass backdrop-blur-xl border border-border-light rounded-2xl p-3.5 sm:p-5 shadow-card mt-0.5 sm:mt-1">
              <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                <span className="text-xs sm:text-sm font-bold text-text-heading flex items-center gap-1.5">
                  <GraduationCap size={16} className="text-brand-green flex-shrink-0" />
                  <span className="truncate">طابق معلمك المعتمد حسب دولتك ومنهجك:</span>
                </span>
                <button
                  type="button"
                  onClick={onOpenConcierge}
                  className="text-[11px] sm:text-xs text-brand-green hover:underline font-semibold whitespace-nowrap flex-shrink-0"
                >
                  منهجك غير مدرج؟
                </button>
              </div>

              <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {/* Custom Country Selector */}
                <CustomSelect
                  label="الدولة"
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  options={countryOptions}
                />

                {/* Custom Curriculum Selector */}
                <CustomSelect
                  label="المنهج الدراسي"
                  value={selectedCurriculum}
                  onChange={setSelectedCurriculum}
                  options={curriculumOptions}
                />

                {/* Custom Subject Selector */}
                <CustomSelect
                  label="المادة المطلوبة"
                  value={selectedSubject}
                  onChange={setSelectedSubject}
                  options={subjectOptions}
                />

                {/* Submit CTA */}
                <div className="sm:col-span-3 mt-1">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all duration-200 group"
                  >
                    <span>اعثر على المعلمين المتاحين فوراً</span>
                    <ArrowLeft size={15} className="text-brand-green transition-transform duration-300 group-hover:-translate-x-1.5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2.5 border-t border-border-light">
              <div className="flex items-center gap-1.5 sm:gap-2 text-right">
                <div className="p-1.5 sm:p-2 rounded-xl bg-brand-green-light text-brand-primary flex-shrink-0">
                  <ShieldCheck size={16} className="text-brand-green" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-text-heading whitespace-nowrap">معلمون معتمدون</div>
                  <div className="text-[10px] sm:text-[11px] text-text-muted whitespace-nowrap">فحص دقيق 100%</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-right">
                <div className="p-1.5 sm:p-2 rounded-xl bg-brand-green-light text-brand-primary flex-shrink-0">
                  <Video size={16} className="text-brand-green" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-text-heading whitespace-nowrap">حصص مسجلة</div>
                  <div className="text-[10px] sm:text-[11px] text-text-muted whitespace-nowrap">مراجعة في أي وقت</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-right">
                <div className="p-1.5 sm:p-2 rounded-xl bg-brand-primary-light text-brand-primary flex-shrink-0">
                  <Award size={16} className="text-brand-primary" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-text-heading whitespace-nowrap">تقارير لولي الأمر</div>
                  <div className="text-[10px] sm:text-[11px] text-text-muted whitespace-nowrap">متابعة الأداء فوراً</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-right">
                <div className="p-1.5 sm:p-2 rounded-xl bg-brand-gold-light text-brand-gold flex-shrink-0">
                  <Star size={16} />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-text-heading whitespace-nowrap">ضمان استرداد الرضا</div>
                  <div className="text-[10px] sm:text-[11px] text-text-muted whitespace-nowrap">خالية من المخاطر</div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Visual Interactive Session Experience Simulation */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card Container */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-bg-surface border border-border-light shadow-card overflow-hidden p-4 sm:p-6">
                {/* Header Simulation */}
                <div className="flex items-center justify-between pb-3 border-b border-border-light mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-brand-primary text-brand-green flex items-center justify-center font-heading font-bold text-xs sm:text-sm border border-brand-green/30 shadow-soft flex-shrink-0">
                      <span>د.ع</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs sm:text-sm font-bold text-text-heading">د. عبد الرحمن زهران</h4>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold bg-brand-green-light text-brand-green-dark">
                          معتمد
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted">خبير الرياضيات والفيزياء (IGCSE & ثانوية عامة & EmSAT)</p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-brand-primary bg-brand-green-light px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full whitespace-nowrap">
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-green animate-pulse"></span>
                    حصة جارية
                  </span>
                </div>

                {/* Simulated Interactive Whiteboard / Lesson Screen */}
                <div className="relative rounded-xl sm:rounded-2xl bg-bg-dark-section text-text-inverted p-3 sm:p-4 mb-3 sm:mb-4 overflow-hidden">
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-green opacity-20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-text-inverted-muted mb-2.5 border-b border-border-dark-glass pb-2">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock size={12} className="text-brand-green" />
                      00:42:15 / 01:00:00
                    </span>
                    <span className="bg-brand-green-dark text-text-inverted text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                      REC ● جاري التسجيل HD
                    </span>
                  </div>

                  {/* Math Formula / Interactive Content */}
                  <div className="py-1.5 text-center">
                    <span className="text-[10px] sm:text-xs text-text-inverted-muted block mb-1">حل مسألة التفاضل والتطبيقات الحسابية:</span>
                    <div className="font-mono text-xs sm:text-base md:text-lg font-bold text-brand-green tracking-wide bg-bg-dark-card py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-xl border border-border-dark-glass inline-block max-w-full overflow-x-auto">
                      f&apos;(x) = \lim_&#123;h \to 0&#125; \frac&#123;f(x+h) - f(x)&#125;&#123;h&#125;
                    </div>
                  </div>

                  <div className="mt-2.5 grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-[11px]">
                    <div className="bg-bg-dark-card p-1.5 sm:p-2 rounded-lg border border-border-dark-glass flex items-center gap-1">
                      <CheckCircle2 size={13} className="text-brand-green flex-shrink-0" />
                      <span className="truncate">فهم المفهوم: 100%</span>
                    </div>
                    <div className="bg-bg-dark-card p-1.5 sm:p-2 rounded-lg border border-border-dark-glass flex items-center gap-1">
                      <CheckCircle2 size={13} className="text-brand-gold flex-shrink-0" />
                      <span className="truncate">التطبيق العملي: ممتاز</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Rating & Instant Feedback */}
                <div className="bg-bg-surface-subtle border border-border-light rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1 text-brand-gold mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                      <span className="text-[11px] sm:text-xs font-bold text-text-heading mr-1">4.98 / 5</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-text-muted">تقييم 940+ حصة مكتملة</p>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-1 text-xs font-bold text-text-inverted bg-brand-primary hover:bg-brand-primary-hover px-2.5 sm:px-3 py-1.5 rounded-xl transition-colors shadow-soft whitespace-nowrap"
                  >
                    <span>احجز الآن</span>
                    <ArrowLeft size={12} className="text-brand-green" />
                  </a>
                </div>
              </div>

              {/* Contained Parent Notification Card */}
              <div className="mt-2.5 bg-bg-surface rounded-xl border border-border-light shadow-soft p-2.5 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-brand-green-light text-brand-green flex-shrink-0">
                  <CheckCheck size={16} />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-text-heading">تم إرسال تقرير الحصة لولي الأمر</div>
                  <div className="text-[10px] text-text-muted">ملاحظات المعلم + التسجيل متاح</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
