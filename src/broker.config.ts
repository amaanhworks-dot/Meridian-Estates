import type { BrokerConfig } from '@/types/broker';

const img = (id: number, w: number, h?: number) => {
  const params = h
    ? `auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`
    : `auto=compress&cs=tinysrgb&w=${w}`;
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?${params}`;
};

export const broker: BrokerConfig = {
  demoMode: true,

  brand: {
    name: 'Sterling Crest Realty',
    brokerName: 'James Whitmore',
    logoText: 'SC',
    tagline: 'Beverly Hills & Westside luxury property advisory',
    accentColor: '#C9A227',
  },

  contact: {
    whatsapp: '13105550142',
    phone: '+13105550142',
    email: 'james@sterlingcrest.example',
    mapLink: 'https://maps.google.com/?q=Beverly+Hills+CA',
    formEndpoint: '',
  },

  profile: {
    photo: '/pfp.jpeg',
    areaLabel: 'Beverly Hills & Westside LA',
    experienceYears: 12,
    reraNumber: '',
    areasServed: ['Beverly Hills', 'Bel Air', 'Brentwood', 'Malibu'],
    aboutHeadline: 'Westside LA luxury, handled with discretion.',
    aboutParagraph:
      'I represent buyers and sellers of architecturally significant homes across Beverly Hills, Bel Air, Brentwood, and Malibu. My approach is simple: understand the lifestyle first, then the square footage. Off-market access, quiet negotiations, and a shortlist that respects your time. Your market. Your money. My word.',
    signature: 'James Whitmore',
  },

  metrics: {
    propertiesMarketed: 84,
    areasCovered: 4,
    experienceYears: 12,
  },

  hero: {
    eyebrow: 'BEVERLY HILLS · PRIVATE LUXURY LISTINGS',
    headline: 'Find a home that feels like yours.',
    description:
      'Thoughtfully selected residences across Beverly Hills, Bel Air, Brentwood, and Malibu. We start with your requirements.',
    image: img(7031604, 1600),
    imageAlt: 'Modern luxury residence in Beverly Hills, California',
    secondaryImage: img(34688219, 800),
  },

  properties: [
    {
      id: 'property-01',
      title: 'Contemporary Architectural Estate',
      configuration: '5 BD',
      location: 'Trousdale Estates, Beverly Hills',
      price: '$8.4M',
      numericPrice: 8400000,
      areaSqft: 6200,
      floor: 'Two-story',
      image: img(8134821, 800, 600),
      imageAlt: 'Contemporary luxury estate with paved motor court in Beverly Hills',
      description:
        'A single-level architectural residence with walls of glass, a sunken living room, and panoramic city-to-ocean views.',
      featured: true,
      status: 'Sample listing',
    },
    {
      id: 'property-02',
      title: 'Gated Bel Air Modern',
      configuration: '6 BD',
      location: 'Bel Air, Los Angeles',
      price: '$12.9M',
      numericPrice: 12900000,
      areaSqft: 8100,
      floor: 'Two-story',
      image: img(7031406, 800, 600),
      imageAlt: 'Modern Bel Air estate with stone and wood facade',
      description:
        'Newly built gated estate with a limestone facade, home theater, wine cellar, and resort-style grounds.',
      featured: true,
      status: 'Sample listing',
    },
    {
      id: 'property-03',
      title: 'Brentwood Park Villa with Pool',
      configuration: '5 BD',
      location: 'Brentwood Park, Los Angeles',
      price: '$6.75M',
      numericPrice: 6750000,
      areaSqft: 5400,
      floor: 'Two-story',
      image: img(8134745, 800, 600),
      imageAlt: 'Modern luxury villa with pool and landscaped garden in Brentwood',
      description:
        'Warm contemporary villa with a private pool, hedged gardens, and an open-plan kitchen that opens to a covered loggia.',
      featured: true,
      status: 'Sample listing',
    },
    {
      id: 'property-04',
      title: 'Malibu Ocean-View Residence',
      configuration: '4 BD',
      location: 'Point Dume, Malibu',
      price: '$9.2M',
      numericPrice: 9200000,
      areaSqft: 4700,
      floor: 'Two-story',
      image: img(7031407, 800, 600),
      imageAlt: 'Illuminated ocean-view residence in Malibu',
      description:
        'Glass-wrapped residence with unobstructed Pacific views, a bluff-edge pool, and deeded beach access.',
      featured: false,
      status: 'Sample listing',
    },
    {
      id: 'property-05',
      title: 'Classic Hancock Park Traditional',
      configuration: '5 BD',
      location: 'Hancock Park, Los Angeles',
      price: '$5.9M',
      numericPrice: 5900000,
      areaSqft: 4900,
      floor: 'Two-story',
      image: img(7587470, 800, 600),
      imageAlt: 'Classic brick traditional home with garden in Hancock Park',
      description:
        'A meticulously restored 1920s traditional with original millwork, a guest house, and a mature sycamore-shaded lot.',
      featured: false,
      status: 'Sample listing',
    },
    {
      id: 'property-06',
      title: 'West Hollywood Penthouse',
      configuration: '3 BD',
      location: 'West Hollywood, Los Angeles',
      price: '$4.65M',
      numericPrice: 4650000,
      areaSqft: 3100,
      floor: 'Top floor',
      image: img(323780, 800, 600),
      imageAlt: 'Contemporary West Hollywood penthouse with glass balconies',
      description:
        'Full-floor penthouse with wrap-around terraces, city views, and direct elevator access in a boutique building.',
      featured: false,
      status: 'Sample listing',
    },
  ],

  areas: [
    {
      name: 'Beverly Hills',
      description: 'Architecturally significant estates and quiet, tree-lined streets.',
      image: img(36573397, 800, 600),
      imageAlt: 'Tree-lined residential street in Beverly Hills',
    },
    {
      name: 'Bel Air',
      description: 'Gated compounds and view properties above the city.',
      image: img(7823001, 800, 600),
      imageAlt: 'Serene hillside street with palm trees in Bel Air',
    },
    {
      name: 'Brentwood',
      description: 'Family-oriented Westside homes near the Brentwood Country Mart.',
      image: img(36454356, 800, 600),
      imageAlt: 'Quiet suburban street in Brentwood surrounded by trees',
    },
    {
      name: 'Malibu',
      description: 'Coastal residences with ocean access and bluff-front views.',
      image: img(6875971, 800, 600),
      imageAlt: 'Aerial view of coastal residences in Malibu',
    },
  ],

  testimonials: [
    {
      quote:
        'Demo testimonial — replace with verified feedback from a real client before publishing.',
      name: 'Sample Client',
      detail: 'Illustrative example',
    },
  ],

  services: [
    {
      title: 'Personalized Shortlisting',
      description:
        'Property suggestions based on your budget, preferred neighborhood, and specific requirements.',
    },
    {
      title: 'Private Showings',
      description:
        'Coordinated, discreet viewings for properties that match your preferences and timeline.',
    },
    {
      title: 'Clear Communication',
      description:
        'Transparent details about listed properties and the right questions to ask before proceeding.',
    },
  ],

  seo: {
    title: 'Sterling Crest Realty | Luxury Homes in Beverly Hills & Westside LA',
    description:
      'Explore sample luxury estates and premium residential properties across Beverly Hills, Bel Air, Brentwood, and Malibu. Personalized property shortlisting and guided private showings.',
    ogImage: img(7031604, 1200, 630),
  },

  content: {
    aboutEnabled: true,
    metricsEnabled: true,
    areasEnabled: true,
    servicesEnabled: true,
    testimonialsEnabled: true,
    contactFormEnabled: true,
  },

  disclaimer:
    'Demonstration website. Property descriptions, prices, images, statistics, testimonials, and credentials are illustrative and must be verified before publication.',
};
