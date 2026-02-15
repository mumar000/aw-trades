"use client";

import { InfoIcon } from "lucide-react";
import React from "react";

interface HeroButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroBadge {
  text: string;
  href: string;
}

interface HeroProps {
  badge?: HeroBadge;
  headline: {
    line1: string;
    line2?: string;
    highlightedText?: string;
    endingLine?: string;
  };
  subheadline: string;
  buttons?: HeroButton[];
  videoSrc?: string;
  overlayOpacity?: number;
}

export default function Hero({
  badge,
  headline,
  subheadline,
  buttons = [],
  videoSrc = "/fintech.mp4",
  overlayOpacity = 92,
}: HeroProps) {
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
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Black Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})`,
        }}
      />

      {/* Bottom Fade Gradient - Blends into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #050505 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Top Badge (Optional) */}
        {badge && (
          <a
            href={badge.href}
            className="inline-flex items-center gap-2 px-6 py-1 mb-4 rounded-full text-lg
              text-white/90 border border-white"
          >
            <span>{badge.text}</span>
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
        )}

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-none mb-0">
          <span className="text-white">{headline.line1}</span>
          {headline.highlightedText && (
            <span className="text-primary">{headline.highlightedText}</span>
          )}
          {headline.line2 && (
            <>
              <br />
              <span className="text-white">{headline.line2} </span>
            </>
          )}
        </h1>

        {/* CTA Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-col py-8 sm:flex-row items-center gap-4">
            {buttons.map((button, index) => {
              const isPrimary = button.variant === "primary" || index === 0;
              return (
                <a
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center gap-3 px-6 py-3 rounded-full
                    text-white text-md font-medium
                    border border-primary/50
                    transition-all duration-300
                    ${
                      isPrimary
                        ? "bg-gradient-to-b from-primary/80 via-primary/15 to-primary/05 backdrop-blur-2xl"
                        : "bg-gradient-to-b from-primary/40 via-primary/10 to-primary/05"
                    }`}
                >
                  <span className={isPrimary ? "relative z-10" : ""}>
                    {button.text}
                  </span>
                  <svg
                    className={`w-4 h-4 ${isPrimary ? "relative z-10" : ""}`}
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
              );
            })}
          </div>
        )}
        {headline.endingLine && (
          <h1 className=" flex flex-row items-center gap-2 text-md text-zinc-300 py-6">
            {headline.endingLine}
            <InfoIcon size={15} />
          </h1>
        )}
      </div>
    </section>
  );
}
