import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Rubik, Cairo } from "next/font/google";
import "./globals.css";

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
  title: "أكاديمية سَعى | Saay Academy - تعليم خصوصي فردي بمعايير استثنائية",
  description:
    "منصة سَعى الأكاديمية: ربط فوري بين الطالب ونخبة المعلمين المعتمدين في السعودية، الإمارات، قطر، وكافة الدول العربية لمختلف المناهج (الوزاري، الأمريكي، البريطاني، وIB). حصص فردية تفاعلية ومسجلة مع متابعة دقيقة لأولياء الأمور.",
  keywords: [
    "أكاديمية سَعى",
    "Saay Academy",
    "دروس خصوصية أونلاين",
    "معلم خصوصي السعودية",
    "معلم خصوصي الإمارات",
    "معلم خصوصي قطر",
    "منهج وزاري",
    "منهج بريطاني IGCSE",
    "منهج أمريكي SAT",
    "دروس تفاعلية 1-on-1",
  ],
  authors: [{ name: "أكاديمية سَعى" }],
  icons: {
    icon: "/brand/Saay_icon.png",
    apple: "/brand/Saay_icon.png",
  },
  openGraph: {
    title: "أكاديمية سَعى - المنصة التعليمية الذكية للدروس الخصوصية الفردية",
    description:
      "احجز حصتك التفاعلية مع نخبة المعلمين المفحوصين والمعتمدين لجميع المناهج والمراحل الدراسية في السعودية والخليج ومصر.",
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
    locale: "ar_SA",
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
        {children}
      </body>
    </html>
  );
}
