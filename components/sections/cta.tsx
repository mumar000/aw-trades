"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTA() {
  const { isVisible, elementRef } = useScrollReveal({ threshold: 0.3 });

  return (
    <Section className="bg-[#050505] relative overflow-hidden py-24 md:py-32" id="cta">
      <Container>
        <div
          ref={elementRef}
          className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 blur-0 scale-100 translate-y-0"
              : "opacity-0 blur-md scale-95 translate-y-10"
          }`}
        >
          {/* HEADING: Matches the editorial style and specific word coloring */}
          <h2 className="text-[36px] md:text-[52px] lg:text-[46px] leading-[1.1] font-medium tracking-tight text-white text-center max-w-4xl mb-14">
            <span style={{ color: "#fec5c6" }}>Transparent comparisons.</span>{" "}
            Education first. Built for long-term trading.
          </h2>

          {/* THE METALLIC BUTTON: Custom styled to match the image exactly */}
          <button
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full
    bg-gradient-to-b from-primary/80 via-primary/10 to-primary/05
    text-white text-md font-medium
    border border-primary/40
    transition-all duration-300
    /* Added Hover Styling */
    hover:scale-[1.02]
    hover:border-primary/70
    hover:brightness-110
    hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]
    active:scale-95 cursor-pointer"
          >
            <span>View Comparisons</span>
            {/* Discord Icon */}
          </button>
        </div>
      </Container>

      {/* Subtle divider line for visual continuity */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </Section>
  );
}
