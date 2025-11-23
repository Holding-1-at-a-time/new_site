import type { Metadata } from 'next';
import { businessInfo } from '../../src/lib/data';

export const metadata: Metadata = {
  title: 'About Us - Professional Car Detailing San Antonio TX | One Detail At A Time LLC',
  description: 'Learn about One Detail At A Time LLC, your trusted car detailing professionals in San Antonio, TX. Years of experience bringing vehicles back to showroom condition.',
  keywords: [
    'car detailing about us',
    'auto detailing company san antonio',
    'professional car care',
    'automotive detailing experts'
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About One Detail At A Time
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bringing every detail back to perfection with professional automotive care and attention to the details that matter most.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  One Detail At A Time LLC was founded on a simple belief: every vehicle deserves meticulous care and attention to detail. Founded in 2024 by R. Romero, our company has quickly become San Antonio's trusted name in professional automotive detailing.
                </p>
                <p>
                  What started as a passion for cars and perfection has grown into a full-service detailing business that serves the greater San Antonio area. We understand that your vehicle is more than just transportation—it's an investment, a reflection of your personal style, and often holds sentimental value.
                </p>
                <p>
                  Our commitment to excellence drives everything we do. From the careful selection of premium products to our meticulous 4-step process, we ensure that every vehicle that leaves our care looks and feels its absolute best.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Why We Started</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold">Passion for Perfection</h4>
                    <p className="text-gray-400 text-sm">We believe in bringing every detail back to perfection.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold">Community Focus</h4>
                    <p className="text-gray-400 text-sm">Serving our neighbors in San Antonio with integrity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold">Quality Commitment</h4>
                    <p className="text-gray-400 text-sm">Using only the finest products and proven techniques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area CTA */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Serving San Antonio & Beyond</h2>
              <p className="text-xl text-gray-300 mb-6">
                We're proud to serve the greater San Antonio area, bringing professional automotive detailing directly to your location.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">{businessInfo.serviceArea}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Ready to experience the One Detail At A Time difference? Contact us today to schedule your service.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">{businessInfo.phone}</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}