// Centralized configuration for branding, contact, inventory, and filters.
// Replace values here to rebrand the entire experience.

export const site = {
  brand: "STERLING CREST REALTY",
  tagline: "Private Client Network",
  // Broker WhatsApp number in international format without "+" or spaces.
  // Leave empty to use the generic WhatsApp entry point (wa.me without a number).
  whatsappNumber: "13105550142",
};

// Build a WhatsApp link. If no number is configured, falls back to wa.me with
// only the prefilled text (generic entry point).
export function waLink(message: string): string {
  const encoded = encodeURIComponent(message);
  if (site.whatsappNumber) {
    return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}

export type BudgetBand = "3-5" | "5-10" | "10+";
export type LocalityKey =
  | "beverly-hills"
  | "bel-air"
  | "brentwood"
  | "malibu";
export type TimelineKey = "immediate" | "next-3-months" | "investment";

export interface BudgetOption {
  key: BudgetBand;
  label: string;
  min: number; // million USD lower bound (inclusive)
  max: number; // million USD upper bound (exclusive); Infinity for "10+"
}

export const budgetOptions: BudgetOption[] = [
  { key: "3-5", label: "$3M – $5M", min: 3, max: 5 },
  { key: "5-10", label: "$5M – $10M", min: 5, max: 10 },
  { key: "10+", label: "$10M+", min: 10, max: Infinity },
];

export const localityOptions: { key: LocalityKey; label: string }[] = [
  { key: "beverly-hills", label: "Beverly Hills" },
  { key: "bel-air", label: "Bel Air" },
  { key: "brentwood", label: "Brentwood" },
  { key: "malibu", label: "Malibu" },
];

export const timelineOptions: { key: TimelineKey; label: string }[] = [
  { key: "immediate", label: "Immediate (30 Days)" },
  { key: "next-3-months", label: "Next 3 Months" },
  { key: "investment", label: "Investment" },
];

export interface Property {
  id: string;
  image: string;
  imageAlt: string;
  locationBadge: string;
  title: string;
  specs: string;
  price: string;
  priceMin: number; // million USD — used for budget-band classification
  locality: LocalityKey;
  ctaLabel: string;
}

export const properties: Property[] = [
  {
    id: "p1",
    image:
      "https://images.pexels.com/photos/7031712/pexels-photo-7031712.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Ultra-modern luxury high-rise penthouse living room with floor-to-ceiling windows",
    locationBadge: "Trousdale Estates | Beverly Hills",
    title: "5 BD Architectural Estate (6,200 sq.ft.)",
    specs: "Private Motor Court • City-to-Ocean Views • Italian Marble Finish",
    price: "$8.40M",
    priceMin: 8.4,
    locality: "beverly-hills",
    ctaLabel: "Inquire Private Showing",
  },
  {
    id: "p2",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Contemporary architectural estate exterior with glass balconies",
    locationBadge: "Bel Air | Gated Compound",
    title: "Exclusive Gated Bel Air Modern",
    specs: "Home Theater • Wine Cellar • Resort Grounds",
    price: "$12.90M",
    priceMin: 12.9,
    locality: "bel-air",
    ctaLabel: "Request Floor Plan & PDF",
  },
  {
    id: "p3",
    image:
      "https://images.pexels.com/photos/16437593/pexels-photo-16437593.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Luxury duplex villa overlooking a city skyline at night",
    locationBadge: "Brentwood Park",
    title: "Brentwood Park Villa with Pool",
    specs: "Private Pool • Smart Home • 24/7 Security",
    price: "$6.75M",
    priceMin: 6.75,
    locality: "brentwood",
    ctaLabel: "Check Availability",
  },
  {
    id: "p4",
    image:
      "https://images.pexels.com/photos/7045918/pexels-photo-7045918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Spacious private terrace of a modern luxury home with ocean views",
    locationBadge: "Point Dume | Malibu",
    title: "Ocean-View Malibu Residence",
    specs: "Bluff-Edge Pool • Deeded Beach Access • Pacific Views",
    price: "$9.20M",
    priceMin: 9.2,
    locality: "malibu",
    ctaLabel: "Arrange Private Viewing",
  },
  {
    id: "p5",
    image:
      "https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Facade of a classic luxury traditional home with manicured lawn",
    locationBadge: "Hancock Park | Prime Location",
    title: "Restored 1920s Traditional",
    specs: "Guest House • Original Millwork • Sycamore-Shaded Lot",
    price: "$5.90M",
    priceMin: 5.9,
    locality: "beverly-hills",
    ctaLabel: "Schedule a Visit",
  },
  {
    id: "p6",
    image:
      "https://images.pexels.com/photos/32241750/pexels-photo-32241750.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Sleek modern high-rise residence with glass facade and balconies against a clear sky",
    locationBadge: "West Hollywood | Boutique Building",
    title: "Full-Floor Penthouse",
    specs: "Wrap-Around Terraces • City Views • Direct Elevator Access",
    price: "$4.65M",
    priceMin: 4.65,
    locality: "beverly-hills",
    ctaLabel: "Express Interest",
  },
];

export const advisor = {
  name: "James Whitmore",
  bio: "Specializing in architecturally significant residential transactions across Beverly Hills, Bel Air, Brentwood, and Malibu for over 12 years.",
  portrait:
    "https://images.pexels.com/photos/15200105/pexels-photo-15200105.jpeg?auto=compress&cs=tinysrgb&w=600",
  portraitAlt: "Portrait of the principal broker in a tailored suit",
  trustIndicators: [
    "100% Confidential Deals",
    "Direct Seller Price Guarantee",
    "Verified Documentation",
  ],
};

export const heroImage =
  "https://images.pexels.com/photos/7377669/pexels-photo-7377669.jpeg?auto=compress&cs=tinysrgb&w=1920";

export const whatsappGenericMessage =
  "Hi, I am interested in viewing your luxury properties in Beverly Hills and Westside LA";

export const shortlistMessage =
  "Hi, I'd like a private shortlist of luxury properties in Beverly Hills and Westside LA. Please help me find residences matching my requirements.";

export const footerDescriptor = "Private Luxury Real Estate Advisory | Beverly Hills & Westside LA";
export const footerDisclaimer =
  "Property details, prices, and availability are subject to confirmation. Listings are illustrative until independently verified.";
