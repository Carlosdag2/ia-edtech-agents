import { SectionTitle } from "@/components/SectionTitle";
import { ButtonLink } from "@/components/Button";
import { Check, Star } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import { useReveal } from "@/hooks/useReveal";

const plans = [
  {
    id: "start",
    name: "START",
    sub: "Diagnóstico y primer piloto",
    audience: "Para organizaciones educativas que quieren empezar con un caso de uso claro.",
    price: "Desde 2.500 €",
    featured: false,
    includes: [
      "Diagnóstico rápido EdTech + IA",
      "Revisión de captación, onboarding o soporte",
      "Mapa de oportunidades prioritarias",
      "1-2 agentes o automatizaciones básicas",
      "Plantillas de prompts y flujos",
      "Sesión de formación inicial",
    ],
    cta: "Solicitar diagnóstico Start",
    event: "click_cta_pricing_start",
  },
  {
    id: "growth",
    name: "GROWTH",
    sub: "Oficina Agéntica EdTech inicial",
    audience: "Para instituciones que quieren conectar varias áreas y medir impacto.",
    price: "Desde 6.500 €",
    featured: true,
    includes: [
      "Diagnóstico AS IS / TO BE completo",
      "Mapa del journey educativo",
      "4-6 agentes personalizados",
      "Automatizaciones con Google Workspace",
      "Dashboard básico en Looker Studio",
      "Gobierno inicial de IA y permisos",
      "Formación al equipo",
    ],
    cta: "Solicitar diagnóstico Growth",
    event: "click_cta_pricing_growth",
  },
  {
    id: "pro",
    name: "PRO",
    sub: "Transformación agéntica educativa",
    audience: "Para universidades, escuelas de negocio o grupos educativos que quieren escalar IA con gobierno.",
    price: "Desde 12.500 €",
    featured: false,
    includes: [
      "Mapa completo de procesos por área",
      "Agentes especializados por departamento",
      "Gobierno de IA, trazabilidad y seguridad",
      "Integraciones con CRM, LMS, ERP o sistemas internos",
      "Reporting avanzado para dirección",
      "Acompañamiento en adopción cultural",
      "Plan de escalado por fases",
    ],
    cta: "Solicitar diagnóstico Pro",
    event: "click_cta_pricing_pro",
  },
];

export function Pricing() {
  return (
    <section id="paquetes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Paquetes"
          title="Elige el punto de partida para tu Oficina Agéntica EdTech"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-brand-text max-w-2xl mx-auto">
          El diagnóstico nos permite recomendar el punto de partida adecuado según madurez, herramientas,
          equipo y objetivos.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`relative rounded-3xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
        plan.featured
          ? "bg-gradient-hero text-white shadow-glow lg:scale-[1.03]"
          : "bg-white text-brand-deep border border-slate-100 shadow-card hover:shadow-card-hover"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-brand-bright text-xs font-bold flex items-center gap-1 shadow-card">
          <Star size={12} className="fill-brand-bright" /> Más recomendado
        </div>
      )}

      <div className={`text-xs font-extrabold tracking-widest mb-1 ${plan.featured ? "text-brand-cyan" : "text-brand-bright"}`}>
        {plan.name}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${plan.featured ? "text-white" : "text-brand-deep"}`}>
        {plan.sub}
      </h3>
      <p className={`text-sm leading-relaxed mb-5 ${plan.featured ? "text-white/85" : "text-brand-text"}`}>
        {plan.audience}
      </p>

      <div className={`text-3xl font-extrabold mb-6 ${plan.featured ? "text-white" : "text-brand-deep"}`}>
        {plan.price}
      </div>

      <ul className="space-y-2.5 mb-7">
        {plan.includes.map((i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${plan.featured ? "text-brand-cyan" : "text-brand-bright"}`}
            />
            <span className={plan.featured ? "text-white/90" : "text-brand-text"}>{i}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href="#diagnostico"
        variant={plan.featured ? "secondary" : "cta"}
        className="w-full"
        onClick={() => trackEvent(plan.event, { plan: plan.id })}
      >
        {plan.cta}
      </ButtonLink>
    </div>
  );
}
