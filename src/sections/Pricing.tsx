import { trackEvent } from "@/lib/tracking";

const plans = [
  {
    name: "Start",
    price: "Desde 2.500 €",
    subtitle: "Diagnóstico + primer piloto",
    event: "click_cta_pricing_start",
    bullets: ["Diagnóstico rápido EdTech + IA", "Mapa de oportunidades prioritarias", "1-2 agentes o automatizaciones", "Plantillas de prompts y flujos", "Sesión de formación inicial"],
  },
  {
    name: "Growth",
    price: "Desde 6.500 €",
    subtitle: "Journey + agentes + dashboard inicial",
    event: "click_cta_pricing_growth",
    featured: true,
    bullets: ["Diagnóstico AS IS / TO BE", "Mapa del journey educativo", "4-6 agentes personalizados", "Automatizaciones Workspace", "Dashboard inicial en Looker Studio"],
  },
  {
    name: "Pro",
    price: "Desde 12.500 €",
    subtitle: "Transformación por áreas + gobierno IA",
    event: "click_cta_pricing_pro",
    bullets: ["Mapa completo por áreas", "Agentes por departamento", "Gobierno IA y trazabilidad", "Integración con CRM/LMS/ERP", "Plan de escalado por fases"],
  },
];

export function Pricing() {
  return (
    <section id="paquetes" className="bg-gradient-soft px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-mid shadow-card">Paquetes</span>
          <h2 className="mt-5 text-3xl font-black text-brand-deep md:text-5xl">Elige el punto de partida</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-text">El diagnóstico define qué paquete encaja mejor según madurez, equipo, herramientas y objetivos.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[2rem] p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover ${
                plan.featured ? "bg-brand-deep text-white ring-4 ring-brand-cyan/15" : "border border-slate-100 bg-white text-brand-deep"
              }`}
            >
              {plan.featured && <span className="absolute right-6 top-6 rounded-full bg-brand-cyan px-3 py-1 text-xs font-black text-brand-deep">Más recomendado</span>}
              <p className={`text-sm font-black uppercase tracking-[0.18em] ${plan.featured ? "text-brand-cyan" : "text-brand-bright"}`}>{plan.name}</p>
              <h3 className={`mt-4 text-3xl font-black ${plan.featured ? "text-white" : "text-brand-deep"}`}>{plan.price}</h3>
              <p className={`mt-2 text-sm font-semibold ${plan.featured ? "text-white/70" : "text-brand-text"}`}>{plan.subtitle}</p>
              <ul className="mt-7 space-y-3">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className={`flex gap-3 text-sm ${plan.featured ? "text-white/82" : "text-brand-text"}`}>
                    <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${plan.featured ? "bg-brand-cyan" : "bg-brand-bright"}`} />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href="#diagnostico"
                onClick={() => trackEvent(plan.event)}
                className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 font-bold transition ${
                  plan.featured ? "bg-white text-brand-deep hover:bg-brand-bg" : "bg-gradient-cta text-white shadow-glow hover:-translate-y-0.5"
                }`}
              >
                Solicitar diagnóstico {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
