import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Compass, ShieldCheck, Cpu } from "lucide-react";

const cols = [
  {
    icon: Compass,
    title: "IA Power",
    tag: "Estrategia EdTech",
    text: "Customer Journey, experiencia de alumno, diseño de agentes IA, transformación educativa y adopción cultural.",
    accent: "bg-gradient-cta",
  },
  {
    icon: ShieldCheck,
    title: "DataQuantum",
    tag: "Gobierno e IA responsable",
    text: "Cumplimiento normativo, gobierno del dato, trazabilidad, seguridad e ISO 42001.",
    accent: "bg-gradient-violet",
  },
  {
    icon: Cpu,
    title: "Google",
    tag: "Tecnología",
    text: "Gemini, Workspace, NotebookLM, automatización, agentes, AppSheet, Apps Script, Looker Studio y ecosistema cloud/productividad.",
    accent: "bg-brand-deep",
  },
];

export function Alliance() {
  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Alianza estratégica"
          title="Estrategia, gobierno y tecnología para una transformación educativa real"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cols.map((c) => (
            <Card key={c.title}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 ${c.accent}`}>
                <c.icon size={22} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-bright mb-1">
                {c.tag}
              </div>
              <h3 className="text-xl font-bold text-brand-deep mb-3">{c.title}</h3>
              <p className="text-sm text-brand-text leading-relaxed">{c.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-semibold text-brand-deep leading-snug">
            No se trata solo de implantar tecnología. Se trata de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-cta">
              diseñar una organización educativa más inteligente, segura y orientada al alumno
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
