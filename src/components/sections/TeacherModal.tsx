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
    yearsOfExperience: "5 - 10 سنوات",
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
      { value: "1 - 3 سنوات", label: "1 - 3 سنوات" },
      { value: "3 - 5 سنوات", label: "3 - 5 سنوات" },
      { value: "5 - 10 سنوات", label: "5 - 10 سنوات" },
      { value: "أكثر من 10 سنوات", label: "أكثر من 10 سنوات" },
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

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-text-heading/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light shadow-card w-full max-w-lg overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-brand-green-light/40 border-b border-border-light flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="p-1.5 sm:p-2 rounded-xl bg-brand-primary text-text-inverted flex-shrink-0">
              <GraduationCap size={18} className="text-brand-green" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-heading font-heading">
                طلب الانضمام كمعلم في سَعى
              </h3>
              <p className="text-[10px] sm:text-xs text-text-muted">درّس بأعلى المعايير وحقق دخلاً شهرياً مجزياً ومضموناً</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-text-muted hover:text-text-heading hover:bg-bg-surface transition-colors flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-6 sm:py-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-status-success/20 text-status-success rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-text-heading font-heading mb-1.5">
                تم استلام طلبك للانضمام بنجاح!
              </h4>
              <p className="text-xs sm:text-sm text-text-body mb-5 max-w-xs mx-auto leading-relaxed">
                يقوم الفريق الأكاديمي بمراجعة مؤهلاتك وتحديد موعد المقابلة التدريسية التجريبية والتواصل معك عبر الواتساب{" "}
                <strong className="text-brand-primary font-bold">{formData.phone || "المسجل"}</strong>.
              </p>
              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft"
              >
                <span>تم، حسناً</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1 text-right">الاسم الثلاثي أو اللقب</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: د. طارق عبد العزيز"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1 text-right">رقم الواتساب</label>
                  <input
                    type="tel"
                    required
                    placeholder="01xxxxxxxxx أو +971xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1 text-right">البريد الإلكتروني</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Subject & Curriculum using CustomSelect */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <CustomSelect
                  label="المادة الأساسية"
                  value={formData.subject}
                  onChange={(val) => setFormData({ ...formData, subject: val })}
                  options={subjectOptions}
                />

                <CustomSelect
                  label="المنهج الأكثر إتقاناً"
                  value={formData.curriculum}
                  onChange={(val) => setFormData({ ...formData, curriculum: val })}
                  options={curriculumOptions}
                />
              </div>

              {/* Experience using CustomSelect */}
              <CustomSelect
                label="سنوات الخبرة"
                value={formData.yearsOfExperience}
                onChange={(val) => setFormData({ ...formData, yearsOfExperience: val })}
                options={experienceOptions}
              />

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1 text-right">نبذة عن أسلوبك التدريسي</label>
                <textarea
                  rows={2}
                  placeholder="شاركنا بأهم إنجازاتك أو الشهادات التخصصية التي تحملها..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none resize-none"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted font-bold text-xs sm:text-sm rounded-xl shadow-soft transition-all flex items-center justify-center gap-2"
                >
                  <span>إرسال طلب الانضمام</span>
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
