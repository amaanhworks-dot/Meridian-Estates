// Centralized configuration for branding, contact, inventory, and filters.
// Replace values here to rebrand the entire experience.

export const site = {
  brand: "MERIDIAN ESTATES",
  tagline: "VIP Private Network",
  // Broker WhatsApp number in international format without "+" or spaces.
  // Leave empty to use the generic WhatsApp entry point (wa.me without a number).
  whatsappNumber: "",
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
  | "golf-course-rd"
  | "gk-vk"
  | "dlf-1-5"
  | "noida-expressway";
export type TimelineKey = "immediate" | "next-3-months" | "investment";

export interface BudgetOption {
  key: BudgetBand;
  label: string;
  min: number; // crore lower bound (inclusive)
  max: number; // crore upper bound (exclusive); Infinity for "10+"
}

export const budgetOptions: BudgetOption[] = [
  { key: "3-5", label: "₹3 Cr – ₹5 Cr", min: 3, max: 5 },
  { key: "5-10", label: "₹5 Cr – ₹10 Cr", min: 5, max: 10 },
  { key: "10+", label: "₹10 Cr+", min: 10, max: Infinity },
];

export const localityOptions: { key: LocalityKey; label: string }[] = [
  { key: "golf-course-rd", label: "Golf Course Rd" },
  { key: "gk-vk", label: "GK-1 & Vasant Kunj" },
  { key: "dlf-1-5", label: "DLF Phase 1–5" },
  { key: "noida-expressway", label: "Noida Expressway" },
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
  priceMin: number; // crore — used for budget-band classification
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
    locationBadge: "Golf Course Road | Sector 42",
    title: "4 BHK Ultra-Luxury Residence (4,200 sq.ft.)",
    specs: "Private Elevator • Golf View • Italian Marble Finish",
    price: "₹6.50 Cr Onwards",
    priceMin: 6.5,
    locality: "golf-course-rd",
    ctaLabel: "Inquire Private Site Visit",
  },
  {
    id: "p2",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Contemporary architectural builder-floor exterior with glass balconies",
    locationBadge: "Greater Kailash 1 | Park Facing",
    title: "Exclusive Independent Builder Floor",
    specs: "Stilt Parking • Terrace Garden • 100% Power Backup",
    price: "₹4.85 Cr",
    priceMin: 4.85,
    locality: "gk-vk",
    ctaLabel: "Request Floor Plan & PDF",
  },
  {
    id: "p3",
    image:
      "https://images.pexels.com/photos/16437593/pexels-photo-16437593.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Luxury duplex sky villa overlooking a city skyline at night",
    locationBadge: "DLF Phase 5",
    title: "Sky Villa & Duplex Suite",
    specs: "Private Pool • Smart Home Automation • 24/7 Security",
    price: "₹9.20 Cr",
    priceMin: 9.2,
    locality: "dlf-1-5",
    ctaLabel: "Check Availability",
  },
  {
    id: "p4",
    image:
      "https://images.pexels.com/photos/7045918/pexels-photo-7045918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Spacious private terrace of a modern luxury apartment with wooden flooring",
    locationBadge: "Vasant Kunj | Premium Enclave",
    title: "Luxury 4 BHK Builder Floor",
    specs: "Private Terrace • Modular Kitchen • Dedicated Parking",
    price: "₹5.25 Cr",
    priceMin: 5.25,
    locality: "gk-vk",
    ctaLabel: "Arrange Private Viewing",
  },
  {
    id: "p5",
    image:
      "https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Facade of a contemporary luxury independent villa with lawn and landscaped garden",
    locationBadge: "DLF Phase 1 | Prime Location",
    title: "Contemporary Luxury Independent Villa",
    specs: "Private Garden • Smart Home • Premium Finishes",
    price: "₹7.80 Cr",
    priceMin: 7.8,
    locality: "dlf-1-5",
    ctaLabel: "Schedule a Visit",
  },
  {
    id: "p6",
    image:
      "https://images.pexels.com/photos/32241750/pexels-photo-32241750.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Sleek modern high-rise residence with glass facade and balconies against a clear sky",
    locationBadge: "Golf Course Extension Road | Gurgaon",
    title: "Premium 4 BHK Sky Residence",
    specs: "Panoramic Views • Clubhouse Access • Dedicated Parking",
    price: "₹4.75 Cr",
    priceMin: 4.75,
    locality: "golf-course-rd",
    ctaLabel: "Express Interest",
  },
];

export const advisor = {
  name: "[Principal Broker Name]",
  bio: "Specializing in high-value residential transactions across South Delhi and Gurgaon for over 12+ years.",
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
  "Hi, I am interested in viewing your luxury properties in Delhi NCR";

export const shortlistMessage =
  "Hi, I'd like a private shortlist of luxury properties in Delhi NCR. Please help me find residences matching my requirements.";

export const footerDescriptor = "Private Luxury Real Estate Advisory | Delhi NCR";
export const footerDisclaimer =
  "Property details, prices, and availability are subject to confirmation. Listings are illustrative until independently verified.";
