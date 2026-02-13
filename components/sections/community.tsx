import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

export default function Community() {
  return (
    <Section className="bg-[#050505]" id="community">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Typography */}
          <div className="max-w-4xl">
            <h2 className="text-[42px] md:text-[42px] leading-[1.1] font-medium tracking-tight text-white mb-8">
              A focused trading <span className="text-primary">community</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-gray-300 text-lg leading-relaxed">
                The AW Trades Discord is a free, learning-first environment for
                futures and prop firm traders.
              </p>

              <p className="text-zinc-100 text-lg leading-relaxed">
                It&apos;s built around transparency, shared breakdowns, and
                process-driven discussion — not hype, signals spam, or ego.
              </p>
            </div>

            {/* Discord Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50
                text-white text-sm font-medium
                border border-primary/40
                shadow-[0_4px_20px_rgba(254,197,198,0.3)]
                hover:shadow-[0_4px_30px_rgba(254,197,198,0.4)]
                transition-all duration-300"
            >
              <span>Join Discord</span>
              {/* Discord Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[1000px] h-[700px]">
              {/* Grayscale image */}
              <Image
                src="/community.webp"
                alt="Trading Community Discord"
                fill
                className="object-contain object-right grayscale"
                priority
              />
              {/* Primary color overlay */}
              <div
                className="absolute inset-0 mix-blend-overlay pointer-events-none"
                style={{ backgroundColor: "rgba(254, 197, 198, 0.3)" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
