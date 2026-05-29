import { Sparkles, ChevronDown, Bot, AlertTriangle, FileText, LayoutDashboard } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { trackEvent } from "@/lib/tracking";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-soft">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-violet/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-bright/30 text-xs font-semibold text-brand-bright shadow-card">
            <Sparkles size={14} /> IA Power + DataQuantum + Google
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.08]">
            La <span className="bg-clip-text text-transparent bg-gradient-cta">Oficina Agéntica EdTech</span>{" "}
            para transformar captación, experiencia y operación educativa con IA
          </h1>

          <p className="mt-6 text-base md:text-lg text-brand-text leading-relaxed max-w-2xl">
            Diseñamos agentes de IA conectados a Google Workspace, Gemini, NotebookLM, CRM y procesos
            internos para ayudar a universidades, escuelas de negocio y organizaciones educativas a captar
            mejor, acompañar al alumno, automatizar tareas y tomar decisiones con más contexto.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-2.5 max-w-2xl">
            {[
              "Más conversión de lead a matrícula",
              "Mejor onboarding y experiencia del alumno",
              "Menos carga operativa para equipos internos",
              "Agentes IA conectados a procesos reales",
              "Gobierno, seguridad y trazabilidad desde el diseño",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-brand-deep">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" /> {b}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <ButtonLink
              href="#diagnostico"
              variant="cta"
              size="lg"
              onClick={() => trackEvent("click_cta_hero")}
            >
              Solicitar diagnóstico de Oficina Agéntica EdTech
            </ButtonLink>
            <ButtonLink
              href="#que-es"
              variant="secondary"
              size="lg"
              onClick={() => trackEvent("click_cta_secondary")}
            >
              Ver cómo funciona <ChevronDown size={16} />
            </ButtonLink>
          </div>
        </div>

        {/* Dashboard visual */}
        <div className="lg:col-span-5 relative">
          <AgentDashboard />
        </div>
      </div>
    </section>
  );
}

function AgentDashboard() {
  return (
    <div className="relative">
      {/* Floating chips */}
      <div className="hidden md:block absolute -left-6 top-10 z-10 animate-floaty">
        <Chip>Tutor virtual activo</Chip>
      </div>
      <div className="hidden md:block absolute -right-4 top-32 z-10 animate-floaty" style={{ animationDelay: "1s" }}>
        <Chip color="violet">Riesgo de abandono detectado</Chip>
      </div>
      <div className="hidden md:block absolute -left-2 bottom-10 z-10 animate-floaty" style={{ animationDelay: "2s" }}>
        <Chip color="cyan">Briefing de admisión generado</Chip>
      </div>
      <div className="hidden md:block absolute -right-6 bottom-0 z-10 animate-floaty" style={{ animationDelay: "0.5s" }}>
        <Chip>Dashboard actualizado</Chip>
      </div>

      <div className="relative rounded-3xl bg-white border border-slate-100 shadow-card p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-cta flex items-center justify-center text-white">
              <Bot size={18} />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-deep">Agente IA EdTech</div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" /> Activo
              </div>
            </div>
          </div>
          <LayoutDashboard size={18} className="text-brand-text/60" />
        </div>

        <div className="space-y-3">
          <Row icon={<Sparkles size={14} />} tone="cyan">
            Nuevo lead interesado en <b>Máster de IA</b> detectado.
          </Row>
          <Row icon={<FileText size={14} />}>
            Consultando histórico de admisiones, perfil del alumno y programa recomendado…
          </Row>
          <Row icon={<Sparkles size={14} />} tone="violet">
            Programa sugerido: <b>Máster en Data &amp; AI</b>.
          </Row>
          <Row icon={<AlertTriangle size={14} />} tone="emerald">
            Acción creada: <b>email personalizado</b> + tarea de seguimiento + alerta a admisiones.
          </Row>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          {[
            { k: "Leads", v: "128" },
            { k: "Conversión", v: "+24%" },
            { k: "SLA", v: "2h" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-brand-bg py-2.5">
              <div className="text-base font-bold text-brand-deep">{s.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-brand-text">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Chip({ children, color = "blue" }: { children: React.ReactNode; color?: "blue" | "cyan" | "violet" }) {
  const map = {
    blue: "bg-white text-brand-deep border-brand-bright/40",
    cyan: "bg-white text-brand-cyan border-brand-cyan/40",
    violet: "bg-white text-brand-violet border-brand-violet/40",
  } as const;
  return (
    <div className={`px-3 py-2 rounded-full border shadow-card text-xs font-semibold ${map[color]}`}>
      {children}
    </div>
  );
}

function Row({
  children,
  icon,
  tone = "blue",
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  tone?: "blue" | "cyan" | "violet" | "emerald";
}) {
  const map = {
    blue: "bg-blue-50 text-brand-deep",
    cyan: "bg-cyan-50 text-cyan-900",
    violet: "bg-violet-50 text-violet-900",
    emerald: "bg-emerald-50 text-emerald-900",
  } as const;
  return (
    <div className={`flex items-start gap-2.5 p-3 rounded-xl text-[13px] leading-snug ${map[tone]}`}>
      <span className="mt-0.5 shrink-0 opacity-80">{icon}</span>
      <span>{children}</span>
    </div>
  );
}
