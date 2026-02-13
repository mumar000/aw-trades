import React from "react";
import Image from "next/image";

const TradingCommunityCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] p-6 font-sans">
      <div className="relative w-full max-w-[900px] h-[400px] rounded-[48px] p-[1.5px] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fec5c6]/60 via-[#fec5c6]/10 to-transparent z-0"></div>

        <div className="absolute inset-[-200%] z-0 animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#fec5c6_360deg)] opacity-100"></div>

        <div className="relative z-10 h-full w-full bg-[#0d0d0d] rounded-[47px] flex items-center overflow-hidden">
          {/* Subtle Glow behind the image area */}
          <div
            className="absolute -bottom-20 -left-10 w-80 h-80 opacity-20 blur-[100px] pointer-events-none"
            style={{ backgroundColor: "#fec5c6" }}
          ></div>

          {/* LEFT SIDE: Image/Dashboard Section */}
          <div className="relative w-1/2 h-full p-8 flex items-center justify-center">
            <div className="relative w-full h-[80%] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden bg-[#111111]">
              <Image
                src="/feature-pic.png" // Ensure this is in your public folder
                alt="Trading Chart"
                fill
                className="object-cover opacity-60"
                priority
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0d0d] via-transparent to-transparent opacity-60"></div>

              {/* Floating Discord Badge Placeholder */}
            </div>
          </div>

          {/* RIGHT SIDE: Typography Section */}
          <div className="w-1/2 p-12 pr-16 z-10">
            <h1 className="text-[44px] leading-[1.1] font-semibold tracking-tight text-white mb-6">
              A focused
              <br />
              trading <br />
              <span style={{ color: "#fec5c6" }}>community</span>
            </h1>

            <p className="text-gray-400 text-[18px] leading-relaxed">
              The AW Trades Discord is a free, learning-first environment for
              futures and prop firm traders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCommunityCard;
