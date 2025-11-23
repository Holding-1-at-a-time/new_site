import { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/data';

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
  title: 'Interior Deep Cleansing San Antonio | One Detail At A Time',
  description: 'Comprehensive interior detailing with steam cleaning, stain removal, and odor elimination. Professional upholstery and carpet treatment. Serving Alamo Heights, Stone Oak, and surrounding areas.',
  keywords: [
    "interior detailing San Antonio",
    "car interior cleaning Alamo Heights",
    "upholstery cleaning San Antonio TX",
    "steam cleaning car interior",
    "pet hair removal San Antonio",
    "car odor removal near me"
],
  openGraph: {
    title: 'Interior Deep Cleansing | San Antonio Auto Detailing',
    description: 'Comprehensive interior detailing with steam cleaning, stain removal, and odor elimination. Professional upholstery and carpet treatment.',
    type: 'website',
    locale: 'en_US',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Interior Deep Cleansing',
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
  description: 'Comprehensive interior detailing with steam cleaning, stain removal, and odor elimination. Professional upholstery and carpet treatment.',
  areaServed: SERVICE_AREAS.map(area => ({
    '@type': 'City',
    name: `${area}, TX`,
  })),
  offers: {
    '@type': 'Offer',
    price: '175',
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
              Interior Deep Cleansing
              <span className="block text-4xl md:text-5xl text-primary mt-4">San Antonio, TX</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Comprehensive interior detailing with steam cleaning, stain removal, and odor elimination. Professional upholstery and carpet treatment.
            </p>
            <div className="flex flex-wrap gap-6 items-center justify-center mb-12">
              <div className="bg-gray-800/50 px-8 py-4 rounded-xl border border-gray-700">
                <div className="text-gray-400 text-sm mb-1">Starting At</div>
                <div className="text-primary font-bold text-3xl">$175</div>
              </div>
              <div className="bg-gray-800/50 px-8 py-4 rounded-xl border border-gray-700">
                <div className="text-gray-400 text-sm mb-1">Duration</div>
                <div className="text-white font-semibold text-2xl">3-4 hours</div>
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
              {["Vacuum all surfaces and crevices","Steam cleaning for fabric and carpet","Leather conditioning and protection","Dashboard and console detailing","Door jamb cleaning","Pet hair removal","Odor elimination"].map((feature, index) => (
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
              {["Professional steam cleaning eliminates bacteria and allergens","Leather treatment prevents cracking in Texas heat","Complete odor elimination including smoke and pet smells","Serving San Antonio with appointment-only personalized service"].map((benefit, index) => (
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
              {[{"step":1,"title":"Interior Assessment","description":"Evaluate condition and problem areas"},{"step":2,"title":"Deep Vacuum","description":"Remove loose dirt and pet hair"},{"step":3,"title":"Steam Clean & Extract","description":"Deep clean all fabric surfaces"},{"step":4,"title":"Surface Detail & Protect","description":"Clean and protect interior surfaces"}].map((step) => (
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
              {[{"question":"Do you remove pet hair in San Antonio?","answer":"Yes! We specialize in thorough pet hair removal using professional tools. Serving all of San Antonio including Alamo Heights and Stone Oak."},{"question":"Can you eliminate smoke odor from cars?","answer":"Absolutely. Our deep cleansing process with ozone treatment eliminates smoke, pet, and other stubborn odors completely."},{"question":"How long does interior detailing take?","answer":"Typically 3-4 hours for comprehensive interior deep cleansing. Appointment required at our San Antonio location."}].map((faq, index) => (
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
            <h2 className="text-5xl font-bold mb-6">Ready for Interior Deep Cleansing?</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Schedule your interior deep cleansing service in San Antonio today
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
