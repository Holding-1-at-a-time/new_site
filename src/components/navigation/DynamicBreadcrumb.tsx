'use client';

import Link from 'next/link';
import type { Service } from '../../../types';
import { SAN_ANTONIO_LOCATION } from '../../seo/localSEO';
import { getBreadcrumbSchema } from '../../seo/sanAntonioSchema';
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
  // Build breadcrumb structure
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

    if (currentService) {
      breadcrumbs.push({
        name: currentService.name,
        url: `/services/${currentService.slug}`,
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

// Location-based service availability indicator
interface ServiceAvailabilityProps {
  serviceArea?: string[];
  nearbyCities?: string[];
  showCoverage?: boolean;
}

export function ServiceAvailabilityIndicator({ 
  serviceArea = SAN_ANTONIO_LOCATION.neighborhoods,
  nearbyCities = SAN_ANTONIO_LOCATION.nearbyCities,
  showCoverage = true
}: ServiceAvailabilityProps) {
  if (!showCoverage) return null;

  const primaryAreas = serviceArea.slice(0, 6); // Show top 6 areas
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
            {primaryAreas.map((area, index) => (
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

// Service category navigation helper
export function ServiceCategoryNavigation({ currentCategory }: { currentCategory?: string }) {
  const categories = [
    { name: 'All Services', slug: '/services', count: 6 },
    { name: 'Exterior Care', slug: '/services#exterior', count: 2 },
    { name: 'Interior Care', slug: '/services#interior', count: 1 },
    { name: 'Paint Protection', slug: '/services#paint', count: 2 },
    { name: 'Service Packages', slug: '/services#packages', count: 1 },
  ];

  return (
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 mb-6">
      <h3 className="text-sm font-semibold text-white mb-3">Browse by Category</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={category.slug}
            className={`
              flex items-center justify-center px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200
              ${currentCategory === category.slug || (currentCategory === undefined && category.name === 'All Services')
                ? 'bg-teal-500 text-white shadow-lg' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
              }
            `}
          >
            <span>{category.name}</span>
            <span className="ml-1 bg-white/20 rounded-full px-1.5 py-0.5 text-xs">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Quick service links for related services
interface QuickServiceLinksProps {
  relatedServices: Service[];
  currentServiceName: string;
}

export function QuickServiceLinks({ relatedServices, currentServiceName }: QuickServiceLinksProps) {
  if (relatedServices.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        Related Services in San Antonio
      </h3>
      
      <div className="grid gap-3">
        {relatedServices.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="group flex items-center justify-between p-3 bg-gray-700/30 hover:bg-gray-600/30 rounded-lg transition-all duration-200 border border-transparent hover:border-teal-500/30"
          >
            <div className="flex-1">
              <h4 className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                {service.name}
              </h4>
              <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                {service.shortDescription}
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