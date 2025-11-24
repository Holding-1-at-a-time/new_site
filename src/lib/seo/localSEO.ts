import type { Metadata } from 'next';
import type { Service } from '../../types';
import { businessInfo } from '../data';

// San Antonio focused location data
export const SAN_ANTONIO_LOCATION = {
  city: 'San Antonio',
  state: 'TX',
  fullName: 'San Antonio, Texas',
  region: 'South Texas',
  metroArea: 'San Antonio-New Braunfels',
  coordinates: {
    lat: 29.4241,
    lng: -98.4936
  },
  neighborhoods: [
    'Alamo Heights', 'Terrell Hills', 'Olmos Park', 'Leon Valley', 
    'Castle Hills', 'Balcones Heights', 'Stone Oak', 'Dominion',
    'Shavano Park', 'Hollywood Park', 'Windcrest', 'Downtown',
    'Southtown', 'Pearl District', 'The Rim', 'La Cantera'
  ],
  nearbyCities: [
    'New Braunfels', 'Seguin', 'Boerne', 'Helotes', 
    'Universal City', 'Schertz', 'Converse', 'Windcrest'
  ]
};

// Location-specific keyword optimization
export const generateSanAntonioKeywords = (serviceName: string): string[] => {
  const baseKeywords = [
    'San Antonio',
    'San Antonio TX',
    'San Antonio Texas',
    'SA',
    'Alamo City',
    'South Texas'
  ];

  const serviceKeywords = [
    serviceName.toLowerCase(),
    `${serviceName} San Antonio`,
    `${serviceName} San Antonio TX`,
    `${serviceName} San Antonio Texas`,
    `${serviceName} SA`,
    `${serviceName} Alamo City`,
    `${serviceName} South Texas`
  ];

  const localKeywords = [
    `car detailing ${baseKeywords[0]}`,
    `auto detailing ${baseKeywords[0]}`,
    `${serviceName} ${baseKeywords[1]}`,
    `${serviceName} ${baseKeywords[3]}`,
    `${serviceName} ${baseKeywords[4]}`,
    `${serviceName} ${baseKeywords[5]}`
  ];

  // Add neighborhood-specific keywords
  const neighborhoodKeywords = SAN_ANTONIO_LOCATION.neighborhoods.map(neighborhood => 
    `${serviceName} ${neighborhood} San Antonio`
  );

  return [
    ...baseKeywords,
    ...serviceKeywords,
    ...localKeywords,
    ...neighborhoodKeywords.slice(0, 5) // Limit to prevent keyword stuffing
  ];
};

// Dynamic meta tag generation for San Antonio
export const generateServiceMetadata = (service: Service): Metadata => {
  const locationKeywords = generateSanAntonioKeywords(service.name);
  const primaryKeyword = `${service.name.toLowerCase()} san antonio`;
  const secondaryKeyword = `car detailing san antonio`;
  
  const title = `${service.name} San Antonio TX | Professional Auto Detailing ${businessInfo.name}`;
  const description = `Professional ${service.name.toLowerCase()} services in San Antonio, TX. ${service.shortDescription} Serving Alamo Heights, Stone Oak, and all SA neighborhoods. Call ${businessInfo.phone}!`;
  
  return {
    title: {
      default: title,
      template: `%s | ${businessInfo.name} - San Antonio TX`
    },
    description: description,
    keywords: [
      primaryKeyword,
      secondaryKeyword,
      ...locationKeywords.slice(0, 10), // Limit keywords
      'professional car detailing',
      'auto detailing san antonio',
      'best car wash san antonio',
      'ceramic coating san antonio',
      'paint correction san antonio',
      'interior cleaning san antonio'
    ],
    authors: [{ name: businessInfo.name }],
    creator: businessInfo.name,
    publisher: businessInfo.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: true,
    },
    metadataBase: new URL('https://odaat1.com'),
    alternates: {
      canonical: `https://odaat1.com/services/${service.slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: `https://odaat1.com/services/${service.slug}`,
      siteName: `${businessInfo.name} - San Antonio TX`,
      locale: 'en_US',
      images: [
        {
          url: `/images/og-${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} - Professional Car Detailing in San Antonio, TX`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`/images/og-${service.slug}.jpg`],
      site: '@ODAAT1_SA',
      creator: '@ODAAT1_SA',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Add when available
      yandex: "your-yandex-verification-code", // Add if needed
    },
  };
};

// Location-specific content injection
export const getSanAntonioContent = (service: Service) => {
  const citySpecificBenefits = {
    exteriorWash: [
      "Perfect for San Antonio's hot climate with UV-resistant sealant protection",
      "Removes Central Texas dust, pollen, and desert sand buildup",
      "Protects against Texas hill country road grime and debris",
      "Ideal for vehicles driven on I-35, Loop 410, and Highway 1604",
      "Essential protection for San Antonio's variable weather conditions"
    ],
    interiorDetail: [
      "Eliminates Texas heat-induced odors and bacteria buildup",
      "Perfect for San Antonio's dust-prone environment",
      "Removes pollen and allergen buildup common in South Texas",
      "Controls humidity-related moisture issues in vehicle interiors",
      "Essential for San Antonio's year-round outdoor activity vehicles"
    ],
    paintCorrection: [
      "Specialized for San Antonio's intense sun exposure protection",
      "Removes oxidation from Texas heat and UV exposure",
      "Prepares paint for ceramic coating in San Antonio's climate",
      "Eliminates scratches from driving on Texas highways",
      "Restores paint clarity after Central Texas dust storms"
    ],
    ceramicCoating: [
      "Long-term protection against San Antonio's intense UV rays",
      "Essential for protecting vehicles from Texas road debris",
      "Withstands San Antonio's temperature extremes and weather",
      "Provides hydrophobic protection for San Antonio's rainy seasons",
      "Preserves vehicle value in San Antonio's competitive market"
    ],
    headlightRestoration: [
      "Critical for San Antonio's highway driving safety",
      "Removes yellowing from Texas sun exposure",
      "Improves visibility for San Antonio's evening traffic",
      "Essential for DOT safety standards in Texas",
      "Restores clarity for San Antonio's residential driving"
    ],
    fullDetailPackage: [
      "Complete protection for San Antonio's demanding climate",
      "Full interior/exterior restoration for Texas vehicles",
      "Comprehensive service for San Antonio luxury vehicles",
      "Year-round protection for San Antonio's weather variations",
      "Complete value package for San Antonio residents"
    ]
  };

  const serviceType = service.slug.includes('exterior') ? 'exteriorWash' :
                     service.slug.includes('interior') ? 'interiorDetail' :
                     service.slug.includes('paint') ? 'paintCorrection' :
                     service.slug.includes('ceramic') ? 'ceramicCoating' :
                     service.slug.includes('headlight') ? 'headlightRestoration' :
                     service.slug.includes('full') ? 'fullDetailPackage' : 'exteriorWash';

  return {
    localBenefits: citySpecificBenefits[serviceType] || citySpecificBenefits.exteriorWash,
    serviceAreas: SAN_ANTONIO_LOCATION.neighborhoods,
    nearbyCities: SAN_ANTONIO_LOCATION.nearbyCities,
    regionInfo: {
      metroArea: SAN_ANTONIO_LOCATION.metroArea,
      coordinates: SAN_ANTONIO_LOCATION.coordinates,
      timezone: 'America/Chicago'
    }
  };
};

// Local citation management
export const LOCAL_CITATIONS = [
  {
    name: businessInfo.name,
    address: businessInfo.address,
    city: businessInfo.city,
    state: businessInfo.state,
    zipCode: businessInfo.zipCode,
    phone: businessInfo.phone,
    category: 'Auto Detailing',
    description: 'Professional car detailing services in San Antonio, TX',
    website: 'https://odaat1.com'
  }
];

// Generate schema for local business optimization
export const getLocalBusinessOptimizedSchema = (service?: Service) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": businessInfo.name,
  "description": service ? 
    `${service.name} services in San Antonio, TX. ${service.shortDescription}` :
    `Professional car detailing services in San Antonio, Texas. Expert automotive detailing including exterior wash, interior cleaning, paint correction, ceramic coating, and full detail packages.`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": businessInfo.address,
    "addressLocality": businessInfo.city,
    "addressRegion": businessInfo.state,
    "postalCode": businessInfo.zipCode,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": SAN_ANTONIO_LOCATION.coordinates.lat,
    "longitude": SAN_ANTONIO_LOCATION.coordinates.lng
  },
  "telephone": businessInfo.phone,
  "url": "https://odaat1.com",
  "serviceArea": {
    "@type": "Place",
    "name": "San Antonio Metropolitan Area"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "San Antonio, TX",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    ...SAN_ANTONIO_LOCATION.neighborhoods.map(neighborhood => ({
      "@type": "City", 
      "name": neighborhood,
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }))
  ]
});