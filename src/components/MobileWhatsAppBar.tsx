import { MessageCircle } from "lucide-react";
import { waLink, whatsappGenericMessage } from "@/config/site";

export function MobileWhatsAppBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D4AF37]/20 bg-[#0A0A0C]/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={waLink(whatsappGenericMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 px-4 py-3.5 text-center text-sm font-semibold tracking-wide text-white transition-colors"
        aria-label="Connect via WhatsApp with Principal Broker"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]">
          <MessageCircle className="h-4 w-4 text-white" />
        </span>
        <span className="leading-tight">
          Connect via WhatsApp with Principal Broker
        </span>
      </a>
    </div>
  );
}
