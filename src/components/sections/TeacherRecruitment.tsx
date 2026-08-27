"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Award,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Laptop,
} from "@/components/icons/AnimatedIcons";

interface TeacherRecruitmentProps {
  onOpenTeacherModal: () => void;
}

export default function TeacherRecruitment({ onOpenTeacherModal }: TeacherRecruitmentProps) {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const hourlyRateAvg = 130; // average SAR per hour
  const monthlyEarnings = hoursPerWeek * 4 * hourlyRateAvg;

  return (
    <section id="teachers" className="py-10 sm:py-16 md:py-20 bg-bg-surface border-y border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Right Column: Teacher Value Proposition */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 text-right">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold whitespace-nowrap">
              <GraduationCap size={15} className="text-brand-green" />
              <span>فرصة تدريس استثنائية للكفاءات التعليمية</span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading leading-tight">
              انضم إلى مجتمع صفوة المعلمين..{" "}
              <span className="text-brand-green">ودرّس بشغف وبدخل مجزي ومضمون</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-body leading-relaxed">
              إذا كنت معلماً متمكناً ولديك شغف بتبسيط العلوم والمناهج (الوزاري، الأمريكي، البريطاني، أو IB)، نمنحك المنصة
              المثالية للوصول لآلاف الطلاب الجادين في دول الخليج والعالم العربي.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-page border border-border-light">
                <div className="p-2 rounded-xl bg-brand-green-light text-brand-green inline-block mb-1.5">
                  <Clock size={16} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-text-heading mb-0.5">مرونة مطلقة في الجدول</h4>
                <p className="text-[11px] sm:text-xs text-text-muted">أنت من يحدد ساعات وأيام العمل التي تناسبك بحرية تامة.</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-page border border-border-light">
                <div className="p-2 rounded-xl bg-brand-green-light text-brand-green inline-block mb-1.5">
                  <ShieldCheck size={16} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-text-heading mb-0.5">أمان مالي وتحويل منتظم</h4>
                <p className="text-[11px] sm:text-xs text-text-muted">مستحقاتك المالية محفوظة بنسبة 100% وتصلك دورياً.</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-page border border-border-light">
                <div className="p-2 rounded-xl bg-brand-primary-light text-brand-primary inline-block mb-1.5">
                  <Laptop size={16} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-text-heading mb-0.5">أدوات تدريس ذكية</h4>
                <p className="text-[11px] sm:text-xs text-text-muted">قاعات افتراضية متطورة، سبورة تفاعلية، وتسجيل آلي.</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-page border border-border-light">
                <div className="p-2 rounded-xl bg-brand-gold-light text-brand-gold inline-block mb-1.5">
                  <Award size={16} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-text-heading mb-0.5">تقدير وسمعة أكاديمية</h4>
                <p className="text-[11px] sm:text-xs text-text-muted">بناء بروفايل احترافي موثق وتقييمات حقيقية لتعزيز مكانتك.</p>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenTeacherModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all whitespace-nowrap"
              >
                <span>قدّم طلب الانضمام كمعلم الآن</span>
                <ArrowLeft size={15} className="text-brand-green" />
              </button>
            </div>
          </div>

          {/* Left Column: Interactive Teacher Earnings Calculator */}
          <div className="lg:col-span-6 mt-2 lg:mt-0">
            <div className="bg-bg-dark-section rounded-2xl sm:rounded-3xl p-4 sm:p-7 text-text-inverted shadow-card relative border border-border-dark-glass">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green opacity-20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-border-dark-glass mb-4">
                <div>
                  <span className="text-[11px] text-brand-green font-mono uppercase tracking-wider block mb-0.5">
                    حاسبة الدخل التقديري
                  </span>
                  <h3 className="text-xs sm:text-base font-bold font-heading text-text-inverted">كم يمكنك أن تحقق شهرياً مع سَعى؟</h3>
                </div>
                <span className="p-1.5 sm:p-2 rounded-xl bg-brand-primary text-brand-gold flex-shrink-0">
                  <Sparkles size={16} />
                </span>
              </div>

              {/* Slider for hours */}
              <div className="space-y-2.5 mb-4 sm:mb-6">
                <div className="flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-text-inverted-muted">عدد الساعات في الأسبوع:</span>
                  <span className="text-xs sm:text-sm font-bold text-brand-green font-mono bg-bg-dark-card px-2.5 py-0.5 rounded-lg border border-border-dark-glass whitespace-nowrap">
                    {hoursPerWeek} ساعة / أسبوعياً
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-bg-dark-card rounded-lg appearance-none cursor-pointer accent-brand-green"
                />

                <div className="flex justify-between text-[10px] text-text-inverted-muted font-mono">
                  <span>5 ساعات</span>
                  <span>20 ساعة</span>
                  <span>35 ساعة</span>
                </div>
              </div>

              {/* Monthly Estimate Display Card */}
              <div className="bg-bg-dark-card border border-border-dark-glass rounded-xl p-3.5 text-center mb-4">
                <span className="text-[11px] text-text-inverted-muted block mb-1">الدخل الشهري المتوقع التقديري:</span>
                <div className="text-xl sm:text-3xl font-extrabold font-heading text-brand-green">
                  {monthlyEarnings.toLocaleString()} <span className="text-xs sm:text-base font-bold text-text-inverted">ر.س / شهرياً</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-text-inverted-muted mt-1 block">
                  * محسوب بمتوسط سعر الحصة 130 ر.س مع انتظام {hoursPerWeek} ساعة أسبوعياً.
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenTeacherModal}
                className="w-full py-2.5 sm:py-3 bg-brand-green hover:bg-brand-green-hover text-brand-primary font-black text-xs sm:text-sm rounded-xl shadow-soft transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>ابدأ رحلتك التدريسية معنا الآن</span>
                <ArrowLeft size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
