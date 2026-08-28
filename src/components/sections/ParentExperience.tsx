"use client";

import React from "react";
import {
  ShieldCheck,
  Video,
  CheckCircle2,
  Play,
  CalendarCheck,
  Clock,
  MessageSquare,
  ArrowLeft,
  BookOpen,
} from "@/components/icons/AnimatedIcons";

export default function ParentExperience() {
  return (
    <section id="parents" className="py-12 sm:py-16 md:py-20 bg-bg-page relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Right Column: Copy tailored to Parents & Guardians */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 text-right">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-xs sm:text-sm font-bold whitespace-nowrap">
              <ShieldCheck size={15} className="text-brand-green" />
              <span>مصممة لراحة واطمئنان أولياء الأمور</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading leading-[1.45]">
              راحة بال تامة لك..{" "}
              <span className="text-brand-green">ومتابعة مستمرة لتفوق ابنك</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-body leading-[1.75]">
              ندرك في سَعى مسؤولية اختيار التعليم الأنسب. لذلك وفرنا تجربة متكاملة تضمن جدولاً منتظماً،
              وتسجيلاً كاملاً لكافة الحصص مع تواصل مباشر ومستمر عبر واتساب.
            </p>

            {/* Benefit Checkpoints */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-green-light text-brand-green flex-shrink-0 mt-0.5">
                  <Video size={16} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-heading leading-[1.4]">تسجيل كامل لجميع الحصص</h4>
                  <p className="text-xs text-text-muted mt-0.5 leading-[1.6]">
                    إمكانية إعادة مشاهدة الحصة في أي وقت لمراجعة الشرح وتثبيت المفاهيم ليلة الامتحانات.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-green-light text-brand-green flex-shrink-0 mt-0.5">
                  <CalendarCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-heading leading-[1.4]">جدول أسبوعي منظم وثابت</h4>
                  <p className="text-xs text-text-muted mt-0.5 leading-[1.6]">
                    مواعيد منتظمة (حصتان أسبوعياً لكل مادة) لتثبيت المعلومة وتغطية المنهج بدون أي انقطاع.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-primary-light text-brand-primary flex-shrink-0 mt-0.5">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-heading leading-[1.4]">تواصل مباشر مع منسقك عبر واتساب</h4>
                  <p className="text-xs text-text-muted mt-0.5 leading-[1.6]">
                    فريق متابعة متاح دائماً للإجابة على استفساراتك وتنسيق المواعيد بكل سهولة.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-soft transition-all whitespace-nowrap"
              >
                <span>احجز الحصة الاستكشافية لابنك</span>
                <ArrowLeft size={15} className="text-brand-green" />
              </a>
            </div>
          </div>

          {/* Left Column: Interactive Parent & Student Portal Mockup */}
          <div className="lg:col-span-6 mt-2 lg:mt-0">
            <div className="bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light shadow-card p-5 sm:p-7 relative">
              {/* Top Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border-light mb-4 sm:mb-5">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-brand-primary bg-brand-green-light border border-brand-green/20 px-2 py-0.5 rounded-md whitespace-nowrap">
                    جدول الحصص والتسجيلات
                  </span>
                  <h3 className="text-xs sm:text-base font-bold text-text-heading font-heading mt-1 leading-[1.4]">
                    مجموعة الرياضيات (8 حصص شهرياً)
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-brand-primary bg-brand-green-light px-2.5 py-1 rounded-xl whitespace-nowrap">
                  <CalendarCheck size={14} className="text-brand-green" />
                  <span>اشتراك نشط</span>
                </div>
              </div>

              {/* Next Session Card */}
              <div className="bg-bg-page rounded-xl sm:rounded-2xl p-3.5 border border-border-light mb-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-text-heading flex items-center gap-1.5">
                    <Clock size={14} className="text-brand-green" />
                    موعد الحصة القادمة:
                  </span>
                  <span className="text-brand-primary font-bold">الثلاثاء 6:00 م</span>
                </div>
                <p className="text-xs text-text-muted">
                  موضوع الدرس: حل وتطبيقات المسائل ونماذج الامتحانات.
                </p>
              </div>

              {/* Recorded Session Card */}
              <div className="bg-bg-page rounded-xl sm:rounded-2xl p-3.5 border border-border-light mb-4">
                <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                  <span className="font-semibold text-text-heading flex items-center gap-1.5">
                    <Video size={14} className="text-brand-green" />
                    تسجيل الحصة السابقة
                  </span>
                  <span className="whitespace-nowrap">متاح للمشاهدة HD</span>
                </div>
                <div className="flex items-center justify-between bg-bg-surface p-2.5 rounded-xl border border-border-light">
                  <span className="text-xs text-text-body font-semibold">مراجعة المفاهيم وحل التمارين (55 دقيقة)</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-green hover:underline transition-colors whitespace-nowrap"
                  >
                    <Play size={12} fill="currentColor" />
                    <span>تشغيل</span>
                  </button>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="bg-brand-green-light border border-brand-green/20 rounded-xl sm:rounded-2xl p-3 flex items-center gap-2.5">
                <div className="p-1.5 rounded-xl bg-brand-primary text-text-inverted flex-shrink-0">
                  <ShieldCheck size={16} className="text-brand-green" />
                </div>
                <div className="text-xs text-text-heading leading-snug">
                  <strong>ضمان سَعى:</strong> استرجع رسومك كاملة في حال عدم رضاك عن الحصة الأولى بدون أي شروط.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
