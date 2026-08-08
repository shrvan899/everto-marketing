import React, { useState } from 'react';
import { videoDemosData } from '../data/companyData';
import { Play, Video, Bot, UserCheck, Film, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface VideoProductionSectionProps {
  onOpenDemoVideoModal: (demoId: string) => void;
  onOpenCalculator: () => void;
  showPrices?: boolean;
}

export const VideoProductionSection: React.FC<VideoProductionSectionProps> = ({
  onOpenDemoVideoModal,
  onOpenCalculator,
  showPrices = false,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'ugc' | 'editing'>('all');

  const videoServices = [
    {
      type: 'ai',
      title: 'AI Video Production',
      price: '₹1,200',
      tagline: 'Photorealistic AI spokespersons & automated scriptwriting',
      description: 'Leverage cutting-edge generative AI to produce studio-grade marketing spokesperson videos without hiring actors or studio spaces.',
      icon: <Bot className="w-6 h-6 text-indigo-600" />,
      features: ['AI Avatar selection (male/female)', 'Multi-lingual voiceovers (English, Hindi, Regional)', 'AI Scriptwriting & Hook generation', 'Commercial Rights Included']
    },
    {
      type: 'ugc',
      title: 'UGC Video Creation',
      price: '₹1,000',
      tagline: 'Authentic creator-led videos for social media',
      description: 'Natural, relatable creator videos that demonstrate products, build trust quickly, and improve conversion on Instagram Reels and Shorts.',
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      features: ['Creator-led product storytelling', 'High-converting hooks & scripts', '9:16 reel-ready video format', 'Optimized for Meta Ads & TikTok']
    },
    {
      type: 'editing',
      title: 'Professional Video Editing',
      price: '₹400',
      tagline: 'Alex Hormozi style animated captions & kinetic edits',
      description: 'Turn raw footage into engaging, viral-ready video reels with animated captions, background music, sound effects, and color correction.',
      icon: <Film className="w-6 h-6 text-indigo-600" />,
      features: ['Vibrant animated subtitle typography', 'Sound FX pops & smooth transitions', 'B-roll insertion & stock overlays', 'Ultra-fast 24 hour turnaround']
    }
  ];

  const filteredDemos = activeTab === 'all' 
    ? videoDemosData 
    : videoDemosData.filter(d => d.category === activeTab);

  return (
    <section id="video-production-page" className="site-3d-section relative isolate overflow-hidden py-20 bg-slate-50 border-b border-slate-200 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Video className="w-4 h-4" />
            High Impact Video Production
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            AI Video, UGC Video & Pro Editing
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Hook your audience in the first 3 seconds. See our live demo videos below and choose the perfect format for your brand.
          </p>
        </div>

        {/* 3 Pricing Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoServices.map((service) => (
            <div 
              key={service.type}
              id={`video-card-${service.type}`}
              className="rounded-xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-indigo-300 transition-all shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    {service.icon}
                  </div>
                  {showPrices ? (
                    <span className="text-2xl font-extrabold text-indigo-600 font-mono">
                      {service.price}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded font-mono">
                      Viral Ready
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-xs text-indigo-600 font-semibold mb-3">{service.tagline}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                id={`btn-order-video-${service.type}`}
                onClick={onOpenCalculator}
                className="w-full py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all shadow-sm"
              >
                Order {service.title} {showPrices ? `(${service.price})` : ''}
              </button>
            </div>
          ))}
        </div>

        {/* Demo Video Gallery Section */}
        <div className="pt-8 border-t border-slate-200 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                Live Demo Videos Gallery
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Click any demo video card to watch sample playback.
              </p>
            </div>

            {/* Sub Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                id="btn-video-demo-tab-all"
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200'}`}
              >
                All Demos
              </button>
              <button
                id="btn-video-demo-tab-ai"
                onClick={() => setActiveTab('ai')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${activeTab === 'ai' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200'}`}
              >
                AI Video (₹1,200)
              </button>
              <button
                id="btn-video-demo-tab-ugc"
                onClick={() => setActiveTab('ugc')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${activeTab === 'ugc' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200'}`}
              >
                UGC Video (₹1,000)
              </button>
              <button
                id="btn-video-demo-tab-editing"
                onClick={() => setActiveTab('editing')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${activeTab === 'editing' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200'}`}
              >
                Editing (₹400)
              </button>
            </div>
          </div>

          {/* Demos Grid */}
          <Swiper
            key={activeTab}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop={filteredDemos.length > 3}
            slidesPerView="auto"
            coverflowEffect={{ rotate: 18, stretch: 0, depth: 130, modifier: 1.2, slideShadows: false }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            className="demo-coverflow !pb-12"
          >
            {filteredDemos.map((demo) => (
              <SwiperSlide key={demo.id} className="!w-[min(86vw,380px)] !h-auto">
              <motion.div
                key={demo.id}
                id={`demo-video-card-${demo.id}`}
                onClick={() => onOpenDemoVideoModal(demo.id)}
                whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative rounded-xl bg-white border border-slate-200 overflow-hidden cursor-pointer hover:border-indigo-300 transition-all shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <video
                    src={demo.videoUrl}
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={`${demo.title} video preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/80 text-[10px] font-bold text-indigo-400 uppercase tracking-wide border border-slate-700">
                    {demo.category.toUpperCase()} VIDEO
                  </span>

                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-slate-900/90 text-[10px] font-mono text-slate-200">
                    {demo.duration}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {demo.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {demo.description}
                  </p>
                </div>
              </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
};
