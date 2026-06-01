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
    </>
  );
}