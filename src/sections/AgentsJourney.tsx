import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import {
  Megaphone,
  ClipboardCheck,
  CreditCard,
  Compass,
  GraduationCap,
  ShieldAlert,
  BarChart3,
} from "lucide-react";

const journey = [
  {
    n: "01",
    icon: Megaphone,
    title: "Captación",
    body: "Agente que ayuda a futuros alumnos a descubrir el programa adecuado según perfil, intereses, objetivos y contexto.",
    result: "Más orientación y mejor cualificación del lead.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Admisión",
    body: "Agente que acompaña solicitud, documentación, llamadas, recordatorios y seguimiento comercial.",
    result: "Menos fricción y mayor velocidad de respuesta.",
  },
  {
    n: "03",
    icon: CreditCard,
    title: "Matrícula",
    body: "Agente que reduce fricción en pagos, documentación pendiente, validaciones y próximos pasos.",
    result: "Más claridad y menos abandono en el cierre.",
  },
  {
    n: "04",
    icon: Compass,
    title: "Onboarding",
    body: "Agente que guía al alumno en sus primeros días, resuelve dudas frecuentes y activa recursos clave.",
    result: "Mejor arranque de experiencia.",
  },
  {
    n: "05",
    icon: GraduationCap,
    title: "Aprendizaje",
    body: "Tutor virtual conectado a conocimiento interno, materiales, normativa, calendario y recursos.",
    result: "Apoyo continuo y personalizado.",
  },
  {
    n: "06",
    icon: ShieldAlert,
    title: "Retención",
    body: "Agente que detecta señales tempranas de abandono, inactividad, baja participación o incidencias.",
    result: "Intervención temprana.",
  },
  {
    n: "07",
    icon: BarChart3,
    title: "Inteligencia institucional",
    body: "Sistema que consolida captación, onboarding, soporte, satisfacción, rendimiento y fidelización.",
    result: "Decisiones directivas con más contexto.",
  },
];

export function AgentsJourney() {
  return (
    <section id="agentes" className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Journey de agentes"
          title="Agentes IA para cada punto crítico del journey educativo"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {journey.map((s) => (
            <Card key={s.title}>
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-cta text-white flex items-center justify-center">
                  <s.icon size={20} />
                </div>
                <span className="text-xs font-extrabold tracking-widest text-brand-bright">{s.n}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-deep mb-2">{s.title}</h3>
              <p className="text-sm text-brand-text leading-relaxed mb-3">{s.body}</p>
              <div className="mt-auto pt-3 border-t border-slate-100 text-xs font-semibold text-brand-violet">
                Resultado: {s.result}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
