import { SectionTitle } from "@/components/SectionTitle";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  { n: "01", title: "Diagnóstico estratégico", text: "Analizamos captación, admisiones, onboarding, soporte, experiencia, datos, herramientas y procesos." },
  { n: "02", title: "Mapa AS IS / TO BE", text: "Detectamos fricciones, fugas, tareas repetitivas, desconexiones y oportunidades de automatización." },
  { n: "03", title: "Diseño de agentes y journeys", text: "Definimos agentes prioritarios, casos de uso, flujos, permisos, integraciones y KPIs." },
  { n: "04", title: "Gobierno y seguridad", text: "Establecemos criterios de uso responsable, trazabilidad, supervisión humana, roles y control de datos." },
  { n: "05", title: "Implementación piloto", text: "Creamos los primeros agentes conectados a Google Workspace, CRM o herramientas internas." },
  { n: "06", title: "Adopción y escalado", text: "Formamos equipos, medimos impacto, ajustamos procesos y escalamos por áreas." },
];

export function Method() {
  return (
    <section id="metodo" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Método"
          title="Nuestro método: de institución digital a Oficina Agéntica EdTech"
        />

        <div className="mt-14 relative max-w-4xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-bright via-brand-cyan to-brand-violet/50 md:-translate-x-1/2" />

          <ul className="space-y-10">
            {steps.map((s, i) => (
              <Step key={s.n} step={s} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Step({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const ref = useReveal<HTMLLIElement>();
  const isLeft = index % 2 === 0;
  return (
    <li ref={ref} className="relative md:grid md:grid-cols-2 md:gap-12">
      <div className={`md:${isLeft ? "pr-12 text-right" : "col-start-2 pl-12"} pl-16 md:pl-0`}>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-card">
          <div className="text-xs font-extrabold tracking-widest text-brand-bright mb-1">PASO {step.n}</div>
          <h3 className="text-lg font-bold text-brand-deep mb-2">{step.title}</h3>
          <p className="text-sm text-brand-text leading-relaxed">{step.text}</p>
        </div>
      </div>

      {/* dot */}
      <div className="absolute left-6 md:left-1/2 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-cta ring-4 ring-white" />
    </li>
  );
}
