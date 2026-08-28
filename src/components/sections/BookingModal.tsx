"use client";

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";
import { X, ShieldCheck, CheckCircle2, ArrowLeft, CalendarCheck, Lock, BookOpen } from "@/components/icons/AnimatedIcons";
import { SubjectGroup, PricingPlan } from "@/types";
import CustomSelect, { OptionItem } from "@/components/ui/CustomSelect";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  group: SubjectGroup | null;
  plan: PricingPlan | null;
}

export default function BookingModal({ isOpen, onClose, group, plan }: BookingModalProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    parentPhone: "",
    grade: "",
    selectedTime: "مسائي (6:00 م - 9:00 م)",
    paymentMethod: "card",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const timeOptions: OptionItem[] = useMemo(
    () => [
      { value: "مسائي (5:00 م - 7:00 م)", label: "الفترة المسائية الأولى (5:00 م - 7:00 م)" },
      { value: "مسائي (7:00 م - 9:00 م)", label: "الفترة المسائية الثانية (7:00 م - 9:00 م)" },
      { value: "مرن", label: "مواعيد مرنة يحددها المنسق" },
    ],
    []
  );

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-primary/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light shadow-card p-5 sm:p-7 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleModalClose}
          className="absolute top-4 left-4 p-2 rounded-xl text-text-muted hover:text-text-heading hover:bg-bg-surface-subtle transition-colors"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="h-16 w-16 bg-brand-green-light text-brand-green rounded-full flex items-center justify-center mx-auto shadow-soft">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-heading font-heading">
              تم استلام طلب حجزك بنجاح!
            </h3>
            <p className="text-xs sm:text-sm text-text-body max-w-sm mx-auto leading-relaxed">
              سيتواصل معك المنسق الأكاديمي لسَعى عبر واتساب على الرقم (<strong>{formData.parentPhone}</strong>) لتأكيد الموعد وإرسال رابط الحصة.
            </p>
            <div className="bg-bg-page border border-border-light rounded-xl p-3.5 text-xs text-text-muted text-right space-y-1">
              <div>• الطالب: <strong>{formData.studentName}</strong></div>
              {group && <div>• المادة: <strong>{group.subjectName} ({group.monthlyPrice} {group.currency})</strong></div>}
              {plan && <div>• الباقة: <strong>{plan.name} ({plan.totalPrice} {plan.currency})</strong></div>}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href={`https://wa.me/201097190466?text=${encodeURIComponent(
                  `السلام عليكم، قمت بحجز ${group ? group.subjectName : plan?.name || "مادة دراسية"} للطالب (${formData.studentName}). أود تأكيد الموعد.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-brand-green hover:bg-brand-green-hover text-brand-primary rounded-xl font-bold text-xs sm:text-sm shadow-soft transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>تواصل فوري عبر واتساب (+20 10 97190466)</span>
              </a>
              <button
                type="button"
                onClick={handleModalClose}
                className="w-full sm:w-auto px-5 py-3 bg-bg-page border border-border-medium hover:bg-bg-surface-subtle text-text-heading rounded-xl font-bold text-xs sm:text-sm transition-colors"
              >
                <span>إغلاق</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4 text-right">
            {/* Modal Header */}
            <div className="mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-light text-brand-primary text-[11px] font-bold mb-2">
                <ShieldCheck size={14} className="text-brand-green" />
                <span>حجز مباشر مع ضمان استرداد الرضا 100%</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-text-heading font-heading">
                {group ? `حجز مجموعة: ${group.subjectName}` : plan ? `حجز: ${plan.name}` : "حجز الحصة الدراسية"}
              </h3>
            </div>

            {/* Selected Target Summary Card */}
            {group && (
              <div className="bg-bg-page border border-border-light rounded-2xl p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-primary text-brand-green flex items-center justify-center flex-shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-text-heading">{group.subjectName}</h5>
                    <p className="text-[11px] text-text-muted">{group.curriculumName} • 8 حصص شهرياً</p>
                  </div>
                </div>
                <div className="text-left flex-shrink-0">
                  <span className="text-xs sm:text-sm font-black text-brand-green block">
                    {group.monthlyPrice} {group.currency}
                  </span>
                  <span className="text-[10px] text-text-muted">شهرياً للمادة</span>
                </div>
              </div>
            )}

            {plan && (
              <div className="bg-bg-page border border-border-light rounded-2xl p-3.5 flex items-center justify-between">
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-text-heading">{plan.name}</h5>
                  <span className="text-[11px] text-text-muted">{plan.sessionsCount} حصص دراسية</span>
                </div>
                <span className="text-sm sm:text-base font-black text-brand-green">
                  {plan.totalPrice} {plan.currency}
                </span>
              </div>
            )}

            {/* Form Inputs */}
            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5">اسم الطالب:</label>
              <input
                type="text"
                required
                placeholder="أدخل اسم الطالب ثلاثي"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-border-medium bg-bg-page text-text-heading text-xs sm:text-sm focus:outline-none focus:border-brand-green"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5">رقم واتساب ولي الأمر للتواصل والتنسيق:</label>
              <input
                type="tel"
                required
                dir="ltr"
                placeholder="+20 1X XXXX XXXX / +971 5X XXX XXXX"
                value={formData.parentPhone}
                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-border-medium bg-bg-page text-text-heading text-xs sm:text-sm focus:outline-none focus:border-brand-green text-right"
              />
            </div>

            <div>
              <CustomSelect
                label="الفترة المفضلة للحصص:"
                value={formData.selectedTime}
                onChange={(val) => setFormData({ ...formData, selectedTime: val })}
                options={timeOptions}
              />
            </div>

            {/* Guarantees note */}
            <div className="bg-brand-green-light/40 border border-brand-green/20 rounded-xl p-3 flex items-center gap-2 text-xs text-text-heading">
              <Lock size={15} className="text-brand-green flex-shrink-0" />
              <span>مستحقاتك ورسومك مضمونة بالكامل مع استرداد 100% إن لم تناسبك الحصة الأولى.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-brand-green hover:bg-brand-green-hover text-brand-primary rounded-xl font-black text-xs sm:text-sm shadow-glow transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>تأكيد الحجز ومتابعة المنسق</span>
              <ArrowLeft size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
