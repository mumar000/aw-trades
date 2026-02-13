import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import {
  PROP_FIRMS,
  PROP_FIRM_TABLE_HEADERS,
  COMPARISONS_CONTENT,
} from "@/lib/constants";

interface ComparisonsProps {
  className?: string;
}

function FirmTable() {
  return (
    <div className="relative w-full max-w-[580px] rounded-[32px] p-[1.5px] overflow-hidden">
      {/* Border gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent z-0" />

      {/* Inner card */}
      <div className="relative z-10 h-full w-full bg-[#0d0d0d] rounded-[31px] p-8 overflow-hidden">
        {/* Title */}
        <h3 className="text-white text-xl font-medium mb-6">Find Your Firm</h3>

        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 pb-4 border-b border-white/10">
          {PROP_FIRM_TABLE_HEADERS.map((header) => (
            <span key={header} className="text-gray-400 text-sm font-medium">
              {header}
            </span>
          ))}
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-white/5">
          {PROP_FIRMS.map((firm) => (
            <div
              key={firm.id}
              className="grid grid-cols-4 gap-4 py-5 items-center"
            >
              {/* Firm Logo & Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                  <Image
                    src={firm.logo}
                    alt={`${firm.name} logo`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-sm font-medium">
                  {firm.name}
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-1">
                {firm.details.accounts.map((account, idx) => (
                  <span
                    key={idx}
                    className="text-gray-400 text-xs leading-tight"
                  >
                    {account}
                  </span>
                ))}
              </div>

              {/* Drawdown */}
              <div>
                <span className="inline-block px-3 py-1.5 rounded-full bg-[#1a1a1a] text-white/70 text-xs border border-white/10">
                  {firm.drawdown}
                </span>
              </div>

              {/* Payout Split */}
              <div className="flex flex-col gap-1 text-gray-500 text-xs">
                <span>{firm.payoutSplit.initial}</span>
                <span>{firm.payoutSplit.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Comparisons({ className = "" }: ComparisonsProps) {
  const { title, description, cta } = COMPARISONS_CONTENT;

  return (
    <Section className={`bg-[#050505] ${className}`} id="comparisons">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Table */}
          <div className="flex justify-center lg:justify-start  ">
            <Image
              src="/comparision.webp"
              alt="comparision"
              width={3000}
              height={2000}
              className="object-contain object-left "
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="max-w-6xl">
            <h2 className="text-[36px] md:text-[42px] leading-[1.1] font-medium tracking-tight text-white mb-8">
              <span className="text-primary">{title.highlight}</span>
              <br />
              {title.rest}
            </h2>

            <div className="space-y-5 mb-10">
              {description.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-lg leading-relaxed ${
                    idx === 0 ? "text-gray-300" : "text-gray-400"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={cta.href}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50
                text-white text-sm font-medium
                border border-primary/40
                shadow-[0_4px_20px_rgba(254,197,198,0.3)]
                hover:shadow-[0_4px_30px_rgba(254,197,198,0.4)]
                transition-all duration-300"
              aria-label="View prop firm comparisons"
            >
              <span>{cta.text}</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
