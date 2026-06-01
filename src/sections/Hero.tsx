import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

const bullets = [
  "Detecta fugas en el journey del alumno",
  "Automatiza admisiones, soporte y seguimiento",
  "Mejora experiencia sin saturar al equipo",
  "IA gobernada, segura y trazable",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-soft px-5 pt-32 pb-20 lg:pt-36">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-40 h-96 w-96 rounded-full bg-brand-violet/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            {['IA Power + DataQuantum + Google', 'Agentes IA para educación', 'Diagnóstico estratégico'].map((badge) => (
              <span key={badge} className="rounded-full border border-brand-bright/15 bg-white px-4 py-2 text-xs font-bold text-brand-mid shadow-card">
                {badge}
              </span>
            ))}
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] text-brand-deep md:text-6xl">
            Oficina Agéntica EdTech para captar, acompañar y fidelizar alumnos con IA
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-text md:text-xl">
            Diseñamos agentes de IA conectados a Google Workspace, Gemini, NotebookLM, CRM y procesos internos para mejorar captación, admisiones, onboarding, soporte y retención.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {bullets.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/75 p-3 shadow-card">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-bright" size={18} />
                <span className="text-sm font-semibold text-brand-deep">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#diagnostico"
              onClick={() => trackEvent("click_cta_hero")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-7 py-4 font-bold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Solicitar diagnóstico <ArrowRight size={18} />
            </a>
            <a
              href="#casos"
              onClick={() => trackEvent("click_cta_secondary")}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-brand-deep shadow-card transition hover:border-brand-bright hover:text-brand-bright"
            >
              Ver casos EdTech
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/70 bg-white p-5 shadow-card-hover">
            <div className="rounded-[1.5rem] bg-brand-deep p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">Agente IA EdTech activo</p>
                  <p className="mt-1 text-lg font-black">Panel de oportunidades</p>
                </div>
                <Sparkles className="text-brand-cyan" />
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ['Lead educativo detectado', 'Interés en Máster de IA · alta intención'],
                  ['Programa recomendado', 'Data & AI · modalidad online'],
                  ['Riesgo de abandono', 'Alumno inactivo 9 días · alerta creada'],
                  ['Tutor virtual activo', '32 dudas resueltas con conocimiento interno'],
                ].map(([title, text], i) => (
                  <div key={title} className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan/20 text-sm font-black text-brand-cyan">{i + 1}</span>
                      <div>
                        <p className="font-bold">{title}</p>
                        <p className="text-sm text-white/70">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-8 hidden rounded-2xl bg-white px-4 py-3 text-sm font-bold text-brand-deep shadow-card-hover md:block">
            Dashboard actualizado
          </div>
          <div className="absolute -left-4 bottom-8 hidden rounded-2xl bg-white px-4 py-3 text-sm font-bold text-brand-deep shadow-card-hover md:block">
            Briefing de admisión generado
          </div>
        </div>
      </div>
    </section>
  );
}
