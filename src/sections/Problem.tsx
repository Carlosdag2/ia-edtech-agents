import { SectionTitle } from "@/components/SectionTitle";
import { AlertCircle } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const problems = [
  "Leads educativos que no se convierten en matrículas",
  "Procesos de admisión lentos o manuales",
  "Onboarding poco claro para nuevos alumnos",
  "Soporte saturado y repetitivo",
  "Dudas frecuentes repartidas entre emails, documentos y equipos",
  "Profesores y coordinadores con exceso de carga operativa",
  "Señales de abandono detectadas tarde",
  "CRM, marketing, campus, soporte y experiencia desconectados",
  "Falta de visibilidad directiva sobre el journey completo",
];

export function Problem() {
  return (
    <section id="problema" className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="El problema"
          title={
            <>
              Tu institución ya tiene tecnología. Lo que quizá no tiene es una{" "}
              <span className="text-brand-bright">experiencia educativa conectada</span>.
            </>
          }
        />

        <ul className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {problems.map((p) => (
            <ProblemItem key={p} text={p} />
          ))}
        </ul>

        <div className="mt-14 mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-semibold text-brand-deep leading-snug">
            La Oficina Agéntica EdTech convierte ese caos operativo en un{" "}
            <span className="bg-clip-text text-transparent bg-gradient-cta">
              sistema inteligente de captación, acompañamiento y mejora continua
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function ProblemItem({ text }: { text: string }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3.5 shadow-card"
    >
      <AlertCircle size={18} className="text-brand-violet mt-0.5 shrink-0" />
      <span className="text-sm text-brand-deep leading-snug">{text}</span>
    </li>
  );
}
