import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { LayoutGrid, List, Search, ArrowUpRight, Play, Eye } from 'lucide-react';

interface PortfolioSectionProps {
  projects: Project[];
  onSelectProject: (p: Project) => void;
  onInquire: (category: string, projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'bento' | 'list'>('bento');

  const categories: string[] = [
    'All',
    'Logo Design',
    'Brand Identity Design',
    'Social Media Design',
    'Promotional Graphics and Logo Videos',
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-24 md:py-32 border-t border-zinc-900 bg-[#0B0B0C] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
              <span>Selected Works</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>2024–2026 Archive</span>
            </div>
            <h2
              id="portfolio-heading"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
            >
              Curated Portfolio & Visual Systems
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              A bespoke collection of custom logo marks, comprehensive brand systems, editorial
              social media grids, and promotional motion concepts.
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-zinc-900/80 p-1 border border-zinc-800 rounded-lg">
            <button
              onClick={() => setViewMode('bento')}
              aria-label="Grid layout"
              className={`p-2 rounded text-xs flex items-center gap-1.5 transition-colors ${
                viewMode === 'bento'
                  ? 'bg-zinc-800 text-white font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Editorial</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List layout"
              className={`p-2 rounded text-xs flex items-center gap-1.5 transition-colors ${
                viewMode === 'list'
                  ? 'bg-zinc-800 text-white font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Index</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-zinc-900">
          {/* Category Tabs (Segmented control button style conforming to zero-pill rule) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#D4AF37] text-zinc-950 font-semibold shadow-sm'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by client or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-zinc-900/70 border border-zinc-800 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Projects Gallery */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-zinc-800 rounded-xl bg-zinc-950/40">
            <p className="text-zinc-400 text-sm">
              No projects matched your criteria. Try adjusting the category or search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-medium text-[#D4AF37] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'bento' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {filteredProjects.map((project, idx) => {
              // Create deliberate editorial rhythm with varied column spans
              const isWide = idx % 3 === 0;
              const colSpanClass = isWide
                ? 'lg:col-span-8'
                : idx % 3 === 1
                ? 'lg:col-span-4'
                : 'lg:col-span-12';

              const isVideo = project.category === 'Promotional Graphics and Logo Videos';

              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpanClass} group relative rounded-xl overflow-hidden bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between cursor-pointer`}
                >
                  {/* Visual container */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={project.altText || project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/15 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top right icon trigger */}
                    <div className="absolute top-4 right-4 p-2 rounded-md bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 text-zinc-300 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all">
                      {isVideo ? (
                        <Play className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>

                  {/* Card content with zero-pill unboxed metadata */}
                  <div className="p-6 space-y-3 bg-zinc-950/80 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Clean unboxed metadata with bullet separators */}
                      <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-2">
                        <span className="text-[#D4AF37] font-semibold">{project.category}</span>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span>{project.year}</span>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span className="truncate">{project.client}</span>
                      </div>

                      <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                      <span className="font-mono text-[11px] text-zinc-500">
                        {project.deliverables.length} Deliverables Included
                      </span>
                      <span className="text-zinc-300 group-hover:text-white flex items-center gap-1 font-medium">
                        <span>View Project</span>
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Streamlined List / Index View */
          <div className="divide-y divide-zinc-900 border-y border-zinc-900">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="py-5 px-4 -mx-4 rounded-lg hover:bg-zinc-900/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded bg-zinc-950 border border-zinc-800 overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-serif-display font-semibold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mt-0.5">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 text-xs text-zinc-400 shrink-0">
                  <span className="font-mono text-zinc-500">{project.year}</span>
                  <div className="flex items-center gap-1 text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
