import React from 'react';
import { SiteConfig } from '../types/portfolio';
import { Mail, Globe, Layers, Compass, Sparkles, Feather, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  config: SiteConfig;
  onNavigateContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onNavigateContact }) => {
  const pillars = [
    {
      icon: Compass,
      title: 'Strategic Brand Identity',
      desc: 'Formulating enduring visual languages from core market positioning, color psychology, and rigorous brand architecture.',
    },
    {
      icon: Feather,
      title: 'Precision Vector Craft',
      desc: 'Meticulous bezier geometry and geometric balance engineered for extreme scalability from app icons to skyscraper facades.',
    },
    {
      icon: Layers,
      title: 'Editorial Social Aesthetics',
      desc: 'Designing curated feeds, seamless carousel stories, and campaign visuals that turn passive scrollers into devoted advocates.',
    },
    {
      icon: Sparkles,
      title: 'AI Motion & Promo Video',
      desc: 'Pioneering cutting-edge generative lighting, volumetric particle simulation, and dynamic 3D logo reveals.',
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 border-t border-zinc-900 bg-[#0B0B0C] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
            <span>About The Studio</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Disciplines & Ethos</span>
          </div>
          <h2
            id="about-heading"
            className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
          >
            A bespoke atelier for distinct identities and moving visuals.
          </h2>
        </div>

        {/* 2-Column Body Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Biography & Ethos */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed">
            <p className="text-lg text-white font-medium leading-relaxed">
              {config.aboutBio}
            </p>

            <blockquote className="my-8 pl-6 border-l-2 border-[#D4AF37] italic text-zinc-400 font-serif-display text-lg">
              "{config.aboutPhilosophy}"
            </blockquote>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every design initiative commences with deep client inquiry: examining market context,
              clarifying target audience instincts, and distilling complex ideas into effortless
              visual clarity. There are no templated shortcuts—every logomark, typographic pairing,
              and color harmony is crafted specifically for your business goals.
            </p>

            {/* Professional Profiles & Direct Contact */}
            <div className="pt-6 border-t border-zinc-800/80 space-y-4">
              <div className="text-xs tracking-wider uppercase text-[#D4AF37] font-mono">
                Verified Professional Channels
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={config.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-200 transition-all group"
                >
                  <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Behance Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={config.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-200 transition-all group"
                >
                  <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Facebook Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-200 transition-all group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{config.email}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Disciplines Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
              Core Capabilities
            </div>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-[#D4AF37] group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white tracking-wide mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="p-6 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 mt-6 text-center space-y-3">
              <div className="text-xs text-zinc-400">
                Ready to elevate your brand presence?
              </div>
              <button
                onClick={onNavigateContact}
                className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-950 bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded-md shadow-md cursor-pointer"
              >
                Inquire For Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
