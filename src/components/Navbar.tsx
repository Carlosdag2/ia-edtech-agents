import { Menu, X } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/tracking";
import { BrandLogo } from "@/components/BrandLogo";

const nav = [
  { label: "Qué es", href: "#que-es" },
  { label: "Problema", href: "#problema" },
  { label: "Casos", href: "#casos" },
  { label: "Agentes", href: "#agentes" },
  { label: "Método", href: "#metodo" },
  { label: "Paquetes", href: "#paquetes" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="IA Power - Oficina Agéntica EdTech">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-brand-bright">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#diagnostico"
          onClick={() => trackEvent("click_cta_nav")}
          className="hidden rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 lg:inline-flex"
        >
          Solicitar diagnóstico
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-brand-deep lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-brand-deep hover:bg-brand-bg"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => {
                setOpen(false);
                trackEvent("click_cta_nav");
              }}
              className="rounded-full bg-gradient-cta px-5 py-3 text-center text-sm font-bold text-white shadow-glow"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
