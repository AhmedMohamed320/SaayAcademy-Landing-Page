"use client";

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";
import { X, GraduationCap, ShieldCheck, CheckCircle2, ArrowLeft } from "@/components/icons/AnimatedIcons";
import { SAAY_CURRICULA, SAAY_SUBJECTS } from "@/lib/constants";
import CustomSelect, { OptionItem } from "@/components/ui/CustomSelect";

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TeacherModal({ isOpen, onClose }: TeacherModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SAAY_SUBJECTS[0].name,
    curriculum: SAAY_CURRICULA[0].name,
    yearsOfExperience: "1 - 3 سنوات",
    bio: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const subjectOptions: OptionItem[] = useMemo(
    () => SAAY_SUBJECTS.map((s) => ({ value: s.name, label: s.name })),
    []
  );

  const curriculumOptions: OptionItem[] = useMemo(
    () => SAAY_CURRICULA.map((cur) => ({ value: cur.name, label: cur.name })),
    []
  );

  const experienceOptions: OptionItem[] = useMemo(
    () => [
      { value: "حديث تخرج / أقل من سنة", label: "حديث تخرج / أقل من سنة" },
      { value: "1 - 3 سنوات", label: "1 - 3 سنوات" },
      { value: "3 - 5 سنوات", label: "3 - 5 سنوات" },
      { value: "أكثر من 5 سنوات", label: "أكثر من 5 سنوات" },
    ],
    []
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
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
      <div className="relative w-full max-w-xl bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light shadow-card p-5 sm:p-7 max-h-[92vh] overflow-y-auto">
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
              تم استلام طلب التدريس بنجاح!
            </h3>
            <p className="text-xs sm:text-sm text-text-body max-w-sm mx-auto leading-relaxed">
              شكراً لاهتمامك بالانضمام لسَعى. سيتواصل معك الفريق الأكاديمي عبر واتساب لتحديد موعد اختبار التقييم التدريسي.
            </p>
            <button
              type="button"
              onClick={handleModalClose}
              className="w-full py-3 bg-brand-primary text-text-inverted rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:bg-brand-primary-hover transition-colors"
            >
              <span>العودة للرئيسية</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-light text-brand-primary text-[11px] font-bold mb-2">
                <GraduationCap size={14} className="text-brand-green" />
                <span>انضم لمعلمي سَعى (100 - 150 ج.م / ساعة)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-text-heading font-heading">
                طلب الانضمام كمعلم في سَعى
              </h3>
              <p className="text-xs text-text-muted mt-0.5">
                سجل بياناتك وسيتم التواصل معك لجدولة اختبار التقييم والاعتماد.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-text-heading mb-1.5">الاسم ثلاثي:</label>
                <input
                  type="text"
                  required
                  placeholder="أدخل اسمك كاملاً"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-border-medium bg-bg-page text-text-heading text-xs sm:text-sm focus:outline-none focus:border-brand-green"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-text-heading mb-1.5">رقم واتساب:</label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  placeholder="+20 1X XXXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-border-medium bg-bg-page text-text-heading text-xs sm:text-sm focus:outline-none focus:border-brand-green text-right"
                />
              </div>

              <div>
                <CustomSelect
                  label="المادة الأساسية التي تود تدريسها:"
                  value={formData.subject}
                  onChange={(val) => setFormData({ ...formData, subject: val })}
                  options={subjectOptions}
                />
              </div>

              <div>
                <CustomSelect
                  label="المنهج الذي تتقنه:"
                  value={formData.curriculum}
                  onChange={(val) => setFormData({ ...formData, curriculum: val })}
                  options={curriculumOptions}
                />
              </div>

              <div className="sm:col-span-2">
                <CustomSelect
                  label="سنوات الخبرة في التدريس:"
                  value={formData.yearsOfExperience}
                  onChange={(val) => setFormData({ ...formData, yearsOfExperience: val })}
                  options={experienceOptions}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-text-heading mb-1.5">نبذة عنك ومؤهلك الدراسي:</label>
                <textarea
                  rows={2}
                  placeholder="الكلية، التخصص، أو أي خبرة سابقة في الشرح والتدريس..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full p-3 rounded-xl border border-border-medium bg-bg-page text-text-heading text-xs sm:text-sm focus:outline-none focus:border-brand-green resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-brand-green hover:bg-brand-green-hover text-brand-primary rounded-xl font-black text-xs sm:text-sm shadow-glow transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>إرسال طلب الانضمام</span>
              <ArrowLeft size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
