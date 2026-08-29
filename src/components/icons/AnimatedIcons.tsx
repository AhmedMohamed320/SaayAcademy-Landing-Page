"use client";

import React, { useRef } from "react";
import {
  Sparkles,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  ShieldCheck,
  Video,
  Users,
  Globe,
  Award,
  Star,
  CheckCircle2,
  Search,
  ArrowLeft,
  Clock,
  MessageSquare,
  Zap,
  TrendingUp,
  Brain,
  SlidersHorizontal,
  ChevronDown,
  Check,
  Play,
  FileText,
  BadgePercent,
  HelpCircle,
  Menu,
  X,
  Phone,
  ArrowRight,
  Headphones,
  Laptop,
  CheckCheck,
  Lock,
  Gift,
  LucideProps,
} from "lucide-react";

// Interactive animated icon wrapper
export function AnimatedIcon({
  icon: IconComponent,
  size = 24,
  className = "",
}: {
  icon: React.ElementType<LucideProps>;
  size?: number;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${className}`}>
      <IconComponent size={size} />
    </div>
  );
}

export {
  Sparkles,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  ShieldCheck,
  Video,
  Users,
  Globe,
  Award,
  Star,
  CheckCircle2,
  Search,
  ArrowLeft,
  Clock,
  MessageSquare,
  Zap,
  TrendingUp,
  Brain,
  SlidersHorizontal,
  ChevronDown,
  Check,
  Play,
  FileText,
  BadgePercent,
  HelpCircle,
  Menu,
  X,
  Phone,
  ArrowRight,
  Headphones,
  Laptop,
  CheckCheck,
  Lock,
  Gift,
};
