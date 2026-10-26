import { broker } from '@/broker.config';
import SectionReveal from '@/components/SectionReveal';

export default function TestimonialsSection() {
  if (!broker.content.testimonialsEnabled || broker.testimonials.length === 0) return null;

  return (
    <section className="bg-[#22211F] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--accent)' }}>
            Client Feedback
          </p>
        </SectionReveal>

        <div className="mt-10 space-y-12">
          {broker.testimonials.map((testimonial, index) => (
            <SectionReveal key={index} delay={index * 100}>
              <blockquote className="text-center">
                <p
                  className="font-serif text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] leading-[1.35] text-white italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 inline-block h-px w-12" style={{ backgroundColor: 'var(--accent)' }} />
                <div className="mt-4">
                  <div className="text-[14px] font-semibold text-white">{testimonial.name}</div>
                  {testimonial.detail && (
                    <div className="mt-1 text-[12px] text-white/60">{testimonial.detail}</div>
                  )}
                </div>
              </blockquote>
            </SectionReveal>
          ))}
        </div>

        {broker.demoMode && (
          <p className="mt-10 text-center text-[11px] text-white/40 italic">
            Illustrative testimonials — replace with verified client feedback before publishing.
          </p>
        )}
      </div>
    </section>
  );
}
