// TypeScript types for the One Detail At A Time LLC website

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  startingPrice: number;
  duration: string;
  benefits: string[];
  includes: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  images: string[];
  keywords: string[];
  metaDescription: string;
  serviceAreas: string[];
  localBenefits: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  serviceArea: string;
  hours: {
    [key: string]: string;
  };
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    google?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  preferredContactMethod: 'phone' | 'email' | 'text';
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export interface PageProps {
  metadata?: SEOData;
}

export interface Testimonial {
  id: number;
  name: string;
  initial: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}