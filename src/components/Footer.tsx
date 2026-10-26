import { MessageCircle } from "lucide-react";
import { site, waLink, whatsappGenericMessage, footerDescriptor, footerDisclaimer } from "@/config/site";

const quickLinks = [
  { id: "top", label: "Home" },
  { id: "lead-filter", label: "Find Properties" },
  { id: "portfolio", label: "Listings" },
  { id: "advisor", label: "Principal Advisor" },
  { id: "shortlist", label: "Private Shortlist" },
];

function scrollToSection(e: React.MouseEvent, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0A0A0C] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Branding */}
          <div className="sm:max-w-xs">
            <p className="font-cinzel text-sm uppercase tracking-[0.25em] text-white">
              {site.brand}
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-white/45">
              {footerDescriptor}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]/70">
              Explore
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-xs text-white/55 transition-colors hover:text-[#D4AF37] focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* WhatsApp contact */}
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]/70">
              Connect
            </p>
            <a
              href={waLink(whatsappGenericMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-[#D4AF37] focus:outline-none focus-visible:underline"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/15">
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              </span>
              WhatsApp Principal Broker
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-[11px] leading-relaxed text-white/35">
            {footerDisclaimer}
          </p>
          <p className="mt-3 text-[11px] text-white/30">
            © {year} {site.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
