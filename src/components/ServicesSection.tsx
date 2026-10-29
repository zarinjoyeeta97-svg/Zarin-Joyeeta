import React, { useState } from 'react';
import { ServiceItem } from '../types/portfolio';
import { Check, Clock, Sparkles, ArrowRight, Calculator } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForInquiry: (serviceTitle: string, customScopeNotes?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectServiceForInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<string>(services[0]?.id || 'custom-logo-design');

  // Estimator state for client scope calculator
  const [selectedBaseService, setSelectedBaseService] = useState<string>(services[0]?.title || 'Custom Logo Design');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const addonsList = [
    { id: 'guidelines', name: 'Comprehensive Brand Style Guide (PDF)', timeline: '+5 Days' },
    { id: 'stationery', name: 'Corporate Stationery Set (Business Cards, Letterhead)', timeline: '+3 Days' },
    { id: 'social-kit', name: 'Social Media Launch Grid (9 Custom Posts)', timeline: '+4 Days' },
    { id: 'video-reveal', name: 'Cinematic AI 3D Logo Reveal Video', timeline: '+6 Days' },
    { id: 'expedited', name: 'Priority Fast-Track Turnaround', timeline: 'Reduced by 40%' },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLaunchInquiry = (serviceTitle: string) => {
    const addonNames = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.name)
      .filter(Boolean);
    const scopeNotes =
      addonNames.length > 0
        ? `Selected Custom Add-ons: ${addonNames.join(', ')}`
        : undefined;
    onSelectServiceForInquiry(serviceTitle, scopeNotes);
  };

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 md:py-32 border-t border-zinc-900 bg-[#0B0B0C] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Structured Offerings</span>
          </div>
          <h2
            id="services-heading"
            className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
          >
            Design Services Tailored to High-End Brand Growth
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Every engagement delivers comprehensive vector masters, commercial rights ownership,
            and fastidious typographic precision.
          </p>
        </div>

        {/* Services Navigation Pills/Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pb-6 border-b border-zinc-900">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => {
                  setActiveTab(service.id);
                  setSelectedBaseService(service.title);
                }}
                className={`p-3 text-left rounded-lg transition-all border ${
                  isActive
                    ? 'bg-zinc-900 border-[#D4AF37]/60 text-white shadow-md'
                    : 'bg-zinc-950/60 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:border-zinc-800'
                }`}
              >
                <div className="text-xs font-mono text-[#D4AF37] mb-1">
                  0{services.indexOf(service) + 1}
                </div>
                <div className="text-xs sm:text-sm font-semibold truncate">
                  {service.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        {activeService && (
          <div className="mt-8 p-6 sm:p-10 rounded-xl bg-zinc-900/40 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Description & Strategy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  Service Overview
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeService.title}
                </h3>
                <p className="text-sm font-serif-display text-[#E5C378] italic mt-1">
                  "{activeService.tagline}"
                </p>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              <div className="p-4 rounded-lg bg-zinc-950/70 border border-zinc-800/80">
                <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">
                  Ideal Partner Match
                </span>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {activeService.idealFor}
                </p>
              </div>

              <div className="flex items-center gap-6 pt-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Turnaround: <strong className="text-white">{activeService.timeline}</strong></span>
                </div>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Category: <strong className="text-white">{activeService.categoryRef}</strong></span>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables Checklist & Action */}
            <div className="lg:col-span-5 p-6 rounded-lg bg-zinc-950 border border-zinc-800/90 space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                Included Deliverables
              </h4>

              <ul className="space-y-3">
                {activeService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-zinc-900 space-y-3">
                <button
                  onClick={() => handleLaunchInquiry(activeService.title)}
                  className="w-full py-3 px-4 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] hover:brightness-110 active:scale-98 transition-all rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-zinc-500 text-center">
                  Includes full intellectual property transfer upon final delivery.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Scope & Estimate Tool */}
        <div className="mt-16 p-8 rounded-xl bg-zinc-950 border border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-zinc-900 text-[#D4AF37] border border-zinc-800">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">
                  Interactive Scope Builder
                </h4>
                <p className="text-xs text-zinc-400">
                  Select optional add-ons to customize your initial project scope for discussion.
                </p>
              </div>
            </div>
            <div className="text-xs text-zinc-400">
              Selected Service:{' '}
              <span className="text-[#D4AF37] font-semibold">{selectedBaseService}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {addonsList.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-lg text-left border transition-all flex items-start justify-between gap-3 ${
                    isChecked
                      ? 'bg-zinc-900 border-[#D4AF37] text-white shadow-sm'
                      : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="text-xs font-medium text-zinc-200 leading-snug">
                      {addon.name}
                    </div>
                    <div className="text-[10px] font-mono text-[#D4AF37]">
                      {addon.timeline}
                    </div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                      isChecked
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-zinc-950'
                        : 'border-zinc-700 bg-zinc-950'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-900">
            <div className="text-xs text-zinc-400">
              <span className="text-zinc-300 font-medium">
                {selectedAddons.length} Add-on{selectedAddons.length === 1 ? '' : 's'} Selected.
              </span>{' '}
              Click below to send this configured scope directly to the contact form.
            </div>

            <button
              onClick={() => handleLaunchInquiry(selectedBaseService)}
              className="py-2.5 px-5 text-xs font-semibold text-zinc-950 bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded-md shadow flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Transfer Scope to Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
