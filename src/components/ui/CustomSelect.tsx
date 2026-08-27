"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "@/components/icons/AnimatedIcons";

export interface OptionItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  options: OptionItem[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  label,
  placeholder = "اختر من القائمة...",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-[11px] sm:text-xs font-bold text-text-heading mb-1 text-right">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between gap-2 bg-bg-surface border rounded-xl px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-text-heading text-right transition-all duration-200 focus:outline-none ${
          isOpen
            ? "border-brand-green ring-2 ring-brand-green/20 shadow-soft bg-bg-surface"
            : "border-border-medium hover:border-brand-green/70 bg-bg-surface"
        }`}
      >
        <div className="flex items-center gap-2 truncate flex-1 min-w-0">
          {selectedOption?.icon && <span className="flex-shrink-0">{selectedOption.icon}</span>}
          <span className="truncate text-text-heading">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <div
          className={`p-0.5 text-text-muted transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180 text-brand-green" : ""
          }`}
        >
          <ChevronDown size={16} />
        </div>
      </button>

      {/* Dropdown Menu Popup */}
      {isOpen && (
        <div className="absolute top-full right-0 left-0 mt-1.5 bg-bg-surface border border-border-light rounded-2xl shadow-card p-1.5 z-50 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 duration-150 text-right">
          <div className="flex flex-col gap-0.5">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm text-right transition-colors duration-150 ${
                    isSelected
                      ? "bg-brand-green-light text-brand-primary font-bold border border-brand-green/30"
                      : "text-text-body hover:bg-bg-surface-subtle hover:text-brand-green"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate flex-1 min-w-0">
                    {option.icon && <span className="flex-shrink-0">{option.icon}</span>}
                    <span className="truncate">{option.label}</span>
                  </div>

                  {isSelected && (
                    <Check size={14} className="text-brand-green flex-shrink-0 stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
