import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import {
  Brain,
  BookOpenCheck,
  Mic,
  Workflow,
  Target,
  Network,
} from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Gemini integrado en el trabajo diario",
    text: "Asistencia inteligente dentro de Gmail, Docs, Sheets, Slides y Meet sin cambiar de herramienta.",
  },
  {
    icon: BookOpenCheck,
    title: "NotebookLM como copiloto de aprendizaje e investigación",
    text: "Convertir documentación interna, normativa y materiales en conocimiento consultable y trazable.",
  },
  {
    icon: Mic,
    title: "Experiencias multimodales",
    text: "Voz, vídeo, documentos e imágenes combinados para enseñar, atender y producir contenido.",
  },
  {
    icon: Workflow,
    title: "Automatización conectada a Google Workspace",
    text: "Apps Script, AppSheet y Forms al servicio de procesos académicos y operativos reales.",
  },
  {
    icon: Target,
    title: "IA contextual, personalizada y orientada a la acción",
    text: "Recomendaciones, recordatorios y siguientes pasos basados en el contexto real del alumno o del equipo.",
  },
  {
    icon: Network,
    title: "Agentes que coordinan aplicaciones y equipos",
    text: "Sistemas capaces de moverse entre CRM, campus, Drive, Sheets y Calendar bajo supervisión humana.",
  },
];

export function WhatIsChanging() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Lo que está cambiando"
          title="La educación entra en la era de los agentes IA"
          subtitle="Las organizaciones educativas ya no necesitan solo herramientas digitales. Necesitan sistemas capaces de entender contexto, conectar datos, coordinar equipos y actuar sobre procesos clave."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title}>
              <div className="w-11 h-11 rounded-xl bg-gradient-cta text-white flex items-center justify-center mb-4">
                <it.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-brand-deep mb-2 leading-snug">{it.title}</h3>
              <p className="text-sm text-brand-text leading-relaxed">{it.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-semibold text-brand-deep leading-snug">
            El salto no está en usar más IA. Está en{" "}
            <span className="bg-clip-text text-transparent bg-gradient-cta">
              rediseñar cómo trabaja una organización educativa con IA
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
