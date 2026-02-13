import React from "react";
import { LucideIcon } from "lucide-react"; // Optional: for the arrow icon

interface ShinyButtonProps {
  text: string;
  Icon?: React.ElementType;
  className?: string;
  onClick?: () => void;
}

const ShinyButton = ({
  text,
  Icon,
  className = "",
  onClick,
}: ShinyButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-center gap-3 px-10 py-4 rounded-full transition-all duration-300 active:scale-95 overflow-hidden ${className}`}
      style={{
        // The deep outer glow/shadow
        boxShadow:
          "0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(254, 197, 198, 0.05)",
      }}
    >
      {/* 1. Main Background Layer: The deep metallic red/pink gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b38385] via-[#7a595a] to-[#0a0a0a] z-0"></div>

      {/* 2. Top Glossy Highlight: Creates that "glass" effect at the top edge */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-80 z-10"></div>

      {/* 3. Radial Center Glow: Adds the soft light in the middle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(254,197,198,0.2)_0%,_transparent_70%)] z-10"></div>

      {/* 4. Thin Border Highlight */}
      <div className="absolute inset-0 rounded-full border border-white/10 z-20"></div>

      {/* Content */}
      <span className="relative z-30 text-white text-xl font-light tracking-wide">
        {text}
      </span>

      {Icon && (
        <Icon className="relative z-30 text-white w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </button>
  );
};

export default ShinyButton;
