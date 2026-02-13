import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: FeatureCardProps) => {
  return (
    <div className="relative w-full max-w-[660px] h-[280px] rounded-[32px] p-[1.5px] overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-[#fec5c6]/60 via-[#fec5c6]/10 to-transparent z-0"></div>

      <div className="absolute inset-[-200%] z-0 animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#fec5c6_360deg)] opacity-100"></div>

      <div className="relative z-10 h-full w-full bg-[#0d0d0d] rounded-[31px] flex items-center overflow-hidden">
        <div
          className="absolute -bottom-20 -left-10 w-80 h-80 opacity-20 blur-[100px] pointer-events-none"
          style={{ backgroundColor: "#fec5c6" }}
        />

        <div className="relative w-1/2 h-full p-6 flex items-center justify-center">
          <div className="relative w-full h-[85%] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden bg-[#111111]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover grayscale"
              priority
            />
            {/* Primary color overlay */}
            <div
              className="absolute inset-0 mix-blend-overlay pointer-events-none"
              style={{ backgroundColor: "rgba(254, 197, 198, 0.3)" }}
            />
          </div>
        </div>

        {/* Right side: Typography */}
        <div className="w-1/2 p-8 pr-10 z-10">
          <h2 className="text-[32px] leading-[1.1] font-medium tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-zinc-100 text-[16px] ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
