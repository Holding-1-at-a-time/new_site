import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getServiceBySlug, getAllServiceSlugs, businessInfo } from '../../lib/data';
import StickyHeader from '../../../src/components/service/StickyHeader';
import HeroSection from '../../../src/components/service/HeroSection';
import WhatsIncluded from '../../../src/components/service/WhatsIncluded';
import WhyChoose from '../../../src/components/service/WhyChoose';
import Process from '../../../src/components/service/Process';
import FAQAccordion from '../../../src/components/service/FAQAccordion';
import FinalCTA from '../../../src/components/service/FinalCTA';
import ServiceAreas from '../../../src/components/service/ServiceAreas';
import LocalBenefits from '../../../src/components/service/LocalBenefits';
import ServiceGallery from '../../../src/components/service/ServiceGallery';
import BeforeAfterShowcase from '../../../src/components/service/BeforeAfterShowcase';

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
    title: `${service.name} San Antonio | One Detail At A Time LLC`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | One Detail At A Time LLC`,
      description: service.shortDescription,
      type: 'website',
      url: `https://www.odaat1.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: businessInfo.name,
      image: 'https://www.odaat1.com/logo.png', // Replace with actual logo URL
      '@id': 'https://www.odaat1.com',
      url: 'https://www.odaat1.com',
      telephone: businessInfo.phone,
      priceRange: '$', // Or generate dynamically
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessInfo.address,
        addressLocality: businessInfo.city,
        addressRegion: businessInfo.state,
        postalCode: businessInfo.zipCode,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.5758, // Replace with actual coordinates
        longitude: -98.3640,
      },
      areaServed: service.serviceAreas.map(area => ({
        '@type': 'City',
        name: area,
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '28',
      },
    },
    description: service.fullDescription,
    areaServed: service.serviceAreas.map(area => ({
      '@type': 'City',
      name: `${area}, TX`,
    })),
    offers: {
      '@type': 'Offer',
      price: service.startingPrice.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">

        {/* 1. Sticky Header */}
        <StickyHeader serviceName={service.name} />

        {/* 2. Hero Section */}
        <HeroSection service={service} />

        {/* 3. Service Gallery Section */}
        <ServiceGallery service={service} />

        {/* 4. What's Included Section */}
        <WhatsIncluded service={service} />

        {/* 4. Local Benefits Section */}
        <LocalBenefits service={service} />

        {/* 5. Service Areas Section */}
        <ServiceAreas service={service} />

        {/* 6. Why Choose This Service Section */}
        <WhyChoose service={service} />

        {/* 7. Process Section */}
        <Process service={service} />

        {/* 8. FAQ Accordion Section */}
        <FAQAccordion service={service} />

        {/* 9. Final CTA Section */}
        <FinalCTA service={service} />
      </div>
    </>
  );
}