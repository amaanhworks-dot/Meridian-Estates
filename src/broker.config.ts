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
    name: 'Ansh Chawla Real Estate',
    brokerName: 'Ansh Chawla',
    logoText: 'AC',
    tagline: 'Delhi NCR ke premium homes ka trusted property consultant',
    accentColor: '#C9A227',
  },

  contact: {
    whatsapp: '918595471115',
    phone: '+918595471115',
    email: 'hello@anshchawla.example',
    mapLink: 'https://maps.google.com/?q=Delhi+NCR',
    formEndpoint: '',
  },

  profile: {
    photo: '/pfp.jpeg',
    areaLabel: 'Delhi NCR',
    experienceYears: 8,
    reraNumber: '',
    areasServed: ['South Delhi', 'Gurugram', 'Noida', 'Dwarka'],
    aboutHeadline: 'Born into real estate. Chose to be honest about it.',
    aboutParagraph:
      'Main Ansh Chawla hoon. Delhi NCR mein residential property options explore karne mein buyers ki help karta hoon. Har buyer ki requirements alag hoti hain, isliye mera focus hai aapka budget, preferred location aur priorities samajhkar relevant options share karna. Your market. Your money. My word.',
    signature: 'Ansh Chawla',
  },

  metrics: {
    propertiesMarketed: 60,
    areasCovered: 4,
    experienceYears: 8,
  },

  hero: {
    eyebrow: 'PREMIUM RESIDENTIAL REAL ESTATE',
    headline: 'Find a home that feels like yours.',
    description:
      'Delhi NCR mein thoughtfully selected residential properties. Aapki requirements se shuru karte hain.',
    image: img(7031604, 1600),
    imageAlt: 'Modern luxury residential property in Delhi NCR',
    secondaryImage: img(34688219, 800),
  },

  properties: [
    {
      id: 'property-01',
      title: 'Contemporary Builder Floor',
      configuration: '4 BHK',
      location: 'Greater Kailash, South Delhi',
      price: '₹3.2 Cr',
      numericPrice: 32000000,
      areaSqft: 2200,
      floor: 'Upper floor',
      image: img(8134821, 800, 600),
      imageAlt: 'Contemporary two-story luxury home with paved driveway',
      description:
        'A spacious builder floor with contemporary finishes, large windows, and a thoughtfully planned layout.',
      featured: true,
      status: 'Sample listing',
    },
    {
      id: 'property-02',
      title: 'Premium Cottage Residence',
      configuration: '3 BHK',
      location: 'Golf Course Road, Gurugram',
      price: '₹2.4 Cr',
      numericPrice: 24000000,
      areaSqft: 1800,
      floor: 'Ground floor',
      image: img(7031406, 800, 600),
      imageAlt: 'Modern luxurious cottage house with stone and wooden facade',
      description:
        'Elegant cottage-style home featuring a blend of stone and wood exteriors with warm ambient lighting.',
      featured: true,
      status: 'Sample listing',
    },
    {
      id: 'property-03',
      title: 'Modern Villa with Pool',
      configuration: '5 BHK',
      location: 'Sector 150, Noida',
      price: '₹5.8 Cr',
      numericPrice: 58000000,
      areaSqft: 3200,
      floor: 'Independent',
      image: img(8134745, 800, 600),
      imageAlt: 'Modern luxury villa with swimming pool and garden',
      description:
        'Independent villa with private pool, landscaped garden, and expansive living areas designed for luxury living.',
      featured: true,
      status: 'Sample listing',
    },
    {
      id: 'property-04',
      title: 'Illuminated Luxury Villa',
      configuration: '4 BHK',
      location: 'Vasant Vihar, South Delhi',
      price: '₹3.9 Cr',
      numericPrice: 39000000,
      areaSqft: 2400,
      floor: 'Independent',
      image: img(7031407, 800, 600),
      imageAlt: 'Illuminated luxury two-storey villa with panoramic windows',
      description:
        'Two-storey villa with panoramic windows and modern architecture, beautifully illuminated in the evening.',
      featured: false,
      status: 'Sample listing',
    },
    {
      id: 'property-05',
      title: 'Elegant Brick Residence',
      configuration: '3 BHK',
      location: 'Dwarka Sector 12, Delhi',
      price: '₹2.1 Cr',
      numericPrice: 21000000,
      areaSqft: 1600,
      floor: 'Lower floor',
      image: img(7587470, 800, 600),
      imageAlt: 'Elegant brick house with lush garden and driveway',
      description:
        'Charming brick-front residence with a well-maintained garden and classic architectural appeal.',
      featured: false,
      status: 'Sample listing',
    },
    {
      id: 'property-06',
      title: 'Glass Balcony Penthouse',
      configuration: '5 BHK',
      location: 'Sector 42, Gurugram',
      price: '₹6.5 Cr',
      numericPrice: 65000000,
      areaSqft: 3500,
      floor: 'Top floor',
      image: img(323780, 800, 600),
      imageAlt: 'Contemporary luxury home with glass balconies',
      description:
        'Penthouse-level residence with striking glass balconies and contemporary architectural design.',
      featured: false,
      status: 'Sample listing',
    },
  ],

  areas: [
    {
      name: 'South Delhi',
      description: 'Spacious residential homes with established infrastructure.',
      image: img(36573397, 800, 600),
      imageAlt: 'Sunlit residential street with trees in India',
    },
    {
      name: 'Gurugram',
      description: 'Premium builder floors in a well-connected locality.',
      image: img(7823001, 800, 600),
      imageAlt: 'Serene neighborhood street with palm trees in India',
    },
    {
      name: 'Noida',
      description: 'Independent houses and villas in a quiet setting.',
      image: img(36454356, 800, 600),
      imageAlt: 'Quiet suburban street in India surrounded by trees',
    },
    {
      name: 'Dwarka',
      description: 'Affordable premium options near daily conveniences.',
      image: img(6875971, 800, 600),
      imageAlt: 'Aerial view of apartment courtyard with gardens in Hyderabad',
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
        'Property suggestions based on your budget, preferred locality, and specific requirements.',
    },
    {
      title: 'Property Visits',
      description:
        'Coordinated viewings for properties that match your preferences and timeline.',
    },
    {
      title: 'Clear Communication',
      description:
        'Transparent details about listed properties and the right questions to ask before proceeding.',
    },
  ],

  seo: {
    title: 'Ansh Chawla | Premium Properties in Delhi NCR',
    description:
      'Explore sample luxury builder floors and premium residential properties in Delhi NCR. Personalized property shortlisting and guided visits.',
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