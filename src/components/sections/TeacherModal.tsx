"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, GraduationCap, ShieldCheck, CheckCircle2, ArrowLeft } from "@/components/icons/AnimatedIcons";
import { SAAY_CURRICULA, SAAY_SUBJECTS } from "@/lib/constants";

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TeacherModal({ isOpen, onClose }: TeacherModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "الرياضيات (Mathematics)",
    curriculum: "المنهج السعودي (الوزاري والأهلي)",
    yearsOfExperience: "5 سنوات فأكثر",
    bio: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

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
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">الاسم الثلاثي أو اللقب</label>
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
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">رقم الواتساب</label>
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
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">البريد الإلكتروني</label>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">المادة الأساسية</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                  >
                    {SAAY_SUBJECTS.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">المنهج الأكثر إتقاناً</label>
                  <select
                    value={formData.curriculum}
                    onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                    className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                  >
                    {SAAY_CURRICULA.map((cur) => (
                      <option key={cur.id} value={cur.name}>
                        {cur.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">سنوات الخبرة</label>
                <select
                  value={formData.yearsOfExperience}
                  onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                  className="w-full bg-bg-page border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm text-text-heading focus:outline-none"
                >
                  <option value="1 - 3 سنوات">1 - 3 سنوات</option>
                  <option value="3 - 5 سنوات">3 - 5 سنوات</option>
                  <option value="5 - 10 سنوات">5 - 10 سنوات</option>
                  <option value="أكثر من 10 سنوات">أكثر من 10 سنوات</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">نبذة عن أسلوبك التدريسي</label>
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
