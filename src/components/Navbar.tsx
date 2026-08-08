import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import { Phone, MessageSquare, Calculator, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, categoryFilter?: string) => void;
  onOpenCalculator?: () => void;
  onOpenSeoAudit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenCalculator,
  onOpenSeoAudit,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 ${
        isScrolled ? 'shadow-md py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <Logo 
            size="md" 
            showTagline={!isScrolled}
            onClick={() => handleNavClick('home')} 
          />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Direct WhatsApp Call */}
            <a
              id="btn-nav-whatsapp"
              href="https://wa.me/919835120266?text=Hi%20Everto%20Marketing!%20I%20want%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-indigo-50 text-indigo-600 border border-indigo-200 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <a
              id="btn-mobile-whatsapp-call"
              href="https://wa.me/919835120266?text=Hi%20Everto%20Marketing!%20I%20want%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (9835120266)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
