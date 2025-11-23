"use client";

import React, { useState } from 'react';
import type { Service } from '../../types';
import { businessInfo } from '../../lib/data';
import OptimizedImage from '../ui/OptimizedImage';
import { cn } from '../../lib/utils';

interface BeforeAfterShowcaseProps {
  service: Service;
  className?: string;
}

/**
 * BeforeAfterShowcase is a component that displays a before-and-after comparison of a vehicle detailing transformation.
 * It contains a toggle button to switch between the before and after images, along with a brief description of the transformation.
 * The component also displays a list of benefits that the transformation provides, such as long-lasting protection against the elements, enhanced appearance, and increased resale value.
 * Finally, it includes a call-to-action to encourage the user to contact the detailing service.
 */

export default function BeforeAfterShowcase({ service, className }: BeforeAfterShowcaseProps) {
  const [isBeforeSelected, setIsBeforeSelected] = useState(true);
  
  // For demonstration, we'll use the first two images
  const beforeImage = service.images[0];
  const afterImage = service.images[1] || service.images[0];

  return (
    <section className={cn('py-20 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dramatic Results You Can See
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformation with our professional {service.name.toLowerCase()} service. 
            See the dramatic difference quality makes for vehicles in San Antonio, TX.
          </p>
        </div>

        {/* Before/After Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex">
              <button
                onClick={() => setIsBeforeSelected(true)}
                className={cn(
                  'px-8 py-3 rounded-full font-semibold transition-all duration-300',
                  isBeforeSelected
                    ? 'bg-red-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                )}
              >
                Before
              </button>
              <button
                onClick={() => setIsBeforeSelected(false)}
                className={cn(
                  'px-8 py-3 rounded-full font-semibold transition-all duration-300',
                  !isBeforeSelected
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                )}
              >
                After
              </button>
            </div>
          </div>
        </div>

        {/* Before/After Image Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <OptimizedImage
              src={isBeforeSelected ? beforeImage : afterImage}
              alt={`${service.name} ${isBeforeSelected ? 'before' : 'after'} results in San Antonio, TX - professional auto detailing transformation`}
              caption={
                isBeforeSelected
                  ? `Before: This vehicle shows the typical wear and damage that San Antonio drivers face from daily driving on I-35 and local roads. Our ${service.name.toLowerCase()} service will restore it to like-new condition.`
                  : `After: Professional ${service.name.toLowerCase()} completed by our certified technicians in San Antonio, TX. Notice the dramatic improvement in appearance and protection.`
              }
              className="w-full h-96 md:h-[500px] lg:h-[600px]"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
              localSEO={{
                city: "San Antonio",
                state: "TX",
                serviceType: service.name,
                keywords: service.keywords?.slice(0, 5) || []
              }}
            />
            
            {/* Before/After Label Overlay */}
            <div className="absolute top-6 left-6">
              <div className={cn(
                'px-6 py-3 rounded-full text-white font-bold text-lg shadow-lg',
                isBeforeSelected ? 'bg-red-500' : 'bg-green-500'
              )}>
                {isBeforeSelected ? 'BEFORE' : 'AFTER'}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Benefits */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Common Issues We Address
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-red-700">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>San Antonio's intense sun causing paint oxidation and fading</span>
              </li>
              <li className="flex items-start text-red-700">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Road debris and dust from Hill Country driving</span>
              </li>
              <li className="flex items-start text-red-700">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Environmental contamination from urban driving</span>
              </li>
              <li className="flex items-start text-red-700">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Swirl marks and scratches from improper washing</span>
              </li>
            </ul>
          </div>

          {/* After Benefits */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Professional Results Achieved
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-green-700">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Complete paint restoration and protection</span>
              </li>
              <li className="flex items-start text-green-700">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Long-lasting protection against Texas climate</span>
              </li>
              <li className="flex items-start text-green-700">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Enhanced appearance and increased resale value</span>
              </li>
              <li className="flex items-start text-green-700">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Professional finish that lasts for months</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-teal-500 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Vehicle?
            </h3>
            <p className="text-teal-100 mb-6 text-lg">
              Join hundreds of satisfied San Antonio customers who trust One Detail At A Time LLC 
              for their professional automotive detailing needs.
            </p>
            <a
              href={`tel:${businessInfo.phone.replace(/[^\d]/g, '')}`}
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Call {businessInfo.phone} Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}