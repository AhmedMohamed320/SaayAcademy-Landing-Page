"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Star,
  ShieldCheck,
  CalendarCheck,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  SlidersHorizontal,
  Clock,
  Award,
  CheckCircle2,
  BookOpen,
} from "@/components/icons/AnimatedIcons";
import { SAAY_COUNTRIES, SAAY_CURRICULA, SAAY_SUBJECTS, SAAY_TEACHERS } from "@/lib/constants";
import { Teacher } from "@/types";

interface AcademicSelectorProps {
  initialCountry?: string;
  initialCurriculum?: string;
  initialSubject?: string;
  onOpenConcierge: () => void;
  onSelectTeacherForBooking: (teacher: Teacher) => void;
}

export default function AcademicSelector({
  initialCountry,
  initialCurriculum,
  initialSubject,
  onOpenConcierge,
  onSelectTeacherForBooking,
}: AcademicSelectorProps) {
  const [activeCountry, setActiveCountry] = useState<string>(initialCountry || "all");
  const [activeCurriculum, setActiveCurriculum] = useState<string>(initialCurriculum || "all");
  const [activeSubject, setActiveSubject] = useState<string>(initialSubject || "all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter teachers dynamically
  const filteredTeachers = useMemo(() => {
    return SAAY_TEACHERS.filter((teacher) => {
      // Country match
      if (activeCountry !== "all" && !teacher.countries.includes(activeCountry)) {
        return false;
      }
      // Curriculum match
      if (activeCurriculum !== "all" && !teacher.curricula.includes(activeCurriculum)) {
        return false;
      }
      // Subject match
      if (activeSubject !== "all") {
        const subjectObj = SAAY_SUBJECTS.find((s) => s.id === activeSubject);
        if (subjectObj && !teacher.subjects.some((s) => s.includes(subjectObj.name) || subjectObj.name.includes(s))) {
          return false;
        }
      }
      // Search text query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = teacher.name.toLowerCase().includes(q);
        const matchesTitle = teacher.title.toLowerCase().includes(q);
        const matchesBio = teacher.bio.toLowerCase().includes(q);
        if (!matchesName && !matchesTitle && !matchesBio) return false;
      }
      return true;
    });
  }, [activeCountry, activeCurriculum, activeSubject, searchQuery]);

  return (
    <section id="academic-selector" className="py-10 sm:py-16 md:py-20 bg-bg-surface border-y border-border-light relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-[11px] sm:text-xs font-bold mb-2.5 sm:mb-3">
            <GraduationCap size={15} className="text-brand-green flex-shrink-0" />
            <span>نخبة المعلمين المعتمدين والمفحوصين</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading mb-2 sm:mb-3">
            اختر دولتك ومنهجك وتعرف على معلمك المثالي
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body">
            تم فحص واعتماد جميع المعلمين بدقة متناهية لضمان تفوق الطالب وتحقيق أعلى الدرجات في مختلف المناهج العربية والدولية.
          </p>
        </div>

        {/* Filter Controls Card */}
        <div className="bg-bg-page border border-border-light rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-soft mb-6 sm:mb-8">
          {/* Countries Selector Pills */}
          <div className="mb-4 sm:mb-5">
            <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-2">
              1. اختر الدولة:
            </label>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setActiveCountry("all")}
                className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCountry === "all"
                    ? "bg-brand-primary text-text-inverted shadow-soft border border-brand-primary"
                    : "bg-bg-surface text-text-body hover:bg-bg-surface-subtle border border-border-light"
                }`}
              >
                🌍 جميع الدول
              </button>
              {SAAY_COUNTRIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCountry(c.id)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    activeCountry === c.id
                      ? "bg-brand-primary text-text-inverted shadow-soft border border-brand-primary"
                      : "bg-bg-surface text-text-body hover:bg-bg-surface-subtle border border-border-light"
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
              <button
                type="button"
                onClick={onOpenConcierge}
                className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold text-brand-green hover:text-brand-primary border border-dashed border-brand-green bg-brand-green-light/40 transition-colors whitespace-nowrap"
              >
                <Sparkles size={12} />
                <span>دولة أخرى؟</span>
              </button>
            </div>
          </div>

          {/* Curriculum & Subject Grid Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3.5 border-t border-border-light">
            {/* Curriculum Dropdown */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">
                2. المنهج الدراسي:
              </label>
              <select
                value={activeCurriculum}
                onChange={(e) => setActiveCurriculum(e.target.value)}
                className="w-full bg-bg-surface border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-text-heading focus:outline-none transition-colors"
              >
                <option value="all">جميع المناهج المتاحة</option>
                {SAAY_CURRICULA.map((cur) => (
                  <option key={cur.id} value={cur.id}>
                    {cur.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">
                3. المادة الدراسية:
              </label>
              <select
                value={activeSubject}
                onChange={(e) => setActiveSubject(e.target.value)}
                className="w-full bg-bg-surface border border-border-medium focus:border-brand-green rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-text-heading focus:outline-none transition-colors"
              >
                <option value="all">جميع المواد والتخصصات</option>
                {SAAY_SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Keyword Search */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1">
                4. بحث سريع بالاسم أو التخصص:
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="مثال: رياضيات، قدرات، IGCSE..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-bg-surface border border-border-medium focus:border-brand-green rounded-xl pr-8 pl-3 py-2 text-xs sm:text-sm font-medium text-text-heading focus:outline-none transition-colors"
                />
                <Search size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted" />
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-bg-surface rounded-2xl sm:rounded-3xl border border-border-light hover:border-brand-green/50 p-4 sm:p-6 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Professional Monogram Avatar + Info + Rating */}
                  <div className="flex items-start justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-2.5">
                      {/* Monogram Badge */}
                      <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-brand-primary text-brand-green flex items-center justify-center font-heading font-bold text-xs sm:text-sm border border-brand-green/30 shadow-soft flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <span>{teacher.initials}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="text-sm sm:text-base font-bold text-text-heading font-heading">
                            {teacher.name}
                          </h3>
                          {teacher.verified && (
                            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold bg-brand-green-light text-brand-green-dark border border-brand-green/20 px-1.5 py-0.5 rounded-md whitespace-nowrap">
                              <ShieldCheck size={11} />
                              معتمد 100%
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] sm:text-xs text-text-muted mt-0.5 leading-snug">{teacher.title}</p>
                      </div>
                    </div>

                    {/* Rating Pill */}
                    <div className="flex flex-col items-end flex-shrink-0">
                      <div className="flex items-center gap-1 text-brand-gold bg-brand-gold-light px-2 py-0.5 rounded-xl font-bold text-[11px] sm:text-xs">
                        <Star size={12} fill="currentColor" />
                        <span>{teacher.rating}</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-text-muted mt-0.5">({teacher.reviewsCount} تقييم)</span>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {teacher.featuredBadge && (
                    <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-brand-primary bg-brand-primary-light px-2 py-0.5 rounded-lg mb-2 whitespace-nowrap">
                      <Award size={12} className="text-brand-green" />
                      <span>{teacher.featuredBadge}</span>
                    </div>
                  )}

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-text-body mb-3 line-clamp-2 leading-relaxed">
                    {teacher.bio}
                  </p>

                  {/* Subject Chips */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {teacher.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] font-medium bg-bg-surface-subtle text-text-body px-2 py-0.5 rounded-lg border border-border-light whitespace-nowrap"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer of Card: Availability + Price + CTA (Responsive for Mobile) */}
                <div className="pt-3 border-t border-border-light flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <div className="flex items-center sm:flex-col justify-between sm:items-start">
                    <span className="text-[10px] sm:text-[11px] text-text-muted flex items-center gap-1 whitespace-nowrap">
                      <Clock size={11} className="text-brand-green" />
                      أقرب موعد: <strong className="text-text-heading">{teacher.nextAvailable}</strong>
                    </span>
                    <span className="text-xs font-bold text-brand-primary mt-0.5">
                      {teacher.hourlyRate} {teacher.currency} <span className="text-[9px] sm:text-[10px] font-normal text-text-muted">/ للحصة الفردية</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTeacherForBooking(teacher)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all duration-200 whitespace-nowrap"
                  >
                    <span>احجز مع المعلم</span>
                    <ArrowLeft size={14} className="text-brand-green" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-bg-page border border-dashed border-border-medium rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
              <BookOpen size={28} className="text-brand-green mx-auto mb-2" />
              <h3 className="text-xs sm:text-base font-bold text-text-heading mb-1">
                لم نجد معلماً يطابق هذا الفلتر تحديداً
              </h3>
              <p className="text-[11px] sm:text-xs text-text-muted mb-3.5 max-w-md mx-auto">
                فريق المنسقين الأكاديميين في سَعى يوفر لك معلماً معتمداً ومناسباً لاحتياجك فوراً عبر خدمة الطلب المخصص.
              </p>
              <button
                type="button"
                onClick={onOpenConcierge}
                className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-3.5 py-2 rounded-xl font-bold text-xs shadow-soft transition-all whitespace-nowrap"
              >
                <Sparkles size={13} className="text-brand-gold" />
                <span>طلب معلم ومنهج مخصص فوراً</span>
              </button>
            </div>
          )}
        </div>

        {/* Academic Expansion / Concierge Notice Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-l from-brand-primary-light via-bg-surface to-brand-green-light border border-border-light p-4 sm:p-6 flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3.5 sm:gap-5 shadow-soft">
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5 text-right">
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-brand-primary text-text-inverted flex-shrink-0 shadow-soft">
              <Sparkles size={20} className="text-brand-gold" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold text-text-heading font-heading">
                هل تدرس في مدرسة خاصة أو تتبع منهجاً دراسياً غير مدرج؟
              </h3>
              <p className="text-[11px] sm:text-xs text-text-body mt-0.5">
                في سَعى، احتياجك الأكاديمي أولويتنا. فريق التنسيق جاهز لتأمين أفضل معلم مطابق لمنهجك ومدرستك خلال ساعات معدودة.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenConcierge}
            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft hover:shadow-hover transition-all whitespace-nowrap"
          >
            <span>طلب منسق أكاديمي مخصص</span>
            <ArrowLeft size={14} className="text-brand-green" />
          </button>
        </div>
      </div>
    </section>
  );
}
