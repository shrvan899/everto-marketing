import React, { useState } from 'react';
import { testimonialsData, faqsData } from '../data/companyData';
import { Search, TrendingUp, CheckCircle, HelpCircle, Star, ShieldCheck, ArrowRight, Layers, Award } from 'lucide-react';

interface SeoSectionProps {
  onOpenCalculator: () => void;
  showPrices?: boolean;
}

export const SeoSection: React.FC<SeoSectionProps> = ({ onOpenCalculator, showPrices = false }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const seoProcessSteps = [
    {
      num: '01',
      title: 'Technical Audit & Crawl Analysis',
      desc: 'We fix site speed bottlenecks, canonical loops, missing XML sitemaps, robots.txt issues, and mobile Core Web Vitals.'
    },
    {
      num: '02',
      title: 'High-Intent Keyword Research',
      desc: 'We uncover high-volume transactional keywords in your niche (local Ranchi & pan-India) with high buyer intent.'
    },
    {
      num: '03',
      title: 'On-Page Content & Schema Optimization',
      desc: 'We rewrite H1/H2 tags, title tags, meta descriptions, image alt texts, and inject JSON-LD schema structured data.'
    },
    {
      num: '04',
      title: 'Google Business Profile (GMB) Rank',
      desc: 'We optimize local citation profiles, map pack placement, customer review workflows, and geotagged updates.'
    },
    {
      num: '05',
      title: 'High DA Backlink & Outreach Campaign',
      desc: 'We secure high domain authority, contextual editorial backlinks to signal trust and authority to search engines.'
    }
  ];

  const packageIncludes = [
    'Complete On-Page SEO Optimization',
    'Technical SEO & Speed Fixes',
    'Google My Business (GMB) Optimization',
    'High-Authority DA 50+ Backlinks',
    'Monthly Rank & Keyword Tracking Reports',
    'AI Search & Voice Search Optimization',
    'Schema Markup & Rich Snippets',
    'Competitor Gap Analysis'
  ];

  const seoTestimonials = testimonialsData.filter(t => t.serviceUsed.includes('SEO') || t.company.includes('Tech'));
  const seoFaqs = faqsData.filter(f => f.category === 'SEO' || f.category === 'General');

  return (
    <section id="seo-services-page" className="site-3d-section relative isolate overflow-hidden py-20 bg-slate-50 border-b border-slate-200 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <Search className="w-4 h-4" />
            Rank #1 on Google Search
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive SEO Service Package
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Dominate search engine results pages, drive organic traffic, and convert visitors into long-term customers.
          </p>
        </div>

        {/* Package Card Banner */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold font-mono border border-indigo-100">
              ALL-IN-ONE GROWTH PACKAGE
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Complete SEO Package
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our 360-degree search engine optimization strategy designed for businesses seeking top organic rankings in Ranchi, Jharkhand, and across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {packageIncludes.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-6">
            <div className="space-y-1">
              <span className="text-xs text-slate-500 uppercase tracking-widest font-mono font-semibold">
                {showPrices ? 'Monthly Investment' : 'Tailored Growth Strategy'}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-mono">
                {showPrices ? '₹15,000' : 'High ROI Ranking'}
              </div>
              <span className="text-xs text-slate-500">
                {showPrices ? 'No hidden fees • Cancel anytime' : 'Customized for your target keywords'}
              </span>
            </div>

            <button
              id="btn-seo-order-package"
              onClick={onOpenCalculator}
              className="w-full py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all"
            >
              {showPrices ? 'Get SEO Package (₹15,000)' : 'Get SEO Strategy Quote'}
            </button>

            <span className="text-[11px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Guaranteed White-Hat Google Best Practices
            </span>
          </div>
        </div>

        {/* SEO Process Section */}
        <div className="space-y-10 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Our 5-Step SEO Optimization Process</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">Tested and proven workflow ensuring organic ranking surge within 60-90 days.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {seoProcessSteps.map((step) => (
              <div key={step.num} className="p-5 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-indigo-300 transition-all">
                <span className="text-2xl font-black font-mono text-indigo-600">{step.num}</span>
                <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900">SEO Client Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoTestimonials.map((t) => (
              <div key={t.id} className="p-6 rounded-xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
              SEO Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Answers for voice search and AI search clarity.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {seoFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs">
                  <button
                    id={`btn-faq-toggle-${idx}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-indigo-600 text-lg font-bold">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
