import type { Service } from '../../types';
import { businessInfo } from '../data';

// Enhanced LocalBusiness schema for San Antonio
export const getEnhancedLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://odaat1.com/#sanantonio",
  "name": "One Detail At A Time LLC",
  "alternateName": "One Detail At A Time",
  "image": "https://odaat1.com/images/logo.svg",
  "description": `Professional car detailing services in San Antonio, Texas. Expert automotive detailing including exterior wash, interior cleaning, paint correction, ceramic coating, and full detail packages. Serving San Antonio and surrounding areas since 2024.`,
  "url": "https://odaat1.com",
  "telephone": businessInfo.phone,
  "email": businessInfo.email,
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "R Romero",
    "jobTitle": "Owner & Lead Detailer"
  },
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
    "latitude": 29.4241,
    "longitude": -98.4936,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Antonio",
      "addressRegion": "TX"
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 29.4241,
      "longitude": -98.4936
    },
    "geoRadius": "50000"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "San Antonio",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Alamo Heights",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City", 
      "name": "Terrell Hills",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Olmos Park",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Leon Valley",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Castle Hills",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Balcones Heights",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Stone Oak",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Dominion",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Shavano Park",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Hollywood Park",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Windcrest",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00",
      "validFrom": "2024-01-01",
      "validThrough": "2024-12-31"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00",
      "validFrom": "2024-01-01",
      "validThrough": "2024-12-31"
    }
  ],
  "priceRange": "$150-$800",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Mobile Payment"],
  "currenciesAccepted": "USD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Car Detailing Services San Antonio",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior Hand Wash & Sealant",
          "description": "Professional hand wash with premium sealant protection in San Antonio, TX"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior Deep Cleansing",
          "description": "Complete interior detailing and deep cleaning in San Antonio, TX"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paint Correction",
          "description": "Professional paint restoration and swirl removal in San Antonio, TX"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceramic Coating",
          "description": "Long-term paint protection with ceramic coating in San Antonio, TX"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Headlight Restoration",
          "description": "Restore clarity to cloudy or yellowed headlights in San Antonio, TX"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Detail Package",
          "description": "Complete interior and exterior detailing service in San Antonio, TX"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "28",
    "bestRating": "5",
    "worstRating": "1",
    "ratingExplanation": "Professional car detailing services in San Antonio, TX"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Maria S."
      },
      "reviewBody": "Excellent car detailing service in San Antonio! They transformed my car's appearance completely.",
      "datePublished": "2024-08-15",
      "publisher": {
        "@type": "Organization",
        "name": "Google Reviews"
      },
      "reviewAspect": "Car Detailing San Antonio"
    },
    {
      "@type": "Review", 
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "David L."
      },
      "reviewBody": "Professional paint correction service. Highly recommend for San Antonio area.",
      "datePublished": "2024-09-10",
      "publisher": {
        "@type": "Organization", 
        "name": "Yelp"
      },
      "reviewAspect": "Paint Correction San Antonio TX"
    }
  ],
  "slogan": "Bringing every detail back to perfection",
  "knowsAbout": [
    "Car Detailing San Antonio",
    "Auto Detailing Texas",
    "Paint Correction San Antonio TX",
    "Ceramic Coating San Antonio",
    "Interior Cleaning San Antonio",
    "Exterior Detailing San Antonio",
    "Headlight Restoration San Antonio",
    "Automotive Care San Antonio Texas"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": "150",
        "validFrom": "2024-01-01"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Exterior Hand Wash & Sealant",
        "category": "Car Detailing San Antonio"
      },
      "availability": "https://schema.org/InStock",
      "areaServed": "San Antonio, TX"
    }
  ],
  "sameAs": [
    "https://www.google.com/maps/place/11692+Bricken+Circle+San+Antonio+TX+78233",
    "https://www.yelp.com/biz/one-detail-at-a-time-llc-san-antonio"
  ],
  "keywords": "car detailing san antonio, auto detailing san antonio tx, paint correction san antonio, ceramic coating san antonio, interior cleaning san antonio, exterior car wash san antonio"
});

// Service schema with San Antonio geo-targeting
export const getServiceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://odaat1.com/services/${service.slug}#sanantonio`,
  "serviceType": service.name,
  "name": `${service.name} - San Antonio TX`,
  "description": service.fullDescription,
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://odaat1.com/#sanantonio",
    "name": businessInfo.name,
    "image": "https://odaat1.com/images/logo.svg",
    "telephone": businessInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address,
      "addressLocality": businessInfo.city,
      "addressRegion": businessInfo.state,
      "postalCode": businessInfo.zipCode,
      "addressCountry": "US"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "San Antonio, TX",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      },
      "containedInCountry": {
        "@type": "Country",
        "name": "United States"
      }
    },
    ...service.serviceAreas.map(area => ({
      "@type": "City",
      "name": `${area}, TX`,
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }))
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 29.4241,
      "longitude": -98.4936
    },
    "geoRadius": "50000"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Vehicle owners in San Antonio, TX"
  },
  "offers": {
    "@type": "Offer",
    "price": service.startingPrice.toString(),
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "minPrice": service.startingPrice.toString(),
      "price": service.startingPrice.toString()
    },
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01",
    "areaServed": "San Antonio, TX",
    "seller": {
      "@type": "LocalBusiness",
      "name": businessInfo.name,
      "@id": "https://odaat1.com/#sanantonio"
    }
  },
  "category": [
    `Car Detailing San Antonio`,
    `Auto Detailing Texas`,
    `${service.name} San Antonio`
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${service.name} San Antonio Services`,
    "itemListElement": service.benefits.map((benefit, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "Service",
        "name": benefit,
        "description": `${benefit} - Professional ${service.name} service in San Antonio, TX`
      }
    }))
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `https://odaat1.com/services/${service.slug}`,
    "servicePhone": businessInfo.phone,
    "serviceType": "Professional automotive detailing"
  },
  "termsOfService": "Professional car detailing services in San Antonio, TX",
  "hourlyRate": false
});

// FAQ schema for enhanced search visibility
export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// BreadcrumbList schema for navigation hierarchy
export const getBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// San Antonio specific local business benefits schema
export const getLocalBenefitsSchema = (benefits: string[], location = "San Antonio") => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": `${location} Car Detailing Benefits`,
  "description": `Local benefits of car detailing services in ${location}, Texas`,
  "numberOfItems": benefits.length,
  "itemListElement": benefits.map((benefit, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Thing",
      "name": benefit,
      "description": `${benefit} - Car detailing service benefit in ${location}, TX`
    }
  }))
});

// Service process schema
export const getProcessSchema = (process: Array<{ id: number; title: string; description: string; duration?: string }>, serviceName: string) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": `${serviceName} Process - San Antonio TX`,
  "description": `Step-by-step ${serviceName} process performed by professionals in San Antonio, Texas`,
  "totalTime": `PT${process.reduce((total, step) => {
    const duration = step.duration || "60";
    const minutes = parseInt(duration.replace(/[^0-9]/g, "")) || 60;
    return total + minutes;
  }, 0)}M`,
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Professional car detailing equipment"
    },
    {
      "@type": "HowToSupply", 
      "name": "Premium car care products"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Professional detailing tools"
    }
  ],
  "step": process.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.title,
    "text": step.description,
    "duration": step.duration ? `PT${step.duration.replace(/[^0-9]/g, "") || "60"}M` : undefined
  })),
  "provider": {
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Antonio",
      "addressRegion": "Texas"
    }
  }
});