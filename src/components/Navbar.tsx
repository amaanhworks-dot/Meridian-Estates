import { useEffect, useState } from "react";
import { site } from "@/config/site";

const navLinks = [
  { id: "top", label: "Home" },
  { id: "lead-filter", label: "Find Properties" },
  { id: "portfolio", label: "Listings" },
  { id: "advisor", label: "Principal Advisor" },
  { id: "shortlist", label: "Private Shortlist" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view using IntersectionObserver.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#D4AF37]/15"
          : "bg-[#0A0A0C]/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16">
          <a
            href="#top"
            onClick={(e) => handleNav(e, "top")}
            className="font-cinzel shrink-0 tracking-[0.22em] text-xs text-white uppercase select-none sm:text-sm"
            aria-label={`${site.brand} — home`}
          >
            {site.brand}
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Section navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNav(e, link.id)}
                className={`rounded-sm px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  activeId === link.id
                    ? "text-[#D4AF37]"
                    : "text-white/60 hover:text-white"
                }`}
                aria-current={activeId === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/[0.03] px-2.5 py-1 sm:px-3 sm:py-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="hidden text-[11px] font-medium tracking-wide text-[#D4AF37] sm:inline">
              {site.tagline}
            </span>
          </div>
        </div>

        {/* Mobile / tablet horizontally scrollable nav */}
        <nav
          className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Section navigation"
          style={{ scrollbarWidth: "none" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNav(e, link.id)}
              className={`whitespace-nowrap rounded-sm px-3 py-1.5 text-[11px] font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                activeId === link.id
                  ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                  : "text-white/55 hover:text-white"
              }`}
              aria-current={activeId === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
