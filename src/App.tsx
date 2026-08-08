import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoProductionSection } from './components/VideoProductionSection';
import { WebDevSection } from './components/WebDevSection';
import { SeoSection } from './components/SeoSection';
import { MetaAdsSection } from './components/MetaAdsSection';
import { SocialMediaMarketingSection } from './components/SocialMediaMarketingSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InstantQuoteModal } from './components/InstantQuoteModal';
import { DemoVideoModal } from './components/DemoVideoModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [activeDemoVideoId, setActiveDemoVideoId] = useState<string | null>(null);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCalculatorWithService = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-indigo-600 selection:text-white">
      {/* Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenCalculator={() => handleOpenCalculatorWithService()}
      />

      {/* Main Content Area */}
      <motion.main
        initial={{ opacity: 0, rotateX: 1.5, y: 18 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="site-3d-canvas relative flex-1 [perspective:1800px] [transform-style:preserve-3d]"
      >
        {currentPage === 'home' && (
          <>
            <Hero
              onNavigate={handleNavigate}
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              onOpenDemoVideoModal={(id) => setActiveDemoVideoId(id || 'demo-ai-pants')}
            />
            <WebDevSection
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={false}
            />
            <SeoSection
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={false}
            />
            <MetaAdsSection
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={false}
            />
            <SocialMediaMarketingSection
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={false}
            />
            <VideoProductionSection
              onOpenDemoVideoModal={(id) => setActiveDemoVideoId(id)}
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={false}
            />
            <PortfolioSection
              onOpenDemoVideoModal={(id) => setActiveDemoVideoId(id)}
            />
            <TestimonialsSection />
            <AboutUsSection />
            <ContactSection />
          </>
        )}

        {currentPage === 'services' && (
          <>
            <div className="pt-24 pb-8 bg-slate-100 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                  Our Complete Digital Services
                </h1>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
                  Explore our core offerings from Custom Web Development and SEO to Meta Ads, Social Media, and AI Video Production.
                </p>
              </div>
            </div>
            <WebDevSection
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={true}
            />
            <SeoSection
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={true}
            />
            <MetaAdsSection
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={true}
            />
            <SocialMediaMarketingSection
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={true}
            />
            <VideoProductionSection
              onOpenDemoVideoModal={(id) => setActiveDemoVideoId(id)}
              onOpenCalculator={() => handleOpenCalculatorWithService()}
              showPrices={true}
            />
          </>
        )}

        {currentPage === 'about' && (
          <div className="pt-20">
            <AboutUsSection />
            <TestimonialsSection />
          </div>
        )}

        {currentPage === 'testimonials' && (
          <div className="pt-20">
            <TestimonialsSection />
            <PortfolioSection
              onOpenDemoVideoModal={(id) => setActiveDemoVideoId(id)}
            />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-20">
            <ContactSection />
          </div>
        )}
      </motion.main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCalculator={() => handleOpenCalculatorWithService()}
        showPrices={currentPage === 'services'}
      />

      {/* Interactive Modals */}
      <InstantQuoteModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        initialServiceId={preselectedServiceId}
      />

      {activeDemoVideoId && (
        <DemoVideoModal
          demoId={activeDemoVideoId}
          onClose={() => setActiveDemoVideoId(null)}
        />
      )}
    </div>
  );
}
