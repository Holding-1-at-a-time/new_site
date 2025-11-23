import { Metadata } from 'next';
import Link from 'next/link';
import { businessInfo as CONTACT_INFO } from '../../lib/data';

const SERVICE_AREAS = [
  "San Antonio",
  "Alamo Heights",
  "Terrell Hills",
  "Olmos Park",
  "Balcones Heights",
  "Castle Hills",
  "Stone Oak",
  "Dominion",
  "Shavano Park",
  "Leon Valley"
];

export const metadata: Metadata = {
  title: 'Exterior Hand Wash & Sealant San Antonio | One Detail At A Time',
  description: 'Professional hand wash with premium sealant protection. Removes dirt, grime, and environmental contaminants while protecting your paint. Serving Alamo Heights, Stone Oak, and surrounding areas.',
  keywords: [
    "exterior hand wash San Antonio",
    "car wash Alamo Heights",
    "hand wash sealant San Antonio TX",
    "car wash near me",
    "hand car wash San Antonio",
    "paint sealant San Antonio Texas"
  ],
  openGraph: {
    title: 'Exterior Hand Wash & Sealant | San Antonio Auto Detailing',
    description: 'Professional hand wash with premium sealant protection. Removes dirt, grime, and environmental contaminants while protecting your paint.',
    type: 'website',
    locale: 'en_US',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Exterior Hand Wash & Sealant',
  provider: {
    '@type': 'AutoRepair',
    name: 'One Detail At A Time LLC',
    image: 'https://1detailatatime.com/logo.png',
    '@id': 'https://1detailatatime.com',
    url: 'https://1detailatatime.com',
    telephone: '(726) 207-1007',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11692 Bricken Circle',
      addressLocality: 'San Antonio',
      addressRegion: 'TX',
      postalCode: '78233',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.5758,
      longitude: -98.3640,
    },
    areaServed: SERVICE_AREAS.map(area => ({
      '@type': 'City',
      name: area,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '28',
    },
  },
  description: 'Professional hand wash with premium sealant protection. Removes dirt, grime, and environmental contaminants while protecting your paint.',
  areaServed: SERVICE_AREAS.map(area => ({
    '@type': 'City',
    name: `${area}, TX`,
  })),
  offers: {
    '@type': 'Offer',
    price: '150',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-950">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                ← Home
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^\d]/g, '')}`}
                className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-balance">
              Exterior Hand Wash & Sealant
              <span className="block text-4xl md:text-5xl text-primary mt-4">San Antonio, TX</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Professional hand wash with premium sealant protection. Removes dirt, grime, and environmental contaminants while protecting your paint.
            </p>
            <div className="flex flex-wrap gap-6 items-center justify-center mb-12">
              <div className="bg-gray-800/50 px-8 py-4 rounded-xl border border-gray-700">
                <div className="text-gray-400 text-sm mb-1">Starting At</div>
                <div className="text-primary font-bold text-3xl">$150</div>
              </div>
              <div className="bg-gray-800/50 px-8 py-4 rounded-xl border border-gray-700">
                <div className="text-gray-400 text-sm mb-1">Duration</div>
                <div className="text-white font-semibold text-2xl">2-3 hours</div>
              </div>
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^\d]/g, '')}`}
              className="inline-block bg-primary hover:bg-primary-600 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Book Now
            </a>
            <div className="mt-8 text-sm text-gray-400">
              IDA-Certified • 10+ Years Experience • 28 Five-Star Reviews
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Serving Greater San Antonio</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {SERVICE_AREAS.map((area, index) => (
                <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-300">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold mb-16 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Pre-wash rinse and foam bath","Hand wash with premium soaps","Wheel and tire cleaning","Window cleaning (inside and out)","Towel dry and final wipe-down","Premium sealant application","Tire dressing application"].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors">
                  <svg className="w-7 h-7 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold mb-16 text-center">Why San Antonio Chooses Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["Removes dirt, grime, and environmental contaminants","Applies premium sealant for lasting protection","Enhances paint gloss and depth","Protects against UV rays and acid rain"].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 text-xl">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold mb-16 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{"step":1,"title":"Pre-wash Preparation","description":"Rinse vehicle thoroughly and apply foam bath to loosen dirt"},{"step":2,"title":"Hand Wash Process","description":"Two-bucket method hand wash with premium soaps"},{"step":3,"title":"Wheel & Tire Care","description":"Clean wheels, tires, and wheel wells thoroughly"},{"step":4,"title":"Drying & Protection","description":"Towel dry and apply premium sealant for protection"}].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-3xl shadow-lg shadow-primary/20">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold mb-16 text-center">Common Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How long does the sealant last?",
                  answer: "Our premium sealant typically lasts 3-6 months depending on weather conditions and how often you drive. Perfect for San Antonio's varying climate."
                },
                {
                  question: "Is this safe for all paint types?",
                  answer: "Yes, our products are safe for all paint types including clear coats, single-stage paints, and matte finishes. We use only premium, pH-balanced products."
                },
                {
                  question: "Can I wash my car between appointments?",
                  answer: "Yes, but we recommend using gentle, pH-neutral soaps and avoiding harsh chemicals to preserve the sealant protection."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{faq.question}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-br from-primary/10 to-primary/5 border-y border-primary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready for Exterior Hand Wash & Sealant?</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Schedule your exterior hand wash and sealant service in San Antonio today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^\d]/g, '')}`}
                className="bg-primary hover:bg-primary-600 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                Call {CONTACT_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-gray-800 hover:bg-gray-700 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105 border border-gray-700"
              >
                Get Directions
              </Link>
            </div>
            <div className="text-gray-400">
              <p className="mb-2">11692 Bricken Circle, San Antonio, TX 78233</p>
              <p>Serving Alamo Heights, Stone Oak & Greater San Antonio</p>
              <p className="mt-2">10% Donated to Junior Achievement of South Texas</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
