import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ClientLogos } from "@/components/ClientLogos";
import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { Solution } from "@/sections/Solution";
import { AgentsJourney } from "@/sections/AgentsJourney";
import { SuccessCases } from "@/sections/SuccessCases";
import { Method } from "@/sections/Method";
import { Pricing } from "@/sections/Pricing";
import { Diagnosis } from "@/sections/Diagnosis";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { initScrollTracking } from "@/lib/tracking";
import { captureUtms } from "@/lib/utm";
import { Alliance } from "./sections/Alliance";
import { WhatIs } from "./sections/WhatIs";

export default function App() {
  useEffect(() => {
    captureUtms();
    const off = initScrollTracking();
    return off;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Solution />
        <Problem />
        <AgentsJourney />
        <SuccessCases />
        <Method />
        <Alliance />
        <Pricing />
        <Diagnosis />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
