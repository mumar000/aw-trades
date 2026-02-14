"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { Twitter, MessageCircle, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isVisible, elementRef } = useScrollReveal({ threshold: 0.2 });

  return (
    <Section className="bg-[#050505] pt-0 pb-12">
      <Container className="container mx-auto">
        {/* Card-style footer */}
        <div
          ref={elementRef}
          className={`relative w-full rounded-[40px] p-[1px] overflow-hidden transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 blur-0 scale-100 translate-y-0"
              : "opacity-0 blur-md scale-95 translate-y-10"
          }`}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fec5c6]/40 via-white/5 to-transparent" />

          {/* Inner content */}
          <div className="relative z-10 w-full bg-[#0d0d0d]/95 backdrop-blur-sm rounded-[39px] p-8 md:p-12 lg:p-16">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fec5c6]/5 blur-[150px] pointer-events-none" />

            {/* Footer content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    AW <span className="text-primary">Trades</span>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                    Transparent comparisons. Education first. Built for
                    long-term trading success.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
                  >
                    <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
                  >
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
                  >
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-medium mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#community"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="#comparisons"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                    >
                      Comparisons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#disclaimer"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-medium mb-6">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                    >
                      Risk Disclosure
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-10">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Copyright */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} AW Trades. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Trading involves risk. Not financial advice.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
