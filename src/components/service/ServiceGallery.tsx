import React, { useState } from 'react';
import type { Service } from '../../types';
import OptimizedImage from '../ui/OptimizedImage';
import { cn } from '../../lib/utils';

interface ServiceGalleryProps {
  service: Service;
  className?: string;
}

export default function ServiceGallery({ service, className }: ServiceGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const getImageCaption = (index: number): string => {
    const captions = [
      `Professional ${service.name.toLowerCase()} - Before and after results showcasing our expert work in San Antonio, TX.`,
      `Detailed view of our ${service.name.toLowerCase()} process, demonstrating professional automotive detailing techniques.`,
      `Final results of ${service.name.toLowerCase()} service, highlighting the quality and attention to detail our San Antonio customers expect.`
    ];
    
    return captions[index] || `Professional ${service.name.toLowerCase()} service in San Antonio, Texas - One Detail At A Time LLC`;
  };

  const getImageAlt = (index: number): string => {
    const alts = [
      `${service.name} before and after results in San Antonio, TX - professional automotive detailing`,
      `${service.name} detailed process showing professional techniques in San Antonio, Texas`,
      `${service.name} final results showcasing expert craftsmanship in San Antonio area`
    ];
    
    return alts[index] || `${service.name} service performed by One Detail At A Time LLC in San Antonio, TX`;
  };

  return (
    <section className={cn('py-20 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {service.name} Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our professional {service.name.toLowerCase()} work in action. 
            These images showcase the quality and attention to detail that sets us apart in San Antonio, TX.
          </p>
        </div>

        {/* Main Featured Image */}
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <OptimizedImage
              src={service.images[selectedImage]}
              alt={getImageAlt(selectedImage)}
              caption={getImageCaption(selectedImage)}
              className="w-full h-96 md:h-[500px] lg:h-[600px]"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
              localSEO={{
                city: "San Antonio",
                state: "TX",
                serviceType: service.name,
                keywords: service.keywords?.slice(0, 5) || []
              }}
            />
            
            {/* Image counter overlay */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} of {service.images.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {service.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                'relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2',
                selectedImage === index 
                  ? 'ring-2 ring-teal-500 shadow-lg' 
                  : 'hover:shadow-md'
              )}
            >
              <div className="aspect-[4/3] w-full">
                <OptimizedImage
                  src={image}
                  alt={`${service.name} gallery image ${index + 1} - San Antonio TX auto detailing`}
                  className="w-full h-full object-cover"
                  priority={false}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                  localSEO={{
                    city: "San Antonio",
                    state: "TX",
                    serviceType: service.name,
                    keywords: service.keywords?.slice(0, 3) || []
                  }}
                />
              </div>
              
              {/* Selection indicator */}
              {selectedImage === index && (
                <div className="absolute inset-0 bg-teal-500/20 border-2 border-teal-500 rounded-lg flex items-center justify-center">
                  <div className="bg-teal-500 text-white p-2 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* SEO-optimized content section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Results You Can See
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our {service.name.toLowerCase()} service delivers measurable results that speak for themselves. 
                Each image represents hours of professional work and attention to detail that only experienced 
                technicians can provide.
              </p>
              <div className="flex items-center text-teal-600 font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                San Antonio's Trusted Auto Detailing Experts
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Quality Guaranteed
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every {service.name.toLowerCase()} job comes with our satisfaction guarantee. 
                We use only premium products and proven techniques to ensure your vehicle 
                receives the highest quality service in the San Antonio area.
              </p>
              <div className="flex items-center text-teal-600 font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                IDA-Certified Professionals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}