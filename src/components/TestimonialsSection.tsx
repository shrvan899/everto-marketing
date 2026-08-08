import React from 'react';
import { testimonialsData } from '../data/companyData';
import { Star, MessageSquareQuote, CheckCircle, MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-page" className="site-3d-section relative isolate overflow-hidden py-20 bg-slate-50 border-b border-slate-200 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquareQuote className="w-4 h-4" />
            Client Feedback & Trust
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Real feedback from business owners, managing directors, and founders who transformed their revenue with Everto Marketing.
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          className="testimonial-swiper !pb-12"
        >
          {testimonialsData.map((t) => (
            <SwiperSlide key={t.id} className="!h-auto">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8, rotateY: -2, rotateX: 2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="h-full p-8 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 transition-all space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Verified Client
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}, <strong className="text-slate-700">{t.company}</strong></p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-semibold text-indigo-600">{t.serviceUsed}</div>
                  <div className="text-[10px] text-slate-500 flex items-center gap-1 justify-end mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {t.location}
                  </div>
                </div>
              </div>

            </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};
