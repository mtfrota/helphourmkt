import { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.14em] text-[#4c1276] ${className ?? ""}`}>
      {children}
    </p>
  );
}
