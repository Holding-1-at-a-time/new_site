import type { Service } from '../../types';
import { SAN_ANTONIO_LOCATION } from './localSEO';

// San Antonio-specific service descriptions with local context
export const getSanAntonioServiceDescriptions = (serviceSlug: string): {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  localFactors: string[];
} => {
  const descriptions: Record<string, any> = {
    'exterior-hand-wash': {
      title: 'Exterior Hand Wash & Sealant - San Antonio TX',
      subtitle: 'Professional automotive exterior care designed for Texas climate',
      description: `Our exterior hand wash and sealant service is specifically tailored for San Antonio's unique climate conditions. We understand the challenges that Central Texas weather, road conditions, and environmental factors present to your vehicle's exterior. Our professional team uses premium products and techniques designed to protect against UV exposure, hill country dust, pollen, and the variable weather conditions common in the Alamo City region.`,
      benefits: [
        'UV-resistant sealant protection perfect for San Antonio\'s intense Texas sun',
        'Removes Central Texas dust, pollen, and environmental contaminants',
        'Protects against hill country road grime and highway debris',
        'Ideal for vehicles driven on I-35, Loop 410, and Highway 1604 corridors',
        'Weather-resistant protection for San Antonio\'s variable climate',
        'Professional grade products suitable for luxury vehicles in Stone Oak and Alamo Heights'
      ],
      localFactors: [
        'Designed for South Texas climate conditions',
        'Effective against pollen and dust common in San Antonio area',
        'Protects paint from intense UV exposure typical of Central Texas',
        'Suitable for vehicles driven on major San Antonio highways',
        'Tailored for the luxury vehicle market in prestigious SA neighborhoods'
      ]
    },
    'interior-deep-cleansing': {
      title: 'Interior Deep Cleansing - San Antonio TX',
      subtitle: 'Complete interior detailing for South Texas lifestyle',
      description: `Our interior deep cleansing service addresses the unique challenges of maintaining vehicle interiors in San Antonio\'s climate. With high temperatures, humidity, and the outdoor lifestyle common in South Texas, your vehicle\'s interior requires specialized care. We eliminate bacteria, odors, and contaminants while conditioning materials to withstand the Texas heat and maintain longevity.`,
      benefits: [
        'Eliminates bacteria and odors caused by Texas heat and humidity',
        'Removes pollen and allergen buildup common in San Antonio area',
        'Deep cleans upholstery and carpets for South Texas climate durability',
        'Leather conditioning suitable for high-heat environments',
        'Air quality improvement for healthier driving in San Antonio',
        'Odor elimination effective against stubborn Texas-related smells'
      ],
      localFactors: [
        'Specialized for high-temperature interior environments',
        'Effective against pollen and outdoor activity residues',
        'Humidity-resistant treatments for South Texas climate',
        'Suitable for luxury vehicles in Alamo Heights and Stone Oak',
        'Addresses needs of active outdoor lifestyle vehicles'
      ]
    },
    'paint-correction': {
      title: 'Paint Correction - San Antonio TX',
      subtitle: 'Professional paint restoration for Texas highway driving',
      description: `Paint correction services in San Antonio require specialized techniques due to the intense UV exposure, highway driving conditions, and environmental factors unique to Central Texas. Our multi-stage process removes oxidation, scratches, and swirl marks while preparing your paint for the demanding conditions of San Antonio roadways and weather.`,
      benefits: [
        'Removes oxidation caused by intense San Antonio UV exposure',
        'Eliminates scratches from driving on Texas highways and construction zones',
        'Restores paint clarity after Central Texas dust storms and pollen buildup',
        'Prepares paint surface for ceramic coating applications in SA climate',
        'Professional results suitable for luxury vehicles in prestigious neighborhoods',
        'Increases resale value for San Antonio metro area vehicles'
      ],
      localFactors: [
        'Specialized for extreme UV exposure in South Texas',
        'Effective against highway debris on I-35 and Loop 410',
        'Suitable for vehicles in Stone Oak, Alamo Heights luxury market',
        'Prepares paint for ceramic coating in Texas climate',
        'Addresses road construction and highway driving damage'
      ]
    },
    'ceramic-coating': {
      title: 'Ceramic Coating - San Antonio TX',
      subtitle: 'Long-term protection against South Texas elements',
      description: `Ceramic coating applications in San Antonio require products and techniques specifically designed for the intense UV exposure, temperature variations, and environmental conditions of Central Texas. Our professional ceramic coating service provides long-lasting protection that withstands the unique challenges of vehicle ownership in the Alamo City region.`,
      benefits: [
        'Long-term UV protection essential for San Antonio\'s intense sun exposure',
        'Hydrophobic properties effective against Texas rainy seasons',
        'Chemical resistance against Central Texas environmental contaminants',
        'Temperature-stable protection for San Antonio\'s climate extremes',
        'Preserves vehicle value in San Antonio\'s competitive luxury market',
        'Professional application suitable for high-end vehicles in SA neighborhoods'
      ],
      localFactors: [
        'UV-resistant formula designed for South Texas sun exposure',
        'Chemical-resistant for Central Texas environmental conditions',
        'Temperature-stable for San Antonio\'s climate variations',
        'Suitable for luxury vehicles in prestigious SA areas',
        'Long-term protection investment for Texas vehicle owners'
      ]
    },
    'headlight-restoration': {
      title: 'Headlight Restoration - San Antonio TX',
      subtitle: 'Safety-focused restoration for Texas highway driving',
      description: `Headlight restoration is crucial for San Antonio drivers due to the extensive highway system, evening traffic patterns, and safety requirements. Our professional restoration service removes yellowing and clouding caused by Texas sun exposure while improving visibility for safe driving on I-35, Loop 410, and local San Antonio roadways.`,
      benefits: [
        'Critical for safety on San Antonio\'s extensive highway system',
        'Removes yellowing caused by intense Texas sun exposure',
        'Improves nighttime visibility for SA evening traffic patterns',
        'DOT-compliant restoration for Texas vehicle safety standards',
        'Professional results suitable for all San Antonio vehicle types',
        'Cost-effective alternative to headlight replacement'
      ],
      localFactors: [
        'Designed for evening rush hour traffic visibility in San Antonio',
        'Effective against UV damage from Texas sun exposure',
        'Suitable for highway driving safety on major SA routes',
        'Meets Texas Department of Transportation safety requirements',
        'Cost-effective for San Antonio budget-conscious vehicle owners'
      ]
    },
    'full-detail-package': {
      title: 'Full Detail Package - San Antonio TX',
      subtitle: 'Complete automotive care for Texas lifestyle',
      description: `Our comprehensive full detail package is designed specifically for San Antonio vehicle owners who demand complete care for their vehicles in the challenging Central Texas environment. This complete service addresses both interior and exterior needs while providing protection and restoration suitable for South Texas climate and lifestyle requirements.`,
      benefits: [
        'Complete protection for San Antonio\'s demanding climate conditions',
        'Comprehensive interior/exterior restoration for Texas vehicles',
        'Professional service suitable for luxury vehicles in SA neighborhoods',
        'Year-round protection against Central Texas weather variations',
        'Complete value package for San Antonio vehicle owners',
        'Premium service for discerning customers in Stone Oak and Alamo Heights'
      ],
      localFactors: [
        'Designed for complete vehicle care in South Texas climate',
        'Suitable for luxury vehicles in prestigious San Antonio neighborhoods',
        'Addresses unique challenges of Central Texas vehicle ownership',
        'Comprehensive solution for Texas outdoor lifestyle vehicles',
        'Premium service meeting high-end SA market expectations'
      ]
    }
  };

  return descriptions[serviceSlug] || descriptions['exterior-hand-wash'];
};

// Local pricing variations by San Antonio area
export const getSanAntonioPricing = (basePrice: number, serviceSlug: string) => {
  const pricingAdjustments: Record<string, any> = {
    'exterior-hand-wash': {
      basePrice,
      premiumAreas: [
        { area: 'Alamo Heights', price: basePrice + 25 },
        { area: 'Stone Oak', price: basePrice + 30 },
        { area: 'Dominion', price: basePrice + 35 },
        { area: 'Shavano Park', price: basePrice + 30 }
      ],
      standardAreas: [
        { area: 'Downtown', price: basePrice + 10 },
        { area: 'Southtown', price: basePrice + 15 },
        { area: 'Pearl District', price: basePrice + 20 }
      ],
      mobileService: [
        { area: 'Within 5 miles', price: basePrice },
        { area: '5-10 miles', price: basePrice + 15 },
        { area: '10-15 miles', price: basePrice + 25 },
        { area: '15+ miles', price: basePrice + 40 }
      ]
    }
    // Add more services as needed
  };

  return pricingAdjustments[serviceSlug] || {
    basePrice,
    premiumAreas: [{ area: 'Premium Areas', price: basePrice + 20 }],
    standardAreas: [{ area: 'Standard Areas', price: basePrice + 10 }],
    mobileService: [{ area: 'Local Service', price: basePrice }]
  };
};

// San Antonio area-specific testimonials
export const getSanAntonioTestimonials = (serviceSlug: string) => {
  const testimonials: Record<string, Array<{
    name: string;
    area: string;
    rating: number;
    text: string;
    date: string;
  }>> = {
    'exterior-hand-wash': [
      {
        name: 'Maria S.',
        area: 'Alamo Heights',
        rating: 5,
        text: 'Amazing exterior wash service! My car looks brand new and the UV protection is perfect for San Antonio\'s intense sun. Highly recommend for anyone in the Alamo Heights area.',
        date: '2024-08-15'
      },
      {
        name: 'David L.',
        area: 'Stone Oak',
        rating: 5,
        text: 'Professional service that understands the challenges of keeping a car clean in San Antonio. The sealant protection has been incredible through our Texas summers.',
        date: '2024-09-10'
      },
      {
        name: 'Jennifer M.',
        area: 'Dominion',
        rating: 5,
        text: 'Excellent attention to detail and great service in the Dominion area. My luxury vehicle has never looked better, and the team really knows how to handle high-end cars.',
        date: '2024-10-05'
      }
    ],
    'interior-deep-cleansing': [
      {
        name: 'Carlos R.',
        area: 'Southtown',
        rating: 5,
        text: 'Incredible interior cleaning service! They eliminated odors that I thought were permanent. Perfect for San Antonio\'s heat and my active lifestyle.',
        date: '2024-08-20'
      },
      {
        name: 'Amanda K.',
        area: 'Downtown',
        rating: 5,
        text: 'The best interior detailing in San Antonio! My leather seats look amazing and the service was quick and professional.',
        date: '2024-09-15'
      }
    ]
  };

  return testimonials[serviceSlug] || testimonials['exterior-hand-wash'];
};

// Location-specific FAQ sections
export const getSanAntonioFAQs = (serviceSlug: string) => {
  const faqs: Record<string, Array<{
    question: string;
    answer: string;
    category: 'service' | 'location' | 'pricing' | 'timing';
  }>> = {
    'exterior-hand-wash': [
      {
        question: 'How often should I get an exterior wash in San Antonio?',
        answer: 'Due to San Antonio\'s dusty conditions, pollen, and intense sun, we recommend monthly exterior washes to maintain optimal protection and appearance.',
        category: 'location'
      },
      {
        question: 'Do you service all areas of San Antonio?',
        answer: 'Yes! We service all San Antonio metro areas including Alamo Heights, Stone Oak, Downtown, Southtown, and surrounding neighborhoods. Mobile service available.',
        category: 'location'
      },
      {
        question: 'Is the sealant safe for San Antonio\'s intense sun?',
        answer: 'Absolutely! Our premium sealant is specifically formulated for Texas climate conditions and provides excellent UV protection against San Antonio\'s intense sun exposure.',
        category: 'service'
      },
      {
        question: 'What\'s the pricing for premium San Antonio areas?',
        answer: 'Pricing varies by area due to travel time and local market conditions. Premium areas like Alamo Heights and Stone Oak may have slightly higher rates, but we offer competitive pricing across all San Antonio neighborhoods.',
        category: 'pricing'
      }
    ],
    'interior-deep-cleansing': [
      {
        question: 'How effective is the odor elimination in San Antonio\'s climate?',
        answer: 'Our odor elimination treatment is specifically designed for San Antonio\'s heat and humidity. It\'s highly effective against Texas-specific odors including smoke, pet smells, and moisture-related odors.',
        category: 'location'
      },
      {
        question: 'Do you service luxury vehicles in Stone Oak and Alamo Heights?',
        answer: 'Yes! We have extensive experience with luxury vehicles and provide specialized care appropriate for high-end cars in San Antonio\'s prestigious neighborhoods.',
        category: 'location'
      },
      {
        question: 'How long does the interior cleaning last in San Antonio?',
        answer: 'With San Antonio\'s climate, our interior cleaning typically lasts 3-4 months with proper maintenance. We use products specifically designed for Texas conditions.',
        category: 'service'
      }
    ]
  };

  return faqs[serviceSlug] || faqs['exterior-hand-wash'];
};

// Regional service availability by San Antonio area
export const getSanAntonioServiceAvailability = () => ({
  immediate: [
    'Downtown San Antonio',
    'Southtown',
    'Pearl District',
    'Near North Side'
  ],
  sameDay: [
    'Alamo Heights',
    'Terrell Hills', 
    'Olmos Park',
    'Leon Valley',
    'Castle Hills',
    'Balcones Heights'
  ],
  nextDay: [
    'Stone Oak',
    'Dominion',
    'Shavano Park',
    'Hollywood Park',
    'Windcrest',
    'The Rim'
  ],
  extended: [
    'New Braunfels',
    'Seguin',
    'Boerne',
    'Helotes',
    'Universal City',
    'Schertz',
    'Converse'
  ]
});

// Weather-related service recommendations
export const getSanAntonioWeatherRecommendations = (serviceSlug: string) => {
  const currentDate = new Date();
  const month = currentDate.getMonth(); // 0-11
  
  // San Antonio seasonal considerations
  const seasonalRecommendations = {
    spring: {
      pollen: 'High pollen levels - additional interior cleaning recommended',
      storms: 'Storm season - enhanced exterior protection advised',
      temperatures: 'Moderate temperatures - ideal for ceramic coating'
    },
    summer: {
      pollen: 'Peak pollen season - frequent exterior washing needed',
      storms: 'Hurricane season - comprehensive protection essential',
      temperatures: 'Extreme heat - UV protection critical'
    },
    fall: {
      pollen: 'Fall pollen - continued exterior maintenance important',
      storms: 'Storm season - exterior protection recommended',
      temperatures: 'Cooling temperatures - good for paint correction'
    },
    winter: {
      pollen: 'Lower pollen - good time for interior deep cleaning',
      storms: 'Winter storms - exterior protection important',
      temperatures: 'Mild winters - year-round detailing possible'
    }
  };

  let season: keyof typeof seasonalRecommendations;
  if (month >= 2 && month <= 4) season = 'spring';
  else if (month >= 5 && month <= 7) season = 'summer';
  else if (month >= 8 && month <= 10) season = 'fall';
  else season = 'winter';

  const currentSeason = seasonalRecommendations[season];
  
  return {
    season,
    recommendations: currentSeason,
    specificAdvice: serviceSlug === 'exterior-hand-wash' ? 
      `Given ${season} conditions in San Antonio: ${currentSeason.pollen} ${currentSeason.storms}` :
      serviceSlug === 'interior-deep-cleansing' ?
      `Perfect time for interior service during ${season}: ${currentSeason.pollen}` :
      `Optimal timing for ${serviceSlug} during San Antonio ${season}: ${currentSeason.temperatures}`
  };
};