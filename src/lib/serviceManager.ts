import type { Service } from '../types';
import { generateSlug, generateLocalSEOKeywords } from './utils';

// Service Templates for easy creation
export const SERVICE_TEMPLATES = {
  exteriorWash: {
    name: "Exterior Hand Wash & Sealant",
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

  interiorDetail: {
    name: "Interior Deep Cleansing",
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

  paintCorrection: {
    name: "Paint Correction",
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
  }
};

// Service Areas Template
export const DEFAULT_SERVICE_AREAS = [
  "San Antonio", "Alamo Heights", "Terrell Hills", "Olmos Park", "Leon Valley",
  "Castle Hills", "Balcones Heights", "Stone Oak", "Dominion", "Shavano Park",
  "Hollywood Park", "Windcrest"
];

// Local Benefits Template
export const DEFAULT_LOCAL_BENEFITS = [
  "Perfect for San Antonio's climate with UV protection",
  "Removes Central Texas dust and pollen buildup from vehicles",
  "Protects against hill country road grime and debris",
  "Ideal for vehicles driven on I-35, Loop 410, and 1604",
  "Specialized protection for luxury vehicles in Alamo Heights and Stone Oak",
  "Dust protection essential for Dominion and Shavano Park properties",
  "Wind protection for vehicles near San Antonio International Airport"
];

// Create a new service
export function createService(
  template: keyof typeof SERVICE_TEMPLATES,
  customizations: {
    name?: string;
    price?: string;
    startingPrice?: number;
    duration?: string;
    customBenefits?: string[];
    customIncludes?: string[];
    customProcess?: Array<{ id: number; title: string; description: string; duration: string }>;
    customFaqs?: Array<{ question: string; answer: string }>;
    customImages?: string[];
  } = {}
): Service {
  const templateData = SERVICE_TEMPLATES[template];
  
  const serviceName = customizations.name || templateData.name;
  const slug = generateSlug(serviceName);

  return {
    id: slug,
    name: serviceName,
    slug: slug,
    shortDescription: templateData.shortDescription,
    fullDescription: templateData.fullDescription,
    price: customizations.price || templateData.price,
    startingPrice: customizations.startingPrice || templateData.startingPrice,
    duration: customizations.duration || templateData.duration,
    benefits: customizations.customBenefits || templateData.benefits,
    includes: customizations.customIncludes || templateData.includes,
    process: customizations.customProcess || templateData.process,
    faqs: customizations.customFaqs || templateData.faqs,
    images: customizations.customImages || templateData.images,
    keywords: generateLocalSEOKeywords(serviceName),
    metaDescription: `Professional ${serviceName.toLowerCase()} services in San Antonio, TX. Premium quality and guaranteed results. Call (726) 207-1007 today!`,
    serviceAreas: DEFAULT_SERVICE_AREAS,
    localBenefits: DEFAULT_LOCAL_BENEFITS
  };
}

// Add a new service to the services array
export function addService(services: Service[], newService: Service): Service[] {
  // Check if service with same slug already exists
  const existingService = services.find(service => service.slug === newService.slug);
  if (existingService) {
    throw new Error(`Service with slug "${newService.slug}" already exists`);
  }
  
  return [...services, newService];
}

// Remove a service from the services array
export function removeService(services: Service[], serviceSlug: string): Service[] {
  const serviceExists = services.find(service => service.slug === serviceSlug);
  if (!serviceExists) {
    throw new Error(`Service with slug "${serviceSlug}" not found`);
  }
  
  return services.filter(service => service.slug !== serviceSlug);
}

// Update an existing service
export function updateService(services: Service[], originalSlug: string, updatedService: Service): Service[] {
  const index = services.findIndex(service => service.slug === originalSlug);
  if (index === -1) {
    throw new Error(`Service with slug "${originalSlug}" not found`);
  }
  
  const newServices = [...services];
  newServices[index] = updatedService;
  return newServices;
}

// Get service by slug
export function getService(services: Service[], slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

// Validate service data
export function validateService(service: Service): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!service.name?.trim()) {
    errors.push("Service name is required");
  }
  
  if (!service.slug?.trim()) {
    errors.push("Service slug is required");
  }
  
  if (!service.shortDescription?.trim()) {
    errors.push("Short description is required");
  }
  
  if (!service.fullDescription?.trim()) {
    errors.push("Full description is required");
  }
  
  if (!service.price?.trim()) {
    errors.push("Price is required");
  }
  
  if (!service.duration?.trim()) {
    errors.push("Duration is required");
  }
  
  if (!service.benefits || service.benefits.length === 0) {
    errors.push("At least one benefit is required");
  }
  
  if (!service.includes || service.includes.length === 0) {
    errors.push("At least one included item is required");
  }
  
  if (!service.process || service.process.length === 0) {
    errors.push("At least one process step is required");
  }
  
  if (!service.faqs || service.faqs.length === 0) {
    errors.push("At least one FAQ is required");
  }
  
  if (!service.images || service.images.length === 0) {
    errors.push("At least one image is required");
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Generate service preview data
export function generateServicePreview(service: Service): {
  title: string;
  description: string;
  keyFeatures: string[];
  pricing: string;
  duration: string;
} {
  return {
    title: service.name,
    description: service.shortDescription,
    keyFeatures: service.benefits.slice(0, 3),
    pricing: service.price,
    duration: service.duration
  };
}

// Bulk operations
export function bulkAddServices(services: Service[], newServices: Service[]): Service[] {
  const slugs = newServices.map(s => s.slug);
  const existingSlugs = services.filter(s => slugs.includes(s.slug)).map(s => s.slug);
  
  if (existingSlugs.length > 0) {
    throw new Error(`Services with slugs already exist: ${existingSlugs.join(', ')}`);
  }
  
  return [...services, ...newServices];
}

export function bulkRemoveServices(services: Service[], serviceSlugs: string[]): Service[] {
  const existingSlugs = services.filter(s => serviceSlugs.includes(s.slug)).map(s => s.slug);
  const missingSlugs = serviceSlugs.filter(slug => !existingSlugs.includes(slug));
  
  if (missingSlugs.length > 0) {
    throw new Error(`Services not found: ${missingSlugs.join(', ')}`);
  }
  
  return services.filter(service => !serviceSlugs.includes(service.slug));
}