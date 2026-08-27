"use client";

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";
import { X, ShieldCheck, CheckCircle2, ArrowLeft, Star, CalendarCheck, Lock } from "@/components/icons/AnimatedIcons";
import { Teacher, PricingPlan } from "@/types";
import CustomSelect, { OptionItem } from "@/components/ui/CustomSelect";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacher: Teacher | null;
  plan: PricingPlan | null;
}

export default function BookingModal({ isOpen, onClose, teacher, plan }: BookingModalProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    parentPhone: "",
    selectedDay: "اليوم",
    selectedTime: "6:00 م - 7:00 م",
    paymentMethod: "card",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const dayOptions: OptionItem[] = useMemo(
    () => [
      { value: "اليوم", label: "اليوم المتاح" },
      { value: "غداً", label: "غداً" },
      { value: "خلال الأسبوع", label: "خلال هذا الأسبوع" },
    ],
    []
  );

  const timeOptions: OptionItem[] = useMemo(
    () => [
      { value: "4:00 م - 5:00 م", label: "4:00 م - 5:00 م" },
      { value: "5:30 م - 6:30 م", label: "5:30 م - 6:30 م" },
      { value: "7:00 م - 8:00 م", label: "7:00 م - 8:00 م" },
      { value: "8:30 م - 9:30 م", label: "8:30 م - 9:30 م" },
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

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-text-heading/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light shadow-card w-full max-w-lg overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-brand-green-light/40 border-b border-border-light flex items-center justify-between gap-2">
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-heading font-heading">
              {plan ? `تأكيد حجز ${plan.name}` : `حجز حصة مع ${teacher?.name || "المعلم"}`}
            </h3>
            <p className="text-[11px] sm:text-xs text-text-muted">حصة فردية 1-on-1 مع ضمان استرداد الرضا 100%</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-text-muted hover:text-text-heading hover:bg-bg-surface transition-colors flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-6 sm:py-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-status-success/20 text-status-success rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-text-heading font-heading mb-1.5">
                تهانينا! تم تأكيد حجز الحصة بنجاح 🎉
              </h4>
              <p className="text-xs sm:text-sm text-text-body mb-5 max-w-xs mx-auto leading-relaxed">
                تم إرسال تفاصيل الموعد ورابط القاعة التفاعلية إلى رقم الواتساب{" "}
                <strong className="text-brand-primary font-bold">{formData.parentPhone || "المسجل"}</strong>.
              </p>
              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft"
              >
                <span>الانتقال للرئيسية</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-3.5 sm:space-y-4">
              {/* Selected Target Summary Card */}
              {teacher && (
                <div className="bg-bg-page border border-border-light rounded-xl sm:rounded-2xl p-3 flex items-center gap-3">
                  <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-brand-primary text-brand-green flex items-center justify-center font-heading font-bold text-xs border border-brand-green/30 shadow-soft flex-shrink-0">
                    <span>{teacher.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs sm:text-sm font-bold text-text-heading truncate">{teacher.name}</h5>
                    <p className="text-[10px] sm:text-xs text-text-muted truncate">{teacher.title}</p>
                    <span className="text-[11px] sm:text-xs font-bold text-brand-green mt-0.5 block">
                      {teacher.hourlyRate} {teacher.currency} / للحصة
                    </span>
                  </div>
                </div>
              )}

              {plan && (
                <div className="bg-bg-page border border-border-light rounded-xl sm:rounded-2xl p-3 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-text-heading">{plan.name}</h5>
                    <span className="text-[10px] sm:text-xs text-text-muted">{plan.sessionsCount} حصص فردية</span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-brand-green">
                    {plan.totalPrice} {plan.currency}
                  </span>
                </div>
              )}

              {/* Form Inputs */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1 text-right">اسم الطالب:</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: ريان محمد"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full bg-bg-surface border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1 text-right">
                  رقم الواتساب (لإرسال الموعد والتسجيل):
                </label>
                <input
                  type="tel"
                  required
                  placeholder="01xxxxxxxxx أو +971xxxxxxxx"
                  value={formData.parentPhone}
                  onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                  className="w-full bg-bg-surface border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                  dir="ltr"
                />
              </div>

              {/* Time Preference using CustomSelect */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <CustomSelect
                  label="اليوم المفضل:"
                  value={formData.selectedDay}
                  onChange={(val) => setFormData({ ...formData, selectedDay: val })}
                  options={dayOptions}
                />

                <CustomSelect
                  label="الفترة الزمنية:"
                  value={formData.selectedTime}
                  onChange={(val) => setFormData({ ...formData, selectedTime: val })}
                  options={timeOptions}
                />
              </div>

              {/* Security & Guarantee Note */}
              <div className="p-2.5 bg-brand-green-light border border-brand-green/20 rounded-xl flex items-center gap-2 text-[11px] sm:text-xs text-text-heading">
                <ShieldCheck size={16} className="text-brand-green flex-shrink-0" />
                <span>ضمان استرداد الرضا 100% للحصة الأولى.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted font-bold text-xs sm:text-sm rounded-xl shadow-soft transition-colors flex items-center justify-center gap-2"
              >
                <span>تأكيد الموعد واستلام رابط القاعة</span>
                <ArrowLeft size={14} className="text-brand-green" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
