import { BookOpenCheck, ClipboardCheck, Compass, DatabaseZap, DoorOpen, Megaphone, ShieldAlert } from "lucide-react";

const agents = [
  { icon: Megaphone, title: "Captación", text: "Recomienda programas según perfil e intención.", result: "Lead mejor cualificado." },
  { icon: ClipboardCheck, title: "Admisión", text: "Resume, prioriza y activa seguimiento comercial.", result: "Respuesta más rápida." },
  { icon: DoorOpen, title: "Matrícula", text: "Reduce fricción en documentación y próximos pasos.", result: "Cierre más claro." },
  { icon: Compass, title: "Onboarding", text: "Guía al alumno desde el primer día.", result: "Mejor activación." },
  { icon: BookOpenCheck, title: "Aprendizaje", text: "Tutor virtual conectado a conocimiento interno.", result: "Soporte continuo." },
  { icon: ShieldAlert, title: "Retención", text: "Detecta inactividad, incidencias y riesgo temprano.", result: "Intervención a tiempo." },
  { icon: DatabaseZap, title: "Dirección", text: "Consolida datos del journey completo.", result: "Decisiones con contexto." },
];

export function AgentsJourney() {
  return (
    <section id="agentes" className="bg-gradient-soft px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-mid shadow-card">Journey educativo</span>
          <h2 className="mt-5 text-3xl font-black text-brand-deep md:text-5xl">Agentes IA en cada punto crítico del alumno</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-text">Un sistema de agentes coordinado para captar mejor, acompañar más y decidir con datos.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map(({ icon: Icon, title, text, result }) => (
            <article key={title} className="rounded-3xl border border-white bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bg text-brand-bright">
                <Icon size={23} />
              </div>
              <h3 className="mt-5 text-xl font-black text-brand-deep">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text">{text}</p>
              <p className="mt-4 rounded-full bg-brand-deep/5 px-3 py-2 text-xs font-bold text-brand-mid">{result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
