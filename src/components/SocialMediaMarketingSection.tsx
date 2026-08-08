import React from 'react';
import { clientSocialPages, portfolioProjects } from '../data/companyData';
import { Share2, Instagram, Facebook, ExternalLink, TrendingUp, Users, CheckCircle } from 'lucide-react';

interface SocialMediaMarketingSectionProps {
  onOpenCalculator: () => void;
  showPrices?: boolean;
}

export const SocialMediaMarketingSection: React.FC<SocialMediaMarketingSectionProps> = ({ onOpenCalculator, showPrices = false }) => {
  const smmPortfolio = portfolioProjects.filter(p => p.category === 'smm' || p.category === 'video');

  return (
    <section id="social-media-marketing-page" className="site-3d-section relative isolate overflow-hidden py-20 bg-slate-50 border-b border-slate-200 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Share2 className="w-4 h-4" />
            Organic & Paid Social Growth
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Social Media Marketing (SMM)
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Build brand loyalty, acquire organic followers, and drive daily engagement on Instagram, Facebook, and YouTube.
          </p>
        </div>

        {/* Pricing Banner */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest font-semibold">Monthly Growth Strategy</span>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Complete SMM Management</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We manage your entire content pipeline — from video reel scriptwriting to daily post scheduling, hashtag strategy, and community DM automation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>12-15 Custom Instagram Reels & Graphics / Month</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Trending Audio & Hashtag Research Strategy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Community DM & Comment Engagement Automation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Monthly Reach & Follower Growth Analytics</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-5">
            <span className="text-xs text-slate-500 uppercase font-mono font-semibold">Monthly Package</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-mono">
              {showPrices ? 'Starting from ₹10,000' : 'Custom Social Strategy'}
            </div>
            <p className="text-[11px] text-slate-500">Includes content creation & community management.</p>
            <button
              onClick={onOpenCalculator}
              className="w-full py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              {showPrices ? 'Start SMM Package (₹10,000)' : 'Start SMM Package'}
            </button>
          </div>
        </div>

        {/* 1. Client Social Media Pages Showcase */}
        <div className="space-y-6 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Featured Client Social Media Pages</h3>
              <p className="text-xs sm:text-sm text-slate-500">Click any card below to open live social profile handles.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientSocialPages.map((page, index) => (
              <a
                key={index}
                href={page.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-indigo-600 font-semibold text-xs">
                      {page.platform === 'Instagram' ? <Instagram className="w-4 h-4" /> : <Facebook className="w-4 h-4" />}
                      <span>{page.platform}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>

                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-900 relative">
                    <img src={page.image} alt={page.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>

                  <div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {page.name}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">{page.handle}</div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-semibold">{page.followers} Followers</span>
                  <span className="text-emerald-600 font-semibold">{page.growth}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 2. SMM Growth & Creatives Portfolio */}
        <div className="space-y-6 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900">Social Media Growth & Creatives Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {smmPortfolio.map((p) => (
              <div key={p.id} className="rounded-xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div className="aspect-video relative overflow-hidden bg-slate-900">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  {p.metrics && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-sm">
                      {p.metrics}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs text-slate-500">Client: {p.client}</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">{p.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
