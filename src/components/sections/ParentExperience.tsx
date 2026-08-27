"use client";

import React from "react";
import {
  ShieldCheck,
  Video,
  FileText,
  CheckCircle2,
  Play,
  TrendingUp,
  Clock,
  MessageSquare,
  ArrowLeft,
} from "@/components/icons/AnimatedIcons";

export default function ParentExperience() {
  return (
    <section id="parents" className="py-10 sm:py-16 md:py-20 bg-bg-page relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Right Column: Copy tailored to Parents & Guardians */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 text-right">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold whitespace-nowrap">
              <ShieldCheck size={15} className="text-brand-green" />
              <span>مصممة لراحة واطمئنان أولياء الأمور</span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading leading-tight">
              راحة بال تامة لك..{" "}
              <span className="text-brand-green">وتفوق أكاديمي ملموس لابنك</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-body leading-relaxed">
              ندرك في سَعى قلق ولي الأمر ومسؤولية اختيار المعلم المناسب. لذلك وفرنا لك تجربة متكاملة تمنحك الشفافية
              المطلقة لمتابعة كل تفاصيل الحصة والتطور الدراسي من منزلك وبدون أي عناء.
            </p>

            {/* Benefit Checkpoints */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-xl bg-brand-green-light text-brand-green flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-heading">تقارير أداء وملاحظات بعد كل حصة</h4>
                  <p className="text-[11px] sm:text-xs text-text-muted mt-0.5">
                    تعرف على ما تعلمه ابنك بدقة، مدى تفاعله مع المعلم، والواجبات المطلوبة لتثبيت المعلومة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-xl bg-brand-green-light text-brand-green flex-shrink-0 mt-0.5">
                  <Video size={16} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-heading">تسجيل الحصص متاح لولي الأمر والطالب</h4>
                  <p className="text-[11px] sm:text-xs text-text-muted mt-0.5">
                    إمكانية إعادة مشاهدة الحصة في أي وقت للتأكد من جودة الشرح ومراجعة الطالب قبل الاختبارات.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-xl bg-brand-gold-light text-brand-gold flex-shrink-0 mt-0.5">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-heading">توفير الوقت وعناء المشاوير</h4>
                  <p className="text-[11px] sm:text-xs text-text-muted mt-0.5">
                    دروس خصوصية ممتازة في بيئة منزلية آمنة ومريحة وبمواعيد مرنة تلائم نمط حياة الأسرة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-xl bg-brand-primary-light text-brand-primary flex-shrink-0 mt-0.5">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-heading">تواصل بشري مباشر مع منسقك الأكاديمي</h4>
                  <p className="text-[11px] sm:text-xs text-text-muted mt-0.5">
                    فريق دعم متواجد دائماً للإجابة على استفساراتك أو تعديل المعلم أو الجدول بمرونة كاملة.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft transition-all whitespace-nowrap"
              >
                <span>احجز الحصة الاستكشافية لابنك</span>
                <ArrowLeft size={15} className="text-brand-green" />
              </a>
            </div>
          </div>

          {/* Left Column: Interactive Parent Dashboard Mockup */}
          <div className="lg:col-span-6 mt-2 lg:mt-0">
            <div className="bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light shadow-card p-4 sm:p-7 relative">
              {/* Top Header of Parent Portal */}
              <div className="flex items-center justify-between pb-3 border-b border-border-light mb-4 sm:mb-5">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-brand-primary bg-brand-green-light border border-brand-green/20 px-2 py-0.5 rounded-md whitespace-nowrap">
                    لوحة متابعة ولي الأمر
                  </span>
                  <h3 className="text-xs sm:text-base font-bold text-text-heading font-heading mt-1">
                    متابعة الطالب: عمر السبيعي (الصف 11)
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-brand-primary bg-brand-green-light px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-xl whitespace-nowrap">
                  <TrendingUp size={14} className="text-brand-green" />
                  <span>تطور +28%</span>
                </div>
              </div>

              {/* Subject Mastery Progress Bars */}
              <div className="space-y-3 mb-4 sm:mb-5">
                <div>
                  <div className="flex justify-between text-[11px] sm:text-xs font-bold mb-1">
                    <span className="text-text-heading">الرياضيات المتقدمة (Math IGCSE)</span>
                    <span className="text-brand-green">94% (ممتاز)</span>
                  </div>
                  <div className="w-full h-2 bg-bg-surface-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-brand-green rounded-full" style={{ width: "94%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] sm:text-xs font-bold mb-1">
                    <span className="text-text-heading">الفيزياء التطبيقية (Physics)</span>
                    <span className="text-brand-primary">89% (جيد جداً مرتفع)</span>
                  </div>
                  <div className="w-full h-2 bg-bg-surface-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-brand-primary rounded-full" style={{ width: "89%" }} />
                  </div>
                </div>
              </div>

              {/* Latest Lesson Report Summary Card */}
              <div className="bg-bg-page rounded-xl sm:rounded-2xl p-3 sm:p-3.5 border border-border-light mb-3 sm:mb-4">
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-text-muted mb-2">
                  <span className="font-semibold text-text-heading flex items-center gap-1">
                    <FileText size={13} className="text-brand-green" />
                    تقرير آخر حصة (الفيزياء)
                  </span>
                  <span className="whitespace-nowrap">أمس 6:00 م</span>
                </div>
                <p className="text-[11px] sm:text-xs text-text-body leading-relaxed bg-bg-surface p-2.5 rounded-xl border border-border-light">
                  &ldquo;عمر أظهر استيعاباً ممتازاً للتطبيقات الحسابية اليوم، وتم حل 8 مسائل من امتحانات كامبريدج السابقة
                  بنجاح كامل.&rdquo;
                </p>
                <div className="mt-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5">
                  <span className="text-[10px] sm:text-[11px] text-text-muted">المعلم: د. عبد الرحمن الشهري</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-brand-green hover:underline transition-colors whitespace-nowrap"
                  >
                    <Play size={11} fill="currentColor" />
                    <span>مشاهدة تسجيل الحصة (58 دقيقة)</span>
                  </button>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="bg-brand-green-light border border-brand-green/20 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-brand-primary text-text-inverted flex-shrink-0">
                  <ShieldCheck size={15} className="text-brand-green" />
                </div>
                <div className="text-[11px] sm:text-xs text-text-heading leading-snug">
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
