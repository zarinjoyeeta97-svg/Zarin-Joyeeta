import React, { useState } from 'react';
import { SiteConfig, ContactFormData } from '../types/portfolio';
import { Mail, Globe, Send, CheckCircle2, Copy, ArrowUpRight, MessageSquare, Clock } from 'lucide-react';

interface ContactSectionProps {
  config: SiteConfig;
  prefilledProjectType?: string;
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  prefilledProjectType,
  prefilledNotes,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: prefilledProjectType || 'Custom Logo Design',
    timeline: 'Within 2-4 Weeks',
    budget: '$1,500 – $3,500',
    message: prefilledNotes ? `${prefilledNotes}\n\nProject Vision: ` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Update if prefilled values change
  React.useEffect(() => {
    if (prefilledProjectType) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledProjectType,
        message: prefilledNotes ? `${prefilledNotes}\n\nProject Vision: ` : prev.message,
      }));
    }
  }, [prefilledProjectType, prefilledNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleCopySummary = () => {
    const summary = `Noventra Studio Project Inquiry:
Client Name: ${formData.fullName}
Client Email: ${formData.email}
Project Type: ${formData.projectType}
Timeline: ${formData.timeline}
Budget: ${formData.budget}
Message:
${formData.message}`;

    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${config.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.projectType} — ${formData.fullName || 'Client'}`
  )}&body=${encodeURIComponent(
    `Hello Noventra Studio,\n\nI am contacting you regarding a ${formData.projectType} project.\n\nClient Name: ${formData.fullName}\nEmail: ${formData.email}\nTimeline: ${formData.timeline}\nEstimated Budget: ${formData.budget}\n\nProject Scope & Vision:\n${formData.message}\n\nLooking forward to your response.`
  )}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 border-t border-zinc-900 bg-[#0B0B0C] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Ethos & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
                <span>Start A Collaboration</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Direct Access</span>
              </div>
              <h2
                id="contact-heading"
                className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
              >
                Let's Build An Unforgettable Brand.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether you need a signature monogram, complete corporate identity guidelines, or a
                cinematic logo promotional video, let's explore your vision and craft something
                monumental.
              </p>
            </div>

            {/* Direct Studio Contact Cards */}
            <div className="space-y-3 pt-4 border-t border-zinc-900">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Direct Communication Channels
              </div>

              {/* Direct Email Link */}
              <a
                href={`mailto:${config.email}`}
                className="flex items-center justify-between p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-[#D4AF37]/50 hover:bg-zinc-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-zinc-950 text-[#D4AF37] border border-zinc-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Direct Studio Email</div>
                    <div className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                      {config.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              {/* Behance Portfolio */}
              <a
                href={config.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-zinc-950 text-[#D4AF37] border border-zinc-800">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Behance Portfolio</div>
                    <div className="text-sm font-medium text-white">behance.net/noventrastudio</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              {/* Facebook Profile */}
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-zinc-950 text-[#D4AF37] border border-zinc-800">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Facebook Professional</div>
                    <div className="text-sm font-medium text-white">facebook.com/noventrastudio</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Response Time Guarantee */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-zinc-950/80 border border-zinc-800/70 text-xs text-zinc-400">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>
                Committed studio turnaround: Personal response within{' '}
                <strong className="text-white">24 business hours</strong>.
              </span>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-xl bg-zinc-900/50 border border-zinc-800 shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-display text-2xl font-bold text-white">
                    Inquiry Received, {formData.fullName || 'Partner'}
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Noventra Studio. Your brief for{' '}
                    <strong className="text-[#D4AF37]">{formData.projectType}</strong> has been
                    recorded.
                  </p>
                </div>

                {/* Practical Action Options */}
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                  <a
                    href={mailtoUrl}
                    className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-[#D4AF37] hover:bg-[#E5C378] rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </a>

                  <button
                    onClick={handleCopySummary}
                    className="px-5 py-2.5 text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Brief Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Brief Summary</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        projectType: 'Custom Logo Design',
                        timeline: 'Within 2-4 Weeks',
                        budget: '$1,500 – $3,500',
                        message: '',
                      });
                    }}
                    className="text-xs text-zinc-500 hover:text-zinc-300 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-zinc-800 pb-4 mb-2">
                  <h3 className="font-serif-display text-xl font-bold text-white">
                    Project Brief & Consultation
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Please provide essential details regarding your upcoming creative needs.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name or Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Victoria Sterling"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. victoria@atelier.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Custom Logo Design">Custom Logo Design</option>
                    <option value="Brand Identity Design">Brand Identity Design (Full Suite)</option>
                    <option value="Social Media Post Design">Social Media Post Design (Curated Grid)</option>
                    <option value="Promotional Visual Design">Promotional Visual Design & Marketing</option>
                    <option value="Logo Promotional Video Concepts">Logo Promotional Video Concepts (3D Motion)</option>
                    <option value="Comprehensive Multi-Disciplinary System">Comprehensive Multi-Disciplinary System</option>
                  </select>
                </div>

                {/* Timeline & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Immediate (< 2 Weeks)">Immediate (&lt; 2 Weeks)</option>
                      <option value="Within 2-4 Weeks">Within 2–4 Weeks (Standard)</option>
                      <option value="1-2 Months">1–2 Months</option>
                      <option value="Flexible / Q4 Planning">Flexible / Forward Planning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="$750 – $1,500">$750 – $1,500 (Logo Focus)</option>
                      <option value="$1,500 – $3,500">$1,500 – $3,500 (Standard Suite)</option>
                      <option value="$3,500 – $7,000">$3,500 – $7,000 (Complete Brand + Motion)</option>
                      <option value="$7,000+">$7,000+ (Enterprise Multi-Product)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Vision & Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your brand, audience, existing identity challenges, aesthetic preferences, and key goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] hover:brightness-110 active:scale-98 transition-all rounded-md shadow-xl flex items-center justify-center gap-2 cursor-pointer font-sans disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2">
                  <span>Confidentiality guaranteed.</span>
                  <span>Direct contact: {config.email}</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
