"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavButton from "@/components/ui/nav-button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Prop Firm Comparisons", href: "/comparisons" },
  { label: "Education", href: "/education" },
  { label: "Submit Proof", href: "/submit-proof" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
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
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                bg-gradient-to-b from-primary/60 via-primary/10 to-primary/05
                text-white text-md font-medium
                border border-primary/50 backdrop-blur-2xl
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
