import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero px-5 py-20 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.20),transparent_35%)]" />
      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">Convierte tu organización educativa en un sistema más inteligente</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/78">
          Menos procesos dispersos. Más alumnos acompañados. Más decisiones con contexto.
        </p>
        <a
          href="#diagnostico"
          onClick={() => trackEvent("click_cta_final")}
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-brand-deep shadow-card-hover transition hover:-translate-y-0.5"
        >
          Solicitar diagnóstico <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
