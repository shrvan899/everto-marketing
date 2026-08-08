export type PageRoute = 'home' | 'services' | 'about' | 'testimonials' | 'contact';
export type ServiceCategory = 'video' | 'web' | 'seo' | 'meta-ads' | 'smm';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  price: string;
  numericPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  category: ServiceCategory | 'all';
  title: string;
  client: string;
  image: string;
  description: string;
  metrics?: string;
  link?: string;
  videoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  serviceUsed: string;
  location?: string;
}

export interface ClientSocialPage {
  name: string;
  platform: 'Instagram' | 'Facebook';
  handle: string;
  followers: string;
  growth: string;
  link: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface VideoDemo {
  id: string;
  title: string;
  category: 'ai' | 'ugc' | 'editing';
  thumbnail: string;
  videoUrl: string;
  duration: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  established: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  gstin: string;
  udyamNo: string;
  googleBusinessUrl: string;
  instagramUrl: string;
  facebookUrl: string;
}
