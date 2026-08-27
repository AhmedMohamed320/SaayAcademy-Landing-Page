export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  curricula: string[];
}

export interface Curriculum {
  id: string;
  name: string;
  enName: string;
  description: string;
  grades: string[];
}

export interface Subject {
  id: string;
  name: string;
  enName: string;
  category: "math" | "science" | "languages" | "general" | "exam-prep";
  iconName: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  initials: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  completedSessions: number;
  hourlyRate: number;
  currency: string;
  subjects: string[];
  curricula: string[];
  countries: string[];
  bio: string;
  verified: boolean;
  featuredBadge?: string;
  nextAvailable: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  pricePerSession: number;
  totalPrice: number;
  currency: string;
  sessionsCount: number;
  discountPercentage?: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: "ولي أمر" | "طالب" | "طالبة";
  location: string;
  countryFlag: string;
  curriculum: string;
  grade: string;
  rating: number;
  content: string;
  subject: string;
  improvementText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "booking" | "teachers" | "parents" | "pricing" | "curriculum";
}
