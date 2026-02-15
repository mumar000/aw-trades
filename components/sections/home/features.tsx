"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import PropFirmCard from "@/components/ui/prop-firm-card";
import FeatureCard from "@/components/ui/feature-card";

interface FeaturesProps {
  className?: string;
}

export default function Features({ className = "" }: FeaturesProps) {
  return (
    <Section className={`bg-[#050505] ${className}`} id="features">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[480px_600px] gap-8 items-center justify-center mx-auto">
          <div className="md:row-span-2 flex justify-center">
            <PropFirmCard direction="left" delay={0} />
          </div>

          <div className="flex flex-col gap-6 items-center">
            <FeatureCard
              title={
                <>
                  A focused trading{" "}
                  <span className="text-primary">community</span>
                </>
              }
              description="The AW Trades Discord is a free, learning-first environment for futures and prop firm traders."
              imageSrc="/trading-pic-1.webp"
              imageAlt="Trading Community"
              direction="right"
              delay={200}
            />

            <FeatureCard
              title={
                <>
                  <span className="text-primary">Bloop</span> indicator
                </>
              }
              description="Bloop is a futures trading indicator built to support structured decision-making rather than signal chasing."
              imageSrc="/trading-pic-2.webp"
              imageAlt="Bloop Indicator"
              direction="right"
              delay={400}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
