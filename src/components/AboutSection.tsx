import { broker } from '@/broker.config';
import { genericWhatsAppUrl } from '@/lib/contact';
import SectionReveal from '@/components/SectionReveal';
import { WhatsAppIcon, LocationIcon } from '@/components/Icons';

export default function AboutSection() {
  if (!broker.content.aboutEnabled) return null;

  const whatsappUrl = genericWhatsAppUrl();

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-[#FAF8F4] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <SectionReveal className="order-1 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm bg-[#F0EDE7] max-w-md mx-auto lg:max-w-none">
                <img
                  src={broker.profile.photo}
                  alt={`${broker.brand.brokerName} — sample portrait`}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center top' }}
                  loading="lazy"
                />
              </div>
              {broker.demoMode && (
                <div className="absolute bottom-3 left-3 rounded bg-white/95 px-3 py-1.5 text-[10px] font-medium text-[#6B6B6B] backdrop-blur-sm">
                  Sample portrait — replace with broker's photo
                </div>
              )}
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal className="order-2 lg:order-2" delay={100}>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--accent-text-on-light)' }}>
              About
            </p>
            <h2 className="mt-3 font-serif text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] leading-tight text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              {broker.profile.aboutHeadline}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#6B6B6B]">
              {broker.profile.aboutParagraph}
            </p>

            {/* Areas served */}
            {broker.profile.areasServed.length > 0 && (
              <div className="mt-6">
                <p className="text-[12px] font-semibold uppercase tracking-wide text-[#1A1A1A]">
                  Areas Served
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {broker.profile.areasServed.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 rounded border border-[#E8E3DA] bg-white px-3 py-1.5 text-[12px] text-[#6B6B6B]"
                    >
                      <LocationIcon size={12} style={{ color: 'var(--accent-text-on-light)' }} />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Signature */}
            {broker.profile.signature && (
              <p className="mt-6 font-serif text-xl text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                — {broker.profile.signature}
              </p>
            )}

            {/* CTA */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-[13px] font-semibold text-white transition-all duration-200 min-h-[44px]"
                  style={{ backgroundColor: 'var(--accent)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
                >
                  <WhatsAppIcon size={16} />
                  Let's Talk About Your Requirements
                </a>
              )}
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center rounded border border-[#1A1A1A] px-5 py-3 text-[13px] font-semibold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 min-h-[44px]"
              >
                Send Enquiry
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
