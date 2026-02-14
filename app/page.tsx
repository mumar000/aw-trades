"use client";

import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import AbstractShapes from "@/components/ui/abstract-shapes";
import Community from "@/components/sections/community";
import Comparisons from "@/components/sections/comparisons";
import CTA from "@/components/sections/cta";
import Disclaimer from "@/components/sections/disclaimer";
import { useIntroAnimation } from "@/hooks/use-intro-animation";
import { useLenis } from "@/hooks/use-lenis";

export default function Home() {
  const { animationState } = useIntroAnimation();
  useLenis();

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Navbar isVisible={animationState.navbarVisible} />
      <main className="relative z-10">
        {/* Background glow container - fixed to Hero and Features only */}
        <div className="absolute inset-0 pointer-events-none z-40 h-[2000px] overflow-hidden">
          {/* Background glow image */}
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

        <Hero />
        <Features />
        {/* <AbstractShapes /> */}
        <Community />
        <Comparisons />
        <CTA />
        <Disclaimer />
        <Footer />
      </main>
    </div>
  );
}
