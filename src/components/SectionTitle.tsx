import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ eyebrow, title, subtitle, align = "center", className = "" }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const isCenter = align === "center";
  return (
    <div
      ref={ref}
      className={`${isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-bright mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-deep leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-brand-text leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
