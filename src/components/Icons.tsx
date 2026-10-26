interface IconProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

const baseProps = (size: number, className: string, style?: React.CSSProperties) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  style,
  'aria-hidden': true,
});

export function WhatsAppIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M3 21l3.6-1.2a9 9 0 0 0 3.4 1.2L3 21z" fill="currentColor" stroke="none" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5c.8 0 1.5-.2 2-.5l1.5 1c-.5.3-1.1.5-1.7.6c-3.6.6-6.9-2-7.3-5.6c-.1-.8 0-1.6.3-2.3l1.2 1.3c-.3.5-.5 1.2-.5 2z" fill="var(--bg-current, #fff)" stroke="none" />
    </svg>
  );
}

export function PhoneIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MenuIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function LocationIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ArrowRightIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ArrowDownIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

export function CheckIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function MaximizeIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

export function MapPinIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg {...baseProps(size, className, style)}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
