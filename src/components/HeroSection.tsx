import React from 'react';
import { SiteConfig } from '../types/portfolio';
import { ArrowDownRight, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  config: SiteConfig;
  onExploreWork: () => void;
  onContactMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  onExploreWork,
  onContactMe,
}) => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Split screen layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Unboxed category kicker (no pill boxes) */}
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
              <span>Noventra Studio</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Brand Architecture</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Visual Arts</span>
            </div>

            {/* Semantic Single Clear H1 */}
            <h1
              id="hero-heading"
              className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[1.08]"
            >
              {config.heroHeadline}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-serif-display font-medium text-[#E5C378] tracking-wide text-balance">
              {config.heroSubtitle}
            </p>

            {/* Explanatory lead prose */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Crafting iconic custom logos, cohesive corporate brand identities, editorial social
              media visual feeds, and high-impact AI-assisted promotional motion reveals. Built for
              ambitious visionaries who demand distinction.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 text-sm font-semibold text-zinc-950 bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] hover:brightness-110 active:scale-98 transition-all rounded-md shadow-xl flex items-center gap-2 group cursor-pointer"
              >
                <span>{config.ctaExplore}</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onContactMe}
                className="px-6 py-3.5 text-sm font-medium text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/70 hover:border-zinc-500 rounded-md transition-all active:scale-98 cursor-pointer"
              >
                {config.ctaContact}
              </button>
            </div>

            {/* Clean unboxed proof markers */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Vector Ownership</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>AI-Assisted Dynamic Motion</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>{config.availability}</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-xl overflow-hidden border border-zinc-800/90 bg-zinc-900 shadow-2xl transition-all duration-500 hover:border-[#D4AF37]/50">
              {/* Image Frame with resilient fallback */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-950">
                <img
                  src="/src/assets/images/noventra_hero_branding_1793265025922.jpg"
                  alt="Noventra Studio premium brand identity showcase with black stationery and warm embossed gold logo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Editorial bottom caption */}
              <div className="p-5 border-t border-zinc-800/80 bg-zinc-950/90 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono">
                    Featured Masterpiece
                  </div>
                  <div className="text-sm font-medium text-white">
                    Studio Aurum Brand Identity Suite
                  </div>
                </div>
                <button
                  onClick={onExploreWork}
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 group/btn"
                >
                  <span>Inspect</span>
                  <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width editorial divider ribbon */}
        <div className="mt-20 pt-8 border-y border-zinc-900/90 overflow-hidden">
          <div className="flex items-center justify-between gap-8 py-3 text-xs tracking-[0.25em] uppercase text-zinc-500 font-medium whitespace-nowrap overflow-x-auto no-scrollbar">
            <span>Custom Logo Design</span>
            <span aria-hidden="true" className="text-[#D4AF37]">✦</span>
            <span>Corporate Brand Identity</span>
            <span aria-hidden="true" className="text-[#D4AF37]">✦</span>
            <span>Editorial Social Media</span>
            <span aria-hidden="true" className="text-[#D4AF37]">✦</span>
            <span>Promotional Graphics</span>
            <span aria-hidden="true" className="text-[#D4AF37]">✦</span>
            <span>Logo Promotional Videos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
