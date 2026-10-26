import { useMemo, useState } from "react";
import { Lock, RotateCcw, ArrowDown } from "lucide-react";
import {
  budgetOptions,
  localityOptions,
  timelineOptions,
  properties,
  type BudgetBand,
  type LocalityKey,
  type TimelineKey,
  type Property,
} from "@/config/site";

interface FilterState {
  budget: BudgetBand | null;
  locality: LocalityKey | null;
  timeline: TimelineKey | null;
}

const emptyState: FilterState = { budget: null, locality: null, timeline: null };

interface LeadFilterProps {
  onResults: (
    results: Property[],
    state: FilterState,
    inquiryMessage: string
  ) => void;
}

function budgetBandForPrice(priceMin: number): BudgetBand {
  if (priceMin >= 10) return "10+";
  if (priceMin >= 5) return "5-10";
  return "3-5";
}

export function LeadFilter({ onResults }: LeadFilterProps) {
  const [state, setState] = useState<FilterState>(emptyState);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const select = (key: keyof FilterState, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
    if (error) setError(null);
  };

  const reset = () => {
    setState(emptyState);
    setError(null);
    setSubmitted(false);
    onResults([], emptyState, "");
  };

  const submit = () => {
    if (!state.budget || !state.locality || !state.timeline) {
      setError("Please select one option in each step to continue.");
      return;
    }
    setError(null);
    setSubmitted(true);

    const matches = properties.filter(
      (p) =>
        budgetBandForPrice(p.priceMin) === state.budget &&
        p.locality === state.locality
    );

    const budgetLabel =
      budgetOptions.find((b) => b.key === state.budget)?.label ?? "";
    const localityLabel =
      localityOptions.find((l) => l.key === state.locality)?.label ?? "";
    const timelineLabel =
      timelineOptions.find((t) => t.key === state.timeline)?.label ?? "";

    const matchedTitles = matches.map((p) => p.title);
    const inquiryMessage =
      `Hi, I am exploring luxury properties in Delhi NCR.\n` +
      `Budget: ${budgetLabel}\n` +
      `Preferred Locality: ${localityLabel}\n` +
      `Buying Timeline: ${timelineLabel}\n` +
      (matchedTitles.length
        ? `Interested in: ${matchedTitles.join(", ")}`
        : "Please share matching verified inventory.");

    onResults(matches, state, inquiryMessage);

    setTimeout(() => {
      document
        .getElementById("portfolio")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const stepGroups = useMemo(
    () => [
      {
        key: "budget" as const,
        step: 1,
        heading: "Budget",
        options: budgetOptions.map((o) => ({ key: o.key, label: o.label })),
      },
      {
        key: "locality" as const,
        step: 2,
        heading: "Preferred Locality",
        options: localityOptions,
      },
      {
        key: "timeline" as const,
        step: 3,
        heading: "Buying Timeline",
        options: timelineOptions,
      },
    ],
    []
  );

  return (
    <section
      id="lead-filter"
      className="relative mx-auto -mt-24 max-w-4xl scroll-mt-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-sm border border-[#D4AF37]/30 bg-[#141418] p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] sm:p-8">
        <div className="mb-6 text-center">
          <h2 className="font-playfair text-2xl text-white sm:text-3xl">
            Find Matching Verified Inventory
          </h2>
          <p className="mt-2 text-xs text-white/50 sm:text-sm">
            Three quick selections to unlock curated, off-market residences.
          </p>
        </div>

        <div className="space-y-6">
          {stepGroups.map((group) => (
            <div key={group.key}>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[11px] font-semibold text-[#D4AF37]">
                  {group.step}
                </span>
                <span className="font-sans text-sm font-medium tracking-wide text-white/85">
                  {group.heading}
                </span>
              </div>
              <div
                className="flex flex-wrap gap-2.5"
                role="group"
                aria-label={group.heading}
              >
                {group.options.map((opt) => {
                  const selected = state[group.key] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => select(group.key, opt.key)}
                      aria-pressed={selected}
                      className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141418] sm:text-sm ${
                        selected
                          ? "bg-[#D4AF37] text-[#0A0A0C] shadow-[0_0_16px_rgba(212,175,55,0.3)]"
                          : "border border-white/15 bg-white/[0.02] text-white/70 hover:border-[#D4AF37]/50 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {error && (
          <p
            role="alert"
            className="mt-5 rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs text-red-300 sm:text-sm"
          >
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors hover:text-white focus:outline-none focus-visible:underline"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset filters
          </button>
          <button
            type="button"
            onClick={submit}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#D4AF37] px-6 py-3 text-sm font-semibold tracking-wide text-[#0A0A0C] transition-all duration-300 hover:bg-[#e6c84d] hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141418] sm:w-auto"
          >
            <Lock className="h-4 w-4" />
            Unlock Matching Properties
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>

        {submitted && !error && (
          <p className="mt-4 text-center text-xs text-[#D4AF37]/80">
            Showing verified inventory matching your criteria below.
          </p>
        )}
      </div>
    </section>
  );
}

