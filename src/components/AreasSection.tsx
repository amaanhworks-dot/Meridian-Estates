import { broker } from '@/broker.config';
import SectionReveal from '@/components/SectionReveal';
import { ArrowRightIcon } from '@/components/Icons';

interface AreasSectionProps {
  onSelectArea: (area: string) => void;
}

export default function AreasSection({ onSelectArea }: AreasSectionProps) {
  if (!broker.content.areasEnabled || broker.areas.length === 0) return null;

  const handleAreaClick = (areaName: string) => {
    const sectorMatch = areaName.match(/Sector\s+(\d+)/i);
    const filterValue = sectorMatch ? `Sector ${sectorMatch[1]}` : areaName;
    onSelectArea(filterValue);

    const target = document.querySelector('#properties');
    if (target) {
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="areas" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--accent-text-on-light)' }}>
            Locations
          </p>
          <h2 className="mt-3 font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-tight text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Areas We Serve
          </h2>
          <p className="mt-4 text-[15px] text-[#6B6B6B] leading-relaxed">
            Exploring premium residential localities across {broker.profile.areaLabel}.
          </p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {broker.areas.map((area, index) => (
            <SectionReveal key={area.name} delay={index * 80}>
              <button
                onClick={() => handleAreaClick(area.name)}
                className="group relative block w-full overflow-hidden rounded-sm text-left"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F0EDE7]">
                  <img
                    src={area.image}
                    alt={area.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/75 via-[#1A1A1A]/15 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-lg text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                    {area.name}
                  </h3>
                  <p className="mt-1 text-[12px] text-white/80 leading-snug line-clamp-2">
                    {area.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-white">
                    Explore Properties
                    <ArrowRightIcon size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
