import React from 'react';
import { SiteConfig } from '../types/portfolio';
import { ArrowUp, Globe, Mail } from 'lucide-react';

interface FooterProps {
  config: SiteConfig;
  onNavigate: (sectionId: string) => void;
  onOpenCustomizer: () => void;
  onOpenSeo: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onNavigate,
  onOpenCustomizer,
  onOpenSeo,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-[#070708] py-16 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-sm bg-[#D4AF37] flex items-center justify-center text-zinc-950 font-serif-display font-bold text-xs">
                N
              </div>
              <span className="font-serif-display font-bold text-base tracking-wider text-white">
                {config.brandName.toUpperCase()}
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm text-xs leading-relaxed">
              Bespoke graphic design studio specializing in vector logo systems, corporate identity
              guidelines, social media editorial grids, and AI logo promotional video reveals.
            </p>
            <div className="text-[11px] text-zinc-500 font-mono">
              {config.location}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-zinc-300 font-medium uppercase tracking-wider text-[11px] font-mono">
              Site Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home & Featured
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Noventra
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Projects & Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services & Deliverables
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-white transition-colors"
                >
                  Genuine Client Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Project Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Management */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-zinc-300 font-medium uppercase tracking-wider text-[11px] font-mono">
              Channels & Settings
            </div>
            <div className="space-y-2">
              <a
                href={config.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Behance: noventrastudio</span>
              </a>
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Facebook: noventrastudio</span>
              </a>
              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{config.email}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenCustomizer}
                className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 hover:text-white transition-colors"
              >
                Live Customizer (CMS)
              </button>
              <button
                onClick={onOpenSeo}
                className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 hover:text-[#D4AF37] transition-colors"
              >
                SEO & Schema Inspector
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {config.brandName}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-[#D4AF37] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
