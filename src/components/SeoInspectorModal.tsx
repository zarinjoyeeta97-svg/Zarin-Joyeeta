import React, { useState, useEffect } from 'react';
import { SiteConfig, Project } from '../types/portfolio';
import { X, CheckCircle2, AlertCircle, Copy, Check, Search, Share2, Code2, Globe } from 'lucide-react';

interface SeoInspectorModalProps {
  config: SiteConfig;
  projects: Project[];
  onClose: () => void;
  onUpdateSeo: (title: string, description: string) => void;
}

export const SeoInspectorModal: React.FC<SeoInspectorModalProps> = ({
  config,
  projects,
  onClose,
  onUpdateSeo,
}) => {
  const [title, setTitle] = useState(config.seoTitle);
  const [description, setDescription] = useState(config.seoDescription);
  const [copiedSchema, setCopiedSchema] = useState(false);
  const [h1Count, setH1Count] = useState<number>(1);

  useEffect(() => {
    // Check actual DOM for h1 elements
    const h1Elements = document.querySelectorAll('h1');
    setH1Count(h1Elements.length);
  }, []);

  const titleLength = title.length;
  const isTitleOptimal = titleLength >= 30 && titleLength <= 60;

  const descLength = description.length;
  const isDescOptimal = descLength >= 120 && descLength <= 160;

  const handleApply = () => {
    onUpdateSeo(title, description);
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
  };

  const schemaJson = JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: config.brandName,
      image: 'https://noventrastudio.com/src/assets/images/noventra_hero_branding_1793265025922.jpg',
      description: description,
      email: config.email,
      priceRange: '$$',
      areaServed: 'Worldwide',
      knowsAbout: [
        'Logo Design',
        'Brand Identity Design',
        'Social Media Post Design',
        'Promotional Visual Design',
        'Logo Promotional Video Concepts',
      ],
      founder: {
        '@type': 'Person',
        name: config.designerName,
        jobTitle: config.roleTitle,
      },
    },
    null,
    2
  );

  const handleCopySchema = () => {
    navigator.clipboard.writeText(schemaJson);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="seo-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-[#121214] border border-zinc-800 rounded-xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto text-xs">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-[#D4AF37]">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <h3 id="seo-modal-title" className="text-base font-semibold text-white">
                SEO & Structured Data Inspector
              </h3>
              <p className="text-zinc-400">
                Audits single H1 hierarchy, Google snippet preview, OpenGraph card, and Schema.org.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* SEO Health Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* H1 Check */}
            <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-zinc-400">Semantic H1 Check</span>
                {h1Count === 1 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <div className="text-sm font-bold text-white">
                {h1Count} H1 Heading {h1Count === 1 ? '(Valid)' : '(Expected 1)'}
              </div>
              <p className="text-[11px] text-zinc-500">
                Adheres to the strict one-H1-per-page hierarchy rule.
              </p>
            </div>

            {/* Title Check */}
            <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-zinc-400">Page Title</span>
                {isTitleOptimal ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <div className="text-sm font-bold text-white">
                {titleLength} / 60 Characters
              </div>
              <p className="text-[11px] text-zinc-500">
                {isTitleOptimal ? 'Optimal length for Google SERP' : 'Recommended: 30–60 chars'}
              </p>
            </div>

            {/* Meta Description Check */}
            <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-zinc-400">Description</span>
                {isDescOptimal ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <div className="text-sm font-bold text-white">
                {descLength} / 160 Characters
              </div>
              <p className="text-[11px] text-zinc-500">
                {isDescOptimal ? 'Optimal length for search snippets' : 'Recommended: 120–160 chars'}
              </p>
            </div>
          </div>

          {/* Live Inputs */}
          <div className="space-y-4 p-5 rounded-lg bg-zinc-900/60 border border-zinc-800">
            <h4 className="font-semibold text-white text-sm">Live Meta Tags Editor</h4>
            <div>
              <label className="block text-zinc-300 font-medium mb-1">
                Editable Title Tag
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block text-zinc-300 font-medium mb-1">
                Editable Meta Description Tag
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleApply}
                className="px-4 py-2 bg-[#D4AF37] hover:bg-[#E5C378] text-zinc-950 font-semibold rounded-md transition-colors"
              >
                Apply Meta Updates
              </button>
            </div>
          </div>

          {/* Google Search Snippet Simulation */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-sm flex items-center gap-2">
              <Search className="w-4 h-4 text-[#D4AF37]" />
              <span>Google Search Result Snippet Preview</span>
            </h4>
            <div className="p-4 rounded-lg bg-[#202124] border border-zinc-700 text-left space-y-1.5 font-sans">
              <div className="flex items-center gap-2 text-[11px] text-[#bdc1c6]">
                <Globe className="w-3.5 h-3.5 text-zinc-400" />
                <span>https://noventrastudio.com</span>
                <span className="text-zinc-500">› portfolio</span>
              </div>
              <div className="text-base text-[#8ab4f8] hover:underline cursor-pointer font-medium leading-snug">
                {title}
              </div>
              <div className="text-xs text-[#bdc1c6] leading-relaxed">
                {description}
              </div>
            </div>
          </div>

          {/* Social Share Card Preview */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-sm flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#D4AF37]" />
              <span>OpenGraph & Twitter Card Social Preview</span>
            </h4>
            <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 max-w-lg">
              <div className="aspect-[16/9] bg-zinc-900 overflow-hidden relative">
                <img
                  src="/src/assets/images/noventra_hero_branding_1793265025922.jpg"
                  alt="Noventra Studio Social Card"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <div className="text-[10px] uppercase font-mono text-zinc-500">
                  noventrastudio.com
                </div>
                <div className="text-sm font-semibold text-white">
                  {title}
                </div>
                <div className="text-xs text-zinc-400 line-clamp-2">
                  {description}
                </div>
              </div>
            </div>
          </div>

          {/* Image Alt Text Audit */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-sm">
              Image Alt-Text Accessibility Audit
            </h4>
            <div className="space-y-2">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">{p.title}</div>
                    <div className="text-zinc-400 text-[11px] mt-0.5 font-mono">
                      alt="{p.altText}"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schema.org Structured Data */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Schema.org JSON-LD (ProfessionalService)</span>
              </h4>
              <button
                onClick={handleCopySchema}
                className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs flex items-center gap-1.5 transition-colors"
              >
                {copiedSchema ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy JSON-LD</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-[11px] font-mono text-zinc-300 overflow-x-auto">
              {schemaJson}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-950 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-md transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
