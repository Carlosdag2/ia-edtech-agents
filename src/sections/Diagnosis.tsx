import { LeadForm } from "@/components/LeadForm";

export function Diagnosis() {
  return (
    <section id="diagnostico" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="rounded-full bg-brand-bg px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-mid">Diagnóstico</span>
          <h2 className="mt-5 text-3xl font-black text-brand-deep md:text-5xl">Solicita tu diagnóstico de Oficina Agéntica EdTech</h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-text">
            Cuéntanos tu contexto y te diremos dónde puede generar más impacto una Oficina Agéntica EdTech.
          </p>
          <div className="mt-7 space-y-3">
            {[
              "Fugas en captación, admisiones y onboarding",
              "Procesos manuales con alto potencial de automatización",
              "Agentes IA prioritarios y quick wins",
              "Uso actual de Google Workspace, Gemini, CRM y datos",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-brand-bg/70 px-4 py-3 text-sm font-semibold text-brand-deep">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-brand-bright/15 bg-white p-4 text-sm font-bold text-brand-mid shadow-card">
            Diagnóstico orientado a dirección · Sin compromiso · 100% confidencial
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-card-hover md:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
