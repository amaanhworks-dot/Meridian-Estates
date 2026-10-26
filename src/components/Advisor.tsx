import { ShieldCheck, Handshake, FileCheck } from "lucide-react";
import { advisor } from "@/config/site";

const icons = [ShieldCheck, Handshake, FileCheck];

export function Advisor() {
  return (
    <section
      id="advisor"
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="font-playfair text-3xl text-white sm:text-4xl">
            Direct Access to Senior Advisory
          </h2>
        </div>

        <div className="overflow-hidden rounded-sm border border-white/10 bg-[#141418]">
          <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:gap-8 sm:p-8">
            <div className="shrink-0">
              <img
                src={advisor.portrait}
                alt={advisor.portraitAlt}
                loading="lazy"
                className="h-28 w-28 rounded-sm object-cover grayscale-[0.15] sm:h-32 sm:w-32"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-cinzel text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]/80">
                Principal Broker
              </p>
              <h3 className="mt-2 font-playfair text-xl text-white sm:text-2xl">
                {advisor.name}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                {advisor.bio}
              </p>
            </div>
          </div>

          <div className="grid gap-px border-t border-white/10 bg-white/5 sm:grid-cols-3">
            {advisor.trustIndicators.map((indicator, i) => {
              const Icon = icons[i] ?? ShieldCheck;
              return (
                <div
                  key={indicator}
                  className="flex items-center justify-center gap-2.5 bg-[#141418] px-4 py-5 text-center sm:py-6"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                  <span className="text-xs font-medium tracking-wide text-white/75 sm:text-sm">
                    {indicator}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
