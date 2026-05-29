import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { WhatIsChanging } from "@/sections/WhatIsChanging";
import { Problem } from "@/sections/Problem";
import { WhatIs } from "@/sections/WhatIs";
import { AgentsJourney } from "@/sections/AgentsJourney";
import { UseCases } from "@/sections/UseCases";
import { Alliance } from "@/sections/Alliance";
import { Method } from "@/sections/Method";
import { GoogleStack } from "@/sections/GoogleStack";
import { BeforeAfter } from "@/sections/BeforeAfter";
import { Results } from "@/sections/Results";
import { Pricing } from "@/sections/Pricing";
import { Diagnosis } from "@/sections/Diagnosis";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";

import { initScrollTracking } from "@/lib/tracking";
import { captureUtms } from "@/lib/utm";

const TITLE = "Oficina Agéntica EdTech con IA y Google | IA Power";
const DESCRIPTION =
  "Transforma captación, admisiones, onboarding, soporte y experiencia de alumno con agentes IA conectados a Google Workspace, Gemini y NotebookLM. Solicita tu diagnóstico con IA Power.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "oficina agéntica edtech, IA para educación, agentes IA educación, Google Workspace educación, Gemini educación, NotebookLM educación, automatización EdTech, transformación educativa con IA, IA Power EdTech, agentes IA para universidades, experiencia del alumno, captación educativa, onboarding educativo, IA responsable educación, DataQuantum, ISO 42001",
      },
      { property: "og:title", content: "Oficina Agéntica EdTech | IA Power" },
      {
        property: "og:description",
        content:
          "Agentes IA, Google Workspace, Gemini, NotebookLM y gobierno de IA para transformar organizaciones educativas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oficina Agéntica EdTech | IA Power" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Oficina Agéntica EdTech",
          provider: {
            "@type": "Organization",
            name: "IA Power Business Consulting",
            url: "https://iapower.es",
          },
          serviceType: "Consultoría de IA y transformación educativa",
          areaServed: "ES",
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  useEffect(() => {
    captureUtms();
    const off = initScrollTracking();
    return off;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhatIsChanging />
        <Problem />
        <WhatIs />
        <AgentsJourney />
        <UseCases />
        <Alliance />
        <Method />
        <GoogleStack />
        <BeforeAfter />
        <Results />
        <Pricing />
        <Diagnosis />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
