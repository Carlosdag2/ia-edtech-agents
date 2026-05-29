import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { TrendingUp } from "lucide-react";

const items = [
  "Más velocidad de respuesta a futuros alumnos",
  "Mayor conversión potencial de lead a matrícula",
  "Menos abandono temprano",
  "Mejor onboarding",
  "Soporte más ágil y ordenado",
  "Profesores y coordinadores con menos carga repetitiva",
  "Mayor trazabilidad de procesos",
  "Decisiones directivas con más contexto",
  "Mejor uso de Google Workspace",
  "IA gobernada, segura y alineada con objetivos",
];

export function Results() {
  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Resultados esperados"
          title="Resultados que se notan en captación, experiencia y operación"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <Card key={t} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-bg text-brand-bright flex items-center justify-center shrink-0">
                <TrendingUp size={18} />
              </div>
              <p className="text-sm font-medium text-brand-deep leading-snug pt-1.5">{t}</p>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-widest text-brand-text">
          Potencial de mejora · Según diagnóstico · Priorización de quick wins · Resultados estimados según
          contexto
        </p>
      </div>
    </section>
  );
}
