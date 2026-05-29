import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import {
  Compass,
  Briefcase,
  BookOpen,
  Rocket,
  ShieldAlert,
  Pencil,
  LifeBuoy,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const cases = [
  { icon: Compass, title: "Recomendador de programas", text: "Ayuda a orientar a futuros alumnos hacia el programa adecuado." },
  { icon: Briefcase, title: "Agente de admisiones", text: "Resume leads, prepara respuestas, crea tareas y prioriza oportunidades." },
  { icon: BookOpen, title: "Tutor virtual con conocimiento interno", text: "Responde dudas usando documentación, programas, normativas y materiales aprobados." },
  { icon: Rocket, title: "Agente de onboarding", text: "Guía al alumno durante sus primeros días y reduce fricción inicial." },
  { icon: ShieldAlert, title: "Detector de abandono", text: "Identifica patrones de riesgo y activa alertas al equipo." },
  { icon: Pencil, title: "Copiloto docente", text: "Ayuda a preparar contenidos, rúbricas, actividades, resúmenes y materiales." },
  { icon: LifeBuoy, title: "Agente de soporte académico", text: "Resuelve preguntas frecuentes y deriva incidencias complejas." },
  { icon: BarChart3, title: "Reporting directivo", text: "Genera informes sobre captación, conversión, experiencia, soporte y retención." },
  { icon: Lightbulb, title: "Agente de mejora continua", text: "Detecta oportunidades de mejora en procesos, comunicación y experiencia de alumno." },
];

export function UseCases() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Casos de uso"
          title="Lo que los agentes pueden hacer por tu organización educativa"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Card key={c.title}>
              <div className="w-11 h-11 rounded-xl bg-brand-bg text-brand-bright flex items-center justify-center mb-4 group-hover:bg-gradient-cta group-hover:text-white transition-all">
                <c.icon size={20} />
              </div>
              <h3 className="text-base font-bold text-brand-deep mb-2">{c.title}</h3>
              <p className="text-sm text-brand-text leading-relaxed">{c.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
