import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getServiceBySlug, getAllServiceSlugs } from '../../lib/data';
import StickyHeader from '../../../src/components/service/StickyHeader';
import HeroSection from '../../../src/components/service/HeroSection';
import WhatsIncluded from '../../../src/components/service/WhatsIncluded';
import WhyChoose from '../../../src/components/service/WhyChoose';
import Process from '../../../src/components/service/Process';
import FAQAccordion from '../../../src/components/service/FAQAccordion';
import FinalCTA from '../../../src/components/service/FinalCTA';

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
      // Add complete benefit strings (normalized)
      ...service.benefits.map(benefit => benefit.toLowerCase().trim()),
      // Extract meaningful key phrases from longer benefits
      ...service.benefits
        .filter(benefit => benefit.split(' ').length > 6)
        .flatMap(benefit => {
          const words = benefit.toLowerCase().trim().split(' ');
          // Extract first 4-5 word phrases for longer benefits
          const phrases = [];
          if (words.length >= 6) {
            phrases.push(words.slice(0, 4).join(' '));
            if (words.length >= 8) {
              phrases.push(words.slice(0, 5).join(' '));
            }
          }
          return phrases;
        })
    ],
    openGraph: {
      title: service.name,
      description: service.shortDescription,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>    
    <div className="min-h-screen">

      {/* 1. Sticky Header */}
      <StickyHeader serviceName={service.name} />

      {/* 2. Hero Section */}
      <HeroSection service={service} />

      {/* 3. What's Included Section */}
      <WhatsIncluded service={service} />

      {/* 4. Why Choose This Service Section */}
      <WhyChoose service={service} />

      {/* 5. Process Section */}
      <Process service={service} />

      {/* 6. FAQ Accordion Section */}
      <FAQAccordion service={service} />

      {/* 7. Final CTA Section */}
      <FinalCTA service={service} />
    </div>
    </>
  );
}