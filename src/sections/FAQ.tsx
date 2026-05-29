import { SectionTitle } from "@/components/SectionTitle";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Esto sustituye al equipo educativo?",
    a: "No. La Oficina Agéntica EdTech elimina fricción operativa y ayuda al equipo a acompañar mejor a futuros alumnos, alumnos actuales, docentes y dirección.",
  },
  {
    q: "¿Necesitamos usar Google Workspace?",
    a: "Es recomendable porque el servicio está diseñado para aprovechar Gmail, Drive, Calendar, Docs, Sheets, Forms, Meet, Gemini, NotebookLM, Apps Script y Looker Studio, aunque también puede conectarse con CRM, LMS u otras herramientas.",
  },
  {
    q: "¿Qué diferencia hay entre un chatbot y un agente IA?",
    a: "Un chatbot responde. Un agente puede analizar contexto, ejecutar tareas, activar flujos, preparar documentos, crear recordatorios, buscar información y coordinar procesos bajo supervisión humana.",
  },
  {
    q: "¿Qué papel tiene DataQuantum?",
    a: "DataQuantum refuerza la parte de gobierno, IA responsable, cumplimiento, seguridad, trazabilidad y preparación para marcos como ISO 42001.",
  },
  {
    q: "¿Por dónde empezamos?",
    a: "Por un diagnóstico estratégico que identifica fricciones, oportunidades, riesgos y casos de uso prioritarios.",
  },
  {
    q: "¿Se puede empezar con un piloto?",
    a: "Sí. La recomendación es empezar con un caso de uso claro, medir impacto y escalar progresivamente.",
  },
  {
    q: "¿Qué ocurre con la seguridad y los datos?",
    a: "La solución se diseña con permisos, trazabilidad, supervisión humana y criterios de IA responsable desde el inicio.",
  },
  {
    q: "¿Se puede integrar con CRM o campus virtual?",
    a: "Sí. El enfoque permite conectar agentes con CRM, LMS, campus virtual, hojas de cálculo, Drive y otras herramientas internas según viabilidad técnica.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Preguntas frecuentes" title="Lo que la dirección suele preguntar" />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition-all ${
                  isOpen ? "border-brand-bright/40 shadow-card bg-white" : "border-slate-100 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-brand-deep">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-brand-bright shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-brand-text leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
