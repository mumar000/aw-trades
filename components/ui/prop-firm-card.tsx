import React from "react";
import Image from "next/image";

const PropFirmCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] p-6 font-sans">
      {/* OUTER CONTAINER: Handles the clipping of the animation */}
      <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[48px] p-[1.5px] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fec5c6]/70 via-[#fec5c6]/40 to-transparent z-0"></div>

        <div className="absolute inset-[-100%] z-0 animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#fec5c6_360deg)] opacity-100"></div>

        <div className="relative z-10 h-full w-full bg-[#0d0d0d] rounded-[47px] p-10 flex flex-col overflow-hidden">
          {/* Subtle Bottom Glow */}
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 opacity-20 blur-[100px] pointer-events-none"
            style={{ backgroundColor: "#fec5c6" }}
          ></div>

          {/* Typography Section */}
          <div className="z-10 mt-4">
            <h1 className="text-[40px] leading-[1.05] font-medium tracking-tight text-white mb-6">
              <span style={{ color: "#fec5c6" }}>Prop firm</span>
              <br />
              <span style={{ color: "#fec5c6" }}>comparisons</span> built
              <br />
              for clarity
            </h1>

            <p className="text-gray-400 text-[17px] leading-relaxed max-w-[340px]">
              Prop firm rules and deals change constantly, and most sites either
              oversimplify or overwhelm.
            </p>
          </div>

          {/* Dashboard Placeholder Section */}
          <div className="relative mt-auto w-full aspect-[1.1/1] bg-[#111111]  overflow-hidden translate-y-12 translate-x-10">
            {/* The Image from public/feature-pic.png */}
            <Image
              src="/propfirm.webp"
              alt="Dashboard UI"
              fill
              className="object-cover object-left"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropFirmCard;
