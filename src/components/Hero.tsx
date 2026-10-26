import { ArrowDown } from "lucide-react";
import { heroImage } from "@/config/site";

export function Hero() {
  const scrollToFilter = () => {
    document
      .getElementById("lead-filter")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Contemporary luxury penthouse interior with floor-to-ceiling windows overlooking the city"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Dark gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/80 via-[#0A0A0C]/55 to-[#0A0A0C]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/80 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 font-cinzel text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#D4AF37]/90">
            Delhi NCR · Private Listings
          </p>
          <h1 className="font-playfair text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Off-Market Luxury Residences &amp; Prime Builder Floors
          </h1>
          <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
            Curated ₹3 Cr+ Portfolio for Discerning Buyers across South Delhi &amp;
            Gurgaon.
          </p>

          <button
            onClick={scrollToFilter}
            className="group mt-8 inline-flex items-center gap-2.5 rounded-sm bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold tracking-wide text-[#0A0A0C] transition-all duration-300 hover:bg-[#e6c84d] hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C]"
          >
            Explore Private Listings
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
