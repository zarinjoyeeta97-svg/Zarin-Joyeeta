import React, { useState } from 'react';
import { SiteConfig, Project } from '../types/portfolio';
import { X, Save, RotateCcw, Download, Copy, Check, Sliders, FileText, Image as ImageIcon, Link as LinkIcon, Sparkles } from 'lucide-react';

interface StudioCustomizerModalProps {
  config: SiteConfig;
  projects: Project[];
  onSaveConfig: (newConfig: SiteConfig) => void;
  onSaveProjects: (newProjects: Project[]) => void;
  onResetDefaults: () => void;
  onClose: () => void;
}

export const StudioCustomizerModal: React.FC<StudioCustomizerModalProps> = ({
  config,
  projects,
  onSaveConfig,
  onSaveProjects,
  onResetDefaults,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'socials' | 'seo' | 'projects' | 'export'>('content');
  const [formConfig, setFormConfig] = useState<SiteConfig>({ ...config });
  const [copiedExport, setCopiedExport] = useState(false);
  const [saveNotification, setSaveNotification] = useState(false);

  const handleSave = () => {
    onSaveConfig(formConfig);
    setSaveNotification(true);
    setTimeout(() => setSaveNotification(false), 2000);
  };

  const exportPayload = JSON.stringify(
    {
      noventra_version: '2.0-wp-compatible',
      site_config: formConfig,
      portfolio_items: projects,
      exported_at: new Date().toISOString(),
    },
    null,
    2
  );

  const handleCopyExport = () => {
    navigator.clipboard.writeText(exportPayload);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-[#121214] border border-zinc-800 rounded-xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-[#D4AF37]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 id="customizer-modal-title" className="text-base font-semibold text-white">
                Studio Customizer (CMS & WordPress Editor)
              </h3>
              <p className="text-xs text-zinc-400">
                Easily customize headings, copy, social links, and portfolio data in real time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {saveNotification && (
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                <Check className="w-3.5 h-3.5" />
                <span>Saved!</span>
              </span>
            )}
            <button
              onClick={handleSave}
              className="px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-[#D4AF37] hover:bg-[#E5C378] rounded-md transition-colors flex items-center gap-1.5 shadow"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply Changes</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-zinc-800/80 bg-zinc-950/60 text-xs overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('content')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'content'
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Headings & Copy
          </button>
          <button
            onClick={() => setActiveTab('socials')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'socials'
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Socials & Contact Links
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'seo'
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            SEO & Meta
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'projects'
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Portfolio Items ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'export'
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            WordPress / JSON Export
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs">
          {activeTab === 'content' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Studio Brand Name
                  </label>
                  <input
                    type="text"
                    value={formConfig.brandName}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, brandName: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Designer Specialty / Role Title
                  </label>
                  <input
                    type="text"
                    value={formConfig.roleTitle}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, roleTitle: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Hero Headline
                </label>
                <input
                  type="text"
                  value={formConfig.heroHeadline}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, heroHeadline: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Hero Subtitle
                </label>
                <input
                  type="text"
                  value={formConfig.heroSubtitle}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, heroSubtitle: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Primary CTA Button Label
                  </label>
                  <input
                    type="text"
                    value={formConfig.ctaExplore}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, ctaExplore: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Secondary CTA Button Label
                  </label>
                  <input
                    type="text"
                    value={formConfig.ctaContact}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, ctaContact: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  About Me — Biography
                </label>
                <textarea
                  rows={3}
                  value={formConfig.aboutBio}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, aboutBio: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Design Philosophy Quote
                </label>
                <textarea
                  rows={2}
                  value={formConfig.aboutPhilosophy}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, aboutPhilosophy: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Studio Location / Working Model
                  </label>
                  <input
                    type="text"
                    value={formConfig.location}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, location: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Current Availability Status
                  </label>
                  <input
                    type="text"
                    value={formConfig.availability}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, availability: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'socials' && (
            <div className="space-y-5">
              <p className="text-zinc-400">
                Update your professional channel URLs and client inquiry email address.
              </p>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Studio Contact Email Address *
                </label>
                <input
                  type="email"
                  value={formConfig.email}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, email: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Professional Behance Profile URL
                </label>
                <input
                  type="url"
                  value={formConfig.behanceUrl}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, behanceUrl: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Professional Facebook Profile / Page URL
                </label>
                <input
                  type="url"
                  value={formConfig.facebookUrl}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, facebookUrl: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-zinc-300 font-medium">
                    SEO Page Title
                  </label>
                  <span className={`font-mono text-[11px] ${formConfig.seoTitle.length >= 30 && formConfig.seoTitle.length <= 60 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {formConfig.seoTitle.length} / 60 chars
                  </span>
                </div>
                <input
                  type="text"
                  value={formConfig.seoTitle}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, seoTitle: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <p className="text-[11px] text-zinc-500 mt-1">
                  Optimal length: 30–60 characters. Appears in browser tabs and Google Search result headlines.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-zinc-300 font-medium">
                    SEO Meta Description
                  </label>
                  <span className={`font-mono text-[11px] ${formConfig.seoDescription.length >= 120 && formConfig.seoDescription.length <= 160 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {formConfig.seoDescription.length} / 160 chars
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={formConfig.seoDescription}
                  onChange={(e) =>
                    setFormConfig({ ...formConfig, seoDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <p className="text-[11px] text-zinc-500 mt-1">
                  Optimal length: 120–160 characters. Provides a concise, action-oriented summary for search engine snippet indexing.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="text-xs text-zinc-400 mb-2">
                Manage your featured portfolio projects and deliverables:
              </div>
              <div className="space-y-3">
                {projects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded bg-zinc-950 border border-zinc-800 overflow-hidden shrink-0">
                        <img src={proj.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-white truncate">
                          {proj.title}
                        </div>
                        <div className="text-[11px] text-zinc-400 font-mono">
                          {proj.category} · {proj.client} ({proj.year})
                        </div>
                      </div>
                    </div>

                    <div className="text-right text-[11px] font-mono text-[#D4AF37]">
                      {proj.deliverables.length} Deliverables
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="text-xs font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>WordPress & Headless CMS Synchronization</span>
                </div>
                <p className="text-xs text-zinc-400">
                  You can copy this JSON configuration schema to sync your content directly with a
                  WordPress ACF block, REST API, or static deployment.
                </p>
              </div>

              <div className="relative">
                <textarea
                  readOnly
                  rows={10}
                  value={exportPayload}
                  className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-md font-mono text-[11px] text-zinc-300 focus:outline-none"
                />
                <button
                  onClick={handleCopyExport}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs text-zinc-200 flex items-center gap-1.5 transition-colors"
                >
                  {copiedExport ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Config JSON</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onResetDefaults}
            className="text-xs text-zinc-500 hover:text-red-400 flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All to Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-md bg-[#D4AF37] hover:bg-[#E5C378] text-zinc-950 font-semibold text-xs transition-colors shadow"
            >
              Save & Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
