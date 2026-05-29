import { SectionTitle } from "@/components/SectionTitle";
import { X, Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const before = [
  "Un lead solicita información y recibe una respuesta genérica.",
  "El equipo de admisiones consulta datos manualmente.",
  "La documentación queda repartida entre CRM, Drive y email.",
  "El onboarding depende de correos sueltos.",
  "Las dudas frecuentes saturan al equipo.",
  "El riesgo de abandono se detecta tarde.",
  "Dirección no tiene una visión clara del journey completo.",
];

const after = [
  "El agente entiende el perfil del lead y recomienda el programa adecuado.",
  "Se genera una respuesta personalizada y una tarea de seguimiento.",
  "La documentación se consulta automáticamente.",
  "El alumno recibe un onboarding guiado.",
  "El tutor virtual responde dudas frecuentes con conocimiento validado.",
  "Las señales de abandono generan alertas tempranas.",
  "Dirección recibe un dashboard con oportunidades de mejora.",
];

export function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Transformación" title="Antes y después de una Oficina Agéntica EdTech" />

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Column
            title="Antes"
            tone="before"
            items={before}
            Icon={X}
          />
          <Column
            title="Después"
            tone="after"
            items={after}
            Icon={Check}
          />
        </div>

        <div className="mt-14 mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-semibold text-brand-deep leading-snug">
            La IA no sustituye al equipo educativo.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-cta">
              Le quita fricción para que pueda acompañar mejor
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function Column({
  title,
  tone,
  items,
  Icon,
}: {
  title: string;
  tone: "before" | "after";
  items: string[];
  Icon: typeof X;
}) {
  const ref = useReveal<HTMLDivElement>();
  const isAfter = tone === "after";
  return (
    <div
      ref={ref}
      className={`rounded-3xl p-6 md:p-8 border shadow-card ${
        isAfter ? "bg-gradient-soft border-brand-bright/20" : "bg-slate-50 border-slate-100"
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
            isAfter ? "bg-gradient-cta" : "bg-slate-400"
          }`}
        >
          <Icon size={18} />
        </div>
        <h3 className={`text-xl font-bold ${isAfter ? "text-brand-deep" : "text-slate-700"}`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed">
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                isAfter ? "bg-brand-cyan" : "bg-slate-400"
              }`}
            />
            <span className={isAfter ? "text-brand-deep" : "text-slate-600"}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
