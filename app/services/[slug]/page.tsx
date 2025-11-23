import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs, services, businessInfo } from '../../../src/lib/data';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - One Detail At A Time LLC',
    };
  }

  return {
    title: `${service.name} - Professional Car Detailing San Antonio TX | One Detail At A Time LLC`,
    description: service.fullDescription,
    keywords: [
      service.name.toLowerCase(),
      'car detailing san antonio',
      'auto detailing',
      ...service.benefits.flatMap(benefit => benefit.toLowerCase().split(' ').slice(0, 3))
    ],
    openGraph: {
      title: service.name,
      description: service.shortDescription,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
        <div className="absolute inset-0 bg-[url('/images/service-hero.svg')] opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Professional Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {service.name}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {service.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-3xl font-bold text-teal-400">
              {service.price}
            </div>
            <div className="text-gray-400 self-center">
              • {service.duration}
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              
              {/* What's Included */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-6">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Benefits */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Process Timeline */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={step.id} className="flex items-start">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white font-bold">{step.id}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                          {step.duration && (
                            <span className="text-sm text-gray-400">{step.duration}</span>
                          )}
                        </div>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 sticky top-24">
                <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-teal-400 mb-1">{service.price}</div>
                  {service.startingPrice && (
                    <div className="text-sm text-gray-400">starting price</div>
                  )}
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {businessInfo.serviceArea}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
                  >
                    Call Now
                  </a>
                  <Link
                    href="/contact"
                    className="w-full border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400 text-center">
                    Licensed & Insured • Professional Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Other Services You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <div key={relatedService.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition-all duration-300">
                  <div className="h-32 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                    <div className="text-white text-2xl font-bold opacity-50">
                      {relatedService.name.split(' ').map(word => word.charAt(0)).join('').slice(0, 2)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {relatedService.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      {relatedService.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-teal-400">
                        {relatedService.price}
                      </span>
                      <Link
                        href={`/services/${relatedService.slug}`}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Professional Results?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Contact us today to schedule your {service.name.toLowerCase()}. Professional service, guaranteed results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessInfo.phone}`}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call: {businessInfo.phone}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}