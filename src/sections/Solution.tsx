import { BrainCircuit, Building2, UsersRound } from "lucide-react";

const pillars = [
  { icon: UsersRound, title: "Alumno", text: "Orientación, onboarding, tutor virtual y soporte con contexto." },
  { icon: BrainCircuit, title: "Equipo", text: "Menos tareas repetitivas, más seguimiento y más velocidad operativa." },
  { icon: Building2, title: "Dirección", text: "Datos, alertas, reporting y decisiones con una visión completa." },
];

export function Solution() {
  return (
    <section id="que-es" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="rounded-full bg-brand-bg px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-mid">¿Qué es?</span>
          <h2 className="mt-5 text-3xl font-black text-brand-deep md:text-5xl">Una Oficina Agéntica EdTech conecta personas, datos y agentes IA</h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-text">
            Creamos un sistema de agentes IA conectado a tus herramientas para que captación, admisiones, onboarding, soporte, docencia y dirección trabajen con más contexto y menos fricción.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-5 rounded-3xl border border-slate-100 bg-brand-bg/55 p-6 shadow-card">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-bright shadow-card">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
