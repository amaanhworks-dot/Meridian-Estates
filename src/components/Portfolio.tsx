import { useState } from "react";
import { SearchX, RotateCcw, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { PropertyCard } from "./PropertyCard";
import { Reveal } from "./Reveal";
import { waLink, type Property } from "@/config/site";

const INITIAL_COUNT = 3;

interface PortfolioProps {
  results: Property[];
  active: boolean;
  inquiryMessage: string;
  onClear: () => void;
}

export function Portfolio({ results, active, inquiryMessage, onClear }: PortfolioProps) {
  const [expanded, setExpanded] = useState(false);

  const total = results.length;
  const shown = expanded ? total : Math.min(INITIAL_COUNT, total);
  const visible = results.slice(0, shown);
  const canToggle = total > INITIAL_COUNT;

  const toggle = () => setExpanded((prev) => !prev);

  const empty = active && total === 0;

  return (
    <section id="portfolio" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="font-playfair text-3xl text-white sm:text-4xl">
            Featured Luxury Portfolio
          </h2>
          <p className="mt-3 text-xs text-white/50 sm:text-sm">
            {active
              ? "Filtered results matching your selections."
              : "A curated selection of off-market residences across Delhi NCR."}
          </p>
          {!empty && (
            <p className="mt-2 text-[11px] font-medium tracking-wide text-[#D4AF37]/70">
              Showing {shown} of {total} {total === 1 ? "property" : "properties"}
            </p>
          )}
        </div>

        {empty ? (
          <div className="mx-auto max-w-md rounded-sm border border-white/10 bg-[#141418] p-8 text-center">
            <SearchX className="mx-auto h-8 w-8 text-white/40" />
            <p className="mt-4 font-playfair text-lg text-white">
              No matching inventory found
            </p>
            <p className="mt-2 text-xs text-white/55 sm:text-sm">
              No verified residences match your current budget and locality
              combination. Try adjusting your filters or connect directly with
              the principal broker for off-market opportunities.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={onClear}
                className="inline-flex items-center gap-1.5 rounded-sm border border-[#D4AF37]/40 px-5 py-2.5 text-xs font-semibold tracking-wide text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10 sm:text-sm"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear Filters
              </button>
              <a
                href={waLink(inquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#0A0A0C] transition-colors hover:bg-[#e6c84d] sm:text-sm"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Ask the Broker
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, i) => (
                <Reveal key={p.id} delay={i < INITIAL_COUNT ? 0 : 60}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>

            {canToggle && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={toggle}
                  aria-expanded={expanded}
                  className="inline-flex items-center gap-2 rounded-sm border border-[#D4AF37]/40 bg-white/[0.02] px-6 py-3 text-xs font-semibold tracking-wide text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] sm:text-sm"
                >
                  {expanded ? (
                    <>
                      Show Less
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show More Properties
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
