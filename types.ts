export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'primary' | 'additional';
  title: string;
  description: string;
  metaDescription: string;
  features: string[];
  benefits: string[];
  price: string;
  duration: string;
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}