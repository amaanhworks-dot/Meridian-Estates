import { broker } from '@/broker.config';
import SectionReveal from '@/components/SectionReveal';

interface MetricItem {
  value: number;
  label: string;
}

export default function TrustMetrics() {
  if (!broker.content.metricsEnabled) return null;

  const metrics: MetricItem[] = [
    { value: broker.metrics.experienceYears, label: 'Years of Experience' },
    { value: broker.metrics.propertiesMarketed, label: 'Properties Marketed' },
    { value: broker.metrics.areasCovered, label: 'Localities Covered' },
  ].filter((m) => m.value > 0);

  if (metrics.length === 0) return null;

  return (
    <section className="bg-white border-y border-[#E8E3DA] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="grid grid-cols-3 gap-4 lg:gap-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`text-center ${
                  index !== metrics.length - 1 ? 'lg:border-r lg:border-[#E8E3DA]' : ''
                } ${index === 0 ? 'border-r border-[#E8E3DA] lg:border-r' : ''} ${
                  index === 1 ? 'border-r border-[#E8E3DA] lg:border-r' : ''
                }`}
              >
                <div
                  className="font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-none text-[#1A1A1A]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {metric.value}
                  {metric.label.includes('Years') ? '+' : ''}
                </div>
                <div className="mt-2 text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-[#6B6B6B] tracking-wide">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
        {broker.demoMode && (
          <p className="mt-6 text-center text-[11px] text-[#9B9B9B] italic">
            Illustrative figures — replace with verified data before publishing.
          </p>
        )}
      </div>
    </section>
  );
}
