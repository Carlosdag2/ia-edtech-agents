import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
};

export function Card({ children, className = "", hover = true, as: Tag = "div" }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`group bg-white rounded-2xl border border-slate-100 p-6 md:p-7 shadow-card transition-all duration-300 ${
        hover ? "hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-bright/30" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
