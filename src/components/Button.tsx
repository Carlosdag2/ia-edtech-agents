import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "cta";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-bright disabled:opacity-60 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-deep text-white hover:bg-brand-mid shadow-[0_8px_24px_-8px_rgba(10,36,99,0.5)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-brand-deep border border-slate-200 hover:border-brand-bright hover:text-brand-bright shadow-card",
  ghost:
    "bg-transparent text-brand-deep hover:bg-brand-bg",
  cta:
    "bg-gradient-cta text-white hover:opacity-95 shadow-glow hover:-translate-y-0.5",
};

type Common = { variant?: Variant; size?: Size };

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Common;
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & Common & { as: "a" };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className = "", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
});

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & Common) {
  return (
    <a className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />
  );
}

export type { Variant as ButtonVariant, Size as ButtonSize };
export type { ButtonProps, AnchorProps };
