"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  ShieldCheck,
  CalendarCheck,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  Clock,
  CheckCircle2,
  BookOpen,
  Video,
  FileText,
} from "@/components/icons/AnimatedIcons";
import { SAAY_COUNTRIES, SAAY_CURRICULA, SAAY_SUBJECTS, SAAY_SUBJECT_GROUPS } from "@/lib/constants";
import { SubjectGroup } from "@/types";
import CustomSelect, { OptionItem } from "@/components/ui/CustomSelect";

interface AcademicSelectorProps {
  initialCountry?: string;
  initialCurriculum?: string;
  initialSubject?: string;
  onOpenConcierge: () => void;
  onSelectGroupForBooking: (group: SubjectGroup) => void;
}

export default function AcademicSelector({
  initialCountry,
  initialCurriculum,
  initialSubject,
  onOpenConcierge,
  onSelectGroupForBooking,
}: AcademicSelectorProps) {
  const [activeCountry, setActiveCountry] = useState<string>(initialCountry || "egypt");
  const [activeCurriculum, setActiveCurriculum] = useState<string>(initialCurriculum || "all");
  const [activeSubject, setActiveSubject] = useState<string>(initialSubject || "all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const curriculumOptions: OptionItem[] = useMemo(
    () => [
      { value: "all", label: "جميع المناهج المتاحة" },
      ...SAAY_CURRICULA.map((cur) => ({ value: cur.id, label: cur.name })),
    ],
    []
  );

  const subjectOptions: OptionItem[] = useMemo(
    () => [
      { value: "all", label: "جميع المواد الدراسية" },
      ...SAAY_SUBJECTS.map((s) => ({ value: s.id, label: s.name })),
    ],
    []
  );

  // Filter subject groups dynamically
  const filteredGroups = useMemo(() => {
    return SAAY_SUBJECT_GROUPS.filter((group) => {
      // Country match
      if (activeCountry !== "all" && group.countryId !== activeCountry) {
        return false;
      }
      // Curriculum match
      if (activeCurriculum !== "all" && group.curriculumId !== activeCurriculum) {
        return false;
      }
      // Subject match
      if (activeSubject !== "all") {
        const subjectObj = SAAY_SUBJECTS.find((s) => s.id === activeSubject);
        if (subjectObj && !group.subjectName.includes(subjectObj.name) && !subjectObj.name.includes(group.subjectName)) {
          return false;
        }
      }
      // Search text query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = group.subjectName.toLowerCase().includes(q);
        const matchesCurriculum = group.curriculumName.toLowerCase().includes(q);
        const matchesGrade = group.grade.toLowerCase().includes(q);
        if (!matchesName && !matchesCurriculum && !matchesGrade) return false;
      }
      return true;
    });
  }, [activeCountry, activeCurriculum, activeSubject, searchQuery]);

  return (
    <section id="academic-selector" className="py-12 sm:py-16 md:py-20 bg-bg-surface border-y border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with generous line-height */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-primary text-xs sm:text-sm font-bold mb-3">
            <BookOpen size={15} className="text-brand-green flex-shrink-0" />
            <span>المجموعات الدراسية لمناهج مصر والإمارات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-heading leading-[1.45] mb-3">
            اختر مادتك ومنهجك وانضم لمجموعتك الدراسية
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-body leading-[1.75]">
            تحدد سَعى معلمين مصريين مؤهلين ومختبرين بعناية لتدريس كل مجموعة دراسية (8 حصص شهرياً للمادة) مع تسجيل كامل للحصص وإشراف أكاديمي مستمر.
          </p>
        </div>

        {/* Filter Controls Card */}
        <div className="bg-bg-page border border-border-light rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-soft mb-8">
          {/* Countries Selector Pills */}
          <div className="mb-4 sm:mb-5">
            <label className="block text-xs font-bold text-text-heading mb-2">
              1. حدد الدولة:
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveCountry("egypt")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  activeCountry === "egypt"
                    ? "bg-brand-primary text-text-inverted shadow-soft border border-brand-primary"
                    : "bg-bg-surface text-text-body hover:bg-bg-surface-subtle border border-border-light"
                }`}
              >
                <span>🇪🇬</span>
                <span>مصر (250 ج.م شهرياً للمادة)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCountry("uae")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  activeCountry === "uae"
                    ? "bg-brand-primary text-text-inverted shadow-soft border border-brand-primary"
                    : "bg-bg-surface text-text-body hover:bg-bg-surface-subtle border border-border-light"
                }`}
              >
                <span>🇦🇪</span>
                <span>الإمارات (30 - 50 درهم للحصة)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCountry("all")}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCountry === "all"
                    ? "bg-brand-primary text-text-inverted shadow-soft border border-brand-primary"
                    : "bg-bg-surface text-text-body hover:bg-bg-surface-subtle border border-border-light"
                }`}
              >
                🌍 عرض الكل
              </button>
            </div>
          </div>

          {/* Secondary Dropdown Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-3 border-t border-border-light">
            <CustomSelect
              label="2. المنهج الدراسي:"
              value={activeCurriculum}
              onChange={setActiveCurriculum}
              options={curriculumOptions}
            />

            <CustomSelect
              label="3. المادة المطلوبة:"
              value={activeSubject}
              onChange={setActiveSubject}
              options={subjectOptions}
            />

            {/* Live Search Input */}
            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5">
                بحث بالاسم أو الصف:
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن مادة أو صف دراسي..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pr-10 pl-3 rounded-xl border border-border-medium bg-bg-surface text-text-heading text-xs sm:text-sm focus:outline-none focus:border-brand-green transition-colors"
                />
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted" />
              </div>
            </div>
          </div>
        </div>

        {/* Subject Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <div
                key={group.id}
                className="bg-bg-page rounded-2xl border border-border-light shadow-soft hover:shadow-hover transition-all duration-300 p-5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Subject */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-brand-primary bg-brand-green-light px-2.5 py-1 rounded-lg border border-brand-green/20 whitespace-nowrap">
                      {group.countryId === "egypt" ? "🇪🇬 مصر" : "🇦🇪 الإمارات"}
                    </span>
                    <span className="text-[11px] text-text-muted bg-bg-surface px-2 py-0.5 rounded-md border border-border-light">
                      {group.grade}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-text-heading font-heading mb-1 leading-[1.4]">
                    {group.subjectName}
                  </h3>

                  <p className="text-xs text-text-muted mb-4 leading-relaxed">
                    {group.curriculumName}
                  </p>

                  {/* Schedule info */}
                  <div className="bg-bg-surface p-3 rounded-xl border border-border-light mb-4 space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 text-text-heading font-semibold">
                      <Clock size={14} className="text-brand-green flex-shrink-0" />
                      <span>{group.schedule}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <CalendarCheck size={14} className="text-brand-primary flex-shrink-0" />
                      <span>{group.sessionsPerMonth} حصص شهرياً (حصتان أسبوعياً)</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-5 text-xs text-text-body">
                    {group.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="pt-4 border-t border-border-light flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-text-muted block">سعر الاشتراك الشهري:</span>
                    <div className="text-base sm:text-lg font-black text-brand-green font-heading">
                      {group.monthlyPrice} <span className="text-xs font-bold text-text-heading">{group.currency}</span>
                      <span className="text-[10px] text-text-muted font-normal block">
                        (8 حصص تفاعلية)
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectGroupForBooking(group)}
                    className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-text-inverted px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-soft transition-all duration-200 group-hover:bg-brand-green group-hover:text-brand-primary whitespace-nowrap"
                  >
                    <span>انضم للمجموعة</span>
                    <ArrowLeft size={14} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-bg-page rounded-2xl border border-dashed border-border-medium p-8 text-center">
              <BookOpen size={32} className="mx-auto text-brand-green mb-2 opacity-60" />
              <h4 className="text-base font-bold text-text-heading mb-1">لم نجد مجموعات مطابقة لبحثك</h4>
              <p className="text-xs text-text-muted mb-4">
                تواصل مع المنسق الأكاديمي وسنقوم بفتح وتنسيق المجموعة التي تناسبك فوراً.
              </p>
              <button
                type="button"
                onClick={onOpenConcierge}
                className="inline-flex items-center gap-2 bg-brand-primary text-text-inverted px-5 py-2.5 rounded-xl text-xs font-bold shadow-soft"
              >
                <span>تحدث مع المنسق لفتح مجموعة</span>
                <ArrowLeft size={14} className="text-brand-green" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
