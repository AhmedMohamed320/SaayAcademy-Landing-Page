"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, Sparkles, ShieldCheck, CheckCircle2, ArrowLeft } from "@/components/icons/AnimatedIcons";

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConciergeModal({ isOpen, onClose }: ConciergeModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "السعودية",
    curriculum: "",
    grade: "",
    subject: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-text-heading/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light shadow-card w-full max-w-lg overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-brand-green-light/40 border-b border-border-light flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="p-1.5 sm:p-2 rounded-xl bg-brand-primary text-text-inverted flex-shrink-0">
              <Sparkles size={16} className="text-brand-gold" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-heading font-heading">
                طلب منسق أكاديمي / منهج مخصص
              </h3>
              <p className="text-[10px] sm:text-xs text-text-muted">سنوفر لك المجموعة الدراسية والمعلم المؤهل لمنهجك ودولتك فوراً</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-text-muted hover:text-text-heading hover:bg-bg-surface transition-colors flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-6 sm:py-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-green-light text-brand-green rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-text-heading font-heading mb-1.5">
                تم استلام طلبك الأكاديمي بنجاح!
              </h4>
              <p className="text-xs sm:text-sm text-text-body mb-5 max-w-xs mx-auto leading-relaxed">
                يقوم فريق المنسقين الأكاديميين بمراجعة تفاصيل منهجك وسيتواصل معك عبر واتساب على الرقم{" "}
                <strong className="text-brand-primary font-bold">{formData.phone || "المسجل"}</strong> خلال أقل من ساعتين.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`https://wa.me/201097190466?text=${encodeURIComponent(
                    `السلام عليكم، قمت بتقديم طلب منسق أكاديمي في سَعى باسم (${formData.name}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-brand-primary px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft transition-colors text-center"
                >
                  <span>تواصل فوري عبر واتساب</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 bg-bg-page border border-border-medium hover:bg-bg-surface-subtle text-text-heading px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft transition-colors"
                >
                  <span>إغلاق</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">الاسم الكامل (ولي الأمر أو الطالب)</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: عبد الله السبيعي"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">رقم الواتساب للتواصل</label>
                  <input
                    type="tel"
                    required
                    placeholder="05xxxxxxxx أو +966xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">الدولة</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: مصر، الإمارات..."
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">المنهج أو اسم المدرسة</label>
                  <input
                    type="text"
                    required
                    placeholder="American / IGCSE / وزاري"
                    value={formData.curriculum}
                    onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                    className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">الصف والمادة</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: الصف 10 - فيزياء"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">ملاحظات (اختياري)</label>
                <textarea
                  rows={2}
                  placeholder="أي تفاصيل ترغب في إضافتها لاختيار المعلم الأنسب..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none resize-none"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted font-bold text-xs sm:text-sm rounded-xl shadow-soft transition-all flex items-center justify-center gap-2"
                >
                  <span>إرسال الطلب للمنسق الأكاديمي</span>
                  <ArrowLeft size={15} className="text-brand-green" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
