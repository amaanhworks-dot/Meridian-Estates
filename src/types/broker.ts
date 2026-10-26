export interface BrandConfig {
  name: string;
  brokerName: string;
  logoText: string;
  tagline: string;
  accentColor: string;
}

export interface ContactConfig {
  whatsapp: string;
  phone: string;
  email: string;
  mapLink: string;
  formEndpoint: string;
}

export interface ProfileConfig {
  photo: string;
  areaLabel: string;
  experienceYears: number;
  reraNumber: string;
  areasServed: string[];
  aboutHeadline: string;
  aboutParagraph: string;
  signature: string;
}

export interface MetricsConfig {
  propertiesMarketed: number;
  areasCovered: number;
  experienceYears: number;
}

export interface HeroConfig {
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  secondaryImage: string;
}

export interface PropertyConfig {
  id: string;
  title: string;
  configuration: string;
  location: string;
  price: string;
  numericPrice: number;
  areaSqft: number;
  floor: string;
  image: string;
  imageAlt: string;
  description: string;
  featured: boolean;
  status: string;
}

export interface AreaConfig {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialConfig {
  quote: string;
  name: string;
  detail: string;
}

export interface ServiceConfig {
  title: string;
  description: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  ogImage: string;
}

export interface ContentFlags {
  aboutEnabled: boolean;
  metricsEnabled: boolean;
  areasEnabled: boolean;
  servicesEnabled: boolean;
  testimonialsEnabled: boolean;
  contactFormEnabled: boolean;
}

export interface BrokerConfig {
  demoMode: boolean;
  brand: BrandConfig;
  contact: ContactConfig;
  profile: ProfileConfig;
  metrics: MetricsConfig;
  hero: HeroConfig;
  properties: PropertyConfig[];
  areas: AreaConfig[];
  testimonials: TestimonialConfig[];
  services: ServiceConfig[];
  seo: SeoConfig;
  content: ContentFlags;
  disclaimer: string;
}
