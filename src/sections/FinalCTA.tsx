import { ButtonLink } from "@/components/Button";
import { trackEvent } from "@/lib/tracking";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white py-20 md:py-28">
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-brand-cyan/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-brand-violet/40 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
          La próxima organización educativa no tendrá más herramientas.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-100">
            Tendrá mejores decisiones.
          </span>
        </h2>

        <p className="mt-6 text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
          En IA Power diseñamos Oficinas Agénticas EdTech donde personas, datos, agentes IA y tecnología
          Google trabajan como un único sistema para mejorar captación, experiencia de alumno, operación y
          crecimiento.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonLink
            href="#diagnostico"
            variant="cta"
            size="lg"
            onClick={() => trackEvent("click_cta_hero", { from: "final_cta" })}
          >
            Quiero solicitar mi diagnóstico
          </ButtonLink>
          <ButtonLink
            href="https://iapower.es"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            onClick={() => trackEvent("click_cta_secondary", { from: "final_cta" })}
          >
            Hablar con IA Power
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
