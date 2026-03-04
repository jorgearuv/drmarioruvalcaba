export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface DoctorInfo {
  name: string;
  title: string;
  specialties: string[];
  cedula: string;
  cedulaEspecialidad: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  googleMapsUrl: string;
  latitude: number;
  longitude: number;
  siteUrl: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustBadge {
  name: string;
  type: "hospital" | "certification" | "association";
}

export interface Procedure {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  longDescription: string;
  benefits: ProcedureBenefit[];
  candidates: string[];
  recovery: RecoveryStep[];
  costRange: string;
  duration: string;
  hospitalStay: string;
  icon: string;
  faq: FAQItem[];
}

export interface ProcedureBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface RecoveryStep {
  period: string;
  description: string;
}

export interface SubProcedure {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  procedure?: string;
  rating: number;
  text: string;
  weightLost?: string;
  timeAgo: string;
  source?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}

export interface MedicalTourismPackage {
  title: string;
  features: string[];
  highlighted?: boolean;
}

export interface LogisticsStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface MeridaHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
}
