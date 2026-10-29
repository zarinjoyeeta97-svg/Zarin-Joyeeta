import React, { useState, useEffect } from 'react';
import { SiteConfig, Project, Testimonial } from './types/portfolio';
import {
  INITIAL_CONFIG,
  INITIAL_PROJECTS,
  INITIAL_SERVICES,
  INITIAL_TESTIMONIALS,
} from './data/initialData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { StudioCustomizerModal } from './components/StudioCustomizerModal';
import { SeoInspectorModal } from './components/SeoInspectorModal';

export default function App() {
  // Load persisted config or defaults
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('noventra_site_config');
      return saved ? JSON.parse(saved) : INITIAL_CONFIG;
    } catch {
      return INITIAL_CONFIG;
    }
  });

  // Load persisted projects or defaults
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('noventra_projects');
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  // Load testimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem('noventra_testimonials');
      return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
    } catch {
      return INITIAL_TESTIMONIALS;
    }
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);

  // Pre-fill state for contact inquiries launched from projects/services
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  // Persist config updates
  const handleSaveConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    localStorage.setItem('noventra_site_config', JSON.stringify(newConfig));
    document.title = newConfig.seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', newConfig.seoDescription);
  };

  const handleSaveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('noventra_projects', JSON.stringify(newProjects));
  };

  const handleResetDefaults = () => {
    localStorage.removeItem('noventra_site_config');
    localStorage.removeItem('noventra_projects');
    localStorage.removeItem('noventra_testimonials');
    setConfig(INITIAL_CONFIG);
    setProjects(INITIAL_PROJECTS);
    setTestimonials(INITIAL_TESTIMONIALS);
    document.title = INITIAL_CONFIG.seoTitle;
  };

  const handleAddTestimonial = (newReview: Testimonial) => {
    const updated = [newReview, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('noventra_testimonials', JSON.stringify(updated));
  };

  const handleUpdateSeo = (title: string, description: string) => {
    const updated = { ...config, seoTitle: title, seoDescription: description };
    handleSaveConfig(updated);
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.replaceState(null, '', `#${sectionId}`);
    }
  };

  // Listen to hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      setTimeout(() => scrollToSection(hash), 150);
    }
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'portfolio', 'services', 'testimonials', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquireFromProject = (category: string, projectTitle: string) => {
    setPrefilledService(category);
    setPrefilledNotes(`Referenced Portfolio Work: ${projectTitle}`);
    scrollToSection('contact');
  };

  const handleInquireFromService = (serviceTitle: string, customScopeNotes?: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledNotes(customScopeNotes || `Inquiring regarding ${serviceTitle}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#EDEDED] font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Navbar with 3-Zone Top Bar Contract */}
      <Navbar
        config={config}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenSeo={() => setIsSeoOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Home & Split Hero */}
        <HeroSection
          config={config}
          onExploreWork={() => scrollToSection('portfolio')}
          onContactMe={() => scrollToSection('contact')}
        />

        {/* About Me Section */}
        <AboutSection
          config={config}
          onNavigateContact={() => scrollToSection('contact')}
        />

        {/* Portfolio / My Projects */}
        <PortfolioSection
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
          onInquire={handleInquireFromProject}
        />

        {/* Services & Deliverables */}
        <ServicesSection
          services={INITIAL_SERVICES}
          onSelectServiceForInquiry={handleInquireFromService}
        />

        {/* Genuine Client Testimonials */}
        <TestimonialsSection
          testimonials={testimonials}
          onAddTestimonial={handleAddTestimonial}
        />

        {/* Contact Me Section */}
        <ContactSection
          config={config}
          prefilledProjectType={prefilledService}
          prefilledNotes={prefilledNotes}
        />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onNavigate={scrollToSection}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenSeo={() => setIsSeoOpen(true)}
      />

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        allProjects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onInquire={handleInquireFromProject}
      />

      {/* Studio Live Customizer (CMS / WordPress Style Editor) */}
      {isCustomizerOpen && (
        <StudioCustomizerModal
          config={config}
          projects={projects}
          onSaveConfig={handleSaveConfig}
          onSaveProjects={handleSaveProjects}
          onResetDefaults={handleResetDefaults}
          onClose={() => setIsCustomizerOpen(false)}
        />
      )}

      {/* SEO & Schema Structured Data Inspector */}
      {isSeoOpen && (
        <SeoInspectorModal
          config={config}
          projects={projects}
          onClose={() => setIsSeoOpen(false)}
          onUpdateSeo={handleUpdateSeo}
        />
      )}
    </div>
  );
}
