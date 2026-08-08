import React, { useState } from 'react';
import { companyDetails } from '../data/companyData';
import { Phone, Mail, MapPin, Shield, MessageSquare, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Video Production',
    budget: '₹5,000 - ₹20,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setSubmitted(true);
    // Construct WhatsApp pre-filled text
    const text = encodeURIComponent(
      `Hi Everto Marketing!\nMy Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Interested: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message}`
    );
    
    // Redirect after slight delay or allow user to click
    setTimeout(() => {
      window.open(`https://wa.me/919835120266?text=${text}`, '_blank');
    }, 1000);
  };

  return (
    <section id="contact-us-page" className="site-3d-section relative isolate overflow-hidden py-20 bg-slate-50 border-b border-slate-200 [perspective:1600px] [transform-style:preserve-3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            Get In Touch With Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Everto Marketing
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Have a project in mind or need a custom quote? Call, WhatsApp, or drop us a line below. Our Ranchi team responds within 1 hour.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Company Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-white border border-slate-200 p-6 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Official Company Details
              </h3>

              {/* Direct Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Phone / WhatsApp</div>
                  <a 
                    href="https://wa.me/919835120266?text=Hi%20Everto%20Marketing!%20I%20want%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors font-mono"
                  >
                    +91 {companyDetails.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">Available Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Address</div>
                  <a 
                    href={`mailto:${companyDetails.email}`}
                    className="text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    {companyDetails.email}
                  </a>
                  <p className="text-[11px] text-slate-500">Send us your RFP or project brief</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Office Location</div>
                  <div className="text-sm font-bold text-slate-900">{companyDetails.address}</div>
                  <p className="text-[11px] text-slate-500">Capital City of Jharkhand, India</p>
                </div>
              </div>

              {/* GST Number */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">GST Registration Number</div>
                  <div className="text-sm font-bold text-slate-900 font-mono">{companyDetails.gstin}</div>
                  <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Government Registered Business
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">UDYAM Number</div>
                  <div className="text-sm font-bold text-slate-900 font-mono">UDYAM NO: {companyDetails.udyamNo}</div>
                  <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    UDYAM Registered Business
                  </p>
                </div>
              </div>
            </div>

            {/* Google Business Profile Button */}
            <a
              href={companyDetails.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 transition-all text-slate-900 font-semibold text-sm group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-bold text-slate-900">Google Business Profile</div>
                  <div className="text-xs text-slate-500 font-normal">View verified address & Google reviews</div>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </a>
          </div>

          {/* Right Column: Inquiry Submission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-white border border-slate-200 p-8 space-y-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Send Us a Direct Message</h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Inquiry Received!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, {formData.name}. We are launching WhatsApp to connect you directly with our Ranchi team.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-indigo-600 hover:underline font-semibold"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9835120266"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:outline-none"
                      >
                        <option value="AI Video (₹1,200)">AI Video (₹1,200)</option>
                        <option value="UGC Video (₹1,000)">UGC Video (₹1,000)</option>
                        <option value="Video Editing (₹400)">Video Editing (₹400)</option>
                        <option value="Static Website (₹10,000)">Static Website (₹10,000)</option>
                        <option value="Dynamic Website (₹20,000)">Dynamic Website (₹20,000)</option>
                        <option value="E-commerce Website (₹40,000)">E-commerce Website (₹40,000)</option>
                        <option value="SEO Package (₹15,000)">SEO Package (₹15,000)</option>
                        <option value="Meta Ads Management (₹5,000)">Meta Ads Management (₹5,000)</option>
                        <option value="Social Media (From ₹10,000)">Social Media (From ₹10,000)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project Details / Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your goals, timeline, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry & Connect via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
