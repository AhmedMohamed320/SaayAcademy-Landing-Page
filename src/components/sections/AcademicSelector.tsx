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
import CustomSelect, { OptionItem } from "@/components/ui/CustomSelect";

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

  // Options for custom selects
  const curriculumOptions: OptionItem[] = useMemo(
    () => [
      { value: "all", label: "جميع المناهج المتاحة" },
      ...SAAY_CURRICULA.map((cur) => ({ value: cur.id, label: cur.name })),
    ],
    []
  );

  const subjectOptions: OptionItem[] = useMemo(
    () => [
      { value: "all", label: "جميع المواد والتخصصات" },
      ...SAAY_SUBJECTS.map((s) => ({ value: s.id, label: s.name })),
    ],
    []
  );

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
            تم فحص واعتماد جميع المعلمين بدقة متناهية لضمان تفوق الطالب وتحقيق أعلى الدرجات في مختلف المناهج في مصر والإمارات.
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

          {/* Curriculum & Subject Grid Filters using CustomSelect */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3.5 border-t border-border-light items-end">
            {/* Custom Curriculum Dropdown */}
            <CustomSelect
              label="2. المنهج الدراسي:"
              value={activeCurriculum}
              onChange={setActiveCurriculum}
              options={curriculumOptions}
            />

            {/* Custom Subject Dropdown */}
            <CustomSelect
              label="3. المادة الدراسية:"
              value={activeSubject}
              onChange={setActiveSubject}
              options={subjectOptions}
            />

            {/* Keyword Search */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1 text-right">
                4. بحث سريع بالاسم أو التخصص:
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث باسم المعلم أو المادة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-bg-surface border border-border-medium focus:border-brand-green rounded-xl pr-9 pl-3 py-2 sm:py-2.5 text-xs sm:text-sm text-text-heading focus:outline-none transition-colors"
                />
                <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Active Filter Tags Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-border-light text-xs">
            <div className="flex items-center gap-1.5 text-text-muted">
              <SlidersHorizontal size={14} className="text-brand-green" />
              <span>
                عرض <strong>{filteredTeachers.length}</strong> معلم معتمد ومتاح حالياً
              </span>
            </div>

            {(activeCountry !== "all" || activeCurriculum !== "all" || activeSubject !== "all" || searchQuery !== "") && (
              <button
                type="button"
                onClick={() => {
                  setActiveCountry("all");
                  setActiveCurriculum("all");
                  setActiveSubject("all");
                  setSearchQuery("");
                }}
                className="text-brand-primary hover:text-brand-green font-bold text-[11px] sm:text-xs underline transition-colors"
              >
                إعادة ضبط جميع الفلاتر
              </button>
            )}
          </div>
        </div>

        {/* Teachers Cards List */}
        {filteredTeachers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-bg-page border border-border-light rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top: Monogram Avatar, Verification, and Next Available */}
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-3">
                      {/* Monogram Badging */}
                      <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-brand-primary text-brand-green flex items-center justify-center font-heading font-bold text-sm sm:text-base border border-brand-green/30 shadow-soft flex-shrink-0 group-hover:scale-105 transition-transform">
                        <span>{teacher.initials}</span>
                        {teacher.verified && (
                          <div className="absolute -bottom-1 -left-1 p-0.5 bg-brand-green text-brand-primary rounded-full shadow-soft" title="معلم معتمد ومفحوص">
                            <CheckCircle2 size={13} className="stroke-[3]" />
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="text-sm sm:text-base font-bold text-text-heading font-heading">
                            {teacher.name}
                          </h3>
                          <span className="text-[10px] sm:text-[11px] font-semibold text-brand-primary bg-brand-green-light px-2 py-0.5 rounded-md border border-brand-green/20">
                            خبرة {teacher.experienceYears} سنوات
                          </span>
                        </div>
                        <p className="text-xs text-text-muted mt-0.5 leading-snug">{teacher.title}</p>
                      </div>
                    </div>

                    {/* Rating Badge */}
                    <div className="flex items-center gap-1 bg-brand-gold-light text-brand-gold px-2 py-1 rounded-xl text-xs font-bold flex-shrink-0">
                      <Star size={13} fill="currentColor" />
                      <span>{teacher.rating}</span>
                      <span className="text-[10px] text-text-muted font-normal">({teacher.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {teacher.featuredBadge && (
                    <div className="inline-flex items-center gap-1 bg-brand-primary-light text-brand-primary px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold mb-3 border border-brand-primary/10">
                      <Award size={13} className="text-brand-gold" />
                      <span>{teacher.featuredBadge}</span>
                    </div>
                  )}

                  {/* Bio summary */}
                  <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-4 line-clamp-3">
                    {teacher.bio}
                  </p>

                  {/* Curricula & Subjects tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {teacher.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] bg-bg-surface border border-border-light text-text-heading px-2 py-0.5 rounded-lg"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Price, Next Available, and Booking CTA */}
                <div className="pt-3 border-t border-border-light flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <div className="flex items-center justify-between sm:justify-start gap-3">
                    <div>
                      <span className="text-[10px] sm:text-[11px] text-text-muted block">سعر الحصة الفردية (60 دقيقة):</span>
                      <div className="text-sm sm:text-base font-extrabold text-brand-green font-heading">
                        {teacher.hourlyRate} <span className="text-xs font-bold text-text-heading">{teacher.currency}</span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right border-r border-border-light pr-3">
                      <span className="text-[10px] sm:text-[11px] text-text-muted block">أقرب موعد متاح:</span>
                      <span className="text-xs font-semibold text-brand-primary flex items-center gap-1">
                        <Clock size={12} className="text-brand-green" />
                        {teacher.nextAvailable}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTeacherForBooking(teacher)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft transition-all duration-200 group-hover:bg-brand-green group-hover:text-brand-primary whitespace-nowrap"
                  >
                    <span>احجز مع المعلم</span>
                    <ArrowLeft size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-bg-page border border-border-light rounded-3xl p-8 text-center max-w-lg mx-auto">
            <div className="w-14 h-14 bg-brand-primary-light text-brand-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen size={28} />
            </div>
            <h4 className="text-base font-bold text-text-heading font-heading mb-1">
              لم نعثر على معلم يطابق الفلتر المحدد حالياً
            </h4>
            <p className="text-xs text-text-muted mb-4 leading-relaxed">
              فريق المنسقين الأكاديميين يمكنه ترشيح وتوفير معلم معتمد ومطابق لمنهجك ودولتك فوراً.
            </p>
            <button
              type="button"
              onClick={onOpenConcierge}
              className="inline-flex items-center gap-2 bg-brand-primary text-text-inverted px-5 py-2.5 rounded-xl text-xs font-bold shadow-soft hover:bg-brand-primary-hover transition-colors"
            >
              <Sparkles size={14} className="text-brand-green" />
              <span>طلب منسق أكاديمي خاص</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
