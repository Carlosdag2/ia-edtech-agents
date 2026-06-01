const faqs = [
  {
    q: "¿Esto sustituye al equipo educativo?",
    a: "No. El objetivo es quitar fricción operativa para que admisiones, soporte, docentes y dirección puedan acompañar mejor.",
  },
  {
    q: "¿Necesitamos usar Google Workspace?",
    a: "Es recomendable, porque el servicio aprovecha Gmail, Drive, Calendar, Docs, Sheets, Meet, Gemini, NotebookLM, Apps Script y Looker Studio. También puede conectarse con CRM o LMS.",
  },
  {
    q: "¿Podemos empezar con un piloto?",
    a: "Sí. Lo habitual es empezar con un caso de uso claro, medir impacto y escalar después por áreas.",
  },
  {
    q: "¿Qué pasa con la seguridad y los datos?",
    a: "La solución se diseña con permisos, trazabilidad, supervisión humana y criterios de IA responsable desde el inicio.",
  },
];

export function FAQ() {
  return (
    <section className="bg-brand-bg px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-mid shadow-card">FAQ</span>
          <h2 className="mt-5 text-3xl font-black text-brand-deep md:text-5xl">Preguntas rápidas</h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-3xl bg-white p-6 shadow-card">
              <summary className="cursor-pointer list-none text-lg font-black text-brand-deep">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-brand-bright transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-brand-text">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
