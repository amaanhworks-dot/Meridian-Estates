import { MessageCircle } from "lucide-react";
import { waLink, shortlistMessage } from "@/config/site";

export function Shortlist() {
  return (
    <section
      id="shortlist"
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-sm border border-[#D4AF37]/30 bg-[#141418] p-6 text-center shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] sm:p-10">
          <p className="font-cinzel text-[11px] uppercase tracking-[0.3em] text-[#D4AF37]/80">
            PRIVATE CLIENT SERVICES
          </p>
          <h2 className="mt-4 font-playfair text-2xl text-white sm:text-3xl">
            Your Next Residence, Personally Curated.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            Tell us what you're looking for. Connect directly with our principal
            advisor for a personalized shortlist of luxury residences across
            South Delhi and Gurgaon.
          </p>

          <a
            href={waLink(shortlistMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0A0A0C] transition-all duration-300 hover:bg-[#e6c84d] hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141418] sm:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            Request Your Private Shortlist
          </a>
        </div>
      </div>
    </section>
  );
}
