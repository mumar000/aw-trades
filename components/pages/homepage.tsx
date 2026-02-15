import Hero from "@/sections/home/hero";
import Features from "@/components/sections/features";
import Community from "@/components/sections/community";
import Comparisons from "@/components/sections/comparisons";
import CTA from "@/components/sections/cta";
import Disclaimer from "@/components/sections/disclaimer";

export default function Homepage() {
  return (
    <>
      <Hero
        badge={{
          text: "180,000+ in Payouts Secured",
          href: "#payouts",
        }}
        headline={{
          line1: "A Disciplined Approach",
          line2: "To",
          highlightedText: "Futures Trading",
        }}
        subheadline="AW Trades is a futures trading brand built around structure, process, and repeatable execution."
        buttons={[
          {
            text: "Get Bloop Algo",
            href: "#bloop-algo",
            variant: "primary",
          },
          {
            text: "Compare Prop Firms",
            href: "#compare",
            variant: "secondary",
          },
        ]}
      />
      <Features />
      <Community />
      <Comparisons />
      <CTA />
      <Disclaimer />
    </>
  );
}
