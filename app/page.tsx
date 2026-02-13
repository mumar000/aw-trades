"use client";

import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import { useIntroAnimation } from "@/hooks/use-intro-animation";

export default function Home() {
  const { animationState } = useIntroAnimation();

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background glow image */}
      <Image
        src="/Glow.png"
        alt=""
        fill
        className="object-center translate-x-35 pointer-events-none z-50"
        priority
      />
      <div
        className="absolute inset-0 pointer-events-none z-50"
        style={{
          background: `
            radial-gradient(ellipse 50% 100% at 100% 50%, rgba(254,197,198,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 40% 250% at 90% 50%, rgba(254,197,198,0.08) 0%, transparent 40%)
          `,
        }}
      />

      <Navbar isVisible={animationState.navbarVisible} />
      <main className="relative z-10">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
