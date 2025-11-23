#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SERVICE_AREAS = [
  'San Antonio', 'Alamo Heights', 'Terrell Hills', 'Olmos Park',
  'Balcones Heights', 'Castle Hills', 'Stone Oak', 'Dominion',
  'Shavano Park', 'Leon Valley'
];

const SERVICES = {
  'interior-deep-cleansing': {
    title: 'Interior Deep Cleansing',
    price: '175',
    duration: '3-4 hours',
    description: 'Comprehensive interior detailing with steam cleaning, stain removal, and odor elimination. Professional upholstery and carpet treatment.',
    keywords: [
      'interior detailing San Antonio',
      'car interior cleaning Alamo Heights',
      'upholstery cleaning San Antonio TX',
      'steam cleaning car interior',
      'pet hair removal San Antonio',
      'car odor removal near me',
    ],
    features: [
      'Vacuum all surfaces and crevices',
      'Steam cleaning for fabric and carpet',
      'Leather conditioning and protection',
      'Dashboard and console detailing',
      'Door jamb cleaning',
      'Pet hair removal',
      'Odor elimination',
    ],
    benefits: [
      'Professional steam cleaning eliminates bacteria and allergens',
      'Leather treatment prevents cracking in Texas heat',
      'Complete odor elimination including smoke and pet smells',
      'Serving San Antonio with appointment-only personalized service',
    ],
    process: [
      { step: 1, title: 'Interior Assessment', description: 'Evaluate condition and problem areas' },
      { step: 2, title: 'Deep Vacuum', description: 'Remove loose dirt and pet hair' },
      { step: 3, title: 'Steam Clean & Extract', description: 'Deep clean all fabric surfaces' },
      { step: 4, title: 'Surface Detail & Protect', description: 'Clean and protect interior surfaces' },
    ],
    faqs: [
      {
        question: 'Do you remove pet hair in San Antonio?',
        answer: 'Yes! We specialize in thorough pet hair removal using professional tools. Serving all of San Antonio including Alamo Heights and Stone Oak.',
      },
      {
        question: 'Can you eliminate smoke odor from cars?',
        answer: 'Absolutely. Our deep cleansing process with ozone treatment eliminates smoke, pet, and other stubborn odors completely.',
      },
      {
        question: 'How long does interior detailing take?',
        answer: 'Typically 3-4 hours for comprehensive interior deep cleansing. Appointment required at our San Antonio location.',
      },
    ],
  },
  'paint-correction': {
    title: 'Paint Correction',
    price: '400',
    duration: '6-8 hours',
    description: 'Multi-stage paint correction removes swirls, scratches, and oxidation. Professional machine polishing for flawless finish.',
    keywords: [
      'paint correction San Antonio',
      'swirl mark removal Alamo Heights',
      'scratch removal San Antonio TX',
      'car polishing near me',
      'paint restoration San Antonio',
      'clear coat correction Texas',
    ],
    features: [
      'Multi-stage paint correction',
      'Removes swirl marks and light scratches',
      'Eliminates water spots and oxidation',
      'Restores paint clarity and depth',
      'Machine polishing with professional tools',
      'Paint thickness measurement',
    ],
    benefits: [
      'IDA-certified paint correction specialist in San Antonio',
      'Mirror-like finish removes years of damage',
      'Perfect preparation for ceramic coating',
      'Increases vehicle value and appearance dramatically',
    ],
    process: [
      { step: 1, title: 'Paint Inspection', description: 'Assess damage and measure thickness' },
      { step: 2, title: 'Decontamination', description: 'Remove all surface contaminants' },
      { step: 3, title: 'Compound & Polish', description: 'Multi-stage correction process' },
      { step: 4, title: 'Final Inspection', description: 'Verify results under LED lighting' },
    ],
    faqs: [
      {
        question: 'How much does paint correction cost in San Antonio?',
        answer: 'Our professional paint correction starts at $400. Price varies based on vehicle size and paint condition. Serving all of San Antonio.',
      },
      {
        question: 'Will paint correction remove all scratches?',
        answer: 'We can remove or significantly reduce most light to moderate scratches. Deep scratches penetrating clear coat may require touch-up.',
      },
      {
        question: 'Do you offer mobile paint correction?',
        answer: 'We operate from our San Antonio location at 11692 Bricken Circle for best results with professional lighting and equipment.',
      },
    ],
  },
  'ceramic-coating': {
    title: 'Ceramic Coating',
    price: '800',
    duration: '2-3 days',
    description: 'Premium nano-ceramic coating provides 3-5 years of protection. Professional-grade application with paint correction included.',
    keywords: [
      'ceramic coating San Antonio',
      'car ceramic coating Alamo Heights',
      'nano coating San Antonio TX',
      'paint protection San Antonio',
      'ceramic coat near me',
      'hydrophobic coating Texas',
    ],
    features: [
      'Professional-grade nano-ceramic coating',
      '3-5 year protection',
      'Enhanced gloss and depth',
      'Hydrophobic water beading',
      'UV and chemical resistance',
      'Easier maintenance',
      'Includes paint correction',
    ],
    benefits: [
      'Long-term protection perfect for San Antonio weather',
      'Superior gloss and water beading effect',
      'Protects against Texas UV rays and heat',
      'Reduces washing frequency and effort significantly',
    ],
    process: [
      { step: 1, title: 'Paint Preparation', description: 'Full paint correction for perfect surface' },
      { step: 2, title: 'Surface Prep', description: 'Panel wipe removes all residues' },
      { step: 3, title: 'Coating Application', description: 'Careful application in controlled environment' },
      { step: 4, title: 'Curing', description: '24-48 hour cure time before delivery' },
    ],
    faqs: [
      {
        question: 'How long does ceramic coating last in San Antonio?',
        answer: 'Our professional ceramic coating lasts 3-5 years with proper maintenance, even in Texas heat and sun.',
      },
      {
        question: 'What is ceramic coating cost in San Antonio?',
        answer: 'Professional ceramic coating starts at $800 including paint correction. Serving Alamo Heights, Stone Oak, and greater San Antonio.',
      },
      {
        question: 'Can I wash my car after ceramic coating?',
        answer: 'Wait 7 days before first wash. After that, wash normally with pH-neutral soap. Coating makes washing much easier.',
      },
    ],
  },
  'headlight-restoration': {
    title: 'Headlight Restoration',
    price: '100',
    duration: '1-2 hours',
    description: 'Professional headlight restoration removes yellowing and oxidation. UV-protective coating prevents future degradation.',
    keywords: [
      'headlight restoration San Antonio',
      'foggy headlight repair Alamo Heights',
      'headlight cleaning San Antonio TX',
      'yellow headlight fix near me',
      'headlight clear coat Texas',
      'headlight polishing San Antonio',
    ],
    features: [
      'Wet sanding to remove oxidation',
      'Multi-stage polishing',
      'UV-protective clear coat',
      'Improved light output',
      'Enhanced appearance',
    ],
    benefits: [
      'Dramatically improves nighttime visibility and safety',
      'Avoid costly headlight replacement ($300-$1000)',
      'UV protection prevents yellowing in Texas sun',
      'Same-day service available in San Antonio',
    ],
    process: [
      { step: 1, title: 'Inspection & Masking', description: 'Assess damage and protect paint' },
      { step: 2, title: 'Wet Sanding', description: 'Remove oxidized layer progressively' },
      { step: 3, title: 'Polish & Refine', description: 'Restore clarity with compounds' },
      { step: 4, title: 'UV Protection', description: 'Apply protective clear coat' },
    ],
    faqs: [
      {
        question: 'How much is headlight restoration in San Antonio?',
        answer: 'Professional headlight restoration is $100 for both headlights. Much cheaper than replacement. Serving all San Antonio areas.',
      },
      {
        question: 'How long does headlight restoration last?',
        answer: 'With our UV-protective coating, results last 2-3 years even in Texas sun. Much longer than DIY kits.',
      },
      {
        question: 'Can you restore severely yellowed headlights?',
        answer: 'Yes! We can restore most oxidized headlights. Free assessment at our San Antonio location.',
      },
    ],
  },
  'full-detail-package': {
    title: 'Full Detail Package',
    price: '450',
    duration: '6-8 hours',
    description: 'Complete interior and exterior transformation. Includes hand wash, sealant, interior deep clean, and 1-step paint correction.',
    keywords: [
      'full car detailing San Antonio',
      'complete auto detail Alamo Heights',
      'interior exterior detail San Antonio TX',
      'full service car wash near me',
      'complete car cleaning San Antonio',
      'auto detailing package Texas',
    ],
    features: [
      'Complete exterior hand wash & sealant',
      'Full interior deep cleansing',
      '1-Step paint correction',
      'Wheel and tire detailing',
      'Engine bay cleaning',
      'All glass and windows',
      'Door jambs and trunk',
    ],
    benefits: [
      'Best value - combines multiple services at discounted rate',
      'Complete transformation inside and out',
      'Show-car quality results from IDA-certified professional',
      'Perfect for San Antonio residents wanting comprehensive care',
    ],
    process: [
      { step: 1, title: 'Complete Assessment', description: 'Evaluate entire vehicle condition' },
      { step: 2, title: 'Exterior Correction', description: 'Wash, decontaminate, correct, seal' },
      { step: 3, title: 'Interior Restoration', description: 'Deep clean all interior surfaces' },
      { step: 4, title: 'Final Details', description: 'Address remaining areas and inspect' },
    ],
    faqs: [
      {
        question: 'What is included in full detail package?',
        answer: 'Complete interior deep clean, exterior hand wash with sealant, 1-step paint correction, wheels, tires, glass, and engine bay. Everything your car needs.',
      },
      {
        question: 'How long does full detailing take in San Antonio?',
        answer: 'Full detail package takes 6-8 hours. Appointment required at our San Antonio location for best results.',
      },
      {
        question: 'Is full detail worth it vs. regular car wash?',
        answer: 'Absolutely! Full detail restores and protects your vehicle, extending its life and value. Much more than a basic wash.',
      },
    ],
  },
};

// Generate page template
function generateServicePage(slug, service) {
  return `import { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/data';

const SERVICE_AREAS = ${JSON.stringify(SERVICE_AREAS, null, 2)};

export const metadata: Metadata = {
  title: '${service.title} San Antonio | One Detail At A Time',
  description: '${service.description} Serving Alamo Heights, Stone Oak, and surrounding areas.',
  keywords: ${JSON.stringify(service.keywords, null, 4)},
  openGraph: {
    title: '${service.title} | San Antonio Auto Detailing',
    description: '${service.description}',
    type: 'website',
    locale: 'en_US',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: '${service.title}',
  provider: {
    '@type': 'AutoRepair',
    name: 'One Detail At A Time LLC',
    image: 'https://odaat1.com/logo.png',
    '@id': 'https://odaat1.com',
    url: 'https://odaat1.com',
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
  description: '${service.description}',
  areaServed: SERVICE_AREAS.map(area => ({
    '@type': 'City',
    name: \`\${area}, TX\`,
  })),
  offers: {
    '@type': 'Offer',
    price: '${service.price}',
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
                href={\`tel:\${CONTACT_INFO.phone.replace(/[^\\d]/g, '')}\`}
                className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-balance">
              ${service.title}
              <span className="block text-4xl md:text-5xl text-primary mt-4">San Antonio, TX</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              ${service.description}
            </p>
            <div className="flex flex-wrap gap-6 items-center justify-center mb-12">
              <div className="bg-gray-800/50 px-8 py-4 rounded-xl border border-gray-700">
                <div className="text-gray-400 text-sm mb-1">Starting At</div>
                <div className="text-primary font-bold text-3xl">$${service.price}</div>
              </div>
              <div className="bg-gray-800/50 px-8 py-4 rounded-xl border border-gray-700">
                <div className="text-gray-400 text-sm mb-1">Duration</div>
                <div className="text-white font-semibold text-2xl">${service.duration}</div>
              </div>
            </div>
            <a
              href={\`tel:\${CONTACT_INFO.phone.replace(/[^\\d]/g, '')}\`}
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
              {${JSON.stringify(service.features)}.map((feature, index) => (
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
              {${JSON.stringify(service.benefits)}.map((benefit, index) => (
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
              {${JSON.stringify(service.process)}.map((step) => (
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
              {${JSON.stringify(service.faqs)}.map((faq, index) => (
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
            <h2 className="text-5xl font-bold mb-6">Ready for ${service.title}?</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Schedule your ${service.title.toLowerCase()} service in San Antonio today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href={\`tel:\${CONTACT_INFO.phone.replace(/[^\\d]/g, '')}\`}
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
`;
}

// Generate all service pages
Object.entries(SERVICES).forEach(([slug, service]) => {
  const dirPath = path.join(__dirname, 'app', 'services', slug);
  fs.mkdirSync(dirPath, { recursive: true });
  
  const filePath = path.join(dirPath, 'page.tsx');
  const content = generateServicePage(slug, service);
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ Generated: ${slug}/page.tsx`);
});

console.log('\n✅ All 6 service pages generated with advanced local SEO!');
