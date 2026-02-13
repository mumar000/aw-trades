"use client";

import { useState } from "react";
import NavButton from "../ui/NavButton";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Prop Firm Comparisons", href: "/comparisons" },
  { label: "Education", href: "/education" },
  { label: "Submit Proof", href: "/submit-proof" },
];

interface NavbarProps {
  isVisible?: boolean;
}

export default function Navbar({ isVisible = true }: NavbarProps) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4"}`}
    >
      <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="text-3xl font-medium tracking-tight">
          <span className="bg-gradient-to-b from-primary to-primary/60 bg-clip-text text-transparent">
            AW
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          {NAV_ITEMS.map((item, index) => (
            <NavButton
              key={item.label}
              href={item.href}
              isActive={index === activeIndex}
            >
              {item.label}
            </NavButton>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#deals"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-light
            bg-gradient-to-b from-primary/80 via-primary/60 to-primary/40
            text-white border border-primary/30
            shadow-[0_4px_20px_rgba(254,197,198,0.25)]
            hover:shadow-[0_4px_25px_rgba(254,197,198,0.35)]
            transition-all duration-300"
        >
          <span>View deals below</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
}
