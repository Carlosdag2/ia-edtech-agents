import { SectionTitle } from "@/components/SectionTitle";
import { Bot } from "lucide-react";

const tools = [
  "Gmail",
  "Drive",
  "Calendar",
  "Docs",
  "Sheets",
  "Forms",
  "Meet",
  "Gemini",
  "NotebookLM",
  "AppSheet",
  "Apps Script",
  "Looker Studio",
  "GA4",
  "Google Tag Manager",
  "CRM",
  "Campus / LMS",
  "Herramientas internas",
];

export function GoogleStack() {
  return (
    <section id="google-stack" className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Stack Google"
          title="Diseñado para organizaciones educativas que ya trabajan con Google"
          subtitle="Integramos los agentes en las herramientas que tu equipo ya utiliza para evitar cambios bruscos, reducir fricción y acelerar la adopción."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-center">
          {/* Visual: center node + satellites */}
          <div className="lg:col-span-6 relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-cta opacity-10 blur-3xl" />
            {/* concentric rings */}
            <div className="absolute inset-6 rounded-full border border-brand-bright/20" />
            <div className="absolute inset-16 rounded-full border border-brand-cyan/20" />
            <div className="absolute inset-28 rounded-full border border-brand-violet/20" />

            {/* center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-cta text-white flex flex-col items-center justify-center shadow-glow">
                <Bot size={28} />
                <div className="mt-1.5 text-[11px] font-bold tracking-wide leading-tight text-center px-2">
                  Agentes IA
                  <br />
                  EdTech
                </div>
              </div>
            </div>

            {/* satellites */}
            {tools.slice(0, 12).map((t, i) => {
              const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
              const r = 44; // percentage radius
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              return (
                <div
                  key={t}
                  className="absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-card text-[11px] font-semibold text-brand-deep whitespace-nowrap"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {t}
                </div>
              );
            })}
          </div>

          {/* Full list */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {tools.map((t) => (
                <div
                  key={t}
                  className="px-3 py-2.5 rounded-xl bg-white border border-slate-100 text-sm font-medium text-brand-deep text-center hover:border-brand-bright hover:-translate-y-0.5 transition-all shadow-card"
                >
                  {t}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-text leading-relaxed">
              También conectamos con CRMs, ERPs, campus virtuales y herramientas internas según viabilidad
              técnica y prioridades estratégicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
