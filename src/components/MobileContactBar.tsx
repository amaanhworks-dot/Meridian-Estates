import { useEffect, useState } from 'react';
import { broker } from '@/broker.config';
import { genericWhatsAppUrl, phoneUrl } from '@/lib/contact';
import { WhatsAppIcon, PhoneIcon } from '@/components/Icons';

export default function MobileContactBar() {
  const [visible, setVisible] = useState(false);
  const whatsappUrl = genericWhatsAppUrl();
  const telUrl = phoneUrl();

  useEffect(() => {
    const hero = document.querySelector('#home');
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!whatsappUrl && !telUrl) return null;

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[#E8E3DA] bg-white transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      role="complementary"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-px bg-[#E8E3DA]">
        {telUrl && (
          <a
            href={telUrl}
            className="flex items-center justify-center gap-2 bg-white py-3.5 text-[14px] font-semibold text-[#1A1A1A] min-h-[48px] active:bg-gray-50 transition-colors"
          >
            <PhoneIcon size={18} />
            Call
          </a>
        )}
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 text-[14px] font-semibold text-white min-h-[48px] active:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
