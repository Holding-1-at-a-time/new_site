'use client';

import Link from 'next/link';
import type { Service } from '../../../types';
import { SAN_ANTONIO_LOCATION } from '../../lib/seo/localSEO';
import { getBreadcrumbSchema } from '../../lib/seo/sanAntonioSchema';
import { ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
  name: string;
  url: string;
  isCurrentPage?: boolean;
}

interface DynamicBreadcrumbProps {
  currentService?: Service;
  customBreadcrumbs?: BreadcrumbItem[];
  showLocation?: boolean;
}

export default function DynamicBreadcrumb({ 
  currentService, 
  customBreadcrumbs, 
  showLocation = true 
}: DynamicBreadcrumbProps) {
  // Build breadcrumb structure for static service pages
  const buildBreadcrumbs = (): BreadcrumbItem[] => {
    if (customBreadcrumbs) {
      return customBreadcrumbs;
    }

    const breadcrumbs: BreadcrumbItem[] = [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Services',
        url: '/services'
      }
    ];

    // Map services to their static page URLs
    if (currentService) {
      const servicePageMap: Record<string, string> = {
        'exterior-hand-wash': '/services/exterior-wash',
        'interior-deep-cleansing': '/services/interior-deep-cleansing',
        'paint-correction': '/services/paint-correction',
        'ceramic-coating': '/services/ceramic-coating',
        'headlight-restoration': '/services/headlight-restoration',
        'full-detail-package': '/services/full-detail-package'
      };

      const serviceUrl = servicePageMap[currentService.slug] || `/services/${currentService.slug}`;
      
      breadcrumbs.push({
        name: currentService.name,
        url: serviceUrl,
        isCurrentPage: true
      });
    }

    // Add location context
    if (showLocation) {
      breadcrumbs.push({
        name: 'San Antonio, TX',
        url: '/services#san-antonio-coverage'
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();

  // Generate schema markup
  const breadcrumbSchema = getBreadcrumbSchema(
    breadcrumbs.map(bc => ({ name: bc.name, url: `https://odaat1.com${bc.url}` }))
  );

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav 
        aria-label="Breadcrumb" 
        className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 sticky top-16 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 py-3 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRightIcon className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                )}
                
                {breadcrumb.isCurrentPage ? (
                  <span 
                    className="text-teal-400 font-medium truncate"
                    aria-current="page"
                  >
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.url}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 truncate"
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            ))}
            
            {/* San Antonio Location Indicator */}
            {showLocation && (
              <li className="ml-auto flex items-center text-xs text-gray-400">
                <MapPinIcon className="w-3 h-3 mr-1 text-teal-400" />
                <span className="hidden sm:inline">Serving </span>
                <span className="font-medium text-teal-400 ml-1">San Antonio, TX</span>
              </li>
            )}
          </ol>
        </div>
      </nav>
    </>
  );
}

// Service availability indicator focused on San Antonio
export function ServiceAvailabilityIndicator({ 
  serviceArea = SAN_ANTONIO_LOCATION.neighborhoods,
  nearbyCities = SAN_ANTONIO_LOCATION.nearbyCities,
  showCoverage = true
}: {
  serviceArea?: string[];
  nearbyCities?: string[];
  showCoverage?: boolean;
}) {
  if (!showCoverage) return null;

  const primaryAreas = serviceArea.slice(0, 6);
  const remainingCount = serviceArea.length - primaryAreas.length;

  return (
    <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4 mb-6">
      <div className="flex items-start space-x-3">
        <MapPinIcon className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white mb-2">
            Service Coverage - San Antonio Metropolitan Area
          </h3>
          <p className="text-xs text-gray-300 mb-3">
            We provide mobile car detailing services throughout San Antonio and surrounding areas.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {primaryAreas.map((area) => (
              <div key={area} className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 flex-shrink-0" />
                <span>{area}</span>
              </div>
            ))}
            {remainingCount > 0 && (
              <div className="flex items-center text-gray-400">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0" />
                <span>+{remainingCount} more areas</span>
              </div>
            )}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-600">
            <p className="text-xs text-gray-400">
              <span className="font-medium text-teal-400">Free mobile service</span> within 15 miles. 
              Extended service available throughout the metro area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Related services widget for static pages
interface RelatedServicesWidgetProps {
  currentServiceName: string;
  relatedServices?: {
    name: string;
    description: string;
    price: string;
    duration: string;
    url: string;
  }[];
}

export function RelatedServicesWidget({ 
  currentServiceName, 
  relatedServices 
}: RelatedServicesWidgetProps) {
  // Default related services mapping
  const defaultRelatedServices = {
    'Exterior Hand Wash & Sealant': [
      {
        name: 'Ceramic Coating',
        description: 'Long-term paint protection with advanced ceramic technology',
        price: '$400+',
        duration: '4-6 hours',
        url: '/services/ceramic-coating'
      },
      {
        name: 'Paint Correction',
        description: 'Professional paint restoration and swirl removal',
        price: '$400+',
        duration: '6-8 hours',
        url: '/services/paint-correction'
      }
    ],
    'Interior Deep Cleansing': [
      {
        name: 'Full Detail Package',
        description: 'Complete interior and exterior detailing service',
        price: '$350+',
        duration: '6-8 hours',
        url: '/services/full-detail-package'
      }
    ],
    'Paint Correction': [
      {
        name: 'Ceramic Coating',
        description: 'Protect your corrected paint with ceramic coating',
        price: '$400+',
        duration: '4-6 hours',
        url: '/services/ceramic-coating'
      }
    ],
    'Ceramic Coating': [
      {
        name: 'Paint Correction',
        description: 'Prepare your paint before ceramic coating application',
        price: '$400+',
        duration: '6-8 hours',
        url: '/services/paint-correction'
      }
    ],
    'Headlight Restoration': [
      {
        name: 'Exterior Hand Wash',
        description: 'Complete exterior wash and protection service',
        price: '$150+',
        duration: '2-3 hours',
        url: '/services/exterior-wash'
      }
    ],
    'Full Detail Package': [
      {
        name: 'Ceramic Coating',
        description: 'Add long-term protection to your detailed vehicle',
        price: '$400+',
        duration: '4-6 hours',
        url: '/services/ceramic-coating'
      }
    ]
  };

  const services = relatedServices || defaultRelatedServices[currentServiceName as keyof typeof defaultRelatedServices] || [];

  if (services.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        Related Services in San Antonio
      </h3>
      
      <div className="grid gap-3">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.url}
            className="group flex items-center justify-between p-3 bg-gray-700/30 hover:bg-gray-600/30 rounded-lg transition-all duration-200 border border-transparent hover:border-teal-500/30"
          >
            <div className="flex-1">
              <h4 className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                {service.name}
              </h4>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                {service.description}
              </p>
              <div className="flex items-center mt-2 text-xs text-teal-400">
                <span className="font-medium">{service.price}</span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-400">{service.duration}</span>
              </div>
            </div>
            
            <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-teal-400 transition-colors" />
          </Link>
        ))}
      </div>

      <Link
        href="/services"
        className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center block transition-colors"
      >
        View All Services
      </Link>
    </div>
  );
}

// Service upgrade/downgrade suggestions
interface ServiceSuggestionsProps {
  currentPrice: number;
  currentServiceName: string;
}

export function ServiceSuggestions({ currentPrice, currentServiceName }: ServiceSuggestionsProps) {
  const suggestions = {
    upgrades: [
      {
        name: 'Full Detail Package',
        description: 'Complete interior and exterior service',
        price: '$350+',
        url: '/services/full-detail-package',
        savings: 50
      },
      {
        name: 'Ceramic Coating + Paint Correction',
        description: 'Premium protection package',
        price: '$600+',
        url: '/services/ceramic-coating',
        savings: 100
      }
    ],
    alternatives: [
      {
        name: 'Basic Exterior Wash',
        description: 'Essential exterior cleaning service',
        price: '$100+',
        url: '/services/exterior-wash'
      }
    ]
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Upgrade Suggestions */}
      {suggestions.upgrades.length > 0 && (
        <div className="bg-gradient-to-br from-teal-500/10 to-green-500/10 border border-teal-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <ChevronRightIcon className="w-5 h-5 mr-2 text-teal-400" />
            Upgrade Options
          </h3>
          
          <div className="space-y-3">
            {suggestions.upgrades.map((upgrade) => (
              <Link
                key={upgrade.name}
                href={upgrade.url}
                className="block p-3 bg-gray-700/30 hover:bg-gray-600/30 rounded-lg transition-all duration-200 border border-transparent hover:border-teal-500/30"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">
                      {upgrade.name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {upgrade.description}
                    </p>
                    <div className="flex items-center mt-2 text-xs">
                      <span className="text-teal-400 font-medium">{upgrade.price}</span>
                      {upgrade.savings && (
                        <span className="ml-2 text-green-400 text-xs">
                          Save ${upgrade.savings}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Alternative Options */}
      {suggestions.alternatives.length > 0 && (
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <ChevronRightIcon className="w-5 h-5 mr-2 text-blue-400" />
            Alternative Options
          </h3>
          
          <div className="space-y-3">
            {suggestions.alternatives.map((alternative) => (
              <Link
                key={alternative.name}
                href={alternative.url}
                className="block p-3 bg-gray-700/30 hover:bg-gray-600/30 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-500/30"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">
                      {alternative.name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {alternative.description}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-blue-400 font-medium">
                      <span>{alternative.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}