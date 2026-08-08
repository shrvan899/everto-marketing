import React from 'react';
import { Target, TrendingUp, Users, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

interface MetaAdsSectionProps {
  onOpenCalculator: () => void;
  showPrices?: boolean;
}

export const MetaAdsSection: React.FC<MetaAdsSectionProps> = ({ onOpenCalculator, showPrices = false }) => {
  return (
    <section id="meta-ads-page" className="site-3d-section relative isolate overflow-hidden py-20 bg-slate-50 border-b border-slate-200 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Target className="w-4 h-4" />
            Meta Ads (Facebook & Instagram)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Data-Driven Meta Ads Management
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Stop burning ad budget. We build high-converting ad funnels that generate qualified leads and e-commerce purchases.
          </p>
        </div>

        {/* Pricing Banner */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest font-semibold">Scalable Ad Strategy</span>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Meta Campaign Management</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Whether you are launching your first Instagram ad or scaling a ₹50,000 daily spend, Everto Marketing optimizes every rupee for maximum ROAS.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Audience Persona & Demographic Targeting</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Meta Pixel & Conversion API (CAPI) Setup</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>A/B Split Testing of Creatives & Hooks</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Weekly ROAS & Sales Scaling Dashboard</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-5">
            <span className="text-xs text-slate-500 uppercase font-mono font-bold">
              {showPrices ? 'Package Price' : 'High ROAS Campaign'}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-mono">
              {showPrices ? '₹5,000' : 'Performance Meta Ads'}
            </div>
            <p className="text-[11px] text-slate-500">Full ad campaign setup & optimization.</p>
            <button
              onClick={onOpenCalculator}
              className="w-full py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              {showPrices ? 'Start Meta Ads (₹5,000)' : 'Start Meta Ads Campaign'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
