import React from 'react';
import { companyDetails, techStackList, workProcessSteps } from '../data/companyData';
import { Building2, Calendar, MapPin, Award, ShieldCheck, CheckCircle2, Cpu, Zap, Phone, Mail } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us-page" className="site-3d-section relative isolate overflow-hidden py-20 bg-slate-50 border-b border-slate-200 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            About Everto Marketing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Pioneering Digital Growth from Ranchi
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Established in 2025 in Ranchi, Jharkhand. We blend cutting-edge AI technology with creative marketing mastery to scale brands.
          </p>
        </div>

        {/* Company Overview Card (E-E-A-T) */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-sm">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who We Are & Our Mission
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Everto Marketing was founded in 2025 with a clear mission: to provide high-caliber digital services — from AI video ads to sub-second dynamic websites and rank-1 SEO packages — at transparent, accessible pricing for businesses in Ranchi, Jharkhand, and worldwide.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate with strict compliance, holding official GST Registration (<span className="font-mono text-indigo-600 font-bold">20GCAPK2021P2ZW</span>), and adhering to white-hat Google ranking standards and high E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) principles.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <Calendar className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
                <div className="text-lg font-extrabold text-slate-900">2025</div>
                <div className="text-[11px] text-slate-500">Established Year</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <MapPin className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <div className="text-sm font-bold text-slate-900">Ranchi</div>
                <div className="text-[11px] text-slate-500">Jharkhand, India</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center col-span-2 sm:col-span-1">
                <Award className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <div className="text-lg font-extrabold text-slate-900">100%</div>
                <div className="text-[11px] text-slate-500">GST Verified</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-7 space-y-6 text-slate-700">
              <h4 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                Why Choose Everto Marketing?
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Transparent Upfront Pricing:</strong> Clear costs in ₹ INR without hidden surprise invoices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Speed & Core Web Vitals Guaranteed:</strong> Sites load in under 1.5 seconds with 95+ PageSpeed score.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>AI Tech Integration:</strong> Cutting-edge Gemini AI scriptwriting & photorealistic spokesperson videos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Local Team:</strong> Headquartered in Ranchi, Jharkhand with direct WhatsApp support (9835120266).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Process Steps */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How We Work (Process)</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Four seamless steps from initial consultation to scaling your ROI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workProcessSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
                <span className="text-3xl font-extrabold font-mono text-indigo-600">{s.step}</span>
                <h4 className="text-base font-bold text-slate-900">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies We Use */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
              <Cpu className="w-6 h-6 text-indigo-600" />
              Technologies & Tools We Master
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">We utilize industry-leading modern frameworks and analytical suites.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStackList.map((t, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 hover:border-indigo-300 transition-all shadow-xs">
                <span className="text-[10px] font-mono text-indigo-600 font-semibold uppercase">{t.category}</span>
                <div className="text-sm font-bold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
