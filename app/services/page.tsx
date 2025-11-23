import Link from 'next/link';
import type { Metadata } from 'next';
import { services, businessInfo } from '../../src/lib/data';

export const metadata: Metadata = {
  title: 'Car Detailing Services - One Detail At A Time LLC',
  description: 'Professional car detailing services in San Antonio, TX. Exterior wash, interior cleaning, paint correction, ceramic coating, and full detail packages.',
  keywords: [
    'car detailing services',
    'auto detailing San Antonio',
    'exterior car wash',
    'interior car cleaning',
    'paint correction',
    'ceramic coating'
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Car Detailing Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional automotive detailing services in San Antonio, TX. From basic washes to complete paint correction and ceramic coating applications.
            </p>
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Call: {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-64 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center relative">
                  <div className="text-white text-6xl font-bold opacity-30">
                    {index + 1}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">{service.duration}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {service.shortDescription}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-teal-400">{service.price}</span>
                      {service.startingPrice && (
                        <span className="text-gray-400 text-sm ml-1">starting</span>
                      )}
                    </div>
                  </div>
                  
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))
            };
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Detailing Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every service follows our proven 4-step process to ensure consistent, professional results every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-400">We evaluate your vehicle's condition and discuss your specific needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Preparation</h3>
              <p className="text-gray-400">Thorough cleaning and preparation to ensure the best results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Service</h3>
              <p className="text-gray-400">Professional application using premium products and techniques.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Finishing</h3>
              <p className="text-gray-400">Final inspection and protection to ensure lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Professional Detailing?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                DIY car care can be time-consuming and often yields inconsistent results. Our professional service ensures your vehicle gets the expert care it deserves.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Expert Knowledge</h3>
                    <p className="text-gray-400">Years of experience with all vehicle types and conditions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Premium Products</h3>
                    <p className="text-gray-400">Professional-grade products not available to consumers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Time Savings</h3>
                    <p className="text-gray-400">Save hours of your valuable time with our efficient process.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Protection Investment</h3>
                    <p className="text-gray-400">Protect your investment and maintain resale value.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Contact us today for a personalized quote. We'll assess your vehicle and recommend the best service for your needs.
              </p>
              
              <div className="space-y-4">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
                >
                  Call Now: {businessInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="w-full border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Service Area:</span>
                  <span className="text-white">{businessInfo.serviceArea}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-white">Mon-Sat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}