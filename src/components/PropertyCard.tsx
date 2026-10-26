import { MessageCircle } from "lucide-react";
import { waLink, type Property } from "@/config/site";

function inquiryMessage(p: Property): string {
  return (
    `Hi, I am interested in the following property:\n` +
    `• ${p.title}\n` +
    `• Location: ${p.locationBadge}\n` +
    `• Price: ${p.price}\n` +
    `Request: ${p.ctaLabel}`
  );
}

export function PropertyCard({ property }: { property: Property }) {
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#141418] transition-colors duration-300 hover:border-[#D4AF37]/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.imageAlt}
          loading="lazy"
          className={`h-full w-full object-cover ${
            isTouch ? "" : "transition-transform duration-700 group-hover:scale-[1.02]"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-[#D4AF37]/40 bg-[#0A0A0C]/80 px-3 py-1 text-[10px] font-medium tracking-wide text-[#D4AF37] backdrop-blur-sm sm:text-[11px]">
          {property.locationBadge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-playfair text-lg leading-snug text-white sm:text-xl">
          {property.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-white/55 sm:text-sm">
          {property.specs}
        </p>

        <div className="mt-4 border-t border-white/10 pt-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
            Price
          </p>
          <p className="mt-1 font-playfair text-xl text-[#D4AF37] sm:text-2xl">
            {property.price}
          </p>
        </div>

        <a
          href={waLink(inquiryMessage(property))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm border border-[#D4AF37]/40 bg-[#D4AF37]/5 px-5 py-3 text-xs font-semibold tracking-wide text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141418] sm:text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          {property.ctaLabel}
        </a>
      </div>
    </article>
  );
}
