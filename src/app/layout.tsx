import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Rubik, Cairo } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const avenirArabic = localFont({
  src: [
    {
      path: "../../public/fonts/AvenirArabic-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1727",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://saay.academy"),
  title: "أكاديمية سَعى | Saay Academy - مجموعات دراسية تفاعلية لمناهج مصر والإمارات",
  description:
    "منصة سَعى الأكاديمية: مجموعات دراسية تفاعلية (8 حصص شهرياً للمادة) لمناهج مصر والإمارات مع معلمين مصريين مؤهلين ومختبرين، وحصص مسجلة بالكامل مع ضمان استرداد الرضا 100%.",
  keywords: [
    "أكاديمية سَعى",
    "Saay Academy",
    "مجموعات دراسية أونلاين",
    "دروس مصر",
    "دروس الإمارات",
    "منهج مصري ثانوية عامة",
    "منهج إماراتي EmSAT",
    "منهج بريطاني IGCSE",
    "منهج أمريكي SAT",
    "حصص تفاعلية 8 حصص شهريا",
  ],
  authors: [{ name: "أكاديمية سَعى" }],
  icons: {
    icon: "/brand/Saay_icon.png",
    apple: "/brand/Saay_icon.png",
  },
  openGraph: {
    title: "أكاديمية سَعى - مجموعات دراسية تفاعلية لمناهج مصر والإمارات",
    description:
      "احجز مادتك الدراسية (8 حصص شهرياً) مع معلمين مصريين مؤهلين ومختبرين لجميع المناهج والمراحل في مصر والإمارات.",
    url: "https://saay.academy",
    siteName: "أكاديمية سَعى",
    images: [
      {
        url: "/brand/saay-logo-arabic.png",
        width: 1200,
        height: 630,
        alt: "أكاديمية سَعى",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${avenirArabic.variable} ${rubik.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-page text-text-body font-body selection:bg-brand-green selection:text-text-inverted">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
