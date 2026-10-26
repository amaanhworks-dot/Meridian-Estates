import { broker } from '@/broker.config';
import SectionReveal from '@/components/SectionReveal';

export default function ServicesSection() {
  if (!broker.content.servicesEnabled || broker.services.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--accent-text-on-light)' }}>
            Working Approach
          </p>
          <h2 className="mt-3 font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-tight text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Why Work With {broker.brand.brokerName}
          </h2>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E3DA] border border-[#E8E3DA] rounded-sm overflow-hidden">
          {broker.services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 100} className="bg-white">
              <div className="p-8 lg:p-10 h-full flex flex-col">
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-serif text-2xl leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: 'var(--accent-text-on-light)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-[#E8E3DA]" style={{ backgroundColor: 'var(--accent)' }} />
                </div>
                <h3 className="mt-5 font-serif text-xl text-[#1A1A1A] leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#6B6B6B]">
                  {service.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
