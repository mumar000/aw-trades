"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export default function NavButton({
  children,
  isActive = false,
  href = "#",
}: NavButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative flex items-center justify-center min-w-[120px] px-6 py-2.5  text-white text-md cursor-pointer transition-all rounded-full duration-500 ease-out",
        "backdrop-blur-lg  ", // The "Perfect Glass" secret
        "",
        isActive
          ? "bg-gradient-to-b from-primary/80 via-primary/10 to-primary/05  border border-primary/40 hover:scale-[1.02] hover:border-primary/70 hover:brightness-110 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] active:scale-95 "
          : "hover:bg-gradient-to-b hover:from-primary/80 hover:via-primary/10 hover:to-primary/05  border border-primary/40 hover:scale-[1.02] hover:border-primary/70 hover:brightness-110 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] active:scale-95",
      )}
      style={{
        boxShadow: isActive
          ? "inset 0 1px 1px 0 rgba(255,255,255,0.4), 0 10px 20px -5px rgba(0,0,0,0.3)"
          : "inset 0 1px 0.5px 0 rgba(255,255,255,0.2), 0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      {/* --- Refractive Edge (The "Perfect" shine) --- */}
      <span
        className={cn(
          "absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
      />

      {/* --- Background Inner Glow --- */}
      <span
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-b from-white to-transparent pointer-events-none",
          isActive ? "opacity-10" : "opacity-0",
        )}
      />

      <span className="relative z-10 text-sm tracking-tight font-medium">
        {children}
      </span>
    </a>
  );
}
