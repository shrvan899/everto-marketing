import React from 'react';
import { Logo } from './Logo';
import { companyDetails } from '../data/companyData';
import { PageRoute } from '../types';
import { Phone, Mail, MapPin, Shield, Instagram, Facebook, ExternalLink, Calculator, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenCalculator?: () => void;
  onOpenSeoAudit?: () => void;
  showPrices?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCalculator,
  onOpenSeoAudit,
  showPrices = false,
}) => {
  return (
    <footer id="main-footer" className="bg-slate-900 border-t border-slate-800 pt-16 pb-10 text-slate-300 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" showTagline variant="dark" onClick={() => onNavigate('home')} />
            
            <p className="text-slate-400 text-xs leading-relaxed pt-2">
              Everto Marketing (Est. 2025) is Ranchi's leading digital agency specializing in AI Video Production, Dynamic Website Development, #1 Google SEO Packages, Meta Ads Management, and Social Media Marketing.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-300">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span>GSTIN: <strong className="text-white font-bold">{companyDetails.gstin}</strong> · UDYAM NO: <strong className="text-white font-bold">{companyDetails.udyamNo}</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-indigo-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-400 transition-colors">
                  All Services & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">
                  About Us (Established 2025)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-indigo-400 transition-colors">
                  Client Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-indigo-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Our Services</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between text-slate-300">
                <span>AI Video Production</span>
                {showPrices && <span className="font-mono text-indigo-400">₹1,200</span>}
              </li>
              <li className="flex justify-between text-slate-300">
                <span>UGC Video Creation</span>
                {showPrices && <span className="font-mono text-indigo-400">₹1,000</span>}
              </li>
              <li className="flex justify-between text-slate-300">
                <span>Pro Video Editing</span>
                {showPrices && <span className="font-mono text-indigo-400">₹400</span>}
              </li>
              <li className="flex justify-between text-slate-300">
                <span>Static Website</span>
                {showPrices && <span className="font-mono text-indigo-400">₹10,000</span>}
              </li>
              <li className="flex justify-between text-slate-300">
                <span>Dynamic Website</span>
                {showPrices && <span className="font-mono text-indigo-400">₹20,000</span>}
              </li>
              <li className="flex justify-between text-slate-300">
                <span>E-commerce Website</span>
                {showPrices && <span className="font-mono text-indigo-400">₹40,000</span>}
              </li>
              <li className="flex justify-between text-slate-300">
                <span>Complete SEO Package</span>
                {showPrices && <span className="font-mono text-emerald-400">₹15,000</span>}
              </li>
              <li className="flex justify-between text-slate-300">
                <span>Meta Ads Management</span>
                {showPrices && <span className="font-mono text-indigo-400">₹5,000</span>}
              </li>
            </ul>
          </div>

          {/* Contact Details & Social */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Get In Touch</h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Call/WhatsApp: <a href="https://wa.me/919835120266" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline font-mono">9835120266</a></span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span><a href={`mailto:${companyDetails.email}`} className="text-slate-200 hover:text-white">{companyDetails.email}</a></span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{companyDetails.address}</span>
              </div>
            </div>

            {/* Social Links matching Theme HTML */}
            <div className="pt-2 flex items-center gap-2">
              <a 
                href={companyDetails.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors text-[10px] font-bold text-white"
                title="Instagram"
              >
                IG
              </a>

              <a 
                href={companyDetails.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors text-[10px] font-bold text-white"
                title="Facebook"
              >
                FB
              </a>

              <a 
                href={companyDetails.googleBusinessUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors text-[10px] font-bold text-white"
                title="Google Business Profile"
              >
                G+
              </a>
            </div>
          </div>

        </div>

        {/* Sub-Footer / SEO Meta matching Theme HTML */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; 2025 - {new Date().getFullYear()} <strong>Everto Marketing Agency</strong>. All Rights Reserved. Ranchi, Jharkhand.
          </div>
          <div className="font-mono text-[10px] tracking-tight text-slate-400">
            Est. 2025 • High Speed SEO Framework
          </div>
        </div>

      </div>
    </footer>
  );
};
