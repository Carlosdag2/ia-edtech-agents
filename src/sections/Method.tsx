const steps = [
  { title: "Diagnóstico", text: "Detectamos fugas, procesos manuales y oportunidades IA." },
  { title: "Diseño", text: "Definimos agentes, datos, permisos, flujos y KPIs." },
  { title: "Piloto", text: "Implementamos los primeros agentes conectados a herramientas reales." },
  { title: "Escalado", text: "Medimos, formamos al equipo y priorizamos siguientes casos." },
];

export function Method() {
  return (
    <section id="metodo" className="bg-brand-deep px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">Método IA Power</span>
          <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">De diagnóstico a piloto en semanas</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">Menos consultoría eterna. Más foco en quick wins, gobierno y despliegue medible.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cyan text-lg font-black text-brand-deep">{index + 1}</span>
              <h3 className="mt-5 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
