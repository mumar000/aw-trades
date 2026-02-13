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
      className={`
        relative px-6 py-2 rounded-full text-lg transition-all duration-300
        flex items-center justify-center min-w-[100px]
        border-t-2
        ${
          isActive
            ? "bg-white/[0.12] border-white/10 text-white font-semibold "
            : "bg-white/[0.03] border-white/40 text-white/95 hover:text-white hover:bg-white/[0.08] hover:border-white/20"
        }
      `}
      style={{
        boxShadow: isActive
          ? "inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 15px rgba(0,0,0,0.4)"
          : "inset 0 1px 0px rgba(255,255,255,0.1)",
      }}
    >
      <span
        className={`
        absolute inset-x-0 top-0 h-[2px]
        ${isActive ? "via-white/50" : "via-white/10"}
      `}
      />

      <span className="relative z-10">{children}</span>
    </a>
  );
}
