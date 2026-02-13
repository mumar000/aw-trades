import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import PropFirmCard from "@/components/ui/prop-firm-card";
import TradingCommunityCard from "@/components/ui/trading-community-card";

interface FeaturesProps {
  className?: string;
}

export default function Features({ className = "" }: FeaturesProps) {
  return (
    <Section className={`bg-[#050505] ${className}`} id="features">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="md:row-span-2">
            <PropFirmCard />
          </div>

          {/* Top Right - Trading Community */}
          <div>
            <TradingCommunityCard />
          </div>

          {/* Bottom Right - Bloop Indicator */}
          <div className="min-h-[280px] md:min-h-[240px] rounded-3xl bg-[#0d0d0d] border border-white/10">
            {/* Placeholder for bloop card */}
          </div>
        </div>
      </Container>
    </Section>
  );
}
