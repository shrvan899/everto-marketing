import React, { useState } from 'react';
import { portfolioProjects } from '../data/companyData';
import { ServiceCategory } from '../types';
import { Sparkles, ExternalLink, Play, CheckCircle2 } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenDemoVideoModal: (demoId: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenDemoVideoModal }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio-section" className="site-3d-section relative isolate overflow-hidden py-20 bg-slate-50 border-b border-slate-200 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Client Portfolio & Case Studies
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Explore recent web development builds, viral AI videos, high-converting Meta Ads, and social media follower growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['all', 'web', 'video', 'seo', 'meta-ads', 'graphics', 'smm'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Portfolio' : cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl bg-white border border-slate-200 overflow-hidden hover:border-indigo-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {project.metrics && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-indigo-600 text-white font-bold text-xs shadow-xs">
                      {project.metrics}
                    </span>
                  )}

                  {project.videoUrl && (
                    <button
                      onClick={() => onOpenDemoVideoModal('demo-ai-pants')}
                      className="absolute inset-0 flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </button>
                  )}
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[11px] font-mono text-indigo-600 font-semibold uppercase">
                    {project.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {project.link && (
                <div className="p-6 pt-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <span>View Live Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
