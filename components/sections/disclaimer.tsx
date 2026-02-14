"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Assuming these match your reference image text
const DISCLOSURE_ITEMS = [
  {
    title: "Risk Disclaimer",
    content:
      "Trading carries significant risk and is not suitable for everyone. You may lose part or all of your capital. Do not trade with money you cannot afford to lose. Always assess your financial situation, experience, and risk tolerance before trading.",
  },
  {
    title: "Not Financial Advice",
    content:
      "AW Trades is not a registered investment advisor, broker-dealer, or financial advisor. Nothing on this website is financial, investment, tax, or legal advice. All content is for educational and informational purposes only. Past performance does not guarantee future results.",
  },
  {
    title: "Affiliate Disclosure",
    content:
      "AW Trades may earn commissions from certain links or partner offers. We may receive different commission rates from different partners, which can influence how providers are featured. This does not increase the price you pay.",
  },
  {
    title: "No Warranties",
    content:
      'All information is provided "as is" without warranties of any kind. We do not guarantee accuracy, completeness, or timeliness. Third-party terms, pricing, and offers may change without notice.',
  },
];

export default function Disclaimer() {
  const { isVisible, elementRef } = useScrollReveal({ threshold: 0.2 });

  return (
    <Section id="disclaimer" className="bg-[#050505] pt-0 pb-32">
      <Container>
        {/* Main Card Wrapper with the thin glowing border */}
        <div
          ref={elementRef}
          className={`relative w-full rounded-[40px] p-[1px] overflow-hidden transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 blur-0 scale-100 translate-y-0"
              : "opacity-0 blur-md scale-95 translate-y-10"
          }`}
        >
          {/* ASYMMETRIC BORDER: High-end look with glow concentrated on the top-left */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fec5c6] via-white/5 to-transparent z-0" />

          {/* INNER CARD */}
          <div className="relative z-10 w-full bg-[#0d0d0d] rounded-[39px] p-4 md:p-14 lg:p-16">
            {/* BACKGROUND GLOW: Subtle radial light in the top left corner */}
            <div className="absolute bottom-0 -left-24 w-250 h-96 bg-[#fec5c6]/10 blur-[120px] pointer-events-none" />

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-12 relative z-10">
              <div className="p-2 border border-[#fec5c6]/20 rounded-xl bg-[#fec5c6]/5">
                <AlertTriangle className="w-8 h-8 md:w-9 md:h-9 text-[#fec5c6] stroke-[1.25]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                Website Disclaimer
              </h2>
            </div>

            {/* CONTENT LIST */}
            <div className="space-y-12 relative z-10">
              {DISCLOSURE_ITEMS.map((item, index) => (
                <div key={index} className="max-w-[1000px]">
                  <h3 className="text-2xl font-medium text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[14px] md:text-[16px]  font-normal">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
