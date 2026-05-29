import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "./Button";
import { trackEvent } from "@/lib/tracking";

const links = [
  { href: "#que-es", label: "Qué es" },
  { href: "#problema", label: "Problema" },
  { href: "#agentes", label: "Agentes" },
  { href: "#metodo", label: "Método" },
  { href: "#google-stack", label: "Google Stack" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#diagnostico", label: "Diagnóstico" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(10,36,99,0.2)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Inicio">
          <div className="w-9 h-9 rounded-xl bg-gradient-cta flex items-center justify-center text-white font-extrabold shadow-glow">
            iA
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-brand-deep">IA Power</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-bright font-semibold">
              Oficina Agéntica EdTech
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => trackEvent("click_cta_nav", { link: l.href })}
                className="text-sm font-medium text-brand-deep/80 hover:text-brand-bright transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink
            href="#diagnostico"
            variant="cta"
            onClick={() => trackEvent("click_cta_nav", { cta: "diagnostico" })}
          >
            Solicitar diagnóstico
          </ButtonLink>
        </div>

        <button
          className="lg:hidden p-2 text-brand-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => {
                    setOpen(false);
                    trackEvent("click_cta_nav", { link: l.href });
                  }}
                  className="block py-1.5 text-sm font-medium text-brand-deep"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink
                href="#diagnostico"
                variant="cta"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Solicitar diagnóstico
              </ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
