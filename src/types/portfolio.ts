export type ProjectCategory =
  | 'Logo Design'
  | 'Brand Identity Design'
  | 'Social Media Design'
  | 'Promotional Graphics and Logo Videos';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  colorPalette: { name: string; hex: string }[];
  typography: { role: string; family: string }[];
  image: string;
  altText: string;
  isFeatured: boolean;
  videoUrl?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  categoryRef: ProjectCategory;
  idealFor: string;
}

export interface SiteConfig {
  brandName: string;
  designerName: string;
  roleTitle: string;
  heroHeadline: string;
  heroSubtitle: string;
  ctaExplore: string;
  ctaContact: string;
  aboutBio: string;
  aboutPhilosophy: string;
  email: string;
  behanceUrl: string;
  facebookUrl: string;
  location: string;
  availability: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  feedback: string;
  projectType: ProjectCategory;
  year: string;
  isVerified: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
}
