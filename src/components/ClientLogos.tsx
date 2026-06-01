const logos = [
  { name: "LOUINGENIERIA", src: "https://iapower.es/wp-content/uploads/2026/04/unnamed.png" },
  { name: "SM Formación", src: "https://iapower.es/wp-content/uploads/2026/01/logo_sm.gif" },
  { name: "La Pila Food", src: "https://iapower.es/wp-content/uploads/2026/01/LA-PILA-FOOD-LOGO-e1768559677712.png" },
  { name: "8 Belts", src: "https://iapower.es/wp-content/uploads/2026/01/0x0.png" },
  { name: "Happy Learning", src: "https://iapower.es/wp-content/uploads/2026/01/Happy-Learning_logo1_420x420.png" },
  { name: "IDEADOS Formación", src: "https://iapower.es/wp-content/uploads/2026/01/images-2.png" },
];

export function ClientLogos() {
  return (
    <section id="casos-edtech" className="bg-white px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-brand-bg px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-mid">
            Casos #EdTech
          </span>
          <h2 className="mt-5 text-3xl font-black text-brand-deep md:text-4xl">Experiencia real en proyectos EdTech</h2>
          <p className="mt-4 text-base leading-relaxed text-brand-text md:text-lg">
            IA Power ya ha trabajado en captación, onboarding, experiencia de alumno, formación, estrategia y automatización para organizaciones vinculadas al aprendizaje.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex h-28 items-center justify-center rounded-3xl border border-slate-100 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-16 w-full object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
