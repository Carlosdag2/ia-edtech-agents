import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { MessageCircle, Zap, Network } from "lucide-react";

const compare = [
  {
    icon: MessageCircle,
    title: "Chatbot educativo",
    text: "Responde preguntas frecuentes con respuestas predefinidas.",
    tone: "slate",
  },
  {
    icon: Zap,
    title: "Agente IA educativo",
    text: "Analiza contexto, ejecuta tareas y activa procesos bajo supervisión humana.",
    tone: "blue",
  },
  {
    icon: Network,
    title: "Oficina Agéntica EdTech",
    text: "Coordina agentes, equipos y datos de toda la institución educativa.",
    tone: "violet",
  },
] as const;

export function WhatIs() {
  return (
    <section id="que-es" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Qué es"
          title="¿Qué es una Oficina Agéntica EdTech?"
          subtitle="Es un modelo de transformación educativa donde agentes de IA conectados a las herramientas de la organización ayudan a captar alumnos, acompañar procesos de admisión, resolver dudas, personalizar experiencias, apoyar a docentes, detectar riesgos y generar inteligencia institucional."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {compare.map((c) => {
            const accent =
              c.tone === "violet"
                ? "bg-gradient-violet text-white"
                : c.tone === "blue"
                  ? "bg-gradient-cta text-white"
                  : "bg-slate-100 text-brand-deep";
            return (
              <Card key={c.title} className={c.tone === "violet" ? "ring-2 ring-brand-violet/20" : ""}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${accent}`}>
                  <c.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-brand-deep mb-2">{c.title}</h3>
                <p className="text-sm text-brand-text leading-relaxed">{c.text}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-14 mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-semibold text-brand-deep leading-snug">
            Un chatbot responde. Un agente actúa.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-cta">
              Una Oficina Agéntica EdTech coordina
            </span>{" "}
            alumnos, equipos, datos, procesos y decisiones.
          </p>
        </div>
      </div>
    </section>
  );
}
