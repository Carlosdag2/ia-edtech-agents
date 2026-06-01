const cases = [
  {
    name: "LOUINGENIERIA",
    logo: "https://iapower.es/wp-content/uploads/2026/04/unnamed.png",
    tag: "Sistema de Avatares #EdTech",
    text: "Automatización de captación, cualificación y seguimiento de leads mediante avatares IA, CRM y vídeo inteligente.",
    result: "Ventas escalables sin perder cercanía.",
  },
  {
    name: "SM Formación",
    logo: "https://iapower.es/wp-content/uploads/2026/01/logo_sm.gif",
    tag: "Modelo B2C digital",
    text: "Rediseño estratégico del modelo educativo para lanzar un B2C digital con MPV, encuestas, Design Thinking y plan de negocio.",
    result: "De idea educativa a modelo digital validable.",
  },
  {
    name: "La Pila Food",
    logo: "https://iapower.es/wp-content/uploads/2026/01/LA-PILA-FOOD-LOGO-e1768559677712.png",
    tag: "IA para dirección",
    text: "Formación práctica en IA generativa para capacitar al equipo directivo y activar casos de uso reales.",
    result: "Cultura de innovación aplicada al negocio.",
  },
  {
    name: "8 Belts",
    logo: "https://iapower.es/wp-content/uploads/2026/01/0x0.png",
    tag: "Onboarding y experiencia de alumno",
    text: "Rediseño del onboarding y la experiencia del alumno para activar desde el día 1 y mejorar la retención.",
    result: "Menos devoluciones, más alumnos activos.",
  },
  {
    name: "Happy Learning",
    logo: "https://iapower.es/wp-content/uploads/2026/01/Happy-Learning_logo1_420x420.png",
    tag: "Estrategia de crecimiento",
    text: "Ajuste de previsiones, modelo de negocio y números para un crecimiento realista y sostenible.",
    result: "Mejor crecer bien que crecer rápido.",
  },
  {
    name: "IDEADOS Formación",
    logo: "https://iapower.es/wp-content/uploads/2026/01/images-2.png",
    tag: "Captación y seguimiento",
    text: "CRM, automatización y LinkedIn para profesionalizar captación, seguimiento y cierre.",
    result: "Menos caos, más ventas.",
  },
];

export function SuccessCases() {
  return (
    <section id="casos" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="rounded-full bg-brand-bg px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-mid">Casos reales</span>
          <h2 className="mt-5 text-3xl font-black text-brand-deep md:text-5xl">Casos EdTech donde la IA ya está generando impacto</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-text">Más prueba real, menos teoría. Proyectos con foco en captación, experiencia, formación y crecimiento.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item) => (
            <article key={item.name} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex h-16 items-center">
                <img src={item.logo} alt={item.name} className="max-h-12 max-w-[170px] object-contain" loading="lazy" />
              </div>
              <p className="mt-5 inline-flex rounded-full bg-brand-bg px-3 py-1 text-xs font-black text-brand-mid">{item.tag}</p>
              <h3 className="mt-4 text-2xl font-black text-brand-deep">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-text">{item.text}</p>
              <p className="mt-5 border-l-4 border-brand-cyan pl-4 text-sm font-black text-brand-deep">{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
