"use client";

import Hero from "@/components/sections/prop-firm/hero";

export default function PropFirmPage() {
  return (
    <>
      <Hero
        badge={{
          text: "Clean summaries up front. Deeper rules behind expand.",
          href: "#rules",
        }}
        headline={{
          line1: "Prop firm ",
          line2: "built for clarity",
          highlightedText: "comparisions",
          endingLine:
            "No checkout on this site. All deal buttons open the firm site.",
        }}
        subheadline="No checkout on this site. All deal buttons open the firm site."
        buttons={[
          {
            text: "View deals below",
            href: "#deals",
            variant: "primary",
          },
          {
            text: "Submit proof",
            href: "#submit",
            variant: "secondary",
          },
        ]}
      />
    </>
  );
}
