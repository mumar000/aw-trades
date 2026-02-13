interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`relative py-16 md:py-20 ${className}`}>
      {children}
    </section>
  );
}
