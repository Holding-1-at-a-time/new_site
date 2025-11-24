'use client';

import type { Service } from '../../../types';
import { getSanAntonioServiceDescriptions } from '../../../lib/seo/sanAntonioContent';

// Responsive service page template component
interface ServiceTemplateProps {
  service: Service;
  children: React.ReactNode;
  showLocalContent?: boolean;
  priority?: 'speed' | 'seo' | 'user-experience';
}

export default function ServiceTemplate({ 
  service, 
  children, 
  showLocalContent = true,
  priority = 'seo'
}: ServiceTemplateProps) {
  const localContent = showLocalContent ? getSanAntonioServiceDescriptions(service.slug) : null;

  // Priority-based component loading strategy
  const getComponentPriority = () => {
    switch (priority) {
      case 'speed':
        return 'lazy';
      case 'seo':
        return 'eager';
      case 'user-experience':
        return 'eager';
      default:
        return 'lazy';
    }
  };

  return (
    <div className="service-template min-h-screen bg-gray-900">
      {/* Local SEO Content Injection */}
      {showLocalContent && localContent && (
        <div className="sr-only">
          <h1>{localContent.title}</h1>
          <p>{localContent.description}</p>
          <ul>
            {localContent.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsive Layout Container */}
      <div className="responsive-container">
        {/* Mobile-First Grid System */}
        <div className="
          grid 
          grid-cols-1 
          lg:grid-cols-4 
          gap-6 
          lg:gap-8
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
        ">
          {/* Main Content Area */}
          <main className="
            col-span-1
            lg:col-span-3
            order-2
            lg:order-1
            space-y-8
          ">
            {children}
          </main>

          {/* Sidebar for larger screens */}
          <aside className="
            col-span-1
            order-1
            lg:order-2
            space-y-6
            lg:sticky
            lg:top-24
            lg:h-fit
          ">
            {/* Service Summary Card - Responsive */}
            <div className="
              bg-gradient-to-br
              from-gray-800
              to-gray-900
              border
              border-gray-700
              rounded-xl
              p-4
              sm:p-6
            ">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Service Summary
              </h2>
              
              {/* Responsive Price Display */}
              <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                gap-4
                mb-4
              ">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">
                  {service.price}
                </div>
                <div className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-400
                ">
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  {service.duration}
                </div>
              </div>

              {/* Mobile CTA - Sticky Bottom */}
              <div className="
                lg:hidden
                fixed
                bottom-0
                left-0
                right-0
                bg-gray-900
                border-t
                border-gray-700
                p-4
                z-50
              ">
                <button className="
                  w-full
                  bg-teal-500
                  hover:bg-teal-600
                  text-white
                  font-semibold
                  py-3
                  px-6
                  rounded-lg
                  transition-colors
                ">
                  Book {service.name}
                </button>
              </div>

              {/* Desktop CTA - Hidden on mobile */}
              <button className="
                hidden
                lg:block
                w-full
                bg-teal-500
                hover:bg-teal-600
                text-white
                font-semibold
                py-3
                px-6
                rounded-lg
                transition-colors
              ">
                Book {service.name}
              </button>
            </div>

            {/* Service Areas Card */}
            <div className="
              bg-gradient-to-br
              from-teal-500/10
              to-blue-500/10
              border
              border-teal-500/20
              rounded-xl
              p-4
              sm:p-6
            ">
              <h3 className="text-lg font-semibold text-white mb-3">
                Service Areas
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Serving San Antonio and surrounding areas
              </p>
              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-2
                text-xs
              ">
                {service.serviceAreas.slice(0, 6).map((area, index) => (
                  <div key={area} className="
                    flex
                    items-center
                    text-gray-300
                  ">
                    <div className="
                      w-1.5
                      h-1.5
                      bg-teal-400
                      rounded-full
                      mr-2
                      flex-shrink-0
                    " />
                    <span>{area}</span>
                  </div>
                ))}
                {service.serviceAreas.length > 6 && (
                  <div className="
                    flex
                    items-center
                    text-gray-400
                    sm:col-span-2
                  ">
                    <div className="
                      w-1.5
                      h-1.5
                      bg-gray-400
                      rounded-full
                      mr-2
                      flex-shrink-0
                    " />
                    <span>+{service.serviceAreas.length - 6} more areas</span>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Progressive Enhancement Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.name,
            "description": localContent?.description || service.fullDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "One Detail At A Time LLC",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Antonio",
                "addressRegion": "TX"
              }
            }
          })
        }}
      />
    </div>
  );
}

// Mobile-First Responsive Breakpoints
export const responsiveBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Progressive Image Loading Component
interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ProgressiveImage({ src, alt, className = '', priority = false }: ProgressiveImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Low quality placeholder */}
      <img
        src={src.replace('.jpg', '-low.webp')}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          blur-sm
          opacity-50
          transition-opacity
          duration-300
        "
        aria-hidden="true"
      />
      
      {/* High quality image */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className="
          relative
          w-full
          h-full
          object-cover
          transition-opacity
          duration-500
        "
        onLoad={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.opacity = '1';
        }}
      />
    </div>
  );
}

// Responsive Service Gallery Component
interface ServiceGalleryProps {
  images: string[];
  serviceName: string;
}

export function ResponsiveServiceGallery({ images, serviceName }: ServiceGalleryProps) {
  return (
    <div className="
      service-gallery
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4
      sm:gap-6
    ">
      {images.map((image, index) => (
        <div key={index} className="
          relative
          aspect-video
          rounded-lg
          overflow-hidden
          group
        ">
          <ProgressiveImage
            src={image}
            alt={`${serviceName} - Image ${index + 1}`}
            className="
              w-full
              h-full
              transform
              group-hover:scale-105
              transition-transform
              duration-300
            "
          />
          
          {/* Overlay for mobile accessibility */}
          <div className="
            absolute
            inset-0
            bg-black/20
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          ">
            <div className="
              absolute
              bottom-4
              left-4
              right-4
            ">
              <p className="
                text-white
                text-sm
                font-medium
                truncate
              ">
                {serviceName} - Professional Service
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Accessibility improvements for local search
export function AccessibilityEnhancements() {
  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          focus:absolute
          focus:top-4
          focus:left-4
          bg-teal-500
          text-white
          px-4
          py-2
          rounded
          z-50
        "
      >
        Skip to main content
      </a>

      {/* Enhanced focus indicators */}
      <style jsx global>{`
        .service-template button:focus,
        .service-template a:focus {
          outline: 2px solid #14b8a6;
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-template * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}

// Performance optimization utilities
export const performanceUtils = {
  // Prefetch critical resources
  prefetchResources: () => {
    if (typeof window !== 'undefined') {
      // Prefetch contact page for CTA buttons
      const contactLink = document.createElement('link');
      contactLink.rel = 'prefetch';
      contactLink.href = '/contact';
      document.head.appendChild(contactLink);
    }
  },

  // Lazy load non-critical components
  lazyLoadComponent: (component: string) => {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      return true;
    }
    // Fallback for browsers that don't support lazy loading
    return false;
  }
};