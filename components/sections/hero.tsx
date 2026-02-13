"use client";

import { useIntroAnimation } from "@/hooks/use-intro-animation";

interface HeroProps {
  onNavbarReady?: (visible: boolean) => void;
}

export default function Hero() {
  const { animationState } = useIntroAnimation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full scale-120 object-cover pointer-events-none z-0"
      >
        <source src="/fintech.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay - Animated */}
      <div
        className={`absolute inset-0 bg-black/92 pointer-events-none z-0 transition-opacity duration-1000 ease-out
          ${animationState.overlayVisible ? "opacity-100" : "opacity-0"}`}
      />

      {/* Bottom Fade Gradient - Blends into Features section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #050505 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Top Badge - Animated */}
        <a
          href="#payouts"
          className={`inline-flex items-center gap-2 px-6 py-1 mb-4 rounded-full text-lg
            text-white/90 border border-white
            transition-all duration-700 ease-out
            ${animationState.badgeVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"}`}
        >
          <span>180,000+ in Payouts Secured</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </a>

        {/* Main Headline - Animated */}
        <h1
          className={`text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-none mb-0
            transition-all duration-700 ease-out
            ${animationState.headlineVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"}`}
        >
          <span className="text-white">A Disciplined Approach</span>
          <br />
          <span className="text-white">To </span>
          <span className="text-primary">Futures Trading</span>
        </h1>

        {/* Subheadline - Animated */}
        <p
          className={`text-lg md:text-xl text-white max-w-2xl py-8 leading-relaxed
            transition-all duration-700 ease-out
            ${animationState.subheadlineVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"}`}
        >
          AW Trades is a futures trading brand built around structure, process,
          and repeatable execution.
        </p>

        {/* CTA Buttons - Animated */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4
            transition-all duration-700 ease-out
            ${animationState.buttonsVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"}`}
        >
          {/* Primary CTA */}
          <a
            href="#bloop-algo"
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-light
              bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50
              text-white
              shadow-[0_4px_20px_rgba(254,197,198,0.3)]
              border border-primary/40
              hover:shadow-[0_4px_30px_rgba(254,197,198,0.4)]
              transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
            <span className="relative z-10">Get Bloop Algo</span>
            <svg
              className="relative z-10 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href="#compare"
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-light
              text-white/90
              border border-white/20
              backdrop-blur-2xl
              bg-gradient-to-b from-white/10 via-white/5 to-white/[0.02]
              hover:from-white/15 hover:via-white/8 hover:to-white/[0.03]
              transition-all duration-300"
            style={{
              boxShadow: `
                0 8px 32px rgba(0,0,0,0.5),
                0 0 60px rgba(255,255,255,0.03),
                inset 0 1px 1px rgba(255,255,255,0.15),
                inset 0 -1px 1px rgba(0,0,0,0.2)
              `,
            }}
          >
            <span>Compare Prop Firms</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
