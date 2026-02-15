"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { useIntroAnimation } from "@/hooks/use-intro-animation";
import { useLenis } from "@/hooks/use-lenis";

const clashGrotesk = localFont({
  src: "../public/clash-grotest/Fonts/WEB/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "200 700",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { animationState } = useIntroAnimation();
  useLenis();

  return (
    <html lang="en">
      <body className={`${clashGrotesk.variable} font-sans antialiased`}>
        <div className="relative min-h-screen bg-background overflow-hidden">
          {/* Blur wrapper - includes navbar and all content */}
          <div
            className="transition-all duration-[2500ms] ease-out"
            style={{
              filter: `blur(${animationState.blurAmount}px)`,
            }}
          >
            {/* Navbar with fade */}
            <div
              className={`relative z-[60] transition-all duration-1000 ease-out ${
                animationState.navbarVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <Navbar />
            </div>

            <main className="relative z-10">
              {/* Background glow container */}
              <div className="absolute inset-0 pointer-events-none z-40 h-[2000px] overflow-hidden">
                <Image
                  src="/Glow.png"
                  alt=""
                  fill
                  className="object-center translate-x-35 pointer-events-none"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(ellipse 50% 90% at 100% 50%, rgba(254,197,198,0.12) 0%, transparent 50%),
                      radial-gradient(ellipse 40% 50% at 90% 50%, rgba(254,197,198,0.08) 0%, transparent 40%)
                    `,
                  }}
                />
              </div>

              {/* Content with fade */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  animationState.contentVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-98"
                }`}
              >
                {children}
                <Footer />
              </div>
            </main>
          </div>

          {/* Vignette effect during blur */}
          <div
            className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-2500 ${
              animationState.blurAmount > 0 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.8) 100%)",
            }}
          />
        </div>
      </body>
    </html>
  );
}
