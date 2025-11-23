import type { Metadata } from 'next';
import Link from 'next/link';
import { businessInfo } from '../lib/data';


export const metadata: Metadata = {
  title: 'Contact Us - Professional Car Detailing San Antonio TX | One Detail At A Time LLC',
  description: 'Contact One Detail At A Time LLC for professional car detailing services in San Antonio, TX. Call (726) 207-1007 or get a free quote today.',
  keywords: [
    'car detailing contact',
    'auto detailing san antonio',
    'schedule car detailing',
    'car detailing quote san antonio'
  ],
};

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact
              One Detail At A Time
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to give your vehicle the professional care it deserves? Get in touch with us today for a free quote or to schedule your service.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Get Your Free Quote</h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you with a personalized quote for your vehicle detailing needs.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="john.doe@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="exterior-hand-wash-sealant">Exterior Hand Wash & Sealant</option>
                      <option value="interior-deep-cleansing">Interior Deep Cleansing</option>
                      <option value="paint-correction">Paint Correction</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="headlight-restoration">Headlight Restoration</option>
                      <option value="full-detail-package">Full Detail Package</option>
                      <option value="multiple-services">Multiple Services</option>
                      <option value="custom-package">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2">
                      Vehicle Details
                    </label>
                    <textarea
                      id="vehicle"
                      name="vehicle"
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Year, Make, Model, and current condition..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Tell us about your needs, preferred timing, or any special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Get Free Quote
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-semibold text-white mb-6">Quick Contact</h3>
                  <div className="space-y-6">
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                    >
                      <svg className="w-8 h-8 text-teal-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="text-white font-semibold group-hover:text-teal-400 transition-colors">
                          Call Now
                        </div>
                        <div className="text-gray-300 text-lg">{businessInfo.phone}</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                    >
                      <svg className="w-8 h-8 text-teal-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="text-white font-semibold group-hover:text-teal-400 transition-colors">
                          Email Us
                        </div>
                        <div className="text-gray-300">{businessInfo.email}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-semibold text-white mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    {Object.entries(businessInfo.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="capitalize text-gray-300 font-medium">{day}</span>
                        <span className="text-gray-400">{hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      * Emergency and after-hours services available by appointment
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-semibold text-white mb-6">Service Area</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-300">{businessInfo.serviceArea}</span>
                    </div>
                    <div className="ml-8">
                      <p className="text-gray-400 text-sm">
                        Mobile service available • Drive-in service available • We come to you!
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <Link
                      href="/services"
                      className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
                    >
                      View Our Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Find Us in San Antonio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Located in the heart of San Antonio, we serve the entire metropolitan area with professional mobile car detailing services.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Our Location</h3>
                  <div className="space-y-2 text-gray-300 mb-6">
                    <p>{businessInfo.name}</p>
                    <p>{businessInfo.address}</p>
                    <p>{businessInfo.city}, {businessInfo.state} {businessInfo.zipCode}</p>
                  </div>
                  <p className="text-gray-400 mb-6">
                    We're proud to call San Antonio home and are committed to serving our local community with the highest quality automotive detailing services.
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address + ', ' + businessInfo.city + ', ' + businessInfo.state + ' ' + businessInfo.zipCode)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View on Google Maps
                  </a>
                </div>

                {/* Map placeholder */}
                <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center border border-gray-600">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-teal-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-400">Interactive Map</p>
                    <p className="text-gray-500 text-sm">San Antonio, TX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Common Questions</h2>
              <p className="text-xl text-gray-300">
                Here are some of the most frequently asked questions about our services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">How do I schedule a service?</h3>
                <p className="text-gray-300">
                  Simply call us at {businessInfo.phone} or use our contact form above. We'll work with you to find a convenient time that fits your schedule.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Do you come to my location?</h3>
                <p className="text-gray-300">
                  No! We do not offer mobile car detailing services throughout the San Antonio area. We can detail your vehicle at our convenient location 11692 Bricken Circle 78233, San Antonio, TX.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">How long does each service take?</h3>
                <p className="text-gray-300">
                  Service times vary by package. Exterior washes take 2-3 hours, full details take 8-12 hours, and paint correction can take 1-2 days. We'll provide an estimated timeline when you book.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">
                  We accept cash, credit cards, and debit cards. 20% deposit is due at the time of booking. Final payment is due upon completion of service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Contact us today and experience the One Detail At A Time difference. Professional service, guaranteed results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phone}`}
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call: {businessInfo.phone}
              </a>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}