import React, { useState, useEffect } from 'react';
import { SiteConfig } from '../types/portfolio';
import { Sliders, Menu, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  config: SiteConfig;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCustomizer: () => void;
  onOpenSeo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  activeSection,
  onNavigate,
  onOpenCustomizer,
  onOpenSeo,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark with elegant luxury insignia */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm shrink-0"
            aria-label="Noventra Studio Home"
          >
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#D4AF37] to-[#8C6215] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif-display text-zinc-950 font-bold text-base leading-none">
                N
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display font-bold text-lg tracking-wider text-white whitespace-nowrap group-hover:text-[#D4AF37] transition-colors">
                {config.brandName.toUpperCase()}
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-400"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#E5C378] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + Studio Customizer trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSeo}
              title="Inspect SEO & Meta Tags"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-[#D4AF37] bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 rounded-md transition-all whitespace-nowrap shrink-0"
            >
              <span className="text-[10px] tracking-widest font-mono text-[#D4AF37]">SEO</span>
              <span>Audit</span>
            </button>

            <button
              onClick={onOpenCustomizer}
              title="Open Live Studio Customizer (WordPress-style visual editor)"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 rounded-md transition-all whitespace-nowrap shrink-0 shadow-sm"
            >
              <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">Customizer</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] hover:brightness-110 active:scale-95 transition-all rounded-md whitespace-nowrap shrink-0 shadow-md font-sans tracking-wide"
            >
              {config.ctaContact}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#0B0B0C]/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono pb-2 border-b border-zinc-800">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left py-3 text-xl font-serif-display font-medium text-zinc-200 hover:text-[#D4AF37] transition-colors border-b border-zinc-900 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>{config.availability}</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="w-full py-2.5 px-4 text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center gap-2"
            >
              <Sliders className="w-4 h-4 text-[#D4AF37]" />
              Open Live Customizer
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSeo();
              }}
              className="w-full py-2.5 px-4 text-sm font-medium text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-md flex items-center justify-center gap-2"
            >
              SEO & Structured Data Inspector
            </button>
          </div>
        </div>
      )}
    </>
  );
};
