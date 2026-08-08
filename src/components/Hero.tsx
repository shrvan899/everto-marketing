import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Sparkles, Calculator, Play, CheckCircle2, Shield, PhoneCall } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageRoute) => void;
  onOpenCalculator: () => void;
  onOpenDemoVideoModal?: (demoId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenCalculator,
  onOpenDemoVideoModal,
}) => {
  return (
    <section 
      id="hero-section"
      className="site-3d-section relative isolate min-h-[85vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-50 bg-sleek-pattern border-b border-slate-200/80 [perspective:1600px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* H1 Title matching Sleek Interface design prompt */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
              Scale Your <span className="text-indigo-600">Digital Presence</span> with Everto.
            </h1>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed">
              Since 2025, we’ve been crafting premium digital experiences through high-impact video production, custom web development, and data-driven Meta Ads management in Ranchi, Jharkhand.
            </p>

            {/* Feature Badges from Sleek Interface Theme */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg border border-indigo-100 shadow-xs">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-indigo-700">SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-100 shadow-xs">
                <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-emerald-700">Fast Performance</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg border border-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-xs font-semibold text-slate-700 font-mono">Custom Web Architecture</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                id="btn-hero-explore-services"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5 text-sm"
              >
                <span>View All Services & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-hero-quote-calculator"
                onClick={onOpenCalculator}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all text-sm"
              >
                <Calculator className="w-4 h-4 text-indigo-600" />
                <span>Instant Cost Calculator</span>
              </button>
            </div>

            {/* Contact Callout */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Call/WhatsApp: <strong className="text-slate-800 font-semibold font-mono">9835120266</strong></span>
              </div>
              <span>•</span>
              <span>Ranchi, Jharkhand</span>
            </div>

          </div>

          {/* Right Column: Featured Website Development Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Featured Website Development Service Card */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-indigo-100 space-y-4 ring-1 ring-indigo-500/10">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">Website Development</h3>
                </div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider font-mono bg-indigo-50 px-2.5 py-1 rounded-full">Primary Service</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex justify-between items-center pb-2.5 border-b border-slate-50">
                  <div>
                    <span className="text-slate-900 font-bold block">Static Website</span>
                    <span className="text-[11px] text-slate-500">5 Pages, speed & SEO optimized</span>
                  </div>
                  <span className="font-mono font-bold text-indigo-600 bg-slate-50 px-2.5 py-1 rounded">Fast & Responsive</span>
                </li>
                <li className="flex justify-between items-center pb-2.5 border-b border-slate-50">
                  <div>
                    <span className="text-slate-900 font-bold block">Dynamic Website</span>
                    <span className="text-[11px] text-slate-500">CMS admin, database & blog engine</span>
                  </div>
                  <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">Custom CMS</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <span className="text-slate-900 font-bold block">E-commerce Store</span>
                    <span className="text-[11px] text-slate-500">Payment gateway, cart & orders</span>
                  </div>
                  <span className="font-mono font-bold text-indigo-600 bg-slate-50 px-2.5 py-1 rounded">Online Store</span>
                </li>
              </ul>
            </div>

            {/* Quick Web Project Estimate Trigger */}
            <div 
              onClick={onOpenCalculator}
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-indigo-300 shadow-sm transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Calculator className="w-5 h-5 ml-0.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Get Instant Website Cost Quote</h4>
                  <p className="text-[11px] text-slate-500">Calculate custom scope & timeline in ₹ INR</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-600 group-hover:underline">Estimate</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
