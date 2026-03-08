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
    tiktok: string;
    doctoralia: string;
  };
}

export interface TrustBadge {
  name: string;
  abbreviation: string;
  type: "hospital" | "certification" | "association";
  logoPath?: string;
  url?: string;
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
  imagePath?: string;
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

export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; style: "bullet" | "ordered"; items: string[] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  imagePath?: string;
  content: ContentBlock[];
}

