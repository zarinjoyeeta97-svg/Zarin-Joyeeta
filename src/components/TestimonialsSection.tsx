import React, { useState } from 'react';
import { Testimonial, ProjectCategory } from '../types/portfolio';
import { CheckCircle2, Star, Plus, ShieldCheck, X } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  onAddTestimonial: (t: Testimonial) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onAddTestimonial,
}) => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [feedback, setFeedback] = useState('');
  const [projectType, setProjectType] = useState<ProjectCategory>('Logo Design');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !feedback.trim()) return;

    const newReview: Testimonial = {
      id: `review-${Date.now()}`,
      clientName: clientName.trim(),
      role: role.trim() || 'Client',
      company: company.trim() || 'Independent',
      feedback: feedback.trim(),
      projectType,
      year: '2026',
      isVerified: true,
    };

    onAddTestimonial(newReview);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitModalOpen(false);
      setClientName('');
      setRole('');
      setCompany('');
      setFeedback('');
    }, 1500);
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 md:py-32 border-t border-zinc-900 bg-[#0B0B0C] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
              <span>Authentic Client Feedback</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Verified Engagements</span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
            >
              Words from Real Creative Collaborations
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Noventra Studio upholds an uncompromising standard of transparency: only genuine
              verified testimonials from real project deliverables are presented below.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-md transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Plus className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Submit Client Review</span>
            </button>
          </div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  "{review.feedback}"
                </p>
              </div>

              {/* Client credentials */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {review.clientName}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {review.role}, {review.company}
                  </div>
                  <div className="text-[11px] font-mono text-[#D4AF37] mt-1">
                    {review.projectType} · {review.year}
                  </div>
                </div>

                {review.isVerified && (
                  <div
                    className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono shrink-0"
                    title="Verified project deliverable"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Commitment Notice */}
        <div className="mt-12 p-4 rounded-lg bg-zinc-950/70 border border-zinc-800/80 flex items-center gap-3 text-xs text-zinc-400 max-w-2xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <p>
            <strong className="text-zinc-300">Integrity Guarantee:</strong> We do not fabricate
            vanity statistics or invent fictitious client awards. All reviews correspond to real
            client scopes and delivered creative assets.
          </p>
        </div>
      </div>

      {/* Submit Testimonial Modal */}
      {isSubmitModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#121214] border border-zinc-800 rounded-xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-lg font-serif-display font-bold text-white">
                  Submit Genuine Client Review
                </h3>
                <p className="text-xs text-zinc-400">
                  Share your experience working with Noventra Studio.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-semibold text-white">Review Submitted!</h4>
                <p className="text-xs text-zinc-400">
                  Thank you for contributing to genuine portfolio transparency.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Creative Director"
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">
                      Company / Atelier
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Lumina Group"
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Project Category *
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value as ProjectCategory)}
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Logo Design">Custom Logo Design</option>
                    <option value="Brand Identity Design">Brand Identity Design</option>
                    <option value="Social Media Design">Social Media Design</option>
                    <option value="Promotional Graphics and Logo Videos">
                      Promotional Graphics & Logo Videos
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Your Genuine Feedback *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Describe the collaboration quality, vector precision, communication, or end results..."
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="px-4 py-2 rounded-md bg-zinc-900 text-zinc-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-md bg-[#D4AF37] hover:bg-[#E5C378] text-zinc-950 font-semibold"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
