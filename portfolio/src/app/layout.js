import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Trần Quỳnh Anh — Business Analyst & Tester",
  description:
    "Portfolio of Trần Quỳnh Anh, Fresher Business Analyst cum QA: 1+ year of internships at 3 companies across banking (BIDV), Viettel, warehouse management and AI projects. BRD/SRS/FRD/RSD, change requests, test cases, API and SQL testing.",
  keywords: [
    "Trần Quỳnh Anh",
    "Business Analyst",
    "Tester",
    "QA",
    "Manual Testing",
    "BRD",
    "SRS",
    "API Testing",
    "SQL",
    "User Story",
    "Portfolio",
  ],
  authors: [{ name: "Trần Quỳnh Anh" }],
  openGraph: {
    title: "Trần Quỳnh Anh — Business Analyst & Tester",
    description:
      "Understand the right requirements, deliver the right product. BA & Tester portfolio of Trần Quỳnh Anh.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["vi_VN"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${jetbrainsMono.variable} selection:bg-accent selection:text-on-accent`}
      suppressHydrationWarning
    >
      {/* Browser extensions (e.g. Grammarly) inject attributes on <body> before hydration */}
      <body
        suppressHydrationWarning
        className="min-h-screen bg-page text-stone-900 antialiased relative overflow-x-hidden"
      >
        {/* beforeInteractive is hoisted into <head>: applies the saved theme before first paint */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{if(localStorage.getItem("theme")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`}
        </Script>
        {/* Ambient Glows and Background Grid */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Top Mint Radial Glow */}
          <div
            className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[500px] rounded-full blur-[140px] opacity-25"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 50%, transparent) 0%, color-mix(in srgb, var(--color-accent-deep) 15%, transparent) 50%, transparent 70%)",
            }}
          />
          {/* Subtle Accent Side Glow */}
          <div
            className="absolute top-[45%] -right-[15%] w-[450px] h-[450px] rounded-full blur-[150px] opacity-15"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 40%, transparent) 0%, color-mix(in srgb, var(--color-accent-tint) 20%, transparent) 60%, transparent 80%)",
            }}
          />
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
                                linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Lenis Smooth Scroll Provider */}
        <LanguageProvider>
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
        </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
