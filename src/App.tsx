import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LeadFilter } from "@/components/LeadFilter";
import { Portfolio } from "@/components/Portfolio";
import { Advisor } from "@/components/Advisor";
import { Shortlist } from "@/components/Shortlist";
import { Footer } from "@/components/Footer";
import { MobileWhatsAppBar } from "@/components/MobileWhatsAppBar";
import { Reveal } from "@/components/Reveal";
import { properties, type Property } from "@/config/site";

type FilterState = {
  budget: string | null;
  locality: string | null;
  timeline: string | null;
};

function App() {
  const [results, setResults] = useState<Property[]>(properties);
  const [active, setActive] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [filterKey, setFilterKey] = useState(0);

  const handleResults = (
    matched: Property[],
    _state: FilterState,
    message: string
  ) => {
    setResults(matched);
    setActive(true);
    setInquiryMessage(message);
    setFilterKey((k) => k + 1);
  };

  const clearFilters = () => {
    setResults(properties);
    setActive(false);
    setInquiryMessage("");
    setFilterKey((k) => k + 1);
    document
      .getElementById("lead-filter")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white">
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <Hero />

        <div className="pt-28 sm:pt-32">
          <Reveal>
            <LeadFilter onResults={handleResults} />
          </Reveal>
        </div>

        <Reveal>
          {/* key resets the show more/less state whenever filters change */}
          <Portfolio
            key={filterKey}
            results={results}
            active={active}
            inquiryMessage={inquiryMessage}
            onClear={clearFilters}
          />
        </Reveal>

        <Reveal>
          <Advisor />
        </Reveal>

        <Reveal>
          <Shortlist />
        </Reveal>
      </main>

      <Footer />
      <MobileWhatsAppBar />
    </div>
  );
}

export default App;
