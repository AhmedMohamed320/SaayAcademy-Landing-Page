"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Headphones, Phone } from "@/components/icons/AnimatedIcons";
import {
  SAAY_COUNTRIES,
  SAAY_CURRICULA,
  SAAY_CONTACT_PHONE,
  SAAY_WHATSAPP_URL,
  SAAY_CONTACT_EMAIL,
} from "@/lib/constants";

interface FooterProps {
  onOpenConcierge?: () => void;
  onOpenTeacherModal?: () => void;
}

export default function Footer({ onOpenConcierge, onOpenTeacherModal }: FooterProps) {
  return (
    <footer className="bg-bg-dark-section text-text-inverted border-t border-border-dark-glass pt-10 sm:pt-14 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 pb-8 border-b border-border-dark-glass">
          {/* Brand & Vision Column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/brand/saay-logo-arabic.png"
                alt="أكاديمية سَعى"
                width={120}
                height={38}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-text-inverted-muted leading-relaxed">
              أكاديمية سَعى هي المنصة التعليمية للمجموعات الدراسية لمناهج مصر والإمارات، تربط الطلاب بمعلمين مصريين مؤهلين ومختبرين بعناية، مع تسجيل كامل للحصص وتنسيق ومتابعة مستمرة.
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-xs text-brand-green font-semibold">
              <ShieldCheck size={15} />
              <span>منصة تعليمية موثوقة ومضمونة</span>
            </div>
          </div>

          {/* Supported Curricula Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold text-text-inverted font-heading mb-2.5 sm:mb-3">
              المناهج الدراسية المدعومة
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-text-inverted-muted">
              {SAAY_CURRICULA.map((c) => (
                <li key={c.id}>
                  <a href="#academic-selector" className="hover:text-brand-green transition-colors">
                    {c.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenConcierge}
                  className="text-brand-green hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <Sparkles size={12} />
                  <span>طلب منهج مخصص غير مدرج</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Supported Countries Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold text-text-inverted font-heading mb-2.5 sm:mb-3">
              التغطية الجغرافية
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2 text-xs text-text-inverted-muted">
              {SAAY_COUNTRIES.map((c) => (
                <li key={c.id} className="flex items-center gap-1.5 whitespace-nowrap">
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Teachers Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold text-text-inverted font-heading mb-2.5 sm:mb-3">
              روابط سريعة والدعم
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-text-inverted-muted mb-3 sm:mb-4">
              <li>
                <a href="#why-saay" className="hover:text-brand-green transition-colors">
                  عن سَعى (ركائز الجودة)
                </a>
              </li>
              <li>
                <a href="#parents" className="hover:text-brand-green transition-colors">
                  بوابة أولياء الأمور
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-brand-green transition-colors">
                  باقات الحصص والتسعير
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-green transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTeacherModal}
                  className="text-brand-green font-bold hover:underline"
                >
                  انضم كمعلم في سَعى
                </button>
              </li>
            </ul>

            <div className="bg-bg-dark-card p-3.5 rounded-2xl border border-border-dark-glass text-xs space-y-2">
              <span className="text-text-inverted-muted block text-[11px]">تواصل مع المنسق الأكاديمي:</span>
              <a
                href={SAAY_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brand-green font-mono font-bold text-xs sm:text-sm hover:underline"
                dir="ltr"
              >
                <Phone size={13} className="flex-shrink-0" />
                <span>{SAAY_CONTACT_PHONE}</span>
              </a>
              <div className="flex items-center gap-1.5 text-text-inverted-muted font-mono text-[11px]">
                <Headphones size={13} className="text-brand-green flex-shrink-0" />
                <span>{SAAY_CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Slogan */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs text-text-inverted-muted text-center sm:text-right">
          <div>
            &copy; {new Date().getFullYear()} أكاديمية سَعى (Saay Academy). جميع الحقوق محفوظة.
          </div>
          <div className="font-heading text-[11px] sm:text-xs text-brand-green">
            &ldquo;حجز الحصة التعليمية أسهل حاجة ممكنة.. وبأعلى دقة أكاديمية&rdquo;
          </div>
        </div>
      </div>
    </footer>
  );
}
