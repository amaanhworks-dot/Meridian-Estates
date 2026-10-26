import { useState, useMemo } from 'react';
import { broker } from '@/broker.config';
import PropertyCard from '@/components/PropertyCard';
import SectionReveal from '@/components/SectionReveal';

interface PropertyGridProps {
  selectedArea: string | null;
  onAreaChange: (area: string | null) => void;
}

export default function PropertyGrid({ selectedArea, onAreaChange }: PropertyGridProps) {
  const [showAll, setShowAll] = useState(false);

  const areas = useMemo(() => {
    const set = new Set(broker.properties.map((p) => p.location.split(',')[0].trim()));
    return Array.from(set);
  }, []);

  const filteredProperties = useMemo(() => {
    if (!selectedArea) return broker.properties;
    return broker.properties.filter((p) =>
      p.location.toLowerCase().includes(selectedArea.toLowerCase())
    );
  }, [selectedArea]);

  const visibleProperties = showAll ? filteredProperties : filteredProperties.slice(0, 6);

  if (broker.properties.length === 0) {
    return (
      <section id="properties" className="bg-[#FAF8F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#6B6B6B]">No sample properties available at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="properties" className="bg-[#FAF8F4] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionReveal className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--accent-text-on-light)' }}>
            Featured Listings
          </p>
          <h2 className="mt-3 font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-tight text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Explore Exceptional Homes
          </h2>
          <p className="mt-4 text-[15px] text-[#6B6B6B] leading-relaxed">
            Selected residential properties across Rohini and nearby localities.
          </p>
        </SectionReveal>

        {/* Area filter */}
        {areas.length > 1 && (
          <SectionReveal className="mt-8 flex flex-wrap items-center justify-center gap-2" delay={100}>
            <button
              onClick={() => onAreaChange(null)}
              className={`rounded-full px-4 py-2 text-[12px] font-medium transition-all duration-200 ${
                !selectedArea
                  ? 'text-white'
                  : 'border border-[#E8E3DA] text-[#6B6B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A] bg-white'
              }`}
              style={!selectedArea ? { backgroundColor: 'var(--accent)' } : undefined}
            >
              All Properties
            </button>
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => onAreaChange(area)}
                className={`rounded-full px-4 py-2 text-[12px] font-medium transition-all duration-200 ${
                  selectedArea === area
                    ? 'text-white'
                    : 'border border-[#E8E3DA] text-[#6B6B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A] bg-white'
                }`}
                style={selectedArea === area ? { backgroundColor: 'var(--accent)' } : undefined}
              >
                {area}
              </button>
            ))}
          </SectionReveal>
        )}

        {/* Grid */}
        {visibleProperties.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleProperties.map((property, index) => (
              <SectionReveal key={property.id} delay={index * 80}>
                <PropertyCard property={property} index={index} />
              </SectionReveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-[#6B6B6B] mb-4">No properties found in {selectedArea}.</p>
            <button
              onClick={() => onAreaChange(null)}
              className="inline-flex items-center justify-center rounded border border-[#1A1A1A] px-5 py-2.5 text-[13px] font-semibold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
            >
              View All Properties
            </button>
          </div>
        )}

        {broker.demoMode && (
          <p className="mt-8 text-center text-[11px] text-[#9B9B9B] italic">
            Sample listings — prices and descriptions are illustrative and must be verified.
          </p>
        )}
      </div>
    </section>
  );
}
