import React, { useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, Check, Copy, ArrowRight, Play, Pause, ChevronLeft, ChevronRight, Video } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onInquire: (category: string, projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
  onInquire,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isPlayingMotion, setIsPlayingMotion] = useState(false);
  const [motionProgress, setMotionProgress] = useState(35);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;
      const currentIndex = allProjects.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight' && currentIndex < allProjects.length - 1) {
        onSelectProject(allProjects[currentIndex + 1]);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectProject(allProjects[currentIndex - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, allProjects, onClose, onSelectProject]);

  // Motion simulation loop if project is video/promo
  useEffect(() => {
    let interval: any;
    if (isPlayingMotion) {
      interval = setInterval(() => {
        setMotionProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlayingMotion]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allProjects.length - 1;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const isVideoProject = project.category === 'Promotional Graphics and Logo Videos';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-5xl bg-[#121214] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-zinc-800/90 flex items-center justify-between gap-4 bg-zinc-950/90 shrink-0">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="text-[#D4AF37] font-medium uppercase tracking-wider font-mono">
              {project.category}
            </span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>{project.client}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev/Next Navigation */}
            <div className="hidden sm:flex items-center gap-1 border-r border-zinc-800 pr-2">
              <button
                disabled={!hasPrev}
                onClick={() => hasPrev && onSelectProject(allProjects[currentIndex - 1])}
                className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed rounded"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={!hasNext}
                onClick={() => hasNext && onSelectProject(allProjects[currentIndex + 1])}
                className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed rounded"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Showcase Container */}
          <div className="relative rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-inner">
            <img
              src={project.image}
              alt={project.altText || project.title}
              className="w-full h-auto max-h-[500px] object-contain mx-auto"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Video Motion simulation overlay if this is a motion video concept */}
            {isVideoProject && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-200">
                    <Video className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="font-mono">Motion Reveal Concept Preview</span>
                  </div>
                  <button
                    onClick={() => setIsPlayingMotion(!isPlayingMotion)}
                    className="flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37] hover:bg-[#E5C378] text-zinc-950 font-medium text-xs rounded transition-colors"
                  >
                    {isPlayingMotion ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" />
                        <span>Pause Reel</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Play Motion Simulation</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] h-full transition-all duration-100"
                    style={{ width: `${motionProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Narrative, Problem & Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3
                  id="modal-project-title"
                  className="font-serif-display text-2xl sm:text-3xl font-bold text-white mb-2"
                >
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-base leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono text-[#D4AF37] mb-1">
                    The Client Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono text-[#D4AF37] mb-1">
                    The Strategic Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables, Palette, Typography & CTA */}
            <div className="lg:col-span-5 space-y-6">
              {/* Deliverables */}
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-3">
                  Scope of Deliverables
                </h4>
                <ul className="space-y-2">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Palette with Click to Copy */}
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400">
                    Chromatic System
                  </h4>
                  <span className="text-[11px] text-zinc-500">Click swatch to copy</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {project.colorPalette.map((col, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyHex(col.hex)}
                      className="flex items-center gap-2 p-2 rounded bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 text-left transition-colors group"
                      title={`Copy ${col.hex}`}
                    >
                      <div
                        className="w-5 h-5 rounded-sm border border-zinc-700/60 shrink-0"
                        style={{ backgroundColor: col.hex }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] text-zinc-300 truncate font-medium">
                          {col.name}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 group-hover:text-[#D4AF37]">
                          {copiedHex === col.hex ? 'Copied!' : col.hex}
                        </div>
                      </div>
                      {copiedHex === col.hex ? (
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      ) : (
                        <Copy className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Typography */}
              {project.typography && project.typography.length > 0 && (
                <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2">
                    Typography Pairing
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {project.typography.map((t, idx) => (
                      <div key={idx} className="flex justify-between items-center text-zinc-300">
                        <span className="text-zinc-500">{t.role}:</span>
                        <span className="font-medium text-white">{t.family}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action */}
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.category, project.title);
                }}
                className="w-full py-3 px-4 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] hover:brightness-110 active:scale-98 transition-all rounded-md shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
