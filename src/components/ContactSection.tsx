import { broker } from '@/broker.config';
import { genericWhatsAppUrl, phoneUrl, mapUrl } from '@/lib/contact';
import SectionReveal from '@/components/SectionReveal';
import ContactForm from '@/components/ContactForm';
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from '@/components/Icons';

export default function ContactSection() {
  const whatsappUrl = genericWhatsAppUrl();
  const telUrl = phoneUrl();
  const mapsLink = mapUrl();

  return (
    <section id="contact" className="bg-[#FAF8F4] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--accent-text-on-light)' }}>
            Contact
          </p>
          <h2 className="mt-3 font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-tight text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chaliye, aapka next home explore karte hain.
          </h2>
          <p className="mt-4 text-[15px] text-[#6B6B6B] leading-relaxed">
            Apni requirements share karein. Hum relevant property options par baat karenge.
          </p>
        </SectionReveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <SectionReveal>
            {broker.content.contactFormEnabled ? (
              <ContactForm />
            ) : (
              <div className="rounded-sm border border-[#E8E3DA] bg-white p-8 text-center">
                <p className="text-[#6B6B6B]">Please contact us directly using the details on the right.</p>
              </div>
            )}
          </SectionReveal>

          {/* Contact info */}
          <SectionReveal delay={100} className="flex flex-col gap-6">
            {/* Quick actions */}
            <div className="rounded-sm border border-[#E8E3DA] bg-white p-6 sm:p-8">
              <h3 className="font-serif text-xl text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Direct Contact
              </h3>
              <p className="mt-2 text-[13px] text-[#6B6B6B] leading-relaxed">
                Reach out directly — we're here to help you find the right property.
              </p>

              <div className="mt-5 space-y-3">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-sm border border-[#E8E3DA] px-4 py-3.5 transition-all duration-200 hover:border-[#1A1A1A] min-h-[48px]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full text-white shrink-0" style={{ backgroundColor: 'var(--accent)' }}>
                      <WhatsAppIcon size={18} />
                    </span>
                    <div>
                      <div className="text-[12px] text-[#9B9B9B]">WhatsApp</div>
                      <div className="text-[14px] font-medium text-[#1A1A1A]">Chat now</div>
                    </div>
                  </a>
                )}

                {telUrl && (
                  <a
                    href={telUrl}
                    className="flex items-center gap-3 rounded-sm border border-[#E8E3DA] px-4 py-3.5 transition-all duration-200 hover:border-[#1A1A1A] min-h-[48px]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1A1A] text-white shrink-0">
                      <PhoneIcon size={18} />
                    </span>
                    <div>
                      <div className="text-[12px] text-[#9B9B9B]">Phone</div>
                      <div className="text-[14px] font-medium text-[#1A1A1A]">{broker.contact.phone}</div>
                    </div>
                  </a>
                )}

                {mapsLink && (
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-sm border border-[#E8E3DA] px-4 py-3.5 transition-all duration-200 hover:border-[#1A1A1A] min-h-[48px]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B6B6B] text-white shrink-0">
                      <MapPinIcon size={18} />
                    </span>
                    <div>
                      <div className="text-[12px] text-[#9B9B9B]">Location</div>
                      <div className="text-[14px] font-medium text-[#1A1A1A]">{broker.profile.areaLabel}</div>
                    </div>
                  </a>
                )}
              </div>

              {broker.profile.reraNumber && (
                <div className="mt-5 border-t border-[#E8E3DA] pt-4">
                  <p className="text-[11px] text-[#9B9B9B]">
                    RERA: {broker.profile.reraNumber}
                  </p>
                </div>
              )}
            </div>

            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#F0EDE7]">
              <img
                src={broker.hero.image}
                alt="Premium residential property"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
