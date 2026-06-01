import { GraduationCap, Headphones, LineChart, UserRoundSearch } from "lucide-react";

const problems = [
  { icon: UserRoundSearch, title: "Captación", text: "Leads que no reciben respuesta adecuada o llegan sin cualificar." },
  { icon: GraduationCap, title: "Admisiones", text: "Procesos lentos, manuales y dependientes de seguimiento individual." },
  { icon: Headphones, title: "Experiencia", text: "Onboarding, soporte y dudas repartidas entre canales." },
  { icon: LineChart, title: "Retención", text: "Señales de abandono detectadas cuando ya es demasiado tarde." },
];

export function Problem() {
  return (
    <section id="problema" className="bg-brand-deep px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">El bloqueo real</span>
          <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">El problema no es la falta de IA. Es la desconexión del journey educativo.</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Cuando captación, admisiones, soporte, docencia y dirección trabajan con datos dispersos, se pierden alumnos, tiempo y oportunidades.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <Icon className="text-brand-cyan" size={30} />
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
