import React from 'react';
import { portfolioProjects, testimonialsData } from '../data/companyData';
import { Globe, ShieldCheck, Zap, ShoppingBag, Check, ArrowRight, Star, Code, Layers, Sparkles } from 'lucide-react';

interface WebDevSectionProps {
  onOpenCalculator: () => void;
  showPrices?: boolean;
}

export const WebDevSection: React.FC<WebDevSectionProps> = ({ onOpenCalculator, showPrices = false }) => {
  const webTiers = [
    {
      id: 'static-website',
      name: 'Static Website',
      price: '₹10,000',
      description: 'Ultra-fast corporate website & landing pages optimized for speed and high conversion.',
      badge: 'Speed Optimized',
      features: [
        'Up to 5 HTML/React Pages',
        'Mobile & Tablet Fully Responsive',
        'SEO Canonical & Meta Tags setup',
        'Lead Contact Form with email alert',
        '1 Year Free Maintenance'
      ]
    },
    {
      id: 'dynamic-website',
      name: 'Dynamic Website',
      price: '₹20,000',
      description: 'Interactive web app with CMS, backend database, blog engine, and custom admin dashboard.',
      badge: 'Best Value',
      popular: true,
      features: [
        'Custom Admin CMS Dashboard',
        'Unlimited Dynamic Pages & Blog',
        'Firestore / SQL Database Integration',
        'Real-time Analytics & Lead capture',
        'Core Web Vitals 95+ Guarantee'
      ]
    },
    {
      id: 'ecommerce-website',
      name: 'E-commerce Website',
      price: '₹40,000',
      description: 'Full online store with payment gateway, order tracking, cart recovery & inventory.',
      badge: 'Turnkey Store',
      features: [
        'Unlimited Products & Categories',
        'Razorpay, Paytm & UPI Integration',
        'Automated Invoice & WhatsApp Alerts',
        'Abandoned Cart Email Recovery',
        'Mobile Shopping App Readiness'
      ]
    }
  ];

  const webPortfolio = portfolioProjects.filter(p => p.category === 'web');
  const webTestimonials = testimonialsData.filter(t => t.serviceUsed.includes('Website'));

  return (
    <section id="web-development-page" className="site-3d-section relative isolate overflow-hidden py-20 bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 border-b border-indigo-100/80 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4" />
            Primary Service • Website Development Studio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Static, Dynamic & E-commerce Websites
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            High-performance React websites with sub-second page loads, pixel-perfect UX, and secure backend architecture tailored for Ranchi & Jharkhand businesses.
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {webTiers.map((tier) => (
            <div
              key={tier.id}
              id={`web-tier-card-${tier.id}`}
              className={`relative rounded-xl bg-white border p-6 flex flex-col justify-between transition-all shadow-sm hover:shadow-md ${
                tier.popular 
                  ? 'border-indigo-300 ring-2 ring-indigo-500/10' 
                  : 'border-slate-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                {showPrices ? (
                  <div className="text-3xl font-extrabold text-indigo-600 font-mono mb-4">{tier.price}</div>
                ) : (
                  <div className="mb-4">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full font-mono">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{tier.description}</p>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider block">Features Included:</span>
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                id={`btn-select-web-tier-${tier.id}`}
                onClick={onOpenCalculator}
                className="w-full py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all shadow-sm"
              >
                Choose {tier.name} {showPrices ? `(${tier.price})` : ''}
              </button>
            </div>
          ))}
        </div>

        {/* 1. Project Portfolio (Required by Prompt!) */}
        <div className="pt-12 border-t border-slate-200 space-y-8">
          <div>
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest font-semibold">Selected Works</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Website Project Portfolio</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webPortfolio.map((project) => (
              <div key={project.id} className="rounded-xl bg-white border border-slate-200 overflow-hidden group shadow-sm hover:shadow-md transition-all">
                <div className="aspect-video relative overflow-hidden bg-slate-900">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  {project.metrics && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-indigo-600 text-white font-bold text-xs shadow-sm">
                      {project.metrics}
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-xs text-slate-500 font-medium">Client: {project.client}</span>
                  <h4 className="text-lg font-bold text-slate-900">{project.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{project.description}</p>
                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        <span>Visit Live Website</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Client Testimonials (Required by Prompt!) */}
        <div className="pt-8 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">Web Development Client Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webTestimonials.map((t) => (
              <div key={t.id} className="p-6 rounded-xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic">"{t.content}"</p>
                <div className="flex items-center gap-3 pt-2">
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

        {/* 3. Call-to-Action Section (Required by Prompt!) */}
        <div className="rounded-2xl bg-white p-8 sm:p-12 border border-slate-200 text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Ready to Build Your Website in Ranchi?
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Get a custom proposal, free wireframe mockup, and guaranteed delivery date from Everto Marketing.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919835120266?text=Hi!%20I%20want%20to%20build%20a%20website%20with%20Everto%20Marketing."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                Discuss Web Project on WhatsApp
              </a>
              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm border border-slate-200"
              >
                Estimate Cost in ₹ INR
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
