import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={`mx-auto max-w-[1280px] px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

