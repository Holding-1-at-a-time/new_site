import type { Service } from '../../types';

// Service category taxonomy for semantic organization
export const SERVICE_CATEGORIES = {
  exterior: {
    id: 'exterior',
    name: 'Exterior Services',
    description: 'Professional exterior car care and protection services',
    slug: 'exterior-car-care',
    parent: null,
    children: ['wash', 'sealant', 'coating'],
    keywords: ['exterior car detailing', 'car exterior', 'exterior wash', 'paint protection'],
    order: 1
  },
  interior: {
    id: 'interior',
    name: 'Interior Services', 
    description: 'Complete interior cleaning and detailing services',
    slug: 'interior-car-care',
    parent: null,
    children: ['deep-clean', 'conditioning', 'odor-elimination'],
    keywords: ['interior car detailing', 'car interior cleaning', 'interior detail', 'car upholstery'],
    order: 2
  },
  paint: {
    id: 'paint',
    name: 'Paint Services',
    description: 'Paint correction, restoration and protection services',
    slug: 'paint-correction',
    parent: null,
    children: ['correction', 'polishing', 'coating', 'restoration'],
    keywords: ['paint correction', 'car paint', 'paint restoration', 'auto paint'],
    order: 3
  },
  protection: {
    id: 'protection',
    name: 'Protection Services',
    description: 'Long-term protection and coating services',
    slug: 'car-protection',
    parent: null,
    children: ['ceramic', 'sealant', 'wraps'],
    keywords: ['car protection', 'ceramic coating', 'paint sealant', 'car coating'],
    order: 4
  },
  specialty: {
    id: 'specialty',
    name: 'Specialty Services',
    description: 'Specialized automotive care services',
    slug: 'specialty-services',
    parent: null,
    children: ['headlight', 'engine', 'convertible'],
    keywords: ['specialty car detailing', 'headlight restoration', 'engine bay cleaning', 'convertible top'],
    order: 5
  },
  packages: {
    id: 'packages',
    name: 'Service Packages',
    description: 'Comprehensive car detailing packages',
    slug: 'service-packages',
    parent: null,
    children: ['full-detail', 'complete-care', 'premium'],
    keywords: ['car detailing packages', 'complete car care', 'full service', 'premium detailing'],
    order: 6
  }
} as const;

// Service relationship mapping with proper types
interface ServiceRelationships {
  parent: string | null;
  siblings: string[];
  children: string[];
  related: string[];
  upgrades: string[];
  alternatives: string[];
}

export const SERVICE_RELATIONSHIPS: Record<string, ServiceRelationships> = {
  exterior: {
    parent: null,
    siblings: ['interior', 'paint', 'protection', 'specialty', 'packages'],
    children: ['exterior-wash', 'paint-protection', 'ceramic-coating'],
    related: ['interior', 'paint', 'packages'],
    upgrades: ['ceramic-coating', 'full-detail-package'],
    alternatives: ['exterior-wash', 'paint-protection']
  },
  interior: {
    parent: null,
    siblings: ['exterior', 'paint', 'protection', 'specialty', 'packages'],
    children: ['interior-deep-clean', 'leather-treatment', 'odor-elimination'],
    related: ['exterior', 'packages', 'specialty'],
    upgrades: ['full-detail-package', 'complete-care'],
    alternatives: ['interior-deep-clean', 'basic-interior']
  },
  paint: {
    parent: null,
    siblings: ['exterior', 'interior', 'protection', 'specialty', 'packages'],
    children: ['paint-correction', 'paint-polishing', 'swirl-removal'],
    related: ['exterior', 'protection', 'packages'],
    upgrades: ['ceramic-coating', 'paint-correction-plus'],
    alternatives: ['paint-polishing', 'swirl-removal']
  },
  ceramicCoating: {
    parent: 'protection',
    siblings: ['paint-protection', 'sealant'],
    children: ['basic-ceramic', 'premium-ceramic', 'ceramic-plus'],
    related: ['exterior', 'paint', 'protection'],
    upgrades: ['premium-ceramic', 'full-ceramic-system'],
    alternatives: ['paint-protection', 'sealant']
  },
  fullDetailPackage: {
    parent: 'packages',
    siblings: ['complete-care', 'premium-service'],
    children: ['basic-full-detail', 'premium-full-detail'],
    related: ['exterior', 'interior', 'paint', 'protection'],
    upgrades: ['premium-package', 'ultimate-care'],
    alternatives: ['exterior-plus-interior', 'basic-detail']
  }
};

// Smart service recommendation engine
export class ServiceRecommendationEngine {
  private services: Service[];
  
  constructor(services: Service[]) {
    this.services = services;
  }

  // Get related services based on category and relationships
  getRelatedServices(serviceId: string, limit: number = 3): Service[] {
    const currentService = this.services.find(s => s.id === serviceId);
    if (!currentService) return [];

    const currentCategory = this.getServiceCategory(currentService);
    const relationships = SERVICE_RELATIONSHIPS[currentCategory];
    
    if (!relationships) return [];

    let relatedServiceIds: string[] = [];

    // Add services from related categories
    relationships.related.forEach(categoryId => {
      const relatedServices = this.services.filter(s => 
        this.getServiceCategory(s) === categoryId && s.id !== serviceId
      );
      relatedServiceIds.push(...relatedServices.map(s => s.id));
    });

    // Add sibling services
    relationships.siblings.forEach(categoryId => {
      const siblingServices = this.services.filter(s => 
        this.getServiceCategory(s) === categoryId && s.id !== serviceId
      );
      relatedServiceIds.push(...siblingServices.map(s => s.id));
    });

    // Remove duplicates and filter by available services
    const uniqueIds = [...new Set(relatedServiceIds)];
    return this.services
      .filter(s => uniqueIds.includes(s.id))
      .slice(0, limit);
  }

  // Get upgrade suggestions based on current service
  getUpgradeSuggestions(serviceId: string, limit: number = 2): Service[] {
    const currentService = this.services.find(s => s.id === serviceId);
    if (!currentService) return [];

    const currentCategory = this.getServiceCategory(currentService);
    const relationships = SERVICE_RELATIONSHIPS[currentCategory];
    
    if (!relationships?.upgrades) return [];

    return this.services
      .filter(s => relationships.upgrades.includes(s.slug))
      .slice(0, limit);
  }

  // Get alternative services
  getAlternatives(serviceId: string, limit: number = 3): Service[] {
    const currentService = this.services.find(s => s.id === serviceId);
    if (!currentService) return [];

    const currentCategory = this.getServiceCategory(currentService);
    const relationships = SERVICE_RELATIONSHIPS[currentCategory];
    
    if (!relationships?.alternatives) return [];

    return this.services
      .filter(s => relationships.alternatives.includes(s.slug) && s.id !== serviceId)
      .slice(0, limit);
  }

  // Get service bundles/packages
  getServiceBundles(serviceId: string): Array<{
    name: string;
    services: Service[];
    totalPrice: number;
    savings: number;
  }> {
    const currentService = this.services.find(s => s.id === serviceId);
    if (!currentService) return [];

    const bundles: Array<{
      name: string;
      services: Service[];
      totalPrice: number;
      savings: number;
    }> = [];

    // Find full detail packages that include the current service
    const fullDetailPackages = this.services.filter(s => 
      s.slug.includes('full-detail') || s.slug.includes('complete')
    );

    fullDetailPackages.forEach(bundle => {
      const serviceIds = [serviceId, bundle.id];
      const bundleServices = this.services.filter(s => serviceIds.includes(s.id));
      
      if (bundleServices.length > 1) {
        const totalPrice = bundleServices.reduce((sum, s) => sum + s.startingPrice, 0);
        const bundlePrice = bundle.startingPrice;
        const savings = totalPrice - bundlePrice;

        if (savings > 0) {
          bundles.push({
            name: `${currentService.name} + ${bundle.name}`,
            services: bundleServices,
            totalPrice: totalPrice,
            savings: savings
          });
        }
      }
    });

    return bundles.sort((a, b) => b.savings - a.savings);
  }

  // Determine service category based on slug or keywords
  private getServiceCategory(service: Service): string {
    const slug = service.slug.toLowerCase();
    const name = service.name.toLowerCase();
    const keywords = service.keywords?.join(' ').toLowerCase() || '';

    // Category matching logic
    if (slug.includes('interior') || name.includes('interior') || keywords.includes('interior')) {
      return 'interior';
    }
    if (slug.includes('exterior') || name.includes('exterior') || keywords.includes('exterior')) {
      return 'exterior';
    }
    if (slug.includes('paint') || name.includes('paint') || keywords.includes('paint')) {
      return 'paint';
    }
    if (slug.includes('ceramic') || name.includes('ceramic') || keywords.includes('ceramic')) {
      return 'ceramicCoating';
    }
    if (slug.includes('full') || name.includes('complete') || name.includes('package')) {
      return 'fullDetailPackage';
    }
    if (slug.includes('headlight') || name.includes('headlight')) {
      return 'specialty';
    }

    // Default category
    return 'exterior';
  }

  // Get services by category
  getServicesByCategory(categoryId: string): Service[] {
    return this.services.filter(service => 
      this.getServiceCategory(service) === categoryId
    );
  }

  // Get service hierarchy tree
  getServiceHierarchy(): Array<{
    category: typeof SERVICE_CATEGORIES[keyof typeof SERVICE_CATEGORIES];
    services: Service[];
  }> {
    return Object.entries(SERVICE_CATEGORIES).map(([categoryId, category]) => ({
      category,
      services: this.getServicesByCategory(categoryId)
    }));
  }
}

// Price-based service recommendations
export const getPriceBasedRecommendations = (currentPrice: number, services: Service[], direction: 'upgrade' | 'downgrade' = 'upgrade') => {
  const tolerance = 50; // $50 range for recommendations
  
  return services
    .filter(service => {
      const priceDiff = service.startingPrice - currentPrice;
      return direction === 'upgrade' ? priceDiff > 0 && priceDiff <= tolerance : priceDiff < 0 && Math.abs(priceDiff) <= tolerance;
    })
    .sort((a, b) => direction === 'upgrade' ? a.startingPrice - b.startingPrice : b.startingPrice - a.startingPrice)
    .slice(0, 3);
};

// Cross-category service suggestions
export const getCrossCategorySuggestions = (serviceId: string, services: Service[]): Service[] => {
  const currentService = services.find(s => s.id === serviceId);
  if (!currentService) return [];

  const engine = new ServiceRecommendationEngine(services);
  const related = engine.getRelatedServices(serviceId, 2);
  const upgrades = engine.getUpgradeSuggestions(serviceId, 2);
  
  return [...related, ...upgrades].slice(0, 4);
};