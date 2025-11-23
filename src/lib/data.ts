import type { Service, BusinessInfo } from '../types';
import type { Service, BusinessInfo } from '@/types';

// Business Information
export const businessInfo: BusinessInfo = {
  name: "One Detail At A Time LLC",
  phone: "(726) 207-1007",
  email: "rromerojr1@gmail.com",
  address: "11692 Bricken Circle",
  city: "San Antonio",
  state: "TX",
  zipCode: "78233",
  serviceArea: "San Antonio, TX",
  hours: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM", 
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 5:00 PM",
    sunday: "Closed"
  },
  socialMedia: {
    google: "https://www.google.com/search?q=one+detail+at+a+time+llc+san+antonio",
    // Add other social media links as needed
  }
};

// Services Data
export const services: Service[] = [
  {
    id: "exterior-hand-wash-sealant",
    name: "Exterior Hand Wash & Sealant",
    slug: "exterior-hand-wash-sealant",
    shortDescription: "Professional hand wash with premium sealant protection",
    fullDescription: "Our exterior hand wash and sealant service provides comprehensive cleaning and protection for your vehicle's exterior. We use premium products and techniques to ensure your car looks its best while being protected from the elements.",
    price: "Starting at $150",
    startingPrice: 150,
    duration: "2-3 hours",
    benefits: [
      "Removes dirt, grime, and environmental contaminants",
      "Applies premium sealant for lasting protection",
      "Enhances paint gloss and depth",
      "Protects against UV rays and acid rain",
      "Easy maintenance between washes"
    ],
    includes: [
      "Pre-wash rinse and foam bath",
      "Hand wash with premium soaps",
      "Wheel and tire cleaning",
      "Window cleaning (inside and out)",
      "Towel dry and final wipe-down",
      "Premium sealant application",
      "Tire dressing application"
    ],
    process: [
      {
        id: 1,
        title: "Pre-wash Preparation",
        description: "Rinse vehicle thoroughly and apply foam bath to loosen dirt",
        duration: "15 minutes"
      },
      {
        id: 2,
        title: "Hand Wash Process", 
        description: "Two-bucket method hand wash with premium soaps",
        duration: "45 minutes"
      },
      {
        id: 3,
        title: "Wheel & Tire Care",
        description: "Clean wheels, tires, and wheel wells thoroughly",
        duration: "20 minutes"
      },
      {
        id: 4,
        title: "Drying & Protection",
        description: "Towel dry and apply premium sealant for protection",
        duration: "30 minutes"
      }
    ],
    faqs: [
      {
        question: "How long does the sealant last?",
        answer: "Our premium sealant typically lasts 3-6 months depending on weather conditions and how often you drive."
      },
      {
        question: "Is this safe for all paint types?",
        answer: "Yes, our products are safe for all paint types including clear coats, single-stage paints, and matte finishes."
      },
      {
        question: "Can I wash my car between appointments?",
        answer: "Yes, but we recommend using gentle, pH-balanced soaps and avoiding harsh chemicals to preserve the sealant."
      }
    ],
    images: [
      "/images/exterior-wash-1.jpg",
      "/images/exterior-wash-2.jpg",
      "/images/exterior-wash-3.jpg"
    ]
  },
  {
    id: "interior-deep-cleansing",
    name: "Interior Deep Cleansing",
    slug: "interior-deep-cleansing", 
    shortDescription: "Complete interior detailing and deep cleaning",
    fullDescription: "Transform your car's interior with our comprehensive deep cleaning service. We remove stains, odors, and contaminants from every surface leaving your interior fresh and pristine.",
    price: "Starting at $175",
    startingPrice: 175,
    duration: "3-4 hours",
    benefits: [
      "Eliminates bacteria and odors",
      "Removes stains and deep-set dirt",
      "Conditions leather and protects surfaces",
      "Improves air quality inside vehicle",
      "Extends interior component life"
    ],
    includes: [
      "Vacuum all surfaces and crevices",
      "Steam cleaning of upholstery and carpets",
      "Leather cleaning and conditioning",
      "Dashboard and trim cleaning",
      "Window cleaning (inside only)",
      "Odor elimination treatment",
      "Air freshening treatment"
    ],
    process: [
      {
        id: 1,
        title: "Interior Assessment",
        description: "Evaluate condition and identify problem areas",
        duration: "15 minutes"
      },
      {
        id: 2,
        title: "Deep Vacuum",
        description: "Thorough vacuum of all surfaces including under seats",
        duration: "45 minutes"
      },
      {
        id: 3,
        title: "Surface Cleaning",
        description: "Clean and condition all interior surfaces",
        duration: "90 minutes"
      },
      {
        id: 4,
        title: "Final Treatment",
        description: "Apply odor elimination and air freshening",
        duration: "30 minutes"
      }
    ],
    faqs: [
      {
        question: "How long does the treatment last?",
        answer: "Our deep cleaning typically lasts 2-4 months, depending on usage and maintenance."
      },
      {
        question: "Is it safe for leather interiors?",
        answer: "Yes, we use specialized leather cleaning and conditioning products that are safe and beneficial for all leather types."
      },
      {
        question: "Will this remove cigarette smoke odor?",
        answer: "Yes, our odor elimination treatment is specifically designed to neutralize cigarette smoke and other stubborn odors."
      }
    ],
    images: [
      "/images/interior-clean-1.jpg",
      "/images/interior-clean-2.jpg", 
      "/images/interior-clean-3.jpg"
    ]
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    slug: "paint-correction",
    shortDescription: "Professional paint restoration and swirl removal",
    fullDescription: "Our paint correction service removes swirl marks, scratches, and oxidation to restore your paint's original clarity and depth. This multi-stage process dramatically improves your vehicle's appearance.",
    price: "Starting at $400",
    startingPrice: 400,
    duration: "6-8 hours",
    benefits: [
      "Removes swirl marks and light scratches",
      "Eliminates oxidation and haze",
      "Restores paint clarity and depth",
      "Prepares surface for protection",
      "Increases resale value"
    ],
    includes: [
      "Multi-stage paint correction process",
      "Machine polishing and buffing",
      "Scratch and swirl mark removal",
      "Oxidation treatment",
      "Paint depth gauge measurements",
      "Final protection application",
      "Before/after documentation"
    ],
    process: [
      {
        id: 1,
        title: "Paint Assessment",
        description: "Evaluate paint condition using proper lighting and gauges",
        duration: "30 minutes"
      },
      {
        id: 2,
        title: "Stage 1 Correction",
        description: "Heavy correction using aggressive compounds",
        duration: "2-3 hours"
      },
      {
        id: 3,
        title: "Stage 2 Refinement", 
        description: "Medium polish to refine and smooth surface",
        duration: "2-3 hours"
      },
      {
        id: 4,
        title: "Stage 3 Finishing",
        description: "Final polish and protection application",
        duration: "1-2 hours"
      }
    ],
    faqs: [
      {
        question: "How long does paint correction last?",
        answer: "With proper maintenance, paint correction results can last 1-3 years. Protection application extends this significantly."
      },
      {
        question: "Will it remove all scratches?",
        answer: "Paint correction can remove most swirl marks and light scratches. Deep scratches that reach the primer may not be completely removable."
      },
      {
        question: "Is this safe for my paint?",
        answer: "Yes, our trained technicians use proper techniques and high-quality products to safely correct your paint without causing damage."
      }
    ],
    images: [
      "/images/paint-correction-1.jpg",
      "/images/paint-correction-2.jpg",
      "/images/paint-correction-3.jpg"
    ]
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    slug: "ceramic-coating",
    shortDescription: "Long-term paint protection with ceramic coating",
    fullDescription: "Our ceramic coating service provides the ultimate protection for your vehicle's paint. This hydrophobic coating offers years of protection while enhancing gloss and making maintenance easier.",
    price: "Starting at $800",
    startingPrice: 800,
    duration: "1-2 days",
    benefits: [
      "Long-lasting protection (5+ years)",
      "Hydrophobic water repelling properties", 
      "Enhanced gloss and depth",
      "Easier maintenance and cleaning",
      "UV and chemical resistance"
    ],
    includes: [
      "Complete paint correction preparation",
      "Professional ceramic coating application",
      "Multiple coating layers for durability",
      "Curing and final inspection",
      "Maintenance kit and instructions",
      "Warranty documentation"
    ],
    process: [
      {
        id: 1,
        title: "Preparation",
        description: "Thorough wash and paint correction if needed",
        duration: "4-6 hours"
      },
      {
        id: 2,
        title: "Coating Application",
        description: "Apply ceramic coating in controlled environment",
        duration: "3-4 hours"
      },
      {
        id: 3,
        title: "Curing Process",
        description: "Allow coating to cure properly",
        duration: "12-24 hours"
      },
      {
        id: 4,
        title: "Final Inspection",
        description: "Quality check and delivery preparation",
        duration: "30 minutes"
      }
    ],
    faqs: [
      {
        question: "How long does ceramic coating last?",
        answer: "Our professional ceramic coatings typically last 5-7 years with proper maintenance."
      },
      {
        question: "Can I wash my car immediately after coating?",
        answer: "We recommend waiting 7 days before the first wash to allow full curing of the coating."
      },
      {
        question: "What maintenance is required?",
        answer: "Regular washing with pH-neutral soaps and periodic inspections are all that's needed to maintain your coating."
      }
    ],
    images: [
      "/images/ceramic-coating-1.jpg",
      "/images/ceramic-coating-2.jpg",
      "/images/ceramic-coating-3.jpg"
    ]
  },
  {
    id: "headlight-restoration",
    name: "Headlight Restoration", 
    slug: "headlight-restoration",
    shortDescription: "Restore clarity to cloudy or yellowed headlights",
    fullDescription: "Restore your headlight lenses to like-new condition with our professional restoration service. Improve safety and restore the appearance of your vehicle with crystal clear headlights.",
    price: "Starting at $100",
    startingPrice: 100,
    duration: "1-2 hours",
    benefits: [
      "Improves nighttime visibility and safety",
      "Restores original lens clarity",
      "Removes yellowing and oxidation",
      "Cost-effective alternative to replacement",
      "Enhances vehicle appearance"
    ],
    includes: [
      "Headlight lens assessment",
      "Wet sanding with progressive grits",
      "Polish application for clarity",
      "UV protection coating application",
      "Final inspection and testing",
      "Sealing for long-term protection"
    ],
    process: [
      {
        id: 1,
        title: "Assessment",
        description: "Evaluate headlight condition and damage level",
        duration: "10 minutes"
      },
      {
        id: 2,
        title: "Preparation",
        description: "Mask surrounding areas and clean lenses",
        duration: "15 minutes"
      },
      {
        id: 3,
        title: "Restoration",
        description: "Wet sand and polish to restore clarity",
        duration: "45-60 minutes"
      },
      {
        id: 4,
        title: "Protection",
        description: "Apply UV protection coating for longevity",
        duration: "15 minutes"
      }
    ],
    faqs: [
      {
        question: "How long does restoration last?",
        answer: "With UV protection coating, restoration typically lasts 2-3 years before yellowing returns."
      },
      {
        question: "Will this work on all headlight types?",
        answer: "Our restoration works on most plastic and polycarbonate headlight lenses. Some severely damaged lenses may require replacement."
      },
      {
        question: "Is this better than replacement?",
        answer: "Restoration is often more cost-effective and environmentally friendly than replacement, while providing similar clarity results."
      }
    ],
    images: [
      "/images/headlight-restoration-1.jpg",
      "/images/headlight-restoration-2.jpg", 
      "/images/headlight-restoration-3.jpg"
    ]
  },
  {
    id: "full-detail-package",
    name: "Full Detail Package",
    slug: "full-detail-package",
    shortDescription: "Complete interior and exterior detailing service",
    fullDescription: "Our comprehensive full detail package combines the best of both interior and exterior services. This complete makeover transforms your vehicle inside and out, making it look and feel like new.",
    price: "Starting at $450",
    startingPrice: 450,
    duration: "8-12 hours",
    benefits: [
      "Complete vehicle transformation",
      "Interior and exterior protection",
      "Increases resale value",
      "Comprehensive maintenance",
      "Best value for complete service"
    ],
    includes: [
      "Exterior hand wash and sealant",
      "Complete interior deep cleaning", 
      "Paint correction and enhancement",
      "Wheel and tire detailing",
      "Engine bay cleaning",
      "Trunk and spare tire cleaning",
      "Final protection application"
    ],
    process: [
      {
        id: 1,
        title: "Interior Deep Clean",
        description: "Complete interior detailing and conditioning",
        duration: "4-5 hours"
      },
      {
        id: 2,
        title: "Exterior Wash",
        description: "Thorough exterior cleaning and preparation",
        duration: "2-3 hours"
      },
      {
        id: 3,
        title: "Paint Enhancement",
        description: "Paint correction and protection application",
        duration: "4-5 hours"
      },
      {
        id: 4,
        title: "Final Details",
        description: "Wheels, tires, engine bay, and final inspection",
        duration: "1-2 hours"
      }
    ],
    faqs: [
      {
        question: "Can I drop off my car for a full detail?",
        answer: "Yes, we offer convenient drop-off service. The process typically takes one full day, so we recommend planning accordingly."
      },
      {
        question: "What's included in the protection?",
        answer: "Your full detail includes both interior and exterior protection to keep your vehicle looking great for months."
      },
      {
        question: "Is there a discount for regular service?",
        answer: "Yes, we offer maintenance packages and discounts for regular customers. Contact us for details."
      }
    ],
    images: [
      "/images/full-detail-1.jpg",
      "/images/full-detail-2.jpg",
      "/images/full-detail-3.jpg"
    ]
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

// Helper function to get all service slugs for dynamic routing
export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}