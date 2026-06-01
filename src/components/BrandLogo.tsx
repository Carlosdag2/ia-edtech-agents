import { useState } from "react";

type BrandLogoProps = {
  variant?: "header" | "footer";
  showText?: boolean;
};

const LOCAL_LOGO = "/logo-ia-power.png";
const REMOTE_LOGO = "https://iapower.es/wp-content/uploads/2023/12/cropped-Logo-negativo-IA-Power-2.0-1-130x73.png";

export function BrandLogo({ variant = "header", showText = true }: BrandLogoProps) {
  const [src, setSrc] = useState(LOCAL_LOGO);
  const [fallbackUsed, setFallbackUsed] = useState(false);

  const isFooter = variant === "footer";

  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          "flex h-14 w-32 shrink-0 items-center justify-center rounded-2xl p-2 shadow-glow",
          isFooter ? "border border-white/10 bg-white/10" : "bg-brand-deep",
        ].join(" ")}
      >
        <img
          src={src}
          alt="IA Power Business Consulting"
          className="max-h-10 w-auto object-contain"
          loading="eager"
          decoding="async"
          onError={() => {
            if (!fallbackUsed) {
              setFallbackUsed(true);
              setSrc(REMOTE_LOGO);
            }
          }}
        />
      </div>

      {showText && (
        <div className="leading-tight">
          <p className={isFooter ? "text-base font-black text-white" : "font-black tracking-tight text-brand-deep"}>
            IA Power
          </p>
          <p className={isFooter ? "text-xs font-semibold text-white/70" : "text-xs font-semibold text-brand-text"}>
            Oficina Agéntica EdTech
          </p>
        </div>
      )}
    </div>
  );
}
