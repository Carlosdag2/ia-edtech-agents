import { SectionTitle } from "@/components/SectionTitle";
import { LeadForm } from "@/components/LeadForm";
import { ShieldCheck } from "lucide-react";

const bullets = [
  "Revisamos captación, admisiones, onboarding, soporte, retención y operación.",
  "Detectamos procesos manuales, fugas y desconexiones entre áreas.",
  "Identificamos agentes IA prioritarios.",
  "Evaluamos el uso actual de Google Workspace, Gemini, CRM y datos.",
  "Priorizamos quick wins y oportunidades de alto impacto.",
  "Definimos siguientes pasos con enfoque estratégico.",
];

export function Diagnosis() {
  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionTitle
            eyebrow="Diagnóstico"
            title="Solicita tu Diagnóstico de Oficina Agéntica EdTech"
            subtitle="Analizamos tu organización educativa para detectar dónde estás perdiendo conversión, tiempo, visibilidad o experiencia de alumno, y te proponemos una primera hoja de ruta para aplicar agentes IA con criterio, seguridad y retorno."
            align="left"
          />

          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-brand-deep">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-brand-bright/30 text-sm font-semibold text-brand-deep shadow-card">
            <ShieldCheck size={16} className="text-brand-bright" />
            Orientado a dirección · Sin compromiso · 100% confidencial
          </div>
        </div>

        <div className="lg:col-span-7">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
