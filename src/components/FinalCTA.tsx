import { broker } from '@/broker.config';
import { genericWhatsAppUrl, phoneUrl } from '@/lib/contact';
import SectionReveal from '@/components/SectionReveal';
import { WhatsAppIcon, PhoneIcon } from '@/components/Icons';

export default function FinalCTA() {
  const whatsappUrl = genericWhatsAppUrl();
  const telUrl = phoneUrl();

  return (
    <section className="bg-[#22211F] py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center">
          <div className="mx-auto h-px w-12" style={{ backgroundColor: 'var(--accent)' }} />
          <h2 className="mt-6 font-serif text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-tight text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Your next home could be one conversation away.
          </h2>
          <p className="mt-5 text-[15px] text-white/70 leading-relaxed max-w-xl mx-auto">
            Share what you're looking for. Let's explore the right options together.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 min-h-[48px]"
                style={{ backgroundColor: 'var(--accent)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
              >
                <WhatsAppIcon size={18} />
                WhatsApp par baat karein
              </a>
            )}
            {telUrl && (
              <a
                href={telUrl}
                className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#1A1A1A] min-h-[48px]"
              >
                <PhoneIcon size={18} />
                Call karein
              </a>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
